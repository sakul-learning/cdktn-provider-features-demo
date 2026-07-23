// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_vpc_encryption_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2VpcEncryptionControlConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_vpc_encryption_control#id DataAwsccEc2VpcEncryptionControl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway {
}

export function dataAwsccEc2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayToTerraform(struct?: DataAwsccEc2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayToHclTerraform(struct?: DataAwsccEc2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway | undefined) {
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
export interface DataAwsccEc2VpcEncryptionControlResourceExclusionsElasticFileSystem {
}

export function dataAwsccEc2VpcEncryptionControlResourceExclusionsElasticFileSystemToTerraform(struct?: DataAwsccEc2VpcEncryptionControlResourceExclusionsElasticFileSystem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcEncryptionControlResourceExclusionsElasticFileSystemToHclTerraform(struct?: DataAwsccEc2VpcEncryptionControlResourceExclusionsElasticFileSystem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpcEncryptionControlResourceExclusionsElasticFileSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcEncryptionControlResourceExclusionsElasticFileSystem | undefined) {
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
export interface DataAwsccEc2VpcEncryptionControlResourceExclusionsInternetGateway {
}

export function dataAwsccEc2VpcEncryptionControlResourceExclusionsInternetGatewayToTerraform(struct?: DataAwsccEc2VpcEncryptionControlResourceExclusionsInternetGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcEncryptionControlResourceExclusionsInternetGatewayToHclTerraform(struct?: DataAwsccEc2VpcEncryptionControlResourceExclusionsInternetGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpcEncryptionControlResourceExclusionsInternetGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcEncryptionControlResourceExclusionsInternetGateway | undefined) {
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
export interface DataAwsccEc2VpcEncryptionControlResourceExclusionsLambda {
}

export function dataAwsccEc2VpcEncryptionControlResourceExclusionsLambdaToTerraform(struct?: DataAwsccEc2VpcEncryptionControlResourceExclusionsLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcEncryptionControlResourceExclusionsLambdaToHclTerraform(struct?: DataAwsccEc2VpcEncryptionControlResourceExclusionsLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcEncryptionControlResourceExclusionsLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpcEncryptionControlResourceExclusionsLambda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcEncryptionControlResourceExclusionsLambda | undefined) {
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
export interface DataAwsccEc2VpcEncryptionControlResourceExclusionsNatGateway {
}

export function dataAwsccEc2VpcEncryptionControlResourceExclusionsNatGatewayToTerraform(struct?: DataAwsccEc2VpcEncryptionControlResourceExclusionsNatGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcEncryptionControlResourceExclusionsNatGatewayToHclTerraform(struct?: DataAwsccEc2VpcEncryptionControlResourceExclusionsNatGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpcEncryptionControlResourceExclusionsNatGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcEncryptionControlResourceExclusionsNatGateway | undefined) {
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
export interface DataAwsccEc2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway {
}

export function dataAwsccEc2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayToTerraform(struct?: DataAwsccEc2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayToHclTerraform(struct?: DataAwsccEc2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway | undefined) {
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
export interface DataAwsccEc2VpcEncryptionControlResourceExclusionsVpcLattice {
}

export function dataAwsccEc2VpcEncryptionControlResourceExclusionsVpcLatticeToTerraform(struct?: DataAwsccEc2VpcEncryptionControlResourceExclusionsVpcLattice): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcEncryptionControlResourceExclusionsVpcLatticeToHclTerraform(struct?: DataAwsccEc2VpcEncryptionControlResourceExclusionsVpcLattice): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpcEncryptionControlResourceExclusionsVpcLattice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcEncryptionControlResourceExclusionsVpcLattice | undefined) {
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
export interface DataAwsccEc2VpcEncryptionControlResourceExclusionsVpcPeering {
}

export function dataAwsccEc2VpcEncryptionControlResourceExclusionsVpcPeeringToTerraform(struct?: DataAwsccEc2VpcEncryptionControlResourceExclusionsVpcPeering): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcEncryptionControlResourceExclusionsVpcPeeringToHclTerraform(struct?: DataAwsccEc2VpcEncryptionControlResourceExclusionsVpcPeering): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpcEncryptionControlResourceExclusionsVpcPeering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcEncryptionControlResourceExclusionsVpcPeering | undefined) {
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
export interface DataAwsccEc2VpcEncryptionControlResourceExclusions {
}

export function dataAwsccEc2VpcEncryptionControlResourceExclusionsToTerraform(struct?: DataAwsccEc2VpcEncryptionControlResourceExclusions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcEncryptionControlResourceExclusionsToHclTerraform(struct?: DataAwsccEc2VpcEncryptionControlResourceExclusions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcEncryptionControlResourceExclusionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VpcEncryptionControlResourceExclusions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcEncryptionControlResourceExclusions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // egress_only_internet_gateway - computed: true, optional: false, required: false
  private _egressOnlyInternetGateway = new DataAwsccEc2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference(this, "egress_only_internet_gateway");
  public get egressOnlyInternetGateway() {
    return this._egressOnlyInternetGateway;
  }

  // elastic_file_system - computed: true, optional: false, required: false
  private _elasticFileSystem = new DataAwsccEc2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference(this, "elastic_file_system");
  public get elasticFileSystem() {
    return this._elasticFileSystem;
  }

  // internet_gateway - computed: true, optional: false, required: false
  private _internetGateway = new DataAwsccEc2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference(this, "internet_gateway");
  public get internetGateway() {
    return this._internetGateway;
  }

  // lambda - computed: true, optional: false, required: false
  private _lambda = new DataAwsccEc2VpcEncryptionControlResourceExclusionsLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }

  // nat_gateway - computed: true, optional: false, required: false
  private _natGateway = new DataAwsccEc2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference(this, "nat_gateway");
  public get natGateway() {
    return this._natGateway;
  }

  // virtual_private_gateway - computed: true, optional: false, required: false
  private _virtualPrivateGateway = new DataAwsccEc2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference(this, "virtual_private_gateway");
  public get virtualPrivateGateway() {
    return this._virtualPrivateGateway;
  }

  // vpc_lattice - computed: true, optional: false, required: false
  private _vpcLattice = new DataAwsccEc2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference(this, "vpc_lattice");
  public get vpcLattice() {
    return this._vpcLattice;
  }

  // vpc_peering - computed: true, optional: false, required: false
  private _vpcPeering = new DataAwsccEc2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference(this, "vpc_peering");
  public get vpcPeering() {
    return this._vpcPeering;
  }
}
export interface DataAwsccEc2VpcEncryptionControlTags {
}

export function dataAwsccEc2VpcEncryptionControlTagsToTerraform(struct?: DataAwsccEc2VpcEncryptionControlTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VpcEncryptionControlTagsToHclTerraform(struct?: DataAwsccEc2VpcEncryptionControlTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VpcEncryptionControlTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2VpcEncryptionControlTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VpcEncryptionControlTags | undefined) {
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

export class DataAwsccEc2VpcEncryptionControlTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2VpcEncryptionControlTagsOutputReference {
    return new DataAwsccEc2VpcEncryptionControlTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_vpc_encryption_control awscc_ec2_vpc_encryption_control}
*/
export class DataAwsccEc2VpcEncryptionControl extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_vpc_encryption_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2VpcEncryptionControl resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2VpcEncryptionControl to import
  * @param importFromId The id of the existing DataAwsccEc2VpcEncryptionControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_vpc_encryption_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2VpcEncryptionControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_vpc_encryption_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_vpc_encryption_control awscc_ec2_vpc_encryption_control} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2VpcEncryptionControlConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2VpcEncryptionControlConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_vpc_encryption_control',
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

  // egress_only_internet_gateway_exclusion_input - computed: true, optional: false, required: false
  public get egressOnlyInternetGatewayExclusionInput() {
    return this.getStringAttribute('egress_only_internet_gateway_exclusion_input');
  }

  // elastic_file_system_exclusion_input - computed: true, optional: false, required: false
  public get elasticFileSystemExclusionInput() {
    return this.getStringAttribute('elastic_file_system_exclusion_input');
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

  // internet_gateway_exclusion_input - computed: true, optional: false, required: false
  public get internetGatewayExclusionInput() {
    return this.getStringAttribute('internet_gateway_exclusion_input');
  }

  // lambda_exclusion_input - computed: true, optional: false, required: false
  public get lambdaExclusionInput() {
    return this.getStringAttribute('lambda_exclusion_input');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // nat_gateway_exclusion_input - computed: true, optional: false, required: false
  public get natGatewayExclusionInput() {
    return this.getStringAttribute('nat_gateway_exclusion_input');
  }

  // resource_exclusions - computed: true, optional: false, required: false
  private _resourceExclusions = new DataAwsccEc2VpcEncryptionControlResourceExclusionsOutputReference(this, "resource_exclusions");
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

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEc2VpcEncryptionControlTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // virtual_private_gateway_exclusion_input - computed: true, optional: false, required: false
  public get virtualPrivateGatewayExclusionInput() {
    return this.getStringAttribute('virtual_private_gateway_exclusion_input');
  }

  // vpc_encryption_control_id - computed: true, optional: false, required: false
  public get vpcEncryptionControlId() {
    return this.getStringAttribute('vpc_encryption_control_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_lattice_exclusion_input - computed: true, optional: false, required: false
  public get vpcLatticeExclusionInput() {
    return this.getStringAttribute('vpc_lattice_exclusion_input');
  }

  // vpc_peering_exclusion_input - computed: true, optional: false, required: false
  public get vpcPeeringExclusionInput() {
    return this.getStringAttribute('vpc_peering_exclusion_input');
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
