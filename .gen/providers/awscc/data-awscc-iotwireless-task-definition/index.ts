// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iotwireless_task_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotwirelessTaskDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iotwireless_task_definition#id DataAwsccIotwirelessTaskDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion {
}

export function dataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionToHclTerraform(struct?: DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // station - computed: true, optional: false, required: false
  public get station() {
    return this.getStringAttribute('station');
  }
}
export interface DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion {
}

export function dataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionToHclTerraform(struct?: DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // station - computed: true, optional: false, required: false
  public get station() {
    return this.getStringAttribute('station');
  }
}
export interface DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry {
}

export function dataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryToHclTerraform(struct?: DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_version - computed: true, optional: false, required: false
  private _currentVersion = new DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference(this, "current_version");
  public get currentVersion() {
    return this._currentVersion;
  }

  // update_version - computed: true, optional: false, required: false
  private _updateVersion = new DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference(this, "update_version");
  public get updateVersion() {
    return this._updateVersion;
  }
}
export interface DataAwsccIotwirelessTaskDefinitionTags {
}

export function dataAwsccIotwirelessTaskDefinitionTagsToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessTaskDefinitionTagsToHclTerraform(struct?: DataAwsccIotwirelessTaskDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessTaskDefinitionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotwirelessTaskDefinitionTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessTaskDefinitionTags | undefined) {
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

export class DataAwsccIotwirelessTaskDefinitionTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotwirelessTaskDefinitionTagsOutputReference {
    return new DataAwsccIotwirelessTaskDefinitionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion {
}

export function dataAwsccIotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionToHclTerraform(struct?: DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // station - computed: true, optional: false, required: false
  public get station() {
    return this.getStringAttribute('station');
  }
}
export interface DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion {
}

export function dataAwsccIotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionToHclTerraform(struct?: DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // station - computed: true, optional: false, required: false
  public get station() {
    return this.getStringAttribute('station');
  }
}
export interface DataAwsccIotwirelessTaskDefinitionUpdateLoRaWan {
}

export function dataAwsccIotwirelessTaskDefinitionUpdateLoRaWanToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionUpdateLoRaWan): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessTaskDefinitionUpdateLoRaWanToHclTerraform(struct?: DataAwsccIotwirelessTaskDefinitionUpdateLoRaWan): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotwirelessTaskDefinitionUpdateLoRaWan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessTaskDefinitionUpdateLoRaWan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_version - computed: true, optional: false, required: false
  private _currentVersion = new DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference(this, "current_version");
  public get currentVersion() {
    return this._currentVersion;
  }

  // sig_key_crc - computed: true, optional: false, required: false
  public get sigKeyCrc() {
    return this.getNumberAttribute('sig_key_crc');
  }

  // update_signature - computed: true, optional: false, required: false
  public get updateSignature() {
    return this.getStringAttribute('update_signature');
  }

  // update_version - computed: true, optional: false, required: false
  private _updateVersion = new DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference(this, "update_version");
  public get updateVersion() {
    return this._updateVersion;
  }
}
export interface DataAwsccIotwirelessTaskDefinitionUpdate {
}

export function dataAwsccIotwirelessTaskDefinitionUpdateToTerraform(struct?: DataAwsccIotwirelessTaskDefinitionUpdate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessTaskDefinitionUpdateToHclTerraform(struct?: DataAwsccIotwirelessTaskDefinitionUpdate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessTaskDefinitionUpdateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotwirelessTaskDefinitionUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessTaskDefinitionUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lo_ra_wan - computed: true, optional: false, required: false
  private _loRaWan = new DataAwsccIotwirelessTaskDefinitionUpdateLoRaWanOutputReference(this, "lo_ra_wan");
  public get loRaWan() {
    return this._loRaWan;
  }

  // update_data_role - computed: true, optional: false, required: false
  public get updateDataRole() {
    return this.getStringAttribute('update_data_role');
  }

  // update_data_source - computed: true, optional: false, required: false
  public get updateDataSource() {
    return this.getStringAttribute('update_data_source');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iotwireless_task_definition awscc_iotwireless_task_definition}
*/
export class DataAwsccIotwirelessTaskDefinition extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotwireless_task_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotwirelessTaskDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotwirelessTaskDefinition to import
  * @param importFromId The id of the existing DataAwsccIotwirelessTaskDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iotwireless_task_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotwirelessTaskDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotwireless_task_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/iotwireless_task_definition awscc_iotwireless_task_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotwirelessTaskDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotwirelessTaskDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotwireless_task_definition',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.94.0'
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

  // auto_create_tasks - computed: true, optional: false, required: false
  public get autoCreateTasks() {
    return this.getBooleanAttribute('auto_create_tasks');
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

  // lo_ra_wan_update_gateway_task_entry - computed: true, optional: false, required: false
  private _loRaWanUpdateGatewayTaskEntry = new DataAwsccIotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference(this, "lo_ra_wan_update_gateway_task_entry");
  public get loRaWanUpdateGatewayTaskEntry() {
    return this._loRaWanUpdateGatewayTaskEntry;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotwirelessTaskDefinitionTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // task_definition_id - computed: true, optional: false, required: false
  public get taskDefinitionId() {
    return this.getStringAttribute('task_definition_id');
  }

  // task_definition_type - computed: true, optional: false, required: false
  public get taskDefinitionType() {
    return this.getStringAttribute('task_definition_type');
  }

  // update - computed: true, optional: false, required: false
  private _update = new DataAwsccIotwirelessTaskDefinitionUpdateOutputReference(this, "update");
  public get update() {
    return this._update;
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
