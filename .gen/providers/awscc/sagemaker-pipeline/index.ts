// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerPipelineConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline#parallelism_configuration SagemakerPipeline#parallelism_configuration}
  */
  readonly parallelismConfiguration?: SagemakerPipelineParallelismConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline#pipeline_definition SagemakerPipeline#pipeline_definition}
  */
  readonly pipelineDefinition: SagemakerPipelinePipelineDefinition;
  /**
  * The description of the Pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline#pipeline_description SagemakerPipeline#pipeline_description}
  */
  readonly pipelineDescription?: string;
  /**
  * The display name of the Pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline#pipeline_display_name SagemakerPipeline#pipeline_display_name}
  */
  readonly pipelineDisplayName?: string;
  /**
  * The name of the Pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline#pipeline_name SagemakerPipeline#pipeline_name}
  */
  readonly pipelineName: string;
  /**
  * Role Arn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline#role_arn SagemakerPipeline#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline#tags SagemakerPipeline#tags}
  */
  readonly tags?: SagemakerPipelineTags[] | cdktn.IResolvable;
}
export interface SagemakerPipelineParallelismConfiguration {
  /**
  * Maximum parallel execution steps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline#max_parallel_execution_steps SagemakerPipeline#max_parallel_execution_steps}
  */
  readonly maxParallelExecutionSteps?: number;
}

export function sagemakerPipelineParallelismConfigurationToTerraform(struct?: SagemakerPipelineParallelismConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_parallel_execution_steps: cdktn.numberToTerraform(struct!.maxParallelExecutionSteps),
  }
}


export function sagemakerPipelineParallelismConfigurationToHclTerraform(struct?: SagemakerPipelineParallelismConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_parallel_execution_steps: {
      value: cdktn.numberToHclTerraform(struct!.maxParallelExecutionSteps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerPipelineParallelismConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerPipelineParallelismConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxParallelExecutionSteps !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelExecutionSteps = this._maxParallelExecutionSteps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerPipelineParallelismConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxParallelExecutionSteps = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxParallelExecutionSteps = value.maxParallelExecutionSteps;
    }
  }

  // max_parallel_execution_steps - computed: true, optional: true, required: false
  private _maxParallelExecutionSteps?: number; 
  public get maxParallelExecutionSteps() {
    return this.getNumberAttribute('max_parallel_execution_steps');
  }
  public set maxParallelExecutionSteps(value: number) {
    this._maxParallelExecutionSteps = value;
  }
  public resetMaxParallelExecutionSteps() {
    this._maxParallelExecutionSteps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelExecutionStepsInput() {
    return this._maxParallelExecutionSteps;
  }
}
export interface SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location {
  /**
  * The name of the S3 bucket where the PipelineDefinition file is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline#bucket SagemakerPipeline#bucket}
  */
  readonly bucket?: string;
  /**
  * The Amazon S3 ETag (a file checksum) of the PipelineDefinition file. If you don't specify a value, SageMaker skips ETag validation of your PipelineDefinition file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline#e_tag SagemakerPipeline#e_tag}
  */
  readonly eTag?: string;
  /**
  * The file name of the PipelineDefinition file (Amazon S3 object name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline#key SagemakerPipeline#key}
  */
  readonly key?: string;
  /**
  * For versioning-enabled buckets, a specific version of the PipelineDefinition file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline#version SagemakerPipeline#version}
  */
  readonly version?: string;
}

export function sagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationToTerraform(struct?: SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    e_tag: cdktn.stringToTerraform(struct!.eTag),
    key: cdktn.stringToTerraform(struct!.key),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function sagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationToHclTerraform(struct?: SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location | cdktn.IResolvable): any {
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
    e_tag: {
      value: cdktn.stringToHclTerraform(struct!.eTag),
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
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._eTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.eTag = this._eTag;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._eTag = undefined;
      this._key = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._eTag = value.eTag;
      this._key = value.key;
      this._version = value.version;
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

  // e_tag - computed: true, optional: true, required: false
  private _eTag?: string; 
  public get eTag() {
    return this.getStringAttribute('e_tag');
  }
  public set eTag(value: string) {
    this._eTag = value;
  }
  public resetETag() {
    this._eTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eTagInput() {
    return this._eTag;
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

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface SagemakerPipelinePipelineDefinition {
  /**
  * A specification that defines the pipeline in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline#pipeline_definition_body SagemakerPipeline#pipeline_definition_body}
  */
  readonly pipelineDefinitionBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline#pipeline_definition_s3_location SagemakerPipeline#pipeline_definition_s3_location}
  */
  readonly pipelineDefinitionS3Location?: SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location;
}

export function sagemakerPipelinePipelineDefinitionToTerraform(struct?: SagemakerPipelinePipelineDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pipeline_definition_body: cdktn.stringToTerraform(struct!.pipelineDefinitionBody),
    pipeline_definition_s3_location: sagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationToTerraform(struct!.pipelineDefinitionS3Location),
  }
}


export function sagemakerPipelinePipelineDefinitionToHclTerraform(struct?: SagemakerPipelinePipelineDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pipeline_definition_body: {
      value: cdktn.stringToHclTerraform(struct!.pipelineDefinitionBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_definition_s3_location: {
      value: sagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationToHclTerraform(struct!.pipelineDefinitionS3Location),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerPipelinePipelineDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerPipelinePipelineDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pipelineDefinitionBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineDefinitionBody = this._pipelineDefinitionBody;
    }
    if (this._pipelineDefinitionS3Location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineDefinitionS3Location = this._pipelineDefinitionS3Location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerPipelinePipelineDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pipelineDefinitionBody = undefined;
      this._pipelineDefinitionS3Location.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pipelineDefinitionBody = value.pipelineDefinitionBody;
      this._pipelineDefinitionS3Location.internalValue = value.pipelineDefinitionS3Location;
    }
  }

  // pipeline_definition_body - computed: true, optional: true, required: false
  private _pipelineDefinitionBody?: string; 
  public get pipelineDefinitionBody() {
    return this.getStringAttribute('pipeline_definition_body');
  }
  public set pipelineDefinitionBody(value: string) {
    this._pipelineDefinitionBody = value;
  }
  public resetPipelineDefinitionBody() {
    this._pipelineDefinitionBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineDefinitionBodyInput() {
    return this._pipelineDefinitionBody;
  }

  // pipeline_definition_s3_location - computed: true, optional: true, required: false
  private _pipelineDefinitionS3Location = new SagemakerPipelinePipelineDefinitionPipelineDefinitionS3LocationOutputReference(this, "pipeline_definition_s3_location");
  public get pipelineDefinitionS3Location() {
    return this._pipelineDefinitionS3Location;
  }
  public putPipelineDefinitionS3Location(value: SagemakerPipelinePipelineDefinitionPipelineDefinitionS3Location) {
    this._pipelineDefinitionS3Location.internalValue = value;
  }
  public resetPipelineDefinitionS3Location() {
    this._pipelineDefinitionS3Location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineDefinitionS3LocationInput() {
    return this._pipelineDefinitionS3Location.internalValue;
  }
}
export interface SagemakerPipelineTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline#key SagemakerPipeline#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline#value SagemakerPipeline#value}
  */
  readonly value?: string;
}

export function sagemakerPipelineTagsToTerraform(struct?: SagemakerPipelineTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerPipelineTagsToHclTerraform(struct?: SagemakerPipelineTags | cdktn.IResolvable): any {
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

export class SagemakerPipelineTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerPipelineTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerPipelineTags | cdktn.IResolvable | undefined) {
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

export class SagemakerPipelineTagsList extends cdktn.ComplexList {
  public internalValue? : SagemakerPipelineTags[] | cdktn.IResolvable

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
  public get(index: number): SagemakerPipelineTagsOutputReference {
    return new SagemakerPipelineTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline awscc_sagemaker_pipeline}
*/
export class SagemakerPipeline extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerPipeline resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerPipeline to import
  * @param importFromId The id of the existing SagemakerPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_pipeline awscc_sagemaker_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_pipeline',
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
    this._parallelismConfiguration.internalValue = config.parallelismConfiguration;
    this._pipelineDefinition.internalValue = config.pipelineDefinition;
    this._pipelineDescription = config.pipelineDescription;
    this._pipelineDisplayName = config.pipelineDisplayName;
    this._pipelineName = config.pipelineName;
    this._roleArn = config.roleArn;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parallelism_configuration - computed: true, optional: true, required: false
  private _parallelismConfiguration = new SagemakerPipelineParallelismConfigurationOutputReference(this, "parallelism_configuration");
  public get parallelismConfiguration() {
    return this._parallelismConfiguration;
  }
  public putParallelismConfiguration(value: SagemakerPipelineParallelismConfiguration) {
    this._parallelismConfiguration.internalValue = value;
  }
  public resetParallelismConfiguration() {
    this._parallelismConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismConfigurationInput() {
    return this._parallelismConfiguration.internalValue;
  }

  // pipeline_definition - computed: false, optional: false, required: true
  private _pipelineDefinition = new SagemakerPipelinePipelineDefinitionOutputReference(this, "pipeline_definition");
  public get pipelineDefinition() {
    return this._pipelineDefinition;
  }
  public putPipelineDefinition(value: SagemakerPipelinePipelineDefinition) {
    this._pipelineDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineDefinitionInput() {
    return this._pipelineDefinition.internalValue;
  }

  // pipeline_description - computed: true, optional: true, required: false
  private _pipelineDescription?: string; 
  public get pipelineDescription() {
    return this.getStringAttribute('pipeline_description');
  }
  public set pipelineDescription(value: string) {
    this._pipelineDescription = value;
  }
  public resetPipelineDescription() {
    this._pipelineDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineDescriptionInput() {
    return this._pipelineDescription;
  }

  // pipeline_display_name - computed: true, optional: true, required: false
  private _pipelineDisplayName?: string; 
  public get pipelineDisplayName() {
    return this.getStringAttribute('pipeline_display_name');
  }
  public set pipelineDisplayName(value: string) {
    this._pipelineDisplayName = value;
  }
  public resetPipelineDisplayName() {
    this._pipelineDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineDisplayNameInput() {
    return this._pipelineDisplayName;
  }

  // pipeline_name - computed: false, optional: false, required: true
  private _pipelineName?: string; 
  public get pipelineName() {
    return this.getStringAttribute('pipeline_name');
  }
  public set pipelineName(value: string) {
    this._pipelineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineNameInput() {
    return this._pipelineName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SagemakerPipelineTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SagemakerPipelineTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      parallelism_configuration: sagemakerPipelineParallelismConfigurationToTerraform(this._parallelismConfiguration.internalValue),
      pipeline_definition: sagemakerPipelinePipelineDefinitionToTerraform(this._pipelineDefinition.internalValue),
      pipeline_description: cdktn.stringToTerraform(this._pipelineDescription),
      pipeline_display_name: cdktn.stringToTerraform(this._pipelineDisplayName),
      pipeline_name: cdktn.stringToTerraform(this._pipelineName),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.listMapper(sagemakerPipelineTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      parallelism_configuration: {
        value: sagemakerPipelineParallelismConfigurationToHclTerraform(this._parallelismConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerPipelineParallelismConfiguration",
      },
      pipeline_definition: {
        value: sagemakerPipelinePipelineDefinitionToHclTerraform(this._pipelineDefinition.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerPipelinePipelineDefinition",
      },
      pipeline_description: {
        value: cdktn.stringToHclTerraform(this._pipelineDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_display_name: {
        value: cdktn.stringToHclTerraform(this._pipelineDisplayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_name: {
        value: cdktn.stringToHclTerraform(this._pipelineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(sagemakerPipelineTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerPipelineTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
