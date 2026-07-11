// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/route53recoverycontrol_safety_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccRoute53RecoverycontrolSafetyRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/route53recoverycontrol_safety_rule#id DataAwsccRoute53RecoverycontrolSafetyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule {
}

export function dataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleToTerraform(struct?: DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleToHclTerraform(struct?: DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asserted_controls - computed: true, optional: false, required: false
  public get assertedControls() {
    return this.getListAttribute('asserted_controls');
  }

  // wait_period_ms - computed: true, optional: false, required: false
  public get waitPeriodMs() {
    return this.getNumberAttribute('wait_period_ms');
  }
}
export interface DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule {
}

export function dataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleToTerraform(struct?: DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleToHclTerraform(struct?: DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gating_controls - computed: true, optional: false, required: false
  public get gatingControls() {
    return this.getListAttribute('gating_controls');
  }

  // target_controls - computed: true, optional: false, required: false
  public get targetControls() {
    return this.getListAttribute('target_controls');
  }

  // wait_period_ms - computed: true, optional: false, required: false
  public get waitPeriodMs() {
    return this.getNumberAttribute('wait_period_ms');
  }
}
export interface DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig {
}

export function dataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigToTerraform(struct?: DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigToHclTerraform(struct?: DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inverted - computed: true, optional: false, required: false
  public get inverted() {
    return this.getBooleanAttribute('inverted');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccRoute53RecoverycontrolSafetyRuleTags {
}

export function dataAwsccRoute53RecoverycontrolSafetyRuleTagsToTerraform(struct?: DataAwsccRoute53RecoverycontrolSafetyRuleTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRoute53RecoverycontrolSafetyRuleTagsToHclTerraform(struct?: DataAwsccRoute53RecoverycontrolSafetyRuleTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRoute53RecoverycontrolSafetyRuleTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRoute53RecoverycontrolSafetyRuleTags | undefined) {
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

export class DataAwsccRoute53RecoverycontrolSafetyRuleTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference {
    return new DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/route53recoverycontrol_safety_rule awscc_route53recoverycontrol_safety_rule}
*/
export class DataAwsccRoute53RecoverycontrolSafetyRule extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_route53recoverycontrol_safety_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccRoute53RecoverycontrolSafetyRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccRoute53RecoverycontrolSafetyRule to import
  * @param importFromId The id of the existing DataAwsccRoute53RecoverycontrolSafetyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/route53recoverycontrol_safety_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccRoute53RecoverycontrolSafetyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53recoverycontrol_safety_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/route53recoverycontrol_safety_rule awscc_route53recoverycontrol_safety_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRoute53RecoverycontrolSafetyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRoute53RecoverycontrolSafetyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53recoverycontrol_safety_rule',
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

  // assertion_rule - computed: true, optional: false, required: false
  private _assertionRule = new DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference(this, "assertion_rule");
  public get assertionRule() {
    return this._assertionRule;
  }

  // control_panel_arn - computed: true, optional: false, required: false
  public get controlPanelArn() {
    return this.getStringAttribute('control_panel_arn');
  }

  // gating_rule - computed: true, optional: false, required: false
  private _gatingRule = new DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference(this, "gating_rule");
  public get gatingRule() {
    return this._gatingRule;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rule_config - computed: true, optional: false, required: false
  private _ruleConfig = new DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference(this, "rule_config");
  public get ruleConfig() {
    return this._ruleConfig;
  }

  // safety_rule_arn - computed: true, optional: false, required: false
  public get safetyRuleArn() {
    return this.getStringAttribute('safety_rule_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccRoute53RecoverycontrolSafetyRuleTagsList(this, "tags", false);
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
