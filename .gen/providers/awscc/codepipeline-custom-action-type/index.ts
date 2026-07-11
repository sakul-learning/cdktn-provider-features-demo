// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CodepipelineCustomActionTypeConfig extends cdktn.TerraformMetaArguments {
  /**
  * The category of the custom action, such as a build action or a test action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#category CodepipelineCustomActionType#category}
  */
  readonly category: string;
  /**
  * The configuration properties for the custom action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#configuration_properties CodepipelineCustomActionType#configuration_properties}
  */
  readonly configurationProperties?: CodepipelineCustomActionTypeConfigurationProperties[] | cdktn.IResolvable;
  /**
  * The details of the input artifact for the action, such as its commit ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#input_artifact_details CodepipelineCustomActionType#input_artifact_details}
  */
  readonly inputArtifactDetails: CodepipelineCustomActionTypeInputArtifactDetails;
  /**
  * The details of the output artifact of the action, such as its commit ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#output_artifact_details CodepipelineCustomActionType#output_artifact_details}
  */
  readonly outputArtifactDetails: CodepipelineCustomActionTypeOutputArtifactDetails;
  /**
  * The provider of the service used in the custom action, such as AWS CodeDeploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#provider_name CodepipelineCustomActionType#provider_name}
  */
  readonly providerName: string;
  /**
  * URLs that provide users information about this custom action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#settings CodepipelineCustomActionType#settings}
  */
  readonly settings?: CodepipelineCustomActionTypeSettings;
  /**
  * Any tags assigned to the custom action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#tags CodepipelineCustomActionType#tags}
  */
  readonly tags?: CodepipelineCustomActionTypeTags[] | cdktn.IResolvable;
  /**
  * The version identifier of the custom action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#version CodepipelineCustomActionType#version}
  */
  readonly version: string;
}
export interface CodepipelineCustomActionTypeConfigurationProperties {
  /**
  * The description of the action configuration property that is displayed to users. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#description CodepipelineCustomActionType#description}
  */
  readonly description?: string;
  /**
  * Whether the configuration property is a key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#key CodepipelineCustomActionType#key}
  */
  readonly key?: boolean | cdktn.IResolvable;
  /**
  * The name of the action configuration property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#name CodepipelineCustomActionType#name}
  */
  readonly name?: string;
  /**
  * Indicates that the property is used with PollForJobs. When creating a custom action, an action can have up to one queryable property. If it has one, that property must be both required and not secret.If you create a pipeline with a custom action type, and that custom action contains a queryable property, the value for that configuration property is subject to other restrictions. The value must be less than or equal to twenty (20) characters. The value can contain only alphanumeric characters, underscores, and hyphens. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#queryable CodepipelineCustomActionType#queryable}
  */
  readonly queryable?: boolean | cdktn.IResolvable;
  /**
  * Whether the configuration property is a required value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#required CodepipelineCustomActionType#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * Whether the configuration property is secret. Secrets are hidden from all calls except for GetJobDetails, GetThirdPartyJobDetails, PollForJobs, and PollForThirdPartyJobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#secret CodepipelineCustomActionType#secret}
  */
  readonly secret?: boolean | cdktn.IResolvable;
  /**
  * The type of the configuration property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#type CodepipelineCustomActionType#type}
  */
  readonly type?: string;
}

export function codepipelineCustomActionTypeConfigurationPropertiesToTerraform(struct?: CodepipelineCustomActionTypeConfigurationProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    key: cdktn.booleanToTerraform(struct!.key),
    name: cdktn.stringToTerraform(struct!.name),
    queryable: cdktn.booleanToTerraform(struct!.queryable),
    required: cdktn.booleanToTerraform(struct!.required),
    secret: cdktn.booleanToTerraform(struct!.secret),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function codepipelineCustomActionTypeConfigurationPropertiesToHclTerraform(struct?: CodepipelineCustomActionTypeConfigurationProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.booleanToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queryable: {
      value: cdktn.booleanToHclTerraform(struct!.queryable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktn.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret: {
      value: cdktn.booleanToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class CodepipelineCustomActionTypeConfigurationPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelineCustomActionTypeConfigurationProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._queryable !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryable = this._queryable;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineCustomActionTypeConfigurationProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._key = undefined;
      this._name = undefined;
      this._queryable = undefined;
      this._required = undefined;
      this._secret = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._key = value.key;
      this._name = value.name;
      this._queryable = value.queryable;
      this._required = value.required;
      this._secret = value.secret;
      this._type = value.type;
    }
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

  // key - computed: true, optional: true, required: false
  private _key?: boolean | cdktn.IResolvable; 
  public get key() {
    return this.getBooleanAttribute('key');
  }
  public set key(value: boolean | cdktn.IResolvable) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // queryable - computed: true, optional: true, required: false
  private _queryable?: boolean | cdktn.IResolvable; 
  public get queryable() {
    return this.getBooleanAttribute('queryable');
  }
  public set queryable(value: boolean | cdktn.IResolvable) {
    this._queryable = value;
  }
  public resetQueryable() {
    this._queryable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryableInput() {
    return this._queryable;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // secret - computed: true, optional: true, required: false
  private _secret?: boolean | cdktn.IResolvable; 
  public get secret() {
    return this.getBooleanAttribute('secret');
  }
  public set secret(value: boolean | cdktn.IResolvable) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
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

export class CodepipelineCustomActionTypeConfigurationPropertiesList extends cdktn.ComplexList {
  public internalValue? : CodepipelineCustomActionTypeConfigurationProperties[] | cdktn.IResolvable

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
  public get(index: number): CodepipelineCustomActionTypeConfigurationPropertiesOutputReference {
    return new CodepipelineCustomActionTypeConfigurationPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodepipelineCustomActionTypeInputArtifactDetails {
  /**
  * The maximum number of artifacts allowed for the action type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}
  */
  readonly maximumCount: number;
  /**
  * The minimum number of artifacts allowed for the action type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}
  */
  readonly minimumCount: number;
}

export function codepipelineCustomActionTypeInputArtifactDetailsToTerraform(struct?: CodepipelineCustomActionTypeInputArtifactDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_count: cdktn.numberToTerraform(struct!.maximumCount),
    minimum_count: cdktn.numberToTerraform(struct!.minimumCount),
  }
}


export function codepipelineCustomActionTypeInputArtifactDetailsToHclTerraform(struct?: CodepipelineCustomActionTypeInputArtifactDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_count: {
      value: cdktn.numberToHclTerraform(struct!.maximumCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_count: {
      value: cdktn.numberToHclTerraform(struct!.minimumCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelineCustomActionTypeInputArtifactDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelineCustomActionTypeInputArtifactDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCount = this._maximumCount;
    }
    if (this._minimumCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumCount = this._minimumCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineCustomActionTypeInputArtifactDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumCount = undefined;
      this._minimumCount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumCount = value.maximumCount;
      this._minimumCount = value.minimumCount;
    }
  }

  // maximum_count - computed: false, optional: false, required: true
  private _maximumCount?: number; 
  public get maximumCount() {
    return this.getNumberAttribute('maximum_count');
  }
  public set maximumCount(value: number) {
    this._maximumCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCountInput() {
    return this._maximumCount;
  }

  // minimum_count - computed: false, optional: false, required: true
  private _minimumCount?: number; 
  public get minimumCount() {
    return this.getNumberAttribute('minimum_count');
  }
  public set minimumCount(value: number) {
    this._minimumCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumCountInput() {
    return this._minimumCount;
  }
}
export interface CodepipelineCustomActionTypeOutputArtifactDetails {
  /**
  * The maximum number of artifacts allowed for the action type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}
  */
  readonly maximumCount: number;
  /**
  * The minimum number of artifacts allowed for the action type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}
  */
  readonly minimumCount: number;
}

export function codepipelineCustomActionTypeOutputArtifactDetailsToTerraform(struct?: CodepipelineCustomActionTypeOutputArtifactDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_count: cdktn.numberToTerraform(struct!.maximumCount),
    minimum_count: cdktn.numberToTerraform(struct!.minimumCount),
  }
}


export function codepipelineCustomActionTypeOutputArtifactDetailsToHclTerraform(struct?: CodepipelineCustomActionTypeOutputArtifactDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_count: {
      value: cdktn.numberToHclTerraform(struct!.maximumCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_count: {
      value: cdktn.numberToHclTerraform(struct!.minimumCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelineCustomActionTypeOutputArtifactDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCount = this._maximumCount;
    }
    if (this._minimumCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumCount = this._minimumCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineCustomActionTypeOutputArtifactDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumCount = undefined;
      this._minimumCount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumCount = value.maximumCount;
      this._minimumCount = value.minimumCount;
    }
  }

  // maximum_count - computed: false, optional: false, required: true
  private _maximumCount?: number; 
  public get maximumCount() {
    return this.getNumberAttribute('maximum_count');
  }
  public set maximumCount(value: number) {
    this._maximumCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCountInput() {
    return this._maximumCount;
  }

  // minimum_count - computed: false, optional: false, required: true
  private _minimumCount?: number; 
  public get minimumCount() {
    return this.getNumberAttribute('minimum_count');
  }
  public set minimumCount(value: number) {
    this._minimumCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumCountInput() {
    return this._minimumCount;
  }
}
export interface CodepipelineCustomActionTypeSettings {
  /**
  * The URL returned to the AWS CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for an AWS CodeDeploy deployment group. This link is provided as part of the action display in the pipeline. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#entity_url_template CodepipelineCustomActionType#entity_url_template}
  */
  readonly entityUrlTemplate?: string;
  /**
  * The URL returned to the AWS CodePipeline console that contains a link to the top-level landing page for the external system, such as the console page for AWS CodeDeploy. This link is shown on the pipeline view page in the AWS CodePipeline console and provides a link to the execution entity of the external action. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#execution_url_template CodepipelineCustomActionType#execution_url_template}
  */
  readonly executionUrlTemplate?: string;
  /**
  * The URL returned to the AWS CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#revision_url_template CodepipelineCustomActionType#revision_url_template}
  */
  readonly revisionUrlTemplate?: string;
  /**
  * The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#third_party_configuration_url CodepipelineCustomActionType#third_party_configuration_url}
  */
  readonly thirdPartyConfigurationUrl?: string;
}

export function codepipelineCustomActionTypeSettingsToTerraform(struct?: CodepipelineCustomActionTypeSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entity_url_template: cdktn.stringToTerraform(struct!.entityUrlTemplate),
    execution_url_template: cdktn.stringToTerraform(struct!.executionUrlTemplate),
    revision_url_template: cdktn.stringToTerraform(struct!.revisionUrlTemplate),
    third_party_configuration_url: cdktn.stringToTerraform(struct!.thirdPartyConfigurationUrl),
  }
}


export function codepipelineCustomActionTypeSettingsToHclTerraform(struct?: CodepipelineCustomActionTypeSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entity_url_template: {
      value: cdktn.stringToHclTerraform(struct!.entityUrlTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_url_template: {
      value: cdktn.stringToHclTerraform(struct!.executionUrlTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision_url_template: {
      value: cdktn.stringToHclTerraform(struct!.revisionUrlTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    third_party_configuration_url: {
      value: cdktn.stringToHclTerraform(struct!.thirdPartyConfigurationUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodepipelineCustomActionTypeSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodepipelineCustomActionTypeSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityUrlTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityUrlTemplate = this._entityUrlTemplate;
    }
    if (this._executionUrlTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionUrlTemplate = this._executionUrlTemplate;
    }
    if (this._revisionUrlTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionUrlTemplate = this._revisionUrlTemplate;
    }
    if (this._thirdPartyConfigurationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdPartyConfigurationUrl = this._thirdPartyConfigurationUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineCustomActionTypeSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityUrlTemplate = undefined;
      this._executionUrlTemplate = undefined;
      this._revisionUrlTemplate = undefined;
      this._thirdPartyConfigurationUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityUrlTemplate = value.entityUrlTemplate;
      this._executionUrlTemplate = value.executionUrlTemplate;
      this._revisionUrlTemplate = value.revisionUrlTemplate;
      this._thirdPartyConfigurationUrl = value.thirdPartyConfigurationUrl;
    }
  }

  // entity_url_template - computed: true, optional: true, required: false
  private _entityUrlTemplate?: string; 
  public get entityUrlTemplate() {
    return this.getStringAttribute('entity_url_template');
  }
  public set entityUrlTemplate(value: string) {
    this._entityUrlTemplate = value;
  }
  public resetEntityUrlTemplate() {
    this._entityUrlTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityUrlTemplateInput() {
    return this._entityUrlTemplate;
  }

  // execution_url_template - computed: true, optional: true, required: false
  private _executionUrlTemplate?: string; 
  public get executionUrlTemplate() {
    return this.getStringAttribute('execution_url_template');
  }
  public set executionUrlTemplate(value: string) {
    this._executionUrlTemplate = value;
  }
  public resetExecutionUrlTemplate() {
    this._executionUrlTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionUrlTemplateInput() {
    return this._executionUrlTemplate;
  }

  // revision_url_template - computed: true, optional: true, required: false
  private _revisionUrlTemplate?: string; 
  public get revisionUrlTemplate() {
    return this.getStringAttribute('revision_url_template');
  }
  public set revisionUrlTemplate(value: string) {
    this._revisionUrlTemplate = value;
  }
  public resetRevisionUrlTemplate() {
    this._revisionUrlTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionUrlTemplateInput() {
    return this._revisionUrlTemplate;
  }

  // third_party_configuration_url - computed: true, optional: true, required: false
  private _thirdPartyConfigurationUrl?: string; 
  public get thirdPartyConfigurationUrl() {
    return this.getStringAttribute('third_party_configuration_url');
  }
  public set thirdPartyConfigurationUrl(value: string) {
    this._thirdPartyConfigurationUrl = value;
  }
  public resetThirdPartyConfigurationUrl() {
    this._thirdPartyConfigurationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyConfigurationUrlInput() {
    return this._thirdPartyConfigurationUrl;
  }
}
export interface CodepipelineCustomActionTypeTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#key CodepipelineCustomActionType#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#value CodepipelineCustomActionType#value}
  */
  readonly value?: string;
}

export function codepipelineCustomActionTypeTagsToTerraform(struct?: CodepipelineCustomActionTypeTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function codepipelineCustomActionTypeTagsToHclTerraform(struct?: CodepipelineCustomActionTypeTags | cdktn.IResolvable): any {
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

export class CodepipelineCustomActionTypeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodepipelineCustomActionTypeTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CodepipelineCustomActionTypeTags | cdktn.IResolvable | undefined) {
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

export class CodepipelineCustomActionTypeTagsList extends cdktn.ComplexList {
  public internalValue? : CodepipelineCustomActionTypeTags[] | cdktn.IResolvable

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
  public get(index: number): CodepipelineCustomActionTypeTagsOutputReference {
    return new CodepipelineCustomActionTypeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type awscc_codepipeline_custom_action_type}
*/
export class CodepipelineCustomActionType extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_codepipeline_custom_action_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CodepipelineCustomActionType resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CodepipelineCustomActionType to import
  * @param importFromId The id of the existing CodepipelineCustomActionType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CodepipelineCustomActionType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codepipeline_custom_action_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codepipeline_custom_action_type awscc_codepipeline_custom_action_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodepipelineCustomActionTypeConfig
  */
  public constructor(scope: Construct, id: string, config: CodepipelineCustomActionTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_codepipeline_custom_action_type',
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
    this._category = config.category;
    this._configurationProperties.internalValue = config.configurationProperties;
    this._inputArtifactDetails.internalValue = config.inputArtifactDetails;
    this._outputArtifactDetails.internalValue = config.outputArtifactDetails;
    this._providerName = config.providerName;
    this._settings.internalValue = config.settings;
    this._tags.internalValue = config.tags;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // configuration_properties - computed: true, optional: true, required: false
  private _configurationProperties = new CodepipelineCustomActionTypeConfigurationPropertiesList(this, "configuration_properties", true);
  public get configurationProperties() {
    return this._configurationProperties;
  }
  public putConfigurationProperties(value: CodepipelineCustomActionTypeConfigurationProperties[] | cdktn.IResolvable) {
    this._configurationProperties.internalValue = value;
  }
  public resetConfigurationProperties() {
    this._configurationProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationPropertiesInput() {
    return this._configurationProperties.internalValue;
  }

  // custom_action_type_id - computed: true, optional: false, required: false
  public get customActionTypeId() {
    return this.getStringAttribute('custom_action_type_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_artifact_details - computed: false, optional: false, required: true
  private _inputArtifactDetails = new CodepipelineCustomActionTypeInputArtifactDetailsOutputReference(this, "input_artifact_details");
  public get inputArtifactDetails() {
    return this._inputArtifactDetails;
  }
  public putInputArtifactDetails(value: CodepipelineCustomActionTypeInputArtifactDetails) {
    this._inputArtifactDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputArtifactDetailsInput() {
    return this._inputArtifactDetails.internalValue;
  }

  // output_artifact_details - computed: false, optional: false, required: true
  private _outputArtifactDetails = new CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference(this, "output_artifact_details");
  public get outputArtifactDetails() {
    return this._outputArtifactDetails;
  }
  public putOutputArtifactDetails(value: CodepipelineCustomActionTypeOutputArtifactDetails) {
    this._outputArtifactDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputArtifactDetailsInput() {
    return this._outputArtifactDetails.internalValue;
  }

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new CodepipelineCustomActionTypeSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: CodepipelineCustomActionTypeSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new CodepipelineCustomActionTypeTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CodepipelineCustomActionTypeTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktn.stringToTerraform(this._category),
      configuration_properties: cdktn.listMapper(codepipelineCustomActionTypeConfigurationPropertiesToTerraform, false)(this._configurationProperties.internalValue),
      input_artifact_details: codepipelineCustomActionTypeInputArtifactDetailsToTerraform(this._inputArtifactDetails.internalValue),
      output_artifact_details: codepipelineCustomActionTypeOutputArtifactDetailsToTerraform(this._outputArtifactDetails.internalValue),
      provider_name: cdktn.stringToTerraform(this._providerName),
      settings: codepipelineCustomActionTypeSettingsToTerraform(this._settings.internalValue),
      tags: cdktn.listMapper(codepipelineCustomActionTypeTagsToTerraform, false)(this._tags.internalValue),
      version: cdktn.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktn.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_properties: {
        value: cdktn.listMapperHcl(codepipelineCustomActionTypeConfigurationPropertiesToHclTerraform, false)(this._configurationProperties.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CodepipelineCustomActionTypeConfigurationPropertiesList",
      },
      input_artifact_details: {
        value: codepipelineCustomActionTypeInputArtifactDetailsToHclTerraform(this._inputArtifactDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CodepipelineCustomActionTypeInputArtifactDetails",
      },
      output_artifact_details: {
        value: codepipelineCustomActionTypeOutputArtifactDetailsToHclTerraform(this._outputArtifactDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CodepipelineCustomActionTypeOutputArtifactDetails",
      },
      provider_name: {
        value: cdktn.stringToHclTerraform(this._providerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: codepipelineCustomActionTypeSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CodepipelineCustomActionTypeSettings",
      },
      tags: {
        value: cdktn.listMapperHcl(codepipelineCustomActionTypeTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodepipelineCustomActionTypeTagsList",
      },
      version: {
        value: cdktn.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
