// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/mediapackagev2_origin_endpoint_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMediapackagev2OriginEndpointPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/mediapackagev2_origin_endpoint_policy#id DataAwsccMediapackagev2OriginEndpointPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration {
}

export function dataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cdn_identifier_secret_arns - computed: true, optional: false, required: false
  public get cdnIdentifierSecretArns() {
    return this.getListAttribute('cdn_identifier_secret_arns');
  }

  // secrets_role_arn - computed: true, optional: false, required: false
  public get secretsRoleArn() {
    return this.getStringAttribute('secrets_role_arn');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/mediapackagev2_origin_endpoint_policy awscc_mediapackagev2_origin_endpoint_policy}
*/
export class DataAwsccMediapackagev2OriginEndpointPolicy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediapackagev2_origin_endpoint_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMediapackagev2OriginEndpointPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMediapackagev2OriginEndpointPolicy to import
  * @param importFromId The id of the existing DataAwsccMediapackagev2OriginEndpointPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/mediapackagev2_origin_endpoint_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMediapackagev2OriginEndpointPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediapackagev2_origin_endpoint_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/mediapackagev2_origin_endpoint_policy awscc_mediapackagev2_origin_endpoint_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediapackagev2OriginEndpointPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediapackagev2OriginEndpointPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediapackagev2_origin_endpoint_policy',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.91.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdn_auth_configuration - computed: true, optional: false, required: false
  private _cdnAuthConfiguration = new DataAwsccMediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference(this, "cdn_auth_configuration");
  public get cdnAuthConfiguration() {
    return this._cdnAuthConfiguration;
  }

  // channel_group_name - computed: true, optional: false, required: false
  public get channelGroupName() {
    return this.getStringAttribute('channel_group_name');
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // origin_endpoint_name - computed: true, optional: false, required: false
  public get originEndpointName() {
    return this.getStringAttribute('origin_endpoint_name');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
