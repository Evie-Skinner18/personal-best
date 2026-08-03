import { ManagedPolicy, PolicyDocument, PolicyStatement, Role, ServicePrincipal } from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";

export interface IamConstructProps {
  environmentName: string;
}

export class IamConstruct extends Construct {
    private role: Role;

    constructor(scope: Construct, id: string, props: IamConstructProps) {
        super(scope, id);
        // 👇 Create ACM Permission Policy
    const describeAcmCertificates = new PolicyDocument({
      statements: [
        new PolicyStatement({
          resources: ['arn:aws:acm:*:*:certificate/*'],
          actions: ['acm:DescribeCertificate'],
        }),
      ],
    });

    // 👇 Create Role
    this.role = new Role(this, 'example-iam-role', {
      assumedBy: new ServicePrincipal('apigateway.amazonaws.com'),
      description: 'An example IAM role in AWS CDK',
      inlinePolicies: {
        DescribeACMCerts: describeAcmCertificates,
      },
      managedPolicies: [
        ManagedPolicy.fromAwsManagedPolicyName(
          'AmazonAPIGatewayInvokeFullAccess',
        ),
      ],
    });
    }
}