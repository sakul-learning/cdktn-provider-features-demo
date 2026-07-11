// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkfirewallFirewallConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall#availability_zone_change_protection NetworkfirewallFirewall#availability_zone_change_protection}
  */
  readonly availabilityZoneChangeProtection?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall#availability_zone_mappings NetworkfirewallFirewall#availability_zone_mappings}
  */
  readonly availabilityZoneMappings?: NetworkfirewallFirewallAvailabilityZoneMappings[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall#delete_protection NetworkfirewallFirewall#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall#description NetworkfirewallFirewall#description}
  */
  readonly description?: string;
  /**
  * The types of analysis to enable for the firewall. Can be TLS_SNI, HTTP_HOST, or both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall#enabled_analysis_types NetworkfirewallFirewall#enabled_analysis_types}
  */
  readonly enabledAnalysisTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall#firewall_name NetworkfirewallFirewall#firewall_name}
  */
  readonly firewallName: string;
  /**
  * A resource ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall#firewall_policy_arn NetworkfirewallFirewall#firewall_policy_arn}
  */
  readonly firewallPolicyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall#firewall_policy_change_protection NetworkfirewallFirewall#firewall_policy_change_protection}
  */
  readonly firewallPolicyChangeProtection?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall#subnet_change_protection NetworkfirewallFirewall#subnet_change_protection}
  */
  readonly subnetChangeProtection?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall#subnet_mappings NetworkfirewallFirewall#subnet_mappings}
  */
  readonly subnetMappings?: NetworkfirewallFirewallSubnetMappings[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall#tags NetworkfirewallFirewall#tags}
  */
  readonly tags?: NetworkfirewallFirewallTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall#transit_gateway_id NetworkfirewallFirewall#transit_gateway_id}
  */
  readonly transitGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall#vpc_id NetworkfirewallFirewall#vpc_id}
  */
  readonly vpcId?: string;
}
export interface NetworkfirewallFirewallAvailabilityZoneMappings {
  /**
  * A AvailabilityZone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall#availability_zone NetworkfirewallFirewall#availability_zone}
  */
  readonly availabilityZone?: string;
}

export function networkfirewallFirewallAvailabilityZoneMappingsToTerraform(struct?: NetworkfirewallFirewallAvailabilityZoneMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
  }
}


export function networkfirewallFirewallAvailabilityZoneMappingsToHclTerraform(struct?: NetworkfirewallFirewallAvailabilityZoneMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_zone: {
      value: cdktn.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkfirewallFirewallAvailabilityZoneMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallFirewallAvailabilityZoneMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
    }
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }
}

export class NetworkfirewallFirewallAvailabilityZoneMappingsList extends cdktn.ComplexList {
  public internalValue? : NetworkfirewallFirewallAvailabilityZoneMappings[] | cdktn.IResolvable

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
  public get(index: number): NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference {
    return new NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallFirewallSubnetMappings {
  /**
  * A IPAddressType
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall#ip_address_type NetworkfirewallFirewall#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * A SubnetId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall#subnet_id NetworkfirewallFirewall#subnet_id}
  */
  readonly subnetId?: string;
}

export function networkfirewallFirewallSubnetMappingsToTerraform(struct?: NetworkfirewallFirewallSubnetMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    subnet_id: cdktn.stringToTerraform(struct!.subnetId),
  }
}


export function networkfirewallFirewallSubnetMappingsToHclTerraform(struct?: NetworkfirewallFirewallSubnetMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktn.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkfirewallFirewallSubnetMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkfirewallFirewallSubnetMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallFirewallSubnetMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddressType = undefined;
      this._subnetId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddressType = value.ipAddressType;
      this._subnetId = value.subnetId;
    }
  }

  // ip_address_type - computed: true, optional: true, required: false
  private _ipAddressType?: string;
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class NetworkfirewallFirewallSubnetMappingsList extends cdktn.ComplexList {
  public internalValue? : NetworkfirewallFirewallSubnetMappings[] | cdktn.IResolvable

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
  public get(index: number): NetworkfirewallFirewallSubnetMappingsOutputReference {
    return new NetworkfirewallFirewallSubnetMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallFirewallTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall#key NetworkfirewallFirewall#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall#value NetworkfirewallFirewall#value}
  */
  readonly value?: string;
}

export function networkfirewallFirewallTagsToTerraform(struct?: NetworkfirewallFirewallTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function networkfirewallFirewallTagsToHclTerraform(struct?: NetworkfirewallFirewallTags | cdktn.IResolvable): any {
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

export class NetworkfirewallFirewallTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkfirewallFirewallTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkfirewallFirewallTags | cdktn.IResolvable | undefined) {
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

export class NetworkfirewallFirewallTagsList extends cdktn.ComplexList {
  public internalValue? : NetworkfirewallFirewallTags[] | cdktn.IResolvable

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
  public get(index: number): NetworkfirewallFirewallTagsOutputReference {
    return new NetworkfirewallFirewallTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall awscc_networkfirewall_firewall}
*/
export class NetworkfirewallFirewall extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_networkfirewall_firewall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkfirewallFirewall resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkfirewallFirewall to import
  * @param importFromId The id of the existing NetworkfirewallFirewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkfirewallFirewall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkfirewall_firewall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkfirewall_firewall awscc_networkfirewall_firewall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkfirewallFirewallConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkfirewallFirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkfirewall_firewall',
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
    this._availabilityZoneChangeProtection = config.availabilityZoneChangeProtection;
    this._availabilityZoneMappings.internalValue = config.availabilityZoneMappings;
    this._deleteProtection = config.deleteProtection;
    this._description = config.description;
    this._enabledAnalysisTypes = config.enabledAnalysisTypes;
    this._firewallName = config.firewallName;
    this._firewallPolicyArn = config.firewallPolicyArn;
    this._firewallPolicyChangeProtection = config.firewallPolicyChangeProtection;
    this._subnetChangeProtection = config.subnetChangeProtection;
    this._subnetMappings.internalValue = config.subnetMappings;
    this._tags.internalValue = config.tags;
    this._transitGatewayId = config.transitGatewayId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone_change_protection - computed: true, optional: true, required: false
  private _availabilityZoneChangeProtection?: boolean | cdktn.IResolvable;
  public get availabilityZoneChangeProtection() {
    return this.getBooleanAttribute('availability_zone_change_protection');
  }
  public set availabilityZoneChangeProtection(value: boolean | cdktn.IResolvable) {
    this._availabilityZoneChangeProtection = value;
  }
  public resetAvailabilityZoneChangeProtection() {
    this._availabilityZoneChangeProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneChangeProtectionInput() {
    return this._availabilityZoneChangeProtection;
  }

  // availability_zone_mappings - computed: true, optional: true, required: false
  private _availabilityZoneMappings = new NetworkfirewallFirewallAvailabilityZoneMappingsList(this, "availability_zone_mappings", true);
  public get availabilityZoneMappings() {
    return this._availabilityZoneMappings;
  }
  public putAvailabilityZoneMappings(value: NetworkfirewallFirewallAvailabilityZoneMappings[] | cdktn.IResolvable) {
    this._availabilityZoneMappings.internalValue = value;
  }
  public resetAvailabilityZoneMappings() {
    this._availabilityZoneMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneMappingsInput() {
    return this._availabilityZoneMappings.internalValue;
  }

  // delete_protection - computed: true, optional: true, required: false
  private _deleteProtection?: boolean | cdktn.IResolvable;
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }
  public set deleteProtection(value: boolean | cdktn.IResolvable) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
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

  // enabled_analysis_types - computed: true, optional: true, required: false
  private _enabledAnalysisTypes?: string[];
  public get enabledAnalysisTypes() {
    return this.getListAttribute('enabled_analysis_types');
  }
  public set enabledAnalysisTypes(value: string[]) {
    this._enabledAnalysisTypes = value;
  }
  public resetEnabledAnalysisTypes() {
    this._enabledAnalysisTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledAnalysisTypesInput() {
    return this._enabledAnalysisTypes;
  }

  // endpoint_ids - computed: true, optional: false, required: false
  public get endpointIds() {
    return this.getListAttribute('endpoint_ids');
  }

  // firewall_arn - computed: true, optional: false, required: false
  public get firewallArn() {
    return this.getStringAttribute('firewall_arn');
  }

  // firewall_id - computed: true, optional: false, required: false
  public get firewallId() {
    return this.getStringAttribute('firewall_id');
  }

  // firewall_name - computed: false, optional: false, required: true
  private _firewallName?: string;
  public get firewallName() {
    return this.getStringAttribute('firewall_name');
  }
  public set firewallName(value: string) {
    this._firewallName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallNameInput() {
    return this._firewallName;
  }

  // firewall_policy_arn - computed: false, optional: false, required: true
  private _firewallPolicyArn?: string;
  public get firewallPolicyArn() {
    return this.getStringAttribute('firewall_policy_arn');
  }
  public set firewallPolicyArn(value: string) {
    this._firewallPolicyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyArnInput() {
    return this._firewallPolicyArn;
  }

  // firewall_policy_change_protection - computed: true, optional: true, required: false
  private _firewallPolicyChangeProtection?: boolean | cdktn.IResolvable;
  public get firewallPolicyChangeProtection() {
    return this.getBooleanAttribute('firewall_policy_change_protection');
  }
  public set firewallPolicyChangeProtection(value: boolean | cdktn.IResolvable) {
    this._firewallPolicyChangeProtection = value;
  }
  public resetFirewallPolicyChangeProtection() {
    this._firewallPolicyChangeProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyChangeProtectionInput() {
    return this._firewallPolicyChangeProtection;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subnet_change_protection - computed: true, optional: true, required: false
  private _subnetChangeProtection?: boolean | cdktn.IResolvable;
  public get subnetChangeProtection() {
    return this.getBooleanAttribute('subnet_change_protection');
  }
  public set subnetChangeProtection(value: boolean | cdktn.IResolvable) {
    this._subnetChangeProtection = value;
  }
  public resetSubnetChangeProtection() {
    this._subnetChangeProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetChangeProtectionInput() {
    return this._subnetChangeProtection;
  }

  // subnet_mappings - computed: true, optional: true, required: false
  private _subnetMappings = new NetworkfirewallFirewallSubnetMappingsList(this, "subnet_mappings", true);
  public get subnetMappings() {
    return this._subnetMappings;
  }
  public putSubnetMappings(value: NetworkfirewallFirewallSubnetMappings[] | cdktn.IResolvable) {
    this._subnetMappings.internalValue = value;
  }
  public resetSubnetMappings() {
    this._subnetMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMappingsInput() {
    return this._subnetMappings.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new NetworkfirewallFirewallTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetworkfirewallFirewallTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // transit_gateway_attachment_id - computed: true, optional: false, required: false
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }

  // transit_gateway_id - computed: true, optional: true, required: false
  private _transitGatewayId?: string;
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  public resetTransitGatewayId() {
    this._transitGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone_change_protection: cdktn.booleanToTerraform(this._availabilityZoneChangeProtection),
      availability_zone_mappings: cdktn.listMapper(networkfirewallFirewallAvailabilityZoneMappingsToTerraform, false)(this._availabilityZoneMappings.internalValue),
      delete_protection: cdktn.booleanToTerraform(this._deleteProtection),
      description: cdktn.stringToTerraform(this._description),
      enabled_analysis_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._enabledAnalysisTypes),
      firewall_name: cdktn.stringToTerraform(this._firewallName),
      firewall_policy_arn: cdktn.stringToTerraform(this._firewallPolicyArn),
      firewall_policy_change_protection: cdktn.booleanToTerraform(this._firewallPolicyChangeProtection),
      subnet_change_protection: cdktn.booleanToTerraform(this._subnetChangeProtection),
      subnet_mappings: cdktn.listMapper(networkfirewallFirewallSubnetMappingsToTerraform, false)(this._subnetMappings.internalValue),
      tags: cdktn.listMapper(networkfirewallFirewallTagsToTerraform, false)(this._tags.internalValue),
      transit_gateway_id: cdktn.stringToTerraform(this._transitGatewayId),
      vpc_id: cdktn.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone_change_protection: {
        value: cdktn.booleanToHclTerraform(this._availabilityZoneChangeProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_zone_mappings: {
        value: cdktn.listMapperHcl(networkfirewallFirewallAvailabilityZoneMappingsToHclTerraform, false)(this._availabilityZoneMappings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkfirewallFirewallAvailabilityZoneMappingsList",
      },
      delete_protection: {
        value: cdktn.booleanToHclTerraform(this._deleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled_analysis_types: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._enabledAnalysisTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      firewall_name: {
        value: cdktn.stringToHclTerraform(this._firewallName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_policy_arn: {
        value: cdktn.stringToHclTerraform(this._firewallPolicyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_policy_change_protection: {
        value: cdktn.booleanToHclTerraform(this._firewallPolicyChangeProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subnet_change_protection: {
        value: cdktn.booleanToHclTerraform(this._subnetChangeProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subnet_mappings: {
        value: cdktn.listMapperHcl(networkfirewallFirewallSubnetMappingsToHclTerraform, false)(this._subnetMappings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkfirewallFirewallSubnetMappingsList",
      },
      tags: {
        value: cdktn.listMapperHcl(networkfirewallFirewallTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkfirewallFirewallTagsList",
      },
      transit_gateway_id: {
        value: cdktn.stringToHclTerraform(this._transitGatewayId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
