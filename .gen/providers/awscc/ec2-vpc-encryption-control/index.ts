// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_vpc_encryption_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2VpcEncryptionControlConfig extends cdktn.TerraformMetaArguments {
  /**
  * Used to enable or disable EIGW exclusion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_vpc_encryption_control#egress_only_internet_gateway_exclusion_input Ec2VpcEncryptionControl#egress_only_internet_gateway_exclusion_input}
  */
  readonly egressOnlyInternetGatewayExclusionInput?: string;
  /**
  * Used to enable or disable EFS exclusion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_vpc_encryption_control#elastic_file_system_exclusion_input Ec2VpcEncryptionControl#elastic_file_system_exclusion_input}
  */
  readonly elasticFileSystemExclusionInput?: string;
  /**
  * Used to enable or disable IGW exclusion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_vpc_encryption_control#internet_gateway_exclusion_input Ec2VpcEncryptionControl#internet_gateway_exclusion_input}
  */
  readonly internetGatewayExclusionInput?: string;
  /**
  * Used to enable or disable Lambda exclusion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_vpc_encryption_control#lambda_exclusion_input Ec2VpcEncryptionControl#lambda_exclusion_input}
  */
  readonly lambdaExclusionInput?: string;
  /**
  * The VPC encryption control mode, either monitor or enforce.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_vpc_encryption_control#mode Ec2VpcEncryptionControl#mode}
  */
  readonly mode?: string;
  /**
  * Used to enable or disable Nat gateway exclusion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_vpc_encryption_control#nat_gateway_exclusion_input Ec2VpcEncryptionControl#nat_gateway_exclusion_input}
  */
  readonly natGatewayExclusionInput?: string;
  /**
  * The tags to assign to the VPC encryption control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_vpc_encryption_control#tags Ec2VpcEncryptionControl#tags}
  */
  readonly tags?: Ec2VpcEncryptionControlTags[] | cdktn.IResolvable;
  /**
  * Used to enable or disable VGW exclusion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_vpc_encryption_control#virtual_private_gateway_exclusion_input Ec2VpcEncryptionControl#virtual_private_gateway_exclusion_input}
  */
  readonly virtualPrivateGatewayExclusionInput?: string;
  /**
  * The VPC on which this VPC encryption control is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_vpc_encryption_control#vpc_id Ec2VpcEncryptionControl#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Used to enable or disable Vpc Lattice exclusion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_vpc_encryption_control#vpc_lattice_exclusion_input Ec2VpcEncryptionControl#vpc_lattice_exclusion_input}
  */
  readonly vpcLatticeExclusionInput?: string;
  /**
  * Used to enable or disable VPC peering exclusion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_vpc_encryption_control#vpc_peering_exclusion_input Ec2VpcEncryptionControl#vpc_peering_exclusion_input}
  */
  readonly vpcPeeringExclusionInput?: string;
}
export interface Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway {
}

export function ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayToTerraform(struct?: Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayToHclTerraform(struct?: Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway | undefined) {
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
export interface Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem {
}

export function ec2VpcEncryptionControlResourceExclusionsElasticFileSystemToTerraform(struct?: Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ec2VpcEncryptionControlResourceExclusionsElasticFileSystemToHclTerraform(struct?: Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem | undefined) {
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
export interface Ec2VpcEncryptionControlResourceExclusionsInternetGateway {
}

export function ec2VpcEncryptionControlResourceExclusionsInternetGatewayToTerraform(struct?: Ec2VpcEncryptionControlResourceExclusionsInternetGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ec2VpcEncryptionControlResourceExclusionsInternetGatewayToHclTerraform(struct?: Ec2VpcEncryptionControlResourceExclusionsInternetGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2VpcEncryptionControlResourceExclusionsInternetGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2VpcEncryptionControlResourceExclusionsInternetGateway | undefined) {
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
export interface Ec2VpcEncryptionControlResourceExclusionsLambda {
}

export function ec2VpcEncryptionControlResourceExclusionsLambdaToTerraform(struct?: Ec2VpcEncryptionControlResourceExclusionsLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ec2VpcEncryptionControlResourceExclusionsLambdaToHclTerraform(struct?: Ec2VpcEncryptionControlResourceExclusionsLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2VpcEncryptionControlResourceExclusionsLambda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2VpcEncryptionControlResourceExclusionsLambda | undefined) {
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
export interface Ec2VpcEncryptionControlResourceExclusionsNatGateway {
}

export function ec2VpcEncryptionControlResourceExclusionsNatGatewayToTerraform(struct?: Ec2VpcEncryptionControlResourceExclusionsNatGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ec2VpcEncryptionControlResourceExclusionsNatGatewayToHclTerraform(struct?: Ec2VpcEncryptionControlResourceExclusionsNatGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2VpcEncryptionControlResourceExclusionsNatGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2VpcEncryptionControlResourceExclusionsNatGateway | undefined) {
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
export interface Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway {
}

export function ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayToTerraform(struct?: Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayToHclTerraform(struct?: Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway | undefined) {
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
export interface Ec2VpcEncryptionControlResourceExclusionsVpcLattice {
}

export function ec2VpcEncryptionControlResourceExclusionsVpcLatticeToTerraform(struct?: Ec2VpcEncryptionControlResourceExclusionsVpcLattice): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ec2VpcEncryptionControlResourceExclusionsVpcLatticeToHclTerraform(struct?: Ec2VpcEncryptionControlResourceExclusionsVpcLattice): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2VpcEncryptionControlResourceExclusionsVpcLattice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2VpcEncryptionControlResourceExclusionsVpcLattice | undefined) {
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
export interface Ec2VpcEncryptionControlResourceExclusionsVpcPeering {
}

export function ec2VpcEncryptionControlResourceExclusionsVpcPeeringToTerraform(struct?: Ec2VpcEncryptionControlResourceExclusionsVpcPeering): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ec2VpcEncryptionControlResourceExclusionsVpcPeeringToHclTerraform(struct?: Ec2VpcEncryptionControlResourceExclusionsVpcPeering): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2VpcEncryptionControlResourceExclusionsVpcPeering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2VpcEncryptionControlResourceExclusionsVpcPeering | undefined) {
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
export interface Ec2VpcEncryptionControlResourceExclusions {
}

export function ec2VpcEncryptionControlResourceExclusionsToTerraform(struct?: Ec2VpcEncryptionControlResourceExclusions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ec2VpcEncryptionControlResourceExclusionsToHclTerraform(struct?: Ec2VpcEncryptionControlResourceExclusions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Ec2VpcEncryptionControlResourceExclusionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2VpcEncryptionControlResourceExclusions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2VpcEncryptionControlResourceExclusions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // egress_only_internet_gateway - computed: true, optional: false, required: false
  private _egressOnlyInternetGateway = new Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference(this, "egress_only_internet_gateway");
  public get egressOnlyInternetGateway() {
    return this._egressOnlyInternetGateway;
  }

  // elastic_file_system - computed: true, optional: false, required: false
  private _elasticFileSystem = new Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference(this, "elastic_file_system");
  public get elasticFileSystem() {
    return this._elasticFileSystem;
  }

  // internet_gateway - computed: true, optional: false, required: false
  private _internetGateway = new Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference(this, "internet_gateway");
  public get internetGateway() {
    return this._internetGateway;
  }

  // lambda - computed: true, optional: false, required: false
  private _lambda = new Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }

  // nat_gateway - computed: true, optional: false, required: false
  private _natGateway = new Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference(this, "nat_gateway");
  public get natGateway() {
    return this._natGateway;
  }

  // virtual_private_gateway - computed: true, optional: false, required: false
  private _virtualPrivateGateway = new Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference(this, "virtual_private_gateway");
  public get virtualPrivateGateway() {
    return this._virtualPrivateGateway;
  }

  // vpc_lattice - computed: true, optional: false, required: false
  private _vpcLattice = new Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference(this, "vpc_lattice");
  public get vpcLattice() {
    return this._vpcLattice;
  }

  // vpc_peering - computed: true, optional: false, required: false
  private _vpcPeering = new Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference(this, "vpc_peering");
  public get vpcPeering() {
    return this._vpcPeering;
  }
}
export interface Ec2VpcEncryptionControlTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_vpc_encryption_control#key Ec2VpcEncryptionControl#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_vpc_encryption_control#value Ec2VpcEncryptionControl#value}
  */
  readonly value?: string;
}

export function ec2VpcEncryptionControlTagsToTerraform(struct?: Ec2VpcEncryptionControlTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ec2VpcEncryptionControlTagsToHclTerraform(struct?: Ec2VpcEncryptionControlTags | cdktn.IResolvable): any {
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

export class Ec2VpcEncryptionControlTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2VpcEncryptionControlTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ec2VpcEncryptionControlTags | cdktn.IResolvable | undefined) {
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

export class Ec2VpcEncryptionControlTagsList extends cdktn.ComplexList {
  public internalValue? : Ec2VpcEncryptionControlTags[] | cdktn.IResolvable

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
  public get(index: number): Ec2VpcEncryptionControlTagsOutputReference {
    return new Ec2VpcEncryptionControlTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_vpc_encryption_control awscc_ec2_vpc_encryption_control}
*/
export class Ec2VpcEncryptionControl extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_vpc_encryption_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2VpcEncryptionControl resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2VpcEncryptionControl to import
  * @param importFromId The id of the existing Ec2VpcEncryptionControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_vpc_encryption_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2VpcEncryptionControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_vpc_encryption_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_vpc_encryption_control awscc_ec2_vpc_encryption_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2VpcEncryptionControlConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ec2VpcEncryptionControlConfig = {}) {
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
    this._egressOnlyInternetGatewayExclusionInput = config.egressOnlyInternetGatewayExclusionInput;
    this._elasticFileSystemExclusionInput = config.elasticFileSystemExclusionInput;
    this._internetGatewayExclusionInput = config.internetGatewayExclusionInput;
    this._lambdaExclusionInput = config.lambdaExclusionInput;
    this._mode = config.mode;
    this._natGatewayExclusionInput = config.natGatewayExclusionInput;
    this._tags.internalValue = config.tags;
    this._virtualPrivateGatewayExclusionInput = config.virtualPrivateGatewayExclusionInput;
    this._vpcId = config.vpcId;
    this._vpcLatticeExclusionInput = config.vpcLatticeExclusionInput;
    this._vpcPeeringExclusionInput = config.vpcPeeringExclusionInput;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // egress_only_internet_gateway_exclusion_input - computed: true, optional: true, required: false
  private _egressOnlyInternetGatewayExclusionInput?: string; 
  public get egressOnlyInternetGatewayExclusionInput() {
    return this.getStringAttribute('egress_only_internet_gateway_exclusion_input');
  }
  public set egressOnlyInternetGatewayExclusionInput(value: string) {
    this._egressOnlyInternetGatewayExclusionInput = value;
  }
  public resetEgressOnlyInternetGatewayExclusionInput() {
    this._egressOnlyInternetGatewayExclusionInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressOnlyInternetGatewayExclusionInputInput() {
    return this._egressOnlyInternetGatewayExclusionInput;
  }

  // elastic_file_system_exclusion_input - computed: true, optional: true, required: false
  private _elasticFileSystemExclusionInput?: string; 
  public get elasticFileSystemExclusionInput() {
    return this.getStringAttribute('elastic_file_system_exclusion_input');
  }
  public set elasticFileSystemExclusionInput(value: string) {
    this._elasticFileSystemExclusionInput = value;
  }
  public resetElasticFileSystemExclusionInput() {
    this._elasticFileSystemExclusionInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticFileSystemExclusionInputInput() {
    return this._elasticFileSystemExclusionInput;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_gateway_exclusion_input - computed: true, optional: true, required: false
  private _internetGatewayExclusionInput?: string; 
  public get internetGatewayExclusionInput() {
    return this.getStringAttribute('internet_gateway_exclusion_input');
  }
  public set internetGatewayExclusionInput(value: string) {
    this._internetGatewayExclusionInput = value;
  }
  public resetInternetGatewayExclusionInput() {
    this._internetGatewayExclusionInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetGatewayExclusionInputInput() {
    return this._internetGatewayExclusionInput;
  }

  // lambda_exclusion_input - computed: true, optional: true, required: false
  private _lambdaExclusionInput?: string; 
  public get lambdaExclusionInput() {
    return this.getStringAttribute('lambda_exclusion_input');
  }
  public set lambdaExclusionInput(value: string) {
    this._lambdaExclusionInput = value;
  }
  public resetLambdaExclusionInput() {
    this._lambdaExclusionInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaExclusionInputInput() {
    return this._lambdaExclusionInput;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // nat_gateway_exclusion_input - computed: true, optional: true, required: false
  private _natGatewayExclusionInput?: string; 
  public get natGatewayExclusionInput() {
    return this.getStringAttribute('nat_gateway_exclusion_input');
  }
  public set natGatewayExclusionInput(value: string) {
    this._natGatewayExclusionInput = value;
  }
  public resetNatGatewayExclusionInput() {
    this._natGatewayExclusionInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayExclusionInputInput() {
    return this._natGatewayExclusionInput;
  }

  // resource_exclusions - computed: true, optional: false, required: false
  private _resourceExclusions = new Ec2VpcEncryptionControlResourceExclusionsOutputReference(this, "resource_exclusions");
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

  // tags - computed: true, optional: true, required: false
  private _tags = new Ec2VpcEncryptionControlTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Ec2VpcEncryptionControlTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // virtual_private_gateway_exclusion_input - computed: true, optional: true, required: false
  private _virtualPrivateGatewayExclusionInput?: string; 
  public get virtualPrivateGatewayExclusionInput() {
    return this.getStringAttribute('virtual_private_gateway_exclusion_input');
  }
  public set virtualPrivateGatewayExclusionInput(value: string) {
    this._virtualPrivateGatewayExclusionInput = value;
  }
  public resetVirtualPrivateGatewayExclusionInput() {
    this._virtualPrivateGatewayExclusionInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPrivateGatewayExclusionInputInput() {
    return this._virtualPrivateGatewayExclusionInput;
  }

  // vpc_encryption_control_id - computed: true, optional: false, required: false
  public get vpcEncryptionControlId() {
    return this.getStringAttribute('vpc_encryption_control_id');
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

  // vpc_lattice_exclusion_input - computed: true, optional: true, required: false
  private _vpcLatticeExclusionInput?: string; 
  public get vpcLatticeExclusionInput() {
    return this.getStringAttribute('vpc_lattice_exclusion_input');
  }
  public set vpcLatticeExclusionInput(value: string) {
    this._vpcLatticeExclusionInput = value;
  }
  public resetVpcLatticeExclusionInput() {
    this._vpcLatticeExclusionInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcLatticeExclusionInputInput() {
    return this._vpcLatticeExclusionInput;
  }

  // vpc_peering_exclusion_input - computed: true, optional: true, required: false
  private _vpcPeeringExclusionInput?: string; 
  public get vpcPeeringExclusionInput() {
    return this.getStringAttribute('vpc_peering_exclusion_input');
  }
  public set vpcPeeringExclusionInput(value: string) {
    this._vpcPeeringExclusionInput = value;
  }
  public resetVpcPeeringExclusionInput() {
    this._vpcPeeringExclusionInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringExclusionInputInput() {
    return this._vpcPeeringExclusionInput;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      egress_only_internet_gateway_exclusion_input: cdktn.stringToTerraform(this._egressOnlyInternetGatewayExclusionInput),
      elastic_file_system_exclusion_input: cdktn.stringToTerraform(this._elasticFileSystemExclusionInput),
      internet_gateway_exclusion_input: cdktn.stringToTerraform(this._internetGatewayExclusionInput),
      lambda_exclusion_input: cdktn.stringToTerraform(this._lambdaExclusionInput),
      mode: cdktn.stringToTerraform(this._mode),
      nat_gateway_exclusion_input: cdktn.stringToTerraform(this._natGatewayExclusionInput),
      tags: cdktn.listMapper(ec2VpcEncryptionControlTagsToTerraform, false)(this._tags.internalValue),
      virtual_private_gateway_exclusion_input: cdktn.stringToTerraform(this._virtualPrivateGatewayExclusionInput),
      vpc_id: cdktn.stringToTerraform(this._vpcId),
      vpc_lattice_exclusion_input: cdktn.stringToTerraform(this._vpcLatticeExclusionInput),
      vpc_peering_exclusion_input: cdktn.stringToTerraform(this._vpcPeeringExclusionInput),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      egress_only_internet_gateway_exclusion_input: {
        value: cdktn.stringToHclTerraform(this._egressOnlyInternetGatewayExclusionInput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elastic_file_system_exclusion_input: {
        value: cdktn.stringToHclTerraform(this._elasticFileSystemExclusionInput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_gateway_exclusion_input: {
        value: cdktn.stringToHclTerraform(this._internetGatewayExclusionInput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lambda_exclusion_input: {
        value: cdktn.stringToHclTerraform(this._lambdaExclusionInput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktn.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_gateway_exclusion_input: {
        value: cdktn.stringToHclTerraform(this._natGatewayExclusionInput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(ec2VpcEncryptionControlTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2VpcEncryptionControlTagsList",
      },
      virtual_private_gateway_exclusion_input: {
        value: cdktn.stringToHclTerraform(this._virtualPrivateGatewayExclusionInput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktn.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_lattice_exclusion_input: {
        value: cdktn.stringToHclTerraform(this._vpcLatticeExclusionInput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_peering_exclusion_input: {
        value: cdktn.stringToHclTerraform(this._vpcPeeringExclusionInput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
