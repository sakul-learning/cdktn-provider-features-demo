// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AppstreamAppBlockBuilderConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder#access_endpoints AppstreamAppBlockBuilder#access_endpoints}
  */
  readonly accessEndpoints?: AppstreamAppBlockBuilderAccessEndpoints[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder#app_block_arns AppstreamAppBlockBuilder#app_block_arns}
  */
  readonly appBlockArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder#description AppstreamAppBlockBuilder#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder#display_name AppstreamAppBlockBuilder#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder#enable_default_internet_access AppstreamAppBlockBuilder#enable_default_internet_access}
  */
  readonly enableDefaultInternetAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder#iam_role_arn AppstreamAppBlockBuilder#iam_role_arn}
  */
  readonly iamRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder#instance_type AppstreamAppBlockBuilder#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder#name AppstreamAppBlockBuilder#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder#platform AppstreamAppBlockBuilder#platform}
  */
  readonly platform: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder#tags AppstreamAppBlockBuilder#tags}
  */
  readonly tags?: AppstreamAppBlockBuilderTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder#vpc_config AppstreamAppBlockBuilder#vpc_config}
  */
  readonly vpcConfig: AppstreamAppBlockBuilderVpcConfig;
}
export interface AppstreamAppBlockBuilderAccessEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder#endpoint_type AppstreamAppBlockBuilder#endpoint_type}
  */
  readonly endpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder#vpce_id AppstreamAppBlockBuilder#vpce_id}
  */
  readonly vpceId?: string;
}

export function appstreamAppBlockBuilderAccessEndpointsToTerraform(struct?: AppstreamAppBlockBuilderAccessEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint_type: cdktn.stringToTerraform(struct!.endpointType),
    vpce_id: cdktn.stringToTerraform(struct!.vpceId),
  }
}


export function appstreamAppBlockBuilderAccessEndpointsToHclTerraform(struct?: AppstreamAppBlockBuilderAccessEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint_type: {
      value: cdktn.stringToHclTerraform(struct!.endpointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpce_id: {
      value: cdktn.stringToHclTerraform(struct!.vpceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppstreamAppBlockBuilderAccessEndpointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppstreamAppBlockBuilderAccessEndpoints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointType = this._endpointType;
    }
    if (this._vpceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpceId = this._vpceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppstreamAppBlockBuilderAccessEndpoints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointType = undefined;
      this._vpceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointType = value.endpointType;
      this._vpceId = value.vpceId;
    }
  }

  // endpoint_type - computed: true, optional: true, required: false
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  public resetEndpointType() {
    this._endpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // vpce_id - computed: true, optional: true, required: false
  private _vpceId?: string; 
  public get vpceId() {
    return this.getStringAttribute('vpce_id');
  }
  public set vpceId(value: string) {
    this._vpceId = value;
  }
  public resetVpceId() {
    this._vpceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpceIdInput() {
    return this._vpceId;
  }
}

export class AppstreamAppBlockBuilderAccessEndpointsList extends cdktn.ComplexList {
  public internalValue? : AppstreamAppBlockBuilderAccessEndpoints[] | cdktn.IResolvable

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
  public get(index: number): AppstreamAppBlockBuilderAccessEndpointsOutputReference {
    return new AppstreamAppBlockBuilderAccessEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppstreamAppBlockBuilderTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder#key AppstreamAppBlockBuilder#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder#value AppstreamAppBlockBuilder#value}
  */
  readonly value?: string;
}

export function appstreamAppBlockBuilderTagsToTerraform(struct?: AppstreamAppBlockBuilderTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function appstreamAppBlockBuilderTagsToHclTerraform(struct?: AppstreamAppBlockBuilderTags | cdktn.IResolvable): any {
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

export class AppstreamAppBlockBuilderTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppstreamAppBlockBuilderTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AppstreamAppBlockBuilderTags | cdktn.IResolvable | undefined) {
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

export class AppstreamAppBlockBuilderTagsList extends cdktn.ComplexList {
  public internalValue? : AppstreamAppBlockBuilderTags[] | cdktn.IResolvable

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
  public get(index: number): AppstreamAppBlockBuilderTagsOutputReference {
    return new AppstreamAppBlockBuilderTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppstreamAppBlockBuilderVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder#security_group_ids AppstreamAppBlockBuilder#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder#subnet_ids AppstreamAppBlockBuilder#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function appstreamAppBlockBuilderVpcConfigToTerraform(struct?: AppstreamAppBlockBuilderVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function appstreamAppBlockBuilderVpcConfigToHclTerraform(struct?: AppstreamAppBlockBuilderVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppstreamAppBlockBuilderVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppstreamAppBlockBuilderVpcConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppstreamAppBlockBuilderVpcConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder awscc_appstream_app_block_builder}
*/
export class AppstreamAppBlockBuilder extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_appstream_app_block_builder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AppstreamAppBlockBuilder resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppstreamAppBlockBuilder to import
  * @param importFromId The id of the existing AppstreamAppBlockBuilder that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppstreamAppBlockBuilder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appstream_app_block_builder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_app_block_builder awscc_appstream_app_block_builder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppstreamAppBlockBuilderConfig
  */
  public constructor(scope: Construct, id: string, config: AppstreamAppBlockBuilderConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_appstream_app_block_builder',
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
    this._accessEndpoints.internalValue = config.accessEndpoints;
    this._appBlockArns = config.appBlockArns;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enableDefaultInternetAccess = config.enableDefaultInternetAccess;
    this._iamRoleArn = config.iamRoleArn;
    this._instanceType = config.instanceType;
    this._name = config.name;
    this._platform = config.platform;
    this._tags.internalValue = config.tags;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_endpoints - computed: true, optional: true, required: false
  private _accessEndpoints = new AppstreamAppBlockBuilderAccessEndpointsList(this, "access_endpoints", true);
  public get accessEndpoints() {
    return this._accessEndpoints;
  }
  public putAccessEndpoints(value: AppstreamAppBlockBuilderAccessEndpoints[] | cdktn.IResolvable) {
    this._accessEndpoints.internalValue = value;
  }
  public resetAccessEndpoints() {
    this._accessEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessEndpointsInput() {
    return this._accessEndpoints.internalValue;
  }

  // app_block_arns - computed: true, optional: true, required: false
  private _appBlockArns?: string[]; 
  public get appBlockArns() {
    return cdktn.Fn.tolist(this.getListAttribute('app_block_arns'));
  }
  public set appBlockArns(value: string[]) {
    this._appBlockArns = value;
  }
  public resetAppBlockArns() {
    this._appBlockArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appBlockArnsInput() {
    return this._appBlockArns;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enable_default_internet_access - computed: true, optional: true, required: false
  private _enableDefaultInternetAccess?: boolean | cdktn.IResolvable; 
  public get enableDefaultInternetAccess() {
    return this.getBooleanAttribute('enable_default_internet_access');
  }
  public set enableDefaultInternetAccess(value: boolean | cdktn.IResolvable) {
    this._enableDefaultInternetAccess = value;
  }
  public resetEnableDefaultInternetAccess() {
    this._enableDefaultInternetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultInternetAccessInput() {
    return this._enableDefaultInternetAccess;
  }

  // iam_role_arn - computed: true, optional: true, required: false
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  public resetIamRoleArn() {
    this._iamRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
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

  // platform - computed: false, optional: false, required: true
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new AppstreamAppBlockBuilderTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AppstreamAppBlockBuilderTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_config - computed: false, optional: false, required: true
  private _vpcConfig = new AppstreamAppBlockBuilderVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: AppstreamAppBlockBuilderVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_endpoints: cdktn.listMapper(appstreamAppBlockBuilderAccessEndpointsToTerraform, false)(this._accessEndpoints.internalValue),
      app_block_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._appBlockArns),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      enable_default_internet_access: cdktn.booleanToTerraform(this._enableDefaultInternetAccess),
      iam_role_arn: cdktn.stringToTerraform(this._iamRoleArn),
      instance_type: cdktn.stringToTerraform(this._instanceType),
      name: cdktn.stringToTerraform(this._name),
      platform: cdktn.stringToTerraform(this._platform),
      tags: cdktn.listMapper(appstreamAppBlockBuilderTagsToTerraform, false)(this._tags.internalValue),
      vpc_config: appstreamAppBlockBuilderVpcConfigToTerraform(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_endpoints: {
        value: cdktn.listMapperHcl(appstreamAppBlockBuilderAccessEndpointsToHclTerraform, false)(this._accessEndpoints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppstreamAppBlockBuilderAccessEndpointsList",
      },
      app_block_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._appBlockArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_default_internet_access: {
        value: cdktn.booleanToHclTerraform(this._enableDefaultInternetAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      iam_role_arn: {
        value: cdktn.stringToHclTerraform(this._iamRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktn.stringToHclTerraform(this._instanceType),
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
      platform: {
        value: cdktn.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(appstreamAppBlockBuilderTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppstreamAppBlockBuilderTagsList",
      },
      vpc_config: {
        value: appstreamAppBlockBuilderVpcConfigToHclTerraform(this._vpcConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppstreamAppBlockBuilderVpcConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
