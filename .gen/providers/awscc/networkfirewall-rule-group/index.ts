// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkfirewallRuleGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#capacity NetworkfirewallRuleGroup#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#description NetworkfirewallRuleGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#rule_group NetworkfirewallRuleGroup#rule_group}
  */
  readonly ruleGroup?: NetworkfirewallRuleGroupRuleGroup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#rule_group_name NetworkfirewallRuleGroup#rule_group_name}
  */
  readonly ruleGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#summary_configuration NetworkfirewallRuleGroup#summary_configuration}
  */
  readonly summaryConfiguration?: NetworkfirewallRuleGroupSummaryConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#tags NetworkfirewallRuleGroup#tags}
  */
  readonly tags?: NetworkfirewallRuleGroupTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#type NetworkfirewallRuleGroup#type}
  */
  readonly type: string;
}
export interface NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences {
  /**
  * A resource ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#reference_arn NetworkfirewallRuleGroup#reference_arn}
  */
  readonly referenceArn?: string;
}

export function networkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    reference_arn: cdktn.stringToTerraform(struct!.referenceArn),
  }
}


export function networkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    reference_arn: {
      value: cdktn.stringToHclTerraform(struct!.referenceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referenceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceArn = this._referenceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._referenceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._referenceArn = value.referenceArn;
    }
  }

  // reference_arn - computed: true, optional: true, required: false
  private _referenceArn?: string; 
  public get referenceArn() {
    return this.getStringAttribute('reference_arn');
  }
  public set referenceArn(value: string) {
    this._referenceArn = value;
  }
  public resetReferenceArn() {
    this._referenceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceArnInput() {
    return this._referenceArn;
  }
}

export class NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences } | cdktn.IResolvable

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
  public get(key: string): NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupReferenceSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#ip_set_references NetworkfirewallRuleGroup#ip_set_references}
  */
  readonly ipSetReferences?: { [key: string]: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences } | cdktn.IResolvable;
}

export function networkfirewallRuleGroupRuleGroupReferenceSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupReferenceSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_set_references: cdktn.hashMapper(networkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesToTerraform)(struct!.ipSetReferences),
  }
}


export function networkfirewallRuleGroupRuleGroupReferenceSetsToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupReferenceSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_set_references: {
      value: cdktn.hashMapperHcl(networkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesToHclTerraform)(struct!.ipSetReferences),
      isBlock: true,
      type: "map",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupReferenceSets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipSetReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSetReferences = this._ipSetReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupReferenceSets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipSetReferences.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipSetReferences.internalValue = value.ipSetReferences;
    }
  }

  // ip_set_references - computed: true, optional: true, required: false
  private _ipSetReferences = new NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap(this, "ip_set_references");
  public get ipSetReferences() {
    return this._ipSetReferences;
  }
  public putIpSetReferences(value: { [key: string]: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences } | cdktn.IResolvable) {
    this._ipSetReferences.internalValue = value;
  }
  public resetIpSetReferences() {
    this._ipSetReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetReferencesInput() {
    return this._ipSetReferences.internalValue;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#definition NetworkfirewallRuleGroup#definition}
  */
  readonly definition?: string[];
}

export function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.definition),
  }
}


export function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.definition),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
    }
  }

  // definition - computed: true, optional: true, required: false
  private _definition?: string[]; 
  public get definition() {
    return this.getListAttribute('definition');
  }
  public set definition(value: string[]) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets } | cdktn.IResolvable

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
  public get(key: string): NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#definition NetworkfirewallRuleGroup#definition}
  */
  readonly definition?: string[];
}

export function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.definition),
  }
}


export function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.definition),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
    }
  }

  // definition - computed: true, optional: true, required: false
  private _definition?: string[]; 
  public get definition() {
    return this.getListAttribute('definition');
  }
  public set definition(value: string[]) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets } | cdktn.IResolvable

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
  public get(key: string): NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#ip_sets NetworkfirewallRuleGroup#ip_sets}
  */
  readonly ipSets?: { [key: string]: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets } | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#port_sets NetworkfirewallRuleGroup#port_sets}
  */
  readonly portSets?: { [key: string]: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets } | cdktn.IResolvable;
}

export function networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_sets: cdktn.hashMapper(networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform)(struct!.ipSets),
    port_sets: cdktn.hashMapper(networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform)(struct!.portSets),
  }
}


export function networkfirewallRuleGroupRuleGroupRuleVariablesToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_sets: {
      value: cdktn.hashMapperHcl(networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToHclTerraform)(struct!.ipSets),
      isBlock: true,
      type: "map",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap",
    },
    port_sets: {
      value: cdktn.hashMapperHcl(networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToHclTerraform)(struct!.portSets),
      isBlock: true,
      type: "map",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRuleVariables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSets = this._ipSets?.internalValue;
    }
    if (this._portSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSets = this._portSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRuleVariables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipSets.internalValue = undefined;
      this._portSets.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipSets.internalValue = value.ipSets;
      this._portSets.internalValue = value.portSets;
    }
  }

  // ip_sets - computed: true, optional: true, required: false
  private _ipSets = new NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap(this, "ip_sets");
  public get ipSets() {
    return this._ipSets;
  }
  public putIpSets(value: { [key: string]: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets } | cdktn.IResolvable) {
    this._ipSets.internalValue = value;
  }
  public resetIpSets() {
    this._ipSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetsInput() {
    return this._ipSets.internalValue;
  }

  // port_sets - computed: true, optional: true, required: false
  private _portSets = new NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap(this, "port_sets");
  public get portSets() {
    return this._portSets;
  }
  public putPortSets(value: { [key: string]: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets } | cdktn.IResolvable) {
    this._portSets.internalValue = value;
  }
  public resetPortSets() {
    this._portSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSetsInput() {
    return this._portSets.internalValue;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#generated_rules_type NetworkfirewallRuleGroup#generated_rules_type}
  */
  readonly generatedRulesType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#target_types NetworkfirewallRuleGroup#target_types}
  */
  readonly targetTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#targets NetworkfirewallRuleGroup#targets}
  */
  readonly targets?: string[];
}

export function networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    generated_rules_type: cdktn.stringToTerraform(struct!.generatedRulesType),
    target_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetTypes),
    targets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targets),
  }
}


export function networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    generated_rules_type: {
      value: cdktn.stringToHclTerraform(struct!.generatedRulesType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    targets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generatedRulesType !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedRulesType = this._generatedRulesType;
    }
    if (this._targetTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTypes = this._targetTypes;
    }
    if (this._targets !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generatedRulesType = undefined;
      this._targetTypes = undefined;
      this._targets = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generatedRulesType = value.generatedRulesType;
      this._targetTypes = value.targetTypes;
      this._targets = value.targets;
    }
  }

  // generated_rules_type - computed: true, optional: true, required: false
  private _generatedRulesType?: string; 
  public get generatedRulesType() {
    return this.getStringAttribute('generated_rules_type');
  }
  public set generatedRulesType(value: string) {
    this._generatedRulesType = value;
  }
  public resetGeneratedRulesType() {
    this._generatedRulesType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedRulesTypeInput() {
    return this._generatedRulesType;
  }

  // target_types - computed: true, optional: true, required: false
  private _targetTypes?: string[]; 
  public get targetTypes() {
    return this.getListAttribute('target_types');
  }
  public set targetTypes(value: string[]) {
    this._targetTypes = value;
  }
  public resetTargetTypes() {
    this._targetTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypesInput() {
    return this._targetTypes;
  }

  // targets - computed: true, optional: true, required: false
  private _targets?: string[]; 
  public get targets() {
    return this.getListAttribute('targets');
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#destination NetworkfirewallRuleGroup#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#destination_port NetworkfirewallRuleGroup#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#direction NetworkfirewallRuleGroup#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#protocol NetworkfirewallRuleGroup#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#source NetworkfirewallRuleGroup#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#source_port NetworkfirewallRuleGroup#source_port}
  */
  readonly sourcePort?: string;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
    destination_port: cdktn.stringToTerraform(struct!.destinationPort),
    direction: cdktn.stringToTerraform(struct!.direction),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    source: cdktn.stringToTerraform(struct!.source),
    source_port: cdktn.stringToTerraform(struct!.sourcePort),
  }
}


export function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktn.stringToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktn.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._destinationPort = undefined;
      this._direction = undefined;
      this._protocol = undefined;
      this._source = undefined;
      this._sourcePort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._destinationPort = value.destinationPort;
      this._direction = value.direction;
      this._protocol = value.protocol;
      this._source = value.source;
      this._sourcePort = value.sourcePort;
    }
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_port - computed: true, optional: true, required: false
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_port - computed: true, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#keyword NetworkfirewallRuleGroup#keyword}
  */
  readonly keyword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#settings NetworkfirewallRuleGroup#settings}
  */
  readonly settings?: string[];
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    keyword: cdktn.stringToTerraform(struct!.keyword),
    settings: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.settings),
  }
}


export function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    keyword: {
      value: cdktn.stringToHclTerraform(struct!.keyword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.settings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyword !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyword = this._keyword;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyword = undefined;
      this._settings = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyword = value.keyword;
      this._settings = value.settings;
    }
  }

  // keyword - computed: true, optional: true, required: false
  private _keyword?: string; 
  public get keyword() {
    return this.getStringAttribute('keyword');
  }
  public set keyword(value: string) {
    this._keyword = value;
  }
  public resetKeyword() {
    this._keyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword;
  }

  // settings - computed: true, optional: true, required: false
  private _settings?: string[]; 
  public get settings() {
    return this.getListAttribute('settings');
  }
  public set settings(value: string[]) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList extends cdktn.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions[] | cdktn.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#action NetworkfirewallRuleGroup#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#header NetworkfirewallRuleGroup#header}
  */
  readonly header?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#rule_options NetworkfirewallRuleGroup#rule_options}
  */
  readonly ruleOptions?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions[] | cdktn.IResolvable;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    header: networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderToTerraform(struct!.header),
    rule_options: cdktn.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsToTerraform, false)(struct!.ruleOptions),
  }
}


export function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader",
    },
    rule_options: {
      value: cdktn.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsToHclTerraform, false)(struct!.ruleOptions),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._ruleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleOptions = this._ruleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._header.internalValue = undefined;
      this._ruleOptions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._header.internalValue = value.header;
      this._ruleOptions.internalValue = value.ruleOptions;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // header - computed: true, optional: true, required: false
  private _header = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // rule_options - computed: true, optional: true, required: false
  private _ruleOptions = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList(this, "rule_options", false);
  public get ruleOptions() {
    return this._ruleOptions;
  }
  public putRuleOptions(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions[] | cdktn.IResolvable) {
    this._ruleOptions.internalValue = value;
  }
  public resetRuleOptions() {
    this._ruleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOptionsInput() {
    return this._ruleOptions.internalValue;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList extends cdktn.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules[] | cdktn.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#value NetworkfirewallRuleGroup#value}
  */
  readonly value?: string;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList extends cdktn.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions[] | cdktn.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#dimensions NetworkfirewallRuleGroup#dimensions}
  */
  readonly dimensions?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions[] | cdktn.IResolvable;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dimensions: cdktn.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform, false)(struct!.dimensions),
  }
}


export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dimensions: {
      value: cdktn.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions[] | cdktn.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#publish_metric_action NetworkfirewallRuleGroup#publish_metric_action}
  */
  readonly publishMetricAction?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    publish_metric_action: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionToTerraform(struct!.publishMetricAction),
  }
}


export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    publish_metric_action: {
      value: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionToHclTerraform(struct!.publishMetricAction),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publishMetricAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishMetricAction = this._publishMetricAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._publishMetricAction.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._publishMetricAction.internalValue = value.publishMetricAction;
    }
  }

  // publish_metric_action - computed: true, optional: true, required: false
  private _publishMetricAction = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference(this, "publish_metric_action");
  public get publishMetricAction() {
    return this._publishMetricAction;
  }
  public putPublishMetricAction(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction) {
    this._publishMetricAction.internalValue = value;
  }
  public resetPublishMetricAction() {
    this._publishMetricAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishMetricActionInput() {
    return this._publishMetricAction.internalValue;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#action_definition NetworkfirewallRuleGroup#action_definition}
  */
  readonly actionDefinition?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#action_name NetworkfirewallRuleGroup#action_name}
  */
  readonly actionName?: string;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_definition: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionToTerraform(struct!.actionDefinition),
    action_name: cdktn.stringToTerraform(struct!.actionName),
  }
}


export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_definition: {
      value: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionToHclTerraform(struct!.actionDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition",
    },
    action_name: {
      value: cdktn.stringToHclTerraform(struct!.actionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionDefinition = this._actionDefinition?.internalValue;
    }
    if (this._actionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionName = this._actionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionDefinition.internalValue = undefined;
      this._actionName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionDefinition.internalValue = value.actionDefinition;
      this._actionName = value.actionName;
    }
  }

  // action_definition - computed: true, optional: true, required: false
  private _actionDefinition = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference(this, "action_definition");
  public get actionDefinition() {
    return this._actionDefinition;
  }
  public putActionDefinition(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition) {
    this._actionDefinition.internalValue = value;
  }
  public resetActionDefinition() {
    this._actionDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDefinitionInput() {
    return this._actionDefinition.internalValue;
  }

  // action_name - computed: true, optional: true, required: false
  private _actionName?: string; 
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
  public set actionName(value: string) {
    this._actionName = value;
  }
  public resetActionName() {
    this._actionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNameInput() {
    return this._actionName;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList extends cdktn.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions[] | cdktn.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#from_port NetworkfirewallRuleGroup#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#to_port NetworkfirewallRuleGroup#to_port}
  */
  readonly toPort?: number;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from_port: cdktn.numberToTerraform(struct!.fromPort),
    to_port: cdktn.numberToTerraform(struct!.toPort),
  }
}


export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from_port: {
      value: cdktn.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_port: {
      value: cdktn.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: true, optional: true, required: false
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  public resetFromPort() {
    this._fromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: true, optional: true, required: false
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList extends cdktn.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts[] | cdktn.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#address_definition NetworkfirewallRuleGroup#address_definition}
  */
  readonly addressDefinition?: string;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_definition: cdktn.stringToTerraform(struct!.addressDefinition),
  }
}


export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_definition: {
      value: cdktn.stringToHclTerraform(struct!.addressDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressDefinition = this._addressDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressDefinition = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressDefinition = value.addressDefinition;
    }
  }

  // address_definition - computed: true, optional: true, required: false
  private _addressDefinition?: string; 
  public get addressDefinition() {
    return this.getStringAttribute('address_definition');
  }
  public set addressDefinition(value: string) {
    this._addressDefinition = value;
  }
  public resetAddressDefinition() {
    this._addressDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressDefinitionInput() {
    return this._addressDefinition;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList extends cdktn.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations[] | cdktn.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#from_port NetworkfirewallRuleGroup#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#to_port NetworkfirewallRuleGroup#to_port}
  */
  readonly toPort?: number;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from_port: cdktn.numberToTerraform(struct!.fromPort),
    to_port: cdktn.numberToTerraform(struct!.toPort),
  }
}


export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    from_port: {
      value: cdktn.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to_port: {
      value: cdktn.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: true, optional: true, required: false
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  public resetFromPort() {
    this._fromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: true, optional: true, required: false
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList extends cdktn.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts[] | cdktn.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#address_definition NetworkfirewallRuleGroup#address_definition}
  */
  readonly addressDefinition?: string;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_definition: cdktn.stringToTerraform(struct!.addressDefinition),
  }
}


export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_definition: {
      value: cdktn.stringToHclTerraform(struct!.addressDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressDefinition = this._addressDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressDefinition = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressDefinition = value.addressDefinition;
    }
  }

  // address_definition - computed: true, optional: true, required: false
  private _addressDefinition?: string; 
  public get addressDefinition() {
    return this.getStringAttribute('address_definition');
  }
  public set addressDefinition(value: string) {
    this._addressDefinition = value;
  }
  public resetAddressDefinition() {
    this._addressDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressDefinitionInput() {
    return this._addressDefinition;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList extends cdktn.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources[] | cdktn.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#flags NetworkfirewallRuleGroup#flags}
  */
  readonly flags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#masks NetworkfirewallRuleGroup#masks}
  */
  readonly masks?: string[];
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    flags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.flags),
    masks: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.masks),
  }
}


export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    flags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.flags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    masks: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.masks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._masks !== undefined) {
      hasAnyValues = true;
      internalValueResult.masks = this._masks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
      this._masks = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
      this._masks = value.masks;
    }
  }

  // flags - computed: true, optional: true, required: false
  private _flags?: string[]; 
  public get flags() {
    return this.getListAttribute('flags');
  }
  public set flags(value: string[]) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // masks - computed: true, optional: true, required: false
  private _masks?: string[]; 
  public get masks() {
    return this.getListAttribute('masks');
  }
  public set masks(value: string[]) {
    this._masks = value;
  }
  public resetMasks() {
    this._masks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masksInput() {
    return this._masks;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList extends cdktn.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags[] | cdktn.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#destination_ports NetworkfirewallRuleGroup#destination_ports}
  */
  readonly destinationPorts?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#destinations NetworkfirewallRuleGroup#destinations}
  */
  readonly destinations?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#protocols NetworkfirewallRuleGroup#protocols}
  */
  readonly protocols?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#source_ports NetworkfirewallRuleGroup#source_ports}
  */
  readonly sourcePorts?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#sources NetworkfirewallRuleGroup#sources}
  */
  readonly sources?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#tcp_flags NetworkfirewallRuleGroup#tcp_flags}
  */
  readonly tcpFlags?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags[] | cdktn.IResolvable;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_ports: cdktn.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsToTerraform, false)(struct!.destinationPorts),
    destinations: cdktn.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsToTerraform, false)(struct!.destinations),
    protocols: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.protocols),
    source_ports: cdktn.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsToTerraform, false)(struct!.sourcePorts),
    sources: cdktn.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesToTerraform, false)(struct!.sources),
    tcp_flags: cdktn.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsToTerraform, false)(struct!.tcpFlags),
  }
}


export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_ports: {
      value: cdktn.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsToHclTerraform, false)(struct!.destinationPorts),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList",
    },
    destinations: {
      value: cdktn.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList",
    },
    protocols: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    source_ports: {
      value: cdktn.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsToHclTerraform, false)(struct!.sourcePorts),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList",
    },
    sources: {
      value: cdktn.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList",
    },
    tcp_flags: {
      value: cdktn.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsToHclTerraform, false)(struct!.tcpFlags),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts?.internalValue;
    }
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._sourcePorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts?.internalValue;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    if (this._tcpFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFlags = this._tcpFlags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationPorts.internalValue = undefined;
      this._destinations.internalValue = undefined;
      this._protocols = undefined;
      this._sourcePorts.internalValue = undefined;
      this._sources.internalValue = undefined;
      this._tcpFlags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationPorts.internalValue = value.destinationPorts;
      this._destinations.internalValue = value.destinations;
      this._protocols = value.protocols;
      this._sourcePorts.internalValue = value.sourcePorts;
      this._sources.internalValue = value.sources;
      this._tcpFlags.internalValue = value.tcpFlags;
    }
  }

  // destination_ports - computed: true, optional: true, required: false
  private _destinationPorts = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList(this, "destination_ports", false);
  public get destinationPorts() {
    return this._destinationPorts;
  }
  public putDestinationPorts(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts[] | cdktn.IResolvable) {
    this._destinationPorts.internalValue = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts.internalValue;
  }

  // destinations - computed: true, optional: true, required: false
  private _destinations = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations[] | cdktn.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: number[]; 
  public get protocols() {
    return this.getNumberListAttribute('protocols');
  }
  public set protocols(value: number[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // source_ports - computed: true, optional: true, required: false
  private _sourcePorts = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList(this, "source_ports", false);
  public get sourcePorts() {
    return this._sourcePorts;
  }
  public putSourcePorts(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts[] | cdktn.IResolvable) {
    this._sourcePorts.internalValue = value;
  }
  public resetSourcePorts() {
    this._sourcePorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts.internalValue;
  }

  // sources - computed: true, optional: true, required: false
  private _sources = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources[] | cdktn.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // tcp_flags - computed: true, optional: true, required: false
  private _tcpFlags = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList(this, "tcp_flags", false);
  public get tcpFlags() {
    return this._tcpFlags;
  }
  public putTcpFlags(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags[] | cdktn.IResolvable) {
    this._tcpFlags.internalValue = value;
  }
  public resetTcpFlags() {
    this._tcpFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagsInput() {
    return this._tcpFlags.internalValue;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#actions NetworkfirewallRuleGroup#actions}
  */
  readonly actions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#match_attributes NetworkfirewallRuleGroup#match_attributes}
  */
  readonly matchAttributes?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    match_attributes: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesToTerraform(struct!.matchAttributes),
  }
}


export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_attributes: {
      value: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesToHclTerraform(struct!.matchAttributes),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._matchAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAttributes = this._matchAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._matchAttributes.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._matchAttributes.internalValue = value.matchAttributes;
    }
  }

  // actions - computed: true, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // match_attributes - computed: true, optional: true, required: false
  private _matchAttributes = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference(this, "match_attributes");
  public get matchAttributes() {
    return this._matchAttributes;
  }
  public putMatchAttributes(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes) {
    this._matchAttributes.internalValue = value;
  }
  public resetMatchAttributes() {
    this._matchAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAttributesInput() {
    return this._matchAttributes.internalValue;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#priority NetworkfirewallRuleGroup#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#rule_definition NetworkfirewallRuleGroup#rule_definition}
  */
  readonly ruleDefinition?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    priority: cdktn.numberToTerraform(struct!.priority),
    rule_definition: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionToTerraform(struct!.ruleDefinition),
  }
}


export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_definition: {
      value: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionToHclTerraform(struct!.ruleDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._ruleDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleDefinition = this._ruleDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._ruleDefinition.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._ruleDefinition.internalValue = value.ruleDefinition;
    }
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rule_definition - computed: true, optional: true, required: false
  private _ruleDefinition = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference(this, "rule_definition");
  public get ruleDefinition() {
    return this._ruleDefinition;
  }
  public putRuleDefinition(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition) {
    this._ruleDefinition.internalValue = value;
  }
  public resetRuleDefinition() {
    this._ruleDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDefinitionInput() {
    return this._ruleDefinition.internalValue;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList extends cdktn.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules[] | cdktn.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#custom_actions NetworkfirewallRuleGroup#custom_actions}
  */
  readonly customActions?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#stateless_rules NetworkfirewallRuleGroup#stateless_rules}
  */
  readonly statelessRules?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules[] | cdktn.IResolvable;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_actions: cdktn.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsToTerraform, false)(struct!.customActions),
    stateless_rules: cdktn.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesToTerraform, false)(struct!.statelessRules),
  }
}


export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_actions: {
      value: cdktn.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsToHclTerraform, false)(struct!.customActions),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList",
    },
    stateless_rules: {
      value: cdktn.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesToHclTerraform, false)(struct!.statelessRules),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customActions = this._customActions?.internalValue;
    }
    if (this._statelessRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessRules = this._statelessRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customActions.internalValue = undefined;
      this._statelessRules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customActions.internalValue = value.customActions;
      this._statelessRules.internalValue = value.statelessRules;
    }
  }

  // custom_actions - computed: true, optional: true, required: false
  private _customActions = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList(this, "custom_actions", false);
  public get customActions() {
    return this._customActions;
  }
  public putCustomActions(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions[] | cdktn.IResolvable) {
    this._customActions.internalValue = value;
  }
  public resetCustomActions() {
    this._customActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customActionsInput() {
    return this._customActions.internalValue;
  }

  // stateless_rules - computed: true, optional: true, required: false
  private _statelessRules = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList(this, "stateless_rules", false);
  public get statelessRules() {
    return this._statelessRules;
  }
  public putStatelessRules(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules[] | cdktn.IResolvable) {
    this._statelessRules.internalValue = value;
  }
  public resetStatelessRules() {
    this._statelessRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessRulesInput() {
    return this._statelessRules.internalValue;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#rules_source_list NetworkfirewallRuleGroup#rules_source_list}
  */
  readonly rulesSourceList?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#rules_string NetworkfirewallRuleGroup#rules_string}
  */
  readonly rulesString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#stateful_rules NetworkfirewallRuleGroup#stateful_rules}
  */
  readonly statefulRules?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#stateless_rules_and_custom_actions NetworkfirewallRuleGroup#stateless_rules_and_custom_actions}
  */
  readonly statelessRulesAndCustomActions?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rules_source_list: networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructToTerraform(struct!.rulesSourceList),
    rules_string: cdktn.stringToTerraform(struct!.rulesString),
    stateful_rules: cdktn.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesToTerraform, false)(struct!.statefulRules),
    stateless_rules_and_custom_actions: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct!.statelessRulesAndCustomActions),
  }
}


export function networkfirewallRuleGroupRuleGroupRulesSourceToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rules_source_list: {
      value: networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructToHclTerraform(struct!.rulesSourceList),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct",
    },
    rules_string: {
      value: cdktn.stringToHclTerraform(struct!.rulesString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stateful_rules: {
      value: cdktn.listMapperHcl(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesToHclTerraform, false)(struct!.statefulRules),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList",
    },
    stateless_rules_and_custom_actions: {
      value: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToHclTerraform(struct!.statelessRulesAndCustomActions),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rulesSourceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesSourceList = this._rulesSourceList?.internalValue;
    }
    if (this._rulesString !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesString = this._rulesString;
    }
    if (this._statefulRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulRules = this._statefulRules?.internalValue;
    }
    if (this._statelessRulesAndCustomActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessRulesAndCustomActions = this._statelessRulesAndCustomActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rulesSourceList.internalValue = undefined;
      this._rulesString = undefined;
      this._statefulRules.internalValue = undefined;
      this._statelessRulesAndCustomActions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rulesSourceList.internalValue = value.rulesSourceList;
      this._rulesString = value.rulesString;
      this._statefulRules.internalValue = value.statefulRules;
      this._statelessRulesAndCustomActions.internalValue = value.statelessRulesAndCustomActions;
    }
  }

  // rules_source_list - computed: true, optional: true, required: false
  private _rulesSourceList = new NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference(this, "rules_source_list");
  public get rulesSourceList() {
    return this._rulesSourceList;
  }
  public putRulesSourceList(value: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct) {
    this._rulesSourceList.internalValue = value;
  }
  public resetRulesSourceList() {
    this._rulesSourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesSourceListInput() {
    return this._rulesSourceList.internalValue;
  }

  // rules_string - computed: true, optional: true, required: false
  private _rulesString?: string; 
  public get rulesString() {
    return this.getStringAttribute('rules_string');
  }
  public set rulesString(value: string) {
    this._rulesString = value;
  }
  public resetRulesString() {
    this._rulesString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesStringInput() {
    return this._rulesString;
  }

  // stateful_rules - computed: true, optional: true, required: false
  private _statefulRules = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList(this, "stateful_rules", false);
  public get statefulRules() {
    return this._statefulRules;
  }
  public putStatefulRules(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules[] | cdktn.IResolvable) {
    this._statefulRules.internalValue = value;
  }
  public resetStatefulRules() {
    this._statefulRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulRulesInput() {
    return this._statefulRules.internalValue;
  }

  // stateless_rules_and_custom_actions - computed: true, optional: true, required: false
  private _statelessRulesAndCustomActions = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference(this, "stateless_rules_and_custom_actions");
  public get statelessRulesAndCustomActions() {
    return this._statelessRulesAndCustomActions;
  }
  public putStatelessRulesAndCustomActions(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions) {
    this._statelessRulesAndCustomActions.internalValue = value;
  }
  public resetStatelessRulesAndCustomActions() {
    this._statelessRulesAndCustomActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessRulesAndCustomActionsInput() {
    return this._statelessRulesAndCustomActions.internalValue;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#rule_order NetworkfirewallRuleGroup#rule_order}
  */
  readonly ruleOrder?: string;
}

export function networkfirewallRuleGroupRuleGroupStatefulRuleOptionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rule_order: cdktn.stringToTerraform(struct!.ruleOrder),
  }
}


export function networkfirewallRuleGroupRuleGroupStatefulRuleOptionsToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rule_order: {
      value: cdktn.stringToHclTerraform(struct!.ruleOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleOrder = this._ruleOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleOrder = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleOrder = value.ruleOrder;
    }
  }

  // rule_order - computed: true, optional: true, required: false
  private _ruleOrder?: string; 
  public get ruleOrder() {
    return this.getStringAttribute('rule_order');
  }
  public set ruleOrder(value: string) {
    this._ruleOrder = value;
  }
  public resetRuleOrder() {
    this._ruleOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOrderInput() {
    return this._ruleOrder;
  }
}
export interface NetworkfirewallRuleGroupRuleGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#reference_sets NetworkfirewallRuleGroup#reference_sets}
  */
  readonly referenceSets?: NetworkfirewallRuleGroupRuleGroupReferenceSets;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#rule_variables NetworkfirewallRuleGroup#rule_variables}
  */
  readonly ruleVariables?: NetworkfirewallRuleGroupRuleGroupRuleVariables;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#rules_source NetworkfirewallRuleGroup#rules_source}
  */
  readonly rulesSource?: NetworkfirewallRuleGroupRuleGroupRulesSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#stateful_rule_options NetworkfirewallRuleGroup#stateful_rule_options}
  */
  readonly statefulRuleOptions?: NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions;
}

export function networkfirewallRuleGroupRuleGroupToTerraform(struct?: NetworkfirewallRuleGroupRuleGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    reference_sets: networkfirewallRuleGroupRuleGroupReferenceSetsToTerraform(struct!.referenceSets),
    rule_variables: networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct!.ruleVariables),
    rules_source: networkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct!.rulesSource),
    stateful_rule_options: networkfirewallRuleGroupRuleGroupStatefulRuleOptionsToTerraform(struct!.statefulRuleOptions),
  }
}


export function networkfirewallRuleGroupRuleGroupToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    reference_sets: {
      value: networkfirewallRuleGroupRuleGroupReferenceSetsToHclTerraform(struct!.referenceSets),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupReferenceSets",
    },
    rule_variables: {
      value: networkfirewallRuleGroupRuleGroupRuleVariablesToHclTerraform(struct!.ruleVariables),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRuleVariables",
    },
    rules_source: {
      value: networkfirewallRuleGroupRuleGroupRulesSourceToHclTerraform(struct!.rulesSource),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupRulesSource",
    },
    stateful_rule_options: {
      value: networkfirewallRuleGroupRuleGroupStatefulRuleOptionsToHclTerraform(struct!.statefulRuleOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupRuleGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referenceSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceSets = this._referenceSets?.internalValue;
    }
    if (this._ruleVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleVariables = this._ruleVariables?.internalValue;
    }
    if (this._rulesSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesSource = this._rulesSource?.internalValue;
    }
    if (this._statefulRuleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulRuleOptions = this._statefulRuleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._referenceSets.internalValue = undefined;
      this._ruleVariables.internalValue = undefined;
      this._rulesSource.internalValue = undefined;
      this._statefulRuleOptions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._referenceSets.internalValue = value.referenceSets;
      this._ruleVariables.internalValue = value.ruleVariables;
      this._rulesSource.internalValue = value.rulesSource;
      this._statefulRuleOptions.internalValue = value.statefulRuleOptions;
    }
  }

  // reference_sets - computed: true, optional: true, required: false
  private _referenceSets = new NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference(this, "reference_sets");
  public get referenceSets() {
    return this._referenceSets;
  }
  public putReferenceSets(value: NetworkfirewallRuleGroupRuleGroupReferenceSets) {
    this._referenceSets.internalValue = value;
  }
  public resetReferenceSets() {
    this._referenceSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceSetsInput() {
    return this._referenceSets.internalValue;
  }

  // rule_variables - computed: true, optional: true, required: false
  private _ruleVariables = new NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference(this, "rule_variables");
  public get ruleVariables() {
    return this._ruleVariables;
  }
  public putRuleVariables(value: NetworkfirewallRuleGroupRuleGroupRuleVariables) {
    this._ruleVariables.internalValue = value;
  }
  public resetRuleVariables() {
    this._ruleVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleVariablesInput() {
    return this._ruleVariables.internalValue;
  }

  // rules_source - computed: true, optional: true, required: false
  private _rulesSource = new NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference(this, "rules_source");
  public get rulesSource() {
    return this._rulesSource;
  }
  public putRulesSource(value: NetworkfirewallRuleGroupRuleGroupRulesSource) {
    this._rulesSource.internalValue = value;
  }
  public resetRulesSource() {
    this._rulesSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesSourceInput() {
    return this._rulesSource.internalValue;
  }

  // stateful_rule_options - computed: true, optional: true, required: false
  private _statefulRuleOptions = new NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference(this, "stateful_rule_options");
  public get statefulRuleOptions() {
    return this._statefulRuleOptions;
  }
  public putStatefulRuleOptions(value: NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions) {
    this._statefulRuleOptions.internalValue = value;
  }
  public resetStatefulRuleOptions() {
    this._statefulRuleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulRuleOptionsInput() {
    return this._statefulRuleOptions.internalValue;
  }
}
export interface NetworkfirewallRuleGroupSummaryConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#rule_options NetworkfirewallRuleGroup#rule_options}
  */
  readonly ruleOptions?: string[];
}

export function networkfirewallRuleGroupSummaryConfigurationToTerraform(struct?: NetworkfirewallRuleGroupSummaryConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rule_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ruleOptions),
  }
}


export function networkfirewallRuleGroupSummaryConfigurationToHclTerraform(struct?: NetworkfirewallRuleGroupSummaryConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rule_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ruleOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallRuleGroupSummaryConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkfirewallRuleGroupSummaryConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleOptions = this._ruleOptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupSummaryConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleOptions = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleOptions = value.ruleOptions;
    }
  }

  // rule_options - computed: true, optional: true, required: false
  private _ruleOptions?: string[]; 
  public get ruleOptions() {
    return this.getListAttribute('rule_options');
  }
  public set ruleOptions(value: string[]) {
    this._ruleOptions = value;
  }
  public resetRuleOptions() {
    this._ruleOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOptionsInput() {
    return this._ruleOptions;
  }
}
export interface NetworkfirewallRuleGroupTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#key NetworkfirewallRuleGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#value NetworkfirewallRuleGroup#value}
  */
  readonly value?: string;
}

export function networkfirewallRuleGroupTagsToTerraform(struct?: NetworkfirewallRuleGroupTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function networkfirewallRuleGroupTagsToHclTerraform(struct?: NetworkfirewallRuleGroupTags | cdktn.IResolvable): any {
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

export class NetworkfirewallRuleGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkfirewallRuleGroupTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkfirewallRuleGroupTags | cdktn.IResolvable | undefined) {
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

export class NetworkfirewallRuleGroupTagsList extends cdktn.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupTags[] | cdktn.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupTagsOutputReference {
    return new NetworkfirewallRuleGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group awscc_networkfirewall_rule_group}
*/
export class NetworkfirewallRuleGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_networkfirewall_rule_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkfirewallRuleGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkfirewallRuleGroup to import
  * @param importFromId The id of the existing NetworkfirewallRuleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkfirewallRuleGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkfirewall_rule_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/networkfirewall_rule_group awscc_networkfirewall_rule_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkfirewallRuleGroupConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkfirewallRuleGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkfirewall_rule_group',
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
    this._capacity = config.capacity;
    this._description = config.description;
    this._ruleGroup.internalValue = config.ruleGroup;
    this._ruleGroupName = config.ruleGroupName;
    this._summaryConfiguration.internalValue = config.summaryConfiguration;
    this._tags.internalValue = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: false, optional: false, required: true
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule_group - computed: true, optional: true, required: false
  private _ruleGroup = new NetworkfirewallRuleGroupRuleGroupOutputReference(this, "rule_group");
  public get ruleGroup() {
    return this._ruleGroup;
  }
  public putRuleGroup(value: NetworkfirewallRuleGroupRuleGroup) {
    this._ruleGroup.internalValue = value;
  }
  public resetRuleGroup() {
    this._ruleGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupInput() {
    return this._ruleGroup.internalValue;
  }

  // rule_group_arn - computed: true, optional: false, required: false
  public get ruleGroupArn() {
    return this.getStringAttribute('rule_group_arn');
  }

  // rule_group_id - computed: true, optional: false, required: false
  public get ruleGroupId() {
    return this.getStringAttribute('rule_group_id');
  }

  // rule_group_name - computed: false, optional: false, required: true
  private _ruleGroupName?: string; 
  public get ruleGroupName() {
    return this.getStringAttribute('rule_group_name');
  }
  public set ruleGroupName(value: string) {
    this._ruleGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupNameInput() {
    return this._ruleGroupName;
  }

  // summary_configuration - computed: true, optional: true, required: false
  private _summaryConfiguration = new NetworkfirewallRuleGroupSummaryConfigurationOutputReference(this, "summary_configuration");
  public get summaryConfiguration() {
    return this._summaryConfiguration;
  }
  public putSummaryConfiguration(value: NetworkfirewallRuleGroupSummaryConfiguration) {
    this._summaryConfiguration.internalValue = value;
  }
  public resetSummaryConfiguration() {
    this._summaryConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryConfigurationInput() {
    return this._summaryConfiguration.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new NetworkfirewallRuleGroupTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetworkfirewallRuleGroupTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity: cdktn.numberToTerraform(this._capacity),
      description: cdktn.stringToTerraform(this._description),
      rule_group: networkfirewallRuleGroupRuleGroupToTerraform(this._ruleGroup.internalValue),
      rule_group_name: cdktn.stringToTerraform(this._ruleGroupName),
      summary_configuration: networkfirewallRuleGroupSummaryConfigurationToTerraform(this._summaryConfiguration.internalValue),
      tags: cdktn.listMapper(networkfirewallRuleGroupTagsToTerraform, false)(this._tags.internalValue),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity: {
        value: cdktn.numberToHclTerraform(this._capacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_group: {
        value: networkfirewallRuleGroupRuleGroupToHclTerraform(this._ruleGroup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkfirewallRuleGroupRuleGroup",
      },
      rule_group_name: {
        value: cdktn.stringToHclTerraform(this._ruleGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summary_configuration: {
        value: networkfirewallRuleGroupSummaryConfigurationToHclTerraform(this._summaryConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkfirewallRuleGroupSummaryConfiguration",
      },
      tags: {
        value: cdktn.listMapperHcl(networkfirewallRuleGroupTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkfirewallRuleGroupTagsList",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
