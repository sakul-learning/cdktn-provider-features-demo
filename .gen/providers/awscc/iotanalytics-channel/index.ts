// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotanalyticsChannelConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_channel#channel_name IotanalyticsChannel#channel_name}
  */
  readonly channelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_channel#channel_storage IotanalyticsChannel#channel_storage}
  */
  readonly channelStorage?: IotanalyticsChannelChannelStorage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_channel#retention_period IotanalyticsChannel#retention_period}
  */
  readonly retentionPeriod?: IotanalyticsChannelRetentionPeriod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_channel#tags IotanalyticsChannel#tags}
  */
  readonly tags?: IotanalyticsChannelTags[] | cdktn.IResolvable;
}
export interface IotanalyticsChannelChannelStorageCustomerManagedS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_channel#bucket IotanalyticsChannel#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_channel#key_prefix IotanalyticsChannel#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_channel#role_arn IotanalyticsChannel#role_arn}
  */
  readonly roleArn?: string;
}

export function iotanalyticsChannelChannelStorageCustomerManagedS3ToTerraform(struct?: IotanalyticsChannelChannelStorageCustomerManagedS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key_prefix: cdktn.stringToTerraform(struct!.keyPrefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotanalyticsChannelChannelStorageCustomerManagedS3ToHclTerraform(struct?: IotanalyticsChannelChannelStorageCustomerManagedS3 | cdktn.IResolvable): any {
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
    key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.keyPrefix),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsChannelChannelStorageCustomerManagedS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsChannelChannelStorageCustomerManagedS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._keyPrefix = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._keyPrefix = value.keyPrefix;
      this._roleArn = value.roleArn;
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

  // key_prefix - computed: true, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
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
}
export interface IotanalyticsChannelChannelStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_channel#customer_managed_s3 IotanalyticsChannel#customer_managed_s3}
  */
  readonly customerManagedS3?: IotanalyticsChannelChannelStorageCustomerManagedS3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_channel#service_managed_s3 IotanalyticsChannel#service_managed_s3}
  */
  readonly serviceManagedS3?: string;
}

export function iotanalyticsChannelChannelStorageToTerraform(struct?: IotanalyticsChannelChannelStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    customer_managed_s3: iotanalyticsChannelChannelStorageCustomerManagedS3ToTerraform(struct!.customerManagedS3),
    service_managed_s3: cdktn.stringToTerraform(struct!.serviceManagedS3),
  }
}


export function iotanalyticsChannelChannelStorageToHclTerraform(struct?: IotanalyticsChannelChannelStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    customer_managed_s3: {
      value: iotanalyticsChannelChannelStorageCustomerManagedS3ToHclTerraform(struct!.customerManagedS3),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsChannelChannelStorageCustomerManagedS3",
    },
    service_managed_s3: {
      value: cdktn.stringToHclTerraform(struct!.serviceManagedS3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsChannelChannelStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsChannelChannelStorage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerManagedS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerManagedS3 = this._customerManagedS3?.internalValue;
    }
    if (this._serviceManagedS3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceManagedS3 = this._serviceManagedS3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsChannelChannelStorage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerManagedS3.internalValue = undefined;
      this._serviceManagedS3 = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerManagedS3.internalValue = value.customerManagedS3;
      this._serviceManagedS3 = value.serviceManagedS3;
    }
  }

  // customer_managed_s3 - computed: true, optional: true, required: false
  private _customerManagedS3 = new IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference(this, "customer_managed_s3");
  public get customerManagedS3() {
    return this._customerManagedS3;
  }
  public putCustomerManagedS3(value: IotanalyticsChannelChannelStorageCustomerManagedS3) {
    this._customerManagedS3.internalValue = value;
  }
  public resetCustomerManagedS3() {
    this._customerManagedS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedS3Input() {
    return this._customerManagedS3.internalValue;
  }

  // service_managed_s3 - computed: true, optional: true, required: false
  private _serviceManagedS3?: string; 
  public get serviceManagedS3() {
    return this.getStringAttribute('service_managed_s3');
  }
  public set serviceManagedS3(value: string) {
    this._serviceManagedS3 = value;
  }
  public resetServiceManagedS3() {
    this._serviceManagedS3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceManagedS3Input() {
    return this._serviceManagedS3;
  }
}
export interface IotanalyticsChannelRetentionPeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_channel#number_of_days IotanalyticsChannel#number_of_days}
  */
  readonly numberOfDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_channel#unlimited IotanalyticsChannel#unlimited}
  */
  readonly unlimited?: boolean | cdktn.IResolvable;
}

export function iotanalyticsChannelRetentionPeriodToTerraform(struct?: IotanalyticsChannelRetentionPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number_of_days: cdktn.numberToTerraform(struct!.numberOfDays),
    unlimited: cdktn.booleanToTerraform(struct!.unlimited),
  }
}


export function iotanalyticsChannelRetentionPeriodToHclTerraform(struct?: IotanalyticsChannelRetentionPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number_of_days: {
      value: cdktn.numberToHclTerraform(struct!.numberOfDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unlimited: {
      value: cdktn.booleanToHclTerraform(struct!.unlimited),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsChannelRetentionPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsChannelRetentionPeriod | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfDays = this._numberOfDays;
    }
    if (this._unlimited !== undefined) {
      hasAnyValues = true;
      internalValueResult.unlimited = this._unlimited;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsChannelRetentionPeriod | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberOfDays = undefined;
      this._unlimited = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberOfDays = value.numberOfDays;
      this._unlimited = value.unlimited;
    }
  }

  // number_of_days - computed: true, optional: true, required: false
  private _numberOfDays?: number; 
  public get numberOfDays() {
    return this.getNumberAttribute('number_of_days');
  }
  public set numberOfDays(value: number) {
    this._numberOfDays = value;
  }
  public resetNumberOfDays() {
    this._numberOfDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfDaysInput() {
    return this._numberOfDays;
  }

  // unlimited - computed: true, optional: true, required: false
  private _unlimited?: boolean | cdktn.IResolvable; 
  public get unlimited() {
    return this.getBooleanAttribute('unlimited');
  }
  public set unlimited(value: boolean | cdktn.IResolvable) {
    this._unlimited = value;
  }
  public resetUnlimited() {
    this._unlimited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlimitedInput() {
    return this._unlimited;
  }
}
export interface IotanalyticsChannelTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_channel#key IotanalyticsChannel#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_channel#value IotanalyticsChannel#value}
  */
  readonly value?: string;
}

export function iotanalyticsChannelTagsToTerraform(struct?: IotanalyticsChannelTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotanalyticsChannelTagsToHclTerraform(struct?: IotanalyticsChannelTags | cdktn.IResolvable): any {
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

export class IotanalyticsChannelTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotanalyticsChannelTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotanalyticsChannelTags | cdktn.IResolvable | undefined) {
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

export class IotanalyticsChannelTagsList extends cdktn.ComplexList {
  public internalValue? : IotanalyticsChannelTags[] | cdktn.IResolvable

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
  public get(index: number): IotanalyticsChannelTagsOutputReference {
    return new IotanalyticsChannelTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_channel awscc_iotanalytics_channel}
*/
export class IotanalyticsChannel extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotanalytics_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotanalyticsChannel resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotanalyticsChannel to import
  * @param importFromId The id of the existing IotanalyticsChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotanalyticsChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotanalytics_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/iotanalytics_channel awscc_iotanalytics_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotanalyticsChannelConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IotanalyticsChannelConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotanalytics_channel',
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
    this._channelName = config.channelName;
    this._channelStorage.internalValue = config.channelStorage;
    this._retentionPeriod.internalValue = config.retentionPeriod;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
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

  // channel_storage - computed: true, optional: true, required: false
  private _channelStorage = new IotanalyticsChannelChannelStorageOutputReference(this, "channel_storage");
  public get channelStorage() {
    return this._channelStorage;
  }
  public putChannelStorage(value: IotanalyticsChannelChannelStorage) {
    this._channelStorage.internalValue = value;
  }
  public resetChannelStorage() {
    this._channelStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelStorageInput() {
    return this._channelStorage.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retention_period - computed: true, optional: true, required: false
  private _retentionPeriod = new IotanalyticsChannelRetentionPeriodOutputReference(this, "retention_period");
  public get retentionPeriod() {
    return this._retentionPeriod;
  }
  public putRetentionPeriod(value: IotanalyticsChannelRetentionPeriod) {
    this._retentionPeriod.internalValue = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new IotanalyticsChannelTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IotanalyticsChannelTags[] | cdktn.IResolvable) {
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
      channel_name: cdktn.stringToTerraform(this._channelName),
      channel_storage: iotanalyticsChannelChannelStorageToTerraform(this._channelStorage.internalValue),
      retention_period: iotanalyticsChannelRetentionPeriodToTerraform(this._retentionPeriod.internalValue),
      tags: cdktn.listMapper(iotanalyticsChannelTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_name: {
        value: cdktn.stringToHclTerraform(this._channelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel_storage: {
        value: iotanalyticsChannelChannelStorageToHclTerraform(this._channelStorage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotanalyticsChannelChannelStorage",
      },
      retention_period: {
        value: iotanalyticsChannelRetentionPeriodToHclTerraform(this._retentionPeriod.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotanalyticsChannelRetentionPeriod",
      },
      tags: {
        value: cdktn.listMapperHcl(iotanalyticsChannelTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotanalyticsChannelTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
