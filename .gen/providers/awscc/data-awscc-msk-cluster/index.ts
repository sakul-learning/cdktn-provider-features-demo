// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/msk_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMskClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/msk_cluster#id DataAwsccMskCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess {
}

export function dataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessToTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessToHclTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam {
}

export function dataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamToTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamToHclTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram {
}

export function dataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramToTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramToHclTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl {
}

export function dataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslToTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslToHclTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iam - computed: true, optional: false, required: false
  private _iam = new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference(this, "iam");
  public get iam() {
    return this._iam;
  }

  // scram - computed: true, optional: false, required: false
  private _scram = new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference(this, "scram");
  public get scram() {
    return this._scram;
  }
}
export interface DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls {
}

export function dataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsToTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsToHclTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication {
}

export function dataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationToTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationToHclTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sasl - computed: true, optional: false, required: false
  private _sasl = new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference(this, "sasl");
  public get sasl() {
    return this._sasl;
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
}
export interface DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity {
}

export function dataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityToTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityToHclTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_authentication - computed: true, optional: false, required: false
  private _clientAuthentication = new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference(this, "client_authentication");
  public get clientAuthentication() {
    return this._clientAuthentication;
  }
}
export interface DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfo {
}

export function dataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoToTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoToHclTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // public_access - computed: true, optional: false, required: false
  private _publicAccess = new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }

  // vpc_connectivity - computed: true, optional: false, required: false
  private _vpcConnectivity = new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference(this, "vpc_connectivity");
  public get vpcConnectivity() {
    return this._vpcConnectivity;
  }
}
export interface DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput {
}

export function dataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputToTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputToHclTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // volume_throughput - computed: true, optional: false, required: false
  public get volumeThroughput() {
    return this.getNumberAttribute('volume_throughput');
  }
}
export interface DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo {
}

export function dataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoToTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoToHclTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // provisioned_throughput - computed: true, optional: false, required: false
  private _provisionedThroughput = new DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference(this, "provisioned_throughput");
  public get provisionedThroughput() {
    return this._provisionedThroughput;
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
}
export interface DataAwsccMskClusterBrokerNodeGroupInfoStorageInfo {
}

export function dataAwsccMskClusterBrokerNodeGroupInfoStorageInfoToTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoStorageInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterBrokerNodeGroupInfoStorageInfoToHclTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfoStorageInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterBrokerNodeGroupInfoStorageInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterBrokerNodeGroupInfoStorageInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ebs_storage_info - computed: true, optional: false, required: false
  private _ebsStorageInfo = new DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference(this, "ebs_storage_info");
  public get ebsStorageInfo() {
    return this._ebsStorageInfo;
  }
}
export interface DataAwsccMskClusterBrokerNodeGroupInfo {
}

export function dataAwsccMskClusterBrokerNodeGroupInfoToTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterBrokerNodeGroupInfoToHclTerraform(struct?: DataAwsccMskClusterBrokerNodeGroupInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterBrokerNodeGroupInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterBrokerNodeGroupInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterBrokerNodeGroupInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // broker_az_distribution - computed: true, optional: false, required: false
  public get brokerAzDistribution() {
    return this.getStringAttribute('broker_az_distribution');
  }

  // client_subnets - computed: true, optional: false, required: false
  public get clientSubnets() {
    return this.getListAttribute('client_subnets');
  }

  // connectivity_info - computed: true, optional: false, required: false
  private _connectivityInfo = new DataAwsccMskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference(this, "connectivity_info");
  public get connectivityInfo() {
    return this._connectivityInfo;
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // storage_info - computed: true, optional: false, required: false
  private _storageInfo = new DataAwsccMskClusterBrokerNodeGroupInfoStorageInfoOutputReference(this, "storage_info");
  public get storageInfo() {
    return this._storageInfo;
  }
}
export interface DataAwsccMskClusterClientAuthenticationSaslIam {
}

export function dataAwsccMskClusterClientAuthenticationSaslIamToTerraform(struct?: DataAwsccMskClusterClientAuthenticationSaslIam): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterClientAuthenticationSaslIamToHclTerraform(struct?: DataAwsccMskClusterClientAuthenticationSaslIam): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterClientAuthenticationSaslIamOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterClientAuthenticationSaslIam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterClientAuthenticationSaslIam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccMskClusterClientAuthenticationSaslScram {
}

export function dataAwsccMskClusterClientAuthenticationSaslScramToTerraform(struct?: DataAwsccMskClusterClientAuthenticationSaslScram): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterClientAuthenticationSaslScramToHclTerraform(struct?: DataAwsccMskClusterClientAuthenticationSaslScram): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterClientAuthenticationSaslScramOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterClientAuthenticationSaslScram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterClientAuthenticationSaslScram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccMskClusterClientAuthenticationSasl {
}

export function dataAwsccMskClusterClientAuthenticationSaslToTerraform(struct?: DataAwsccMskClusterClientAuthenticationSasl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterClientAuthenticationSaslToHclTerraform(struct?: DataAwsccMskClusterClientAuthenticationSasl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterClientAuthenticationSaslOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterClientAuthenticationSasl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterClientAuthenticationSasl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iam - computed: true, optional: false, required: false
  private _iam = new DataAwsccMskClusterClientAuthenticationSaslIamOutputReference(this, "iam");
  public get iam() {
    return this._iam;
  }

  // scram - computed: true, optional: false, required: false
  private _scram = new DataAwsccMskClusterClientAuthenticationSaslScramOutputReference(this, "scram");
  public get scram() {
    return this._scram;
  }
}
export interface DataAwsccMskClusterClientAuthenticationTls {
}

export function dataAwsccMskClusterClientAuthenticationTlsToTerraform(struct?: DataAwsccMskClusterClientAuthenticationTls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterClientAuthenticationTlsToHclTerraform(struct?: DataAwsccMskClusterClientAuthenticationTls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterClientAuthenticationTlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterClientAuthenticationTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterClientAuthenticationTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_authority_arn_list - computed: true, optional: false, required: false
  public get certificateAuthorityArnList() {
    return this.getListAttribute('certificate_authority_arn_list');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccMskClusterClientAuthenticationUnauthenticated {
}

export function dataAwsccMskClusterClientAuthenticationUnauthenticatedToTerraform(struct?: DataAwsccMskClusterClientAuthenticationUnauthenticated): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterClientAuthenticationUnauthenticatedToHclTerraform(struct?: DataAwsccMskClusterClientAuthenticationUnauthenticated): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterClientAuthenticationUnauthenticated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterClientAuthenticationUnauthenticated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccMskClusterClientAuthentication {
}

export function dataAwsccMskClusterClientAuthenticationToTerraform(struct?: DataAwsccMskClusterClientAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterClientAuthenticationToHclTerraform(struct?: DataAwsccMskClusterClientAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterClientAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterClientAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterClientAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sasl - computed: true, optional: false, required: false
  private _sasl = new DataAwsccMskClusterClientAuthenticationSaslOutputReference(this, "sasl");
  public get sasl() {
    return this._sasl;
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataAwsccMskClusterClientAuthenticationTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }

  // unauthenticated - computed: true, optional: false, required: false
  private _unauthenticated = new DataAwsccMskClusterClientAuthenticationUnauthenticatedOutputReference(this, "unauthenticated");
  public get unauthenticated() {
    return this._unauthenticated;
  }
}
export interface DataAwsccMskClusterConfigurationInfo {
}

export function dataAwsccMskClusterConfigurationInfoToTerraform(struct?: DataAwsccMskClusterConfigurationInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterConfigurationInfoToHclTerraform(struct?: DataAwsccMskClusterConfigurationInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterConfigurationInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterConfigurationInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterConfigurationInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }
}
export interface DataAwsccMskClusterEncryptionInfoEncryptionAtRest {
}

export function dataAwsccMskClusterEncryptionInfoEncryptionAtRestToTerraform(struct?: DataAwsccMskClusterEncryptionInfoEncryptionAtRest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterEncryptionInfoEncryptionAtRestToHclTerraform(struct?: DataAwsccMskClusterEncryptionInfoEncryptionAtRest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterEncryptionInfoEncryptionAtRest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterEncryptionInfoEncryptionAtRest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_volume_kms_key_id - computed: true, optional: false, required: false
  public get dataVolumeKmsKeyId() {
    return this.getStringAttribute('data_volume_kms_key_id');
  }
}
export interface DataAwsccMskClusterEncryptionInfoEncryptionInTransit {
}

export function dataAwsccMskClusterEncryptionInfoEncryptionInTransitToTerraform(struct?: DataAwsccMskClusterEncryptionInfoEncryptionInTransit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterEncryptionInfoEncryptionInTransitToHclTerraform(struct?: DataAwsccMskClusterEncryptionInfoEncryptionInTransit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterEncryptionInfoEncryptionInTransit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterEncryptionInfoEncryptionInTransit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_broker - computed: true, optional: false, required: false
  public get clientBroker() {
    return this.getStringAttribute('client_broker');
  }

  // in_cluster - computed: true, optional: false, required: false
  public get inCluster() {
    return this.getBooleanAttribute('in_cluster');
  }
}
export interface DataAwsccMskClusterEncryptionInfo {
}

export function dataAwsccMskClusterEncryptionInfoToTerraform(struct?: DataAwsccMskClusterEncryptionInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterEncryptionInfoToHclTerraform(struct?: DataAwsccMskClusterEncryptionInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterEncryptionInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterEncryptionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterEncryptionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_at_rest - computed: true, optional: false, required: false
  private _encryptionAtRest = new DataAwsccMskClusterEncryptionInfoEncryptionAtRestOutputReference(this, "encryption_at_rest");
  public get encryptionAtRest() {
    return this._encryptionAtRest;
  }

  // encryption_in_transit - computed: true, optional: false, required: false
  private _encryptionInTransit = new DataAwsccMskClusterEncryptionInfoEncryptionInTransitOutputReference(this, "encryption_in_transit");
  public get encryptionInTransit() {
    return this._encryptionInTransit;
  }
}
export interface DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogs {
}

export function dataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsToTerraform(struct?: DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsToHclTerraform(struct?: DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group - computed: true, optional: false, required: false
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
}
export interface DataAwsccMskClusterLoggingInfoBrokerLogsFirehose {
}

export function dataAwsccMskClusterLoggingInfoBrokerLogsFirehoseToTerraform(struct?: DataAwsccMskClusterLoggingInfoBrokerLogsFirehose): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterLoggingInfoBrokerLogsFirehoseToHclTerraform(struct?: DataAwsccMskClusterLoggingInfoBrokerLogsFirehose): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterLoggingInfoBrokerLogsFirehose | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterLoggingInfoBrokerLogsFirehose | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delivery_stream - computed: true, optional: false, required: false
  public get deliveryStream() {
    return this.getStringAttribute('delivery_stream');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccMskClusterLoggingInfoBrokerLogsS3 {
}

export function dataAwsccMskClusterLoggingInfoBrokerLogsS3ToTerraform(struct?: DataAwsccMskClusterLoggingInfoBrokerLogsS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterLoggingInfoBrokerLogsS3ToHclTerraform(struct?: DataAwsccMskClusterLoggingInfoBrokerLogsS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterLoggingInfoBrokerLogsS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterLoggingInfoBrokerLogsS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}
export interface DataAwsccMskClusterLoggingInfoBrokerLogs {
}

export function dataAwsccMskClusterLoggingInfoBrokerLogsToTerraform(struct?: DataAwsccMskClusterLoggingInfoBrokerLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterLoggingInfoBrokerLogsToHclTerraform(struct?: DataAwsccMskClusterLoggingInfoBrokerLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterLoggingInfoBrokerLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterLoggingInfoBrokerLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_logs - computed: true, optional: false, required: false
  private _cloudwatchLogs = new DataAwsccMskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }

  // firehose - computed: true, optional: false, required: false
  private _firehose = new DataAwsccMskClusterLoggingInfoBrokerLogsFirehoseOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccMskClusterLoggingInfoBrokerLogsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface DataAwsccMskClusterLoggingInfo {
}

export function dataAwsccMskClusterLoggingInfoToTerraform(struct?: DataAwsccMskClusterLoggingInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterLoggingInfoToHclTerraform(struct?: DataAwsccMskClusterLoggingInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterLoggingInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterLoggingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterLoggingInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // broker_logs - computed: true, optional: false, required: false
  private _brokerLogs = new DataAwsccMskClusterLoggingInfoBrokerLogsOutputReference(this, "broker_logs");
  public get brokerLogs() {
    return this._brokerLogs;
  }
}
export interface DataAwsccMskClusterOpenMonitoringPrometheusJmxExporter {
}

export function dataAwsccMskClusterOpenMonitoringPrometheusJmxExporterToTerraform(struct?: DataAwsccMskClusterOpenMonitoringPrometheusJmxExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterOpenMonitoringPrometheusJmxExporterToHclTerraform(struct?: DataAwsccMskClusterOpenMonitoringPrometheusJmxExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterOpenMonitoringPrometheusJmxExporter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterOpenMonitoringPrometheusJmxExporter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled_in_broker - computed: true, optional: false, required: false
  public get enabledInBroker() {
    return this.getBooleanAttribute('enabled_in_broker');
  }
}
export interface DataAwsccMskClusterOpenMonitoringPrometheusNodeExporter {
}

export function dataAwsccMskClusterOpenMonitoringPrometheusNodeExporterToTerraform(struct?: DataAwsccMskClusterOpenMonitoringPrometheusNodeExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterOpenMonitoringPrometheusNodeExporterToHclTerraform(struct?: DataAwsccMskClusterOpenMonitoringPrometheusNodeExporter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterOpenMonitoringPrometheusNodeExporter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterOpenMonitoringPrometheusNodeExporter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled_in_broker - computed: true, optional: false, required: false
  public get enabledInBroker() {
    return this.getBooleanAttribute('enabled_in_broker');
  }
}
export interface DataAwsccMskClusterOpenMonitoringPrometheus {
}

export function dataAwsccMskClusterOpenMonitoringPrometheusToTerraform(struct?: DataAwsccMskClusterOpenMonitoringPrometheus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterOpenMonitoringPrometheusToHclTerraform(struct?: DataAwsccMskClusterOpenMonitoringPrometheus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterOpenMonitoringPrometheusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterOpenMonitoringPrometheus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterOpenMonitoringPrometheus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // jmx_exporter - computed: true, optional: false, required: false
  private _jmxExporter = new DataAwsccMskClusterOpenMonitoringPrometheusJmxExporterOutputReference(this, "jmx_exporter");
  public get jmxExporter() {
    return this._jmxExporter;
  }

  // node_exporter - computed: true, optional: false, required: false
  private _nodeExporter = new DataAwsccMskClusterOpenMonitoringPrometheusNodeExporterOutputReference(this, "node_exporter");
  public get nodeExporter() {
    return this._nodeExporter;
  }
}
export interface DataAwsccMskClusterOpenMonitoring {
}

export function dataAwsccMskClusterOpenMonitoringToTerraform(struct?: DataAwsccMskClusterOpenMonitoring): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterOpenMonitoringToHclTerraform(struct?: DataAwsccMskClusterOpenMonitoring): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterOpenMonitoringOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterOpenMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterOpenMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prometheus - computed: true, optional: false, required: false
  private _prometheus = new DataAwsccMskClusterOpenMonitoringPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
}
export interface DataAwsccMskClusterRebalancing {
}

export function dataAwsccMskClusterRebalancingToTerraform(struct?: DataAwsccMskClusterRebalancing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterRebalancingToHclTerraform(struct?: DataAwsccMskClusterRebalancing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterRebalancingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterRebalancing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterRebalancing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccMskClusterZookeeperAccess {
}

export function dataAwsccMskClusterZookeeperAccessToTerraform(struct?: DataAwsccMskClusterZookeeperAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMskClusterZookeeperAccessToHclTerraform(struct?: DataAwsccMskClusterZookeeperAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMskClusterZookeeperAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMskClusterZookeeperAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMskClusterZookeeperAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/msk_cluster awscc_msk_cluster}
*/
export class DataAwsccMskCluster extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_msk_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMskCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMskCluster to import
  * @param importFromId The id of the existing DataAwsccMskCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/msk_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMskCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_msk_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/msk_cluster awscc_msk_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMskClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMskClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_msk_cluster',
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

  // broker_node_group_info - computed: true, optional: false, required: false
  private _brokerNodeGroupInfo = new DataAwsccMskClusterBrokerNodeGroupInfoOutputReference(this, "broker_node_group_info");
  public get brokerNodeGroupInfo() {
    return this._brokerNodeGroupInfo;
  }

  // client_authentication - computed: true, optional: false, required: false
  private _clientAuthentication = new DataAwsccMskClusterClientAuthenticationOutputReference(this, "client_authentication");
  public get clientAuthentication() {
    return this._clientAuthentication;
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // configuration_info - computed: true, optional: false, required: false
  private _configurationInfo = new DataAwsccMskClusterConfigurationInfoOutputReference(this, "configuration_info");
  public get configurationInfo() {
    return this._configurationInfo;
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // encryption_info - computed: true, optional: false, required: false
  private _encryptionInfo = new DataAwsccMskClusterEncryptionInfoOutputReference(this, "encryption_info");
  public get encryptionInfo() {
    return this._encryptionInfo;
  }

  // enhanced_monitoring - computed: true, optional: false, required: false
  public get enhancedMonitoring() {
    return this.getStringAttribute('enhanced_monitoring');
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

  // kafka_version - computed: true, optional: false, required: false
  public get kafkaVersion() {
    return this.getStringAttribute('kafka_version');
  }

  // logging_info - computed: true, optional: false, required: false
  private _loggingInfo = new DataAwsccMskClusterLoggingInfoOutputReference(this, "logging_info");
  public get loggingInfo() {
    return this._loggingInfo;
  }

  // number_of_broker_nodes - computed: true, optional: false, required: false
  public get numberOfBrokerNodes() {
    return this.getNumberAttribute('number_of_broker_nodes');
  }

  // open_monitoring - computed: true, optional: false, required: false
  private _openMonitoring = new DataAwsccMskClusterOpenMonitoringOutputReference(this, "open_monitoring");
  public get openMonitoring() {
    return this._openMonitoring;
  }

  // rebalancing - computed: true, optional: false, required: false
  private _rebalancing = new DataAwsccMskClusterRebalancingOutputReference(this, "rebalancing");
  public get rebalancing() {
    return this._rebalancing;
  }

  // storage_mode - computed: true, optional: false, required: false
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // zookeeper_access - computed: true, optional: false, required: false
  private _zookeeperAccess = new DataAwsccMskClusterZookeeperAccessOutputReference(this, "zookeeper_access");
  public get zookeeperAccess() {
    return this._zookeeperAccess;
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
