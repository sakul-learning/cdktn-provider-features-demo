// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TransferWebAppConfig extends cdktn.TerraformMetaArguments {
  /**
  * The AccessEndpoint is the URL that you provide to your users for them to interact with the Transfer Family web app. You can specify a custom URL or use the default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#access_endpoint TransferWebApp#access_endpoint}
  */
  readonly accessEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#endpoint_details TransferWebApp#endpoint_details}
  */
  readonly endpointDetails?: TransferWebAppEndpointDetails;
  /**
  * You can provide a structure that contains the details for the identity provider to use with your web app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#identity_provider_details TransferWebApp#identity_provider_details}
  */
  readonly identityProviderDetails: TransferWebAppIdentityProviderDetails;
  /**
  * Key-value pairs that can be used to group and search for web apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#tags TransferWebApp#tags}
  */
  readonly tags?: TransferWebAppTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#web_app_customization TransferWebApp#web_app_customization}
  */
  readonly webAppCustomization?: TransferWebAppWebAppCustomization;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#web_app_endpoint_policy TransferWebApp#web_app_endpoint_policy}
  */
  readonly webAppEndpointPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#web_app_units TransferWebApp#web_app_units}
  */
  readonly webAppUnits?: TransferWebAppWebAppUnits;
}
export interface TransferWebAppEndpointDetailsVpc {
  /**
  * The IP address type for the VPC endpoint used by the web app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#ip_address_type TransferWebApp#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#security_group_ids TransferWebApp#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#subnet_ids TransferWebApp#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#vpc_id TransferWebApp#vpc_id}
  */
  readonly vpcId?: string;
}

export function transferWebAppEndpointDetailsVpcToTerraform(struct?: TransferWebAppEndpointDetailsVpc | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    vpc_id: cdktn.stringToTerraform(struct!.vpcId),
  }
}


export function transferWebAppEndpointDetailsVpcToHclTerraform(struct?: TransferWebAppEndpointDetailsVpc | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    vpc_id: {
      value: cdktn.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWebAppEndpointDetailsVpcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWebAppEndpointDetailsVpc | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWebAppEndpointDetailsVpc | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddressType = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._vpcId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddressType = value.ipAddressType;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._vpcId = value.vpcId;
    }
  }

  // ip_address_type - computed: true, optional: true, required: false
  private _ipAddressType?: string;
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
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

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface TransferWebAppEndpointDetails {
  /**
  * You can provide a structure that contains the details for the VPC endpoint to use with your web app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#vpc TransferWebApp#vpc}
  */
  readonly vpc?: TransferWebAppEndpointDetailsVpc;
}

export function transferWebAppEndpointDetailsToTerraform(struct?: TransferWebAppEndpointDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc: transferWebAppEndpointDetailsVpcToTerraform(struct!.vpc),
  }
}


export function transferWebAppEndpointDetailsToHclTerraform(struct?: TransferWebAppEndpointDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc: {
      value: transferWebAppEndpointDetailsVpcToHclTerraform(struct!.vpc),
      isBlock: true,
      type: "struct",
      storageClassType: "TransferWebAppEndpointDetailsVpc",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWebAppEndpointDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWebAppEndpointDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWebAppEndpointDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpc.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpc.internalValue = value.vpc;
    }
  }

  // vpc - computed: true, optional: true, required: false
  private _vpc = new TransferWebAppEndpointDetailsVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: TransferWebAppEndpointDetailsVpc) {
    this._vpc.internalValue = value;
  }
  public resetVpc() {
    this._vpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }
}
export interface TransferWebAppIdentityProviderDetails {
  /**
  * The Amazon Resource Name (ARN) for the IAM Identity Center used for the web app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#instance_arn TransferWebApp#instance_arn}
  */
  readonly instanceArn?: string;
  /**
  * The IAM role in IAM Identity Center used for the web app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#role TransferWebApp#role}
  */
  readonly role?: string;
}

export function transferWebAppIdentityProviderDetailsToTerraform(struct?: TransferWebAppIdentityProviderDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_arn: cdktn.stringToTerraform(struct!.instanceArn),
    role: cdktn.stringToTerraform(struct!.role),
  }
}


export function transferWebAppIdentityProviderDetailsToHclTerraform(struct?: TransferWebAppIdentityProviderDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_arn: {
      value: cdktn.stringToHclTerraform(struct!.instanceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWebAppIdentityProviderDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWebAppIdentityProviderDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceArn = this._instanceArn;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWebAppIdentityProviderDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceArn = undefined;
      this._role = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceArn = value.instanceArn;
      this._role = value.role;
    }
  }

  // application_arn - computed: true, optional: false, required: false
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }

  // instance_arn - computed: true, optional: true, required: false
  private _instanceArn?: string;
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  public resetInstanceArn() {
    this._instanceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}
export interface TransferWebAppTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#key TransferWebApp#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#value TransferWebApp#value}
  */
  readonly value?: string;
}

export function transferWebAppTagsToTerraform(struct?: TransferWebAppTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function transferWebAppTagsToHclTerraform(struct?: TransferWebAppTags | cdktn.IResolvable): any {
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

export class TransferWebAppTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TransferWebAppTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: TransferWebAppTags | cdktn.IResolvable | undefined) {
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

export class TransferWebAppTagsList extends cdktn.ComplexList {
  public internalValue? : TransferWebAppTags[] | cdktn.IResolvable

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
  public get(index: number): TransferWebAppTagsOutputReference {
    return new TransferWebAppTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransferWebAppWebAppCustomization {
  /**
  * Specifies a favicon to display in the browser tab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#favicon_file TransferWebApp#favicon_file}
  */
  readonly faviconFile?: string;
  /**
  * Specifies a logo to display on the web app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#logo_file TransferWebApp#logo_file}
  */
  readonly logoFile?: string;
  /**
  * Specifies a title to display on the web app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#title TransferWebApp#title}
  */
  readonly title?: string;
}

export function transferWebAppWebAppCustomizationToTerraform(struct?: TransferWebAppWebAppCustomization | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    favicon_file: cdktn.stringToTerraform(struct!.faviconFile),
    logo_file: cdktn.stringToTerraform(struct!.logoFile),
    title: cdktn.stringToTerraform(struct!.title),
  }
}


export function transferWebAppWebAppCustomizationToHclTerraform(struct?: TransferWebAppWebAppCustomization | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    favicon_file: {
      value: cdktn.stringToHclTerraform(struct!.faviconFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logo_file: {
      value: cdktn.stringToHclTerraform(struct!.logoFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWebAppWebAppCustomizationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWebAppWebAppCustomization | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._faviconFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.faviconFile = this._faviconFile;
    }
    if (this._logoFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoFile = this._logoFile;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWebAppWebAppCustomization | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._faviconFile = undefined;
      this._logoFile = undefined;
      this._title = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._faviconFile = value.faviconFile;
      this._logoFile = value.logoFile;
      this._title = value.title;
    }
  }

  // favicon_file - computed: true, optional: true, required: false
  private _faviconFile?: string;
  public get faviconFile() {
    return this.getStringAttribute('favicon_file');
  }
  public set faviconFile(value: string) {
    this._faviconFile = value;
  }
  public resetFaviconFile() {
    this._faviconFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faviconFileInput() {
    return this._faviconFile;
  }

  // logo_file - computed: true, optional: true, required: false
  private _logoFile?: string;
  public get logoFile() {
    return this.getStringAttribute('logo_file');
  }
  public set logoFile(value: string) {
    this._logoFile = value;
  }
  public resetLogoFile() {
    this._logoFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoFileInput() {
    return this._logoFile;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string;
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface TransferWebAppWebAppUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#provisioned TransferWebApp#provisioned}
  */
  readonly provisioned?: number;
}

export function transferWebAppWebAppUnitsToTerraform(struct?: TransferWebAppWebAppUnits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    provisioned: cdktn.numberToTerraform(struct!.provisioned),
  }
}


export function transferWebAppWebAppUnitsToHclTerraform(struct?: TransferWebAppWebAppUnits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    provisioned: {
      value: cdktn.numberToHclTerraform(struct!.provisioned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferWebAppWebAppUnitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransferWebAppWebAppUnits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provisioned !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioned = this._provisioned;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferWebAppWebAppUnits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provisioned = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provisioned = value.provisioned;
    }
  }

  // provisioned - computed: true, optional: true, required: false
  private _provisioned?: number;
  public get provisioned() {
    return this.getNumberAttribute('provisioned');
  }
  public set provisioned(value: number) {
    this._provisioned = value;
  }
  public resetProvisioned() {
    this._provisioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedInput() {
    return this._provisioned;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app awscc_transfer_web_app}
*/
export class TransferWebApp extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_transfer_web_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TransferWebApp resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransferWebApp to import
  * @param importFromId The id of the existing TransferWebApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransferWebApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_transfer_web_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_web_app awscc_transfer_web_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransferWebAppConfig
  */
  public constructor(scope: Construct, id: string, config: TransferWebAppConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_transfer_web_app',
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
    this._accessEndpoint = config.accessEndpoint;
    this._endpointDetails.internalValue = config.endpointDetails;
    this._identityProviderDetails.internalValue = config.identityProviderDetails;
    this._tags.internalValue = config.tags;
    this._webAppCustomization.internalValue = config.webAppCustomization;
    this._webAppEndpointPolicy = config.webAppEndpointPolicy;
    this._webAppUnits.internalValue = config.webAppUnits;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_endpoint - computed: true, optional: true, required: false
  private _accessEndpoint?: string;
  public get accessEndpoint() {
    return this.getStringAttribute('access_endpoint');
  }
  public set accessEndpoint(value: string) {
    this._accessEndpoint = value;
  }
  public resetAccessEndpoint() {
    this._accessEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessEndpointInput() {
    return this._accessEndpoint;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // endpoint_details - computed: true, optional: true, required: false
  private _endpointDetails = new TransferWebAppEndpointDetailsOutputReference(this, "endpoint_details");
  public get endpointDetails() {
    return this._endpointDetails;
  }
  public putEndpointDetails(value: TransferWebAppEndpointDetails) {
    this._endpointDetails.internalValue = value;
  }
  public resetEndpointDetails() {
    this._endpointDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointDetailsInput() {
    return this._endpointDetails.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_provider_details - computed: false, optional: false, required: true
  private _identityProviderDetails = new TransferWebAppIdentityProviderDetailsOutputReference(this, "identity_provider_details");
  public get identityProviderDetails() {
    return this._identityProviderDetails;
  }
  public putIdentityProviderDetails(value: TransferWebAppIdentityProviderDetails) {
    this._identityProviderDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderDetailsInput() {
    return this._identityProviderDetails.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new TransferWebAppTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: TransferWebAppTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_endpoint_id - computed: true, optional: false, required: false
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }

  // web_app_customization - computed: true, optional: true, required: false
  private _webAppCustomization = new TransferWebAppWebAppCustomizationOutputReference(this, "web_app_customization");
  public get webAppCustomization() {
    return this._webAppCustomization;
  }
  public putWebAppCustomization(value: TransferWebAppWebAppCustomization) {
    this._webAppCustomization.internalValue = value;
  }
  public resetWebAppCustomization() {
    this._webAppCustomization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAppCustomizationInput() {
    return this._webAppCustomization.internalValue;
  }

  // web_app_endpoint_policy - computed: true, optional: true, required: false
  private _webAppEndpointPolicy?: string;
  public get webAppEndpointPolicy() {
    return this.getStringAttribute('web_app_endpoint_policy');
  }
  public set webAppEndpointPolicy(value: string) {
    this._webAppEndpointPolicy = value;
  }
  public resetWebAppEndpointPolicy() {
    this._webAppEndpointPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAppEndpointPolicyInput() {
    return this._webAppEndpointPolicy;
  }

  // web_app_id - computed: true, optional: false, required: false
  public get webAppId() {
    return this.getStringAttribute('web_app_id');
  }

  // web_app_units - computed: true, optional: true, required: false
  private _webAppUnits = new TransferWebAppWebAppUnitsOutputReference(this, "web_app_units");
  public get webAppUnits() {
    return this._webAppUnits;
  }
  public putWebAppUnits(value: TransferWebAppWebAppUnits) {
    this._webAppUnits.internalValue = value;
  }
  public resetWebAppUnits() {
    this._webAppUnits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAppUnitsInput() {
    return this._webAppUnits.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_endpoint: cdktn.stringToTerraform(this._accessEndpoint),
      endpoint_details: transferWebAppEndpointDetailsToTerraform(this._endpointDetails.internalValue),
      identity_provider_details: transferWebAppIdentityProviderDetailsToTerraform(this._identityProviderDetails.internalValue),
      tags: cdktn.listMapper(transferWebAppTagsToTerraform, false)(this._tags.internalValue),
      web_app_customization: transferWebAppWebAppCustomizationToTerraform(this._webAppCustomization.internalValue),
      web_app_endpoint_policy: cdktn.stringToTerraform(this._webAppEndpointPolicy),
      web_app_units: transferWebAppWebAppUnitsToTerraform(this._webAppUnits.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_endpoint: {
        value: cdktn.stringToHclTerraform(this._accessEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_details: {
        value: transferWebAppEndpointDetailsToHclTerraform(this._endpointDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TransferWebAppEndpointDetails",
      },
      identity_provider_details: {
        value: transferWebAppIdentityProviderDetailsToHclTerraform(this._identityProviderDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TransferWebAppIdentityProviderDetails",
      },
      tags: {
        value: cdktn.listMapperHcl(transferWebAppTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransferWebAppTagsList",
      },
      web_app_customization: {
        value: transferWebAppWebAppCustomizationToHclTerraform(this._webAppCustomization.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TransferWebAppWebAppCustomization",
      },
      web_app_endpoint_policy: {
        value: cdktn.stringToHclTerraform(this._webAppEndpointPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_app_units: {
        value: transferWebAppWebAppUnitsToHclTerraform(this._webAppUnits.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TransferWebAppWebAppUnits",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
