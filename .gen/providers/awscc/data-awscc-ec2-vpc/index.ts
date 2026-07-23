// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2VpcConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_vpc#id DataAwsccEc2Vpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2VpcTags {
}

export function dataAwsccEc2VpcTagsToTerraform(struct?: DataAwsccEc2VpcTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcTagsToHclTerraform(struct?: DataAwsccEc2VpcTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2VpcTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcTags | undefined) {
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

export class DataAwsccEc2VpcTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2VpcTagsOutputReference {
    return new DataAwsccEc2VpcTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway {
}

export function dataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayToTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayToHclTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway | undefined) {
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

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem {
}

export function dataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemToTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemToHclTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem | undefined) {
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

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGateway {
}

export function dataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayToTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayToHclTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGateway | undefined) {
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

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambda {
}

export function dataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaToTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaToHclTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambda | undefined) {
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

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGateway {
}

export function dataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayToTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayToHclTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGateway | undefined) {
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

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway {
}

export function dataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayToTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayToHclTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway | undefined) {
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

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLattice {
}

export function dataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeToTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLattice): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeToHclTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLattice): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLattice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLattice | undefined) {
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

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeering {
}

export function dataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringToTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeering): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringToHclTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeering): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeering | undefined) {
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

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}
export interface DataAwsccEc2VpcVpcEncryptionControlResourceExclusions {
}

export function dataAwsccEc2VpcVpcEncryptionControlResourceExclusionsToTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControlResourceExclusions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcVpcEncryptionControlResourceExclusionsToHclTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControlResourceExclusions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpcVpcEncryptionControlResourceExclusions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcVpcEncryptionControlResourceExclusions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // egress_only_internet_gateway - computed: true, optional: false, required: false
  private _egressOnlyInternetGateway = new DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference(this, "egress_only_internet_gateway");
  public get egressOnlyInternetGateway() {
    return this._egressOnlyInternetGateway;
  }

  // elastic_file_system - computed: true, optional: false, required: false
  private _elasticFileSystem = new DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference(this, "elastic_file_system");
  public get elasticFileSystem() {
    return this._elasticFileSystem;
  }

  // internet_gateway - computed: true, optional: false, required: false
  private _internetGateway = new DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference(this, "internet_gateway");
  public get internetGateway() {
    return this._internetGateway;
  }

  // lambda - computed: true, optional: false, required: false
  private _lambda = new DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }

  // nat_gateway - computed: true, optional: false, required: false
  private _natGateway = new DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference(this, "nat_gateway");
  public get natGateway() {
    return this._natGateway;
  }

  // virtual_private_gateway - computed: true, optional: false, required: false
  private _virtualPrivateGateway = new DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference(this, "virtual_private_gateway");
  public get virtualPrivateGateway() {
    return this._virtualPrivateGateway;
  }

  // vpc_lattice - computed: true, optional: false, required: false
  private _vpcLattice = new DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference(this, "vpc_lattice");
  public get vpcLattice() {
    return this._vpcLattice;
  }

  // vpc_peering - computed: true, optional: false, required: false
  private _vpcPeering = new DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference(this, "vpc_peering");
  public get vpcPeering() {
    return this._vpcPeering;
  }
}
export interface DataAwsccEc2VpcVpcEncryptionControl {
}

export function dataAwsccEc2VpcVpcEncryptionControlToTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcVpcEncryptionControlToHclTerraform(struct?: DataAwsccEc2VpcVpcEncryptionControl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcVpcEncryptionControlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpcVpcEncryptionControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcVpcEncryptionControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // egress_only_internet_gateway_exclusion - computed: true, optional: false, required: false
  public get egressOnlyInternetGatewayExclusion() {
    return this.getStringAttribute('egress_only_internet_gateway_exclusion');
  }

  // elastic_file_system_exclusion - computed: true, optional: false, required: false
  public get elasticFileSystemExclusion() {
    return this.getStringAttribute('elastic_file_system_exclusion');
  }

  // internet_gateway_exclusion - computed: true, optional: false, required: false
  public get internetGatewayExclusion() {
    return this.getStringAttribute('internet_gateway_exclusion');
  }

  // lambda_exclusion - computed: true, optional: false, required: false
  public get lambdaExclusion() {
    return this.getStringAttribute('lambda_exclusion');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // nat_gateway_exclusion - computed: true, optional: false, required: false
  public get natGatewayExclusion() {
    return this.getStringAttribute('nat_gateway_exclusion');
  }

  // resource_exclusions - computed: true, optional: false, required: false
  private _resourceExclusions = new DataAwsccEc2VpcVpcEncryptionControlResourceExclusionsOutputReference(this, "resource_exclusions");
  public get resourceExclusions() {
    return this._resourceExclusions;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // virtual_private_gateway_exclusion - computed: true, optional: false, required: false
  public get virtualPrivateGatewayExclusion() {
    return this.getStringAttribute('virtual_private_gateway_exclusion');
  }

  // vpc_encryption_control_id - computed: true, optional: false, required: false
  public get vpcEncryptionControlId() {
    return this.getStringAttribute('vpc_encryption_control_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_lattice_exclusion - computed: true, optional: false, required: false
  public get vpcLatticeExclusion() {
    return this.getStringAttribute('vpc_lattice_exclusion');
  }

  // vpc_peering_exclusion - computed: true, optional: false, required: false
  public get vpcPeeringExclusion() {
    return this.getStringAttribute('vpc_peering_exclusion');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_vpc awscc_ec2_vpc}
*/
export class DataAwsccEc2Vpc extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_vpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2Vpc resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2Vpc to import
  * @param importFromId The id of the existing DataAwsccEc2Vpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_vpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2Vpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_vpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_vpc awscc_ec2_vpc} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2VpcConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2VpcConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_vpc',
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

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // cidr_block_associations - computed: true, optional: false, required: false
  public get cidrBlockAssociations() {
    return this.getListAttribute('cidr_block_associations');
  }

  // default_network_acl - computed: true, optional: false, required: false
  public get defaultNetworkAcl() {
    return this.getStringAttribute('default_network_acl');
  }

  // default_security_group - computed: true, optional: false, required: false
  public get defaultSecurityGroup() {
    return this.getStringAttribute('default_security_group');
  }

  // enable_dns_hostnames - computed: true, optional: false, required: false
  public get enableDnsHostnames() {
    return this.getBooleanAttribute('enable_dns_hostnames');
  }

  // enable_dns_support - computed: true, optional: false, required: false
  public get enableDnsSupport() {
    return this.getBooleanAttribute('enable_dns_support');
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

  // instance_tenancy - computed: true, optional: false, required: false
  public get instanceTenancy() {
    return this.getStringAttribute('instance_tenancy');
  }

  // ipv_4_ipam_pool_id - computed: true, optional: false, required: false
  public get ipv4IpamPoolId() {
    return this.getStringAttribute('ipv_4_ipam_pool_id');
  }

  // ipv_4_netmask_length - computed: true, optional: false, required: false
  public get ipv4NetmaskLength() {
    return this.getNumberAttribute('ipv_4_netmask_length');
  }

  // ipv_6_cidr_blocks - computed: true, optional: false, required: false
  public get ipv6CidrBlocks() {
    return this.getListAttribute('ipv_6_cidr_blocks');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEc2VpcTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // vpc_encryption_control - computed: true, optional: false, required: false
  private _vpcEncryptionControl = new DataAwsccEc2VpcVpcEncryptionControlOutputReference(this, "vpc_encryption_control");
  public get vpcEncryptionControl() {
    return this._vpcEncryptionControl;
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
