// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_ipam_prefix_list_resolver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2IpamPrefixListResolverConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_ipam_prefix_list_resolver#id DataAwsccEc2IpamPrefixListResolver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag {
}

export function dataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagToTerraform(struct?: DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagToHclTerraform(struct?: DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag | undefined) {
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
export interface DataAwsccEc2IpamPrefixListResolverRulesConditions {
}

export function dataAwsccEc2IpamPrefixListResolverRulesConditionsToTerraform(struct?: DataAwsccEc2IpamPrefixListResolverRulesConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2IpamPrefixListResolverRulesConditionsToHclTerraform(struct?: DataAwsccEc2IpamPrefixListResolverRulesConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2IpamPrefixListResolverRulesConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2IpamPrefixListResolverRulesConditions | undefined) {
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

  // ipam_pool_id - computed: true, optional: false, required: false
  public get ipamPoolId() {
    return this.getStringAttribute('ipam_pool_id');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_owner - computed: true, optional: false, required: false
  public get resourceOwner() {
    return this.getStringAttribute('resource_owner');
  }

  // resource_region - computed: true, optional: false, required: false
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
  }

  // resource_tag - computed: true, optional: false, required: false
  private _resourceTag = new DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference(this, "resource_tag");
  public get resourceTag() {
    return this._resourceTag;
  }
}

export class DataAwsccEc2IpamPrefixListResolverRulesConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference {
    return new DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2IpamPrefixListResolverRules {
}

export function dataAwsccEc2IpamPrefixListResolverRulesToTerraform(struct?: DataAwsccEc2IpamPrefixListResolverRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2IpamPrefixListResolverRulesToHclTerraform(struct?: DataAwsccEc2IpamPrefixListResolverRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2IpamPrefixListResolverRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2IpamPrefixListResolverRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2IpamPrefixListResolverRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataAwsccEc2IpamPrefixListResolverRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // ipam_scope_id - computed: true, optional: false, required: false
  public get ipamScopeId() {
    return this.getStringAttribute('ipam_scope_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }

  // static_cidr - computed: true, optional: false, required: false
  public get staticCidr() {
    return this.getStringAttribute('static_cidr');
  }
}

export class DataAwsccEc2IpamPrefixListResolverRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2IpamPrefixListResolverRulesOutputReference {
    return new DataAwsccEc2IpamPrefixListResolverRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEc2IpamPrefixListResolverTags {
}

export function dataAwsccEc2IpamPrefixListResolverTagsToTerraform(struct?: DataAwsccEc2IpamPrefixListResolverTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2IpamPrefixListResolverTagsToHclTerraform(struct?: DataAwsccEc2IpamPrefixListResolverTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2IpamPrefixListResolverTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2IpamPrefixListResolverTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2IpamPrefixListResolverTags | undefined) {
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

export class DataAwsccEc2IpamPrefixListResolverTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2IpamPrefixListResolverTagsOutputReference {
    return new DataAwsccEc2IpamPrefixListResolverTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_ipam_prefix_list_resolver awscc_ec2_ipam_prefix_list_resolver}
*/
export class DataAwsccEc2IpamPrefixListResolver extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_ipam_prefix_list_resolver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2IpamPrefixListResolver resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2IpamPrefixListResolver to import
  * @param importFromId The id of the existing DataAwsccEc2IpamPrefixListResolver that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_ipam_prefix_list_resolver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2IpamPrefixListResolver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_ipam_prefix_list_resolver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_ipam_prefix_list_resolver awscc_ec2_ipam_prefix_list_resolver} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2IpamPrefixListResolverConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2IpamPrefixListResolverConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_ipam_prefix_list_resolver',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.91.0'
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

  // address_family - computed: true, optional: false, required: false
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // ipam_arn - computed: true, optional: false, required: false
  public get ipamArn() {
    return this.getStringAttribute('ipam_arn');
  }

  // ipam_id - computed: true, optional: false, required: false
  public get ipamId() {
    return this.getStringAttribute('ipam_id');
  }

  // ipam_prefix_list_resolver_arn - computed: true, optional: false, required: false
  public get ipamPrefixListResolverArn() {
    return this.getStringAttribute('ipam_prefix_list_resolver_arn');
  }

  // ipam_prefix_list_resolver_id - computed: true, optional: false, required: false
  public get ipamPrefixListResolverId() {
    return this.getStringAttribute('ipam_prefix_list_resolver_id');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAwsccEc2IpamPrefixListResolverRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEc2IpamPrefixListResolverTagsList(this, "tags", true);
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
