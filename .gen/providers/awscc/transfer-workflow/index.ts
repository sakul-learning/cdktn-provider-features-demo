// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TransferWorkflowConfig extends cdktn.TerraformMetaArguments {
  /**
  * A textual description for the workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#description TransferWorkflow#description}
  */
  readonly description?: string;
  /**
  * Specifies the steps (actions) to take if any errors are encountered during execution of the workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#on_exception_steps TransferWorkflow#on_exception_steps}
  */
  readonly onExceptionSteps?: TransferWorkflowOnExceptionSteps[] | cdktn.IResolvable;
  /**
  * Specifies the details for the steps that are in the specified workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#steps TransferWorkflow#steps}
  */
  readonly steps: TransferWorkflowSteps[] | cdktn.IResolvable;
  /**
  * Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}
  */
  readonly tags?: TransferWorkflowTags[] | cdktn.IResolvable;
}
export interface TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation {
  /**
  * Specifies the S3 bucket that contains the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}
  */
  readonly bucket?: string;
  /**
  * The name assigned to the file when it was created in S3. You use the object key to retrieve the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#key TransferWorkflow#key}
  */
  readonly key?: string;
}

export function transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation {
  /**
  * Specifies the details for a S3 file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}
  */
  readonly s3FileLocation?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
}

export function transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationToTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_file_location: transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct!.s3FileLocation),
  }
}


export function transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationToHclTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_file_location: {
      value: transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct!.s3FileLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3FileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FileLocation = this._s3FileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3FileLocation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3FileLocation.internalValue = value.s3FileLocation;
    }
  }

  // s3_file_location - computed: true, optional: true, required: false
  private _s3FileLocation = new TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference(this, "s3_file_location");
  public get s3FileLocation() {
    return this._s3FileLocation;
  }
  public putS3FileLocation(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation) {
    this._s3FileLocation.internalValue = value;
  }
  public resetS3FileLocation() {
    this._s3FileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FileLocationInput() {
    return this._s3FileLocation.internalValue;
  }
}
export interface TransferWorkflowOnExceptionStepsCopyStepDetails {
  /**
  * Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}
  */
  readonly destinationFileLocation?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation;
  /**
  * The name of the step, used as an identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * A flag that indicates whether or not to overwrite an existing file of the same name. The default is FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}
  */
  readonly overwriteExisting?: string;
  /**
  * Specifies which file to use as input to the workflow step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
}

export function transferWorkflowOnExceptionStepsCopyStepDetailsToTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_file_location: transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationToTerraform(struct!.destinationFileLocation),
    name: cdktn.stringToTerraform(struct!.name),
    overwrite_existing: cdktn.stringToTerraform(struct!.overwriteExisting),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
  }
}


export function transferWorkflowOnExceptionStepsCopyStepDetailsToHclTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_file_location: {
      value: transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationToHclTerraform(struct!.destinationFileLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite_existing: {
      value: cdktn.stringToHclTerraform(struct!.overwriteExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsCopyStepDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFileLocation = this._destinationFileLocation?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwriteExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteExisting = this._overwriteExisting;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsCopyStepDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationFileLocation.internalValue = undefined;
      this._name = undefined;
      this._overwriteExisting = undefined;
      this._sourceFileLocation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationFileLocation.internalValue = value.destinationFileLocation;
      this._name = value.name;
      this._overwriteExisting = value.overwriteExisting;
      this._sourceFileLocation = value.sourceFileLocation;
    }
  }

  // destination_file_location - computed: true, optional: true, required: false
  private _destinationFileLocation = new TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference(this, "destination_file_location");
  public get destinationFileLocation() {
    return this._destinationFileLocation;
  }
  public putDestinationFileLocation(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation) {
    this._destinationFileLocation.internalValue = value;
  }
  public resetDestinationFileLocation() {
    this._destinationFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFileLocationInput() {
    return this._destinationFileLocation.internalValue;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // overwrite_existing - computed: true, optional: true, required: false
  private _overwriteExisting?: string; 
  public get overwriteExisting() {
    return this.getStringAttribute('overwrite_existing');
  }
  public set overwriteExisting(value: string) {
    this._overwriteExisting = value;
  }
  public resetOverwriteExisting() {
    this._overwriteExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingInput() {
    return this._overwriteExisting;
  }

  // source_file_location - computed: true, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }
}
export interface TransferWorkflowOnExceptionStepsCustomStepDetails {
  /**
  * The name of the step, used as an identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * Specifies which file to use as input to the workflow step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * The ARN for the lambda function that is being called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#target TransferWorkflow#target}
  */
  readonly target?: string;
  /**
  * Timeout, in seconds, for the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function transferWorkflowOnExceptionStepsCustomStepDetailsToTerraform(struct?: TransferWorkflowOnExceptionStepsCustomStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
    target: cdktn.stringToTerraform(struct!.target),
    timeout_seconds: cdktn.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function transferWorkflowOnExceptionStepsCustomStepDetailsToHclTerraform(struct?: TransferWorkflowOnExceptionStepsCustomStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsCustomStepDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsCustomStepDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sourceFileLocation = undefined;
      this._target = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sourceFileLocation = value.sourceFileLocation;
      this._target = value.target;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // source_file_location - computed: true, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation {
  /**
  * Specifies the EFS filesystem that contains the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * The name assigned to the file when it was created in EFS. You use the object path to retrieve the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#path TransferWorkflow#path}
  */
  readonly path?: string;
}

export function transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToHclTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_id: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemId = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemId = value.fileSystemId;
      this._path = value.path;
    }
  }

  // file_system_id - computed: true, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation {
  /**
  * Specifies the S3 bucket that contains the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}
  */
  readonly bucket?: string;
  /**
  * The name assigned to the file when it was created in S3. You use the object key to retrieve the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#key TransferWorkflow#key}
  */
  readonly key?: string;
}

export function transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation {
  /**
  * Specifies the details for an EFS file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}
  */
  readonly efsFileLocation?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
  /**
  * Specifies the details for a S3 file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}
  */
  readonly s3FileLocation?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
}

export function transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationToTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    efs_file_location: transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToTerraform(struct!.efsFileLocation),
    s3_file_location: transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct!.s3FileLocation),
  }
}


export function transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationToHclTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    efs_file_location: {
      value: transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToHclTerraform(struct!.efsFileLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation",
    },
    s3_file_location: {
      value: transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct!.s3FileLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsFileLocation = this._efsFileLocation?.internalValue;
    }
    if (this._s3FileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FileLocation = this._s3FileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._efsFileLocation.internalValue = undefined;
      this._s3FileLocation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._efsFileLocation.internalValue = value.efsFileLocation;
      this._s3FileLocation.internalValue = value.s3FileLocation;
    }
  }

  // efs_file_location - computed: true, optional: true, required: false
  private _efsFileLocation = new TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference(this, "efs_file_location");
  public get efsFileLocation() {
    return this._efsFileLocation;
  }
  public putEfsFileLocation(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation) {
    this._efsFileLocation.internalValue = value;
  }
  public resetEfsFileLocation() {
    this._efsFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileLocationInput() {
    return this._efsFileLocation.internalValue;
  }

  // s3_file_location - computed: true, optional: true, required: false
  private _s3FileLocation = new TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference(this, "s3_file_location");
  public get s3FileLocation() {
    return this._s3FileLocation;
  }
  public putS3FileLocation(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation) {
    this._s3FileLocation.internalValue = value;
  }
  public resetS3FileLocation() {
    this._s3FileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FileLocationInput() {
    return this._s3FileLocation.internalValue;
  }
}
export interface TransferWorkflowOnExceptionStepsDecryptStepDetails {
  /**
  * Specifies the location for the file being decrypted. Only applicable for the Decrypt type of workflow steps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}
  */
  readonly destinationFileLocation?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation;
  /**
  * The name of the step, used as an identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * A flag that indicates whether or not to overwrite an existing file of the same name. The default is FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}
  */
  readonly overwriteExisting?: string;
  /**
  * Specifies which file to use as input to the workflow step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * Specifies which encryption method to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#type TransferWorkflow#type}
  */
  readonly type?: string;
}

export function transferWorkflowOnExceptionStepsDecryptStepDetailsToTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_file_location: transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationToTerraform(struct!.destinationFileLocation),
    name: cdktn.stringToTerraform(struct!.name),
    overwrite_existing: cdktn.stringToTerraform(struct!.overwriteExisting),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function transferWorkflowOnExceptionStepsDecryptStepDetailsToHclTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_file_location: {
      value: transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationToHclTerraform(struct!.destinationFileLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite_existing: {
      value: cdktn.stringToHclTerraform(struct!.overwriteExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsDecryptStepDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFileLocation = this._destinationFileLocation?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwriteExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteExisting = this._overwriteExisting;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsDecryptStepDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationFileLocation.internalValue = undefined;
      this._name = undefined;
      this._overwriteExisting = undefined;
      this._sourceFileLocation = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationFileLocation.internalValue = value.destinationFileLocation;
      this._name = value.name;
      this._overwriteExisting = value.overwriteExisting;
      this._sourceFileLocation = value.sourceFileLocation;
      this._type = value.type;
    }
  }

  // destination_file_location - computed: true, optional: true, required: false
  private _destinationFileLocation = new TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference(this, "destination_file_location");
  public get destinationFileLocation() {
    return this._destinationFileLocation;
  }
  public putDestinationFileLocation(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation) {
    this._destinationFileLocation.internalValue = value;
  }
  public resetDestinationFileLocation() {
    this._destinationFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFileLocationInput() {
    return this._destinationFileLocation.internalValue;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // overwrite_existing - computed: true, optional: true, required: false
  private _overwriteExisting?: string; 
  public get overwriteExisting() {
    return this.getStringAttribute('overwrite_existing');
  }
  public set overwriteExisting(value: string) {
    this._overwriteExisting = value;
  }
  public resetOverwriteExisting() {
    this._overwriteExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingInput() {
    return this._overwriteExisting;
  }

  // source_file_location - computed: true, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface TransferWorkflowOnExceptionStepsDeleteStepDetails {
  /**
  * The name of the step, used as an identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * Specifies which file to use as input to the workflow step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
}

export function transferWorkflowOnExceptionStepsDeleteStepDetailsToTerraform(struct?: TransferWorkflowOnExceptionStepsDeleteStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
  }
}


export function transferWorkflowOnExceptionStepsDeleteStepDetailsToHclTerraform(struct?: TransferWorkflowOnExceptionStepsDeleteStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsDeleteStepDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsDeleteStepDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sourceFileLocation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sourceFileLocation = value.sourceFileLocation;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // source_file_location - computed: true, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }
}
export interface TransferWorkflowOnExceptionStepsTagStepDetailsTags {
  /**
  * The name assigned to the tag that you create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#key TransferWorkflow#key}
  */
  readonly key?: string;
  /**
  * The value that corresponds to the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#value TransferWorkflow#value}
  */
  readonly value?: string;
}

export function transferWorkflowOnExceptionStepsTagStepDetailsTagsToTerraform(struct?: TransferWorkflowOnExceptionStepsTagStepDetailsTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function transferWorkflowOnExceptionStepsTagStepDetailsTagsToHclTerraform(struct?: TransferWorkflowOnExceptionStepsTagStepDetailsTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsTagStepDetailsTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsTagStepDetailsTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TransferWorkflowOnExceptionStepsTagStepDetailsTagsList extends cdktn.ComplexList {
  public internalValue? : TransferWorkflowOnExceptionStepsTagStepDetailsTags[] | cdktn.IResolvable

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
  public get(index: number): TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference {
    return new TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransferWorkflowOnExceptionStepsTagStepDetails {
  /**
  * The name of the step, used as an identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * Specifies which file to use as input to the workflow step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * Array that contains from 1 to 10 key/value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}
  */
  readonly tags?: TransferWorkflowOnExceptionStepsTagStepDetailsTags[] | cdktn.IResolvable;
}

export function transferWorkflowOnExceptionStepsTagStepDetailsToTerraform(struct?: TransferWorkflowOnExceptionStepsTagStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
    tags: cdktn.listMapper(transferWorkflowOnExceptionStepsTagStepDetailsTagsToTerraform, false)(struct!.tags),
  }
}


export function transferWorkflowOnExceptionStepsTagStepDetailsToHclTerraform(struct?: TransferWorkflowOnExceptionStepsTagStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(transferWorkflowOnExceptionStepsTagStepDetailsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "TransferWorkflowOnExceptionStepsTagStepDetailsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowOnExceptionStepsTagStepDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionStepsTagStepDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sourceFileLocation = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sourceFileLocation = value.sourceFileLocation;
      this._tags.internalValue = value.tags;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // source_file_location - computed: true, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new TransferWorkflowOnExceptionStepsTagStepDetailsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: TransferWorkflowOnExceptionStepsTagStepDetailsTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface TransferWorkflowOnExceptionSteps {
  /**
  * Details for a step that performs a file copy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#copy_step_details TransferWorkflow#copy_step_details}
  */
  readonly copyStepDetails?: TransferWorkflowOnExceptionStepsCopyStepDetails;
  /**
  * Details for a step that invokes a lambda function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#custom_step_details TransferWorkflow#custom_step_details}
  */
  readonly customStepDetails?: TransferWorkflowOnExceptionStepsCustomStepDetails;
  /**
  * Details for a step that performs a file decryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#decrypt_step_details TransferWorkflow#decrypt_step_details}
  */
  readonly decryptStepDetails?: TransferWorkflowOnExceptionStepsDecryptStepDetails;
  /**
  * Details for a step that deletes the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#delete_step_details TransferWorkflow#delete_step_details}
  */
  readonly deleteStepDetails?: TransferWorkflowOnExceptionStepsDeleteStepDetails;
  /**
  * Details for a step that creates one or more tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#tag_step_details TransferWorkflow#tag_step_details}
  */
  readonly tagStepDetails?: TransferWorkflowOnExceptionStepsTagStepDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#type TransferWorkflow#type}
  */
  readonly type?: string;
}

export function transferWorkflowOnExceptionStepsToTerraform(struct?: TransferWorkflowOnExceptionSteps | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    copy_step_details: transferWorkflowOnExceptionStepsCopyStepDetailsToTerraform(struct!.copyStepDetails),
    custom_step_details: transferWorkflowOnExceptionStepsCustomStepDetailsToTerraform(struct!.customStepDetails),
    decrypt_step_details: transferWorkflowOnExceptionStepsDecryptStepDetailsToTerraform(struct!.decryptStepDetails),
    delete_step_details: transferWorkflowOnExceptionStepsDeleteStepDetailsToTerraform(struct!.deleteStepDetails),
    tag_step_details: transferWorkflowOnExceptionStepsTagStepDetailsToTerraform(struct!.tagStepDetails),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function transferWorkflowOnExceptionStepsToHclTerraform(struct?: TransferWorkflowOnExceptionSteps | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    copy_step_details: {
      value: transferWorkflowOnExceptionStepsCopyStepDetailsToHclTerraform(struct!.copyStepDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowOnExceptionStepsCopyStepDetails",
    },
    custom_step_details: {
      value: transferWorkflowOnExceptionStepsCustomStepDetailsToHclTerraform(struct!.customStepDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowOnExceptionStepsCustomStepDetails",
    },
    decrypt_step_details: {
      value: transferWorkflowOnExceptionStepsDecryptStepDetailsToHclTerraform(struct!.decryptStepDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowOnExceptionStepsDecryptStepDetails",
    },
    delete_step_details: {
      value: transferWorkflowOnExceptionStepsDeleteStepDetailsToHclTerraform(struct!.deleteStepDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowOnExceptionStepsDeleteStepDetails",
    },
    tag_step_details: {
      value: transferWorkflowOnExceptionStepsTagStepDetailsToHclTerraform(struct!.tagStepDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowOnExceptionStepsTagStepDetails",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowOnExceptionStepsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TransferWorkflowOnExceptionSteps | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyStepDetails = this._copyStepDetails?.internalValue;
    }
    if (this._customStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStepDetails = this._customStepDetails?.internalValue;
    }
    if (this._decryptStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptStepDetails = this._decryptStepDetails?.internalValue;
    }
    if (this._deleteStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteStepDetails = this._deleteStepDetails?.internalValue;
    }
    if (this._tagStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagStepDetails = this._tagStepDetails?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowOnExceptionSteps | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyStepDetails.internalValue = undefined;
      this._customStepDetails.internalValue = undefined;
      this._decryptStepDetails.internalValue = undefined;
      this._deleteStepDetails.internalValue = undefined;
      this._tagStepDetails.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copyStepDetails.internalValue = value.copyStepDetails;
      this._customStepDetails.internalValue = value.customStepDetails;
      this._decryptStepDetails.internalValue = value.decryptStepDetails;
      this._deleteStepDetails.internalValue = value.deleteStepDetails;
      this._tagStepDetails.internalValue = value.tagStepDetails;
      this._type = value.type;
    }
  }

  // copy_step_details - computed: true, optional: true, required: false
  private _copyStepDetails = new TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference(this, "copy_step_details");
  public get copyStepDetails() {
    return this._copyStepDetails;
  }
  public putCopyStepDetails(value: TransferWorkflowOnExceptionStepsCopyStepDetails) {
    this._copyStepDetails.internalValue = value;
  }
  public resetCopyStepDetails() {
    this._copyStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyStepDetailsInput() {
    return this._copyStepDetails.internalValue;
  }

  // custom_step_details - computed: true, optional: true, required: false
  private _customStepDetails = new TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference(this, "custom_step_details");
  public get customStepDetails() {
    return this._customStepDetails;
  }
  public putCustomStepDetails(value: TransferWorkflowOnExceptionStepsCustomStepDetails) {
    this._customStepDetails.internalValue = value;
  }
  public resetCustomStepDetails() {
    this._customStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStepDetailsInput() {
    return this._customStepDetails.internalValue;
  }

  // decrypt_step_details - computed: true, optional: true, required: false
  private _decryptStepDetails = new TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference(this, "decrypt_step_details");
  public get decryptStepDetails() {
    return this._decryptStepDetails;
  }
  public putDecryptStepDetails(value: TransferWorkflowOnExceptionStepsDecryptStepDetails) {
    this._decryptStepDetails.internalValue = value;
  }
  public resetDecryptStepDetails() {
    this._decryptStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptStepDetailsInput() {
    return this._decryptStepDetails.internalValue;
  }

  // delete_step_details - computed: true, optional: true, required: false
  private _deleteStepDetails = new TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference(this, "delete_step_details");
  public get deleteStepDetails() {
    return this._deleteStepDetails;
  }
  public putDeleteStepDetails(value: TransferWorkflowOnExceptionStepsDeleteStepDetails) {
    this._deleteStepDetails.internalValue = value;
  }
  public resetDeleteStepDetails() {
    this._deleteStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteStepDetailsInput() {
    return this._deleteStepDetails.internalValue;
  }

  // tag_step_details - computed: true, optional: true, required: false
  private _tagStepDetails = new TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference(this, "tag_step_details");
  public get tagStepDetails() {
    return this._tagStepDetails;
  }
  public putTagStepDetails(value: TransferWorkflowOnExceptionStepsTagStepDetails) {
    this._tagStepDetails.internalValue = value;
  }
  public resetTagStepDetails() {
    this._tagStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagStepDetailsInput() {
    return this._tagStepDetails.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class TransferWorkflowOnExceptionStepsList extends cdktn.ComplexList {
  public internalValue? : TransferWorkflowOnExceptionSteps[] | cdktn.IResolvable

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
  public get(index: number): TransferWorkflowOnExceptionStepsOutputReference {
    return new TransferWorkflowOnExceptionStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation {
  /**
  * Specifies the S3 bucket that contains the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}
  */
  readonly bucket?: string;
  /**
  * The name assigned to the file when it was created in S3. You use the object key to retrieve the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#key TransferWorkflow#key}
  */
  readonly key?: string;
}

export function transferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function transferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface TransferWorkflowStepsCopyStepDetailsDestinationFileLocation {
  /**
  * Specifies the details for a S3 file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}
  */
  readonly s3FileLocation?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
}

export function transferWorkflowStepsCopyStepDetailsDestinationFileLocationToTerraform(struct?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_file_location: transferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct!.s3FileLocation),
  }
}


export function transferWorkflowStepsCopyStepDetailsDestinationFileLocationToHclTerraform(struct?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_file_location: {
      value: transferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct!.s3FileLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowStepsCopyStepDetailsDestinationFileLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3FileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FileLocation = this._s3FileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3FileLocation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3FileLocation.internalValue = value.s3FileLocation;
    }
  }

  // s3_file_location - computed: true, optional: true, required: false
  private _s3FileLocation = new TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference(this, "s3_file_location");
  public get s3FileLocation() {
    return this._s3FileLocation;
  }
  public putS3FileLocation(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation) {
    this._s3FileLocation.internalValue = value;
  }
  public resetS3FileLocation() {
    this._s3FileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FileLocationInput() {
    return this._s3FileLocation.internalValue;
  }
}
export interface TransferWorkflowStepsCopyStepDetails {
  /**
  * Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}
  */
  readonly destinationFileLocation?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation;
  /**
  * The name of the step, used as an identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * A flag that indicates whether or not to overwrite an existing file of the same name. The default is FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}
  */
  readonly overwriteExisting?: string;
  /**
  * Specifies which file to use as input to the workflow step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
}

export function transferWorkflowStepsCopyStepDetailsToTerraform(struct?: TransferWorkflowStepsCopyStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_file_location: transferWorkflowStepsCopyStepDetailsDestinationFileLocationToTerraform(struct!.destinationFileLocation),
    name: cdktn.stringToTerraform(struct!.name),
    overwrite_existing: cdktn.stringToTerraform(struct!.overwriteExisting),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
  }
}


export function transferWorkflowStepsCopyStepDetailsToHclTerraform(struct?: TransferWorkflowStepsCopyStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_file_location: {
      value: transferWorkflowStepsCopyStepDetailsDestinationFileLocationToHclTerraform(struct!.destinationFileLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowStepsCopyStepDetailsDestinationFileLocation",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite_existing: {
      value: cdktn.stringToHclTerraform(struct!.overwriteExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsCopyStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowStepsCopyStepDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFileLocation = this._destinationFileLocation?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwriteExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteExisting = this._overwriteExisting;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsCopyStepDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationFileLocation.internalValue = undefined;
      this._name = undefined;
      this._overwriteExisting = undefined;
      this._sourceFileLocation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationFileLocation.internalValue = value.destinationFileLocation;
      this._name = value.name;
      this._overwriteExisting = value.overwriteExisting;
      this._sourceFileLocation = value.sourceFileLocation;
    }
  }

  // destination_file_location - computed: true, optional: true, required: false
  private _destinationFileLocation = new TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference(this, "destination_file_location");
  public get destinationFileLocation() {
    return this._destinationFileLocation;
  }
  public putDestinationFileLocation(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation) {
    this._destinationFileLocation.internalValue = value;
  }
  public resetDestinationFileLocation() {
    this._destinationFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFileLocationInput() {
    return this._destinationFileLocation.internalValue;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // overwrite_existing - computed: true, optional: true, required: false
  private _overwriteExisting?: string; 
  public get overwriteExisting() {
    return this.getStringAttribute('overwrite_existing');
  }
  public set overwriteExisting(value: string) {
    this._overwriteExisting = value;
  }
  public resetOverwriteExisting() {
    this._overwriteExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingInput() {
    return this._overwriteExisting;
  }

  // source_file_location - computed: true, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }
}
export interface TransferWorkflowStepsCustomStepDetails {
  /**
  * The name of the step, used as an identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * Specifies which file to use as input to the workflow step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * The ARN for the lambda function that is being called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#target TransferWorkflow#target}
  */
  readonly target?: string;
  /**
  * Timeout, in seconds, for the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function transferWorkflowStepsCustomStepDetailsToTerraform(struct?: TransferWorkflowStepsCustomStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
    target: cdktn.stringToTerraform(struct!.target),
    timeout_seconds: cdktn.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function transferWorkflowStepsCustomStepDetailsToHclTerraform(struct?: TransferWorkflowStepsCustomStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsCustomStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowStepsCustomStepDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsCustomStepDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sourceFileLocation = undefined;
      this._target = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sourceFileLocation = value.sourceFileLocation;
      this._target = value.target;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // source_file_location - computed: true, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation {
  /**
  * Specifies the EFS filesystem that contains the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * The name assigned to the file when it was created in EFS. You use the object path to retrieve the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#path TransferWorkflow#path}
  */
  readonly path?: string;
}

export function transferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function transferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToHclTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_id: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemId = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemId = value.fileSystemId;
      this._path = value.path;
    }
  }

  // file_system_id - computed: true, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation {
  /**
  * Specifies the S3 bucket that contains the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}
  */
  readonly bucket?: string;
  /**
  * The name assigned to the file when it was created in S3. You use the object key to retrieve the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#key TransferWorkflow#key}
  */
  readonly key?: string;
}

export function transferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function transferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation {
  /**
  * Specifies the details for an EFS file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}
  */
  readonly efsFileLocation?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
  /**
  * Specifies the details for a S3 file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}
  */
  readonly s3FileLocation?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
}

export function transferWorkflowStepsDecryptStepDetailsDestinationFileLocationToTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    efs_file_location: transferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToTerraform(struct!.efsFileLocation),
    s3_file_location: transferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct!.s3FileLocation),
  }
}


export function transferWorkflowStepsDecryptStepDetailsDestinationFileLocationToHclTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    efs_file_location: {
      value: transferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToHclTerraform(struct!.efsFileLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation",
    },
    s3_file_location: {
      value: transferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct!.s3FileLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsFileLocation = this._efsFileLocation?.internalValue;
    }
    if (this._s3FileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FileLocation = this._s3FileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._efsFileLocation.internalValue = undefined;
      this._s3FileLocation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._efsFileLocation.internalValue = value.efsFileLocation;
      this._s3FileLocation.internalValue = value.s3FileLocation;
    }
  }

  // efs_file_location - computed: true, optional: true, required: false
  private _efsFileLocation = new TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference(this, "efs_file_location");
  public get efsFileLocation() {
    return this._efsFileLocation;
  }
  public putEfsFileLocation(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation) {
    this._efsFileLocation.internalValue = value;
  }
  public resetEfsFileLocation() {
    this._efsFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileLocationInput() {
    return this._efsFileLocation.internalValue;
  }

  // s3_file_location - computed: true, optional: true, required: false
  private _s3FileLocation = new TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference(this, "s3_file_location");
  public get s3FileLocation() {
    return this._s3FileLocation;
  }
  public putS3FileLocation(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation) {
    this._s3FileLocation.internalValue = value;
  }
  public resetS3FileLocation() {
    this._s3FileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FileLocationInput() {
    return this._s3FileLocation.internalValue;
  }
}
export interface TransferWorkflowStepsDecryptStepDetails {
  /**
  * Specifies the location for the file being decrypted. Only applicable for the Decrypt type of workflow steps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}
  */
  readonly destinationFileLocation?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation;
  /**
  * The name of the step, used as an identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * A flag that indicates whether or not to overwrite an existing file of the same name. The default is FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}
  */
  readonly overwriteExisting?: string;
  /**
  * Specifies which file to use as input to the workflow step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * Specifies which encryption method to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#type TransferWorkflow#type}
  */
  readonly type?: string;
}

export function transferWorkflowStepsDecryptStepDetailsToTerraform(struct?: TransferWorkflowStepsDecryptStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_file_location: transferWorkflowStepsDecryptStepDetailsDestinationFileLocationToTerraform(struct!.destinationFileLocation),
    name: cdktn.stringToTerraform(struct!.name),
    overwrite_existing: cdktn.stringToTerraform(struct!.overwriteExisting),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function transferWorkflowStepsDecryptStepDetailsToHclTerraform(struct?: TransferWorkflowStepsDecryptStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_file_location: {
      value: transferWorkflowStepsDecryptStepDetailsDestinationFileLocationToHclTerraform(struct!.destinationFileLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite_existing: {
      value: cdktn.stringToHclTerraform(struct!.overwriteExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsDecryptStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowStepsDecryptStepDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFileLocation = this._destinationFileLocation?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwriteExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteExisting = this._overwriteExisting;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsDecryptStepDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationFileLocation.internalValue = undefined;
      this._name = undefined;
      this._overwriteExisting = undefined;
      this._sourceFileLocation = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationFileLocation.internalValue = value.destinationFileLocation;
      this._name = value.name;
      this._overwriteExisting = value.overwriteExisting;
      this._sourceFileLocation = value.sourceFileLocation;
      this._type = value.type;
    }
  }

  // destination_file_location - computed: true, optional: true, required: false
  private _destinationFileLocation = new TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference(this, "destination_file_location");
  public get destinationFileLocation() {
    return this._destinationFileLocation;
  }
  public putDestinationFileLocation(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation) {
    this._destinationFileLocation.internalValue = value;
  }
  public resetDestinationFileLocation() {
    this._destinationFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFileLocationInput() {
    return this._destinationFileLocation.internalValue;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // overwrite_existing - computed: true, optional: true, required: false
  private _overwriteExisting?: string; 
  public get overwriteExisting() {
    return this.getStringAttribute('overwrite_existing');
  }
  public set overwriteExisting(value: string) {
    this._overwriteExisting = value;
  }
  public resetOverwriteExisting() {
    this._overwriteExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingInput() {
    return this._overwriteExisting;
  }

  // source_file_location - computed: true, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface TransferWorkflowStepsDeleteStepDetails {
  /**
  * The name of the step, used as an identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * Specifies which file to use as input to the workflow step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
}

export function transferWorkflowStepsDeleteStepDetailsToTerraform(struct?: TransferWorkflowStepsDeleteStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
  }
}


export function transferWorkflowStepsDeleteStepDetailsToHclTerraform(struct?: TransferWorkflowStepsDeleteStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsDeleteStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowStepsDeleteStepDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsDeleteStepDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sourceFileLocation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sourceFileLocation = value.sourceFileLocation;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // source_file_location - computed: true, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }
}
export interface TransferWorkflowStepsTagStepDetailsTags {
  /**
  * The name assigned to the tag that you create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#key TransferWorkflow#key}
  */
  readonly key?: string;
  /**
  * The value that corresponds to the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#value TransferWorkflow#value}
  */
  readonly value?: string;
}

export function transferWorkflowStepsTagStepDetailsTagsToTerraform(struct?: TransferWorkflowStepsTagStepDetailsTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function transferWorkflowStepsTagStepDetailsTagsToHclTerraform(struct?: TransferWorkflowStepsTagStepDetailsTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsTagStepDetailsTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TransferWorkflowStepsTagStepDetailsTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsTagStepDetailsTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TransferWorkflowStepsTagStepDetailsTagsList extends cdktn.ComplexList {
  public internalValue? : TransferWorkflowStepsTagStepDetailsTags[] | cdktn.IResolvable

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
  public get(index: number): TransferWorkflowStepsTagStepDetailsTagsOutputReference {
    return new TransferWorkflowStepsTagStepDetailsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransferWorkflowStepsTagStepDetails {
  /**
  * The name of the step, used as an identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
  */
  readonly name?: string;
  /**
  * Specifies which file to use as input to the workflow step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * Array that contains from 1 to 10 key/value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}
  */
  readonly tags?: TransferWorkflowStepsTagStepDetailsTags[] | cdktn.IResolvable;
}

export function transferWorkflowStepsTagStepDetailsToTerraform(struct?: TransferWorkflowStepsTagStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
    tags: cdktn.listMapper(transferWorkflowStepsTagStepDetailsTagsToTerraform, false)(struct!.tags),
  }
}


export function transferWorkflowStepsTagStepDetailsToHclTerraform(struct?: TransferWorkflowStepsTagStepDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(transferWorkflowStepsTagStepDetailsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "TransferWorkflowStepsTagStepDetailsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsTagStepDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWorkflowStepsTagStepDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowStepsTagStepDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sourceFileLocation = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sourceFileLocation = value.sourceFileLocation;
      this._tags.internalValue = value.tags;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // source_file_location - computed: true, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new TransferWorkflowStepsTagStepDetailsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: TransferWorkflowStepsTagStepDetailsTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface TransferWorkflowSteps {
  /**
  * Details for a step that performs a file copy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#copy_step_details TransferWorkflow#copy_step_details}
  */
  readonly copyStepDetails?: TransferWorkflowStepsCopyStepDetails;
  /**
  * Details for a step that invokes a lambda function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#custom_step_details TransferWorkflow#custom_step_details}
  */
  readonly customStepDetails?: TransferWorkflowStepsCustomStepDetails;
  /**
  * Details for a step that performs a file decryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#decrypt_step_details TransferWorkflow#decrypt_step_details}
  */
  readonly decryptStepDetails?: TransferWorkflowStepsDecryptStepDetails;
  /**
  * Details for a step that deletes the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#delete_step_details TransferWorkflow#delete_step_details}
  */
  readonly deleteStepDetails?: TransferWorkflowStepsDeleteStepDetails;
  /**
  * Details for a step that creates one or more tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#tag_step_details TransferWorkflow#tag_step_details}
  */
  readonly tagStepDetails?: TransferWorkflowStepsTagStepDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#type TransferWorkflow#type}
  */
  readonly type?: string;
}

export function transferWorkflowStepsToTerraform(struct?: TransferWorkflowSteps | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    copy_step_details: transferWorkflowStepsCopyStepDetailsToTerraform(struct!.copyStepDetails),
    custom_step_details: transferWorkflowStepsCustomStepDetailsToTerraform(struct!.customStepDetails),
    decrypt_step_details: transferWorkflowStepsDecryptStepDetailsToTerraform(struct!.decryptStepDetails),
    delete_step_details: transferWorkflowStepsDeleteStepDetailsToTerraform(struct!.deleteStepDetails),
    tag_step_details: transferWorkflowStepsTagStepDetailsToTerraform(struct!.tagStepDetails),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function transferWorkflowStepsToHclTerraform(struct?: TransferWorkflowSteps | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    copy_step_details: {
      value: transferWorkflowStepsCopyStepDetailsToHclTerraform(struct!.copyStepDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowStepsCopyStepDetails",
    },
    custom_step_details: {
      value: transferWorkflowStepsCustomStepDetailsToHclTerraform(struct!.customStepDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowStepsCustomStepDetails",
    },
    decrypt_step_details: {
      value: transferWorkflowStepsDecryptStepDetailsToHclTerraform(struct!.decryptStepDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowStepsDecryptStepDetails",
    },
    delete_step_details: {
      value: transferWorkflowStepsDeleteStepDetailsToHclTerraform(struct!.deleteStepDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowStepsDeleteStepDetails",
    },
    tag_step_details: {
      value: transferWorkflowStepsTagStepDetailsToHclTerraform(struct!.tagStepDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWorkflowStepsTagStepDetails",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowStepsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TransferWorkflowSteps | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyStepDetails = this._copyStepDetails?.internalValue;
    }
    if (this._customStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStepDetails = this._customStepDetails?.internalValue;
    }
    if (this._decryptStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptStepDetails = this._decryptStepDetails?.internalValue;
    }
    if (this._deleteStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteStepDetails = this._deleteStepDetails?.internalValue;
    }
    if (this._tagStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagStepDetails = this._tagStepDetails?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowSteps | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyStepDetails.internalValue = undefined;
      this._customStepDetails.internalValue = undefined;
      this._decryptStepDetails.internalValue = undefined;
      this._deleteStepDetails.internalValue = undefined;
      this._tagStepDetails.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copyStepDetails.internalValue = value.copyStepDetails;
      this._customStepDetails.internalValue = value.customStepDetails;
      this._decryptStepDetails.internalValue = value.decryptStepDetails;
      this._deleteStepDetails.internalValue = value.deleteStepDetails;
      this._tagStepDetails.internalValue = value.tagStepDetails;
      this._type = value.type;
    }
  }

  // copy_step_details - computed: true, optional: true, required: false
  private _copyStepDetails = new TransferWorkflowStepsCopyStepDetailsOutputReference(this, "copy_step_details");
  public get copyStepDetails() {
    return this._copyStepDetails;
  }
  public putCopyStepDetails(value: TransferWorkflowStepsCopyStepDetails) {
    this._copyStepDetails.internalValue = value;
  }
  public resetCopyStepDetails() {
    this._copyStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyStepDetailsInput() {
    return this._copyStepDetails.internalValue;
  }

  // custom_step_details - computed: true, optional: true, required: false
  private _customStepDetails = new TransferWorkflowStepsCustomStepDetailsOutputReference(this, "custom_step_details");
  public get customStepDetails() {
    return this._customStepDetails;
  }
  public putCustomStepDetails(value: TransferWorkflowStepsCustomStepDetails) {
    this._customStepDetails.internalValue = value;
  }
  public resetCustomStepDetails() {
    this._customStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStepDetailsInput() {
    return this._customStepDetails.internalValue;
  }

  // decrypt_step_details - computed: true, optional: true, required: false
  private _decryptStepDetails = new TransferWorkflowStepsDecryptStepDetailsOutputReference(this, "decrypt_step_details");
  public get decryptStepDetails() {
    return this._decryptStepDetails;
  }
  public putDecryptStepDetails(value: TransferWorkflowStepsDecryptStepDetails) {
    this._decryptStepDetails.internalValue = value;
  }
  public resetDecryptStepDetails() {
    this._decryptStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptStepDetailsInput() {
    return this._decryptStepDetails.internalValue;
  }

  // delete_step_details - computed: true, optional: true, required: false
  private _deleteStepDetails = new TransferWorkflowStepsDeleteStepDetailsOutputReference(this, "delete_step_details");
  public get deleteStepDetails() {
    return this._deleteStepDetails;
  }
  public putDeleteStepDetails(value: TransferWorkflowStepsDeleteStepDetails) {
    this._deleteStepDetails.internalValue = value;
  }
  public resetDeleteStepDetails() {
    this._deleteStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteStepDetailsInput() {
    return this._deleteStepDetails.internalValue;
  }

  // tag_step_details - computed: true, optional: true, required: false
  private _tagStepDetails = new TransferWorkflowStepsTagStepDetailsOutputReference(this, "tag_step_details");
  public get tagStepDetails() {
    return this._tagStepDetails;
  }
  public putTagStepDetails(value: TransferWorkflowStepsTagStepDetails) {
    this._tagStepDetails.internalValue = value;
  }
  public resetTagStepDetails() {
    this._tagStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagStepDetailsInput() {
    return this._tagStepDetails.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class TransferWorkflowStepsList extends cdktn.ComplexList {
  public internalValue? : TransferWorkflowSteps[] | cdktn.IResolvable

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
  public get(index: number): TransferWorkflowStepsOutputReference {
    return new TransferWorkflowStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransferWorkflowTags {
  /**
  * The name assigned to the tag that you create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#key TransferWorkflow#key}
  */
  readonly key?: string;
  /**
  * Contains one or more values that you assigned to the key name you create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#value TransferWorkflow#value}
  */
  readonly value?: string;
}

export function transferWorkflowTagsToTerraform(struct?: TransferWorkflowTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function transferWorkflowTagsToHclTerraform(struct?: TransferWorkflowTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWorkflowTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TransferWorkflowTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWorkflowTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TransferWorkflowTagsList extends cdktn.ComplexList {
  public internalValue? : TransferWorkflowTags[] | cdktn.IResolvable

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
  public get(index: number): TransferWorkflowTagsOutputReference {
    return new TransferWorkflowTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow awscc_transfer_workflow}
*/
export class TransferWorkflow extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_transfer_workflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TransferWorkflow resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransferWorkflow to import
  * @param importFromId The id of the existing TransferWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransferWorkflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_transfer_workflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/transfer_workflow awscc_transfer_workflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransferWorkflowConfig
  */
  public constructor(scope: Construct, id: string, config: TransferWorkflowConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_transfer_workflow',
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
    this._description = config.description;
    this._onExceptionSteps.internalValue = config.onExceptionSteps;
    this._steps.internalValue = config.steps;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // on_exception_steps - computed: true, optional: true, required: false
  private _onExceptionSteps = new TransferWorkflowOnExceptionStepsList(this, "on_exception_steps", false);
  public get onExceptionSteps() {
    return this._onExceptionSteps;
  }
  public putOnExceptionSteps(value: TransferWorkflowOnExceptionSteps[] | cdktn.IResolvable) {
    this._onExceptionSteps.internalValue = value;
  }
  public resetOnExceptionSteps() {
    this._onExceptionSteps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onExceptionStepsInput() {
    return this._onExceptionSteps.internalValue;
  }

  // steps - computed: false, optional: false, required: true
  private _steps = new TransferWorkflowStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: TransferWorkflowSteps[] | cdktn.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new TransferWorkflowTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: TransferWorkflowTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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
      description: cdktn.stringToTerraform(this._description),
      on_exception_steps: cdktn.listMapper(transferWorkflowOnExceptionStepsToTerraform, false)(this._onExceptionSteps.internalValue),
      steps: cdktn.listMapper(transferWorkflowStepsToTerraform, false)(this._steps.internalValue),
      tags: cdktn.listMapper(transferWorkflowTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_exception_steps: {
        value: cdktn.listMapperHcl(transferWorkflowOnExceptionStepsToHclTerraform, false)(this._onExceptionSteps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransferWorkflowOnExceptionStepsList",
      },
      steps: {
        value: cdktn.listMapperHcl(transferWorkflowStepsToHclTerraform, false)(this._steps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransferWorkflowStepsList",
      },
      tags: {
        value: cdktn.listMapperHcl(transferWorkflowTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TransferWorkflowTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
