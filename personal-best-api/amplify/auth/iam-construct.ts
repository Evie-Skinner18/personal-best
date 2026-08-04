import { ManagedPolicy, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export interface IamConstructProps {
  environmentName: string;
}

export class IamConstruct extends Construct {
    public readonly role: Role;

    constructor(scope: Construct, id: string, props: IamConstructProps) {
      super(scope, id);

      const permissionToWriteLogsPolicy = ManagedPolicy.fromAwsManagedPolicyName(
            'service-role/AWSAppSyncPushToCloudWatchLogs',
          );

      this.role = new Role(this, 'personal-best', {
        assumedBy: new ServicePrincipal('appsync.amazonaws.com'),
        description: 'IAM role to allow the personal-best appsync api to write logs to CloudWatch',
        managedPolicies: [
          permissionToWriteLogsPolicy
        ],
      });
    }
}