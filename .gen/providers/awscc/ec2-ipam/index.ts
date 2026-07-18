// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_ipam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2IpamConfig extends cdktn.TerraformMetaArguments {
  /**
  * A set of organizational unit (OU) exclusions for the default resource discovery, created with this IPAM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_ipam#default_resource_discovery_organizational_unit_exclusions Ec2Ipam#default_resource_discovery_organizational_unit_exclusions}
  */
  readonly defaultResourceDiscoveryOrganizationalUnitExclusions?: Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_ipam#description Ec2Ipam#description}
  */
  readonly description?: string;
  /**
  * Enable provisioning of GUA space in private pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_ipam#enable_private_gua Ec2Ipam#enable_private_gua}
  */
  readonly enablePrivateGua?: boolean | cdktn.IResolvable;
  /**
  * A metered account is an account that is charged for active IP addresses managed in IPAM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_ipam#metered_account Ec2Ipam#metered_account}
  */
  readonly meteredAccount?: string;
  /**
  * The regions IPAM is enabled for. Allows pools to be created in these regions, as well as enabling monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_ipam#operating_regions Ec2Ipam#operating_regions}
  */
  readonly operatingRegions?: Ec2IpamOperatingRegions[] | cdktn.IResolvable;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_ipam#tags Ec2Ipam#tags}
  */
  readonly tags?: Ec2IpamTags[] | cdktn.IResolvable;
  /**
  * The tier of the IPAM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_ipam#tier Ec2Ipam#tier}
  */
  readonly tier?: string;
}
export interface Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions {
  /**
  * An AWS Organizations entity path. Build the path for the OU(s) using AWS Organizations IDs separated by a '/'. Include all child OUs by ending the path with '/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_ipam#organizations_entity_path Ec2Ipam#organizations_entity_path}
  */
  readonly organizationsEntityPath?: string;
}

export function ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsToTerraform(struct?: Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    organizations_entity_path: cdktn.stringToTerraform(struct!.organizationsEntityPath),
  }
}


export function ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsToHclTerraform(struct?: Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    organizations_entity_path: {
      value: cdktn.stringToHclTerraform(struct!.organizationsEntityPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organizationsEntityPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationsEntityPath = this._organizationsEntityPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._organizationsEntityPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._organizationsEntityPath = value.organizationsEntityPath;
    }
  }

  // organizations_entity_path - computed: true, optional: true, required: false
  private _organizationsEntityPath?: string; 
  public get organizationsEntityPath() {
    return this.getStringAttribute('organizations_entity_path');
  }
  public set organizationsEntityPath(value: string) {
    this._organizationsEntityPath = value;
  }
  public resetOrganizationsEntityPath() {
    this._organizationsEntityPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationsEntityPathInput() {
    return this._organizationsEntityPath;
  }
}

export class Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList extends cdktn.ComplexList {
  public internalValue? : Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions[] | cdktn.IResolvable

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
  public get(index: number): Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference {
    return new Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2IpamOperatingRegions {
  /**
  * The name of the region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_ipam#region_name Ec2Ipam#region_name}
  */
  readonly regionName?: string;
}

export function ec2IpamOperatingRegionsToTerraform(struct?: Ec2IpamOperatingRegions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region_name: cdktn.stringToTerraform(struct!.regionName),
  }
}


export function ec2IpamOperatingRegionsToHclTerraform(struct?: Ec2IpamOperatingRegions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region_name: {
      value: cdktn.stringToHclTerraform(struct!.regionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2IpamOperatingRegionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2IpamOperatingRegions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2IpamOperatingRegions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regionName = value.regionName;
    }
  }

  // region_name - computed: true, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }
}

export class Ec2IpamOperatingRegionsList extends cdktn.ComplexList {
  public internalValue? : Ec2IpamOperatingRegions[] | cdktn.IResolvable

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
  public get(index: number): Ec2IpamOperatingRegionsOutputReference {
    return new Ec2IpamOperatingRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2IpamTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_ipam#key Ec2Ipam#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_ipam#value Ec2Ipam#value}
  */
  readonly value?: string;
}

export function ec2IpamTagsToTerraform(struct?: Ec2IpamTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ec2IpamTagsToHclTerraform(struct?: Ec2IpamTags | cdktn.IResolvable): any {
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

export class Ec2IpamTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2IpamTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ec2IpamTags | cdktn.IResolvable | undefined) {
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

export class Ec2IpamTagsList extends cdktn.ComplexList {
  public internalValue? : Ec2IpamTags[] | cdktn.IResolvable

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
  public get(index: number): Ec2IpamTagsOutputReference {
    return new Ec2IpamTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_ipam awscc_ec2_ipam}
*/
export class Ec2Ipam extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_ipam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2Ipam resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2Ipam to import
  * @param importFromId The id of the existing Ec2Ipam that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_ipam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2Ipam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_ipam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_ipam awscc_ec2_ipam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2IpamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ec2IpamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_ipam',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultResourceDiscoveryOrganizationalUnitExclusions.internalValue = config.defaultResourceDiscoveryOrganizationalUnitExclusions;
    this._description = config.description;
    this._enablePrivateGua = config.enablePrivateGua;
    this._meteredAccount = config.meteredAccount;
    this._operatingRegions.internalValue = config.operatingRegions;
    this._tags.internalValue = config.tags;
    this._tier = config.tier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_resource_discovery_association_id - computed: true, optional: false, required: false
  public get defaultResourceDiscoveryAssociationId() {
    return this.getStringAttribute('default_resource_discovery_association_id');
  }

  // default_resource_discovery_id - computed: true, optional: false, required: false
  public get defaultResourceDiscoveryId() {
    return this.getStringAttribute('default_resource_discovery_id');
  }

  // default_resource_discovery_organizational_unit_exclusions - computed: true, optional: true, required: false
  private _defaultResourceDiscoveryOrganizationalUnitExclusions = new Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList(this, "default_resource_discovery_organizational_unit_exclusions", true);
  public get defaultResourceDiscoveryOrganizationalUnitExclusions() {
    return this._defaultResourceDiscoveryOrganizationalUnitExclusions;
  }
  public putDefaultResourceDiscoveryOrganizationalUnitExclusions(value: Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions[] | cdktn.IResolvable) {
    this._defaultResourceDiscoveryOrganizationalUnitExclusions.internalValue = value;
  }
  public resetDefaultResourceDiscoveryOrganizationalUnitExclusions() {
    this._defaultResourceDiscoveryOrganizationalUnitExclusions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceDiscoveryOrganizationalUnitExclusionsInput() {
    return this._defaultResourceDiscoveryOrganizationalUnitExclusions.internalValue;
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

  // enable_private_gua - computed: true, optional: true, required: false
  private _enablePrivateGua?: boolean | cdktn.IResolvable; 
  public get enablePrivateGua() {
    return this.getBooleanAttribute('enable_private_gua');
  }
  public set enablePrivateGua(value: boolean | cdktn.IResolvable) {
    this._enablePrivateGua = value;
  }
  public resetEnablePrivateGua() {
    this._enablePrivateGua = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateGuaInput() {
    return this._enablePrivateGua;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipam_id - computed: true, optional: false, required: false
  public get ipamId() {
    return this.getStringAttribute('ipam_id');
  }

  // metered_account - computed: true, optional: true, required: false
  private _meteredAccount?: string; 
  public get meteredAccount() {
    return this.getStringAttribute('metered_account');
  }
  public set meteredAccount(value: string) {
    this._meteredAccount = value;
  }
  public resetMeteredAccount() {
    this._meteredAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meteredAccountInput() {
    return this._meteredAccount;
  }

  // operating_regions - computed: true, optional: true, required: false
  private _operatingRegions = new Ec2IpamOperatingRegionsList(this, "operating_regions", true);
  public get operatingRegions() {
    return this._operatingRegions;
  }
  public putOperatingRegions(value: Ec2IpamOperatingRegions[] | cdktn.IResolvable) {
    this._operatingRegions.internalValue = value;
  }
  public resetOperatingRegions() {
    this._operatingRegions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingRegionsInput() {
    return this._operatingRegions.internalValue;
  }

  // private_default_scope_id - computed: true, optional: false, required: false
  public get privateDefaultScopeId() {
    return this.getStringAttribute('private_default_scope_id');
  }

  // public_default_scope_id - computed: true, optional: false, required: false
  public get publicDefaultScopeId() {
    return this.getStringAttribute('public_default_scope_id');
  }

  // resource_discovery_association_count - computed: true, optional: false, required: false
  public get resourceDiscoveryAssociationCount() {
    return this.getNumberAttribute('resource_discovery_association_count');
  }

  // scope_count - computed: true, optional: false, required: false
  public get scopeCount() {
    return this.getNumberAttribute('scope_count');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Ec2IpamTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Ec2IpamTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tier - computed: true, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_resource_discovery_organizational_unit_exclusions: cdktn.listMapper(ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsToTerraform, false)(this._defaultResourceDiscoveryOrganizationalUnitExclusions.internalValue),
      description: cdktn.stringToTerraform(this._description),
      enable_private_gua: cdktn.booleanToTerraform(this._enablePrivateGua),
      metered_account: cdktn.stringToTerraform(this._meteredAccount),
      operating_regions: cdktn.listMapper(ec2IpamOperatingRegionsToTerraform, false)(this._operatingRegions.internalValue),
      tags: cdktn.listMapper(ec2IpamTagsToTerraform, false)(this._tags.internalValue),
      tier: cdktn.stringToTerraform(this._tier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_resource_discovery_organizational_unit_exclusions: {
        value: cdktn.listMapperHcl(ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsToHclTerraform, false)(this._defaultResourceDiscoveryOrganizationalUnitExclusions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_private_gua: {
        value: cdktn.booleanToHclTerraform(this._enablePrivateGua),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metered_account: {
        value: cdktn.stringToHclTerraform(this._meteredAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operating_regions: {
        value: cdktn.listMapperHcl(ec2IpamOperatingRegionsToHclTerraform, false)(this._operatingRegions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Ec2IpamOperatingRegionsList",
      },
      tags: {
        value: cdktn.listMapperHcl(ec2IpamTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Ec2IpamTagsList",
      },
      tier: {
        value: cdktn.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
