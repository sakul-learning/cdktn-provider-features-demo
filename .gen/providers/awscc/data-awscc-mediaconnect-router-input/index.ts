// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_router_input
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMediaconnectRouterInputConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_router_input#id DataAwsccMediaconnectRouterInput#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist {
}

export function dataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // recovery_latency_milliseconds - computed: true, optional: false, required: false
  public get recoveryLatencyMilliseconds() {
    return this.getNumberAttribute('recovery_latency_milliseconds');
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp {
}

export function dataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // forward_error_correction - computed: true, optional: false, required: false
  public get forwardErrorCorrection() {
    return this.getStringAttribute('forward_error_correction');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey {
}

export function dataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration {
}

export function dataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_key - computed: true, optional: false, required: false
  private _encryptionKey = new DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller {
}

export function dataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decryption_configuration - computed: true, optional: false, required: false
  private _decryptionConfiguration = new DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference(this, "decryption_configuration");
  public get decryptionConfiguration() {
    return this._decryptionConfiguration;
  }

  // minimum_latency_milliseconds - computed: true, optional: false, required: false
  public get minimumLatencyMilliseconds() {
    return this.getNumberAttribute('minimum_latency_milliseconds');
  }

  // source_address - computed: true, optional: false, required: false
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey {
}

export function dataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration {
}

export function dataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_key - computed: true, optional: false, required: false
  private _encryptionKey = new DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener {
}

export function dataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decryption_configuration - computed: true, optional: false, required: false
  private _decryptionConfiguration = new DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference(this, "decryption_configuration");
  public get decryptionConfiguration() {
    return this._decryptionConfiguration;
  }

  // minimum_latency_milliseconds - computed: true, optional: false, required: false
  public get minimumLatencyMilliseconds() {
    return this.getNumberAttribute('minimum_latency_milliseconds');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations {
}

export function dataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rist - computed: true, optional: false, required: false
  private _rist = new DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference(this, "rist");
  public get rist() {
    return this._rist;
  }

  // rtp - computed: true, optional: false, required: false
  private _rtp = new DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference(this, "rtp");
  public get rtp() {
    return this._rtp;
  }

  // srt_caller - computed: true, optional: false, required: false
  private _srtCaller = new DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference(this, "srt_caller");
  public get srtCaller() {
    return this._srtCaller;
  }

  // srt_listener - computed: true, optional: false, required: false
  private _srtListener = new DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference(this, "srt_listener");
  public get srtListener() {
    return this._srtListener;
  }
}

export class DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference {
    return new DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationFailover {
}

export function dataAwsccMediaconnectRouterInputConfigurationFailoverToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailover): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationFailoverToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationFailover): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationFailover | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationFailover | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_interface_arn - computed: true, optional: false, required: false
  public get networkInterfaceArn() {
    return this.getStringAttribute('network_interface_arn');
  }

  // primary_source_index - computed: true, optional: false, required: false
  public get primarySourceIndex() {
    return this.getNumberAttribute('primary_source_index');
  }

  // protocol_configurations - computed: true, optional: false, required: false
  private _protocolConfigurations = new DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList(this, "protocol_configurations", false);
  public get protocolConfigurations() {
    return this._protocolConfigurations;
  }

  // source_priority_mode - computed: true, optional: false, required: false
  public get sourcePriorityMode() {
    return this.getStringAttribute('source_priority_mode');
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager {
}

export function dataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration {
}

export function dataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automatic - computed: true, optional: false, required: false
  public get automatic() {
    return this.getStringAttribute('automatic');
  }

  // secrets_manager - computed: true, optional: false, required: false
  private _secretsManager = new DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference(this, "secrets_manager");
  public get secretsManager() {
    return this._secretsManager;
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption {
}

export function dataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_key_configuration - computed: true, optional: false, required: false
  private _encryptionKeyConfiguration = new DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference(this, "encryption_key_configuration");
  public get encryptionKeyConfiguration() {
    return this._encryptionKeyConfiguration;
  }

  // encryption_key_type - computed: true, optional: false, required: false
  public get encryptionKeyType() {
    return this.getStringAttribute('encryption_key_type');
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow {
}

export function dataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flow_arn - computed: true, optional: false, required: false
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }

  // flow_output_arn - computed: true, optional: false, required: false
  public get flowOutputArn() {
    return this.getStringAttribute('flow_output_arn');
  }

  // source_transit_decryption - computed: true, optional: false, required: false
  private _sourceTransitDecryption = new DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference(this, "source_transit_decryption");
  public get sourceTransitDecryption() {
    return this._sourceTransitDecryption;
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager {
}

export function dataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration {
}

export function dataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automatic - computed: true, optional: false, required: false
  public get automatic() {
    return this.getStringAttribute('automatic');
  }

  // secrets_manager - computed: true, optional: false, required: false
  private _secretsManager = new DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference(this, "secrets_manager");
  public get secretsManager() {
    return this._secretsManager;
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption {
}

export function dataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_key_configuration - computed: true, optional: false, required: false
  private _encryptionKeyConfiguration = new DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference(this, "encryption_key_configuration");
  public get encryptionKeyConfiguration() {
    return this._encryptionKeyConfiguration;
  }

  // encryption_key_type - computed: true, optional: false, required: false
  public get encryptionKeyType() {
    return this.getStringAttribute('encryption_key_type');
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel {
}

export function dataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // media_live_channel_arn - computed: true, optional: false, required: false
  public get mediaLiveChannelArn() {
    return this.getStringAttribute('media_live_channel_arn');
  }

  // media_live_channel_output_name - computed: true, optional: false, required: false
  public get mediaLiveChannelOutputName() {
    return this.getStringAttribute('media_live_channel_output_name');
  }

  // media_live_pipeline_id - computed: true, optional: false, required: false
  public get mediaLivePipelineId() {
    return this.getStringAttribute('media_live_pipeline_id');
  }

  // source_transit_decryption - computed: true, optional: false, required: false
  private _sourceTransitDecryption = new DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference(this, "source_transit_decryption");
  public get sourceTransitDecryption() {
    return this._sourceTransitDecryption;
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist {
}

export function dataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // recovery_latency_milliseconds - computed: true, optional: false, required: false
  public get recoveryLatencyMilliseconds() {
    return this.getNumberAttribute('recovery_latency_milliseconds');
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp {
}

export function dataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // forward_error_correction - computed: true, optional: false, required: false
  public get forwardErrorCorrection() {
    return this.getStringAttribute('forward_error_correction');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations {
}

export function dataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rist - computed: true, optional: false, required: false
  private _rist = new DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference(this, "rist");
  public get rist() {
    return this._rist;
  }

  // rtp - computed: true, optional: false, required: false
  private _rtp = new DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference(this, "rtp");
  public get rtp() {
    return this._rtp;
  }
}

export class DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference {
    return new DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationMerge {
}

export function dataAwsccMediaconnectRouterInputConfigurationMergeToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMerge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationMergeToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationMerge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationMerge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationMerge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // merge_recovery_window_milliseconds - computed: true, optional: false, required: false
  public get mergeRecoveryWindowMilliseconds() {
    return this.getNumberAttribute('merge_recovery_window_milliseconds');
  }

  // network_interface_arn - computed: true, optional: false, required: false
  public get networkInterfaceArn() {
    return this.getStringAttribute('network_interface_arn');
  }

  // protocol_configurations - computed: true, optional: false, required: false
  private _protocolConfigurations = new DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList(this, "protocol_configurations", false);
  public get protocolConfigurations() {
    return this._protocolConfigurations;
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist {
}

export function dataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // recovery_latency_milliseconds - computed: true, optional: false, required: false
  public get recoveryLatencyMilliseconds() {
    return this.getNumberAttribute('recovery_latency_milliseconds');
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp {
}

export function dataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // forward_error_correction - computed: true, optional: false, required: false
  public get forwardErrorCorrection() {
    return this.getStringAttribute('forward_error_correction');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey {
}

export function dataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration {
}

export function dataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_key - computed: true, optional: false, required: false
  private _encryptionKey = new DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller {
}

export function dataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decryption_configuration - computed: true, optional: false, required: false
  private _decryptionConfiguration = new DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference(this, "decryption_configuration");
  public get decryptionConfiguration() {
    return this._decryptionConfiguration;
  }

  // minimum_latency_milliseconds - computed: true, optional: false, required: false
  public get minimumLatencyMilliseconds() {
    return this.getNumberAttribute('minimum_latency_milliseconds');
  }

  // source_address - computed: true, optional: false, required: false
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey {
}

export function dataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration {
}

export function dataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_key - computed: true, optional: false, required: false
  private _encryptionKey = new DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener {
}

export function dataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decryption_configuration - computed: true, optional: false, required: false
  private _decryptionConfiguration = new DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference(this, "decryption_configuration");
  public get decryptionConfiguration() {
    return this._decryptionConfiguration;
  }

  // minimum_latency_milliseconds - computed: true, optional: false, required: false
  public get minimumLatencyMilliseconds() {
    return this.getNumberAttribute('minimum_latency_milliseconds');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration {
}

export function dataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rist - computed: true, optional: false, required: false
  private _rist = new DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference(this, "rist");
  public get rist() {
    return this._rist;
  }

  // rtp - computed: true, optional: false, required: false
  private _rtp = new DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference(this, "rtp");
  public get rtp() {
    return this._rtp;
  }

  // srt_caller - computed: true, optional: false, required: false
  private _srtCaller = new DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference(this, "srt_caller");
  public get srtCaller() {
    return this._srtCaller;
  }

  // srt_listener - computed: true, optional: false, required: false
  private _srtListener = new DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference(this, "srt_listener");
  public get srtListener() {
    return this._srtListener;
  }
}
export interface DataAwsccMediaconnectRouterInputConfigurationStandard {
}

export function dataAwsccMediaconnectRouterInputConfigurationStandardToTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationStandardToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfigurationStandard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfigurationStandard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfigurationStandard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_interface_arn - computed: true, optional: false, required: false
  public get networkInterfaceArn() {
    return this.getStringAttribute('network_interface_arn');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_configuration - computed: true, optional: false, required: false
  private _protocolConfiguration = new DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference(this, "protocol_configuration");
  public get protocolConfiguration() {
    return this._protocolConfiguration;
  }
}
export interface DataAwsccMediaconnectRouterInputConfiguration {
}

export function dataAwsccMediaconnectRouterInputConfigurationToTerraform(struct?: DataAwsccMediaconnectRouterInputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputConfigurationToHclTerraform(struct?: DataAwsccMediaconnectRouterInputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failover - computed: true, optional: false, required: false
  private _failover = new DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference(this, "failover");
  public get failover() {
    return this._failover;
  }

  // media_connect_flow - computed: true, optional: false, required: false
  private _mediaConnectFlow = new DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference(this, "media_connect_flow");
  public get mediaConnectFlow() {
    return this._mediaConnectFlow;
  }

  // media_live_channel - computed: true, optional: false, required: false
  private _mediaLiveChannel = new DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference(this, "media_live_channel");
  public get mediaLiveChannel() {
    return this._mediaLiveChannel;
  }

  // merge - computed: true, optional: false, required: false
  private _merge = new DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference(this, "merge");
  public get merge() {
    return this._merge;
  }

  // standard - computed: true, optional: false, required: false
  private _standard = new DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
}
export interface DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames {
}

export function dataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesToTerraform(struct?: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesToHclTerraform(struct?: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // threshold_seconds - computed: true, optional: false, required: false
  public get thresholdSeconds() {
    return this.getNumberAttribute('threshold_seconds');
  }
}
export interface DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames {
}

export function dataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesToTerraform(struct?: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesToHclTerraform(struct?: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // threshold_seconds - computed: true, optional: false, required: false
  public get thresholdSeconds() {
    return this.getNumberAttribute('threshold_seconds');
  }
}
export interface DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio {
}

export function dataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioToTerraform(struct?: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioToHclTerraform(struct?: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // threshold_seconds - computed: true, optional: false, required: false
  public get thresholdSeconds() {
    return this.getNumberAttribute('threshold_seconds');
  }
}
export interface DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel {
}

export function dataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelToTerraform(struct?: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelToHclTerraform(struct?: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // black_frames - computed: true, optional: false, required: false
  private _blackFrames = new DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference(this, "black_frames");
  public get blackFrames() {
    return this._blackFrames;
  }

  // frozen_frames - computed: true, optional: false, required: false
  private _frozenFrames = new DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference(this, "frozen_frames");
  public get frozenFrames() {
    return this._frozenFrames;
  }

  // silent_audio - computed: true, optional: false, required: false
  private _silentAudio = new DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference(this, "silent_audio");
  public get silentAudio() {
    return this._silentAudio;
  }
}
export interface DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration {
}

export function dataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationToTerraform(struct?: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationToHclTerraform(struct?: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_level - computed: true, optional: false, required: false
  private _contentLevel = new DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference(this, "content_level");
  public get contentLevel() {
    return this._contentLevel;
  }
}
export interface DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime {
}

export function dataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeToTerraform(struct?: DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeToHclTerraform(struct?: DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}
export interface DataAwsccMediaconnectRouterInputMaintenanceConfiguration {
}

export function dataAwsccMediaconnectRouterInputMaintenanceConfigurationToTerraform(struct?: DataAwsccMediaconnectRouterInputMaintenanceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputMaintenanceConfigurationToHclTerraform(struct?: DataAwsccMediaconnectRouterInputMaintenanceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputMaintenanceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputMaintenanceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // preferred_day_time - computed: true, optional: false, required: false
  private _preferredDayTime = new DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference(this, "preferred_day_time");
  public get preferredDayTime() {
    return this._preferredDayTime;
  }
}
export interface DataAwsccMediaconnectRouterInputTags {
}

export function dataAwsccMediaconnectRouterInputTagsToTerraform(struct?: DataAwsccMediaconnectRouterInputTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputTagsToHclTerraform(struct?: DataAwsccMediaconnectRouterInputTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediaconnectRouterInputTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputTags | undefined) {
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

export class DataAwsccMediaconnectRouterInputTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediaconnectRouterInputTagsOutputReference {
    return new DataAwsccMediaconnectRouterInputTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager {
}

export function dataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerToTerraform(struct?: DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerToHclTerraform(struct?: DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration {
}

export function dataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationToTerraform(struct?: DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationToHclTerraform(struct?: DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automatic - computed: true, optional: false, required: false
  public get automatic() {
    return this.getStringAttribute('automatic');
  }

  // secrets_manager - computed: true, optional: false, required: false
  private _secretsManager = new DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(this, "secrets_manager");
  public get secretsManager() {
    return this._secretsManager;
  }
}
export interface DataAwsccMediaconnectRouterInputTransitEncryption {
}

export function dataAwsccMediaconnectRouterInputTransitEncryptionToTerraform(struct?: DataAwsccMediaconnectRouterInputTransitEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterInputTransitEncryptionToHclTerraform(struct?: DataAwsccMediaconnectRouterInputTransitEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterInputTransitEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterInputTransitEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_key_configuration - computed: true, optional: false, required: false
  private _encryptionKeyConfiguration = new DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference(this, "encryption_key_configuration");
  public get encryptionKeyConfiguration() {
    return this._encryptionKeyConfiguration;
  }

  // encryption_key_type - computed: true, optional: false, required: false
  public get encryptionKeyType() {
    return this.getStringAttribute('encryption_key_type');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_router_input awscc_mediaconnect_router_input}
*/
export class DataAwsccMediaconnectRouterInput extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediaconnect_router_input";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMediaconnectRouterInput resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMediaconnectRouterInput to import
  * @param importFromId The id of the existing DataAwsccMediaconnectRouterInput that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_router_input#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMediaconnectRouterInput to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_router_input", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_router_input awscc_mediaconnect_router_input} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediaconnectRouterInputConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediaconnectRouterInputConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconnect_router_input',
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

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccMediaconnectRouterInputConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // content_quality_analysis_configuration - computed: true, optional: false, required: false
  private _contentQualityAnalysisConfiguration = new DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference(this, "content_quality_analysis_configuration");
  public get contentQualityAnalysisConfiguration() {
    return this._contentQualityAnalysisConfiguration;
  }

  // content_quality_analysis_type - computed: true, optional: false, required: false
  public get contentQualityAnalysisType() {
    return this.getStringAttribute('content_quality_analysis_type');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // input_type - computed: true, optional: false, required: false
  public get inputType() {
    return this.getStringAttribute('input_type');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // maintenance_configuration - computed: true, optional: false, required: false
  private _maintenanceConfiguration = new DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference(this, "maintenance_configuration");
  public get maintenanceConfiguration() {
    return this._maintenanceConfiguration;
  }

  // maintenance_type - computed: true, optional: false, required: false
  public get maintenanceType() {
    return this.getStringAttribute('maintenance_type');
  }

  // maximum_bitrate - computed: true, optional: false, required: false
  public get maximumBitrate() {
    return this.getNumberAttribute('maximum_bitrate');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }

  // routed_outputs - computed: true, optional: false, required: false
  public get routedOutputs() {
    return this.getNumberAttribute('routed_outputs');
  }

  // router_input_id - computed: true, optional: false, required: false
  public get routerInputId() {
    return this.getStringAttribute('router_input_id');
  }

  // routing_scope - computed: true, optional: false, required: false
  public get routingScope() {
    return this.getStringAttribute('routing_scope');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccMediaconnectRouterInputTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
  }

  // transit_encryption - computed: true, optional: false, required: false
  private _transitEncryption = new DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference(this, "transit_encryption");
  public get transitEncryption() {
    return this._transitEncryption;
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
