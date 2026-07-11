// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudformation_type_activation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCloudformationTypeActivationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudformation_type_activation#id DataAwsccCloudformationTypeActivation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCloudformationTypeActivationLoggingConfig {
}

export function dataAwsccCloudformationTypeActivationLoggingConfigToTerraform(struct?: DataAwsccCloudformationTypeActivationLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudformationTypeActivationLoggingConfigToHclTerraform(struct?: DataAwsccCloudformationTypeActivationLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudformationTypeActivationLoggingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudformationTypeActivationLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudformationTypeActivationLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_role_arn - computed: true, optional: false, required: false
  public get logRoleArn() {
    return this.getStringAttribute('log_role_arn');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudformation_type_activation awscc_cloudformation_type_activation}
*/
export class DataAwsccCloudformationTypeActivation extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudformation_type_activation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCloudformationTypeActivation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCloudformationTypeActivation to import
  * @param importFromId The id of the existing DataAwsccCloudformationTypeActivation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudformation_type_activation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCloudformationTypeActivation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_type_activation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudformation_type_activation awscc_cloudformation_type_activation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudformationTypeActivationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudformationTypeActivationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudformation_type_activation',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.92.0'
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_update - computed: true, optional: false, required: false
  public get autoUpdate() {
    return this.getBooleanAttribute('auto_update');
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
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

  // logging_config - computed: true, optional: false, required: false
  private _loggingConfig = new DataAwsccCloudformationTypeActivationLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }

  // major_version - computed: true, optional: false, required: false
  public get majorVersion() {
    return this.getStringAttribute('major_version');
  }

  // public_type_arn - computed: true, optional: false, required: false
  public get publicTypeArn() {
    return this.getStringAttribute('public_type_arn');
  }

  // publisher_id - computed: true, optional: false, required: false
  public get publisherId() {
    return this.getStringAttribute('publisher_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // type_name_alias - computed: true, optional: false, required: false
  public get typeNameAlias() {
    return this.getStringAttribute('type_name_alias');
  }

  // version_bump - computed: true, optional: false, required: false
  public get versionBump() {
    return this.getStringAttribute('version_bump');
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
