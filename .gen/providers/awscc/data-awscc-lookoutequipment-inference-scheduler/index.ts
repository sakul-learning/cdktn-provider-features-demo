// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/lookoutequipment_inference_scheduler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccLookoutequipmentInferenceSchedulerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/lookoutequipment_inference_scheduler#id DataAwsccLookoutequipmentInferenceScheduler#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration {
}

export function dataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationToTerraform(struct?: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationToHclTerraform(struct?: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_timestamp_delimiter - computed: true, optional: false, required: false
  public get componentTimestampDelimiter() {
    return this.getStringAttribute('component_timestamp_delimiter');
  }

  // timestamp_format - computed: true, optional: false, required: false
  public get timestampFormat() {
    return this.getStringAttribute('timestamp_format');
  }
}
export interface DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration {
}

export function dataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationToTerraform(struct?: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationToHclTerraform(struct?: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}
export interface DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration {
}

export function dataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationToTerraform(struct?: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationToHclTerraform(struct?: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inference_input_name_configuration - computed: true, optional: false, required: false
  private _inferenceInputNameConfiguration = new DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference(this, "inference_input_name_configuration");
  public get inferenceInputNameConfiguration() {
    return this._inferenceInputNameConfiguration;
  }

  // input_time_zone_offset - computed: true, optional: false, required: false
  public get inputTimeZoneOffset() {
    return this.getStringAttribute('input_time_zone_offset');
  }

  // s3_input_configuration - computed: true, optional: false, required: false
  private _s3InputConfiguration = new DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference(this, "s3_input_configuration");
  public get s3InputConfiguration() {
    return this._s3InputConfiguration;
  }
}
export interface DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration {
}

export function dataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationToTerraform(struct?: DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationToHclTerraform(struct?: DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}
export interface DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration {
}

export function dataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationToTerraform(struct?: DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationToHclTerraform(struct?: DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // s3_output_configuration - computed: true, optional: false, required: false
  private _s3OutputConfiguration = new DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference(this, "s3_output_configuration");
  public get s3OutputConfiguration() {
    return this._s3OutputConfiguration;
  }
}
export interface DataAwsccLookoutequipmentInferenceSchedulerTags {
}

export function dataAwsccLookoutequipmentInferenceSchedulerTagsToTerraform(struct?: DataAwsccLookoutequipmentInferenceSchedulerTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLookoutequipmentInferenceSchedulerTagsToHclTerraform(struct?: DataAwsccLookoutequipmentInferenceSchedulerTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLookoutequipmentInferenceSchedulerTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLookoutequipmentInferenceSchedulerTags | undefined) {
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

export class DataAwsccLookoutequipmentInferenceSchedulerTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference {
    return new DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/lookoutequipment_inference_scheduler awscc_lookoutequipment_inference_scheduler}
*/
export class DataAwsccLookoutequipmentInferenceScheduler extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lookoutequipment_inference_scheduler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccLookoutequipmentInferenceScheduler resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccLookoutequipmentInferenceScheduler to import
  * @param importFromId The id of the existing DataAwsccLookoutequipmentInferenceScheduler that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/lookoutequipment_inference_scheduler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccLookoutequipmentInferenceScheduler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lookoutequipment_inference_scheduler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/lookoutequipment_inference_scheduler awscc_lookoutequipment_inference_scheduler} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLookoutequipmentInferenceSchedulerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLookoutequipmentInferenceSchedulerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lookoutequipment_inference_scheduler',
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

  // data_delay_offset_in_minutes - computed: true, optional: false, required: false
  public get dataDelayOffsetInMinutes() {
    return this.getNumberAttribute('data_delay_offset_in_minutes');
  }

  // data_input_configuration - computed: true, optional: false, required: false
  private _dataInputConfiguration = new DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference(this, "data_input_configuration");
  public get dataInputConfiguration() {
    return this._dataInputConfiguration;
  }

  // data_output_configuration - computed: true, optional: false, required: false
  private _dataOutputConfiguration = new DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference(this, "data_output_configuration");
  public get dataOutputConfiguration() {
    return this._dataOutputConfiguration;
  }

  // data_upload_frequency - computed: true, optional: false, required: false
  public get dataUploadFrequency() {
    return this.getStringAttribute('data_upload_frequency');
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

  // inference_scheduler_arn - computed: true, optional: false, required: false
  public get inferenceSchedulerArn() {
    return this.getStringAttribute('inference_scheduler_arn');
  }

  // inference_scheduler_name - computed: true, optional: false, required: false
  public get inferenceSchedulerName() {
    return this.getStringAttribute('inference_scheduler_name');
  }

  // model_name - computed: true, optional: false, required: false
  public get modelName() {
    return this.getStringAttribute('model_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // server_side_kms_key_id - computed: true, optional: false, required: false
  public get serverSideKmsKeyId() {
    return this.getStringAttribute('server_side_kms_key_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccLookoutequipmentInferenceSchedulerTagsList(this, "tags", true);
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
