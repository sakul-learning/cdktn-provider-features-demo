// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/evs_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEvsEnvironmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/evs_environment#id DataAwsccEvsEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEvsEnvironmentChecks {
}

export function dataAwsccEvsEnvironmentChecksToTerraform(struct?: DataAwsccEvsEnvironmentChecks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEvsEnvironmentChecksToHclTerraform(struct?: DataAwsccEvsEnvironmentChecks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEvsEnvironmentChecksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEvsEnvironmentChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEvsEnvironmentChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // impaired_since - computed: true, optional: false, required: false
  public get impairedSince() {
    return this.getStringAttribute('impaired_since');
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccEvsEnvironmentChecksList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEvsEnvironmentChecksOutputReference {
    return new DataAwsccEvsEnvironmentChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEvsEnvironmentConnectivityInfo {
}

export function dataAwsccEvsEnvironmentConnectivityInfoToTerraform(struct?: DataAwsccEvsEnvironmentConnectivityInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEvsEnvironmentConnectivityInfoToHclTerraform(struct?: DataAwsccEvsEnvironmentConnectivityInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEvsEnvironmentConnectivityInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEvsEnvironmentConnectivityInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEvsEnvironmentConnectivityInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // private_route_server_peerings - computed: true, optional: false, required: false
  public get privateRouteServerPeerings() {
    return this.getListAttribute('private_route_server_peerings');
  }
}
export interface DataAwsccEvsEnvironmentCredentials {
}

export function dataAwsccEvsEnvironmentCredentialsToTerraform(struct?: DataAwsccEvsEnvironmentCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEvsEnvironmentCredentialsToHclTerraform(struct?: DataAwsccEvsEnvironmentCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEvsEnvironmentCredentialsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEvsEnvironmentCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEvsEnvironmentCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}

export class DataAwsccEvsEnvironmentCredentialsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEvsEnvironmentCredentialsOutputReference {
    return new DataAwsccEvsEnvironmentCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEvsEnvironmentHosts {
}

export function dataAwsccEvsEnvironmentHostsToTerraform(struct?: DataAwsccEvsEnvironmentHosts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEvsEnvironmentHostsToHclTerraform(struct?: DataAwsccEvsEnvironmentHosts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEvsEnvironmentHostsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEvsEnvironmentHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEvsEnvironmentHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dedicated_host_id - computed: true, optional: false, required: false
  public get dedicatedHostId() {
    return this.getStringAttribute('dedicated_host_id');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // placement_group_id - computed: true, optional: false, required: false
  public get placementGroupId() {
    return this.getStringAttribute('placement_group_id');
  }
}

export class DataAwsccEvsEnvironmentHostsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEvsEnvironmentHostsOutputReference {
    return new DataAwsccEvsEnvironmentHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEvsEnvironmentInitialVlansEdgeVTep {
}

export function dataAwsccEvsEnvironmentInitialVlansEdgeVTepToTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansEdgeVTep): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEvsEnvironmentInitialVlansEdgeVTepToHclTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansEdgeVTep): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEvsEnvironmentInitialVlansEdgeVTep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEvsEnvironmentInitialVlansEdgeVTep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
}
export interface DataAwsccEvsEnvironmentInitialVlansExpansionVlan1 {
}

export function dataAwsccEvsEnvironmentInitialVlansExpansionVlan1ToTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansExpansionVlan1): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEvsEnvironmentInitialVlansExpansionVlan1ToHclTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansExpansionVlan1): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEvsEnvironmentInitialVlansExpansionVlan1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEvsEnvironmentInitialVlansExpansionVlan1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
}
export interface DataAwsccEvsEnvironmentInitialVlansExpansionVlan2 {
}

export function dataAwsccEvsEnvironmentInitialVlansExpansionVlan2ToTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansExpansionVlan2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEvsEnvironmentInitialVlansExpansionVlan2ToHclTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansExpansionVlan2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEvsEnvironmentInitialVlansExpansionVlan2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEvsEnvironmentInitialVlansExpansionVlan2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
}
export interface DataAwsccEvsEnvironmentInitialVlansHcx {
}

export function dataAwsccEvsEnvironmentInitialVlansHcxToTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansHcx): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEvsEnvironmentInitialVlansHcxToHclTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansHcx): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEvsEnvironmentInitialVlansHcxOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEvsEnvironmentInitialVlansHcx | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEvsEnvironmentInitialVlansHcx | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
}
export interface DataAwsccEvsEnvironmentInitialVlansNsxUpLink {
}

export function dataAwsccEvsEnvironmentInitialVlansNsxUpLinkToTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansNsxUpLink): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEvsEnvironmentInitialVlansNsxUpLinkToHclTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansNsxUpLink): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEvsEnvironmentInitialVlansNsxUpLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEvsEnvironmentInitialVlansNsxUpLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
}
export interface DataAwsccEvsEnvironmentInitialVlansVMotion {
}

export function dataAwsccEvsEnvironmentInitialVlansVMotionToTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansVMotion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEvsEnvironmentInitialVlansVMotionToHclTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansVMotion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEvsEnvironmentInitialVlansVMotion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEvsEnvironmentInitialVlansVMotion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
}
export interface DataAwsccEvsEnvironmentInitialVlansVSan {
}

export function dataAwsccEvsEnvironmentInitialVlansVSanToTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansVSan): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEvsEnvironmentInitialVlansVSanToHclTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansVSan): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEvsEnvironmentInitialVlansVSanOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEvsEnvironmentInitialVlansVSan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEvsEnvironmentInitialVlansVSan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
}
export interface DataAwsccEvsEnvironmentInitialVlansVTep {
}

export function dataAwsccEvsEnvironmentInitialVlansVTepToTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansVTep): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEvsEnvironmentInitialVlansVTepToHclTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansVTep): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEvsEnvironmentInitialVlansVTepOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEvsEnvironmentInitialVlansVTep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEvsEnvironmentInitialVlansVTep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
}
export interface DataAwsccEvsEnvironmentInitialVlansVmManagement {
}

export function dataAwsccEvsEnvironmentInitialVlansVmManagementToTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansVmManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEvsEnvironmentInitialVlansVmManagementToHclTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansVmManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEvsEnvironmentInitialVlansVmManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEvsEnvironmentInitialVlansVmManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
}
export interface DataAwsccEvsEnvironmentInitialVlansVmkManagement {
}

export function dataAwsccEvsEnvironmentInitialVlansVmkManagementToTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansVmkManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEvsEnvironmentInitialVlansVmkManagementToHclTerraform(struct?: DataAwsccEvsEnvironmentInitialVlansVmkManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEvsEnvironmentInitialVlansVmkManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEvsEnvironmentInitialVlansVmkManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
}
export interface DataAwsccEvsEnvironmentInitialVlans {
}

export function dataAwsccEvsEnvironmentInitialVlansToTerraform(struct?: DataAwsccEvsEnvironmentInitialVlans): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEvsEnvironmentInitialVlansToHclTerraform(struct?: DataAwsccEvsEnvironmentInitialVlans): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEvsEnvironmentInitialVlansOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEvsEnvironmentInitialVlans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEvsEnvironmentInitialVlans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // edge_v_tep - computed: true, optional: false, required: false
  private _edgeVTep = new DataAwsccEvsEnvironmentInitialVlansEdgeVTepOutputReference(this, "edge_v_tep");
  public get edgeVTep() {
    return this._edgeVTep;
  }

  // expansion_vlan_1 - computed: true, optional: false, required: false
  private _expansionVlan1 = new DataAwsccEvsEnvironmentInitialVlansExpansionVlan1OutputReference(this, "expansion_vlan_1");
  public get expansionVlan1() {
    return this._expansionVlan1;
  }

  // expansion_vlan_2 - computed: true, optional: false, required: false
  private _expansionVlan2 = new DataAwsccEvsEnvironmentInitialVlansExpansionVlan2OutputReference(this, "expansion_vlan_2");
  public get expansionVlan2() {
    return this._expansionVlan2;
  }

  // hcx - computed: true, optional: false, required: false
  private _hcx = new DataAwsccEvsEnvironmentInitialVlansHcxOutputReference(this, "hcx");
  public get hcx() {
    return this._hcx;
  }

  // hcx_network_acl_id - computed: true, optional: false, required: false
  public get hcxNetworkAclId() {
    return this.getStringAttribute('hcx_network_acl_id');
  }

  // is_hcx_public - computed: true, optional: false, required: false
  public get isHcxPublic() {
    return this.getBooleanAttribute('is_hcx_public');
  }

  // nsx_up_link - computed: true, optional: false, required: false
  private _nsxUpLink = new DataAwsccEvsEnvironmentInitialVlansNsxUpLinkOutputReference(this, "nsx_up_link");
  public get nsxUpLink() {
    return this._nsxUpLink;
  }

  // v_motion - computed: true, optional: false, required: false
  private _vMotion = new DataAwsccEvsEnvironmentInitialVlansVMotionOutputReference(this, "v_motion");
  public get vMotion() {
    return this._vMotion;
  }

  // v_san - computed: true, optional: false, required: false
  private _vSan = new DataAwsccEvsEnvironmentInitialVlansVSanOutputReference(this, "v_san");
  public get vSan() {
    return this._vSan;
  }

  // v_tep - computed: true, optional: false, required: false
  private _vTep = new DataAwsccEvsEnvironmentInitialVlansVTepOutputReference(this, "v_tep");
  public get vTep() {
    return this._vTep;
  }

  // vm_management - computed: true, optional: false, required: false
  private _vmManagement = new DataAwsccEvsEnvironmentInitialVlansVmManagementOutputReference(this, "vm_management");
  public get vmManagement() {
    return this._vmManagement;
  }

  // vmk_management - computed: true, optional: false, required: false
  private _vmkManagement = new DataAwsccEvsEnvironmentInitialVlansVmkManagementOutputReference(this, "vmk_management");
  public get vmkManagement() {
    return this._vmkManagement;
  }
}
export interface DataAwsccEvsEnvironmentLicenseInfo {
}

export function dataAwsccEvsEnvironmentLicenseInfoToTerraform(struct?: DataAwsccEvsEnvironmentLicenseInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEvsEnvironmentLicenseInfoToHclTerraform(struct?: DataAwsccEvsEnvironmentLicenseInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEvsEnvironmentLicenseInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEvsEnvironmentLicenseInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEvsEnvironmentLicenseInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // solution_key - computed: true, optional: false, required: false
  public get solutionKey() {
    return this.getStringAttribute('solution_key');
  }

  // vsan_key - computed: true, optional: false, required: false
  public get vsanKey() {
    return this.getStringAttribute('vsan_key');
  }
}
export interface DataAwsccEvsEnvironmentServiceAccessSecurityGroups {
}

export function dataAwsccEvsEnvironmentServiceAccessSecurityGroupsToTerraform(struct?: DataAwsccEvsEnvironmentServiceAccessSecurityGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEvsEnvironmentServiceAccessSecurityGroupsToHclTerraform(struct?: DataAwsccEvsEnvironmentServiceAccessSecurityGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEvsEnvironmentServiceAccessSecurityGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEvsEnvironmentServiceAccessSecurityGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
}
export interface DataAwsccEvsEnvironmentTags {
}

export function dataAwsccEvsEnvironmentTagsToTerraform(struct?: DataAwsccEvsEnvironmentTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEvsEnvironmentTagsToHclTerraform(struct?: DataAwsccEvsEnvironmentTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEvsEnvironmentTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEvsEnvironmentTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEvsEnvironmentTags | undefined) {
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

export class DataAwsccEvsEnvironmentTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEvsEnvironmentTagsOutputReference {
    return new DataAwsccEvsEnvironmentTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEvsEnvironmentVcfHostnames {
}

export function dataAwsccEvsEnvironmentVcfHostnamesToTerraform(struct?: DataAwsccEvsEnvironmentVcfHostnames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEvsEnvironmentVcfHostnamesToHclTerraform(struct?: DataAwsccEvsEnvironmentVcfHostnames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEvsEnvironmentVcfHostnamesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEvsEnvironmentVcfHostnames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEvsEnvironmentVcfHostnames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_builder - computed: true, optional: false, required: false
  public get cloudBuilder() {
    return this.getStringAttribute('cloud_builder');
  }

  // nsx - computed: true, optional: false, required: false
  public get nsx() {
    return this.getStringAttribute('nsx');
  }

  // nsx_edge_1 - computed: true, optional: false, required: false
  public get nsxEdge1() {
    return this.getStringAttribute('nsx_edge_1');
  }

  // nsx_edge_2 - computed: true, optional: false, required: false
  public get nsxEdge2() {
    return this.getStringAttribute('nsx_edge_2');
  }

  // nsx_manager_1 - computed: true, optional: false, required: false
  public get nsxManager1() {
    return this.getStringAttribute('nsx_manager_1');
  }

  // nsx_manager_2 - computed: true, optional: false, required: false
  public get nsxManager2() {
    return this.getStringAttribute('nsx_manager_2');
  }

  // nsx_manager_3 - computed: true, optional: false, required: false
  public get nsxManager3() {
    return this.getStringAttribute('nsx_manager_3');
  }

  // sddc_manager - computed: true, optional: false, required: false
  public get sddcManager() {
    return this.getStringAttribute('sddc_manager');
  }

  // v_center - computed: true, optional: false, required: false
  public get vCenter() {
    return this.getStringAttribute('v_center');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/evs_environment awscc_evs_environment}
*/
export class DataAwsccEvsEnvironment extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_evs_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEvsEnvironment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEvsEnvironment to import
  * @param importFromId The id of the existing DataAwsccEvsEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/evs_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEvsEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_evs_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/evs_environment awscc_evs_environment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEvsEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEvsEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_evs_environment',
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

  // checks - computed: true, optional: false, required: false
  private _checks = new DataAwsccEvsEnvironmentChecksList(this, "checks", false);
  public get checks() {
    return this._checks;
  }

  // connectivity_info - computed: true, optional: false, required: false
  private _connectivityInfo = new DataAwsccEvsEnvironmentConnectivityInfoOutputReference(this, "connectivity_info");
  public get connectivityInfo() {
    return this._connectivityInfo;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new DataAwsccEvsEnvironmentCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }

  // environment_arn - computed: true, optional: false, required: false
  public get environmentArn() {
    return this.getStringAttribute('environment_arn');
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }

  // environment_name - computed: true, optional: false, required: false
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }

  // environment_state - computed: true, optional: false, required: false
  public get environmentState() {
    return this.getStringAttribute('environment_state');
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataAwsccEvsEnvironmentHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
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

  // initial_vlans - computed: true, optional: false, required: false
  private _initialVlans = new DataAwsccEvsEnvironmentInitialVlansOutputReference(this, "initial_vlans");
  public get initialVlans() {
    return this._initialVlans;
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // license_info - computed: true, optional: false, required: false
  private _licenseInfo = new DataAwsccEvsEnvironmentLicenseInfoOutputReference(this, "license_info");
  public get licenseInfo() {
    return this._licenseInfo;
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // service_access_security_groups - computed: true, optional: false, required: false
  private _serviceAccessSecurityGroups = new DataAwsccEvsEnvironmentServiceAccessSecurityGroupsOutputReference(this, "service_access_security_groups");
  public get serviceAccessSecurityGroups() {
    return this._serviceAccessSecurityGroups;
  }

  // service_access_subnet_id - computed: true, optional: false, required: false
  public get serviceAccessSubnetId() {
    return this.getStringAttribute('service_access_subnet_id');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // state_details - computed: true, optional: false, required: false
  public get stateDetails() {
    return this.getStringAttribute('state_details');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEvsEnvironmentTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // terms_accepted - computed: true, optional: false, required: false
  public get termsAccepted() {
    return this.getBooleanAttribute('terms_accepted');
  }

  // vcf_hostnames - computed: true, optional: false, required: false
  private _vcfHostnames = new DataAwsccEvsEnvironmentVcfHostnamesOutputReference(this, "vcf_hostnames");
  public get vcfHostnames() {
    return this._vcfHostnames;
  }

  // vcf_version - computed: true, optional: false, required: false
  public get vcfVersion() {
    return this.getStringAttribute('vcf_version');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
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
