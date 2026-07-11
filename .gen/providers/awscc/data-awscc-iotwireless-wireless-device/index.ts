// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotwireless_wireless_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotwirelessWirelessDeviceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotwireless_wireless_device#id DataAwsccIotwirelessWirelessDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys {
}

export function dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysToHclTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_s_key - computed: true, optional: false, required: false
  public get appSKey() {
    return this.getStringAttribute('app_s_key');
  }

  // nwk_s_key - computed: true, optional: false, required: false
  public get nwkSKey() {
    return this.getStringAttribute('nwk_s_key');
  }
}
export interface DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X {
}

export function dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XToHclTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dev_addr - computed: true, optional: false, required: false
  public get devAddr() {
    return this.getStringAttribute('dev_addr');
  }

  // session_keys - computed: true, optional: false, required: false
  private _sessionKeys = new DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference(this, "session_keys");
  public get sessionKeys() {
    return this._sessionKeys;
  }
}
export interface DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys {
}

export function dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysToHclTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_s_key - computed: true, optional: false, required: false
  public get appSKey() {
    return this.getStringAttribute('app_s_key');
  }

  // f_nwk_s_int_key - computed: true, optional: false, required: false
  public get fNwkSIntKey() {
    return this.getStringAttribute('f_nwk_s_int_key');
  }

  // nwk_s_enc_key - computed: true, optional: false, required: false
  public get nwkSEncKey() {
    return this.getStringAttribute('nwk_s_enc_key');
  }

  // s_nwk_s_int_key - computed: true, optional: false, required: false
  public get sNwkSIntKey() {
    return this.getStringAttribute('s_nwk_s_int_key');
  }
}
export interface DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11 {
}

export function dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11ToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11ToHclTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dev_addr - computed: true, optional: false, required: false
  public get devAddr() {
    return this.getStringAttribute('dev_addr');
  }

  // session_keys - computed: true, optional: false, required: false
  private _sessionKeys = new DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference(this, "session_keys");
  public get sessionKeys() {
    return this._sessionKeys;
  }
}
export interface DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications {
}

export function dataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsToHclTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_name - computed: true, optional: false, required: false
  public get destinationName() {
    return this.getStringAttribute('destination_name');
  }

  // f_port - computed: true, optional: false, required: false
  public get fPort() {
    return this.getNumberAttribute('f_port');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference {
    return new DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts {
}

export function dataAwsccIotwirelessWirelessDeviceLoRaWanFPortsToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessWirelessDeviceLoRaWanFPortsToHclTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applications - computed: true, optional: false, required: false
  private _applications = new DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList(this, "applications", true);
  public get applications() {
    return this._applications;
  }
}
export interface DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X {
}

export function dataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XToHclTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_eui - computed: true, optional: false, required: false
  public get appEui() {
    return this.getStringAttribute('app_eui');
  }

  // app_key - computed: true, optional: false, required: false
  public get appKey() {
    return this.getStringAttribute('app_key');
  }
}
export interface DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11 {
}

export function dataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11ToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11ToHclTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_key - computed: true, optional: false, required: false
  public get appKey() {
    return this.getStringAttribute('app_key');
  }

  // join_eui - computed: true, optional: false, required: false
  public get joinEui() {
    return this.getStringAttribute('join_eui');
  }

  // nwk_key - computed: true, optional: false, required: false
  public get nwkKey() {
    return this.getStringAttribute('nwk_key');
  }
}
export interface DataAwsccIotwirelessWirelessDeviceLoRaWan {
}

export function dataAwsccIotwirelessWirelessDeviceLoRaWanToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWan): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessWirelessDeviceLoRaWanToHclTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWan): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotwirelessWirelessDeviceLoRaWan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessWirelessDeviceLoRaWan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abp_v10_x - computed: true, optional: false, required: false
  private _abpV10X = new DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference(this, "abp_v10_x");
  public get abpV10X() {
    return this._abpV10X;
  }

  // abp_v11 - computed: true, optional: false, required: false
  private _abpV11 = new DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference(this, "abp_v11");
  public get abpV11() {
    return this._abpV11;
  }

  // dev_eui - computed: true, optional: false, required: false
  public get devEui() {
    return this.getStringAttribute('dev_eui');
  }

  // device_profile_id - computed: true, optional: false, required: false
  public get deviceProfileId() {
    return this.getStringAttribute('device_profile_id');
  }

  // f_ports - computed: true, optional: false, required: false
  private _fPorts = new DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference(this, "f_ports");
  public get fPorts() {
    return this._fPorts;
  }

  // otaa_v10_x - computed: true, optional: false, required: false
  private _otaaV10X = new DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference(this, "otaa_v10_x");
  public get otaaV10X() {
    return this._otaaV10X;
  }

  // otaa_v11 - computed: true, optional: false, required: false
  private _otaaV11 = new DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference(this, "otaa_v11");
  public get otaaV11() {
    return this._otaaV11;
  }

  // service_profile_id - computed: true, optional: false, required: false
  public get serviceProfileId() {
    return this.getStringAttribute('service_profile_id');
  }
}
export interface DataAwsccIotwirelessWirelessDeviceTags {
}

export function dataAwsccIotwirelessWirelessDeviceTagsToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessWirelessDeviceTagsToHclTerraform(struct?: DataAwsccIotwirelessWirelessDeviceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessWirelessDeviceTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccIotwirelessWirelessDeviceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessWirelessDeviceTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccIotwirelessWirelessDeviceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotwirelessWirelessDeviceTagsOutputReference {
    return new DataAwsccIotwirelessWirelessDeviceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotwireless_wireless_device awscc_iotwireless_wireless_device}
*/
export class DataAwsccIotwirelessWirelessDevice extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotwireless_wireless_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotwirelessWirelessDevice resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotwirelessWirelessDevice to import
  * @param importFromId The id of the existing DataAwsccIotwirelessWirelessDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotwireless_wireless_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotwirelessWirelessDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotwireless_wireless_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotwireless_wireless_device awscc_iotwireless_wireless_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotwirelessWirelessDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotwirelessWirelessDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotwireless_wireless_device',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_name - computed: true, optional: false, required: false
  public get destinationName() {
    return this.getStringAttribute('destination_name');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_uplink_received_at - computed: true, optional: false, required: false
  public get lastUplinkReceivedAt() {
    return this.getStringAttribute('last_uplink_received_at');
  }

  // lo_ra_wan - computed: true, optional: false, required: false
  private _loRaWan = new DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference(this, "lo_ra_wan");
  public get loRaWan() {
    return this._loRaWan;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // positioning - computed: true, optional: false, required: false
  public get positioning() {
    return this.getStringAttribute('positioning');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotwirelessWirelessDeviceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // thing_arn - computed: true, optional: false, required: false
  public get thingArn() {
    return this.getStringAttribute('thing_arn');
  }

  // thing_name - computed: true, optional: false, required: false
  public get thingName() {
    return this.getStringAttribute('thing_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // wireless_device_id - computed: true, optional: false, required: false
  public get wirelessDeviceId() {
    return this.getStringAttribute('wireless_device_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
