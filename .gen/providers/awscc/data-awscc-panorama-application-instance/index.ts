// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/panorama_application_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccPanoramaApplicationInstanceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/panorama_application_instance#id DataAwsccPanoramaApplicationInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccPanoramaApplicationInstanceManifestOverridesPayload {
}

export function dataAwsccPanoramaApplicationInstanceManifestOverridesPayloadToTerraform(struct?: DataAwsccPanoramaApplicationInstanceManifestOverridesPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPanoramaApplicationInstanceManifestOverridesPayloadToHclTerraform(struct?: DataAwsccPanoramaApplicationInstanceManifestOverridesPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPanoramaApplicationInstanceManifestOverridesPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPanoramaApplicationInstanceManifestOverridesPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // payload_data - computed: true, optional: false, required: false
  public get payloadData() {
    return this.getStringAttribute('payload_data');
  }
}
export interface DataAwsccPanoramaApplicationInstanceManifestPayload {
}

export function dataAwsccPanoramaApplicationInstanceManifestPayloadToTerraform(struct?: DataAwsccPanoramaApplicationInstanceManifestPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPanoramaApplicationInstanceManifestPayloadToHclTerraform(struct?: DataAwsccPanoramaApplicationInstanceManifestPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPanoramaApplicationInstanceManifestPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPanoramaApplicationInstanceManifestPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // payload_data - computed: true, optional: false, required: false
  public get payloadData() {
    return this.getStringAttribute('payload_data');
  }
}
export interface DataAwsccPanoramaApplicationInstanceTags {
}

export function dataAwsccPanoramaApplicationInstanceTagsToTerraform(struct?: DataAwsccPanoramaApplicationInstanceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPanoramaApplicationInstanceTagsToHclTerraform(struct?: DataAwsccPanoramaApplicationInstanceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPanoramaApplicationInstanceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPanoramaApplicationInstanceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPanoramaApplicationInstanceTags | undefined) {
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

export class DataAwsccPanoramaApplicationInstanceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPanoramaApplicationInstanceTagsOutputReference {
    return new DataAwsccPanoramaApplicationInstanceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/panorama_application_instance awscc_panorama_application_instance}
*/
export class DataAwsccPanoramaApplicationInstance extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_panorama_application_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccPanoramaApplicationInstance resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccPanoramaApplicationInstance to import
  * @param importFromId The id of the existing DataAwsccPanoramaApplicationInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/panorama_application_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccPanoramaApplicationInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_panorama_application_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/panorama_application_instance awscc_panorama_application_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccPanoramaApplicationInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccPanoramaApplicationInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_panorama_application_instance',
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

  // application_instance_id - computed: true, optional: false, required: false
  public get applicationInstanceId() {
    return this.getStringAttribute('application_instance_id');
  }

  // application_instance_id_to_replace - computed: true, optional: false, required: false
  public get applicationInstanceIdToReplace() {
    return this.getStringAttribute('application_instance_id_to_replace');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getNumberAttribute('created_time');
  }

  // default_runtime_context_device - computed: true, optional: false, required: false
  public get defaultRuntimeContextDevice() {
    return this.getStringAttribute('default_runtime_context_device');
  }

  // default_runtime_context_device_name - computed: true, optional: false, required: false
  public get defaultRuntimeContextDeviceName() {
    return this.getStringAttribute('default_runtime_context_device_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // health_status - computed: true, optional: false, required: false
  public get healthStatus() {
    return this.getStringAttribute('health_status');
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

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getNumberAttribute('last_updated_time');
  }

  // manifest_overrides_payload - computed: true, optional: false, required: false
  private _manifestOverridesPayload = new DataAwsccPanoramaApplicationInstanceManifestOverridesPayloadOutputReference(this, "manifest_overrides_payload");
  public get manifestOverridesPayload() {
    return this._manifestOverridesPayload;
  }

  // manifest_payload - computed: true, optional: false, required: false
  private _manifestPayload = new DataAwsccPanoramaApplicationInstanceManifestPayloadOutputReference(this, "manifest_payload");
  public get manifestPayload() {
    return this._manifestPayload;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // runtime_role_arn - computed: true, optional: false, required: false
  public get runtimeRoleArn() {
    return this.getStringAttribute('runtime_role_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_description - computed: true, optional: false, required: false
  public get statusDescription() {
    return this.getStringAttribute('status_description');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccPanoramaApplicationInstanceTagsList(this, "tags", true);
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
