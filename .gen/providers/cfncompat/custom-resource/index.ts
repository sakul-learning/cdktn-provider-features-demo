// https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CustomResourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * CloudFormation-style logical resource id reported in the request event's `LogicalResourceId` field. Typically set by a CDK Terrain synthesis backend to the synthesized CloudFormation logical id; defaults to `"CfncompatCustomResource"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#logical_resource_id CustomResource#logical_resource_id}
  */
  readonly logicalResourceId?: string;
  /**
  * Arbitrary user-defined properties passed to the handler as the request event's `ResourceProperties`. May be an object/map (arbitrarily nested) or omitted entirely. CloudFormation merges `ServiceToken` into this map when delivering it to the handler; this resource replicates that behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#resource_properties CustomResource#resource_properties}
  */
  readonly resourceProperties?: { [key: string]: any };
  /**
  * CloudFormation resource type name reported in the request event's `ResourceType` field. Defaults to `"AWS::CloudFormation::CustomResource"`. May also be set to `Custom::<name>` (matching CloudFormation's convention for named custom resource types), where `<name>` matches `^[A-Za-z0-9_@-]{1,52}$` and the full value is at most 60 characters. Changing this forces replacement: CloudFormation forbids changing a custom resource's type in an update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#resource_type CustomResource#resource_type}
  */
  readonly resourceType?: string;
  /**
  * S3 bucket used for this resource's response transport (the pre-signed PUT URL the handler writes its response to). Falls back to the provider's `custom_resource_bucket` if unset; it is an error at apply time if neither is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#response_bucket CustomResource#response_bucket}
  */
  readonly responseBucket?: string;
  /**
  * Optional S3 key prefix for the response object. The full key is `"<response_key_prefix>cfncompat/<RequestId>.json"` -- include a trailing `/` if you want the prefix to behave like a folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#response_key_prefix CustomResource#response_key_prefix}
  */
  readonly responseKeyPrefix?: string;
  /**
  * Seconds to wait for the handler's response before failing, mirroring CloudFormation's `ServiceTimeout`. Must be between 1 and 3600 (CloudFormation's own range). Defaults to `3600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#service_timeout CustomResource#service_timeout}
  */
  readonly serviceTimeout?: number;
  /**
  * ARN of the Lambda function or SNS topic that implements the custom resource handler (CloudFormation's `ServiceToken`). Must be a Lambda function ARN (`arn:*:lambda:...`, invoked asynchronously) or an SNS topic ARN (`arn:*:sns:...`, published to).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#service_token CustomResource#service_token}
  */
  readonly serviceToken: string;
  /**
  * CloudFormation-style stack identifier reported in the request event's `StackId` field, passed through verbatim. Typically set by a CDK Terrain synthesis backend to a stack identifier; defaults to `"cfncompat/no-stack-id"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#stack_id CustomResource#stack_id}
  */
  readonly stackId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource cfncompat_custom_resource}
*/
export class CustomResource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cfncompat_custom_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CustomResource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomResource to import
  * @param importFromId The id of the existing CustomResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cfncompat_custom_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource cfncompat_custom_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomResourceConfig
  */
  public constructor(scope: Construct, id: string, config: CustomResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'cfncompat_custom_resource',
      terraformGeneratorMetadata: {
        providerName: 'cfncompat',
        providerVersion: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._logicalResourceId = config.logicalResourceId;
    this._resourceProperties = config.resourceProperties;
    this._resourceType = config.resourceType;
    this._responseBucket = config.responseBucket;
    this._responseKeyPrefix = config.responseKeyPrefix;
    this._serviceTimeout = config.serviceTimeout;
    this._serviceToken = config.serviceToken;
    this._stackId = config.stackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new cdktn.AnyMap(this, "data");
  public get data() {
    return this._data;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logical_resource_id - computed: true, optional: true, required: false
  private _logicalResourceId?: string;
  public get logicalResourceId() {
    return this.getStringAttribute('logical_resource_id');
  }
  public set logicalResourceId(value: string) {
    this._logicalResourceId = value;
  }
  public resetLogicalResourceId() {
    this._logicalResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalResourceIdInput() {
    return this._logicalResourceId;
  }

  // physical_resource_id - computed: true, optional: false, required: false
  public get physicalResourceId() {
    return this.getStringAttribute('physical_resource_id');
  }

  // resource_properties - computed: false, optional: true, required: false
  private _resourceProperties?: { [key: string]: any };
  public get resourceProperties() {
    return this.getAnyMapAttribute('resource_properties');
  }
  public set resourceProperties(value: { [key: string]: any }) {
    this._resourceProperties = value;
  }
  public resetResourceProperties() {
    this._resourceProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePropertiesInput() {
    return this._resourceProperties;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string;
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // response_bucket - computed: false, optional: true, required: false
  private _responseBucket?: string;
  public get responseBucket() {
    return this.getStringAttribute('response_bucket');
  }
  public set responseBucket(value: string) {
    this._responseBucket = value;
  }
  public resetResponseBucket() {
    this._responseBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBucketInput() {
    return this._responseBucket;
  }

  // response_key_prefix - computed: false, optional: true, required: false
  private _responseKeyPrefix?: string;
  public get responseKeyPrefix() {
    return this.getStringAttribute('response_key_prefix');
  }
  public set responseKeyPrefix(value: string) {
    this._responseKeyPrefix = value;
  }
  public resetResponseKeyPrefix() {
    this._responseKeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseKeyPrefixInput() {
    return this._responseKeyPrefix;
  }

  // service_timeout - computed: true, optional: true, required: false
  private _serviceTimeout?: number;
  public get serviceTimeout() {
    return this.getNumberAttribute('service_timeout');
  }
  public set serviceTimeout(value: number) {
    this._serviceTimeout = value;
  }
  public resetServiceTimeout() {
    this._serviceTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTimeoutInput() {
    return this._serviceTimeout;
  }

  // service_token - computed: false, optional: false, required: true
  private _serviceToken?: string;
  public get serviceToken() {
    return this.getStringAttribute('service_token');
  }
  public set serviceToken(value: string) {
    this._serviceToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTokenInput() {
    return this._serviceToken;
  }

  // stack_id - computed: true, optional: true, required: false
  private _stackId?: string;
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  public resetStackId() {
    this._stackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      logical_resource_id: cdktn.stringToTerraform(this._logicalResourceId),
      resource_properties: cdktn.hashMapper(cdktn.anyToTerraform)(this._resourceProperties),
      resource_type: cdktn.stringToTerraform(this._resourceType),
      response_bucket: cdktn.stringToTerraform(this._responseBucket),
      response_key_prefix: cdktn.stringToTerraform(this._responseKeyPrefix),
      service_timeout: cdktn.numberToTerraform(this._serviceTimeout),
      service_token: cdktn.stringToTerraform(this._serviceToken),
      stack_id: cdktn.stringToTerraform(this._stackId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      logical_resource_id: {
        value: cdktn.stringToHclTerraform(this._logicalResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_properties: {
        value: cdktn.hashMapperHcl(cdktn.anyToHclTerraform)(this._resourceProperties),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      resource_type: {
        value: cdktn.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_bucket: {
        value: cdktn.stringToHclTerraform(this._responseBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_key_prefix: {
        value: cdktn.stringToHclTerraform(this._responseKeyPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_timeout: {
        value: cdktn.numberToHclTerraform(this._serviceTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_token: {
        value: cdktn.stringToHclTerraform(this._serviceToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktn.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
