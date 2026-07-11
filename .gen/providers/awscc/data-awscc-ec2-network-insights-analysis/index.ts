// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_network_insights_analysis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2NetworkInsightsAnalysisConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_network_insights_analysis#id DataAwsccEc2NetworkInsightsAnalysis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2NetworkInsightsAnalysisAlternatePathHints {
}

export function dataAwsccEc2NetworkInsightsAnalysisAlternatePathHintsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisAlternatePathHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisAlternatePathHintsToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisAlternatePathHints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisAlternatePathHintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisAlternatePathHints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisAlternatePathHints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_arn - computed: true, optional: false, required: false
  public get componentArn() {
    return this.getStringAttribute('component_arn');
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisAlternatePathHintsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAnalysisAlternatePathHintsOutputReference {
    return new DataAwsccEc2NetworkInsightsAnalysisAlternatePathHintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsAcl {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsAclToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsAcl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsAclToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsAcl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsAclOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsAcl | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRange {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRangeToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRangeToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRule {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRuleToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsAclRuleToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRule | undefined) {
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

  // egress - computed: true, optional: false, required: false
  public get egress() {
    return this.getBooleanAttribute('egress');
  }

  // port_range - computed: true, optional: false, required: false
  private _portRange = new DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRulePortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // rule_action - computed: true, optional: false, required: false
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }

  // rule_number - computed: true, optional: false, required: false
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedTo {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedToToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedToToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedTo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedToOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedTo | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_port - computed: true, optional: false, required: false
  public get instancePort() {
    return this.getNumberAttribute('instance_port');
  }

  // load_balancer_port - computed: true, optional: false, required: false
  public get loadBalancerPort() {
    return this.getNumberAttribute('load_balancer_port');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsComponent {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsComponentToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsComponent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsComponentToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsComponent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsComponentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsComponent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsComponent | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGateway {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGatewayToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGatewayToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGateway | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsDestination {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsDestination | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpc {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpcToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpc | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTable {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTableToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTableToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTable | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGateway {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGatewayToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGatewayToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGateway | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstance {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstance): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstance): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstance | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTarget {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // instance - computed: true, optional: false, required: false
  private _instance = new DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetInstanceOutputReference(this, "instance");
  public get instance() {
    return this._instance;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsOutputReference {
    return new DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsNatGateway {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsNatGatewayToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsNatGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsNatGatewayToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsNatGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsNatGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsNatGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsNatGateway | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterface {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterfaceToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterface): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterfaceToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterface): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterfaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterface | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsPortRanges {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsPortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsPortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsPortRangesToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsPortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsPortRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsPortRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsPortRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsPortRangesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAnalysisExplanationsPortRangesOutputReference {
    return new DataAwsccEc2NetworkInsightsAnalysisExplanationsPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixListStruct {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixListStructToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixListStructToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixListStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixListStruct | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTable {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTable | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRoute {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRouteToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRoute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRouteToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRoute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRouteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_cidr - computed: true, optional: false, required: false
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }

  // destination_prefix_list_id - computed: true, optional: false, required: false
  public get destinationPrefixListId() {
    return this.getStringAttribute('destination_prefix_list_id');
  }

  // egress_only_internet_gateway_id - computed: true, optional: false, required: false
  public get egressOnlyInternetGatewayId() {
    return this.getStringAttribute('egress_only_internet_gateway_id');
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // nat_gateway_id - computed: true, optional: false, required: false
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // vpc_peering_connection_id - computed: true, optional: false, required: false
  public get vpcPeeringConnectionId() {
    return this.getStringAttribute('vpc_peering_connection_id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroup {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroup | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRule {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRule | undefined) {
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

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // port_range - computed: true, optional: false, required: false
  private _portRange = new DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }

  // prefix_list_id - computed: true, optional: false, required: false
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroups {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupsToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroups | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupsOutputReference {
    return new DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpc {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpcToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpc | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnet {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnet | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTable {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTableToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTableToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTable | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsVpc {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpc | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpoint {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpointToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpointToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpoint | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnection {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnection | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnection {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnectionToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnectionToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnection | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGateway {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGatewayToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGatewayToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGateway | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisExplanations {
}

export function dataAwsccEc2NetworkInsightsAnalysisExplanationsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisExplanationsToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisExplanations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisExplanations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisExplanations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl - computed: true, optional: false, required: false
  private _acl = new DataAwsccEc2NetworkInsightsAnalysisExplanationsAclOutputReference(this, "acl");
  public get acl() {
    return this._acl;
  }

  // acl_rule - computed: true, optional: false, required: false
  private _aclRule = new DataAwsccEc2NetworkInsightsAnalysisExplanationsAclRuleOutputReference(this, "acl_rule");
  public get aclRule() {
    return this._aclRule;
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // addresses - computed: true, optional: false, required: false
  public get addresses() {
    return this.getListAttribute('addresses');
  }

  // attached_to - computed: true, optional: false, required: false
  private _attachedTo = new DataAwsccEc2NetworkInsightsAnalysisExplanationsAttachedToOutputReference(this, "attached_to");
  public get attachedTo() {
    return this._attachedTo;
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // cidrs - computed: true, optional: false, required: false
  public get cidrs() {
    return this.getListAttribute('cidrs');
  }

  // classic_load_balancer_listener - computed: true, optional: false, required: false
  private _classicLoadBalancerListener = new DataAwsccEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerOutputReference(this, "classic_load_balancer_listener");
  public get classicLoadBalancerListener() {
    return this._classicLoadBalancerListener;
  }

  // component - computed: true, optional: false, required: false
  private _component = new DataAwsccEc2NetworkInsightsAnalysisExplanationsComponentOutputReference(this, "component");
  public get component() {
    return this._component;
  }

  // customer_gateway - computed: true, optional: false, required: false
  private _customerGateway = new DataAwsccEc2NetworkInsightsAnalysisExplanationsCustomerGatewayOutputReference(this, "customer_gateway");
  public get customerGateway() {
    return this._customerGateway;
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }

  // destination_vpc - computed: true, optional: false, required: false
  private _destinationVpc = new DataAwsccEc2NetworkInsightsAnalysisExplanationsDestinationVpcOutputReference(this, "destination_vpc");
  public get destinationVpc() {
    return this._destinationVpc;
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // elastic_load_balancer_listener - computed: true, optional: false, required: false
  private _elasticLoadBalancerListener = new DataAwsccEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerOutputReference(this, "elastic_load_balancer_listener");
  public get elasticLoadBalancerListener() {
    return this._elasticLoadBalancerListener;
  }

  // explanation_code - computed: true, optional: false, required: false
  public get explanationCode() {
    return this.getStringAttribute('explanation_code');
  }

  // ingress_route_table - computed: true, optional: false, required: false
  private _ingressRouteTable = new DataAwsccEc2NetworkInsightsAnalysisExplanationsIngressRouteTableOutputReference(this, "ingress_route_table");
  public get ingressRouteTable() {
    return this._ingressRouteTable;
  }

  // internet_gateway - computed: true, optional: false, required: false
  private _internetGateway = new DataAwsccEc2NetworkInsightsAnalysisExplanationsInternetGatewayOutputReference(this, "internet_gateway");
  public get internetGateway() {
    return this._internetGateway;
  }

  // load_balancer_arn - computed: true, optional: false, required: false
  public get loadBalancerArn() {
    return this.getStringAttribute('load_balancer_arn');
  }

  // load_balancer_listener_port - computed: true, optional: false, required: false
  public get loadBalancerListenerPort() {
    return this.getNumberAttribute('load_balancer_listener_port');
  }

  // load_balancer_target - computed: true, optional: false, required: false
  private _loadBalancerTarget = new DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetOutputReference(this, "load_balancer_target");
  public get loadBalancerTarget() {
    return this._loadBalancerTarget;
  }

  // load_balancer_target_group - computed: true, optional: false, required: false
  private _loadBalancerTargetGroup = new DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupOutputReference(this, "load_balancer_target_group");
  public get loadBalancerTargetGroup() {
    return this._loadBalancerTargetGroup;
  }

  // load_balancer_target_groups - computed: true, optional: false, required: false
  private _loadBalancerTargetGroups = new DataAwsccEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsList(this, "load_balancer_target_groups", false);
  public get loadBalancerTargetGroups() {
    return this._loadBalancerTargetGroups;
  }

  // load_balancer_target_port - computed: true, optional: false, required: false
  public get loadBalancerTargetPort() {
    return this.getNumberAttribute('load_balancer_target_port');
  }

  // missing_component - computed: true, optional: false, required: false
  public get missingComponent() {
    return this.getStringAttribute('missing_component');
  }

  // nat_gateway - computed: true, optional: false, required: false
  private _natGateway = new DataAwsccEc2NetworkInsightsAnalysisExplanationsNatGatewayOutputReference(this, "nat_gateway");
  public get natGateway() {
    return this._natGateway;
  }

  // network_interface - computed: true, optional: false, required: false
  private _networkInterface = new DataAwsccEc2NetworkInsightsAnalysisExplanationsNetworkInterfaceOutputReference(this, "network_interface");
  public get networkInterface() {
    return this._networkInterface;
  }

  // packet_field - computed: true, optional: false, required: false
  public get packetField() {
    return this.getStringAttribute('packet_field');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_ranges - computed: true, optional: false, required: false
  private _portRanges = new DataAwsccEc2NetworkInsightsAnalysisExplanationsPortRangesList(this, "port_ranges", false);
  public get portRanges() {
    return this._portRanges;
  }

  // prefix_list - computed: true, optional: false, required: false
  private _prefixList = new DataAwsccEc2NetworkInsightsAnalysisExplanationsPrefixListStructOutputReference(this, "prefix_list");
  public get prefixList() {
    return this._prefixList;
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return this.getListAttribute('protocols');
  }

  // route_table - computed: true, optional: false, required: false
  private _routeTable = new DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableOutputReference(this, "route_table");
  public get routeTable() {
    return this._routeTable;
  }

  // route_table_route - computed: true, optional: false, required: false
  private _routeTableRoute = new DataAwsccEc2NetworkInsightsAnalysisExplanationsRouteTableRouteOutputReference(this, "route_table_route");
  public get routeTableRoute() {
    return this._routeTableRoute;
  }

  // security_group - computed: true, optional: false, required: false
  private _securityGroup = new DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupOutputReference(this, "security_group");
  public get securityGroup() {
    return this._securityGroup;
  }

  // security_group_rule - computed: true, optional: false, required: false
  private _securityGroupRule = new DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupRuleOutputReference(this, "security_group_rule");
  public get securityGroupRule() {
    return this._securityGroupRule;
  }

  // security_groups - computed: true, optional: false, required: false
  private _securityGroups = new DataAwsccEc2NetworkInsightsAnalysisExplanationsSecurityGroupsList(this, "security_groups", false);
  public get securityGroups() {
    return this._securityGroups;
  }

  // source_vpc - computed: true, optional: false, required: false
  private _sourceVpc = new DataAwsccEc2NetworkInsightsAnalysisExplanationsSourceVpcOutputReference(this, "source_vpc");
  public get sourceVpc() {
    return this._sourceVpc;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet - computed: true, optional: false, required: false
  private _subnet = new DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }

  // subnet_route_table - computed: true, optional: false, required: false
  private _subnetRouteTable = new DataAwsccEc2NetworkInsightsAnalysisExplanationsSubnetRouteTableOutputReference(this, "subnet_route_table");
  public get subnetRouteTable() {
    return this._subnetRouteTable;
  }

  // vpc - computed: true, optional: false, required: false
  private _vpc = new DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }

  // vpc_endpoint - computed: true, optional: false, required: false
  private _vpcEndpoint = new DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcEndpointOutputReference(this, "vpc_endpoint");
  public get vpcEndpoint() {
    return this._vpcEndpoint;
  }

  // vpc_peering_connection - computed: true, optional: false, required: false
  private _vpcPeeringConnection = new DataAwsccEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionOutputReference(this, "vpc_peering_connection");
  public get vpcPeeringConnection() {
    return this._vpcPeeringConnection;
  }

  // vpn_connection - computed: true, optional: false, required: false
  private _vpnConnection = new DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnConnectionOutputReference(this, "vpn_connection");
  public get vpnConnection() {
    return this._vpnConnection;
  }

  // vpn_gateway - computed: true, optional: false, required: false
  private _vpnGateway = new DataAwsccEc2NetworkInsightsAnalysisExplanationsVpnGatewayOutputReference(this, "vpn_gateway");
  public get vpnGateway() {
    return this._vpnGateway;
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisExplanationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAnalysisExplanationsOutputReference {
    return new DataAwsccEc2NetworkInsightsAnalysisExplanationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange {
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRule {
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRuleToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRuleToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRule | undefined) {
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

  // egress - computed: true, optional: false, required: false
  public get egress() {
    return this.getBooleanAttribute('egress');
  }

  // port_range - computed: true, optional: false, required: false
  private _portRange = new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // rule_action - computed: true, optional: false, required: false
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }

  // rule_number - computed: true, optional: false, required: false
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponent {
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponentToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponentToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponent | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc {
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges {
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesOutputReference {
    return new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges {
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesOutputReference {
    return new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeader {
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_addresses - computed: true, optional: false, required: false
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }

  // destination_port_ranges - computed: true, optional: false, required: false
  private _destinationPortRanges = new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesList(this, "destination_port_ranges", false);
  public get destinationPortRanges() {
    return this._destinationPortRanges;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_addresses - computed: true, optional: false, required: false
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }

  // source_port_ranges - computed: true, optional: false, required: false
  private _sourcePortRanges = new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesList(this, "source_port_ranges", false);
  public get sourcePortRanges() {
    return this._sourcePortRanges;
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges {
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesOutputReference {
    return new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges {
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesOutputReference {
    return new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader {
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_addresses - computed: true, optional: false, required: false
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }

  // destination_port_ranges - computed: true, optional: false, required: false
  private _destinationPortRanges = new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesList(this, "destination_port_ranges", false);
  public get destinationPortRanges() {
    return this._destinationPortRanges;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_addresses - computed: true, optional: false, required: false
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }

  // source_port_ranges - computed: true, optional: false, required: false
  private _sourcePortRanges = new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesList(this, "source_port_ranges", false);
  public get sourcePortRanges() {
    return this._sourcePortRanges;
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute {
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_cidr - computed: true, optional: false, required: false
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }

  // destination_prefix_list_id - computed: true, optional: false, required: false
  public get destinationPrefixListId() {
    return this.getStringAttribute('destination_prefix_list_id');
  }

  // egress_only_internet_gateway_id - computed: true, optional: false, required: false
  public get egressOnlyInternetGatewayId() {
    return this.getStringAttribute('egress_only_internet_gateway_id');
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // nat_gateway_id - computed: true, optional: false, required: false
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // vpc_peering_connection_id - computed: true, optional: false, required: false
  public get vpcPeeringConnectionId() {
    return this.getStringAttribute('vpc_peering_connection_id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange {
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule {
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule | undefined) {
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

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // port_range - computed: true, optional: false, required: false
  private _portRange = new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }

  // prefix_list_id - computed: true, optional: false, required: false
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpc {
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpc | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnet {
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnetToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnetToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnet | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpc {
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpcToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpc | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisForwardPathComponents {
}

export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisForwardPathComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_rule - computed: true, optional: false, required: false
  private _aclRule = new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsAclRuleOutputReference(this, "acl_rule");
  public get aclRule() {
    return this._aclRule;
  }

  // component - computed: true, optional: false, required: false
  private _component = new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsComponentOutputReference(this, "component");
  public get component() {
    return this._component;
  }

  // destination_vpc - computed: true, optional: false, required: false
  private _destinationVpc = new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcOutputReference(this, "destination_vpc");
  public get destinationVpc() {
    return this._destinationVpc;
  }

  // inbound_header - computed: true, optional: false, required: false
  private _inboundHeader = new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderOutputReference(this, "inbound_header");
  public get inboundHeader() {
    return this._inboundHeader;
  }

  // outbound_header - computed: true, optional: false, required: false
  private _outboundHeader = new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderOutputReference(this, "outbound_header");
  public get outboundHeader() {
    return this._outboundHeader;
  }

  // route_table_route - computed: true, optional: false, required: false
  private _routeTableRoute = new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteOutputReference(this, "route_table_route");
  public get routeTableRoute() {
    return this._routeTableRoute;
  }

  // security_group_rule - computed: true, optional: false, required: false
  private _securityGroupRule = new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleOutputReference(this, "security_group_rule");
  public get securityGroupRule() {
    return this._securityGroupRule;
  }

  // sequence_number - computed: true, optional: false, required: false
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }

  // source_vpc - computed: true, optional: false, required: false
  private _sourceVpc = new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpcOutputReference(this, "source_vpc");
  public get sourceVpc() {
    return this._sourceVpc;
  }

  // subnet - computed: true, optional: false, required: false
  private _subnet = new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }

  // vpc - computed: true, optional: false, required: false
  private _vpc = new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutputReference {
    return new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange {
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRule {
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRuleToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRuleToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRule | undefined) {
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

  // egress - computed: true, optional: false, required: false
  public get egress() {
    return this.getBooleanAttribute('egress');
  }

  // port_range - computed: true, optional: false, required: false
  private _portRange = new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // rule_action - computed: true, optional: false, required: false
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }

  // rule_number - computed: true, optional: false, required: false
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponent {
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponentToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponentToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponent | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc {
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges {
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesOutputReference {
    return new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges {
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesOutputReference {
    return new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeader {
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_addresses - computed: true, optional: false, required: false
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }

  // destination_port_ranges - computed: true, optional: false, required: false
  private _destinationPortRanges = new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesList(this, "destination_port_ranges", false);
  public get destinationPortRanges() {
    return this._destinationPortRanges;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_addresses - computed: true, optional: false, required: false
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }

  // source_port_ranges - computed: true, optional: false, required: false
  private _sourcePortRanges = new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesList(this, "source_port_ranges", false);
  public get sourcePortRanges() {
    return this._sourcePortRanges;
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges {
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesOutputReference {
    return new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges {
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesOutputReference {
    return new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader {
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_addresses - computed: true, optional: false, required: false
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }

  // destination_port_ranges - computed: true, optional: false, required: false
  private _destinationPortRanges = new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesList(this, "destination_port_ranges", false);
  public get destinationPortRanges() {
    return this._destinationPortRanges;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_addresses - computed: true, optional: false, required: false
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }

  // source_port_ranges - computed: true, optional: false, required: false
  private _sourcePortRanges = new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesList(this, "source_port_ranges", false);
  public get sourcePortRanges() {
    return this._sourcePortRanges;
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute {
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_cidr - computed: true, optional: false, required: false
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }

  // destination_prefix_list_id - computed: true, optional: false, required: false
  public get destinationPrefixListId() {
    return this.getStringAttribute('destination_prefix_list_id');
  }

  // egress_only_internet_gateway_id - computed: true, optional: false, required: false
  public get egressOnlyInternetGatewayId() {
    return this.getStringAttribute('egress_only_internet_gateway_id');
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // nat_gateway_id - computed: true, optional: false, required: false
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // vpc_peering_connection_id - computed: true, optional: false, required: false
  public get vpcPeeringConnectionId() {
    return this.getStringAttribute('vpc_peering_connection_id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange {
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule {
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule | undefined) {
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

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // port_range - computed: true, optional: false, required: false
  private _portRange = new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }

  // prefix_list_id - computed: true, optional: false, required: false
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpc {
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpc | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnet {
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnetToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnetToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnet | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpc {
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpcToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpcToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpc | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisReturnPathComponents {
}

export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisReturnPathComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_rule - computed: true, optional: false, required: false
  private _aclRule = new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsAclRuleOutputReference(this, "acl_rule");
  public get aclRule() {
    return this._aclRule;
  }

  // component - computed: true, optional: false, required: false
  private _component = new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsComponentOutputReference(this, "component");
  public get component() {
    return this._component;
  }

  // destination_vpc - computed: true, optional: false, required: false
  private _destinationVpc = new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcOutputReference(this, "destination_vpc");
  public get destinationVpc() {
    return this._destinationVpc;
  }

  // inbound_header - computed: true, optional: false, required: false
  private _inboundHeader = new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderOutputReference(this, "inbound_header");
  public get inboundHeader() {
    return this._inboundHeader;
  }

  // outbound_header - computed: true, optional: false, required: false
  private _outboundHeader = new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderOutputReference(this, "outbound_header");
  public get outboundHeader() {
    return this._outboundHeader;
  }

  // route_table_route - computed: true, optional: false, required: false
  private _routeTableRoute = new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteOutputReference(this, "route_table_route");
  public get routeTableRoute() {
    return this._routeTableRoute;
  }

  // security_group_rule - computed: true, optional: false, required: false
  private _securityGroupRule = new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleOutputReference(this, "security_group_rule");
  public get securityGroupRule() {
    return this._securityGroupRule;
  }

  // sequence_number - computed: true, optional: false, required: false
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }

  // source_vpc - computed: true, optional: false, required: false
  private _sourceVpc = new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpcOutputReference(this, "source_vpc");
  public get sourceVpc() {
    return this._sourceVpc;
  }

  // subnet - computed: true, optional: false, required: false
  private _subnet = new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }

  // vpc - computed: true, optional: false, required: false
  private _vpc = new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
}

export class DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutputReference {
    return new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2NetworkInsightsAnalysisTags {
}

export function dataAwsccEc2NetworkInsightsAnalysisTagsToTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInsightsAnalysisTagsToHclTerraform(struct?: DataAwsccEc2NetworkInsightsAnalysisTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInsightsAnalysisTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2NetworkInsightsAnalysisTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInsightsAnalysisTags | undefined) {
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

export class DataAwsccEc2NetworkInsightsAnalysisTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2NetworkInsightsAnalysisTagsOutputReference {
    return new DataAwsccEc2NetworkInsightsAnalysisTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_network_insights_analysis awscc_ec2_network_insights_analysis}
*/
export class DataAwsccEc2NetworkInsightsAnalysis extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_network_insights_analysis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2NetworkInsightsAnalysis resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2NetworkInsightsAnalysis to import
  * @param importFromId The id of the existing DataAwsccEc2NetworkInsightsAnalysis that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_network_insights_analysis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2NetworkInsightsAnalysis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_network_insights_analysis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_network_insights_analysis awscc_ec2_network_insights_analysis} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2NetworkInsightsAnalysisConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2NetworkInsightsAnalysisConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_network_insights_analysis',
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

  // alternate_path_hints - computed: true, optional: false, required: false
  private _alternatePathHints = new DataAwsccEc2NetworkInsightsAnalysisAlternatePathHintsList(this, "alternate_path_hints", false);
  public get alternatePathHints() {
    return this._alternatePathHints;
  }

  // explanations - computed: true, optional: false, required: false
  private _explanations = new DataAwsccEc2NetworkInsightsAnalysisExplanationsList(this, "explanations", false);
  public get explanations() {
    return this._explanations;
  }

  // filter_in_arns - computed: true, optional: false, required: false
  public get filterInArns() {
    return this.getListAttribute('filter_in_arns');
  }

  // forward_path_components - computed: true, optional: false, required: false
  private _forwardPathComponents = new DataAwsccEc2NetworkInsightsAnalysisForwardPathComponentsList(this, "forward_path_components", false);
  public get forwardPathComponents() {
    return this._forwardPathComponents;
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

  // network_insights_analysis_arn - computed: true, optional: false, required: false
  public get networkInsightsAnalysisArn() {
    return this.getStringAttribute('network_insights_analysis_arn');
  }

  // network_insights_analysis_id - computed: true, optional: false, required: false
  public get networkInsightsAnalysisId() {
    return this.getStringAttribute('network_insights_analysis_id');
  }

  // network_insights_path_id - computed: true, optional: false, required: false
  public get networkInsightsPathId() {
    return this.getStringAttribute('network_insights_path_id');
  }

  // network_path_found - computed: true, optional: false, required: false
  public get networkPathFound() {
    return this.getBooleanAttribute('network_path_found');
  }

  // return_path_components - computed: true, optional: false, required: false
  private _returnPathComponents = new DataAwsccEc2NetworkInsightsAnalysisReturnPathComponentsList(this, "return_path_components", false);
  public get returnPathComponents() {
    return this._returnPathComponents;
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEc2NetworkInsightsAnalysisTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
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
