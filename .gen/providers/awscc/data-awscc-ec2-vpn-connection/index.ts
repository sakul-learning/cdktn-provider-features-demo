// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_vpn_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2VpnConnectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_vpn_connection#id DataAwsccEc2VpnConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2VpnConnectionTags {
}

export function dataAwsccEc2VpnConnectionTagsToTerraform(struct?: DataAwsccEc2VpnConnectionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpnConnectionTagsToHclTerraform(struct?: DataAwsccEc2VpnConnectionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpnConnectionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2VpnConnectionTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpnConnectionTags | undefined) {
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

export class DataAwsccEc2VpnConnectionTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2VpnConnectionTagsOutputReference {
    return new DataAwsccEc2VpnConnectionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions {
}

export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsToTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsToHclTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference {
    return new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions {
}

export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsToTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsToHclTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp_log_enabled - computed: true, optional: false, required: false
  public get bgpLogEnabled() {
    return this.getBooleanAttribute('bgp_log_enabled');
  }

  // bgp_log_group_arn - computed: true, optional: false, required: false
  public get bgpLogGroupArn() {
    return this.getStringAttribute('bgp_log_group_arn');
  }

  // bgp_log_output_format - computed: true, optional: false, required: false
  public get bgpLogOutputFormat() {
    return this.getStringAttribute('bgp_log_output_format');
  }

  // log_enabled - computed: true, optional: false, required: false
  public get logEnabled() {
    return this.getBooleanAttribute('log_enabled');
  }

  // log_group_arn - computed: true, optional: false, required: false
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }

  // log_output_format - computed: true, optional: false, required: false
  public get logOutputFormat() {
    return this.getStringAttribute('log_output_format');
  }
}
export interface DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions {
}

export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsToTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsToHclTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_log_options - computed: true, optional: false, required: false
  private _cloudwatchLogOptions = new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference(this, "cloudwatch_log_options");
  public get cloudwatchLogOptions() {
    return this._cloudwatchLogOptions;
  }
}
export interface DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers {
}

export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersToTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersToHclTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference {
    return new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms {
}

export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsToTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsToHclTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference {
    return new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms {
}

export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsToTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsToHclTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference {
    return new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers {
}

export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersToTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersToHclTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference {
    return new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms {
}

export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsToTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsToHclTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference {
    return new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms {
}

export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsToTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsToHclTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference {
    return new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications {
}

export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsToTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsToHclTerraform(struct?: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dpd_timeout_action - computed: true, optional: false, required: false
  public get dpdTimeoutAction() {
    return this.getStringAttribute('dpd_timeout_action');
  }

  // dpd_timeout_seconds - computed: true, optional: false, required: false
  public get dpdTimeoutSeconds() {
    return this.getNumberAttribute('dpd_timeout_seconds');
  }

  // enable_tunnel_lifecycle_control - computed: true, optional: false, required: false
  public get enableTunnelLifecycleControl() {
    return this.getBooleanAttribute('enable_tunnel_lifecycle_control');
  }

  // ike_versions - computed: true, optional: false, required: false
  private _ikeVersions = new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList(this, "ike_versions", false);
  public get ikeVersions() {
    return this._ikeVersions;
  }

  // log_options - computed: true, optional: false, required: false
  private _logOptions = new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference(this, "log_options");
  public get logOptions() {
    return this._logOptions;
  }

  // phase_1_dh_group_numbers - computed: true, optional: false, required: false
  private _phase1DhGroupNumbers = new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList(this, "phase_1_dh_group_numbers", false);
  public get phase1DhGroupNumbers() {
    return this._phase1DhGroupNumbers;
  }

  // phase_1_encryption_algorithms - computed: true, optional: false, required: false
  private _phase1EncryptionAlgorithms = new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList(this, "phase_1_encryption_algorithms", false);
  public get phase1EncryptionAlgorithms() {
    return this._phase1EncryptionAlgorithms;
  }

  // phase_1_integrity_algorithms - computed: true, optional: false, required: false
  private _phase1IntegrityAlgorithms = new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList(this, "phase_1_integrity_algorithms", false);
  public get phase1IntegrityAlgorithms() {
    return this._phase1IntegrityAlgorithms;
  }

  // phase_1_lifetime_seconds - computed: true, optional: false, required: false
  public get phase1LifetimeSeconds() {
    return this.getNumberAttribute('phase_1_lifetime_seconds');
  }

  // phase_2_dh_group_numbers - computed: true, optional: false, required: false
  private _phase2DhGroupNumbers = new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList(this, "phase_2_dh_group_numbers", false);
  public get phase2DhGroupNumbers() {
    return this._phase2DhGroupNumbers;
  }

  // phase_2_encryption_algorithms - computed: true, optional: false, required: false
  private _phase2EncryptionAlgorithms = new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList(this, "phase_2_encryption_algorithms", false);
  public get phase2EncryptionAlgorithms() {
    return this._phase2EncryptionAlgorithms;
  }

  // phase_2_integrity_algorithms - computed: true, optional: false, required: false
  private _phase2IntegrityAlgorithms = new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList(this, "phase_2_integrity_algorithms", false);
  public get phase2IntegrityAlgorithms() {
    return this._phase2IntegrityAlgorithms;
  }

  // phase_2_lifetime_seconds - computed: true, optional: false, required: false
  public get phase2LifetimeSeconds() {
    return this.getNumberAttribute('phase_2_lifetime_seconds');
  }

  // pre_shared_key - computed: true, optional: false, required: false
  public get preSharedKey() {
    return this.getStringAttribute('pre_shared_key');
  }

  // rekey_fuzz_percentage - computed: true, optional: false, required: false
  public get rekeyFuzzPercentage() {
    return this.getNumberAttribute('rekey_fuzz_percentage');
  }

  // rekey_margin_time_seconds - computed: true, optional: false, required: false
  public get rekeyMarginTimeSeconds() {
    return this.getNumberAttribute('rekey_margin_time_seconds');
  }

  // replay_window_size - computed: true, optional: false, required: false
  public get replayWindowSize() {
    return this.getNumberAttribute('replay_window_size');
  }

  // startup_action - computed: true, optional: false, required: false
  public get startupAction() {
    return this.getStringAttribute('startup_action');
  }

  // tunnel_inside_cidr - computed: true, optional: false, required: false
  public get tunnelInsideCidr() {
    return this.getStringAttribute('tunnel_inside_cidr');
  }

  // tunnel_inside_ipv_6_cidr - computed: true, optional: false, required: false
  public get tunnelInsideIpv6Cidr() {
    return this.getStringAttribute('tunnel_inside_ipv_6_cidr');
  }
}

export class DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference {
    return new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_vpn_connection awscc_ec2_vpn_connection}
*/
export class DataAwsccEc2VpnConnection extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_vpn_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2VpnConnection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2VpnConnection to import
  * @param importFromId The id of the existing DataAwsccEc2VpnConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_vpn_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2VpnConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_vpn_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_vpn_connection awscc_ec2_vpn_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2VpnConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2VpnConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_vpn_connection',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_gateway_id - computed: true, optional: false, required: false
  public get customerGatewayId() {
    return this.getStringAttribute('customer_gateway_id');
  }

  // enable_acceleration - computed: true, optional: false, required: false
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
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

  // local_ipv_4_network_cidr - computed: true, optional: false, required: false
  public get localIpv4NetworkCidr() {
    return this.getStringAttribute('local_ipv_4_network_cidr');
  }

  // local_ipv_6_network_cidr - computed: true, optional: false, required: false
  public get localIpv6NetworkCidr() {
    return this.getStringAttribute('local_ipv_6_network_cidr');
  }

  // outside_ip_address_type - computed: true, optional: false, required: false
  public get outsideIpAddressType() {
    return this.getStringAttribute('outside_ip_address_type');
  }

  // pre_shared_key_storage - computed: true, optional: false, required: false
  public get preSharedKeyStorage() {
    return this.getStringAttribute('pre_shared_key_storage');
  }

  // remote_ipv_4_network_cidr - computed: true, optional: false, required: false
  public get remoteIpv4NetworkCidr() {
    return this.getStringAttribute('remote_ipv_4_network_cidr');
  }

  // remote_ipv_6_network_cidr - computed: true, optional: false, required: false
  public get remoteIpv6NetworkCidr() {
    return this.getStringAttribute('remote_ipv_6_network_cidr');
  }

  // static_routes_only - computed: true, optional: false, required: false
  public get staticRoutesOnly() {
    return this.getBooleanAttribute('static_routes_only');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEc2VpnConnectionTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // transport_transit_gateway_attachment_id - computed: true, optional: false, required: false
  public get transportTransitGatewayAttachmentId() {
    return this.getStringAttribute('transport_transit_gateway_attachment_id');
  }

  // tunnel_bandwidth - computed: true, optional: false, required: false
  public get tunnelBandwidth() {
    return this.getStringAttribute('tunnel_bandwidth');
  }

  // tunnel_inside_ip_version - computed: true, optional: false, required: false
  public get tunnelInsideIpVersion() {
    return this.getStringAttribute('tunnel_inside_ip_version');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpn_concentrator_id - computed: true, optional: false, required: false
  public get vpnConcentratorId() {
    return this.getStringAttribute('vpn_concentrator_id');
  }

  // vpn_connection_id - computed: true, optional: false, required: false
  public get vpnConnectionId() {
    return this.getStringAttribute('vpn_connection_id');
  }

  // vpn_gateway_id - computed: true, optional: false, required: false
  public get vpnGatewayId() {
    return this.getStringAttribute('vpn_gateway_id');
  }

  // vpn_tunnel_options_specifications - computed: true, optional: false, required: false
  private _vpnTunnelOptionsSpecifications = new DataAwsccEc2VpnConnectionVpnTunnelOptionsSpecificationsList(this, "vpn_tunnel_options_specifications", false);
  public get vpnTunnelOptionsSpecifications() {
    return this._vpnTunnelOptionsSpecifications;
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
