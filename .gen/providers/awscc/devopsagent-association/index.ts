// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DevopsagentAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The unique identifier of the AgentSpace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#agent_space_id DevopsagentAssociation#agent_space_id}
  */
  readonly agentSpaceId: string;
  /**
  * The configuration that directs how AgentSpace interacts with the given service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#configuration DevopsagentAssociation#configuration}
  */
  readonly configuration: DevopsagentAssociationConfiguration;
  /**
  * Set of linked association IDs for parent-child relationships
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#linked_association_ids DevopsagentAssociation#linked_association_ids}
  */
  readonly linkedAssociationIds?: string[];
  /**
  * The identifier for the associated service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#service_id DevopsagentAssociation#service_id}
  */
  readonly serviceId: string;
}
export interface DevopsagentAssociationConfigurationAwsResources {
  /**
  * The Amazon Resource Name (ARN) of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#resource_arn DevopsagentAssociation#resource_arn}
  */
  readonly resourceArn?: string;
  /**
  * Additional metadata for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#resource_metadata DevopsagentAssociation#resource_metadata}
  */
  readonly resourceMetadata?: string;
  /**
  * Resource type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#resource_type DevopsagentAssociation#resource_type}
  */
  readonly resourceType?: string;
}

export function devopsagentAssociationConfigurationAwsResourcesToTerraform(struct?: DevopsagentAssociationConfigurationAwsResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
    resource_metadata: cdktn.stringToTerraform(struct!.resourceMetadata),
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
  }
}


export function devopsagentAssociationConfigurationAwsResourcesToHclTerraform(struct?: DevopsagentAssociationConfigurationAwsResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_metadata: {
      value: cdktn.stringToHclTerraform(struct!.resourceMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssociationConfigurationAwsResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DevopsagentAssociationConfigurationAwsResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    if (this._resourceMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceMetadata = this._resourceMetadata;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationAwsResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceArn = undefined;
      this._resourceMetadata = undefined;
      this._resourceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceArn = value.resourceArn;
      this._resourceMetadata = value.resourceMetadata;
      this._resourceType = value.resourceType;
    }
  }

  // resource_arn - computed: true, optional: true, required: false
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  public resetResourceArn() {
    this._resourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }

  // resource_metadata - computed: true, optional: true, required: false
  private _resourceMetadata?: string; 
  public get resourceMetadata() {
    return this.getStringAttribute('resource_metadata');
  }
  public set resourceMetadata(value: string) {
    this._resourceMetadata = value;
  }
  public resetResourceMetadata() {
    this._resourceMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceMetadataInput() {
    return this._resourceMetadata;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class DevopsagentAssociationConfigurationAwsResourcesList extends cdktn.ComplexList {
  public internalValue? : DevopsagentAssociationConfigurationAwsResources[] | cdktn.IResolvable

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
  public get(index: number): DevopsagentAssociationConfigurationAwsResourcesOutputReference {
    return new DevopsagentAssociationConfigurationAwsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsagentAssociationConfigurationAwsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}
  */
  readonly value?: string;
}

export function devopsagentAssociationConfigurationAwsTagsToTerraform(struct?: DevopsagentAssociationConfigurationAwsTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function devopsagentAssociationConfigurationAwsTagsToHclTerraform(struct?: DevopsagentAssociationConfigurationAwsTags | cdktn.IResolvable): any {
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

export class DevopsagentAssociationConfigurationAwsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DevopsagentAssociationConfigurationAwsTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DevopsagentAssociationConfigurationAwsTags | cdktn.IResolvable | undefined) {
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

export class DevopsagentAssociationConfigurationAwsTagsList extends cdktn.ComplexList {
  public internalValue? : DevopsagentAssociationConfigurationAwsTags[] | cdktn.IResolvable

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
  public get(index: number): DevopsagentAssociationConfigurationAwsTagsOutputReference {
    return new DevopsagentAssociationConfigurationAwsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsagentAssociationConfigurationAws {
  /**
  * AWS Account Id corresponding to provided resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}
  */
  readonly accountId?: string;
  /**
  * Account Type 'monitor' for DevOpsAgent monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#account_type DevopsagentAssociation#account_type}
  */
  readonly accountType?: string;
  /**
  * Role ARN to be assumed by DevOpsAgent to operate on behalf of customer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#assumable_role_arn DevopsagentAssociation#assumable_role_arn}
  */
  readonly assumableRoleArn?: string;
  /**
  * List of AWS resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}
  */
  readonly resources?: DevopsagentAssociationConfigurationAwsResources[] | cdktn.IResolvable;
  /**
  * List of AWS tags as key-value pairs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#tags DevopsagentAssociation#tags}
  */
  readonly tags?: DevopsagentAssociationConfigurationAwsTags[] | cdktn.IResolvable;
}

export function devopsagentAssociationConfigurationAwsToTerraform(struct?: DevopsagentAssociationConfigurationAws | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    account_type: cdktn.stringToTerraform(struct!.accountType),
    assumable_role_arn: cdktn.stringToTerraform(struct!.assumableRoleArn),
    resources: cdktn.listMapper(devopsagentAssociationConfigurationAwsResourcesToTerraform, false)(struct!.resources),
    tags: cdktn.listMapper(devopsagentAssociationConfigurationAwsTagsToTerraform, false)(struct!.tags),
  }
}


export function devopsagentAssociationConfigurationAwsToHclTerraform(struct?: DevopsagentAssociationConfigurationAws | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_type: {
      value: cdktn.stringToHclTerraform(struct!.accountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assumable_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.assumableRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktn.listMapperHcl(devopsagentAssociationConfigurationAwsResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsagentAssociationConfigurationAwsResourcesList",
    },
    tags: {
      value: cdktn.listMapperHcl(devopsagentAssociationConfigurationAwsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsagentAssociationConfigurationAwsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssociationConfigurationAwsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentAssociationConfigurationAws | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._accountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountType = this._accountType;
    }
    if (this._assumableRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumableRoleArn = this._assumableRoleArn;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationAws | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._accountType = undefined;
      this._assumableRoleArn = undefined;
      this._resources.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._accountType = value.accountType;
      this._assumableRoleArn = value.assumableRoleArn;
      this._resources.internalValue = value.resources;
      this._tags.internalValue = value.tags;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_type - computed: true, optional: true, required: false
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  public resetAccountType() {
    this._accountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
  }

  // assumable_role_arn - computed: true, optional: true, required: false
  private _assumableRoleArn?: string; 
  public get assumableRoleArn() {
    return this.getStringAttribute('assumable_role_arn');
  }
  public set assumableRoleArn(value: string) {
    this._assumableRoleArn = value;
  }
  public resetAssumableRoleArn() {
    this._assumableRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumableRoleArnInput() {
    return this._assumableRoleArn;
  }

  // resources - computed: true, optional: true, required: false
  private _resources = new DevopsagentAssociationConfigurationAwsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DevopsagentAssociationConfigurationAwsResources[] | cdktn.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DevopsagentAssociationConfigurationAwsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DevopsagentAssociationConfigurationAwsTags[] | cdktn.IResolvable) {
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
export interface DevopsagentAssociationConfigurationAzure {
  /**
  * Azure subscription ID corresponding to provided resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#subscription_id DevopsagentAssociation#subscription_id}
  */
  readonly subscriptionId?: string;
}

export function devopsagentAssociationConfigurationAzureToTerraform(struct?: DevopsagentAssociationConfigurationAzure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    subscription_id: cdktn.stringToTerraform(struct!.subscriptionId),
  }
}


export function devopsagentAssociationConfigurationAzureToHclTerraform(struct?: DevopsagentAssociationConfigurationAzure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    subscription_id: {
      value: cdktn.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssociationConfigurationAzureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentAssociationConfigurationAzure | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationAzure | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subscriptionId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subscriptionId = value.subscriptionId;
    }
  }

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }
}
export interface DevopsagentAssociationConfigurationDynatrace {
  /**
  * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}
  */
  readonly enableWebhookUpdates?: boolean | cdktn.IResolvable;
  /**
  * Dynatrace environment id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#env_id DevopsagentAssociation#env_id}
  */
  readonly envId?: string;
  /**
  * List of Dynatrace resources to monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}
  */
  readonly resources?: string[];
}

export function devopsagentAssociationConfigurationDynatraceToTerraform(struct?: DevopsagentAssociationConfigurationDynatrace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_webhook_updates: cdktn.booleanToTerraform(struct!.enableWebhookUpdates),
    env_id: cdktn.stringToTerraform(struct!.envId),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function devopsagentAssociationConfigurationDynatraceToHclTerraform(struct?: DevopsagentAssociationConfigurationDynatrace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_webhook_updates: {
      value: cdktn.booleanToHclTerraform(struct!.enableWebhookUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    env_id: {
      value: cdktn.stringToHclTerraform(struct!.envId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssociationConfigurationDynatraceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentAssociationConfigurationDynatrace | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableWebhookUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWebhookUpdates = this._enableWebhookUpdates;
    }
    if (this._envId !== undefined) {
      hasAnyValues = true;
      internalValueResult.envId = this._envId;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationDynatrace | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableWebhookUpdates = undefined;
      this._envId = undefined;
      this._resources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableWebhookUpdates = value.enableWebhookUpdates;
      this._envId = value.envId;
      this._resources = value.resources;
    }
  }

  // enable_webhook_updates - computed: true, optional: true, required: false
  private _enableWebhookUpdates?: boolean | cdktn.IResolvable; 
  public get enableWebhookUpdates() {
    return this.getBooleanAttribute('enable_webhook_updates');
  }
  public set enableWebhookUpdates(value: boolean | cdktn.IResolvable) {
    this._enableWebhookUpdates = value;
  }
  public resetEnableWebhookUpdates() {
    this._enableWebhookUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWebhookUpdatesInput() {
    return this._enableWebhookUpdates;
  }

  // env_id - computed: true, optional: true, required: false
  private _envId?: string; 
  public get envId() {
    return this.getStringAttribute('env_id');
  }
  public set envId(value: string) {
    this._envId = value;
  }
  public resetEnvId() {
    this._envId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
  }

  // resources - computed: true, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}
export interface DevopsagentAssociationConfigurationEventChannel {
  /**
  * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}
  */
  readonly enableWebhookUpdates?: boolean | cdktn.IResolvable;
}

export function devopsagentAssociationConfigurationEventChannelToTerraform(struct?: DevopsagentAssociationConfigurationEventChannel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_webhook_updates: cdktn.booleanToTerraform(struct!.enableWebhookUpdates),
  }
}


export function devopsagentAssociationConfigurationEventChannelToHclTerraform(struct?: DevopsagentAssociationConfigurationEventChannel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_webhook_updates: {
      value: cdktn.booleanToHclTerraform(struct!.enableWebhookUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssociationConfigurationEventChannelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentAssociationConfigurationEventChannel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableWebhookUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWebhookUpdates = this._enableWebhookUpdates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationEventChannel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableWebhookUpdates = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableWebhookUpdates = value.enableWebhookUpdates;
    }
  }

  // enable_webhook_updates - computed: true, optional: true, required: false
  private _enableWebhookUpdates?: boolean | cdktn.IResolvable; 
  public get enableWebhookUpdates() {
    return this.getBooleanAttribute('enable_webhook_updates');
  }
  public set enableWebhookUpdates(value: boolean | cdktn.IResolvable) {
    this._enableWebhookUpdates = value;
  }
  public resetEnableWebhookUpdates() {
    this._enableWebhookUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWebhookUpdatesInput() {
    return this._enableWebhookUpdates;
  }
}
export interface DevopsagentAssociationConfigurationGitHub {
  /**
  * Repository owner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#owner DevopsagentAssociation#owner}
  */
  readonly owner?: string;
  /**
  * Type of repository owner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#owner_type DevopsagentAssociation#owner_type}
  */
  readonly ownerType?: string;
  /**
  * Associated Github repo ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#repo_id DevopsagentAssociation#repo_id}
  */
  readonly repoId?: string;
  /**
  * Associated Github repo name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#repo_name DevopsagentAssociation#repo_name}
  */
  readonly repoName?: string;
}

export function devopsagentAssociationConfigurationGitHubToTerraform(struct?: DevopsagentAssociationConfigurationGitHub | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    owner: cdktn.stringToTerraform(struct!.owner),
    owner_type: cdktn.stringToTerraform(struct!.ownerType),
    repo_id: cdktn.stringToTerraform(struct!.repoId),
    repo_name: cdktn.stringToTerraform(struct!.repoName),
  }
}


export function devopsagentAssociationConfigurationGitHubToHclTerraform(struct?: DevopsagentAssociationConfigurationGitHub | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    owner: {
      value: cdktn.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_type: {
      value: cdktn.stringToHclTerraform(struct!.ownerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_id: {
      value: cdktn.stringToHclTerraform(struct!.repoId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_name: {
      value: cdktn.stringToHclTerraform(struct!.repoName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssociationConfigurationGitHubOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentAssociationConfigurationGitHub | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._ownerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerType = this._ownerType;
    }
    if (this._repoId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoId = this._repoId;
    }
    if (this._repoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoName = this._repoName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationGitHub | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._owner = undefined;
      this._ownerType = undefined;
      this._repoId = undefined;
      this._repoName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._owner = value.owner;
      this._ownerType = value.ownerType;
      this._repoId = value.repoId;
      this._repoName = value.repoName;
    }
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

  // owner_type - computed: true, optional: true, required: false
  private _ownerType?: string; 
  public get ownerType() {
    return this.getStringAttribute('owner_type');
  }
  public set ownerType(value: string) {
    this._ownerType = value;
  }
  public resetOwnerType() {
    this._ownerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTypeInput() {
    return this._ownerType;
  }

  // repo_id - computed: true, optional: true, required: false
  private _repoId?: string; 
  public get repoId() {
    return this.getStringAttribute('repo_id');
  }
  public set repoId(value: string) {
    this._repoId = value;
  }
  public resetRepoId() {
    this._repoId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoIdInput() {
    return this._repoId;
  }

  // repo_name - computed: true, optional: true, required: false
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  public resetRepoName() {
    this._repoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }
}
export interface DevopsagentAssociationConfigurationGitLab {
  /**
  * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}
  */
  readonly enableWebhookUpdates?: boolean | cdktn.IResolvable;
  /**
  * GitLab instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#instance_identifier DevopsagentAssociation#instance_identifier}
  */
  readonly instanceIdentifier?: string;
  /**
  * GitLab numeric project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#project_id DevopsagentAssociation#project_id}
  */
  readonly projectId?: string;
  /**
  * Full GitLab project path (e.g., namespace/project-name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#project_path DevopsagentAssociation#project_path}
  */
  readonly projectPath?: string;
}

export function devopsagentAssociationConfigurationGitLabToTerraform(struct?: DevopsagentAssociationConfigurationGitLab | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_webhook_updates: cdktn.booleanToTerraform(struct!.enableWebhookUpdates),
    instance_identifier: cdktn.stringToTerraform(struct!.instanceIdentifier),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    project_path: cdktn.stringToTerraform(struct!.projectPath),
  }
}


export function devopsagentAssociationConfigurationGitLabToHclTerraform(struct?: DevopsagentAssociationConfigurationGitLab | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_webhook_updates: {
      value: cdktn.booleanToHclTerraform(struct!.enableWebhookUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_identifier: {
      value: cdktn.stringToHclTerraform(struct!.instanceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_path: {
      value: cdktn.stringToHclTerraform(struct!.projectPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssociationConfigurationGitLabOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentAssociationConfigurationGitLab | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableWebhookUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWebhookUpdates = this._enableWebhookUpdates;
    }
    if (this._instanceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceIdentifier = this._instanceIdentifier;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._projectPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectPath = this._projectPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationGitLab | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableWebhookUpdates = undefined;
      this._instanceIdentifier = undefined;
      this._projectId = undefined;
      this._projectPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableWebhookUpdates = value.enableWebhookUpdates;
      this._instanceIdentifier = value.instanceIdentifier;
      this._projectId = value.projectId;
      this._projectPath = value.projectPath;
    }
  }

  // enable_webhook_updates - computed: true, optional: true, required: false
  private _enableWebhookUpdates?: boolean | cdktn.IResolvable; 
  public get enableWebhookUpdates() {
    return this.getBooleanAttribute('enable_webhook_updates');
  }
  public set enableWebhookUpdates(value: boolean | cdktn.IResolvable) {
    this._enableWebhookUpdates = value;
  }
  public resetEnableWebhookUpdates() {
    this._enableWebhookUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWebhookUpdatesInput() {
    return this._enableWebhookUpdates;
  }

  // instance_identifier - computed: true, optional: true, required: false
  private _instanceIdentifier?: string; 
  public get instanceIdentifier() {
    return this.getStringAttribute('instance_identifier');
  }
  public set instanceIdentifier(value: string) {
    this._instanceIdentifier = value;
  }
  public resetInstanceIdentifier() {
    this._instanceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdentifierInput() {
    return this._instanceIdentifier;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_path - computed: true, optional: true, required: false
  private _projectPath?: string; 
  public get projectPath() {
    return this.getStringAttribute('project_path');
  }
  public set projectPath(value: string) {
    this._projectPath = value;
  }
  public resetProjectPath() {
    this._projectPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectPathInput() {
    return this._projectPath;
  }
}
export interface DevopsagentAssociationConfigurationMcpServer {
  /**
  * The description of the MCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}
  */
  readonly description?: string;
  /**
  * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}
  */
  readonly enableWebhookUpdates?: boolean | cdktn.IResolvable;
  /**
  * MCP server endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The name of the MCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}
  */
  readonly name?: string;
  /**
  * List of MCP tools that can be used with the association
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}
  */
  readonly tools?: string[];
}

export function devopsagentAssociationConfigurationMcpServerToTerraform(struct?: DevopsagentAssociationConfigurationMcpServer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    enable_webhook_updates: cdktn.booleanToTerraform(struct!.enableWebhookUpdates),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    name: cdktn.stringToTerraform(struct!.name),
    tools: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tools),
  }
}


export function devopsagentAssociationConfigurationMcpServerToHclTerraform(struct?: DevopsagentAssociationConfigurationMcpServer | cdktn.IResolvable): any {
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
    enable_webhook_updates: {
      value: cdktn.booleanToHclTerraform(struct!.enableWebhookUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
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
    tools: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tools),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssociationConfigurationMcpServerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentAssociationConfigurationMcpServer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enableWebhookUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWebhookUpdates = this._enableWebhookUpdates;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tools !== undefined) {
      hasAnyValues = true;
      internalValueResult.tools = this._tools;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationMcpServer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enableWebhookUpdates = undefined;
      this._endpoint = undefined;
      this._name = undefined;
      this._tools = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enableWebhookUpdates = value.enableWebhookUpdates;
      this._endpoint = value.endpoint;
      this._name = value.name;
      this._tools = value.tools;
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

  // enable_webhook_updates - computed: true, optional: true, required: false
  private _enableWebhookUpdates?: boolean | cdktn.IResolvable; 
  public get enableWebhookUpdates() {
    return this.getBooleanAttribute('enable_webhook_updates');
  }
  public set enableWebhookUpdates(value: boolean | cdktn.IResolvable) {
    this._enableWebhookUpdates = value;
  }
  public resetEnableWebhookUpdates() {
    this._enableWebhookUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWebhookUpdatesInput() {
    return this._enableWebhookUpdates;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // tools - computed: true, optional: true, required: false
  private _tools?: string[]; 
  public get tools() {
    return this.getListAttribute('tools');
  }
  public set tools(value: string[]) {
    this._tools = value;
  }
  public resetTools() {
    this._tools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsInput() {
    return this._tools;
  }
}
export interface DevopsagentAssociationConfigurationMcpServerDatadog {
  /**
  * The description of the MCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}
  */
  readonly description?: string;
  /**
  * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}
  */
  readonly enableWebhookUpdates?: boolean | cdktn.IResolvable;
  /**
  * MCP server endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The name of the MCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}
  */
  readonly name?: string;
}

export function devopsagentAssociationConfigurationMcpServerDatadogToTerraform(struct?: DevopsagentAssociationConfigurationMcpServerDatadog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    enable_webhook_updates: cdktn.booleanToTerraform(struct!.enableWebhookUpdates),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function devopsagentAssociationConfigurationMcpServerDatadogToHclTerraform(struct?: DevopsagentAssociationConfigurationMcpServerDatadog | cdktn.IResolvable): any {
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
    enable_webhook_updates: {
      value: cdktn.booleanToHclTerraform(struct!.enableWebhookUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
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

export class DevopsagentAssociationConfigurationMcpServerDatadogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentAssociationConfigurationMcpServerDatadog | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enableWebhookUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWebhookUpdates = this._enableWebhookUpdates;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationMcpServerDatadog | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enableWebhookUpdates = undefined;
      this._endpoint = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enableWebhookUpdates = value.enableWebhookUpdates;
      this._endpoint = value.endpoint;
      this._name = value.name;
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

  // enable_webhook_updates - computed: true, optional: true, required: false
  private _enableWebhookUpdates?: boolean | cdktn.IResolvable; 
  public get enableWebhookUpdates() {
    return this.getBooleanAttribute('enable_webhook_updates');
  }
  public set enableWebhookUpdates(value: boolean | cdktn.IResolvable) {
    this._enableWebhookUpdates = value;
  }
  public resetEnableWebhookUpdates() {
    this._enableWebhookUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWebhookUpdatesInput() {
    return this._enableWebhookUpdates;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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
export interface DevopsagentAssociationConfigurationMcpServerGrafana {
  /**
  * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}
  */
  readonly enableWebhookUpdates?: boolean | cdktn.IResolvable;
  /**
  * MCP server endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}
  */
  readonly endpoint?: string;
  /**
  * List of tool categories to enable for the Grafana MCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}
  */
  readonly tools?: string[];
}

export function devopsagentAssociationConfigurationMcpServerGrafanaToTerraform(struct?: DevopsagentAssociationConfigurationMcpServerGrafana | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_webhook_updates: cdktn.booleanToTerraform(struct!.enableWebhookUpdates),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    tools: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tools),
  }
}


export function devopsagentAssociationConfigurationMcpServerGrafanaToHclTerraform(struct?: DevopsagentAssociationConfigurationMcpServerGrafana | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_webhook_updates: {
      value: cdktn.booleanToHclTerraform(struct!.enableWebhookUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tools: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tools),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentAssociationConfigurationMcpServerGrafana | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableWebhookUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWebhookUpdates = this._enableWebhookUpdates;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._tools !== undefined) {
      hasAnyValues = true;
      internalValueResult.tools = this._tools;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationMcpServerGrafana | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableWebhookUpdates = undefined;
      this._endpoint = undefined;
      this._tools = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableWebhookUpdates = value.enableWebhookUpdates;
      this._endpoint = value.endpoint;
      this._tools = value.tools;
    }
  }

  // enable_webhook_updates - computed: true, optional: true, required: false
  private _enableWebhookUpdates?: boolean | cdktn.IResolvable; 
  public get enableWebhookUpdates() {
    return this.getBooleanAttribute('enable_webhook_updates');
  }
  public set enableWebhookUpdates(value: boolean | cdktn.IResolvable) {
    this._enableWebhookUpdates = value;
  }
  public resetEnableWebhookUpdates() {
    this._enableWebhookUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWebhookUpdatesInput() {
    return this._enableWebhookUpdates;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // tools - computed: true, optional: true, required: false
  private _tools?: string[]; 
  public get tools() {
    return this.getListAttribute('tools');
  }
  public set tools(value: string[]) {
    this._tools = value;
  }
  public resetTools() {
    this._tools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsInput() {
    return this._tools;
  }
}
export interface DevopsagentAssociationConfigurationMcpServerNewRelic {
  /**
  * New Relic Account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}
  */
  readonly accountId?: string;
  /**
  * MCP server endpoint URL (e.g., https://mcp.newrelic.com/mcp/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}
  */
  readonly endpoint?: string;
}

export function devopsagentAssociationConfigurationMcpServerNewRelicToTerraform(struct?: DevopsagentAssociationConfigurationMcpServerNewRelic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
  }
}


export function devopsagentAssociationConfigurationMcpServerNewRelicToHclTerraform(struct?: DevopsagentAssociationConfigurationMcpServerNewRelic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentAssociationConfigurationMcpServerNewRelic | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationMcpServerNewRelic | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._endpoint = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._endpoint = value.endpoint;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface DevopsagentAssociationConfigurationMcpServerSigV4 {
  /**
  * List of MCP tools available for the association
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}
  */
  readonly tools?: string[];
}

export function devopsagentAssociationConfigurationMcpServerSigV4ToTerraform(struct?: DevopsagentAssociationConfigurationMcpServerSigV4 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tools: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tools),
  }
}


export function devopsagentAssociationConfigurationMcpServerSigV4ToHclTerraform(struct?: DevopsagentAssociationConfigurationMcpServerSigV4 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tools: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tools),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssociationConfigurationMcpServerSigV4OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentAssociationConfigurationMcpServerSigV4 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tools !== undefined) {
      hasAnyValues = true;
      internalValueResult.tools = this._tools;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationMcpServerSigV4 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tools = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tools = value.tools;
    }
  }

  // tools - computed: true, optional: true, required: false
  private _tools?: string[]; 
  public get tools() {
    return this.getListAttribute('tools');
  }
  public set tools(value: string[]) {
    this._tools = value;
  }
  public resetTools() {
    this._tools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsInput() {
    return this._tools;
  }
}
export interface DevopsagentAssociationConfigurationMcpServerSplunk {
  /**
  * The description of the MCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}
  */
  readonly description?: string;
  /**
  * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}
  */
  readonly enableWebhookUpdates?: boolean | cdktn.IResolvable;
  /**
  * MCP server endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The name of the MCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}
  */
  readonly name?: string;
}

export function devopsagentAssociationConfigurationMcpServerSplunkToTerraform(struct?: DevopsagentAssociationConfigurationMcpServerSplunk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    enable_webhook_updates: cdktn.booleanToTerraform(struct!.enableWebhookUpdates),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function devopsagentAssociationConfigurationMcpServerSplunkToHclTerraform(struct?: DevopsagentAssociationConfigurationMcpServerSplunk | cdktn.IResolvable): any {
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
    enable_webhook_updates: {
      value: cdktn.booleanToHclTerraform(struct!.enableWebhookUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
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

export class DevopsagentAssociationConfigurationMcpServerSplunkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentAssociationConfigurationMcpServerSplunk | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enableWebhookUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWebhookUpdates = this._enableWebhookUpdates;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationMcpServerSplunk | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enableWebhookUpdates = undefined;
      this._endpoint = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enableWebhookUpdates = value.enableWebhookUpdates;
      this._endpoint = value.endpoint;
      this._name = value.name;
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

  // enable_webhook_updates - computed: true, optional: true, required: false
  private _enableWebhookUpdates?: boolean | cdktn.IResolvable; 
  public get enableWebhookUpdates() {
    return this.getBooleanAttribute('enable_webhook_updates');
  }
  public set enableWebhookUpdates(value: boolean | cdktn.IResolvable) {
    this._enableWebhookUpdates = value;
  }
  public resetEnableWebhookUpdates() {
    this._enableWebhookUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWebhookUpdatesInput() {
    return this._enableWebhookUpdates;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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
export interface DevopsagentAssociationConfigurationPagerDuty {
  /**
  * Email to be used in PagerDuty API header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#customer_email DevopsagentAssociation#customer_email}
  */
  readonly customerEmail?: string;
  /**
  * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}
  */
  readonly enableWebhookUpdates?: boolean | cdktn.IResolvable;
  /**
  * List of PagerDuty service IDs available for the association
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#services DevopsagentAssociation#services}
  */
  readonly services?: string[];
}

export function devopsagentAssociationConfigurationPagerDutyToTerraform(struct?: DevopsagentAssociationConfigurationPagerDuty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    customer_email: cdktn.stringToTerraform(struct!.customerEmail),
    enable_webhook_updates: cdktn.booleanToTerraform(struct!.enableWebhookUpdates),
    services: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.services),
  }
}


export function devopsagentAssociationConfigurationPagerDutyToHclTerraform(struct?: DevopsagentAssociationConfigurationPagerDuty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    customer_email: {
      value: cdktn.stringToHclTerraform(struct!.customerEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_webhook_updates: {
      value: cdktn.booleanToHclTerraform(struct!.enableWebhookUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    services: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssociationConfigurationPagerDutyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentAssociationConfigurationPagerDuty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerEmail = this._customerEmail;
    }
    if (this._enableWebhookUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWebhookUpdates = this._enableWebhookUpdates;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationPagerDuty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerEmail = undefined;
      this._enableWebhookUpdates = undefined;
      this._services = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerEmail = value.customerEmail;
      this._enableWebhookUpdates = value.enableWebhookUpdates;
      this._services = value.services;
    }
  }

  // customer_email - computed: true, optional: true, required: false
  private _customerEmail?: string; 
  public get customerEmail() {
    return this.getStringAttribute('customer_email');
  }
  public set customerEmail(value: string) {
    this._customerEmail = value;
  }
  public resetCustomerEmail() {
    this._customerEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerEmailInput() {
    return this._customerEmail;
  }

  // enable_webhook_updates - computed: true, optional: true, required: false
  private _enableWebhookUpdates?: boolean | cdktn.IResolvable; 
  public get enableWebhookUpdates() {
    return this.getBooleanAttribute('enable_webhook_updates');
  }
  public set enableWebhookUpdates(value: boolean | cdktn.IResolvable) {
    this._enableWebhookUpdates = value;
  }
  public resetEnableWebhookUpdates() {
    this._enableWebhookUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWebhookUpdatesInput() {
    return this._enableWebhookUpdates;
  }

  // services - computed: true, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}
export interface DevopsagentAssociationConfigurationServiceNow {
  /**
  * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}
  */
  readonly enableWebhookUpdates?: boolean | cdktn.IResolvable;
  /**
  * ServiceNow instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#instance_id DevopsagentAssociation#instance_id}
  */
  readonly instanceId?: string;
}

export function devopsagentAssociationConfigurationServiceNowToTerraform(struct?: DevopsagentAssociationConfigurationServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_webhook_updates: cdktn.booleanToTerraform(struct!.enableWebhookUpdates),
    instance_id: cdktn.stringToTerraform(struct!.instanceId),
  }
}


export function devopsagentAssociationConfigurationServiceNowToHclTerraform(struct?: DevopsagentAssociationConfigurationServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_webhook_updates: {
      value: cdktn.booleanToHclTerraform(struct!.enableWebhookUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_id: {
      value: cdktn.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssociationConfigurationServiceNowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentAssociationConfigurationServiceNow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableWebhookUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWebhookUpdates = this._enableWebhookUpdates;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationServiceNow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableWebhookUpdates = undefined;
      this._instanceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableWebhookUpdates = value.enableWebhookUpdates;
      this._instanceId = value.instanceId;
    }
  }

  // enable_webhook_updates - computed: true, optional: true, required: false
  private _enableWebhookUpdates?: boolean | cdktn.IResolvable; 
  public get enableWebhookUpdates() {
    return this.getBooleanAttribute('enable_webhook_updates');
  }
  public set enableWebhookUpdates(value: boolean | cdktn.IResolvable) {
    this._enableWebhookUpdates = value;
  }
  public resetEnableWebhookUpdates() {
    this._enableWebhookUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWebhookUpdatesInput() {
    return this._enableWebhookUpdates;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}
export interface DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget {
  /**
  * Slack channel ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#channel_id DevopsagentAssociation#channel_id}
  */
  readonly channelId?: string;
  /**
  * Slack channel name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#channel_name DevopsagentAssociation#channel_name}
  */
  readonly channelName?: string;
}

export function devopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetToTerraform(struct?: DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel_id: cdktn.stringToTerraform(struct!.channelId),
    channel_name: cdktn.stringToTerraform(struct!.channelName),
  }
}


export function devopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetToHclTerraform(struct?: DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel_id: {
      value: cdktn.stringToHclTerraform(struct!.channelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_name: {
      value: cdktn.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelId = this._channelId;
    }
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelId = undefined;
      this._channelName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelId = value.channelId;
      this._channelName = value.channelName;
    }
  }

  // channel_id - computed: true, optional: true, required: false
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  public resetChannelId() {
    this._channelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
  }

  // channel_name - computed: true, optional: true, required: false
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  public resetChannelName() {
    this._channelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }
}
export interface DevopsagentAssociationConfigurationSlackTransmissionTarget {
  /**
  * Destination for IncidentResponse agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#incident_response_target DevopsagentAssociation#incident_response_target}
  */
  readonly incidentResponseTarget?: DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget;
}

export function devopsagentAssociationConfigurationSlackTransmissionTargetToTerraform(struct?: DevopsagentAssociationConfigurationSlackTransmissionTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    incident_response_target: devopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetToTerraform(struct!.incidentResponseTarget),
  }
}


export function devopsagentAssociationConfigurationSlackTransmissionTargetToHclTerraform(struct?: DevopsagentAssociationConfigurationSlackTransmissionTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    incident_response_target: {
      value: devopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetToHclTerraform(struct!.incidentResponseTarget),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentAssociationConfigurationSlackTransmissionTarget | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._incidentResponseTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentResponseTarget = this._incidentResponseTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationSlackTransmissionTarget | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._incidentResponseTarget.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._incidentResponseTarget.internalValue = value.incidentResponseTarget;
    }
  }

  // incident_response_target - computed: true, optional: true, required: false
  private _incidentResponseTarget = new DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference(this, "incident_response_target");
  public get incidentResponseTarget() {
    return this._incidentResponseTarget;
  }
  public putIncidentResponseTarget(value: DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget) {
    this._incidentResponseTarget.internalValue = value;
  }
  public resetIncidentResponseTarget() {
    this._incidentResponseTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentResponseTargetInput() {
    return this._incidentResponseTarget.internalValue;
  }
}
export interface DevopsagentAssociationConfigurationSlack {
  /**
  * Transmission targets for agent notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#transmission_target DevopsagentAssociation#transmission_target}
  */
  readonly transmissionTarget?: DevopsagentAssociationConfigurationSlackTransmissionTarget;
  /**
  * Associated Slack workspace ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#workspace_id DevopsagentAssociation#workspace_id}
  */
  readonly workspaceId?: string;
  /**
  * Associated Slack workspace name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#workspace_name DevopsagentAssociation#workspace_name}
  */
  readonly workspaceName?: string;
}

export function devopsagentAssociationConfigurationSlackToTerraform(struct?: DevopsagentAssociationConfigurationSlack | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    transmission_target: devopsagentAssociationConfigurationSlackTransmissionTargetToTerraform(struct!.transmissionTarget),
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
    workspace_name: cdktn.stringToTerraform(struct!.workspaceName),
  }
}


export function devopsagentAssociationConfigurationSlackToHclTerraform(struct?: DevopsagentAssociationConfigurationSlack | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    transmission_target: {
      value: devopsagentAssociationConfigurationSlackTransmissionTargetToHclTerraform(struct!.transmissionTarget),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentAssociationConfigurationSlackTransmissionTarget",
    },
    workspace_id: {
      value: cdktn.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_name: {
      value: cdktn.stringToHclTerraform(struct!.workspaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssociationConfigurationSlackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentAssociationConfigurationSlack | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transmissionTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmissionTarget = this._transmissionTarget?.internalValue;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    if (this._workspaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceName = this._workspaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationSlack | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transmissionTarget.internalValue = undefined;
      this._workspaceId = undefined;
      this._workspaceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transmissionTarget.internalValue = value.transmissionTarget;
      this._workspaceId = value.workspaceId;
      this._workspaceName = value.workspaceName;
    }
  }

  // transmission_target - computed: true, optional: true, required: false
  private _transmissionTarget = new DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference(this, "transmission_target");
  public get transmissionTarget() {
    return this._transmissionTarget;
  }
  public putTransmissionTarget(value: DevopsagentAssociationConfigurationSlackTransmissionTarget) {
    this._transmissionTarget.internalValue = value;
  }
  public resetTransmissionTarget() {
    this._transmissionTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmissionTargetInput() {
    return this._transmissionTarget.internalValue;
  }

  // workspace_id - computed: true, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // workspace_name - computed: true, optional: true, required: false
  private _workspaceName?: string; 
  public get workspaceName() {
    return this.getStringAttribute('workspace_name');
  }
  public set workspaceName(value: string) {
    this._workspaceName = value;
  }
  public resetWorkspaceName() {
    this._workspaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceNameInput() {
    return this._workspaceName;
  }
}
export interface DevopsagentAssociationConfigurationSourceAwsResources {
  /**
  * The Amazon Resource Name (ARN) of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#resource_arn DevopsagentAssociation#resource_arn}
  */
  readonly resourceArn?: string;
  /**
  * Additional metadata for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#resource_metadata DevopsagentAssociation#resource_metadata}
  */
  readonly resourceMetadata?: string;
  /**
  * Resource type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#resource_type DevopsagentAssociation#resource_type}
  */
  readonly resourceType?: string;
}

export function devopsagentAssociationConfigurationSourceAwsResourcesToTerraform(struct?: DevopsagentAssociationConfigurationSourceAwsResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
    resource_metadata: cdktn.stringToTerraform(struct!.resourceMetadata),
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
  }
}


export function devopsagentAssociationConfigurationSourceAwsResourcesToHclTerraform(struct?: DevopsagentAssociationConfigurationSourceAwsResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_metadata: {
      value: cdktn.stringToHclTerraform(struct!.resourceMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DevopsagentAssociationConfigurationSourceAwsResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    if (this._resourceMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceMetadata = this._resourceMetadata;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationSourceAwsResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceArn = undefined;
      this._resourceMetadata = undefined;
      this._resourceType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceArn = value.resourceArn;
      this._resourceMetadata = value.resourceMetadata;
      this._resourceType = value.resourceType;
    }
  }

  // resource_arn - computed: true, optional: true, required: false
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  public resetResourceArn() {
    this._resourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }

  // resource_metadata - computed: true, optional: true, required: false
  private _resourceMetadata?: string; 
  public get resourceMetadata() {
    return this.getStringAttribute('resource_metadata');
  }
  public set resourceMetadata(value: string) {
    this._resourceMetadata = value;
  }
  public resetResourceMetadata() {
    this._resourceMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceMetadataInput() {
    return this._resourceMetadata;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class DevopsagentAssociationConfigurationSourceAwsResourcesList extends cdktn.ComplexList {
  public internalValue? : DevopsagentAssociationConfigurationSourceAwsResources[] | cdktn.IResolvable

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
  public get(index: number): DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference {
    return new DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsagentAssociationConfigurationSourceAwsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}
  */
  readonly value?: string;
}

export function devopsagentAssociationConfigurationSourceAwsTagsToTerraform(struct?: DevopsagentAssociationConfigurationSourceAwsTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function devopsagentAssociationConfigurationSourceAwsTagsToHclTerraform(struct?: DevopsagentAssociationConfigurationSourceAwsTags | cdktn.IResolvable): any {
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

export class DevopsagentAssociationConfigurationSourceAwsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DevopsagentAssociationConfigurationSourceAwsTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DevopsagentAssociationConfigurationSourceAwsTags | cdktn.IResolvable | undefined) {
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

export class DevopsagentAssociationConfigurationSourceAwsTagsList extends cdktn.ComplexList {
  public internalValue? : DevopsagentAssociationConfigurationSourceAwsTags[] | cdktn.IResolvable

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
  public get(index: number): DevopsagentAssociationConfigurationSourceAwsTagsOutputReference {
    return new DevopsagentAssociationConfigurationSourceAwsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsagentAssociationConfigurationSourceAws {
  /**
  * AWS Account Id corresponding to provided resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}
  */
  readonly accountId?: string;
  /**
  * Account Type 'source' for DevOpsAgent monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#account_type DevopsagentAssociation#account_type}
  */
  readonly accountType?: string;
  /**
  * Role ARN to be assumed by DevOpsAgent to operate on behalf of customer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#assumable_role_arn DevopsagentAssociation#assumable_role_arn}
  */
  readonly assumableRoleArn?: string;
  /**
  * List of AWS resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}
  */
  readonly resources?: DevopsagentAssociationConfigurationSourceAwsResources[] | cdktn.IResolvable;
  /**
  * List of AWS tags as key-value pairs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#tags DevopsagentAssociation#tags}
  */
  readonly tags?: DevopsagentAssociationConfigurationSourceAwsTags[] | cdktn.IResolvable;
}

export function devopsagentAssociationConfigurationSourceAwsToTerraform(struct?: DevopsagentAssociationConfigurationSourceAws | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    account_type: cdktn.stringToTerraform(struct!.accountType),
    assumable_role_arn: cdktn.stringToTerraform(struct!.assumableRoleArn),
    resources: cdktn.listMapper(devopsagentAssociationConfigurationSourceAwsResourcesToTerraform, false)(struct!.resources),
    tags: cdktn.listMapper(devopsagentAssociationConfigurationSourceAwsTagsToTerraform, false)(struct!.tags),
  }
}


export function devopsagentAssociationConfigurationSourceAwsToHclTerraform(struct?: DevopsagentAssociationConfigurationSourceAws | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_type: {
      value: cdktn.stringToHclTerraform(struct!.accountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assumable_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.assumableRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktn.listMapperHcl(devopsagentAssociationConfigurationSourceAwsResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsagentAssociationConfigurationSourceAwsResourcesList",
    },
    tags: {
      value: cdktn.listMapperHcl(devopsagentAssociationConfigurationSourceAwsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsagentAssociationConfigurationSourceAwsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssociationConfigurationSourceAwsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentAssociationConfigurationSourceAws | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._accountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountType = this._accountType;
    }
    if (this._assumableRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumableRoleArn = this._assumableRoleArn;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfigurationSourceAws | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._accountType = undefined;
      this._assumableRoleArn = undefined;
      this._resources.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._accountType = value.accountType;
      this._assumableRoleArn = value.assumableRoleArn;
      this._resources.internalValue = value.resources;
      this._tags.internalValue = value.tags;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_type - computed: true, optional: true, required: false
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  public resetAccountType() {
    this._accountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
  }

  // assumable_role_arn - computed: true, optional: true, required: false
  private _assumableRoleArn?: string; 
  public get assumableRoleArn() {
    return this.getStringAttribute('assumable_role_arn');
  }
  public set assumableRoleArn(value: string) {
    this._assumableRoleArn = value;
  }
  public resetAssumableRoleArn() {
    this._assumableRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumableRoleArnInput() {
    return this._assumableRoleArn;
  }

  // resources - computed: true, optional: true, required: false
  private _resources = new DevopsagentAssociationConfigurationSourceAwsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DevopsagentAssociationConfigurationSourceAwsResources[] | cdktn.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DevopsagentAssociationConfigurationSourceAwsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DevopsagentAssociationConfigurationSourceAwsTags[] | cdktn.IResolvable) {
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
export interface DevopsagentAssociationConfiguration {
  /**
  * AWS association for 'monitor' account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#aws DevopsagentAssociation#aws}
  */
  readonly aws?: DevopsagentAssociationConfigurationAws;
  /**
  * Azure subscription integration configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#azure DevopsagentAssociation#azure}
  */
  readonly azure?: DevopsagentAssociationConfigurationAzure;
  /**
  * Dynatrace monitoring configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#dynatrace DevopsagentAssociation#dynatrace}
  */
  readonly dynatrace?: DevopsagentAssociationConfigurationDynatrace;
  /**
  * EventChannelconfiguration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#event_channel DevopsagentAssociation#event_channel}
  */
  readonly eventChannel?: DevopsagentAssociationConfigurationEventChannel;
  /**
  * GitHub repository integration configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#git_hub DevopsagentAssociation#git_hub}
  */
  readonly gitHub?: DevopsagentAssociationConfigurationGitHub;
  /**
  * GitLab project integration configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#git_lab DevopsagentAssociation#git_lab}
  */
  readonly gitLab?: DevopsagentAssociationConfigurationGitLab;
  /**
  * MCP server configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#mcp_server DevopsagentAssociation#mcp_server}
  */
  readonly mcpServer?: DevopsagentAssociationConfigurationMcpServer;
  /**
  * Datadog MCP server configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#mcp_server_datadog DevopsagentAssociation#mcp_server_datadog}
  */
  readonly mcpServerDatadog?: DevopsagentAssociationConfigurationMcpServerDatadog;
  /**
  * Grafana MCP server configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#mcp_server_grafana DevopsagentAssociation#mcp_server_grafana}
  */
  readonly mcpServerGrafana?: DevopsagentAssociationConfigurationMcpServerGrafana;
  /**
  * NewRelic MCP server configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#mcp_server_new_relic DevopsagentAssociation#mcp_server_new_relic}
  */
  readonly mcpServerNewRelic?: DevopsagentAssociationConfigurationMcpServerNewRelic;
  /**
  * SigV4-authenticated MCP server configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#mcp_server_sig_v4 DevopsagentAssociation#mcp_server_sig_v4}
  */
  readonly mcpServerSigV4?: DevopsagentAssociationConfigurationMcpServerSigV4;
  /**
  * Splunk MCP server configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#mcp_server_splunk DevopsagentAssociation#mcp_server_splunk}
  */
  readonly mcpServerSplunk?: DevopsagentAssociationConfigurationMcpServerSplunk;
  /**
  * PagerDuty integration configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#pager_duty DevopsagentAssociation#pager_duty}
  */
  readonly pagerDuty?: DevopsagentAssociationConfigurationPagerDuty;
  /**
  * ServiceNow integration configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#service_now DevopsagentAssociation#service_now}
  */
  readonly serviceNow?: DevopsagentAssociationConfigurationServiceNow;
  /**
  * Slack workspace integration configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#slack DevopsagentAssociation#slack}
  */
  readonly slack?: DevopsagentAssociationConfigurationSlack;
  /**
  * AWS association for 'source' account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#source_aws DevopsagentAssociation#source_aws}
  */
  readonly sourceAws?: DevopsagentAssociationConfigurationSourceAws;
}

export function devopsagentAssociationConfigurationToTerraform(struct?: DevopsagentAssociationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws: devopsagentAssociationConfigurationAwsToTerraform(struct!.aws),
    azure: devopsagentAssociationConfigurationAzureToTerraform(struct!.azure),
    dynatrace: devopsagentAssociationConfigurationDynatraceToTerraform(struct!.dynatrace),
    event_channel: devopsagentAssociationConfigurationEventChannelToTerraform(struct!.eventChannel),
    git_hub: devopsagentAssociationConfigurationGitHubToTerraform(struct!.gitHub),
    git_lab: devopsagentAssociationConfigurationGitLabToTerraform(struct!.gitLab),
    mcp_server: devopsagentAssociationConfigurationMcpServerToTerraform(struct!.mcpServer),
    mcp_server_datadog: devopsagentAssociationConfigurationMcpServerDatadogToTerraform(struct!.mcpServerDatadog),
    mcp_server_grafana: devopsagentAssociationConfigurationMcpServerGrafanaToTerraform(struct!.mcpServerGrafana),
    mcp_server_new_relic: devopsagentAssociationConfigurationMcpServerNewRelicToTerraform(struct!.mcpServerNewRelic),
    mcp_server_sig_v4: devopsagentAssociationConfigurationMcpServerSigV4ToTerraform(struct!.mcpServerSigV4),
    mcp_server_splunk: devopsagentAssociationConfigurationMcpServerSplunkToTerraform(struct!.mcpServerSplunk),
    pager_duty: devopsagentAssociationConfigurationPagerDutyToTerraform(struct!.pagerDuty),
    service_now: devopsagentAssociationConfigurationServiceNowToTerraform(struct!.serviceNow),
    slack: devopsagentAssociationConfigurationSlackToTerraform(struct!.slack),
    source_aws: devopsagentAssociationConfigurationSourceAwsToTerraform(struct!.sourceAws),
  }
}


export function devopsagentAssociationConfigurationToHclTerraform(struct?: DevopsagentAssociationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws: {
      value: devopsagentAssociationConfigurationAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentAssociationConfigurationAws",
    },
    azure: {
      value: devopsagentAssociationConfigurationAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentAssociationConfigurationAzure",
    },
    dynatrace: {
      value: devopsagentAssociationConfigurationDynatraceToHclTerraform(struct!.dynatrace),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentAssociationConfigurationDynatrace",
    },
    event_channel: {
      value: devopsagentAssociationConfigurationEventChannelToHclTerraform(struct!.eventChannel),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentAssociationConfigurationEventChannel",
    },
    git_hub: {
      value: devopsagentAssociationConfigurationGitHubToHclTerraform(struct!.gitHub),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentAssociationConfigurationGitHub",
    },
    git_lab: {
      value: devopsagentAssociationConfigurationGitLabToHclTerraform(struct!.gitLab),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentAssociationConfigurationGitLab",
    },
    mcp_server: {
      value: devopsagentAssociationConfigurationMcpServerToHclTerraform(struct!.mcpServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentAssociationConfigurationMcpServer",
    },
    mcp_server_datadog: {
      value: devopsagentAssociationConfigurationMcpServerDatadogToHclTerraform(struct!.mcpServerDatadog),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentAssociationConfigurationMcpServerDatadog",
    },
    mcp_server_grafana: {
      value: devopsagentAssociationConfigurationMcpServerGrafanaToHclTerraform(struct!.mcpServerGrafana),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentAssociationConfigurationMcpServerGrafana",
    },
    mcp_server_new_relic: {
      value: devopsagentAssociationConfigurationMcpServerNewRelicToHclTerraform(struct!.mcpServerNewRelic),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentAssociationConfigurationMcpServerNewRelic",
    },
    mcp_server_sig_v4: {
      value: devopsagentAssociationConfigurationMcpServerSigV4ToHclTerraform(struct!.mcpServerSigV4),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentAssociationConfigurationMcpServerSigV4",
    },
    mcp_server_splunk: {
      value: devopsagentAssociationConfigurationMcpServerSplunkToHclTerraform(struct!.mcpServerSplunk),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentAssociationConfigurationMcpServerSplunk",
    },
    pager_duty: {
      value: devopsagentAssociationConfigurationPagerDutyToHclTerraform(struct!.pagerDuty),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentAssociationConfigurationPagerDuty",
    },
    service_now: {
      value: devopsagentAssociationConfigurationServiceNowToHclTerraform(struct!.serviceNow),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentAssociationConfigurationServiceNow",
    },
    slack: {
      value: devopsagentAssociationConfigurationSlackToHclTerraform(struct!.slack),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentAssociationConfigurationSlack",
    },
    source_aws: {
      value: devopsagentAssociationConfigurationSourceAwsToHclTerraform(struct!.sourceAws),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentAssociationConfigurationSourceAws",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentAssociationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentAssociationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._dynatrace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynatrace = this._dynatrace?.internalValue;
    }
    if (this._eventChannel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventChannel = this._eventChannel?.internalValue;
    }
    if (this._gitHub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitHub = this._gitHub?.internalValue;
    }
    if (this._gitLab?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitLab = this._gitLab?.internalValue;
    }
    if (this._mcpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpServer = this._mcpServer?.internalValue;
    }
    if (this._mcpServerDatadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpServerDatadog = this._mcpServerDatadog?.internalValue;
    }
    if (this._mcpServerGrafana?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpServerGrafana = this._mcpServerGrafana?.internalValue;
    }
    if (this._mcpServerNewRelic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpServerNewRelic = this._mcpServerNewRelic?.internalValue;
    }
    if (this._mcpServerSigV4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpServerSigV4 = this._mcpServerSigV4?.internalValue;
    }
    if (this._mcpServerSplunk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpServerSplunk = this._mcpServerSplunk?.internalValue;
    }
    if (this._pagerDuty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerDuty = this._pagerDuty?.internalValue;
    }
    if (this._serviceNow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow?.internalValue;
    }
    if (this._slack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack?.internalValue;
    }
    if (this._sourceAws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAws = this._sourceAws?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentAssociationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
      this._azure.internalValue = undefined;
      this._dynatrace.internalValue = undefined;
      this._eventChannel.internalValue = undefined;
      this._gitHub.internalValue = undefined;
      this._gitLab.internalValue = undefined;
      this._mcpServer.internalValue = undefined;
      this._mcpServerDatadog.internalValue = undefined;
      this._mcpServerGrafana.internalValue = undefined;
      this._mcpServerNewRelic.internalValue = undefined;
      this._mcpServerSigV4.internalValue = undefined;
      this._mcpServerSplunk.internalValue = undefined;
      this._pagerDuty.internalValue = undefined;
      this._serviceNow.internalValue = undefined;
      this._slack.internalValue = undefined;
      this._sourceAws.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
      this._azure.internalValue = value.azure;
      this._dynatrace.internalValue = value.dynatrace;
      this._eventChannel.internalValue = value.eventChannel;
      this._gitHub.internalValue = value.gitHub;
      this._gitLab.internalValue = value.gitLab;
      this._mcpServer.internalValue = value.mcpServer;
      this._mcpServerDatadog.internalValue = value.mcpServerDatadog;
      this._mcpServerGrafana.internalValue = value.mcpServerGrafana;
      this._mcpServerNewRelic.internalValue = value.mcpServerNewRelic;
      this._mcpServerSigV4.internalValue = value.mcpServerSigV4;
      this._mcpServerSplunk.internalValue = value.mcpServerSplunk;
      this._pagerDuty.internalValue = value.pagerDuty;
      this._serviceNow.internalValue = value.serviceNow;
      this._slack.internalValue = value.slack;
      this._sourceAws.internalValue = value.sourceAws;
    }
  }

  // aws - computed: true, optional: true, required: false
  private _aws = new DevopsagentAssociationConfigurationAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DevopsagentAssociationConfigurationAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: true, optional: true, required: false
  private _azure = new DevopsagentAssociationConfigurationAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DevopsagentAssociationConfigurationAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // dynatrace - computed: true, optional: true, required: false
  private _dynatrace = new DevopsagentAssociationConfigurationDynatraceOutputReference(this, "dynatrace");
  public get dynatrace() {
    return this._dynatrace;
  }
  public putDynatrace(value: DevopsagentAssociationConfigurationDynatrace) {
    this._dynatrace.internalValue = value;
  }
  public resetDynatrace() {
    this._dynatrace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceInput() {
    return this._dynatrace.internalValue;
  }

  // event_channel - computed: true, optional: true, required: false
  private _eventChannel = new DevopsagentAssociationConfigurationEventChannelOutputReference(this, "event_channel");
  public get eventChannel() {
    return this._eventChannel;
  }
  public putEventChannel(value: DevopsagentAssociationConfigurationEventChannel) {
    this._eventChannel.internalValue = value;
  }
  public resetEventChannel() {
    this._eventChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventChannelInput() {
    return this._eventChannel.internalValue;
  }

  // git_hub - computed: true, optional: true, required: false
  private _gitHub = new DevopsagentAssociationConfigurationGitHubOutputReference(this, "git_hub");
  public get gitHub() {
    return this._gitHub;
  }
  public putGitHub(value: DevopsagentAssociationConfigurationGitHub) {
    this._gitHub.internalValue = value;
  }
  public resetGitHub() {
    this._gitHub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitHubInput() {
    return this._gitHub.internalValue;
  }

  // git_lab - computed: true, optional: true, required: false
  private _gitLab = new DevopsagentAssociationConfigurationGitLabOutputReference(this, "git_lab");
  public get gitLab() {
    return this._gitLab;
  }
  public putGitLab(value: DevopsagentAssociationConfigurationGitLab) {
    this._gitLab.internalValue = value;
  }
  public resetGitLab() {
    this._gitLab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitLabInput() {
    return this._gitLab.internalValue;
  }

  // mcp_server - computed: true, optional: true, required: false
  private _mcpServer = new DevopsagentAssociationConfigurationMcpServerOutputReference(this, "mcp_server");
  public get mcpServer() {
    return this._mcpServer;
  }
  public putMcpServer(value: DevopsagentAssociationConfigurationMcpServer) {
    this._mcpServer.internalValue = value;
  }
  public resetMcpServer() {
    this._mcpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpServerInput() {
    return this._mcpServer.internalValue;
  }

  // mcp_server_datadog - computed: true, optional: true, required: false
  private _mcpServerDatadog = new DevopsagentAssociationConfigurationMcpServerDatadogOutputReference(this, "mcp_server_datadog");
  public get mcpServerDatadog() {
    return this._mcpServerDatadog;
  }
  public putMcpServerDatadog(value: DevopsagentAssociationConfigurationMcpServerDatadog) {
    this._mcpServerDatadog.internalValue = value;
  }
  public resetMcpServerDatadog() {
    this._mcpServerDatadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpServerDatadogInput() {
    return this._mcpServerDatadog.internalValue;
  }

  // mcp_server_grafana - computed: true, optional: true, required: false
  private _mcpServerGrafana = new DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference(this, "mcp_server_grafana");
  public get mcpServerGrafana() {
    return this._mcpServerGrafana;
  }
  public putMcpServerGrafana(value: DevopsagentAssociationConfigurationMcpServerGrafana) {
    this._mcpServerGrafana.internalValue = value;
  }
  public resetMcpServerGrafana() {
    this._mcpServerGrafana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpServerGrafanaInput() {
    return this._mcpServerGrafana.internalValue;
  }

  // mcp_server_new_relic - computed: true, optional: true, required: false
  private _mcpServerNewRelic = new DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference(this, "mcp_server_new_relic");
  public get mcpServerNewRelic() {
    return this._mcpServerNewRelic;
  }
  public putMcpServerNewRelic(value: DevopsagentAssociationConfigurationMcpServerNewRelic) {
    this._mcpServerNewRelic.internalValue = value;
  }
  public resetMcpServerNewRelic() {
    this._mcpServerNewRelic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpServerNewRelicInput() {
    return this._mcpServerNewRelic.internalValue;
  }

  // mcp_server_sig_v4 - computed: true, optional: true, required: false
  private _mcpServerSigV4 = new DevopsagentAssociationConfigurationMcpServerSigV4OutputReference(this, "mcp_server_sig_v4");
  public get mcpServerSigV4() {
    return this._mcpServerSigV4;
  }
  public putMcpServerSigV4(value: DevopsagentAssociationConfigurationMcpServerSigV4) {
    this._mcpServerSigV4.internalValue = value;
  }
  public resetMcpServerSigV4() {
    this._mcpServerSigV4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpServerSigV4Input() {
    return this._mcpServerSigV4.internalValue;
  }

  // mcp_server_splunk - computed: true, optional: true, required: false
  private _mcpServerSplunk = new DevopsagentAssociationConfigurationMcpServerSplunkOutputReference(this, "mcp_server_splunk");
  public get mcpServerSplunk() {
    return this._mcpServerSplunk;
  }
  public putMcpServerSplunk(value: DevopsagentAssociationConfigurationMcpServerSplunk) {
    this._mcpServerSplunk.internalValue = value;
  }
  public resetMcpServerSplunk() {
    this._mcpServerSplunk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpServerSplunkInput() {
    return this._mcpServerSplunk.internalValue;
  }

  // pager_duty - computed: true, optional: true, required: false
  private _pagerDuty = new DevopsagentAssociationConfigurationPagerDutyOutputReference(this, "pager_duty");
  public get pagerDuty() {
    return this._pagerDuty;
  }
  public putPagerDuty(value: DevopsagentAssociationConfigurationPagerDuty) {
    this._pagerDuty.internalValue = value;
  }
  public resetPagerDuty() {
    this._pagerDuty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerDutyInput() {
    return this._pagerDuty.internalValue;
  }

  // service_now - computed: true, optional: true, required: false
  private _serviceNow = new DevopsagentAssociationConfigurationServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: DevopsagentAssociationConfigurationServiceNow) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }

  // slack - computed: true, optional: true, required: false
  private _slack = new DevopsagentAssociationConfigurationSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: DevopsagentAssociationConfigurationSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // source_aws - computed: true, optional: true, required: false
  private _sourceAws = new DevopsagentAssociationConfigurationSourceAwsOutputReference(this, "source_aws");
  public get sourceAws() {
    return this._sourceAws;
  }
  public putSourceAws(value: DevopsagentAssociationConfigurationSourceAws) {
    this._sourceAws.internalValue = value;
  }
  public resetSourceAws() {
    this._sourceAws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAwsInput() {
    return this._sourceAws.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association awscc_devopsagent_association}
*/
export class DevopsagentAssociation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_devopsagent_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DevopsagentAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevopsagentAssociation to import
  * @param importFromId The id of the existing DevopsagentAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevopsagentAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_devopsagent_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/devopsagent_association awscc_devopsagent_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevopsagentAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DevopsagentAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_devopsagent_association',
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
    this._agentSpaceId = config.agentSpaceId;
    this._configuration.internalValue = config.configuration;
    this._linkedAssociationIds = config.linkedAssociationIds;
    this._serviceId = config.serviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_space_id - computed: false, optional: false, required: true
  private _agentSpaceId?: string; 
  public get agentSpaceId() {
    return this.getStringAttribute('agent_space_id');
  }
  public set agentSpaceId(value: string) {
    this._agentSpaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentSpaceIdInput() {
    return this._agentSpaceId;
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new DevopsagentAssociationConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DevopsagentAssociationConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // linked_association_ids - computed: true, optional: true, required: false
  private _linkedAssociationIds?: string[]; 
  public get linkedAssociationIds() {
    return this.getListAttribute('linked_association_ids');
  }
  public set linkedAssociationIds(value: string[]) {
    this._linkedAssociationIds = value;
  }
  public resetLinkedAssociationIds() {
    this._linkedAssociationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedAssociationIdsInput() {
    return this._linkedAssociationIds;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_space_id: cdktn.stringToTerraform(this._agentSpaceId),
      configuration: devopsagentAssociationConfigurationToTerraform(this._configuration.internalValue),
      linked_association_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._linkedAssociationIds),
      service_id: cdktn.stringToTerraform(this._serviceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_space_id: {
        value: cdktn.stringToHclTerraform(this._agentSpaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: devopsagentAssociationConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DevopsagentAssociationConfiguration",
      },
      linked_association_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._linkedAssociationIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_id: {
        value: cdktn.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
