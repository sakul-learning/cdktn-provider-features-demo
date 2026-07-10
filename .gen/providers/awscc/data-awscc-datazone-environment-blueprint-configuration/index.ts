// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/datazone_environment_blueprint_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/datazone_environment_blueprint_configuration#id DataAwsccDatazoneEnvironmentBlueprintConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration {
}

export function dataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationToTerraform(struct?: DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationToHclTerraform(struct?: DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location_registration_exclude_s3_locations - computed: true, optional: false, required: false
  public get locationRegistrationExcludeS3Locations() {
    return this.getListAttribute('location_registration_exclude_s3_locations');
  }

  // location_registration_role - computed: true, optional: false, required: false
  public get locationRegistrationRole() {
    return this.getStringAttribute('location_registration_role');
  }
}
export interface DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations {
}

export function dataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsToTerraform(struct?: DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsToHclTerraform(struct?: DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lake_formation_configuration - computed: true, optional: false, required: false
  private _lakeFormationConfiguration = new DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference(this, "lake_formation_configuration");
  public get lakeFormationConfiguration() {
    return this._lakeFormationConfiguration;
  }
}

export class DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference {
    return new DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters {
}

export function dataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersToTerraform(struct?: DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersToHclTerraform(struct?: DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktn.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference {
    return new DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/datazone_environment_blueprint_configuration awscc_datazone_environment_blueprint_configuration}
*/
export class DataAwsccDatazoneEnvironmentBlueprintConfiguration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_datazone_environment_blueprint_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDatazoneEnvironmentBlueprintConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDatazoneEnvironmentBlueprintConfiguration to import
  * @param importFromId The id of the existing DataAwsccDatazoneEnvironmentBlueprintConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/datazone_environment_blueprint_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDatazoneEnvironmentBlueprintConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_environment_blueprint_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/datazone_environment_blueprint_configuration awscc_datazone_environment_blueprint_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datazone_environment_blueprint_configuration',
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_identifier - computed: true, optional: false, required: false
  public get domainIdentifier() {
    return this.getStringAttribute('domain_identifier');
  }

  // enabled_regions - computed: true, optional: false, required: false
  public get enabledRegions() {
    return this.getListAttribute('enabled_regions');
  }

  // environment_blueprint_id - computed: true, optional: false, required: false
  public get environmentBlueprintId() {
    return this.getStringAttribute('environment_blueprint_id');
  }

  // environment_blueprint_identifier - computed: true, optional: false, required: false
  public get environmentBlueprintIdentifier() {
    return this.getStringAttribute('environment_blueprint_identifier');
  }

  // environment_role_permission_boundary - computed: true, optional: false, required: false
  public get environmentRolePermissionBoundary() {
    return this.getStringAttribute('environment_role_permission_boundary');
  }

  // global_parameters - computed: true, optional: false, required: false
  private _globalParameters = new cdktn.StringMap(this, "global_parameters");
  public get globalParameters() {
    return this._globalParameters;
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

  // manage_access_role_arn - computed: true, optional: false, required: false
  public get manageAccessRoleArn() {
    return this.getStringAttribute('manage_access_role_arn');
  }

  // provisioning_configurations - computed: true, optional: false, required: false
  private _provisioningConfigurations = new DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList(this, "provisioning_configurations", false);
  public get provisioningConfigurations() {
    return this._provisioningConfigurations;
  }

  // provisioning_role_arn - computed: true, optional: false, required: false
  public get provisioningRoleArn() {
    return this.getStringAttribute('provisioning_role_arn');
  }

  // regional_parameters - computed: true, optional: false, required: false
  private _regionalParameters = new DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList(this, "regional_parameters", true);
  public get regionalParameters() {
    return this._regionalParameters;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
