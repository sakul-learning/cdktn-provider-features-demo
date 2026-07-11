// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/transfer_workflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccTransferWorkflowConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/transfer_workflow#id DataAwsccTransferWorkflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation {
}

export function dataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation | undefined) {
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation {
}

export function dataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationToTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationToHclTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_file_location - computed: true, optional: false, required: false
  private _s3FileLocation = new DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference(this, "s3_file_location");
  public get s3FileLocation() {
    return this._s3FileLocation;
  }
}
export interface DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetails {
}

export function dataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsToTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsToHclTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_file_location - computed: true, optional: false, required: false
  private _destinationFileLocation = new DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference(this, "destination_file_location");
  public get destinationFileLocation() {
    return this._destinationFileLocation;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // overwrite_existing - computed: true, optional: false, required: false
  public get overwriteExisting() {
    return this.getStringAttribute('overwrite_existing');
  }

  // source_file_location - computed: true, optional: false, required: false
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
}
export interface DataAwsccTransferWorkflowOnExceptionStepsCustomStepDetails {
}

export function dataAwsccTransferWorkflowOnExceptionStepsCustomStepDetailsToTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsCustomStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowOnExceptionStepsCustomStepDetailsToHclTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsCustomStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowOnExceptionStepsCustomStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowOnExceptionStepsCustomStepDetails | undefined) {
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

  // source_file_location - computed: true, optional: false, required: false
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export interface DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation {
}

export function dataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToHclTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export interface DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation {
}

export function dataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | undefined) {
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation {
}

export function dataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationToTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationToHclTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // efs_file_location - computed: true, optional: false, required: false
  private _efsFileLocation = new DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference(this, "efs_file_location");
  public get efsFileLocation() {
    return this._efsFileLocation;
  }

  // s3_file_location - computed: true, optional: false, required: false
  private _s3FileLocation = new DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference(this, "s3_file_location");
  public get s3FileLocation() {
    return this._s3FileLocation;
  }
}
export interface DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetails {
}

export function dataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsToTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsToHclTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_file_location - computed: true, optional: false, required: false
  private _destinationFileLocation = new DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference(this, "destination_file_location");
  public get destinationFileLocation() {
    return this._destinationFileLocation;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // overwrite_existing - computed: true, optional: false, required: false
  public get overwriteExisting() {
    return this.getStringAttribute('overwrite_existing');
  }

  // source_file_location - computed: true, optional: false, required: false
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccTransferWorkflowOnExceptionStepsDeleteStepDetails {
}

export function dataAwsccTransferWorkflowOnExceptionStepsDeleteStepDetailsToTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsDeleteStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowOnExceptionStepsDeleteStepDetailsToHclTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsDeleteStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowOnExceptionStepsDeleteStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowOnExceptionStepsDeleteStepDetails | undefined) {
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

  // source_file_location - computed: true, optional: false, required: false
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
}
export interface DataAwsccTransferWorkflowOnExceptionStepsTagStepDetailsTags {
}

export function dataAwsccTransferWorkflowOnExceptionStepsTagStepDetailsTagsToTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsTagStepDetailsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowOnExceptionStepsTagStepDetailsTagsToHclTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsTagStepDetailsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccTransferWorkflowOnExceptionStepsTagStepDetailsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowOnExceptionStepsTagStepDetailsTags | undefined) {
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

export class DataAwsccTransferWorkflowOnExceptionStepsTagStepDetailsTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccTransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference {
    return new DataAwsccTransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccTransferWorkflowOnExceptionStepsTagStepDetails {
}

export function dataAwsccTransferWorkflowOnExceptionStepsTagStepDetailsToTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsTagStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowOnExceptionStepsTagStepDetailsToHclTerraform(struct?: DataAwsccTransferWorkflowOnExceptionStepsTagStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowOnExceptionStepsTagStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowOnExceptionStepsTagStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowOnExceptionStepsTagStepDetails | undefined) {
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

  // source_file_location - computed: true, optional: false, required: false
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccTransferWorkflowOnExceptionStepsTagStepDetailsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}
export interface DataAwsccTransferWorkflowOnExceptionSteps {
}

export function dataAwsccTransferWorkflowOnExceptionStepsToTerraform(struct?: DataAwsccTransferWorkflowOnExceptionSteps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowOnExceptionStepsToHclTerraform(struct?: DataAwsccTransferWorkflowOnExceptionSteps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowOnExceptionStepsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccTransferWorkflowOnExceptionSteps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowOnExceptionSteps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // copy_step_details - computed: true, optional: false, required: false
  private _copyStepDetails = new DataAwsccTransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference(this, "copy_step_details");
  public get copyStepDetails() {
    return this._copyStepDetails;
  }

  // custom_step_details - computed: true, optional: false, required: false
  private _customStepDetails = new DataAwsccTransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference(this, "custom_step_details");
  public get customStepDetails() {
    return this._customStepDetails;
  }

  // decrypt_step_details - computed: true, optional: false, required: false
  private _decryptStepDetails = new DataAwsccTransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference(this, "decrypt_step_details");
  public get decryptStepDetails() {
    return this._decryptStepDetails;
  }

  // delete_step_details - computed: true, optional: false, required: false
  private _deleteStepDetails = new DataAwsccTransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference(this, "delete_step_details");
  public get deleteStepDetails() {
    return this._deleteStepDetails;
  }

  // tag_step_details - computed: true, optional: false, required: false
  private _tagStepDetails = new DataAwsccTransferWorkflowOnExceptionStepsTagStepDetailsOutputReference(this, "tag_step_details");
  public get tagStepDetails() {
    return this._tagStepDetails;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccTransferWorkflowOnExceptionStepsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccTransferWorkflowOnExceptionStepsOutputReference {
    return new DataAwsccTransferWorkflowOnExceptionStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccTransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation {
}

export function dataAwsccTransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct?: DataAwsccTransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct?: DataAwsccTransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation | undefined) {
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface DataAwsccTransferWorkflowStepsCopyStepDetailsDestinationFileLocation {
}

export function dataAwsccTransferWorkflowStepsCopyStepDetailsDestinationFileLocationToTerraform(struct?: DataAwsccTransferWorkflowStepsCopyStepDetailsDestinationFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowStepsCopyStepDetailsDestinationFileLocationToHclTerraform(struct?: DataAwsccTransferWorkflowStepsCopyStepDetailsDestinationFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowStepsCopyStepDetailsDestinationFileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowStepsCopyStepDetailsDestinationFileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_file_location - computed: true, optional: false, required: false
  private _s3FileLocation = new DataAwsccTransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference(this, "s3_file_location");
  public get s3FileLocation() {
    return this._s3FileLocation;
  }
}
export interface DataAwsccTransferWorkflowStepsCopyStepDetails {
}

export function dataAwsccTransferWorkflowStepsCopyStepDetailsToTerraform(struct?: DataAwsccTransferWorkflowStepsCopyStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowStepsCopyStepDetailsToHclTerraform(struct?: DataAwsccTransferWorkflowStepsCopyStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowStepsCopyStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowStepsCopyStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowStepsCopyStepDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_file_location - computed: true, optional: false, required: false
  private _destinationFileLocation = new DataAwsccTransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference(this, "destination_file_location");
  public get destinationFileLocation() {
    return this._destinationFileLocation;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // overwrite_existing - computed: true, optional: false, required: false
  public get overwriteExisting() {
    return this.getStringAttribute('overwrite_existing');
  }

  // source_file_location - computed: true, optional: false, required: false
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
}
export interface DataAwsccTransferWorkflowStepsCustomStepDetails {
}

export function dataAwsccTransferWorkflowStepsCustomStepDetailsToTerraform(struct?: DataAwsccTransferWorkflowStepsCustomStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowStepsCustomStepDetailsToHclTerraform(struct?: DataAwsccTransferWorkflowStepsCustomStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowStepsCustomStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowStepsCustomStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowStepsCustomStepDetails | undefined) {
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

  // source_file_location - computed: true, optional: false, required: false
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export interface DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation {
}

export function dataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToTerraform(struct?: DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToHclTerraform(struct?: DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export interface DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation {
}

export function dataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct?: DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct?: DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | undefined) {
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocation {
}

export function dataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationToTerraform(struct?: DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationToHclTerraform(struct?: DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // efs_file_location - computed: true, optional: false, required: false
  private _efsFileLocation = new DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference(this, "efs_file_location");
  public get efsFileLocation() {
    return this._efsFileLocation;
  }

  // s3_file_location - computed: true, optional: false, required: false
  private _s3FileLocation = new DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference(this, "s3_file_location");
  public get s3FileLocation() {
    return this._s3FileLocation;
  }
}
export interface DataAwsccTransferWorkflowStepsDecryptStepDetails {
}

export function dataAwsccTransferWorkflowStepsDecryptStepDetailsToTerraform(struct?: DataAwsccTransferWorkflowStepsDecryptStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowStepsDecryptStepDetailsToHclTerraform(struct?: DataAwsccTransferWorkflowStepsDecryptStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowStepsDecryptStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowStepsDecryptStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowStepsDecryptStepDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_file_location - computed: true, optional: false, required: false
  private _destinationFileLocation = new DataAwsccTransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference(this, "destination_file_location");
  public get destinationFileLocation() {
    return this._destinationFileLocation;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // overwrite_existing - computed: true, optional: false, required: false
  public get overwriteExisting() {
    return this.getStringAttribute('overwrite_existing');
  }

  // source_file_location - computed: true, optional: false, required: false
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccTransferWorkflowStepsDeleteStepDetails {
}

export function dataAwsccTransferWorkflowStepsDeleteStepDetailsToTerraform(struct?: DataAwsccTransferWorkflowStepsDeleteStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowStepsDeleteStepDetailsToHclTerraform(struct?: DataAwsccTransferWorkflowStepsDeleteStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowStepsDeleteStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowStepsDeleteStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowStepsDeleteStepDetails | undefined) {
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

  // source_file_location - computed: true, optional: false, required: false
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
}
export interface DataAwsccTransferWorkflowStepsTagStepDetailsTags {
}

export function dataAwsccTransferWorkflowStepsTagStepDetailsTagsToTerraform(struct?: DataAwsccTransferWorkflowStepsTagStepDetailsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowStepsTagStepDetailsTagsToHclTerraform(struct?: DataAwsccTransferWorkflowStepsTagStepDetailsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowStepsTagStepDetailsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccTransferWorkflowStepsTagStepDetailsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowStepsTagStepDetailsTags | undefined) {
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

export class DataAwsccTransferWorkflowStepsTagStepDetailsTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccTransferWorkflowStepsTagStepDetailsTagsOutputReference {
    return new DataAwsccTransferWorkflowStepsTagStepDetailsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccTransferWorkflowStepsTagStepDetails {
}

export function dataAwsccTransferWorkflowStepsTagStepDetailsToTerraform(struct?: DataAwsccTransferWorkflowStepsTagStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowStepsTagStepDetailsToHclTerraform(struct?: DataAwsccTransferWorkflowStepsTagStepDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowStepsTagStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferWorkflowStepsTagStepDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowStepsTagStepDetails | undefined) {
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

  // source_file_location - computed: true, optional: false, required: false
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccTransferWorkflowStepsTagStepDetailsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}
export interface DataAwsccTransferWorkflowSteps {
}

export function dataAwsccTransferWorkflowStepsToTerraform(struct?: DataAwsccTransferWorkflowSteps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowStepsToHclTerraform(struct?: DataAwsccTransferWorkflowSteps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowStepsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccTransferWorkflowSteps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowSteps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // copy_step_details - computed: true, optional: false, required: false
  private _copyStepDetails = new DataAwsccTransferWorkflowStepsCopyStepDetailsOutputReference(this, "copy_step_details");
  public get copyStepDetails() {
    return this._copyStepDetails;
  }

  // custom_step_details - computed: true, optional: false, required: false
  private _customStepDetails = new DataAwsccTransferWorkflowStepsCustomStepDetailsOutputReference(this, "custom_step_details");
  public get customStepDetails() {
    return this._customStepDetails;
  }

  // decrypt_step_details - computed: true, optional: false, required: false
  private _decryptStepDetails = new DataAwsccTransferWorkflowStepsDecryptStepDetailsOutputReference(this, "decrypt_step_details");
  public get decryptStepDetails() {
    return this._decryptStepDetails;
  }

  // delete_step_details - computed: true, optional: false, required: false
  private _deleteStepDetails = new DataAwsccTransferWorkflowStepsDeleteStepDetailsOutputReference(this, "delete_step_details");
  public get deleteStepDetails() {
    return this._deleteStepDetails;
  }

  // tag_step_details - computed: true, optional: false, required: false
  private _tagStepDetails = new DataAwsccTransferWorkflowStepsTagStepDetailsOutputReference(this, "tag_step_details");
  public get tagStepDetails() {
    return this._tagStepDetails;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccTransferWorkflowStepsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccTransferWorkflowStepsOutputReference {
    return new DataAwsccTransferWorkflowStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccTransferWorkflowTags {
}

export function dataAwsccTransferWorkflowTagsToTerraform(struct?: DataAwsccTransferWorkflowTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferWorkflowTagsToHclTerraform(struct?: DataAwsccTransferWorkflowTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferWorkflowTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccTransferWorkflowTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferWorkflowTags | undefined) {
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

export class DataAwsccTransferWorkflowTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccTransferWorkflowTagsOutputReference {
    return new DataAwsccTransferWorkflowTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/transfer_workflow awscc_transfer_workflow}
*/
export class DataAwsccTransferWorkflow extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_transfer_workflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccTransferWorkflow resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccTransferWorkflow to import
  * @param importFromId The id of the existing DataAwsccTransferWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/transfer_workflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccTransferWorkflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_transfer_workflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/transfer_workflow awscc_transfer_workflow} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccTransferWorkflowConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccTransferWorkflowConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_transfer_workflow',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // on_exception_steps - computed: true, optional: false, required: false
  private _onExceptionSteps = new DataAwsccTransferWorkflowOnExceptionStepsList(this, "on_exception_steps", false);
  public get onExceptionSteps() {
    return this._onExceptionSteps;
  }

  // steps - computed: true, optional: false, required: false
  private _steps = new DataAwsccTransferWorkflowStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccTransferWorkflowTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // workflow_id - computed: true, optional: false, required: false
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
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
