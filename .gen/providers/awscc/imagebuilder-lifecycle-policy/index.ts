// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ImagebuilderLifecyclePolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * The description of the lifecycle policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#description ImagebuilderLifecyclePolicy#description}
  */
  readonly description?: string;
  /**
  * The execution role of the lifecycle policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#execution_role ImagebuilderLifecyclePolicy#execution_role}
  */
  readonly executionRole: string;
  /**
  * The name of the lifecycle policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}
  */
  readonly name: string;
  /**
  * The policy details of the lifecycle policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#policy_details ImagebuilderLifecyclePolicy#policy_details}
  */
  readonly policyDetails: ImagebuilderLifecyclePolicyPolicyDetails[] | cdktn.IResolvable;
  /**
  * The resource selection of the lifecycle policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#resource_selection ImagebuilderLifecyclePolicy#resource_selection}
  */
  readonly resourceSelection: ImagebuilderLifecyclePolicyResourceSelection;
  /**
  * The resource type of the lifecycle policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#resource_type ImagebuilderLifecyclePolicy#resource_type}
  */
  readonly resourceType: string;
  /**
  * The status of the lifecycle policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#status ImagebuilderLifecyclePolicy#status}
  */
  readonly status?: string;
  /**
  * The tags associated with the lifecycle policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#tags ImagebuilderLifecyclePolicy#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources {
  /**
  * Use to configure lifecycle actions on AMIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}
  */
  readonly amis?: boolean | cdktn.IResolvable;
  /**
  * Use to configure lifecycle actions on containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#containers ImagebuilderLifecyclePolicy#containers}
  */
  readonly containers?: boolean | cdktn.IResolvable;
  /**
  * Use to configure lifecycle actions on snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#snapshots ImagebuilderLifecyclePolicy#snapshots}
  */
  readonly snapshots?: boolean | cdktn.IResolvable;
}

export function imagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amis: cdktn.booleanToTerraform(struct!.amis),
    containers: cdktn.booleanToTerraform(struct!.containers),
    snapshots: cdktn.booleanToTerraform(struct!.snapshots),
  }
}


export function imagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amis: {
      value: cdktn.booleanToHclTerraform(struct!.amis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    containers: {
      value: cdktn.booleanToHclTerraform(struct!.containers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshots: {
      value: cdktn.booleanToHclTerraform(struct!.snapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amis !== undefined) {
      hasAnyValues = true;
      internalValueResult.amis = this._amis;
    }
    if (this._containers !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers;
    }
    if (this._snapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshots = this._snapshots;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amis = undefined;
      this._containers = undefined;
      this._snapshots = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amis = value.amis;
      this._containers = value.containers;
      this._snapshots = value.snapshots;
    }
  }

  // amis - computed: true, optional: true, required: false
  private _amis?: boolean | cdktn.IResolvable;
  public get amis() {
    return this.getBooleanAttribute('amis');
  }
  public set amis(value: boolean | cdktn.IResolvable) {
    this._amis = value;
  }
  public resetAmis() {
    this._amis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amisInput() {
    return this._amis;
  }

  // containers - computed: true, optional: true, required: false
  private _containers?: boolean | cdktn.IResolvable;
  public get containers() {
    return this.getBooleanAttribute('containers');
  }
  public set containers(value: boolean | cdktn.IResolvable) {
    this._containers = value;
  }
  public resetContainers() {
    this._containers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers;
  }

  // snapshots - computed: true, optional: true, required: false
  private _snapshots?: boolean | cdktn.IResolvable;
  public get snapshots() {
    return this.getBooleanAttribute('snapshots');
  }
  public set snapshots(value: boolean | cdktn.IResolvable) {
    this._snapshots = value;
  }
  public resetSnapshots() {
    this._snapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsInput() {
    return this._snapshots;
  }
}
export interface ImagebuilderLifecyclePolicyPolicyDetailsAction {
  /**
  * The included resources of the policy detail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#include_resources ImagebuilderLifecyclePolicy#include_resources}
  */
  readonly includeResources?: ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources;
  /**
  * The action type of the policy detail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}
  */
  readonly type: string;
}

export function imagebuilderLifecyclePolicyPolicyDetailsActionToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailsAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_resources: imagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesToTerraform(struct!.includeResources),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function imagebuilderLifecyclePolicyPolicyDetailsActionToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailsAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_resources: {
      value: imagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesToHclTerraform(struct!.includeResources),
      isBlock: true,
      type: "struct",
      storageClassType: "ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources",
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

export class ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImagebuilderLifecyclePolicyPolicyDetailsAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeResources = this._includeResources?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetailsAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeResources.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeResources.internalValue = value.includeResources;
      this._type = value.type;
    }
  }

  // include_resources - computed: true, optional: true, required: false
  private _includeResources = new ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference(this, "include_resources");
  public get includeResources() {
    return this._includeResources;
  }
  public putIncludeResources(value: ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources) {
    this._includeResources.internalValue = value;
  }
  public resetIncludeResources() {
    this._includeResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeResourcesInput() {
    return this._includeResources.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched {
  /**
  * The value's time unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}
  */
  readonly unit?: string;
  /**
  * The last launched value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}
  */
  readonly value?: number;
}

export function imagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function imagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string;
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number;
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis {
  /**
  * Use to apply lifecycle policy actions on whether the AMI is public.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#is_public ImagebuilderLifecyclePolicy#is_public}
  */
  readonly isPublic?: boolean | cdktn.IResolvable;
  /**
  * Use to apply lifecycle policy actions on AMIs launched before a certain time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#last_launched ImagebuilderLifecyclePolicy#last_launched}
  */
  readonly lastLaunched?: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched;
  /**
  * Use to apply lifecycle policy actions on AMIs distributed to a set of regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#regions ImagebuilderLifecyclePolicy#regions}
  */
  readonly regions?: string[];
  /**
  * Use to apply lifecycle policy actions on AMIs shared with a set of regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#shared_accounts ImagebuilderLifecyclePolicy#shared_accounts}
  */
  readonly sharedAccounts?: string[];
  /**
  * The AMIs to select by tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}
  */
  readonly tagMap?: { [key: string]: string };
}

export function imagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_public: cdktn.booleanToTerraform(struct!.isPublic),
    last_launched: imagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedToTerraform(struct!.lastLaunched),
    regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
    shared_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sharedAccounts),
    tag_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tagMap),
  }
}


export function imagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_public: {
      value: cdktn.booleanToHclTerraform(struct!.isPublic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_launched: {
      value: imagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedToHclTerraform(struct!.lastLaunched),
      isBlock: true,
      type: "struct",
      storageClassType: "ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched",
    },
    regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    shared_accounts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sharedAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag_map: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tagMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isPublic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPublic = this._isPublic;
    }
    if (this._lastLaunched?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastLaunched = this._lastLaunched?.internalValue;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._sharedAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedAccounts = this._sharedAccounts;
    }
    if (this._tagMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagMap = this._tagMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isPublic = undefined;
      this._lastLaunched.internalValue = undefined;
      this._regions = undefined;
      this._sharedAccounts = undefined;
      this._tagMap = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isPublic = value.isPublic;
      this._lastLaunched.internalValue = value.lastLaunched;
      this._regions = value.regions;
      this._sharedAccounts = value.sharedAccounts;
      this._tagMap = value.tagMap;
    }
  }

  // is_public - computed: true, optional: true, required: false
  private _isPublic?: boolean | cdktn.IResolvable;
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktn.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
  }

  // last_launched - computed: true, optional: true, required: false
  private _lastLaunched = new ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference(this, "last_launched");
  public get lastLaunched() {
    return this._lastLaunched;
  }
  public putLastLaunched(value: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched) {
    this._lastLaunched.internalValue = value;
  }
  public resetLastLaunched() {
    this._lastLaunched.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastLaunchedInput() {
    return this._lastLaunched.internalValue;
  }

  // regions - computed: true, optional: true, required: false
  private _regions?: string[];
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // shared_accounts - computed: true, optional: true, required: false
  private _sharedAccounts?: string[];
  public get sharedAccounts() {
    return this.getListAttribute('shared_accounts');
  }
  public set sharedAccounts(value: string[]) {
    this._sharedAccounts = value;
  }
  public resetSharedAccounts() {
    this._sharedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccountsInput() {
    return this._sharedAccounts;
  }

  // tag_map - computed: true, optional: true, required: false
  private _tagMap?: { [key: string]: string };
  public get tagMap() {
    return this.getStringMapAttribute('tag_map');
  }
  public set tagMap(value: { [key: string]: string }) {
    this._tagMap = value;
  }
  public resetTagMap() {
    this._tagMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagMapInput() {
    return this._tagMap;
  }
}
export interface ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules {
  /**
  * The AMI exclusion rules for the policy detail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}
  */
  readonly amis?: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis;
  /**
  * The Image Builder tags to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}
  */
  readonly tagMap?: { [key: string]: string };
}

export function imagebuilderLifecyclePolicyPolicyDetailsExclusionRulesToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amis: imagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisToTerraform(struct!.amis),
    tag_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tagMap),
  }
}


export function imagebuilderLifecyclePolicyPolicyDetailsExclusionRulesToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amis: {
      value: imagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisToHclTerraform(struct!.amis),
      isBlock: true,
      type: "struct",
      storageClassType: "ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis",
    },
    tag_map: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tagMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amis = this._amis?.internalValue;
    }
    if (this._tagMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagMap = this._tagMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amis.internalValue = undefined;
      this._tagMap = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amis.internalValue = value.amis;
      this._tagMap = value.tagMap;
    }
  }

  // amis - computed: true, optional: true, required: false
  private _amis = new ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference(this, "amis");
  public get amis() {
    return this._amis;
  }
  public putAmis(value: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis) {
    this._amis.internalValue = value;
  }
  public resetAmis() {
    this._amis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amisInput() {
    return this._amis.internalValue;
  }

  // tag_map - computed: true, optional: true, required: false
  private _tagMap?: { [key: string]: string };
  public get tagMap() {
    return this.getStringMapAttribute('tag_map');
  }
  public set tagMap(value: { [key: string]: string }) {
    this._tagMap = value;
  }
  public resetTagMap() {
    this._tagMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagMapInput() {
    return this._tagMap;
  }
}
export interface ImagebuilderLifecyclePolicyPolicyDetailsFilter {
  /**
  * The minimum number of Image Builder resources to retain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#retain_at_least ImagebuilderLifecyclePolicy#retain_at_least}
  */
  readonly retainAtLeast?: number;
  /**
  * The filter type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}
  */
  readonly type: string;
  /**
  * The value's time unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}
  */
  readonly unit?: string;
  /**
  * The filter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}
  */
  readonly value: number;
}

export function imagebuilderLifecyclePolicyPolicyDetailsFilterToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailsFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    retain_at_least: cdktn.numberToTerraform(struct!.retainAtLeast),
    type: cdktn.stringToTerraform(struct!.type),
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function imagebuilderLifecyclePolicyPolicyDetailsFilterToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailsFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    retain_at_least: {
      value: cdktn.numberToHclTerraform(struct!.retainAtLeast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImagebuilderLifecyclePolicyPolicyDetailsFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retainAtLeast !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainAtLeast = this._retainAtLeast;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetailsFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retainAtLeast = undefined;
      this._type = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retainAtLeast = value.retainAtLeast;
      this._type = value.type;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // retain_at_least - computed: true, optional: true, required: false
  private _retainAtLeast?: number;
  public get retainAtLeast() {
    return this.getNumberAttribute('retain_at_least');
  }
  public set retainAtLeast(value: number) {
    this._retainAtLeast = value;
  }
  public resetRetainAtLeast() {
    this._retainAtLeast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainAtLeastInput() {
    return this._retainAtLeast;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string;
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number;
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ImagebuilderLifecyclePolicyPolicyDetails {
  /**
  * The action of the policy detail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#action ImagebuilderLifecyclePolicy#action}
  */
  readonly action: ImagebuilderLifecyclePolicyPolicyDetailsAction;
  /**
  * The exclusion rules to apply of the policy detail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#exclusion_rules ImagebuilderLifecyclePolicy#exclusion_rules}
  */
  readonly exclusionRules?: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules;
  /**
  * The filters to apply of the policy detail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#filter ImagebuilderLifecyclePolicy#filter}
  */
  readonly filter: ImagebuilderLifecyclePolicyPolicyDetailsFilter;
}

export function imagebuilderLifecyclePolicyPolicyDetailsToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: imagebuilderLifecyclePolicyPolicyDetailsActionToTerraform(struct!.action),
    exclusion_rules: imagebuilderLifecyclePolicyPolicyDetailsExclusionRulesToTerraform(struct!.exclusionRules),
    filter: imagebuilderLifecyclePolicyPolicyDetailsFilterToTerraform(struct!.filter),
  }
}


export function imagebuilderLifecyclePolicyPolicyDetailsToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: imagebuilderLifecyclePolicyPolicyDetailsActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "ImagebuilderLifecyclePolicyPolicyDetailsAction",
    },
    exclusion_rules: {
      value: imagebuilderLifecyclePolicyPolicyDetailsExclusionRulesToHclTerraform(struct!.exclusionRules),
      isBlock: true,
      type: "struct",
      storageClassType: "ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules",
    },
    filter: {
      value: imagebuilderLifecyclePolicyPolicyDetailsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "ImagebuilderLifecyclePolicyPolicyDetailsFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderLifecyclePolicyPolicyDetailsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ImagebuilderLifecyclePolicyPolicyDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._exclusionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionRules = this._exclusionRules?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._exclusionRules.internalValue = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._exclusionRules.internalValue = value.exclusionRules;
      this._filter.internalValue = value.filter;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: ImagebuilderLifecyclePolicyPolicyDetailsAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // exclusion_rules - computed: true, optional: true, required: false
  private _exclusionRules = new ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference(this, "exclusion_rules");
  public get exclusionRules() {
    return this._exclusionRules;
  }
  public putExclusionRules(value: ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules) {
    this._exclusionRules.internalValue = value;
  }
  public resetExclusionRules() {
    this._exclusionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionRulesInput() {
    return this._exclusionRules.internalValue;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ImagebuilderLifecyclePolicyPolicyDetailsFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class ImagebuilderLifecyclePolicyPolicyDetailsList extends cdktn.ComplexList {
  public internalValue? : ImagebuilderLifecyclePolicyPolicyDetails[] | cdktn.IResolvable

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
  public get(index: number): ImagebuilderLifecyclePolicyPolicyDetailsOutputReference {
    return new ImagebuilderLifecyclePolicyPolicyDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagebuilderLifecyclePolicyResourceSelectionRecipes {
  /**
  * The recipe name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}
  */
  readonly name?: string;
  /**
  * The recipe version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#semantic_version ImagebuilderLifecyclePolicy#semantic_version}
  */
  readonly semanticVersion?: string;
}

export function imagebuilderLifecyclePolicyResourceSelectionRecipesToTerraform(struct?: ImagebuilderLifecyclePolicyResourceSelectionRecipes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    semantic_version: cdktn.stringToTerraform(struct!.semanticVersion),
  }
}


export function imagebuilderLifecyclePolicyResourceSelectionRecipesToHclTerraform(struct?: ImagebuilderLifecyclePolicyResourceSelectionRecipes | cdktn.IResolvable): any {
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
    semantic_version: {
      value: cdktn.stringToHclTerraform(struct!.semanticVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ImagebuilderLifecyclePolicyResourceSelectionRecipes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._semanticVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.semanticVersion = this._semanticVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderLifecyclePolicyResourceSelectionRecipes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._semanticVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._semanticVersion = value.semanticVersion;
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

  // semantic_version - computed: true, optional: true, required: false
  private _semanticVersion?: string;
  public get semanticVersion() {
    return this.getStringAttribute('semantic_version');
  }
  public set semanticVersion(value: string) {
    this._semanticVersion = value;
  }
  public resetSemanticVersion() {
    this._semanticVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticVersionInput() {
    return this._semanticVersion;
  }
}

export class ImagebuilderLifecyclePolicyResourceSelectionRecipesList extends cdktn.ComplexList {
  public internalValue? : ImagebuilderLifecyclePolicyResourceSelectionRecipes[] | cdktn.IResolvable

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
  public get(index: number): ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference {
    return new ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagebuilderLifecyclePolicyResourceSelection {
  /**
  * The recipes to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#recipes ImagebuilderLifecyclePolicy#recipes}
  */
  readonly recipes?: ImagebuilderLifecyclePolicyResourceSelectionRecipes[] | cdktn.IResolvable;
  /**
  * The Image Builder resources to select by tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}
  */
  readonly tagMap?: { [key: string]: string };
}

export function imagebuilderLifecyclePolicyResourceSelectionToTerraform(struct?: ImagebuilderLifecyclePolicyResourceSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    recipes: cdktn.listMapper(imagebuilderLifecyclePolicyResourceSelectionRecipesToTerraform, false)(struct!.recipes),
    tag_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tagMap),
  }
}


export function imagebuilderLifecyclePolicyResourceSelectionToHclTerraform(struct?: ImagebuilderLifecyclePolicyResourceSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    recipes: {
      value: cdktn.listMapperHcl(imagebuilderLifecyclePolicyResourceSelectionRecipesToHclTerraform, false)(struct!.recipes),
      isBlock: true,
      type: "list",
      storageClassType: "ImagebuilderLifecyclePolicyResourceSelectionRecipesList",
    },
    tag_map: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tagMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderLifecyclePolicyResourceSelectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImagebuilderLifecyclePolicyResourceSelection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recipes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipes = this._recipes?.internalValue;
    }
    if (this._tagMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagMap = this._tagMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderLifecyclePolicyResourceSelection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recipes.internalValue = undefined;
      this._tagMap = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recipes.internalValue = value.recipes;
      this._tagMap = value.tagMap;
    }
  }

  // recipes - computed: true, optional: true, required: false
  private _recipes = new ImagebuilderLifecyclePolicyResourceSelectionRecipesList(this, "recipes", false);
  public get recipes() {
    return this._recipes;
  }
  public putRecipes(value: ImagebuilderLifecyclePolicyResourceSelectionRecipes[] | cdktn.IResolvable) {
    this._recipes.internalValue = value;
  }
  public resetRecipes() {
    this._recipes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipesInput() {
    return this._recipes.internalValue;
  }

  // tag_map - computed: true, optional: true, required: false
  private _tagMap?: { [key: string]: string };
  public get tagMap() {
    return this.getStringMapAttribute('tag_map');
  }
  public set tagMap(value: { [key: string]: string }) {
    this._tagMap = value;
  }
  public resetTagMap() {
    this._tagMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagMapInput() {
    return this._tagMap;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy awscc_imagebuilder_lifecycle_policy}
*/
export class ImagebuilderLifecyclePolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_imagebuilder_lifecycle_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ImagebuilderLifecyclePolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImagebuilderLifecyclePolicy to import
  * @param importFromId The id of the existing ImagebuilderLifecyclePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImagebuilderLifecyclePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_imagebuilder_lifecycle_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/imagebuilder_lifecycle_policy awscc_imagebuilder_lifecycle_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagebuilderLifecyclePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ImagebuilderLifecyclePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_imagebuilder_lifecycle_policy',
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
    this._description = config.description;
    this._executionRole = config.executionRole;
    this._name = config.name;
    this._policyDetails.internalValue = config.policyDetails;
    this._resourceSelection.internalValue = config.resourceSelection;
    this._resourceType = config.resourceType;
    this._status = config.status;
    this._tags = config.tags;
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

  // execution_role - computed: false, optional: false, required: true
  private _executionRole?: string;
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // policy_details - computed: false, optional: false, required: true
  private _policyDetails = new ImagebuilderLifecyclePolicyPolicyDetailsList(this, "policy_details", false);
  public get policyDetails() {
    return this._policyDetails;
  }
  public putPolicyDetails(value: ImagebuilderLifecyclePolicyPolicyDetails[] | cdktn.IResolvable) {
    this._policyDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDetailsInput() {
    return this._policyDetails.internalValue;
  }

  // resource_selection - computed: false, optional: false, required: true
  private _resourceSelection = new ImagebuilderLifecyclePolicyResourceSelectionOutputReference(this, "resource_selection");
  public get resourceSelection() {
    return this._resourceSelection;
  }
  public putResourceSelection(value: ImagebuilderLifecyclePolicyResourceSelection) {
    this._resourceSelection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSelectionInput() {
    return this._resourceSelection.internalValue;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string;
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      execution_role: cdktn.stringToTerraform(this._executionRole),
      name: cdktn.stringToTerraform(this._name),
      policy_details: cdktn.listMapper(imagebuilderLifecyclePolicyPolicyDetailsToTerraform, false)(this._policyDetails.internalValue),
      resource_selection: imagebuilderLifecyclePolicyResourceSelectionToTerraform(this._resourceSelection.internalValue),
      resource_type: cdktn.stringToTerraform(this._resourceType),
      status: cdktn.stringToTerraform(this._status),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
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
      execution_role: {
        value: cdktn.stringToHclTerraform(this._executionRole),
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
      policy_details: {
        value: cdktn.listMapperHcl(imagebuilderLifecyclePolicyPolicyDetailsToHclTerraform, false)(this._policyDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImagebuilderLifecyclePolicyPolicyDetailsList",
      },
      resource_selection: {
        value: imagebuilderLifecyclePolicyResourceSelectionToHclTerraform(this._resourceSelection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImagebuilderLifecyclePolicyResourceSelection",
      },
      resource_type: {
        value: cdktn.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktn.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
