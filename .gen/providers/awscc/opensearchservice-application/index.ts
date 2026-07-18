// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OpensearchserviceApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * List of application configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application#app_configs OpensearchserviceApplication#app_configs}
  */
  readonly appConfigs?: OpensearchserviceApplicationAppConfigs[] | cdktn.IResolvable;
  /**
  * List of data sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application#data_sources OpensearchserviceApplication#data_sources}
  */
  readonly dataSources?: OpensearchserviceApplicationDataSources[] | cdktn.IResolvable;
  /**
  * The endpoint for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application#endpoint OpensearchserviceApplication#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Options for configuring IAM Identity Center
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application#iam_identity_center_options OpensearchserviceApplication#iam_identity_center_options}
  */
  readonly iamIdentityCenterOptions?: OpensearchserviceApplicationIamIdentityCenterOptions;
  /**
  * The ARN of the KMS key used to encrypt the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application#kms_key_arn OpensearchserviceApplication#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * The name of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application#name OpensearchserviceApplication#name}
  */
  readonly name: string;
  /**
  * An arbitrary set of tags (key-value pairs) for this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application#tags OpensearchserviceApplication#tags}
  */
  readonly tags?: OpensearchserviceApplicationTags[] | cdktn.IResolvable;
}
export interface OpensearchserviceApplicationAppConfigs {
  /**
  * The configuration key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application#key OpensearchserviceApplication#key}
  */
  readonly key?: string;
  /**
  * The configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application#value OpensearchserviceApplication#value}
  */
  readonly value?: string;
}

export function opensearchserviceApplicationAppConfigsToTerraform(struct?: OpensearchserviceApplicationAppConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function opensearchserviceApplicationAppConfigsToHclTerraform(struct?: OpensearchserviceApplicationAppConfigs | cdktn.IResolvable): any {
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

export class OpensearchserviceApplicationAppConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpensearchserviceApplicationAppConfigs | cdktn.IResolvable | undefined {
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

  public set internalValue(value: OpensearchserviceApplicationAppConfigs | cdktn.IResolvable | undefined) {
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

export class OpensearchserviceApplicationAppConfigsList extends cdktn.ComplexList {
  public internalValue? : OpensearchserviceApplicationAppConfigs[] | cdktn.IResolvable

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
  public get(index: number): OpensearchserviceApplicationAppConfigsOutputReference {
    return new OpensearchserviceApplicationAppConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchserviceApplicationDataSources {
  /**
  * The ARN of the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application#data_source_arn OpensearchserviceApplication#data_source_arn}
  */
  readonly dataSourceArn?: string;
  /**
  * Description of the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application#data_source_description OpensearchserviceApplication#data_source_description}
  */
  readonly dataSourceDescription?: string;
}

export function opensearchserviceApplicationDataSourcesToTerraform(struct?: OpensearchserviceApplicationDataSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_arn: cdktn.stringToTerraform(struct!.dataSourceArn),
    data_source_description: cdktn.stringToTerraform(struct!.dataSourceDescription),
  }
}


export function opensearchserviceApplicationDataSourcesToHclTerraform(struct?: OpensearchserviceApplicationDataSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_arn: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source_description: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceApplicationDataSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpensearchserviceApplicationDataSources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceArn = this._dataSourceArn;
    }
    if (this._dataSourceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceDescription = this._dataSourceDescription;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceApplicationDataSources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceArn = undefined;
      this._dataSourceDescription = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceArn = value.dataSourceArn;
      this._dataSourceDescription = value.dataSourceDescription;
    }
  }

  // data_source_arn - computed: true, optional: true, required: false
  private _dataSourceArn?: string; 
  public get dataSourceArn() {
    return this.getStringAttribute('data_source_arn');
  }
  public set dataSourceArn(value: string) {
    this._dataSourceArn = value;
  }
  public resetDataSourceArn() {
    this._dataSourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceArnInput() {
    return this._dataSourceArn;
  }

  // data_source_description - computed: true, optional: true, required: false
  private _dataSourceDescription?: string; 
  public get dataSourceDescription() {
    return this.getStringAttribute('data_source_description');
  }
  public set dataSourceDescription(value: string) {
    this._dataSourceDescription = value;
  }
  public resetDataSourceDescription() {
    this._dataSourceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceDescriptionInput() {
    return this._dataSourceDescription;
  }
}

export class OpensearchserviceApplicationDataSourcesList extends cdktn.ComplexList {
  public internalValue? : OpensearchserviceApplicationDataSources[] | cdktn.IResolvable

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
  public get(index: number): OpensearchserviceApplicationDataSourcesOutputReference {
    return new OpensearchserviceApplicationDataSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchserviceApplicationIamIdentityCenterOptions {
  /**
  * Whether IAM Identity Center is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application#enabled OpensearchserviceApplication#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The ARN of the IAM Identity Center instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application#iam_identity_center_instance_arn OpensearchserviceApplication#iam_identity_center_instance_arn}
  */
  readonly iamIdentityCenterInstanceArn?: string;
  /**
  * The ARN of the IAM role for Identity Center application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application#iam_role_for_identity_center_application_arn OpensearchserviceApplication#iam_role_for_identity_center_application_arn}
  */
  readonly iamRoleForIdentityCenterApplicationArn?: string;
}

export function opensearchserviceApplicationIamIdentityCenterOptionsToTerraform(struct?: OpensearchserviceApplicationIamIdentityCenterOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    iam_identity_center_instance_arn: cdktn.stringToTerraform(struct!.iamIdentityCenterInstanceArn),
    iam_role_for_identity_center_application_arn: cdktn.stringToTerraform(struct!.iamRoleForIdentityCenterApplicationArn),
  }
}


export function opensearchserviceApplicationIamIdentityCenterOptionsToHclTerraform(struct?: OpensearchserviceApplicationIamIdentityCenterOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iam_identity_center_instance_arn: {
      value: cdktn.stringToHclTerraform(struct!.iamIdentityCenterInstanceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_role_for_identity_center_application_arn: {
      value: cdktn.stringToHclTerraform(struct!.iamRoleForIdentityCenterApplicationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceApplicationIamIdentityCenterOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._iamIdentityCenterInstanceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamIdentityCenterInstanceArn = this._iamIdentityCenterInstanceArn;
    }
    if (this._iamRoleForIdentityCenterApplicationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleForIdentityCenterApplicationArn = this._iamRoleForIdentityCenterApplicationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceApplicationIamIdentityCenterOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._iamIdentityCenterInstanceArn = undefined;
      this._iamRoleForIdentityCenterApplicationArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._iamIdentityCenterInstanceArn = value.iamIdentityCenterInstanceArn;
      this._iamRoleForIdentityCenterApplicationArn = value.iamRoleForIdentityCenterApplicationArn;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // iam_identity_center_instance_arn - computed: true, optional: true, required: false
  private _iamIdentityCenterInstanceArn?: string; 
  public get iamIdentityCenterInstanceArn() {
    return this.getStringAttribute('iam_identity_center_instance_arn');
  }
  public set iamIdentityCenterInstanceArn(value: string) {
    this._iamIdentityCenterInstanceArn = value;
  }
  public resetIamIdentityCenterInstanceArn() {
    this._iamIdentityCenterInstanceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamIdentityCenterInstanceArnInput() {
    return this._iamIdentityCenterInstanceArn;
  }

  // iam_role_for_identity_center_application_arn - computed: true, optional: true, required: false
  private _iamRoleForIdentityCenterApplicationArn?: string; 
  public get iamRoleForIdentityCenterApplicationArn() {
    return this.getStringAttribute('iam_role_for_identity_center_application_arn');
  }
  public set iamRoleForIdentityCenterApplicationArn(value: string) {
    this._iamRoleForIdentityCenterApplicationArn = value;
  }
  public resetIamRoleForIdentityCenterApplicationArn() {
    this._iamRoleForIdentityCenterApplicationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleForIdentityCenterApplicationArnInput() {
    return this._iamRoleForIdentityCenterApplicationArn;
  }
}
export interface OpensearchserviceApplicationTags {
  /**
  * The key in the key-value pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application#key OpensearchserviceApplication#key}
  */
  readonly key?: string;
  /**
  * The value in the key-value pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application#value OpensearchserviceApplication#value}
  */
  readonly value?: string;
}

export function opensearchserviceApplicationTagsToTerraform(struct?: OpensearchserviceApplicationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function opensearchserviceApplicationTagsToHclTerraform(struct?: OpensearchserviceApplicationTags | cdktn.IResolvable): any {
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

export class OpensearchserviceApplicationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpensearchserviceApplicationTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: OpensearchserviceApplicationTags | cdktn.IResolvable | undefined) {
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

export class OpensearchserviceApplicationTagsList extends cdktn.ComplexList {
  public internalValue? : OpensearchserviceApplicationTags[] | cdktn.IResolvable

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
  public get(index: number): OpensearchserviceApplicationTagsOutputReference {
    return new OpensearchserviceApplicationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application awscc_opensearchservice_application}
*/
export class OpensearchserviceApplication extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_opensearchservice_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OpensearchserviceApplication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpensearchserviceApplication to import
  * @param importFromId The id of the existing OpensearchserviceApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpensearchserviceApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_opensearchservice_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/opensearchservice_application awscc_opensearchservice_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchserviceApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: OpensearchserviceApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_opensearchservice_application',
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
    this._appConfigs.internalValue = config.appConfigs;
    this._dataSources.internalValue = config.dataSources;
    this._endpoint = config.endpoint;
    this._iamIdentityCenterOptions.internalValue = config.iamIdentityCenterOptions;
    this._kmsKeyArn = config.kmsKeyArn;
    this._name = config.name;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_configs - computed: true, optional: true, required: false
  private _appConfigs = new OpensearchserviceApplicationAppConfigsList(this, "app_configs", false);
  public get appConfigs() {
    return this._appConfigs;
  }
  public putAppConfigs(value: OpensearchserviceApplicationAppConfigs[] | cdktn.IResolvable) {
    this._appConfigs.internalValue = value;
  }
  public resetAppConfigs() {
    this._appConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appConfigsInput() {
    return this._appConfigs.internalValue;
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_sources - computed: true, optional: true, required: false
  private _dataSources = new OpensearchserviceApplicationDataSourcesList(this, "data_sources", false);
  public get dataSources() {
    return this._dataSources;
  }
  public putDataSources(value: OpensearchserviceApplicationDataSources[] | cdktn.IResolvable) {
    this._dataSources.internalValue = value;
  }
  public resetDataSources() {
    this._dataSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourcesInput() {
    return this._dataSources.internalValue;
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

  // iam_identity_center_options - computed: true, optional: true, required: false
  private _iamIdentityCenterOptions = new OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference(this, "iam_identity_center_options");
  public get iamIdentityCenterOptions() {
    return this._iamIdentityCenterOptions;
  }
  public putIamIdentityCenterOptions(value: OpensearchserviceApplicationIamIdentityCenterOptions) {
    this._iamIdentityCenterOptions.internalValue = value;
  }
  public resetIamIdentityCenterOptions() {
    this._iamIdentityCenterOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamIdentityCenterOptionsInput() {
    return this._iamIdentityCenterOptions.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
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

  // tags - computed: true, optional: true, required: false
  private _tags = new OpensearchserviceApplicationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: OpensearchserviceApplicationTags[] | cdktn.IResolvable) {
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
      app_configs: cdktn.listMapper(opensearchserviceApplicationAppConfigsToTerraform, false)(this._appConfigs.internalValue),
      data_sources: cdktn.listMapper(opensearchserviceApplicationDataSourcesToTerraform, false)(this._dataSources.internalValue),
      endpoint: cdktn.stringToTerraform(this._endpoint),
      iam_identity_center_options: opensearchserviceApplicationIamIdentityCenterOptionsToTerraform(this._iamIdentityCenterOptions.internalValue),
      kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(opensearchserviceApplicationTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_configs: {
        value: cdktn.listMapperHcl(opensearchserviceApplicationAppConfigsToHclTerraform, false)(this._appConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpensearchserviceApplicationAppConfigsList",
      },
      data_sources: {
        value: cdktn.listMapperHcl(opensearchserviceApplicationDataSourcesToHclTerraform, false)(this._dataSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpensearchserviceApplicationDataSourcesList",
      },
      endpoint: {
        value: cdktn.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_identity_center_options: {
        value: opensearchserviceApplicationIamIdentityCenterOptionsToHclTerraform(this._iamIdentityCenterOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchserviceApplicationIamIdentityCenterOptions",
      },
      kms_key_arn: {
        value: cdktn.stringToHclTerraform(this._kmsKeyArn),
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
      tags: {
        value: cdktn.listMapperHcl(opensearchserviceApplicationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpensearchserviceApplicationTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
