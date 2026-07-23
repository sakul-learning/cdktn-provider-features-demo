// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/healthlake_data_transformation_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccHealthlakeDataTransformationProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/healthlake_data_transformation_profile#id DataAwsccHealthlakeDataTransformationProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId {
}

export function dataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdToTerraform(struct?: DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdToHclTerraform(struct?: DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}
export interface DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping {
}

export function dataAwsccHealthlakeDataTransformationProfileSourceProfileMappingToTerraform(struct?: DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccHealthlakeDataTransformationProfileSourceProfileMappingToHclTerraform(struct?: DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profile_mapping - computed: true, optional: false, required: false
  private _profileMapping = new cdktn.StringMap(this, "profile_mapping");
  public get profileMapping() {
    return this._profileMapping;
  }
}
export interface DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile {
}

export function dataAwsccHealthlakeDataTransformationProfileSourceStarterProfileToTerraform(struct?: DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccHealthlakeDataTransformationProfileSourceStarterProfileToHclTerraform(struct?: DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // starter_profile_name - computed: true, optional: false, required: false
  public get starterProfileName() {
    return this.getStringAttribute('starter_profile_name');
  }
}
export interface DataAwsccHealthlakeDataTransformationProfileSource {
}

export function dataAwsccHealthlakeDataTransformationProfileSourceToTerraform(struct?: DataAwsccHealthlakeDataTransformationProfileSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccHealthlakeDataTransformationProfileSourceToHclTerraform(struct?: DataAwsccHealthlakeDataTransformationProfileSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccHealthlakeDataTransformationProfileSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccHealthlakeDataTransformationProfileSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccHealthlakeDataTransformationProfileSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // existing_versioned_profile_id - computed: true, optional: false, required: false
  private _existingVersionedProfileId = new DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference(this, "existing_versioned_profile_id");
  public get existingVersionedProfileId() {
    return this._existingVersionedProfileId;
  }

  // profile_mapping - computed: true, optional: false, required: false
  private _profileMapping = new DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference(this, "profile_mapping");
  public get profileMapping() {
    return this._profileMapping;
  }

  // starter_profile - computed: true, optional: false, required: false
  private _starterProfile = new DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference(this, "starter_profile");
  public get starterProfile() {
    return this._starterProfile;
  }
}
export interface DataAwsccHealthlakeDataTransformationProfileTags {
}

export function dataAwsccHealthlakeDataTransformationProfileTagsToTerraform(struct?: DataAwsccHealthlakeDataTransformationProfileTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccHealthlakeDataTransformationProfileTagsToHclTerraform(struct?: DataAwsccHealthlakeDataTransformationProfileTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccHealthlakeDataTransformationProfileTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccHealthlakeDataTransformationProfileTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccHealthlakeDataTransformationProfileTags | undefined) {
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

export class DataAwsccHealthlakeDataTransformationProfileTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccHealthlakeDataTransformationProfileTagsOutputReference {
    return new DataAwsccHealthlakeDataTransformationProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/healthlake_data_transformation_profile awscc_healthlake_data_transformation_profile}
*/
export class DataAwsccHealthlakeDataTransformationProfile extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_healthlake_data_transformation_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccHealthlakeDataTransformationProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccHealthlakeDataTransformationProfile to import
  * @param importFromId The id of the existing DataAwsccHealthlakeDataTransformationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/healthlake_data_transformation_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccHealthlakeDataTransformationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_healthlake_data_transformation_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/healthlake_data_transformation_profile awscc_healthlake_data_transformation_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccHealthlakeDataTransformationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccHealthlakeDataTransformationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_healthlake_data_transformation_profile',
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

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // profile_description - computed: true, optional: false, required: false
  public get profileDescription() {
    return this.getStringAttribute('profile_description');
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataAwsccHealthlakeDataTransformationProfileSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // source_format - computed: true, optional: false, required: false
  public get sourceFormat() {
    return this.getStringAttribute('source_format');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccHealthlakeDataTransformationProfileTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // target_format - computed: true, optional: false, required: false
  public get targetFormat() {
    return this.getStringAttribute('target_format');
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
