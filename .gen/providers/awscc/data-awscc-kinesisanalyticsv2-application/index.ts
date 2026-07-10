// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/kinesisanalyticsv2_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccKinesisanalyticsv2ApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/kinesisanalyticsv2_application#id DataAwsccKinesisanalyticsv2Application#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // file_key - computed: true, optional: false, required: false
  public get fileKey() {
    return this.getStringAttribute('file_key');
  }

  // object_version - computed: true, optional: false, required: false
  public get objectVersion() {
    return this.getStringAttribute('object_version');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_content_location - computed: true, optional: false, required: false
  private _s3ContentLocation = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference(this, "s3_content_location");
  public get s3ContentLocation() {
    return this._s3ContentLocation;
  }

  // text_content - computed: true, optional: false, required: false
  public get textContent() {
    return this.getStringAttribute('text_content');
  }

  // zip_file_content - computed: true, optional: false, required: false
  public get zipFileContent() {
    return this.getStringAttribute('zip_file_content');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code_content - computed: true, optional: false, required: false
  private _codeContent = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference(this, "code_content");
  public get codeContent() {
    return this._codeContent;
  }

  // code_content_type - computed: true, optional: false, required: false
  public get codeContentType() {
    return this.getStringAttribute('code_content_type');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // snapshots_enabled - computed: true, optional: false, required: false
  public get snapshotsEnabled() {
    return this.getBooleanAttribute('snapshots_enabled');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rollback_enabled - computed: true, optional: false, required: false
  public get rollbackEnabled() {
    return this.getBooleanAttribute('rollback_enabled');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property_group_id - computed: true, optional: false, required: false
  public get propertyGroupId() {
    return this.getStringAttribute('property_group_id');
  }

  // property_map - computed: true, optional: false, required: false
  private _propertyMap = new cdktn.StringMap(this, "property_map");
  public get propertyMap() {
    return this._propertyMap;
  }
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference {
    return new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property_groups - computed: true, optional: false, required: false
  private _propertyGroups = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList(this, "property_groups", false);
  public get propertyGroups() {
    return this._propertyGroups;
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // checkpoint_interval - computed: true, optional: false, required: false
  public get checkpointInterval() {
    return this.getNumberAttribute('checkpoint_interval');
  }

  // checkpointing_enabled - computed: true, optional: false, required: false
  public get checkpointingEnabled() {
    return this.getBooleanAttribute('checkpointing_enabled');
  }

  // configuration_type - computed: true, optional: false, required: false
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
  }

  // min_pause_between_checkpoints - computed: true, optional: false, required: false
  public get minPauseBetweenCheckpoints() {
    return this.getNumberAttribute('min_pause_between_checkpoints');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration_type - computed: true, optional: false, required: false
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }

  // metrics_level - computed: true, optional: false, required: false
  public get metricsLevel() {
    return this.getStringAttribute('metrics_level');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_scaling_enabled - computed: true, optional: false, required: false
  public get autoScalingEnabled() {
    return this.getBooleanAttribute('auto_scaling_enabled');
  }

  // configuration_type - computed: true, optional: false, required: false
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
  }

  // parallelism - computed: true, optional: false, required: false
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }

  // parallelism_per_kpu - computed: true, optional: false, required: false
  public get parallelismPerKpu() {
    return this.getNumberAttribute('parallelism_per_kpu');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // checkpoint_configuration - computed: true, optional: false, required: false
  private _checkpointConfiguration = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference(this, "checkpoint_configuration");
  public get checkpointConfiguration() {
    return this._checkpointConfiguration;
  }

  // monitoring_configuration - computed: true, optional: false, required: false
  private _monitoringConfiguration = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference(this, "monitoring_configuration");
  public get monitoringConfiguration() {
    return this._monitoringConfiguration;
  }

  // parallelism_configuration - computed: true, optional: false, required: false
  private _parallelismConfiguration = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference(this, "parallelism_configuration");
  public get parallelismConfiguration() {
    return this._parallelismConfiguration;
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_lambda_processor - computed: true, optional: false, required: false
  private _inputLambdaProcessor = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference(this, "input_lambda_processor");
  public get inputLambdaProcessor() {
    return this._inputLambdaProcessor;
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mapping - computed: true, optional: false, required: false
  public get mapping() {
    return this.getStringAttribute('mapping');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sql_type - computed: true, optional: false, required: false
  public get sqlType() {
    return this.getStringAttribute('sql_type');
  }
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference {
    return new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // record_column_delimiter - computed: true, optional: false, required: false
  public get recordColumnDelimiter() {
    return this.getStringAttribute('record_column_delimiter');
  }

  // record_row_delimiter - computed: true, optional: false, required: false
  public get recordRowDelimiter() {
    return this.getStringAttribute('record_row_delimiter');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // record_row_path - computed: true, optional: false, required: false
  public get recordRowPath() {
    return this.getStringAttribute('record_row_path');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // csv_mapping_parameters - computed: true, optional: false, required: false
  private _csvMappingParameters = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference(this, "csv_mapping_parameters");
  public get csvMappingParameters() {
    return this._csvMappingParameters;
  }

  // json_mapping_parameters - computed: true, optional: false, required: false
  private _jsonMappingParameters = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference(this, "json_mapping_parameters");
  public get jsonMappingParameters() {
    return this._jsonMappingParameters;
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mapping_parameters - computed: true, optional: false, required: false
  private _mappingParameters = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference(this, "mapping_parameters");
  public get mappingParameters() {
    return this._mappingParameters;
  }

  // record_format_type - computed: true, optional: false, required: false
  public get recordFormatType() {
    return this.getStringAttribute('record_format_type');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // record_columns - computed: true, optional: false, required: false
  private _recordColumns = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList(this, "record_columns", false);
  public get recordColumns() {
    return this._recordColumns;
  }

  // record_encoding - computed: true, optional: false, required: false
  public get recordEncoding() {
    return this.getStringAttribute('record_encoding');
  }

  // record_format - computed: true, optional: false, required: false
  private _recordFormat = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference(this, "record_format");
  public get recordFormat() {
    return this._recordFormat;
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_parallelism - computed: true, optional: false, required: false
  private _inputParallelism = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference(this, "input_parallelism");
  public get inputParallelism() {
    return this._inputParallelism;
  }

  // input_processing_configuration - computed: true, optional: false, required: false
  private _inputProcessingConfiguration = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference(this, "input_processing_configuration");
  public get inputProcessingConfiguration() {
    return this._inputProcessingConfiguration;
  }

  // input_schema - computed: true, optional: false, required: false
  private _inputSchema = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference(this, "input_schema");
  public get inputSchema() {
    return this._inputSchema;
  }

  // kinesis_firehose_input - computed: true, optional: false, required: false
  private _kinesisFirehoseInput = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference(this, "kinesis_firehose_input");
  public get kinesisFirehoseInput() {
    return this._kinesisFirehoseInput;
  }

  // kinesis_streams_input - computed: true, optional: false, required: false
  private _kinesisStreamsInput = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference(this, "kinesis_streams_input");
  public get kinesisStreamsInput() {
    return this._kinesisStreamsInput;
  }

  // name_prefix - computed: true, optional: false, required: false
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference {
    return new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inputs - computed: true, optional: false, required: false
  private _inputs = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList(this, "inputs", false);
  public get inputs() {
    return this._inputs;
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference {
    return new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_arn - computed: true, optional: false, required: false
  public get databaseArn() {
    return this.getStringAttribute('database_arn');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // glue_data_catalog_configuration - computed: true, optional: false, required: false
  private _glueDataCatalogConfiguration = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference(this, "glue_data_catalog_configuration");
  public get glueDataCatalogConfiguration() {
    return this._glueDataCatalogConfiguration;
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // artifact_id - computed: true, optional: false, required: false
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // file_key - computed: true, optional: false, required: false
  public get fileKey() {
    return this.getStringAttribute('file_key');
  }

  // object_version - computed: true, optional: false, required: false
  public get objectVersion() {
    return this.getStringAttribute('object_version');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // artifact_type - computed: true, optional: false, required: false
  public get artifactType() {
    return this.getStringAttribute('artifact_type');
  }

  // maven_reference - computed: true, optional: false, required: false
  private _mavenReference = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference(this, "maven_reference");
  public get mavenReference() {
    return this._mavenReference;
  }

  // s3_content_location - computed: true, optional: false, required: false
  private _s3ContentLocation = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference(this, "s3_content_location");
  public get s3ContentLocation() {
    return this._s3ContentLocation;
  }
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference {
    return new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_path - computed: true, optional: false, required: false
  public get basePath() {
    return this.getStringAttribute('base_path');
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_content_location - computed: true, optional: false, required: false
  private _s3ContentLocation = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference(this, "s3_content_location");
  public get s3ContentLocation() {
    return this._s3ContentLocation;
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog_configuration - computed: true, optional: false, required: false
  private _catalogConfiguration = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference(this, "catalog_configuration");
  public get catalogConfiguration() {
    return this._catalogConfiguration;
  }

  // custom_artifacts_configuration - computed: true, optional: false, required: false
  private _customArtifactsConfiguration = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList(this, "custom_artifacts_configuration", false);
  public get customArtifactsConfiguration() {
    return this._customArtifactsConfiguration;
  }

  // deploy_as_application_configuration - computed: true, optional: false, required: false
  private _deployAsApplicationConfiguration = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference(this, "deploy_as_application_configuration");
  public get deployAsApplicationConfiguration() {
    return this._deployAsApplicationConfiguration;
  }

  // monitoring_configuration - computed: true, optional: false, required: false
  private _monitoringConfiguration = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference(this, "monitoring_configuration");
  public get monitoringConfiguration() {
    return this._monitoringConfiguration;
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_code_configuration - computed: true, optional: false, required: false
  private _applicationCodeConfiguration = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference(this, "application_code_configuration");
  public get applicationCodeConfiguration() {
    return this._applicationCodeConfiguration;
  }

  // application_encryption_configuration - computed: true, optional: false, required: false
  private _applicationEncryptionConfiguration = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference(this, "application_encryption_configuration");
  public get applicationEncryptionConfiguration() {
    return this._applicationEncryptionConfiguration;
  }

  // application_snapshot_configuration - computed: true, optional: false, required: false
  private _applicationSnapshotConfiguration = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference(this, "application_snapshot_configuration");
  public get applicationSnapshotConfiguration() {
    return this._applicationSnapshotConfiguration;
  }

  // application_system_rollback_configuration - computed: true, optional: false, required: false
  private _applicationSystemRollbackConfiguration = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference(this, "application_system_rollback_configuration");
  public get applicationSystemRollbackConfiguration() {
    return this._applicationSystemRollbackConfiguration;
  }

  // environment_properties - computed: true, optional: false, required: false
  private _environmentProperties = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference(this, "environment_properties");
  public get environmentProperties() {
    return this._environmentProperties;
  }

  // flink_application_configuration - computed: true, optional: false, required: false
  private _flinkApplicationConfiguration = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference(this, "flink_application_configuration");
  public get flinkApplicationConfiguration() {
    return this._flinkApplicationConfiguration;
  }

  // sql_application_configuration - computed: true, optional: false, required: false
  private _sqlApplicationConfiguration = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference(this, "sql_application_configuration");
  public get sqlApplicationConfiguration() {
    return this._sqlApplicationConfiguration;
  }

  // vpc_configurations - computed: true, optional: false, required: false
  private _vpcConfigurations = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList(this, "vpc_configurations", false);
  public get vpcConfigurations() {
    return this._vpcConfigurations;
  }

  // zeppelin_application_configuration - computed: true, optional: false, required: false
  private _zeppelinApplicationConfiguration = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference(this, "zeppelin_application_configuration");
  public get zeppelinApplicationConfiguration() {
    return this._zeppelinApplicationConfiguration;
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_maintenance_window_start_time - computed: true, optional: false, required: false
  public get applicationMaintenanceWindowStartTime() {
    return this.getStringAttribute('application_maintenance_window_start_time');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_restore_type - computed: true, optional: false, required: false
  public get applicationRestoreType() {
    return this.getStringAttribute('application_restore_type');
  }

  // snapshot_name - computed: true, optional: false, required: false
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_non_restored_state - computed: true, optional: false, required: false
  public get allowNonRestoredState() {
    return this.getBooleanAttribute('allow_non_restored_state');
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationRunConfiguration {
}

export function dataAwsccKinesisanalyticsv2ApplicationRunConfigurationToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationRunConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationRunConfigurationToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationRunConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationRunConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationRunConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_restore_configuration - computed: true, optional: false, required: false
  private _applicationRestoreConfiguration = new DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference(this, "application_restore_configuration");
  public get applicationRestoreConfiguration() {
    return this._applicationRestoreConfiguration;
  }

  // flink_run_configuration - computed: true, optional: false, required: false
  private _flinkRunConfiguration = new DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference(this, "flink_run_configuration");
  public get flinkRunConfiguration() {
    return this._flinkRunConfiguration;
  }
}
export interface DataAwsccKinesisanalyticsv2ApplicationTags {
}

export function dataAwsccKinesisanalyticsv2ApplicationTagsToTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKinesisanalyticsv2ApplicationTagsToHclTerraform(struct?: DataAwsccKinesisanalyticsv2ApplicationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKinesisanalyticsv2ApplicationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKinesisanalyticsv2ApplicationTags | undefined) {
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

export class DataAwsccKinesisanalyticsv2ApplicationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference {
    return new DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/kinesisanalyticsv2_application awscc_kinesisanalyticsv2_application}
*/
export class DataAwsccKinesisanalyticsv2Application extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_kinesisanalyticsv2_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccKinesisanalyticsv2Application resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccKinesisanalyticsv2Application to import
  * @param importFromId The id of the existing DataAwsccKinesisanalyticsv2Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/kinesisanalyticsv2_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccKinesisanalyticsv2Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_kinesisanalyticsv2_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/kinesisanalyticsv2_application awscc_kinesisanalyticsv2_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccKinesisanalyticsv2ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccKinesisanalyticsv2ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_kinesisanalyticsv2_application',
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

  // application_configuration - computed: true, optional: false, required: false
  private _applicationConfiguration = new DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference(this, "application_configuration");
  public get applicationConfiguration() {
    return this._applicationConfiguration;
  }

  // application_description - computed: true, optional: false, required: false
  public get applicationDescription() {
    return this.getStringAttribute('application_description');
  }

  // application_maintenance_configuration - computed: true, optional: false, required: false
  private _applicationMaintenanceConfiguration = new DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference(this, "application_maintenance_configuration");
  public get applicationMaintenanceConfiguration() {
    return this._applicationMaintenanceConfiguration;
  }

  // application_mode - computed: true, optional: false, required: false
  public get applicationMode() {
    return this.getStringAttribute('application_mode');
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
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

  // run_configuration - computed: true, optional: false, required: false
  private _runConfiguration = new DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference(this, "run_configuration");
  public get runConfiguration() {
    return this._runConfiguration;
  }

  // runtime_environment - computed: true, optional: false, required: false
  public get runtimeEnvironment() {
    return this.getStringAttribute('runtime_environment');
  }

  // service_execution_role - computed: true, optional: false, required: false
  public get serviceExecutionRole() {
    return this.getStringAttribute('service_execution_role');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccKinesisanalyticsv2ApplicationTagsList(this, "tags", false);
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
