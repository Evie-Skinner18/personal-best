import { Construct } from 'constructs';
import { Duration, RemovalPolicy } from 'aws-cdk-lib';
import { 
  DatabaseInstance, 
  DatabaseInstanceEngine, 
  PostgresEngineVersion,
  Credentials,
  SubnetGroup,
  ParameterGroup
} from 'aws-cdk-lib/aws-rds';
import { 
  Vpc, 
  SubnetType, 
  SecurityGroup, 
  Port,
  IpAddresses,
  InstanceType,
  InstanceClass,
  InstanceSize
} from 'aws-cdk-lib/aws-ec2';
import { Secret } from 'aws-cdk-lib/aws-secretsmanager';

export interface RdsConstructProps {
  /** The VPC to deploy the RDS instance in */
  vpc?: Vpc;
  /** The environment name (dev, staging, prod) */
  environmentName: string;
}

export class RdsConstruct extends Construct {
  public readonly instance: DatabaseInstance;
  public readonly secret: Secret;
  public readonly vpc: Vpc;

  constructor(scope: Construct, id: string, props: RdsConstructProps) {
    super(scope, id);

    // Create VPC if not provided
    this.vpc = props.vpc || new Vpc(this, 'PersonalBestVpc', {
      maxAzs: 2,
      ipAddresses: IpAddresses.cidr('10.0.0.0/16'),
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'PublicSubnet',
          subnetType: SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: 'PrivateSubnet',
          subnetType: SubnetType.PRIVATE_WITH_EGRESS,
        },
        {
          cidrMask: 24,
          name: 'DatabaseSubnet',
          subnetType: SubnetType.PRIVATE_ISOLATED,
        },
      ],
    });

    // Create security group for RDS
    const databaseSecurityGroup = new SecurityGroup(this, 'DatabaseSecurityGroup', {
      vpc: this.vpc,
      description: 'Security group for Personal Best RDS instance',
      allowAllOutbound: false,
    });

    databaseSecurityGroup.addIngressRule(
      databaseSecurityGroup,
      Port.tcp(5432),
      'Allow PostgreSQL connections from the DB security group'
    );

    // Create database credentials
    // to-do hide username in env var
    this.secret = new Secret(this, 'DatabaseCredentials', {
      secretName: `personal-best-${props.environmentName}-db-credentials`,
      generateSecretString: {
        secretStringTemplate: JSON.stringify({ username: 'postgres' }),
        generateStringKey: 'password',
        excludeCharacters: '"@/\\\'',
      },
    });

    // Create subnet group for RDS
    const subnetGroup = new SubnetGroup(this, 'DatabaseSubnetGroup', {
      vpc: this.vpc,
      description: 'Subnet group for Personal Best RDS instance',
      subnetGroupName: `personal-best-${props.environmentName}-subnet-group`,
      vpcSubnets: {
        subnetType: SubnetType.PRIVATE_ISOLATED,
      },
    });

    // Create parameter group for PostgreSQL optimization
    const parameterGroup = new ParameterGroup(this, 'DatabaseParameterGroup', {
      engine: DatabaseInstanceEngine.postgres({
        version: PostgresEngineVersion.VER_15_12,
      }),
      parameters: {
        'shared_preload_libraries': 'pg_stat_statements',
        'log_statement': 'all',
        'log_min_duration_statement': '1000',
      },
    });

    // Create RDS instance
    this.instance = new DatabaseInstance(this, 'Database', {
      engine: DatabaseInstanceEngine.postgres({
        version: PostgresEngineVersion.VER_15_15,
      }),
      instanceType: props.environmentName === 'prod' ? 
        InstanceType.of(InstanceClass.T3, InstanceSize.SMALL) : 
        InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
      credentials: Credentials.fromSecret(this.secret),
      vpc: this.vpc,
      securityGroups: [databaseSecurityGroup],
      subnetGroup,
      parameterGroup,
      databaseName: 'personalbest',
      port: 5432,
      allocatedStorage: props.environmentName === 'prod' ? 100 : 20,
      storageEncrypted: true,
      multiAz: props.environmentName === 'prod',
      deletionProtection: props.environmentName === 'prod',
      removalPolicy: props.environmentName === 'prod' ? 
        RemovalPolicy.RETAIN : RemovalPolicy.DESTROY,
      backupRetention: props.environmentName === 'prod' ? 
        Duration.days(7) : Duration.days(1),
      monitoringInterval: Duration.seconds(60),
      enablePerformanceInsights: true,
    });
  }

  /**
   * Get the database connection parameters for Lambda functions
   */
  public getConnectionParams() {
    return {
      host: this.instance.instanceEndpoint.hostname,
      port: this.instance.instanceEndpoint.port,
      database: 'personalbest',
      secretArn: this.secret.secretArn,
    };
  }
}