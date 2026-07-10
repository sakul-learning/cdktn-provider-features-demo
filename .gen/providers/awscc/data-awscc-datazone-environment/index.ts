// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/datazone_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDatazoneEnvironmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/datazone_environment#id DataAwsccDatazoneEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDatazoneEnvironmentUserParameters {
}

export function dataAwsccDatazoneEnvironmentUserParametersToTerraform(struct?: DataAwsccDatazoneEnvironmentUserParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneEnvironmentUserParametersToHclTerraform(struct?: DataAwsccDatazoneEnvironmentUserParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneEnvironmentUserParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccDatazoneEnvironmentUserParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneEnvironmentUserParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccDatazoneEnvironmentUserParametersList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccDatazoneEnvironmentUserParametersOutputReference {
    return new DataAwsccDatazoneEnvironmentUserParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/datazone_environment awscc_datazone_environment}
*/
export class DataAwsccDatazoneEnvironment extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_datazone_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDatazoneEnvironment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDatazoneEnvironment to import
  * @param importFromId The id of the existing DataAwsccDatazoneEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/datazone_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDatazoneEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/datazone_environment awscc_datazone_environment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDatazoneEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDatazoneEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datazone_environment',
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

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // aws_account_region - computed: true, optional: false, required: false
  public get awsAccountRegion() {
    return this.getStringAttribute('aws_account_region');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // deployment_order - computed: true, optional: false, required: false
  public get deploymentOrder() {
    return this.getNumberAttribute('deployment_order');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_identifier - computed: true, optional: false, required: false
  public get domainIdentifier() {
    return this.getStringAttribute('domain_identifier');
  }

  // environment_account_identifier - computed: true, optional: false, required: false
  public get environmentAccountIdentifier() {
    return this.getStringAttribute('environment_account_identifier');
  }

  // environment_account_region - computed: true, optional: false, required: false
  public get environmentAccountRegion() {
    return this.getStringAttribute('environment_account_region');
  }

  // environment_blueprint_id - computed: true, optional: false, required: false
  public get environmentBlueprintId() {
    return this.getStringAttribute('environment_blueprint_id');
  }

  // environment_blueprint_identifier - computed: true, optional: false, required: false
  public get environmentBlueprintIdentifier() {
    return this.getStringAttribute('environment_blueprint_identifier');
  }

  // environment_configuration_id - computed: true, optional: false, required: false
  public get environmentConfigurationId() {
    return this.getStringAttribute('environment_configuration_id');
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }

  // environment_profile_id - computed: true, optional: false, required: false
  public get environmentProfileId() {
    return this.getStringAttribute('environment_profile_id');
  }

  // environment_profile_identifier - computed: true, optional: false, required: false
  public get environmentProfileIdentifier() {
    return this.getStringAttribute('environment_profile_identifier');
  }

  // environment_role_arn - computed: true, optional: false, required: false
  public get environmentRoleArn() {
    return this.getStringAttribute('environment_role_arn');
  }

  // glossary_terms - computed: true, optional: false, required: false
  public get glossaryTerms() {
    return this.getListAttribute('glossary_terms');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_identifier - computed: true, optional: false, required: false
  public get projectIdentifier() {
    return this.getStringAttribute('project_identifier');
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_parameters - computed: true, optional: false, required: false
  private _userParameters = new DataAwsccDatazoneEnvironmentUserParametersList(this, "user_parameters", false);
  public get userParameters() {
    return this._userParameters;
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
