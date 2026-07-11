// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_ipam_resource_discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2IpamResourceDiscoveryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_ipam_resource_discovery#description Ec2IpamResourceDiscovery#description}
  */
  readonly description?: string;
  /**
  * The regions Resource Discovery is enabled for. Allows resource discoveries to be created in these regions, as well as enabling monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_ipam_resource_discovery#operating_regions Ec2IpamResourceDiscovery#operating_regions}
  */
  readonly operatingRegions?: Ec2IpamResourceDiscoveryOperatingRegions[] | cdktn.IResolvable;
  /**
  * A set of organizational unit (OU) exclusions for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_ipam_resource_discovery#organizational_unit_exclusions Ec2IpamResourceDiscovery#organizational_unit_exclusions}
  */
  readonly organizationalUnitExclusions?: Ec2IpamResourceDiscoveryOrganizationalUnitExclusions[] | cdktn.IResolvable;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_ipam_resource_discovery#tags Ec2IpamResourceDiscovery#tags}
  */
  readonly tags?: Ec2IpamResourceDiscoveryTags[] | cdktn.IResolvable;
}
export interface Ec2IpamResourceDiscoveryOperatingRegions {
  /**
  * The name of the region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_ipam_resource_discovery#region_name Ec2IpamResourceDiscovery#region_name}
  */
  readonly regionName?: string;
}

export function ec2IpamResourceDiscoveryOperatingRegionsToTerraform(struct?: Ec2IpamResourceDiscoveryOperatingRegions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region_name: cdktn.stringToTerraform(struct!.regionName),
  }
}


export function ec2IpamResourceDiscoveryOperatingRegionsToHclTerraform(struct?: Ec2IpamResourceDiscoveryOperatingRegions | cdktn.IResolvable): any {
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

export class Ec2IpamResourceDiscoveryOperatingRegionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2IpamResourceDiscoveryOperatingRegions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ec2IpamResourceDiscoveryOperatingRegions | cdktn.IResolvable | undefined) {
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

export class Ec2IpamResourceDiscoveryOperatingRegionsList extends cdktn.ComplexList {
  public internalValue? : Ec2IpamResourceDiscoveryOperatingRegions[] | cdktn.IResolvable

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
  public get(index: number): Ec2IpamResourceDiscoveryOperatingRegionsOutputReference {
    return new Ec2IpamResourceDiscoveryOperatingRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2IpamResourceDiscoveryOrganizationalUnitExclusions {
  /**
  * An AWS Organizations entity path. Build the path for the OU(s) using AWS Organizations IDs separated by a '/'. Include all child OUs by ending the path with '/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_ipam_resource_discovery#organizations_entity_path Ec2IpamResourceDiscovery#organizations_entity_path}
  */
  readonly organizationsEntityPath?: string;
}

export function ec2IpamResourceDiscoveryOrganizationalUnitExclusionsToTerraform(struct?: Ec2IpamResourceDiscoveryOrganizationalUnitExclusions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    organizations_entity_path: cdktn.stringToTerraform(struct!.organizationsEntityPath),
  }
}


export function ec2IpamResourceDiscoveryOrganizationalUnitExclusionsToHclTerraform(struct?: Ec2IpamResourceDiscoveryOrganizationalUnitExclusions | cdktn.IResolvable): any {
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

export class Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2IpamResourceDiscoveryOrganizationalUnitExclusions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ec2IpamResourceDiscoveryOrganizationalUnitExclusions | cdktn.IResolvable | undefined) {
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

export class Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList extends cdktn.ComplexList {
  public internalValue? : Ec2IpamResourceDiscoveryOrganizationalUnitExclusions[] | cdktn.IResolvable

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
  public get(index: number): Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference {
    return new Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2IpamResourceDiscoveryTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_ipam_resource_discovery#key Ec2IpamResourceDiscovery#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_ipam_resource_discovery#value Ec2IpamResourceDiscovery#value}
  */
  readonly value?: string;
}

export function ec2IpamResourceDiscoveryTagsToTerraform(struct?: Ec2IpamResourceDiscoveryTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ec2IpamResourceDiscoveryTagsToHclTerraform(struct?: Ec2IpamResourceDiscoveryTags | cdktn.IResolvable): any {
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

export class Ec2IpamResourceDiscoveryTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2IpamResourceDiscoveryTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ec2IpamResourceDiscoveryTags | cdktn.IResolvable | undefined) {
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

export class Ec2IpamResourceDiscoveryTagsList extends cdktn.ComplexList {
  public internalValue? : Ec2IpamResourceDiscoveryTags[] | cdktn.IResolvable

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
  public get(index: number): Ec2IpamResourceDiscoveryTagsOutputReference {
    return new Ec2IpamResourceDiscoveryTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_ipam_resource_discovery awscc_ec2_ipam_resource_discovery}
*/
export class Ec2IpamResourceDiscovery extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_ipam_resource_discovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2IpamResourceDiscovery resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2IpamResourceDiscovery to import
  * @param importFromId The id of the existing Ec2IpamResourceDiscovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_ipam_resource_discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2IpamResourceDiscovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_ipam_resource_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_ipam_resource_discovery awscc_ec2_ipam_resource_discovery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2IpamResourceDiscoveryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ec2IpamResourceDiscoveryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_ipam_resource_discovery',
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
    this._description = config.description;
    this._operatingRegions.internalValue = config.operatingRegions;
    this._organizationalUnitExclusions.internalValue = config.organizationalUnitExclusions;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ipam_resource_discovery_arn - computed: true, optional: false, required: false
  public get ipamResourceDiscoveryArn() {
    return this.getStringAttribute('ipam_resource_discovery_arn');
  }

  // ipam_resource_discovery_id - computed: true, optional: false, required: false
  public get ipamResourceDiscoveryId() {
    return this.getStringAttribute('ipam_resource_discovery_id');
  }

  // ipam_resource_discovery_region - computed: true, optional: false, required: false
  public get ipamResourceDiscoveryRegion() {
    return this.getStringAttribute('ipam_resource_discovery_region');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // operating_regions - computed: true, optional: true, required: false
  private _operatingRegions = new Ec2IpamResourceDiscoveryOperatingRegionsList(this, "operating_regions", true);
  public get operatingRegions() {
    return this._operatingRegions;
  }
  public putOperatingRegions(value: Ec2IpamResourceDiscoveryOperatingRegions[] | cdktn.IResolvable) {
    this._operatingRegions.internalValue = value;
  }
  public resetOperatingRegions() {
    this._operatingRegions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingRegionsInput() {
    return this._operatingRegions.internalValue;
  }

  // organizational_unit_exclusions - computed: true, optional: true, required: false
  private _organizationalUnitExclusions = new Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList(this, "organizational_unit_exclusions", true);
  public get organizationalUnitExclusions() {
    return this._organizationalUnitExclusions;
  }
  public putOrganizationalUnitExclusions(value: Ec2IpamResourceDiscoveryOrganizationalUnitExclusions[] | cdktn.IResolvable) {
    this._organizationalUnitExclusions.internalValue = value;
  }
  public resetOrganizationalUnitExclusions() {
    this._organizationalUnitExclusions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitExclusionsInput() {
    return this._organizationalUnitExclusions.internalValue;
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Ec2IpamResourceDiscoveryTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Ec2IpamResourceDiscoveryTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      operating_regions: cdktn.listMapper(ec2IpamResourceDiscoveryOperatingRegionsToTerraform, false)(this._operatingRegions.internalValue),
      organizational_unit_exclusions: cdktn.listMapper(ec2IpamResourceDiscoveryOrganizationalUnitExclusionsToTerraform, false)(this._organizationalUnitExclusions.internalValue),
      tags: cdktn.listMapper(ec2IpamResourceDiscoveryTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operating_regions: {
        value: cdktn.listMapperHcl(ec2IpamResourceDiscoveryOperatingRegionsToHclTerraform, false)(this._operatingRegions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Ec2IpamResourceDiscoveryOperatingRegionsList",
      },
      organizational_unit_exclusions: {
        value: cdktn.listMapperHcl(ec2IpamResourceDiscoveryOrganizationalUnitExclusionsToHclTerraform, false)(this._organizationalUnitExclusions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList",
      },
      tags: {
        value: cdktn.listMapperHcl(ec2IpamResourceDiscoveryTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Ec2IpamResourceDiscoveryTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
