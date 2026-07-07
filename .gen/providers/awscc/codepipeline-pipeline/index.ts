// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CodepipelinePipelineConfig extends cdktn.TerraformMetaArguments {
  /**
  * The S3 bucket where artifacts for the pipeline are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#artifact_store CodepipelinePipeline#artifact_store}
  */
  readonly artifactStore?: CodepipelinePipelineArtifactStore;
  /**
  * A mapping of artifactStore objects and their corresponding AWS Regions. There must be an artifact store for the pipeline Region and for each cross-region action in the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#artifact_stores CodepipelinePipeline#artifact_stores}
  */
  readonly artifactStores?: CodepipelinePipelineArtifactStores[] | cdktn.IResolvable;
  /**
  * Represents the input of a DisableStageTransition action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#disable_inbound_stage_transitions CodepipelinePipeline#disable_inbound_stage_transitions}
  */
  readonly disableInboundStageTransitions?: CodepipelinePipelineDisableInboundStageTransitions[] | cdktn.IResolvable;
  /**
  * The method that the pipeline will use to handle multiple executions. The default mode is SUPERSEDED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#execution_mode CodepipelinePipeline#execution_mode}
  */
  readonly executionMode?: string;
  /**
  * The name of the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#name CodepipelinePipeline#name}
  */
  readonly name?: string;
  /**
  * CodePipeline provides the following pipeline types, which differ in characteristics and price, so that you can tailor your pipeline features and cost to the needs of your applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#pipeline_type CodepipelinePipeline#pipeline_type}
  */
  readonly pipelineType?: string;
  /**
  * Indicates whether to rerun the CodePipeline pipeline after you update it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#restart_execution_on_update CodepipelinePipeline#restart_execution_on_update}
  */
  readonly restartExecutionOnUpdate?: boolean | cdktn.IResolvable;
  /**
  * The Amazon Resource Name (ARN) for CodePipeline to use to either perform actions with no actionRoleArn, or to use to assume roles for actions with an actionRoleArn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#role_arn CodepipelinePipeline#role_arn}
  */
  readonly roleArn: string;
  /**
  * Represents information about a stage and its definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#stages CodepipelinePipeline#stages}
  */
  readonly stages: CodepipelinePipelineStages[] | cdktn.IResolvable;
  /**
  * Specifies the tags applied to the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#tags CodepipelinePipeline#tags}
  */
  readonly tags?: CodepipelinePipelineTags[] | cdktn.IResolvable;
  /**
  * The trigger configuration specifying a type of event, such as Git tags, that starts the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#triggers CodepipelinePipeline#triggers}
  */
  readonly triggers?: CodepipelinePipelineTriggers[] | cdktn.IResolvable;
  /**
  * A list that defines the pipeline variables for a pipeline resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9@\-_]+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#variables CodepipelinePipeline#variables}
  */
  readonly variables?: CodepipelinePipelineVariables[] | cdktn.IResolvable;
}
export interface CodepipelinePipelineArtifactStoreEncryptionKey {
  /**
  * The ID used to identify the key. For an AWS KMS key, you can use the key ID, the key ARN, or the alias ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#id CodepipelinePipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of encryption key, such as an AWS KMS key. When creating or updating a pipeline, the value must be set to 'KMS'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#type CodepipelinePipeline#type}
  */
  readonly type?: string;
}

export function codepipelinePipelineArtifactStoreEncryptionKeyToTerraform(struct?: CodepipelinePipelineArtifactStoreEncryptionKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function codepipelinePipelineArtifactStoreEncryptionKeyToHclTerraform(struct?: CodepipelinePipelineArtifactStoreEncryptionKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
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

export class CodepipelinePipelineArtifactStoreEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelinePipelineArtifactStoreEncryptionKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineArtifactStoreEncryptionKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
export interface CodepipelinePipelineArtifactStore {
  /**
  * Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#encryption_key CodepipelinePipeline#encryption_key}
  */
  readonly encryptionKey?: CodepipelinePipelineArtifactStoreEncryptionKey;
  /**
  * The S3 bucket used for storing the artifacts for a pipeline. You can specify the name of an S3 bucket but not a folder in the bucket. A folder to contain the pipeline artifacts is created for you based on the name of the pipeline. You can use any S3 bucket in the same AWS Region as the pipeline to store your pipeline artifacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#location CodepipelinePipeline#location}
  */
  readonly location?: string;
  /**
  * The type of the artifact store, such as S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#type CodepipelinePipeline#type}
  */
  readonly type?: string;
}

export function codepipelinePipelineArtifactStoreToTerraform(struct?: CodepipelinePipelineArtifactStore | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_key: codepipelinePipelineArtifactStoreEncryptionKeyToTerraform(struct!.encryptionKey),
    location: cdktn.stringToTerraform(struct!.location),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function codepipelinePipelineArtifactStoreToHclTerraform(struct?: CodepipelinePipelineArtifactStore | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_key: {
      value: codepipelinePipelineArtifactStoreEncryptionKeyToHclTerraform(struct!.encryptionKey),
      isBlock: true,
      type: "struct",
      storageClassType: "CodepipelinePipelineArtifactStoreEncryptionKey",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
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

export class CodepipelinePipelineArtifactStoreOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelinePipelineArtifactStore | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey?.internalValue;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineArtifactStore | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionKey.internalValue = undefined;
      this._location = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionKey.internalValue = value.encryptionKey;
      this._location = value.location;
      this._type = value.type;
    }
  }

  // encryption_key - computed: true, optional: true, required: false
  private _encryptionKey = new CodepipelinePipelineArtifactStoreEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
  public putEncryptionKey(value: CodepipelinePipelineArtifactStoreEncryptionKey) {
    this._encryptionKey.internalValue = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey.internalValue;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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
export interface CodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey {
  /**
  * The ID used to identify the key. For an AWS KMS key, you can use the key ID, the key ARN, or the alias ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#id CodepipelinePipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of encryption key, such as an AWS KMS key. When creating or updating a pipeline, the value must be set to 'KMS'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#type CodepipelinePipeline#type}
  */
  readonly type?: string;
}

export function codepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyToTerraform(struct?: CodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function codepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyToHclTerraform(struct?: CodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
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

export class CodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
export interface CodepipelinePipelineArtifactStoresArtifactStore {
  /**
  * Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#encryption_key CodepipelinePipeline#encryption_key}
  */
  readonly encryptionKey?: CodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey;
  /**
  * The S3 bucket used for storing the artifacts for a pipeline. You can specify the name of an S3 bucket but not a folder in the bucket. A folder to contain the pipeline artifacts is created for you based on the name of the pipeline. You can use any S3 bucket in the same AWS Region as the pipeline to store your pipeline artifacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#location CodepipelinePipeline#location}
  */
  readonly location?: string;
  /**
  * The type of the artifact store, such as S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#type CodepipelinePipeline#type}
  */
  readonly type?: string;
}

export function codepipelinePipelineArtifactStoresArtifactStoreToTerraform(struct?: CodepipelinePipelineArtifactStoresArtifactStore | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_key: codepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyToTerraform(struct!.encryptionKey),
    location: cdktn.stringToTerraform(struct!.location),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function codepipelinePipelineArtifactStoresArtifactStoreToHclTerraform(struct?: CodepipelinePipelineArtifactStoresArtifactStore | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_key: {
      value: codepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyToHclTerraform(struct!.encryptionKey),
      isBlock: true,
      type: "struct",
      storageClassType: "CodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
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

export class CodepipelinePipelineArtifactStoresArtifactStoreOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelinePipelineArtifactStoresArtifactStore | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey?.internalValue;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineArtifactStoresArtifactStore | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionKey.internalValue = undefined;
      this._location = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionKey.internalValue = value.encryptionKey;
      this._location = value.location;
      this._type = value.type;
    }
  }

  // encryption_key - computed: true, optional: true, required: false
  private _encryptionKey = new CodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
  public putEncryptionKey(value: CodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey) {
    this._encryptionKey.internalValue = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey.internalValue;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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
export interface CodepipelinePipelineArtifactStores {
  /**
  * The S3 bucket where artifacts for the pipeline are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#artifact_store CodepipelinePipeline#artifact_store}
  */
  readonly artifactStore?: CodepipelinePipelineArtifactStoresArtifactStore;
  /**
  * The action declaration's AWS Region, such as us-east-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#region CodepipelinePipeline#region}
  */
  readonly region?: string;
}

export function codepipelinePipelineArtifactStoresToTerraform(struct?: CodepipelinePipelineArtifactStores | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    artifact_store: codepipelinePipelineArtifactStoresArtifactStoreToTerraform(struct!.artifactStore),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function codepipelinePipelineArtifactStoresToHclTerraform(struct?: CodepipelinePipelineArtifactStores | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    artifact_store: {
      value: codepipelinePipelineArtifactStoresArtifactStoreToHclTerraform(struct!.artifactStore),
      isBlock: true,
      type: "struct",
      storageClassType: "CodepipelinePipelineArtifactStoresArtifactStore",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineArtifactStoresOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineArtifactStores | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactStore = this._artifactStore?.internalValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineArtifactStores | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactStore.internalValue = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactStore.internalValue = value.artifactStore;
      this._region = value.region;
    }
  }

  // artifact_store - computed: true, optional: true, required: false
  private _artifactStore = new CodepipelinePipelineArtifactStoresArtifactStoreOutputReference(this, "artifact_store");
  public get artifactStore() {
    return this._artifactStore;
  }
  public putArtifactStore(value: CodepipelinePipelineArtifactStoresArtifactStore) {
    this._artifactStore.internalValue = value;
  }
  public resetArtifactStore() {
    this._artifactStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactStoreInput() {
    return this._artifactStore.internalValue;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class CodepipelinePipelineArtifactStoresList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineArtifactStores[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineArtifactStoresOutputReference {
    return new CodepipelinePipelineArtifactStoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineDisableInboundStageTransitions {
  /**
  * The reason given to the user that a stage is disabled, such as waiting for manual approval or manual tests. This message is displayed in the pipeline console UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#reason CodepipelinePipeline#reason}
  */
  readonly reason?: string;
  /**
  * The name of the stage where you want to disable the inbound or outbound transition of artifacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#stage_name CodepipelinePipeline#stage_name}
  */
  readonly stageName?: string;
}

export function codepipelinePipelineDisableInboundStageTransitionsToTerraform(struct?: CodepipelinePipelineDisableInboundStageTransitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    reason: cdktn.stringToTerraform(struct!.reason),
    stage_name: cdktn.stringToTerraform(struct!.stageName),
  }
}


export function codepipelinePipelineDisableInboundStageTransitionsToHclTerraform(struct?: CodepipelinePipelineDisableInboundStageTransitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    reason: {
      value: cdktn.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage_name: {
      value: cdktn.stringToHclTerraform(struct!.stageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineDisableInboundStageTransitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineDisableInboundStageTransitions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._stageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stageName = this._stageName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineDisableInboundStageTransitions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._stageName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reason = value.reason;
      this._stageName = value.stageName;
    }
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // stage_name - computed: true, optional: true, required: false
  private _stageName?: string; 
  public get stageName() {
    return this.getStringAttribute('stage_name');
  }
  public set stageName(value: string) {
    this._stageName = value;
  }
  public resetStageName() {
    this._stageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageNameInput() {
    return this._stageName;
  }
}

export class CodepipelinePipelineDisableInboundStageTransitionsList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineDisableInboundStageTransitions[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineDisableInboundStageTransitionsOutputReference {
    return new CodepipelinePipelineDisableInboundStageTransitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineStagesActionsActionTypeId {
  /**
  * A category defines what kind of action can be taken in the stage, and constrains the provider type for the action. Valid categories are limited to one of the values below.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#category CodepipelinePipeline#category}
  */
  readonly category: string;
  /**
  * The creator of the action being called. There are three valid values for the Owner field in the action category section within your pipeline structure: AWS, ThirdParty, and Custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#owner CodepipelinePipeline#owner}
  */
  readonly owner: string;
  /**
  * The provider of the service being called by the action. Valid providers are determined by the action category. For example, an action in the Deploy category type might have a provider of CodeDeploy, which would be specified as CodeDeploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#provider CodepipelinePipeline#provider}
  */
  readonly provider: string;
  /**
  * A string that describes the action version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#version CodepipelinePipeline#version}
  */
  readonly version: string;
}

export function codepipelinePipelineStagesActionsActionTypeIdToTerraform(struct?: CodepipelinePipelineStagesActionsActionTypeId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: cdktn.stringToTerraform(struct!.category),
    owner: cdktn.stringToTerraform(struct!.owner),
    provider: cdktn.stringToTerraform(struct!.provider),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function codepipelinePipelineStagesActionsActionTypeIdToHclTerraform(struct?: CodepipelinePipelineStagesActionsActionTypeId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktn.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktn.stringToHclTerraform(struct!.provider),
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

export class CodepipelinePipelineStagesActionsActionTypeIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelinePipelineStagesActionsActionTypeId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesActionsActionTypeId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._owner = undefined;
      this._provider = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._owner = value.owner;
      this._provider = value.provider;
      this._version = value.version;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface CodepipelinePipelineStagesActionsEnvironmentVariables {
  /**
  * The name of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#name CodepipelinePipeline#name}
  */
  readonly name?: string;
  /**
  * The type of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#type CodepipelinePipeline#type}
  */
  readonly type?: string;
  /**
  * The value of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#value CodepipelinePipeline#value}
  */
  readonly value?: string;
}

export function codepipelinePipelineStagesActionsEnvironmentVariablesToTerraform(struct?: CodepipelinePipelineStagesActionsEnvironmentVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function codepipelinePipelineStagesActionsEnvironmentVariablesToHclTerraform(struct?: CodepipelinePipelineStagesActionsEnvironmentVariables | cdktn.IResolvable): any {
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
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
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

export class CodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineStagesActionsEnvironmentVariables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesActionsEnvironmentVariables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
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

export class CodepipelinePipelineStagesActionsEnvironmentVariablesList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineStagesActionsEnvironmentVariables[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference {
    return new CodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineStagesActionsInputArtifacts {
  /**
  * The name of the artifact to be worked on (for example, "My App").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#name CodepipelinePipeline#name}
  */
  readonly name?: string;
}

export function codepipelinePipelineStagesActionsInputArtifactsToTerraform(struct?: CodepipelinePipelineStagesActionsInputArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function codepipelinePipelineStagesActionsInputArtifactsToHclTerraform(struct?: CodepipelinePipelineStagesActionsInputArtifacts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineStagesActionsInputArtifactsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineStagesActionsInputArtifacts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesActionsInputArtifacts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class CodepipelinePipelineStagesActionsInputArtifactsList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineStagesActionsInputArtifacts[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineStagesActionsInputArtifactsOutputReference {
    return new CodepipelinePipelineStagesActionsInputArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineStagesActionsOutputArtifacts {
  /**
  * The files that you want to associate with the output artifact that will be exported from the compute action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#files CodepipelinePipeline#files}
  */
  readonly files?: string[];
  /**
  * The name of the output of an artifact, such as "My App".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#name CodepipelinePipeline#name}
  */
  readonly name?: string;
}

export function codepipelinePipelineStagesActionsOutputArtifactsToTerraform(struct?: CodepipelinePipelineStagesActionsOutputArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    files: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.files),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function codepipelinePipelineStagesActionsOutputArtifactsToHclTerraform(struct?: CodepipelinePipelineStagesActionsOutputArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    files: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.files),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineStagesActionsOutputArtifactsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineStagesActionsOutputArtifacts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesActionsOutputArtifacts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._files = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._files = value.files;
      this._name = value.name;
    }
  }

  // files - computed: true, optional: true, required: false
  private _files?: string[]; 
  public get files() {
    return this.getListAttribute('files');
  }
  public set files(value: string[]) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
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
}

export class CodepipelinePipelineStagesActionsOutputArtifactsList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineStagesActionsOutputArtifacts[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineStagesActionsOutputArtifactsOutputReference {
    return new CodepipelinePipelineStagesActionsOutputArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineStagesActions {
  /**
  * Represents information about an action type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#action_type_id CodepipelinePipeline#action_type_id}
  */
  readonly actionTypeId: CodepipelinePipelineStagesActionsActionTypeId;
  /**
  * The shell commands to run with your compute action in CodePipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#commands CodepipelinePipeline#commands}
  */
  readonly commands?: string[];
  /**
  * The action's configuration. These are key-value pairs that specify input values for an action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#configuration CodepipelinePipeline#configuration}
  */
  readonly configuration?: string;
  /**
  * The list of environment variables that are input to a compute based action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#environment_variables CodepipelinePipeline#environment_variables}
  */
  readonly environmentVariables?: CodepipelinePipelineStagesActionsEnvironmentVariables[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#input_artifacts CodepipelinePipeline#input_artifacts}
  */
  readonly inputArtifacts?: CodepipelinePipelineStagesActionsInputArtifacts[] | cdktn.IResolvable;
  /**
  * The action declaration's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#name CodepipelinePipeline#name}
  */
  readonly name: string;
  /**
  * The variable namespace associated with the action. All variables produced as output by this action fall under this namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#namespace CodepipelinePipeline#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#output_artifacts CodepipelinePipeline#output_artifacts}
  */
  readonly outputArtifacts?: CodepipelinePipelineStagesActionsOutputArtifacts[] | cdktn.IResolvable;
  /**
  * The list of variables that are to be exported from the compute action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#output_variables CodepipelinePipeline#output_variables}
  */
  readonly outputVariables?: string[];
  /**
  * The action declaration's AWS Region, such as us-east-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#region CodepipelinePipeline#region}
  */
  readonly region?: string;
  /**
  * The ARN of the IAM service role that performs the declared action. This is assumed through the roleArn for the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#role_arn CodepipelinePipeline#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The order in which actions are run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#run_order CodepipelinePipeline#run_order}
  */
  readonly runOrder?: number;
  /**
  * A timeout duration in minutes that can be applied against the ActionType?s default timeout value specified in Quotas for AWS CodePipeline. This attribute is available only to the manual approval ActionType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#timeout_in_minutes CodepipelinePipeline#timeout_in_minutes}
  */
  readonly timeoutInMinutes?: number;
}

export function codepipelinePipelineStagesActionsToTerraform(struct?: CodepipelinePipelineStagesActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_type_id: codepipelinePipelineStagesActionsActionTypeIdToTerraform(struct!.actionTypeId),
    commands: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.commands),
    configuration: cdktn.stringToTerraform(struct!.configuration),
    environment_variables: cdktn.listMapper(codepipelinePipelineStagesActionsEnvironmentVariablesToTerraform, false)(struct!.environmentVariables),
    input_artifacts: cdktn.listMapper(codepipelinePipelineStagesActionsInputArtifactsToTerraform, false)(struct!.inputArtifacts),
    name: cdktn.stringToTerraform(struct!.name),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    output_artifacts: cdktn.listMapper(codepipelinePipelineStagesActionsOutputArtifactsToTerraform, false)(struct!.outputArtifacts),
    output_variables: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.outputVariables),
    region: cdktn.stringToTerraform(struct!.region),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    run_order: cdktn.numberToTerraform(struct!.runOrder),
    timeout_in_minutes: cdktn.numberToTerraform(struct!.timeoutInMinutes),
  }
}


export function codepipelinePipelineStagesActionsToHclTerraform(struct?: CodepipelinePipelineStagesActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_type_id: {
      value: codepipelinePipelineStagesActionsActionTypeIdToHclTerraform(struct!.actionTypeId),
      isBlock: true,
      type: "struct",
      storageClassType: "CodepipelinePipelineStagesActionsActionTypeId",
    },
    commands: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    configuration: {
      value: cdktn.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_variables: {
      value: cdktn.listMapperHcl(codepipelinePipelineStagesActionsEnvironmentVariablesToHclTerraform, false)(struct!.environmentVariables),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelinePipelineStagesActionsEnvironmentVariablesList",
    },
    input_artifacts: {
      value: cdktn.listMapperHcl(codepipelinePipelineStagesActionsInputArtifactsToHclTerraform, false)(struct!.inputArtifacts),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelinePipelineStagesActionsInputArtifactsList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_artifacts: {
      value: cdktn.listMapperHcl(codepipelinePipelineStagesActionsOutputArtifactsToHclTerraform, false)(struct!.outputArtifacts),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelinePipelineStagesActionsOutputArtifactsList",
    },
    output_variables: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.outputVariables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_order: {
      value: cdktn.numberToHclTerraform(struct!.runOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.timeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineStagesActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineStagesActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionTypeId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionTypeId = this._actionTypeId?.internalValue;
    }
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._environmentVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables?.internalValue;
    }
    if (this._inputArtifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputArtifacts = this._inputArtifacts?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._outputArtifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputArtifacts = this._outputArtifacts?.internalValue;
    }
    if (this._outputVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputVariables = this._outputVariables;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._runOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOrder = this._runOrder;
    }
    if (this._timeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInMinutes = this._timeoutInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionTypeId.internalValue = undefined;
      this._commands = undefined;
      this._configuration = undefined;
      this._environmentVariables.internalValue = undefined;
      this._inputArtifacts.internalValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._outputArtifacts.internalValue = undefined;
      this._outputVariables = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._runOrder = undefined;
      this._timeoutInMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionTypeId.internalValue = value.actionTypeId;
      this._commands = value.commands;
      this._configuration = value.configuration;
      this._environmentVariables.internalValue = value.environmentVariables;
      this._inputArtifacts.internalValue = value.inputArtifacts;
      this._name = value.name;
      this._namespace = value.namespace;
      this._outputArtifacts.internalValue = value.outputArtifacts;
      this._outputVariables = value.outputVariables;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._runOrder = value.runOrder;
      this._timeoutInMinutes = value.timeoutInMinutes;
    }
  }

  // action_type_id - computed: false, optional: false, required: true
  private _actionTypeId = new CodepipelinePipelineStagesActionsActionTypeIdOutputReference(this, "action_type_id");
  public get actionTypeId() {
    return this._actionTypeId;
  }
  public putActionTypeId(value: CodepipelinePipelineStagesActionsActionTypeId) {
    this._actionTypeId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeIdInput() {
    return this._actionTypeId.internalValue;
  }

  // commands - computed: true, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // environment_variables - computed: true, optional: true, required: false
  private _environmentVariables = new CodepipelinePipelineStagesActionsEnvironmentVariablesList(this, "environment_variables", false);
  public get environmentVariables() {
    return this._environmentVariables;
  }
  public putEnvironmentVariables(value: CodepipelinePipelineStagesActionsEnvironmentVariables[] | cdktn.IResolvable) {
    this._environmentVariables.internalValue = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables.internalValue;
  }

  // input_artifacts - computed: true, optional: true, required: false
  private _inputArtifacts = new CodepipelinePipelineStagesActionsInputArtifactsList(this, "input_artifacts", false);
  public get inputArtifacts() {
    return this._inputArtifacts;
  }
  public putInputArtifacts(value: CodepipelinePipelineStagesActionsInputArtifacts[] | cdktn.IResolvable) {
    this._inputArtifacts.internalValue = value;
  }
  public resetInputArtifacts() {
    this._inputArtifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputArtifactsInput() {
    return this._inputArtifacts.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // output_artifacts - computed: true, optional: true, required: false
  private _outputArtifacts = new CodepipelinePipelineStagesActionsOutputArtifactsList(this, "output_artifacts", false);
  public get outputArtifacts() {
    return this._outputArtifacts;
  }
  public putOutputArtifacts(value: CodepipelinePipelineStagesActionsOutputArtifacts[] | cdktn.IResolvable) {
    this._outputArtifacts.internalValue = value;
  }
  public resetOutputArtifacts() {
    this._outputArtifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputArtifactsInput() {
    return this._outputArtifacts.internalValue;
  }

  // output_variables - computed: true, optional: true, required: false
  private _outputVariables?: string[]; 
  public get outputVariables() {
    return this.getListAttribute('output_variables');
  }
  public set outputVariables(value: string[]) {
    this._outputVariables = value;
  }
  public resetOutputVariables() {
    this._outputVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputVariablesInput() {
    return this._outputVariables;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // run_order - computed: true, optional: true, required: false
  private _runOrder?: number; 
  public get runOrder() {
    return this.getNumberAttribute('run_order');
  }
  public set runOrder(value: number) {
    this._runOrder = value;
  }
  public resetRunOrder() {
    this._runOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOrderInput() {
    return this._runOrder;
  }

  // timeout_in_minutes - computed: true, optional: true, required: false
  private _timeoutInMinutes?: number; 
  public get timeoutInMinutes() {
    return this.getNumberAttribute('timeout_in_minutes');
  }
  public set timeoutInMinutes(value: number) {
    this._timeoutInMinutes = value;
  }
  public resetTimeoutInMinutes() {
    this._timeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMinutesInput() {
    return this._timeoutInMinutes;
  }
}

export class CodepipelinePipelineStagesActionsList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineStagesActions[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineStagesActionsOutputReference {
    return new CodepipelinePipelineStagesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts {
  /**
  * The name of the artifact to be worked on (for example, "My App").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#name CodepipelinePipeline#name}
  */
  readonly name?: string;
}

export function codepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsToTerraform(struct?: CodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function codepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsToHclTerraform(struct?: CodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class CodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference {
    return new CodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId {
  /**
  * A category for the provider type for the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#category CodepipelinePipeline#category}
  */
  readonly category?: string;
  /**
  * The creator of the rule being called. Only AWS is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#owner CodepipelinePipeline#owner}
  */
  readonly owner?: string;
  /**
  * The provider of the service being called by the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#provider CodepipelinePipeline#provider}
  */
  readonly provider?: string;
  /**
  * A string that describes the rule version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#version CodepipelinePipeline#version}
  */
  readonly version?: string;
}

export function codepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdToTerraform(struct?: CodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: cdktn.stringToTerraform(struct!.category),
    owner: cdktn.stringToTerraform(struct!.owner),
    provider: cdktn.stringToTerraform(struct!.provider),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function codepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdToHclTerraform(struct?: CodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktn.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktn.stringToHclTerraform(struct!.provider),
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

export class CodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._owner = undefined;
      this._provider = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._owner = value.owner;
      this._provider = value.provider;
      this._version = value.version;
    }
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // provider - computed: true, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
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
export interface CodepipelinePipelineStagesBeforeEntryConditionsRules {
  /**
  * The shell commands to run with your compute action in CodePipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#commands CodepipelinePipeline#commands}
  */
  readonly commands?: string[];
  /**
  * The rule's configuration. These are key-value pairs that specify input values for a rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#configuration CodepipelinePipeline#configuration}
  */
  readonly configuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#input_artifacts CodepipelinePipeline#input_artifacts}
  */
  readonly inputArtifacts?: CodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts[] | cdktn.IResolvable;
  /**
  * The rule declaration's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#name CodepipelinePipeline#name}
  */
  readonly name?: string;
  /**
  * The rule declaration's AWS Region, such as us-east-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#region CodepipelinePipeline#region}
  */
  readonly region?: string;
  /**
  * The ARN of the IAM service role that performs the declared rule. This is assumed through the roleArn for the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#role_arn CodepipelinePipeline#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Represents information about a rule type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#rule_type_id CodepipelinePipeline#rule_type_id}
  */
  readonly ruleTypeId?: CodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId;
}

export function codepipelinePipelineStagesBeforeEntryConditionsRulesToTerraform(struct?: CodepipelinePipelineStagesBeforeEntryConditionsRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    commands: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.commands),
    configuration: cdktn.stringToTerraform(struct!.configuration),
    input_artifacts: cdktn.listMapper(codepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsToTerraform, false)(struct!.inputArtifacts),
    name: cdktn.stringToTerraform(struct!.name),
    region: cdktn.stringToTerraform(struct!.region),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    rule_type_id: codepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdToTerraform(struct!.ruleTypeId),
  }
}


export function codepipelinePipelineStagesBeforeEntryConditionsRulesToHclTerraform(struct?: CodepipelinePipelineStagesBeforeEntryConditionsRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    commands: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    configuration: {
      value: cdktn.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_artifacts: {
      value: cdktn.listMapperHcl(codepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsToHclTerraform, false)(struct!.inputArtifacts),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_type_id: {
      value: codepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdToHclTerraform(struct!.ruleTypeId),
      isBlock: true,
      type: "struct",
      storageClassType: "CodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineStagesBeforeEntryConditionsRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._inputArtifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputArtifacts = this._inputArtifacts?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._ruleTypeId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleTypeId = this._ruleTypeId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesBeforeEntryConditionsRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commands = undefined;
      this._configuration = undefined;
      this._inputArtifacts.internalValue = undefined;
      this._name = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._ruleTypeId.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commands = value.commands;
      this._configuration = value.configuration;
      this._inputArtifacts.internalValue = value.inputArtifacts;
      this._name = value.name;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._ruleTypeId.internalValue = value.ruleTypeId;
    }
  }

  // commands - computed: true, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // input_artifacts - computed: true, optional: true, required: false
  private _inputArtifacts = new CodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList(this, "input_artifacts", false);
  public get inputArtifacts() {
    return this._inputArtifacts;
  }
  public putInputArtifacts(value: CodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts[] | cdktn.IResolvable) {
    this._inputArtifacts.internalValue = value;
  }
  public resetInputArtifacts() {
    this._inputArtifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputArtifactsInput() {
    return this._inputArtifacts.internalValue;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // rule_type_id - computed: true, optional: true, required: false
  private _ruleTypeId = new CodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference(this, "rule_type_id");
  public get ruleTypeId() {
    return this._ruleTypeId;
  }
  public putRuleTypeId(value: CodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId) {
    this._ruleTypeId.internalValue = value;
  }
  public resetRuleTypeId() {
    this._ruleTypeId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeIdInput() {
    return this._ruleTypeId.internalValue;
  }
}

export class CodepipelinePipelineStagesBeforeEntryConditionsRulesList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineStagesBeforeEntryConditionsRules[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference {
    return new CodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineStagesBeforeEntryConditions {
  /**
  * The specified result for when the failure conditions are met, such as rolling back the stage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#result CodepipelinePipeline#result}
  */
  readonly result?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#rules CodepipelinePipeline#rules}
  */
  readonly rules?: CodepipelinePipelineStagesBeforeEntryConditionsRules[] | cdktn.IResolvable;
}

export function codepipelinePipelineStagesBeforeEntryConditionsToTerraform(struct?: CodepipelinePipelineStagesBeforeEntryConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    result: cdktn.stringToTerraform(struct!.result),
    rules: cdktn.listMapper(codepipelinePipelineStagesBeforeEntryConditionsRulesToTerraform, false)(struct!.rules),
  }
}


export function codepipelinePipelineStagesBeforeEntryConditionsToHclTerraform(struct?: CodepipelinePipelineStagesBeforeEntryConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    result: {
      value: cdktn.stringToHclTerraform(struct!.result),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktn.listMapperHcl(codepipelinePipelineStagesBeforeEntryConditionsRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelinePipelineStagesBeforeEntryConditionsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineStagesBeforeEntryConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineStagesBeforeEntryConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._result !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesBeforeEntryConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._result = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._result = value.result;
      this._rules.internalValue = value.rules;
    }
  }

  // result - computed: true, optional: true, required: false
  private _result?: string; 
  public get result() {
    return this.getStringAttribute('result');
  }
  public set result(value: string) {
    this._result = value;
  }
  public resetResult() {
    this._result = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
  }

  // rules - computed: true, optional: true, required: false
  private _rules = new CodepipelinePipelineStagesBeforeEntryConditionsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: CodepipelinePipelineStagesBeforeEntryConditionsRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class CodepipelinePipelineStagesBeforeEntryConditionsList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineStagesBeforeEntryConditions[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineStagesBeforeEntryConditionsOutputReference {
    return new CodepipelinePipelineStagesBeforeEntryConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineStagesBeforeEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#conditions CodepipelinePipeline#conditions}
  */
  readonly conditions?: CodepipelinePipelineStagesBeforeEntryConditions[] | cdktn.IResolvable;
}

export function codepipelinePipelineStagesBeforeEntryToTerraform(struct?: CodepipelinePipelineStagesBeforeEntry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    conditions: cdktn.listMapper(codepipelinePipelineStagesBeforeEntryConditionsToTerraform, false)(struct!.conditions),
  }
}


export function codepipelinePipelineStagesBeforeEntryToHclTerraform(struct?: CodepipelinePipelineStagesBeforeEntry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    conditions: {
      value: cdktn.listMapperHcl(codepipelinePipelineStagesBeforeEntryConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelinePipelineStagesBeforeEntryConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineStagesBeforeEntryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelinePipelineStagesBeforeEntry | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesBeforeEntry | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
    }
  }

  // conditions - computed: true, optional: true, required: false
  private _conditions = new CodepipelinePipelineStagesBeforeEntryConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: CodepipelinePipelineStagesBeforeEntryConditions[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface CodepipelinePipelineStagesBlockers {
  /**
  * Reserved for future use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#name CodepipelinePipeline#name}
  */
  readonly name?: string;
  /**
  * Reserved for future use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#type CodepipelinePipeline#type}
  */
  readonly type?: string;
}

export function codepipelinePipelineStagesBlockersToTerraform(struct?: CodepipelinePipelineStagesBlockers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function codepipelinePipelineStagesBlockersToHclTerraform(struct?: CodepipelinePipelineStagesBlockers | cdktn.IResolvable): any {
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

export class CodepipelinePipelineStagesBlockersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineStagesBlockers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesBlockers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
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

export class CodepipelinePipelineStagesBlockersList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineStagesBlockers[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineStagesBlockersOutputReference {
    return new CodepipelinePipelineStagesBlockersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts {
  /**
  * The name of the artifact to be worked on (for example, "My App").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#name CodepipelinePipeline#name}
  */
  readonly name?: string;
}

export function codepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsToTerraform(struct?: CodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function codepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsToHclTerraform(struct?: CodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class CodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference {
    return new CodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId {
  /**
  * A category for the provider type for the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#category CodepipelinePipeline#category}
  */
  readonly category?: string;
  /**
  * The creator of the rule being called. Only AWS is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#owner CodepipelinePipeline#owner}
  */
  readonly owner?: string;
  /**
  * The provider of the service being called by the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#provider CodepipelinePipeline#provider}
  */
  readonly provider?: string;
  /**
  * A string that describes the rule version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#version CodepipelinePipeline#version}
  */
  readonly version?: string;
}

export function codepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdToTerraform(struct?: CodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: cdktn.stringToTerraform(struct!.category),
    owner: cdktn.stringToTerraform(struct!.owner),
    provider: cdktn.stringToTerraform(struct!.provider),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function codepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdToHclTerraform(struct?: CodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktn.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktn.stringToHclTerraform(struct!.provider),
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

export class CodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._owner = undefined;
      this._provider = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._owner = value.owner;
      this._provider = value.provider;
      this._version = value.version;
    }
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // provider - computed: true, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
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
export interface CodepipelinePipelineStagesOnFailureConditionsRules {
  /**
  * The shell commands to run with your compute action in CodePipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#commands CodepipelinePipeline#commands}
  */
  readonly commands?: string[];
  /**
  * The rule's configuration. These are key-value pairs that specify input values for a rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#configuration CodepipelinePipeline#configuration}
  */
  readonly configuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#input_artifacts CodepipelinePipeline#input_artifacts}
  */
  readonly inputArtifacts?: CodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts[] | cdktn.IResolvable;
  /**
  * The rule declaration's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#name CodepipelinePipeline#name}
  */
  readonly name?: string;
  /**
  * The rule declaration's AWS Region, such as us-east-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#region CodepipelinePipeline#region}
  */
  readonly region?: string;
  /**
  * The ARN of the IAM service role that performs the declared rule. This is assumed through the roleArn for the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#role_arn CodepipelinePipeline#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Represents information about a rule type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#rule_type_id CodepipelinePipeline#rule_type_id}
  */
  readonly ruleTypeId?: CodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId;
}

export function codepipelinePipelineStagesOnFailureConditionsRulesToTerraform(struct?: CodepipelinePipelineStagesOnFailureConditionsRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    commands: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.commands),
    configuration: cdktn.stringToTerraform(struct!.configuration),
    input_artifacts: cdktn.listMapper(codepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsToTerraform, false)(struct!.inputArtifacts),
    name: cdktn.stringToTerraform(struct!.name),
    region: cdktn.stringToTerraform(struct!.region),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    rule_type_id: codepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdToTerraform(struct!.ruleTypeId),
  }
}


export function codepipelinePipelineStagesOnFailureConditionsRulesToHclTerraform(struct?: CodepipelinePipelineStagesOnFailureConditionsRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    commands: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    configuration: {
      value: cdktn.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_artifacts: {
      value: cdktn.listMapperHcl(codepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsToHclTerraform, false)(struct!.inputArtifacts),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_type_id: {
      value: codepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdToHclTerraform(struct!.ruleTypeId),
      isBlock: true,
      type: "struct",
      storageClassType: "CodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineStagesOnFailureConditionsRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineStagesOnFailureConditionsRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._inputArtifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputArtifacts = this._inputArtifacts?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._ruleTypeId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleTypeId = this._ruleTypeId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesOnFailureConditionsRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commands = undefined;
      this._configuration = undefined;
      this._inputArtifacts.internalValue = undefined;
      this._name = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._ruleTypeId.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commands = value.commands;
      this._configuration = value.configuration;
      this._inputArtifacts.internalValue = value.inputArtifacts;
      this._name = value.name;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._ruleTypeId.internalValue = value.ruleTypeId;
    }
  }

  // commands - computed: true, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // input_artifacts - computed: true, optional: true, required: false
  private _inputArtifacts = new CodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList(this, "input_artifacts", false);
  public get inputArtifacts() {
    return this._inputArtifacts;
  }
  public putInputArtifacts(value: CodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts[] | cdktn.IResolvable) {
    this._inputArtifacts.internalValue = value;
  }
  public resetInputArtifacts() {
    this._inputArtifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputArtifactsInput() {
    return this._inputArtifacts.internalValue;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // rule_type_id - computed: true, optional: true, required: false
  private _ruleTypeId = new CodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference(this, "rule_type_id");
  public get ruleTypeId() {
    return this._ruleTypeId;
  }
  public putRuleTypeId(value: CodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId) {
    this._ruleTypeId.internalValue = value;
  }
  public resetRuleTypeId() {
    this._ruleTypeId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeIdInput() {
    return this._ruleTypeId.internalValue;
  }
}

export class CodepipelinePipelineStagesOnFailureConditionsRulesList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineStagesOnFailureConditionsRules[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineStagesOnFailureConditionsRulesOutputReference {
    return new CodepipelinePipelineStagesOnFailureConditionsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineStagesOnFailureConditions {
  /**
  * The specified result for when the failure conditions are met, such as rolling back the stage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#result CodepipelinePipeline#result}
  */
  readonly result?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#rules CodepipelinePipeline#rules}
  */
  readonly rules?: CodepipelinePipelineStagesOnFailureConditionsRules[] | cdktn.IResolvable;
}

export function codepipelinePipelineStagesOnFailureConditionsToTerraform(struct?: CodepipelinePipelineStagesOnFailureConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    result: cdktn.stringToTerraform(struct!.result),
    rules: cdktn.listMapper(codepipelinePipelineStagesOnFailureConditionsRulesToTerraform, false)(struct!.rules),
  }
}


export function codepipelinePipelineStagesOnFailureConditionsToHclTerraform(struct?: CodepipelinePipelineStagesOnFailureConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    result: {
      value: cdktn.stringToHclTerraform(struct!.result),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktn.listMapperHcl(codepipelinePipelineStagesOnFailureConditionsRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelinePipelineStagesOnFailureConditionsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineStagesOnFailureConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineStagesOnFailureConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._result !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesOnFailureConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._result = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._result = value.result;
      this._rules.internalValue = value.rules;
    }
  }

  // result - computed: true, optional: true, required: false
  private _result?: string; 
  public get result() {
    return this.getStringAttribute('result');
  }
  public set result(value: string) {
    this._result = value;
  }
  public resetResult() {
    this._result = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
  }

  // rules - computed: true, optional: true, required: false
  private _rules = new CodepipelinePipelineStagesOnFailureConditionsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: CodepipelinePipelineStagesOnFailureConditionsRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class CodepipelinePipelineStagesOnFailureConditionsList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineStagesOnFailureConditions[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineStagesOnFailureConditionsOutputReference {
    return new CodepipelinePipelineStagesOnFailureConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineStagesOnFailureRetryConfiguration {
  /**
  * The specified retry mode type for the given stage. FAILED_ACTIONS will retry only the failed actions. ALL_ACTIONS will retry both failed and successful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#retry_mode CodepipelinePipeline#retry_mode}
  */
  readonly retryMode?: string;
}

export function codepipelinePipelineStagesOnFailureRetryConfigurationToTerraform(struct?: CodepipelinePipelineStagesOnFailureRetryConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retry_mode: cdktn.stringToTerraform(struct!.retryMode),
  }
}


export function codepipelinePipelineStagesOnFailureRetryConfigurationToHclTerraform(struct?: CodepipelinePipelineStagesOnFailureRetryConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    retry_mode: {
      value: cdktn.stringToHclTerraform(struct!.retryMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelinePipelineStagesOnFailureRetryConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retryMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryMode = this._retryMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesOnFailureRetryConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retryMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retryMode = value.retryMode;
    }
  }

  // retry_mode - computed: true, optional: true, required: false
  private _retryMode?: string; 
  public get retryMode() {
    return this.getStringAttribute('retry_mode');
  }
  public set retryMode(value: string) {
    this._retryMode = value;
  }
  public resetRetryMode() {
    this._retryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryModeInput() {
    return this._retryMode;
  }
}
export interface CodepipelinePipelineStagesOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#conditions CodepipelinePipeline#conditions}
  */
  readonly conditions?: CodepipelinePipelineStagesOnFailureConditions[] | cdktn.IResolvable;
  /**
  * The specified result for when the failure conditions are met, such as rolling back the stage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#result CodepipelinePipeline#result}
  */
  readonly result?: string;
  /**
  * The configuration that specifies the retry configuration for a stage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#retry_configuration CodepipelinePipeline#retry_configuration}
  */
  readonly retryConfiguration?: CodepipelinePipelineStagesOnFailureRetryConfiguration;
}

export function codepipelinePipelineStagesOnFailureToTerraform(struct?: CodepipelinePipelineStagesOnFailure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    conditions: cdktn.listMapper(codepipelinePipelineStagesOnFailureConditionsToTerraform, false)(struct!.conditions),
    result: cdktn.stringToTerraform(struct!.result),
    retry_configuration: codepipelinePipelineStagesOnFailureRetryConfigurationToTerraform(struct!.retryConfiguration),
  }
}


export function codepipelinePipelineStagesOnFailureToHclTerraform(struct?: CodepipelinePipelineStagesOnFailure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    conditions: {
      value: cdktn.listMapperHcl(codepipelinePipelineStagesOnFailureConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelinePipelineStagesOnFailureConditionsList",
    },
    result: {
      value: cdktn.stringToHclTerraform(struct!.result),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_configuration: {
      value: codepipelinePipelineStagesOnFailureRetryConfigurationToHclTerraform(struct!.retryConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "CodepipelinePipelineStagesOnFailureRetryConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineStagesOnFailureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelinePipelineStagesOnFailure | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._result !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result;
    }
    if (this._retryConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryConfiguration = this._retryConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesOnFailure | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._result = undefined;
      this._retryConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._result = value.result;
      this._retryConfiguration.internalValue = value.retryConfiguration;
    }
  }

  // conditions - computed: true, optional: true, required: false
  private _conditions = new CodepipelinePipelineStagesOnFailureConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: CodepipelinePipelineStagesOnFailureConditions[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // result - computed: true, optional: true, required: false
  private _result?: string; 
  public get result() {
    return this.getStringAttribute('result');
  }
  public set result(value: string) {
    this._result = value;
  }
  public resetResult() {
    this._result = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
  }

  // retry_configuration - computed: true, optional: true, required: false
  private _retryConfiguration = new CodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference(this, "retry_configuration");
  public get retryConfiguration() {
    return this._retryConfiguration;
  }
  public putRetryConfiguration(value: CodepipelinePipelineStagesOnFailureRetryConfiguration) {
    this._retryConfiguration.internalValue = value;
  }
  public resetRetryConfiguration() {
    this._retryConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConfigurationInput() {
    return this._retryConfiguration.internalValue;
  }
}
export interface CodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts {
  /**
  * The name of the artifact to be worked on (for example, "My App").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#name CodepipelinePipeline#name}
  */
  readonly name?: string;
}

export function codepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsToTerraform(struct?: CodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function codepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsToHclTerraform(struct?: CodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class CodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference {
    return new CodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId {
  /**
  * A category for the provider type for the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#category CodepipelinePipeline#category}
  */
  readonly category?: string;
  /**
  * The creator of the rule being called. Only AWS is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#owner CodepipelinePipeline#owner}
  */
  readonly owner?: string;
  /**
  * The provider of the service being called by the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#provider CodepipelinePipeline#provider}
  */
  readonly provider?: string;
  /**
  * A string that describes the rule version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#version CodepipelinePipeline#version}
  */
  readonly version?: string;
}

export function codepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdToTerraform(struct?: CodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: cdktn.stringToTerraform(struct!.category),
    owner: cdktn.stringToTerraform(struct!.owner),
    provider: cdktn.stringToTerraform(struct!.provider),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function codepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdToHclTerraform(struct?: CodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: cdktn.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktn.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktn.stringToHclTerraform(struct!.provider),
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

export class CodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._owner = undefined;
      this._provider = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._owner = value.owner;
      this._provider = value.provider;
      this._version = value.version;
    }
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // provider - computed: true, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
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
export interface CodepipelinePipelineStagesOnSuccessConditionsRules {
  /**
  * The shell commands to run with your compute action in CodePipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#commands CodepipelinePipeline#commands}
  */
  readonly commands?: string[];
  /**
  * The rule's configuration. These are key-value pairs that specify input values for a rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#configuration CodepipelinePipeline#configuration}
  */
  readonly configuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#input_artifacts CodepipelinePipeline#input_artifacts}
  */
  readonly inputArtifacts?: CodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts[] | cdktn.IResolvable;
  /**
  * The rule declaration's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#name CodepipelinePipeline#name}
  */
  readonly name?: string;
  /**
  * The rule declaration's AWS Region, such as us-east-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#region CodepipelinePipeline#region}
  */
  readonly region?: string;
  /**
  * The ARN of the IAM service role that performs the declared rule. This is assumed through the roleArn for the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#role_arn CodepipelinePipeline#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Represents information about a rule type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#rule_type_id CodepipelinePipeline#rule_type_id}
  */
  readonly ruleTypeId?: CodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId;
}

export function codepipelinePipelineStagesOnSuccessConditionsRulesToTerraform(struct?: CodepipelinePipelineStagesOnSuccessConditionsRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    commands: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.commands),
    configuration: cdktn.stringToTerraform(struct!.configuration),
    input_artifacts: cdktn.listMapper(codepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsToTerraform, false)(struct!.inputArtifacts),
    name: cdktn.stringToTerraform(struct!.name),
    region: cdktn.stringToTerraform(struct!.region),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    rule_type_id: codepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdToTerraform(struct!.ruleTypeId),
  }
}


export function codepipelinePipelineStagesOnSuccessConditionsRulesToHclTerraform(struct?: CodepipelinePipelineStagesOnSuccessConditionsRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    commands: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    configuration: {
      value: cdktn.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_artifacts: {
      value: cdktn.listMapperHcl(codepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsToHclTerraform, false)(struct!.inputArtifacts),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_type_id: {
      value: codepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdToHclTerraform(struct!.ruleTypeId),
      isBlock: true,
      type: "struct",
      storageClassType: "CodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineStagesOnSuccessConditionsRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._inputArtifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputArtifacts = this._inputArtifacts?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._ruleTypeId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleTypeId = this._ruleTypeId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesOnSuccessConditionsRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commands = undefined;
      this._configuration = undefined;
      this._inputArtifacts.internalValue = undefined;
      this._name = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._ruleTypeId.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commands = value.commands;
      this._configuration = value.configuration;
      this._inputArtifacts.internalValue = value.inputArtifacts;
      this._name = value.name;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._ruleTypeId.internalValue = value.ruleTypeId;
    }
  }

  // commands - computed: true, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // input_artifacts - computed: true, optional: true, required: false
  private _inputArtifacts = new CodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList(this, "input_artifacts", false);
  public get inputArtifacts() {
    return this._inputArtifacts;
  }
  public putInputArtifacts(value: CodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts[] | cdktn.IResolvable) {
    this._inputArtifacts.internalValue = value;
  }
  public resetInputArtifacts() {
    this._inputArtifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputArtifactsInput() {
    return this._inputArtifacts.internalValue;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // rule_type_id - computed: true, optional: true, required: false
  private _ruleTypeId = new CodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference(this, "rule_type_id");
  public get ruleTypeId() {
    return this._ruleTypeId;
  }
  public putRuleTypeId(value: CodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId) {
    this._ruleTypeId.internalValue = value;
  }
  public resetRuleTypeId() {
    this._ruleTypeId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeIdInput() {
    return this._ruleTypeId.internalValue;
  }
}

export class CodepipelinePipelineStagesOnSuccessConditionsRulesList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineStagesOnSuccessConditionsRules[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference {
    return new CodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineStagesOnSuccessConditions {
  /**
  * The specified result for when the failure conditions are met, such as rolling back the stage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#result CodepipelinePipeline#result}
  */
  readonly result?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#rules CodepipelinePipeline#rules}
  */
  readonly rules?: CodepipelinePipelineStagesOnSuccessConditionsRules[] | cdktn.IResolvable;
}

export function codepipelinePipelineStagesOnSuccessConditionsToTerraform(struct?: CodepipelinePipelineStagesOnSuccessConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    result: cdktn.stringToTerraform(struct!.result),
    rules: cdktn.listMapper(codepipelinePipelineStagesOnSuccessConditionsRulesToTerraform, false)(struct!.rules),
  }
}


export function codepipelinePipelineStagesOnSuccessConditionsToHclTerraform(struct?: CodepipelinePipelineStagesOnSuccessConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    result: {
      value: cdktn.stringToHclTerraform(struct!.result),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktn.listMapperHcl(codepipelinePipelineStagesOnSuccessConditionsRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelinePipelineStagesOnSuccessConditionsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineStagesOnSuccessConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineStagesOnSuccessConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._result !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesOnSuccessConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._result = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._result = value.result;
      this._rules.internalValue = value.rules;
    }
  }

  // result - computed: true, optional: true, required: false
  private _result?: string; 
  public get result() {
    return this.getStringAttribute('result');
  }
  public set result(value: string) {
    this._result = value;
  }
  public resetResult() {
    this._result = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
  }

  // rules - computed: true, optional: true, required: false
  private _rules = new CodepipelinePipelineStagesOnSuccessConditionsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: CodepipelinePipelineStagesOnSuccessConditionsRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class CodepipelinePipelineStagesOnSuccessConditionsList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineStagesOnSuccessConditions[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineStagesOnSuccessConditionsOutputReference {
    return new CodepipelinePipelineStagesOnSuccessConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineStagesOnSuccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#conditions CodepipelinePipeline#conditions}
  */
  readonly conditions?: CodepipelinePipelineStagesOnSuccessConditions[] | cdktn.IResolvable;
}

export function codepipelinePipelineStagesOnSuccessToTerraform(struct?: CodepipelinePipelineStagesOnSuccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    conditions: cdktn.listMapper(codepipelinePipelineStagesOnSuccessConditionsToTerraform, false)(struct!.conditions),
  }
}


export function codepipelinePipelineStagesOnSuccessToHclTerraform(struct?: CodepipelinePipelineStagesOnSuccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    conditions: {
      value: cdktn.listMapperHcl(codepipelinePipelineStagesOnSuccessConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelinePipelineStagesOnSuccessConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineStagesOnSuccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelinePipelineStagesOnSuccess | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStagesOnSuccess | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
    }
  }

  // conditions - computed: true, optional: true, required: false
  private _conditions = new CodepipelinePipelineStagesOnSuccessConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: CodepipelinePipelineStagesOnSuccessConditions[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface CodepipelinePipelineStages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#actions CodepipelinePipeline#actions}
  */
  readonly actions: CodepipelinePipelineStagesActions[] | cdktn.IResolvable;
  /**
  * The method to use before stage runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#before_entry CodepipelinePipeline#before_entry}
  */
  readonly beforeEntry?: CodepipelinePipelineStagesBeforeEntry;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#blockers CodepipelinePipeline#blockers}
  */
  readonly blockers?: CodepipelinePipelineStagesBlockers[] | cdktn.IResolvable;
  /**
  * The name of the stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#name CodepipelinePipeline#name}
  */
  readonly name: string;
  /**
  * The method to use when a stage has not completed successfully
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#on_failure CodepipelinePipeline#on_failure}
  */
  readonly onFailure?: CodepipelinePipelineStagesOnFailure;
  /**
  * The method to use when a stage has completed successfully
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#on_success CodepipelinePipeline#on_success}
  */
  readonly onSuccess?: CodepipelinePipelineStagesOnSuccess;
}

export function codepipelinePipelineStagesToTerraform(struct?: CodepipelinePipelineStages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(codepipelinePipelineStagesActionsToTerraform, false)(struct!.actions),
    before_entry: codepipelinePipelineStagesBeforeEntryToTerraform(struct!.beforeEntry),
    blockers: cdktn.listMapper(codepipelinePipelineStagesBlockersToTerraform, false)(struct!.blockers),
    name: cdktn.stringToTerraform(struct!.name),
    on_failure: codepipelinePipelineStagesOnFailureToTerraform(struct!.onFailure),
    on_success: codepipelinePipelineStagesOnSuccessToTerraform(struct!.onSuccess),
  }
}


export function codepipelinePipelineStagesToHclTerraform(struct?: CodepipelinePipelineStages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(codepipelinePipelineStagesActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelinePipelineStagesActionsList",
    },
    before_entry: {
      value: codepipelinePipelineStagesBeforeEntryToHclTerraform(struct!.beforeEntry),
      isBlock: true,
      type: "struct",
      storageClassType: "CodepipelinePipelineStagesBeforeEntry",
    },
    blockers: {
      value: cdktn.listMapperHcl(codepipelinePipelineStagesBlockersToHclTerraform, false)(struct!.blockers),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelinePipelineStagesBlockersList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_failure: {
      value: codepipelinePipelineStagesOnFailureToHclTerraform(struct!.onFailure),
      isBlock: true,
      type: "struct",
      storageClassType: "CodepipelinePipelineStagesOnFailure",
    },
    on_success: {
      value: codepipelinePipelineStagesOnSuccessToHclTerraform(struct!.onSuccess),
      isBlock: true,
      type: "struct",
      storageClassType: "CodepipelinePipelineStagesOnSuccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineStagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineStages | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._beforeEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.beforeEntry = this._beforeEntry?.internalValue;
    }
    if (this._blockers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockers = this._blockers?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure?.internalValue;
    }
    if (this._onSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSuccess = this._onSuccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineStages | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._beforeEntry.internalValue = undefined;
      this._blockers.internalValue = undefined;
      this._name = undefined;
      this._onFailure.internalValue = undefined;
      this._onSuccess.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._beforeEntry.internalValue = value.beforeEntry;
      this._blockers.internalValue = value.blockers;
      this._name = value.name;
      this._onFailure.internalValue = value.onFailure;
      this._onSuccess.internalValue = value.onSuccess;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new CodepipelinePipelineStagesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: CodepipelinePipelineStagesActions[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // before_entry - computed: true, optional: true, required: false
  private _beforeEntry = new CodepipelinePipelineStagesBeforeEntryOutputReference(this, "before_entry");
  public get beforeEntry() {
    return this._beforeEntry;
  }
  public putBeforeEntry(value: CodepipelinePipelineStagesBeforeEntry) {
    this._beforeEntry.internalValue = value;
  }
  public resetBeforeEntry() {
    this._beforeEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeEntryInput() {
    return this._beforeEntry.internalValue;
  }

  // blockers - computed: true, optional: true, required: false
  private _blockers = new CodepipelinePipelineStagesBlockersList(this, "blockers", false);
  public get blockers() {
    return this._blockers;
  }
  public putBlockers(value: CodepipelinePipelineStagesBlockers[] | cdktn.IResolvable) {
    this._blockers.internalValue = value;
  }
  public resetBlockers() {
    this._blockers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockersInput() {
    return this._blockers.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on_failure - computed: true, optional: true, required: false
  private _onFailure = new CodepipelinePipelineStagesOnFailureOutputReference(this, "on_failure");
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: CodepipelinePipelineStagesOnFailure) {
    this._onFailure.internalValue = value;
  }
  public resetOnFailure() {
    this._onFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure.internalValue;
  }

  // on_success - computed: true, optional: true, required: false
  private _onSuccess = new CodepipelinePipelineStagesOnSuccessOutputReference(this, "on_success");
  public get onSuccess() {
    return this._onSuccess;
  }
  public putOnSuccess(value: CodepipelinePipelineStagesOnSuccess) {
    this._onSuccess.internalValue = value;
  }
  public resetOnSuccess() {
    this._onSuccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSuccessInput() {
    return this._onSuccess.internalValue;
  }
}

export class CodepipelinePipelineStagesList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineStages[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineStagesOutputReference {
    return new CodepipelinePipelineStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineTags {
  /**
  * The tag's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#key CodepipelinePipeline#key}
  */
  readonly key?: string;
  /**
  * The tag's value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#value CodepipelinePipeline#value}
  */
  readonly value?: string;
}

export function codepipelinePipelineTagsToTerraform(struct?: CodepipelinePipelineTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function codepipelinePipelineTagsToHclTerraform(struct?: CodepipelinePipelineTags | cdktn.IResolvable): any {
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

export class CodepipelinePipelineTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CodepipelinePipelineTags | cdktn.IResolvable | undefined) {
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

export class CodepipelinePipelineTagsList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineTags[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineTagsOutputReference {
    return new CodepipelinePipelineTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineTriggersGitConfigurationPullRequestBranches {
  /**
  * The list of patterns of Git branches that, when a commit is pushed, are to be excluded from starting the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#excludes CodepipelinePipeline#excludes}
  */
  readonly excludes?: string[];
  /**
  * The list of patterns of Git branches that, when a commit is pushed, are to be included as criteria that starts the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#includes CodepipelinePipeline#includes}
  */
  readonly includes?: string[];
}

export function codepipelinePipelineTriggersGitConfigurationPullRequestBranchesToTerraform(struct?: CodepipelinePipelineTriggersGitConfigurationPullRequestBranches | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excludes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludes),
    includes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includes),
  }
}


export function codepipelinePipelineTriggersGitConfigurationPullRequestBranchesToHclTerraform(struct?: CodepipelinePipelineTriggersGitConfigurationPullRequestBranches | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excludes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    includes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelinePipelineTriggersGitConfigurationPullRequestBranches | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._includes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineTriggersGitConfigurationPullRequestBranches | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludes = undefined;
      this._includes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludes = value.excludes;
      this._includes = value.includes;
    }
  }

  // excludes - computed: true, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // includes - computed: true, optional: true, required: false
  private _includes?: string[]; 
  public get includes() {
    return this.getListAttribute('includes');
  }
  public set includes(value: string[]) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes;
  }
}
export interface CodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths {
  /**
  * The list of patterns of Git repository file paths that, when a commit is pushed, are to be excluded from starting the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#excludes CodepipelinePipeline#excludes}
  */
  readonly excludes?: string[];
  /**
  * The list of patterns of Git repository file paths that, when a commit is pushed, are to be included as criteria that starts the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#includes CodepipelinePipeline#includes}
  */
  readonly includes?: string[];
}

export function codepipelinePipelineTriggersGitConfigurationPullRequestFilePathsToTerraform(struct?: CodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excludes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludes),
    includes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includes),
  }
}


export function codepipelinePipelineTriggersGitConfigurationPullRequestFilePathsToHclTerraform(struct?: CodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excludes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    includes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._includes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludes = undefined;
      this._includes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludes = value.excludes;
      this._includes = value.includes;
    }
  }

  // excludes - computed: true, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // includes - computed: true, optional: true, required: false
  private _includes?: string[]; 
  public get includes() {
    return this.getListAttribute('includes');
  }
  public set includes(value: string[]) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes;
  }
}
export interface CodepipelinePipelineTriggersGitConfigurationPullRequest {
  /**
  * The Git repository branches specified as filter criteria to start the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#branches CodepipelinePipeline#branches}
  */
  readonly branches?: CodepipelinePipelineTriggersGitConfigurationPullRequestBranches;
  /**
  * The field that specifies which pull request events to filter on (opened, updated, closed) for the trigger configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#events CodepipelinePipeline#events}
  */
  readonly events?: string[];
  /**
  * The Git repository file paths specified as filter criteria to start the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#file_paths CodepipelinePipeline#file_paths}
  */
  readonly filePaths?: CodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths;
}

export function codepipelinePipelineTriggersGitConfigurationPullRequestToTerraform(struct?: CodepipelinePipelineTriggersGitConfigurationPullRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    branches: codepipelinePipelineTriggersGitConfigurationPullRequestBranchesToTerraform(struct!.branches),
    events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.events),
    file_paths: codepipelinePipelineTriggersGitConfigurationPullRequestFilePathsToTerraform(struct!.filePaths),
  }
}


export function codepipelinePipelineTriggersGitConfigurationPullRequestToHclTerraform(struct?: CodepipelinePipelineTriggersGitConfigurationPullRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    branches: {
      value: codepipelinePipelineTriggersGitConfigurationPullRequestBranchesToHclTerraform(struct!.branches),
      isBlock: true,
      type: "struct",
      storageClassType: "CodepipelinePipelineTriggersGitConfigurationPullRequestBranches",
    },
    events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_paths: {
      value: codepipelinePipelineTriggersGitConfigurationPullRequestFilePathsToHclTerraform(struct!.filePaths),
      isBlock: true,
      type: "struct",
      storageClassType: "CodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineTriggersGitConfigurationPullRequest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches?.internalValue;
    }
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._filePaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePaths = this._filePaths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineTriggersGitConfigurationPullRequest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branches.internalValue = undefined;
      this._events = undefined;
      this._filePaths.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branches.internalValue = value.branches;
      this._events = value.events;
      this._filePaths.internalValue = value.filePaths;
    }
  }

  // branches - computed: true, optional: true, required: false
  private _branches = new CodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference(this, "branches");
  public get branches() {
    return this._branches;
  }
  public putBranches(value: CodepipelinePipelineTriggersGitConfigurationPullRequestBranches) {
    this._branches.internalValue = value;
  }
  public resetBranches() {
    this._branches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches.internalValue;
  }

  // events - computed: true, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // file_paths - computed: true, optional: true, required: false
  private _filePaths = new CodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference(this, "file_paths");
  public get filePaths() {
    return this._filePaths;
  }
  public putFilePaths(value: CodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths) {
    this._filePaths.internalValue = value;
  }
  public resetFilePaths() {
    this._filePaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathsInput() {
    return this._filePaths.internalValue;
  }
}

export class CodepipelinePipelineTriggersGitConfigurationPullRequestList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineTriggersGitConfigurationPullRequest[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference {
    return new CodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineTriggersGitConfigurationPushBranches {
  /**
  * The list of patterns of Git branches that, when a commit is pushed, are to be excluded from starting the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#excludes CodepipelinePipeline#excludes}
  */
  readonly excludes?: string[];
  /**
  * The list of patterns of Git branches that, when a commit is pushed, are to be included as criteria that starts the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#includes CodepipelinePipeline#includes}
  */
  readonly includes?: string[];
}

export function codepipelinePipelineTriggersGitConfigurationPushBranchesToTerraform(struct?: CodepipelinePipelineTriggersGitConfigurationPushBranches | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excludes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludes),
    includes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includes),
  }
}


export function codepipelinePipelineTriggersGitConfigurationPushBranchesToHclTerraform(struct?: CodepipelinePipelineTriggersGitConfigurationPushBranches | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excludes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    includes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelinePipelineTriggersGitConfigurationPushBranches | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._includes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineTriggersGitConfigurationPushBranches | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludes = undefined;
      this._includes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludes = value.excludes;
      this._includes = value.includes;
    }
  }

  // excludes - computed: true, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // includes - computed: true, optional: true, required: false
  private _includes?: string[]; 
  public get includes() {
    return this.getListAttribute('includes');
  }
  public set includes(value: string[]) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes;
  }
}
export interface CodepipelinePipelineTriggersGitConfigurationPushFilePaths {
  /**
  * The list of patterns of Git repository file paths that, when a commit is pushed, are to be excluded from starting the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#excludes CodepipelinePipeline#excludes}
  */
  readonly excludes?: string[];
  /**
  * The list of patterns of Git repository file paths that, when a commit is pushed, are to be included as criteria that starts the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#includes CodepipelinePipeline#includes}
  */
  readonly includes?: string[];
}

export function codepipelinePipelineTriggersGitConfigurationPushFilePathsToTerraform(struct?: CodepipelinePipelineTriggersGitConfigurationPushFilePaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excludes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludes),
    includes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includes),
  }
}


export function codepipelinePipelineTriggersGitConfigurationPushFilePathsToHclTerraform(struct?: CodepipelinePipelineTriggersGitConfigurationPushFilePaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excludes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    includes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelinePipelineTriggersGitConfigurationPushFilePaths | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._includes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineTriggersGitConfigurationPushFilePaths | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludes = undefined;
      this._includes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludes = value.excludes;
      this._includes = value.includes;
    }
  }

  // excludes - computed: true, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // includes - computed: true, optional: true, required: false
  private _includes?: string[]; 
  public get includes() {
    return this.getListAttribute('includes');
  }
  public set includes(value: string[]) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes;
  }
}
export interface CodepipelinePipelineTriggersGitConfigurationPushTags {
  /**
  * The list of patterns of Git tags that, when pushed, are to be excluded from starting the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#excludes CodepipelinePipeline#excludes}
  */
  readonly excludes?: string[];
  /**
  * The list of patterns of Git tags that, when pushed, are to be included as criteria that starts the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#includes CodepipelinePipeline#includes}
  */
  readonly includes?: string[];
}

export function codepipelinePipelineTriggersGitConfigurationPushTagsToTerraform(struct?: CodepipelinePipelineTriggersGitConfigurationPushTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excludes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludes),
    includes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includes),
  }
}


export function codepipelinePipelineTriggersGitConfigurationPushTagsToHclTerraform(struct?: CodepipelinePipelineTriggersGitConfigurationPushTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excludes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    includes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelinePipelineTriggersGitConfigurationPushTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._includes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineTriggersGitConfigurationPushTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludes = undefined;
      this._includes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludes = value.excludes;
      this._includes = value.includes;
    }
  }

  // excludes - computed: true, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // includes - computed: true, optional: true, required: false
  private _includes?: string[]; 
  public get includes() {
    return this.getListAttribute('includes');
  }
  public set includes(value: string[]) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes;
  }
}
export interface CodepipelinePipelineTriggersGitConfigurationPush {
  /**
  * The Git repository branches specified as filter criteria to start the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#branches CodepipelinePipeline#branches}
  */
  readonly branches?: CodepipelinePipelineTriggersGitConfigurationPushBranches;
  /**
  * The Git repository file paths specified as filter criteria to start the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#file_paths CodepipelinePipeline#file_paths}
  */
  readonly filePaths?: CodepipelinePipelineTriggersGitConfigurationPushFilePaths;
  /**
  * The Git tags specified as filter criteria for whether a Git tag repository event will start the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#tags CodepipelinePipeline#tags}
  */
  readonly tags?: CodepipelinePipelineTriggersGitConfigurationPushTags;
}

export function codepipelinePipelineTriggersGitConfigurationPushToTerraform(struct?: CodepipelinePipelineTriggersGitConfigurationPush | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    branches: codepipelinePipelineTriggersGitConfigurationPushBranchesToTerraform(struct!.branches),
    file_paths: codepipelinePipelineTriggersGitConfigurationPushFilePathsToTerraform(struct!.filePaths),
    tags: codepipelinePipelineTriggersGitConfigurationPushTagsToTerraform(struct!.tags),
  }
}


export function codepipelinePipelineTriggersGitConfigurationPushToHclTerraform(struct?: CodepipelinePipelineTriggersGitConfigurationPush | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    branches: {
      value: codepipelinePipelineTriggersGitConfigurationPushBranchesToHclTerraform(struct!.branches),
      isBlock: true,
      type: "struct",
      storageClassType: "CodepipelinePipelineTriggersGitConfigurationPushBranches",
    },
    file_paths: {
      value: codepipelinePipelineTriggersGitConfigurationPushFilePathsToHclTerraform(struct!.filePaths),
      isBlock: true,
      type: "struct",
      storageClassType: "CodepipelinePipelineTriggersGitConfigurationPushFilePaths",
    },
    tags: {
      value: codepipelinePipelineTriggersGitConfigurationPushTagsToHclTerraform(struct!.tags),
      isBlock: true,
      type: "struct",
      storageClassType: "CodepipelinePipelineTriggersGitConfigurationPushTags",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineTriggersGitConfigurationPushOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineTriggersGitConfigurationPush | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches?.internalValue;
    }
    if (this._filePaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePaths = this._filePaths?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineTriggersGitConfigurationPush | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branches.internalValue = undefined;
      this._filePaths.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branches.internalValue = value.branches;
      this._filePaths.internalValue = value.filePaths;
      this._tags.internalValue = value.tags;
    }
  }

  // branches - computed: true, optional: true, required: false
  private _branches = new CodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference(this, "branches");
  public get branches() {
    return this._branches;
  }
  public putBranches(value: CodepipelinePipelineTriggersGitConfigurationPushBranches) {
    this._branches.internalValue = value;
  }
  public resetBranches() {
    this._branches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches.internalValue;
  }

  // file_paths - computed: true, optional: true, required: false
  private _filePaths = new CodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference(this, "file_paths");
  public get filePaths() {
    return this._filePaths;
  }
  public putFilePaths(value: CodepipelinePipelineTriggersGitConfigurationPushFilePaths) {
    this._filePaths.internalValue = value;
  }
  public resetFilePaths() {
    this._filePaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathsInput() {
    return this._filePaths.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new CodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: CodepipelinePipelineTriggersGitConfigurationPushTags) {
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

export class CodepipelinePipelineTriggersGitConfigurationPushList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineTriggersGitConfigurationPush[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineTriggersGitConfigurationPushOutputReference {
    return new CodepipelinePipelineTriggersGitConfigurationPushOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineTriggersGitConfiguration {
  /**
  * The field where the repository event that will start the pipeline is specified as pull requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#pull_request CodepipelinePipeline#pull_request}
  */
  readonly pullRequest?: CodepipelinePipelineTriggersGitConfigurationPullRequest[] | cdktn.IResolvable;
  /**
  * The field where the repository event that will start the pipeline, such as pushing Git tags, is specified with details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#push CodepipelinePipeline#push}
  */
  readonly push?: CodepipelinePipelineTriggersGitConfigurationPush[] | cdktn.IResolvable;
  /**
  * The name of the pipeline source action where the trigger configuration, such as Git tags, is specified. The trigger configuration will start the pipeline upon the specified change only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#source_action_name CodepipelinePipeline#source_action_name}
  */
  readonly sourceActionName?: string;
}

export function codepipelinePipelineTriggersGitConfigurationToTerraform(struct?: CodepipelinePipelineTriggersGitConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pull_request: cdktn.listMapper(codepipelinePipelineTriggersGitConfigurationPullRequestToTerraform, false)(struct!.pullRequest),
    push: cdktn.listMapper(codepipelinePipelineTriggersGitConfigurationPushToTerraform, false)(struct!.push),
    source_action_name: cdktn.stringToTerraform(struct!.sourceActionName),
  }
}


export function codepipelinePipelineTriggersGitConfigurationToHclTerraform(struct?: CodepipelinePipelineTriggersGitConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pull_request: {
      value: cdktn.listMapperHcl(codepipelinePipelineTriggersGitConfigurationPullRequestToHclTerraform, false)(struct!.pullRequest),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelinePipelineTriggersGitConfigurationPullRequestList",
    },
    push: {
      value: cdktn.listMapperHcl(codepipelinePipelineTriggersGitConfigurationPushToHclTerraform, false)(struct!.push),
      isBlock: true,
      type: "list",
      storageClassType: "CodepipelinePipelineTriggersGitConfigurationPushList",
    },
    source_action_name: {
      value: cdktn.stringToHclTerraform(struct!.sourceActionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineTriggersGitConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelinePipelineTriggersGitConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pullRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequest = this._pullRequest?.internalValue;
    }
    if (this._push?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.push = this._push?.internalValue;
    }
    if (this._sourceActionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceActionName = this._sourceActionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineTriggersGitConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pullRequest.internalValue = undefined;
      this._push.internalValue = undefined;
      this._sourceActionName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pullRequest.internalValue = value.pullRequest;
      this._push.internalValue = value.push;
      this._sourceActionName = value.sourceActionName;
    }
  }

  // pull_request - computed: true, optional: true, required: false
  private _pullRequest = new CodepipelinePipelineTriggersGitConfigurationPullRequestList(this, "pull_request", false);
  public get pullRequest() {
    return this._pullRequest;
  }
  public putPullRequest(value: CodepipelinePipelineTriggersGitConfigurationPullRequest[] | cdktn.IResolvable) {
    this._pullRequest.internalValue = value;
  }
  public resetPullRequest() {
    this._pullRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestInput() {
    return this._pullRequest.internalValue;
  }

  // push - computed: true, optional: true, required: false
  private _push = new CodepipelinePipelineTriggersGitConfigurationPushList(this, "push", false);
  public get push() {
    return this._push;
  }
  public putPush(value: CodepipelinePipelineTriggersGitConfigurationPush[] | cdktn.IResolvable) {
    this._push.internalValue = value;
  }
  public resetPush() {
    this._push.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInput() {
    return this._push.internalValue;
  }

  // source_action_name - computed: true, optional: true, required: false
  private _sourceActionName?: string; 
  public get sourceActionName() {
    return this.getStringAttribute('source_action_name');
  }
  public set sourceActionName(value: string) {
    this._sourceActionName = value;
  }
  public resetSourceActionName() {
    this._sourceActionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceActionNameInput() {
    return this._sourceActionName;
  }
}
export interface CodepipelinePipelineTriggers {
  /**
  * A type of trigger configuration for Git-based source actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#git_configuration CodepipelinePipeline#git_configuration}
  */
  readonly gitConfiguration?: CodepipelinePipelineTriggersGitConfiguration;
  /**
  * The source provider for the event, such as connections configured for a repository with Git tags, for the specified trigger configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#provider_type CodepipelinePipeline#provider_type}
  */
  readonly providerType?: string;
}

export function codepipelinePipelineTriggersToTerraform(struct?: CodepipelinePipelineTriggers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    git_configuration: codepipelinePipelineTriggersGitConfigurationToTerraform(struct!.gitConfiguration),
    provider_type: cdktn.stringToTerraform(struct!.providerType),
  }
}


export function codepipelinePipelineTriggersToHclTerraform(struct?: CodepipelinePipelineTriggers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    git_configuration: {
      value: codepipelinePipelineTriggersGitConfigurationToHclTerraform(struct!.gitConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "CodepipelinePipelineTriggersGitConfiguration",
    },
    provider_type: {
      value: cdktn.stringToHclTerraform(struct!.providerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineTriggersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineTriggers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gitConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitConfiguration = this._gitConfiguration?.internalValue;
    }
    if (this._providerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerType = this._providerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineTriggers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gitConfiguration.internalValue = undefined;
      this._providerType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gitConfiguration.internalValue = value.gitConfiguration;
      this._providerType = value.providerType;
    }
  }

  // git_configuration - computed: true, optional: true, required: false
  private _gitConfiguration = new CodepipelinePipelineTriggersGitConfigurationOutputReference(this, "git_configuration");
  public get gitConfiguration() {
    return this._gitConfiguration;
  }
  public putGitConfiguration(value: CodepipelinePipelineTriggersGitConfiguration) {
    this._gitConfiguration.internalValue = value;
  }
  public resetGitConfiguration() {
    this._gitConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitConfigurationInput() {
    return this._gitConfiguration.internalValue;
  }

  // provider_type - computed: true, optional: true, required: false
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  public resetProviderType() {
    this._providerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
  }
}

export class CodepipelinePipelineTriggersList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineTriggers[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineTriggersOutputReference {
    return new CodepipelinePipelineTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelinePipelineVariables {
  /**
  * The value of a pipeline-level variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#default_value CodepipelinePipeline#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The description of a pipeline-level variable. It's used to add additional context about the variable, and not being used at time when pipeline executes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#description CodepipelinePipeline#description}
  */
  readonly description?: string;
  /**
  * The name of a pipeline-level variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#name CodepipelinePipeline#name}
  */
  readonly name?: string;
}

export function codepipelinePipelineVariablesToTerraform(struct?: CodepipelinePipelineVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function codepipelinePipelineVariablesToHclTerraform(struct?: CodepipelinePipelineVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelinePipelineVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelinePipelineVariables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelinePipelineVariables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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
}

export class CodepipelinePipelineVariablesList extends cdktn.ComplexList {
  public internalValue? : CodepipelinePipelineVariables[] | cdktn.IResolvable

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
  public get(index: number): CodepipelinePipelineVariablesOutputReference {
    return new CodepipelinePipelineVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline awscc_codepipeline_pipeline}
*/
export class CodepipelinePipeline extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_codepipeline_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CodepipelinePipeline resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CodepipelinePipeline to import
  * @param importFromId The id of the existing CodepipelinePipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CodepipelinePipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codepipeline_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/codepipeline_pipeline awscc_codepipeline_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodepipelinePipelineConfig
  */
  public constructor(scope: Construct, id: string, config: CodepipelinePipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_codepipeline_pipeline',
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
    this._artifactStore.internalValue = config.artifactStore;
    this._artifactStores.internalValue = config.artifactStores;
    this._disableInboundStageTransitions.internalValue = config.disableInboundStageTransitions;
    this._executionMode = config.executionMode;
    this._name = config.name;
    this._pipelineType = config.pipelineType;
    this._restartExecutionOnUpdate = config.restartExecutionOnUpdate;
    this._roleArn = config.roleArn;
    this._stages.internalValue = config.stages;
    this._tags.internalValue = config.tags;
    this._triggers.internalValue = config.triggers;
    this._variables.internalValue = config.variables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_store - computed: true, optional: true, required: false
  private _artifactStore = new CodepipelinePipelineArtifactStoreOutputReference(this, "artifact_store");
  public get artifactStore() {
    return this._artifactStore;
  }
  public putArtifactStore(value: CodepipelinePipelineArtifactStore) {
    this._artifactStore.internalValue = value;
  }
  public resetArtifactStore() {
    this._artifactStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactStoreInput() {
    return this._artifactStore.internalValue;
  }

  // artifact_stores - computed: true, optional: true, required: false
  private _artifactStores = new CodepipelinePipelineArtifactStoresList(this, "artifact_stores", false);
  public get artifactStores() {
    return this._artifactStores;
  }
  public putArtifactStores(value: CodepipelinePipelineArtifactStores[] | cdktn.IResolvable) {
    this._artifactStores.internalValue = value;
  }
  public resetArtifactStores() {
    this._artifactStores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactStoresInput() {
    return this._artifactStores.internalValue;
  }

  // disable_inbound_stage_transitions - computed: true, optional: true, required: false
  private _disableInboundStageTransitions = new CodepipelinePipelineDisableInboundStageTransitionsList(this, "disable_inbound_stage_transitions", false);
  public get disableInboundStageTransitions() {
    return this._disableInboundStageTransitions;
  }
  public putDisableInboundStageTransitions(value: CodepipelinePipelineDisableInboundStageTransitions[] | cdktn.IResolvable) {
    this._disableInboundStageTransitions.internalValue = value;
  }
  public resetDisableInboundStageTransitions() {
    this._disableInboundStageTransitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInboundStageTransitionsInput() {
    return this._disableInboundStageTransitions.internalValue;
  }

  // execution_mode - computed: true, optional: true, required: false
  private _executionMode?: string; 
  public get executionMode() {
    return this.getStringAttribute('execution_mode');
  }
  public set executionMode(value: string) {
    this._executionMode = value;
  }
  public resetExecutionMode() {
    this._executionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionModeInput() {
    return this._executionMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // pipeline_type - computed: true, optional: true, required: false
  private _pipelineType?: string; 
  public get pipelineType() {
    return this.getStringAttribute('pipeline_type');
  }
  public set pipelineType(value: string) {
    this._pipelineType = value;
  }
  public resetPipelineType() {
    this._pipelineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineTypeInput() {
    return this._pipelineType;
  }

  // restart_execution_on_update - computed: true, optional: true, required: false
  private _restartExecutionOnUpdate?: boolean | cdktn.IResolvable; 
  public get restartExecutionOnUpdate() {
    return this.getBooleanAttribute('restart_execution_on_update');
  }
  public set restartExecutionOnUpdate(value: boolean | cdktn.IResolvable) {
    this._restartExecutionOnUpdate = value;
  }
  public resetRestartExecutionOnUpdate() {
    this._restartExecutionOnUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartExecutionOnUpdateInput() {
    return this._restartExecutionOnUpdate;
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

  // stages - computed: false, optional: false, required: true
  private _stages = new CodepipelinePipelineStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }
  public putStages(value: CodepipelinePipelineStages[] | cdktn.IResolvable) {
    this._stages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new CodepipelinePipelineTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CodepipelinePipelineTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // triggers - computed: true, optional: true, required: false
  private _triggers = new CodepipelinePipelineTriggersList(this, "triggers", false);
  public get triggers() {
    return this._triggers;
  }
  public putTriggers(value: CodepipelinePipelineTriggers[] | cdktn.IResolvable) {
    this._triggers.internalValue = value;
  }
  public resetTriggers() {
    this._triggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers.internalValue;
  }

  // variables - computed: true, optional: true, required: false
  private _variables = new CodepipelinePipelineVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: CodepipelinePipelineVariables[] | cdktn.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_store: codepipelinePipelineArtifactStoreToTerraform(this._artifactStore.internalValue),
      artifact_stores: cdktn.listMapper(codepipelinePipelineArtifactStoresToTerraform, false)(this._artifactStores.internalValue),
      disable_inbound_stage_transitions: cdktn.listMapper(codepipelinePipelineDisableInboundStageTransitionsToTerraform, false)(this._disableInboundStageTransitions.internalValue),
      execution_mode: cdktn.stringToTerraform(this._executionMode),
      name: cdktn.stringToTerraform(this._name),
      pipeline_type: cdktn.stringToTerraform(this._pipelineType),
      restart_execution_on_update: cdktn.booleanToTerraform(this._restartExecutionOnUpdate),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      stages: cdktn.listMapper(codepipelinePipelineStagesToTerraform, false)(this._stages.internalValue),
      tags: cdktn.listMapper(codepipelinePipelineTagsToTerraform, false)(this._tags.internalValue),
      triggers: cdktn.listMapper(codepipelinePipelineTriggersToTerraform, false)(this._triggers.internalValue),
      variables: cdktn.listMapper(codepipelinePipelineVariablesToTerraform, false)(this._variables.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifact_store: {
        value: codepipelinePipelineArtifactStoreToHclTerraform(this._artifactStore.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CodepipelinePipelineArtifactStore",
      },
      artifact_stores: {
        value: cdktn.listMapperHcl(codepipelinePipelineArtifactStoresToHclTerraform, false)(this._artifactStores.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodepipelinePipelineArtifactStoresList",
      },
      disable_inbound_stage_transitions: {
        value: cdktn.listMapperHcl(codepipelinePipelineDisableInboundStageTransitionsToHclTerraform, false)(this._disableInboundStageTransitions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodepipelinePipelineDisableInboundStageTransitionsList",
      },
      execution_mode: {
        value: cdktn.stringToHclTerraform(this._executionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_type: {
        value: cdktn.stringToHclTerraform(this._pipelineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restart_execution_on_update: {
        value: cdktn.booleanToHclTerraform(this._restartExecutionOnUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stages: {
        value: cdktn.listMapperHcl(codepipelinePipelineStagesToHclTerraform, false)(this._stages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodepipelinePipelineStagesList",
      },
      tags: {
        value: cdktn.listMapperHcl(codepipelinePipelineTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodepipelinePipelineTagsList",
      },
      triggers: {
        value: cdktn.listMapperHcl(codepipelinePipelineTriggersToHclTerraform, false)(this._triggers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodepipelinePipelineTriggersList",
      },
      variables: {
        value: cdktn.listMapperHcl(codepipelinePipelineVariablesToHclTerraform, false)(this._variables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodepipelinePipelineVariablesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
