// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/route53resolver_firewall_rule_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccRoute53ResolverFirewallRuleGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/route53resolver_firewall_rule_group#id DataAwsccRoute53ResolverFirewallRuleGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory {
}

export function dataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryToTerraform(struct?: DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryToHclTerraform(struct?: DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }
}
export interface DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory {
}

export function dataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryToTerraform(struct?: DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryToHclTerraform(struct?: DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }
}
export interface DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection {
}

export function dataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionToTerraform(struct?: DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionToHclTerraform(struct?: DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // partner - computed: true, optional: false, required: false
  public get partner() {
    return this.getStringAttribute('partner');
  }
}
export interface DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType {
}

export function dataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeToTerraform(struct?: DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeToHclTerraform(struct?: DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // firewall_advanced_content_category - computed: true, optional: false, required: false
  private _firewallAdvancedContentCategory = new DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference(this, "firewall_advanced_content_category");
  public get firewallAdvancedContentCategory() {
    return this._firewallAdvancedContentCategory;
  }

  // firewall_advanced_threat_category - computed: true, optional: false, required: false
  private _firewallAdvancedThreatCategory = new DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference(this, "firewall_advanced_threat_category");
  public get firewallAdvancedThreatCategory() {
    return this._firewallAdvancedThreatCategory;
  }

  // partner_threat_protection - computed: true, optional: false, required: false
  private _partnerThreatProtection = new DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference(this, "partner_threat_protection");
  public get partnerThreatProtection() {
    return this._partnerThreatProtection;
  }
}
export interface DataAwsccRoute53ResolverFirewallRuleGroupFirewallRules {
}

export function dataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesToTerraform(struct?: DataAwsccRoute53ResolverFirewallRuleGroupFirewallRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesToHclTerraform(struct?: DataAwsccRoute53ResolverFirewallRuleGroupFirewallRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRoute53ResolverFirewallRuleGroupFirewallRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRoute53ResolverFirewallRuleGroupFirewallRules | undefined) {
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

  // block_override_dns_type - computed: true, optional: false, required: false
  public get blockOverrideDnsType() {
    return this.getStringAttribute('block_override_dns_type');
  }

  // block_override_domain - computed: true, optional: false, required: false
  public get blockOverrideDomain() {
    return this.getStringAttribute('block_override_domain');
  }

  // block_override_ttl - computed: true, optional: false, required: false
  public get blockOverrideTtl() {
    return this.getNumberAttribute('block_override_ttl');
  }

  // block_response - computed: true, optional: false, required: false
  public get blockResponse() {
    return this.getStringAttribute('block_response');
  }

  // confidence_threshold - computed: true, optional: false, required: false
  public get confidenceThreshold() {
    return this.getStringAttribute('confidence_threshold');
  }

  // dns_threat_protection - computed: true, optional: false, required: false
  public get dnsThreatProtection() {
    return this.getStringAttribute('dns_threat_protection');
  }

  // firewall_domain_list_id - computed: true, optional: false, required: false
  public get firewallDomainListId() {
    return this.getStringAttribute('firewall_domain_list_id');
  }

  // firewall_domain_redirection_action - computed: true, optional: false, required: false
  public get firewallDomainRedirectionAction() {
    return this.getStringAttribute('firewall_domain_redirection_action');
  }

  // firewall_rule_type - computed: true, optional: false, required: false
  private _firewallRuleType = new DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference(this, "firewall_rule_type");
  public get firewallRuleType() {
    return this._firewallRuleType;
  }

  // firewall_threat_protection_id - computed: true, optional: false, required: false
  public get firewallThreatProtectionId() {
    return this.getStringAttribute('firewall_threat_protection_id');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // qtype - computed: true, optional: false, required: false
  public get qtype() {
    return this.getStringAttribute('qtype');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesOutputReference {
    return new DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRoute53ResolverFirewallRuleGroupTags {
}

export function dataAwsccRoute53ResolverFirewallRuleGroupTagsToTerraform(struct?: DataAwsccRoute53ResolverFirewallRuleGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRoute53ResolverFirewallRuleGroupTagsToHclTerraform(struct?: DataAwsccRoute53ResolverFirewallRuleGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRoute53ResolverFirewallRuleGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRoute53ResolverFirewallRuleGroupTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRoute53ResolverFirewallRuleGroupTags | undefined) {
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

export class DataAwsccRoute53ResolverFirewallRuleGroupTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRoute53ResolverFirewallRuleGroupTagsOutputReference {
    return new DataAwsccRoute53ResolverFirewallRuleGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/route53resolver_firewall_rule_group awscc_route53resolver_firewall_rule_group}
*/
export class DataAwsccRoute53ResolverFirewallRuleGroup extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_route53resolver_firewall_rule_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccRoute53ResolverFirewallRuleGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccRoute53ResolverFirewallRuleGroup to import
  * @param importFromId The id of the existing DataAwsccRoute53ResolverFirewallRuleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/route53resolver_firewall_rule_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccRoute53ResolverFirewallRuleGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53resolver_firewall_rule_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/route53resolver_firewall_rule_group awscc_route53resolver_firewall_rule_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRoute53ResolverFirewallRuleGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRoute53ResolverFirewallRuleGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53resolver_firewall_rule_group',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // creator_request_id - computed: true, optional: false, required: false
  public get creatorRequestId() {
    return this.getStringAttribute('creator_request_id');
  }

  // firewall_rule_group_id - computed: true, optional: false, required: false
  public get firewallRuleGroupId() {
    return this.getStringAttribute('firewall_rule_group_id');
  }

  // firewall_rules - computed: true, optional: false, required: false
  private _firewallRules = new DataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesList(this, "firewall_rules", true);
  public get firewallRules() {
    return this._firewallRules;
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

  // modification_time - computed: true, optional: false, required: false
  public get modificationTime() {
    return this.getStringAttribute('modification_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // rule_count - computed: true, optional: false, required: false
  public get ruleCount() {
    return this.getNumberAttribute('rule_count');
  }

  // share_status - computed: true, optional: false, required: false
  public get shareStatus() {
    return this.getStringAttribute('share_status');
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
  private _tags = new DataAwsccRoute53ResolverFirewallRuleGroupTagsList(this, "tags", true);
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
