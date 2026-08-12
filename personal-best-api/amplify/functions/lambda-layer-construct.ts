import { Architecture, Code, LayerVersion, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export interface LambdaLayerConstructProps {
  name: string;
  description?: string;
}

export class LambdaLayerConstruct extends Construct {
    public readonly name: string;
    public readonly layer: LayerVersion;
    public readonly description?: string;

    constructor(scope: Construct, id: string, props: LambdaLayerConstructProps) {
      super(scope, id);
      this.name = props.name;
      this.description = props.description;
    

      this.layer = new LayerVersion(this, id, {
        layerVersionName: this.name,
        description: this.description,
        code: Code.fromAsset('./src/lambda-layers/rds-tls-certificate'),
        compatibleRuntimes: [ Runtime.NODEJS_20_X, Runtime.NODEJS_22_X ],
        compatibleArchitectures: [ Architecture.X86_64, Architecture.ARM_64 ],
      })
    }
}