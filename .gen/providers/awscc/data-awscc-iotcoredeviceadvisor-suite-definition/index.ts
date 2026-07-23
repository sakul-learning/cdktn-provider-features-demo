// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotcoredeviceadvisor_suite_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotcoredeviceadvisor_suite_definition#id DataAwsccIotcoredeviceadvisorSuiteDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices {
}

export function dataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesToTerraform(struct?: DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesToHclTerraform(struct?: DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // thing_arn - computed: true, optional: false, required: false
  public get thingArn() {
    return this.getStringAttribute('thing_arn');
  }
}

export class DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference {
    return new DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration {
}

export function dataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationToTerraform(struct?: DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationToHclTerraform(struct?: DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_permission_role_arn - computed: true, optional: false, required: false
  public get devicePermissionRoleArn() {
    return this.getStringAttribute('device_permission_role_arn');
  }

  // devices - computed: true, optional: false, required: false
  private _devices = new DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }

  // intended_for_qualification - computed: true, optional: false, required: false
  public get intendedForQualification() {
    return this.getBooleanAttribute('intended_for_qualification');
  }

  // root_group - computed: true, optional: false, required: false
  public get rootGroup() {
    return this.getStringAttribute('root_group');
  }

  // suite_definition_name - computed: true, optional: false, required: false
  public get suiteDefinitionName() {
    return this.getStringAttribute('suite_definition_name');
  }
}
export interface DataAwsccIotcoredeviceadvisorSuiteDefinitionTags {
}

export function dataAwsccIotcoredeviceadvisorSuiteDefinitionTagsToTerraform(struct?: DataAwsccIotcoredeviceadvisorSuiteDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotcoredeviceadvisorSuiteDefinitionTagsToHclTerraform(struct?: DataAwsccIotcoredeviceadvisorSuiteDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotcoredeviceadvisorSuiteDefinitionTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotcoredeviceadvisorSuiteDefinitionTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference {
    return new DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotcoredeviceadvisor_suite_definition awscc_iotcoredeviceadvisor_suite_definition}
*/
export class DataAwsccIotcoredeviceadvisorSuiteDefinition extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotcoredeviceadvisor_suite_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotcoredeviceadvisorSuiteDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotcoredeviceadvisorSuiteDefinition to import
  * @param importFromId The id of the existing DataAwsccIotcoredeviceadvisorSuiteDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotcoredeviceadvisor_suite_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotcoredeviceadvisorSuiteDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotcoredeviceadvisor_suite_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotcoredeviceadvisor_suite_definition awscc_iotcoredeviceadvisor_suite_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotcoredeviceadvisor_suite_definition',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
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

  // suite_definition_arn - computed: true, optional: false, required: false
  public get suiteDefinitionArn() {
    return this.getStringAttribute('suite_definition_arn');
  }

  // suite_definition_configuration - computed: true, optional: false, required: false
  private _suiteDefinitionConfiguration = new DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference(this, "suite_definition_configuration");
  public get suiteDefinitionConfiguration() {
    return this._suiteDefinitionConfiguration;
  }

  // suite_definition_id - computed: true, optional: false, required: false
  public get suiteDefinitionId() {
    return this.getStringAttribute('suite_definition_id');
  }

  // suite_definition_version - computed: true, optional: false, required: false
  public get suiteDefinitionVersion() {
    return this.getStringAttribute('suite_definition_version');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
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
