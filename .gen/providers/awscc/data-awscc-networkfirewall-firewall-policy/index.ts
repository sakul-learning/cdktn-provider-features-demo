// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/networkfirewall_firewall_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccNetworkfirewallFirewallPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/networkfirewall_firewall_policy#id DataAwsccNetworkfirewallFirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables {
}

export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesToHclTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getListAttribute('definition');
  }
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference {
    return new DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables {
}

export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesToHclTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rule_variables - computed: true, optional: false, required: false
  private _ruleVariables = new DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap(this, "rule_variables");
  public get ruleVariables() {
    return this._ruleVariables;
  }
}
export interface DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts {
}

export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsToHclTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tcp_idle_timeout_seconds - computed: true, optional: false, required: false
  public get tcpIdleTimeoutSeconds() {
    return this.getNumberAttribute('tcp_idle_timeout_seconds');
  }
}
export interface DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions {
}

export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsToHclTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flow_timeouts - computed: true, optional: false, required: false
  private _flowTimeouts = new DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference(this, "flow_timeouts");
  public get flowTimeouts() {
    return this._flowTimeouts;
  }

  // rule_order - computed: true, optional: false, required: false
  public get ruleOrder() {
    return this.getStringAttribute('rule_order');
  }

  // stream_exception_policy - computed: true, optional: false, required: false
  public get streamExceptionPolicy() {
    return this.getStringAttribute('stream_exception_policy');
  }
}
export interface DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride {
}

export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideToHclTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }
}
export interface DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences {
}

export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesToHclTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deep_threat_inspection - computed: true, optional: false, required: false
  public get deepThreatInspection() {
    return this.getBooleanAttribute('deep_threat_inspection');
  }

  // override - computed: true, optional: false, required: false
  private _override = new DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference {
    return new DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions {
}

export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsToHclTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions | undefined) {
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

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference {
    return new DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction {
}

export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionToHclTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
}
export interface DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition {
}

export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionToHclTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // publish_metric_action - computed: true, optional: false, required: false
  private _publishMetricAction = new DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference(this, "publish_metric_action");
  public get publishMetricAction() {
    return this._publishMetricAction;
  }
}
export interface DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions {
}

export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsToHclTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_definition - computed: true, optional: false, required: false
  private _actionDefinition = new DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference(this, "action_definition");
  public get actionDefinition() {
    return this._actionDefinition;
  }

  // action_name - computed: true, optional: false, required: false
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference {
    return new DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences {
}

export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesToHclTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference {
    return new DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccNetworkfirewallFirewallPolicyFirewallPolicy {
}

export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyToHclTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNetworkfirewallFirewallPolicyFirewallPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_tls_session_holding - computed: true, optional: false, required: false
  public get enableTlsSessionHolding() {
    return this.getBooleanAttribute('enable_tls_session_holding');
  }

  // policy_variables - computed: true, optional: false, required: false
  private _policyVariables = new DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference(this, "policy_variables");
  public get policyVariables() {
    return this._policyVariables;
  }

  // stateful_default_actions - computed: true, optional: false, required: false
  public get statefulDefaultActions() {
    return this.getListAttribute('stateful_default_actions');
  }

  // stateful_engine_options - computed: true, optional: false, required: false
  private _statefulEngineOptions = new DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference(this, "stateful_engine_options");
  public get statefulEngineOptions() {
    return this._statefulEngineOptions;
  }

  // stateful_rule_group_references - computed: true, optional: false, required: false
  private _statefulRuleGroupReferences = new DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList(this, "stateful_rule_group_references", false);
  public get statefulRuleGroupReferences() {
    return this._statefulRuleGroupReferences;
  }

  // stateless_custom_actions - computed: true, optional: false, required: false
  private _statelessCustomActions = new DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList(this, "stateless_custom_actions", false);
  public get statelessCustomActions() {
    return this._statelessCustomActions;
  }

  // stateless_default_actions - computed: true, optional: false, required: false
  public get statelessDefaultActions() {
    return this.getListAttribute('stateless_default_actions');
  }

  // stateless_fragment_default_actions - computed: true, optional: false, required: false
  public get statelessFragmentDefaultActions() {
    return this.getListAttribute('stateless_fragment_default_actions');
  }

  // stateless_rule_group_references - computed: true, optional: false, required: false
  private _statelessRuleGroupReferences = new DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList(this, "stateless_rule_group_references", false);
  public get statelessRuleGroupReferences() {
    return this._statelessRuleGroupReferences;
  }

  // tls_inspection_configuration_arn - computed: true, optional: false, required: false
  public get tlsInspectionConfigurationArn() {
    return this.getStringAttribute('tls_inspection_configuration_arn');
  }
}
export interface DataAwsccNetworkfirewallFirewallPolicyTags {
}

export function dataAwsccNetworkfirewallFirewallPolicyTagsToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallFirewallPolicyTagsToHclTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNetworkfirewallFirewallPolicyTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallFirewallPolicyTags | undefined) {
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

export class DataAwsccNetworkfirewallFirewallPolicyTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference {
    return new DataAwsccNetworkfirewallFirewallPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/networkfirewall_firewall_policy awscc_networkfirewall_firewall_policy}
*/
export class DataAwsccNetworkfirewallFirewallPolicy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_networkfirewall_firewall_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccNetworkfirewallFirewallPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccNetworkfirewallFirewallPolicy to import
  * @param importFromId The id of the existing DataAwsccNetworkfirewallFirewallPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/networkfirewall_firewall_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccNetworkfirewallFirewallPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkfirewall_firewall_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/networkfirewall_firewall_policy awscc_networkfirewall_firewall_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccNetworkfirewallFirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccNetworkfirewallFirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkfirewall_firewall_policy',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // firewall_policy - computed: true, optional: false, required: false
  private _firewallPolicy = new DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyOutputReference(this, "firewall_policy");
  public get firewallPolicy() {
    return this._firewallPolicy;
  }

  // firewall_policy_arn - computed: true, optional: false, required: false
  public get firewallPolicyArn() {
    return this.getStringAttribute('firewall_policy_arn');
  }

  // firewall_policy_id - computed: true, optional: false, required: false
  public get firewallPolicyId() {
    return this.getStringAttribute('firewall_policy_id');
  }

  // firewall_policy_name - computed: true, optional: false, required: false
  public get firewallPolicyName() {
    return this.getStringAttribute('firewall_policy_name');
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

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccNetworkfirewallFirewallPolicyTagsList(this, "tags", true);
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
