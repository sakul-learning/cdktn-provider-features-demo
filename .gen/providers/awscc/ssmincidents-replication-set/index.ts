// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmincidents_replication_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SsmincidentsReplicationSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Configures the ReplicationSet deletion protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmincidents_replication_set#deletion_protected SsmincidentsReplicationSet#deletion_protected}
  */
  readonly deletionProtected?: boolean | cdktn.IResolvable;
  /**
  * The ReplicationSet configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmincidents_replication_set#regions SsmincidentsReplicationSet#regions}
  */
  readonly regions: SsmincidentsReplicationSetRegions[] | cdktn.IResolvable;
  /**
  * The tags to apply to the replication set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmincidents_replication_set#tags SsmincidentsReplicationSet#tags}
  */
  readonly tags?: SsmincidentsReplicationSetTags[] | cdktn.IResolvable;
}
export interface SsmincidentsReplicationSetRegionsRegionConfiguration {
  /**
  * The AWS Key Management Service key ID or Key Alias to use to encrypt your replication set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmincidents_replication_set#sse_kms_key_id SsmincidentsReplicationSet#sse_kms_key_id}
  */
  readonly sseKmsKeyId?: string;
}

export function ssmincidentsReplicationSetRegionsRegionConfigurationToTerraform(struct?: SsmincidentsReplicationSetRegionsRegionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sse_kms_key_id: cdktn.stringToTerraform(struct!.sseKmsKeyId),
  }
}


export function ssmincidentsReplicationSetRegionsRegionConfigurationToHclTerraform(struct?: SsmincidentsReplicationSetRegionsRegionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sse_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.sseKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmincidentsReplicationSetRegionsRegionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sseKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseKmsKeyId = this._sseKmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsReplicationSetRegionsRegionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sseKmsKeyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sseKmsKeyId = value.sseKmsKeyId;
    }
  }

  // sse_kms_key_id - computed: true, optional: true, required: false
  private _sseKmsKeyId?: string; 
  public get sseKmsKeyId() {
    return this.getStringAttribute('sse_kms_key_id');
  }
  public set sseKmsKeyId(value: string) {
    this._sseKmsKeyId = value;
  }
  public resetSseKmsKeyId() {
    this._sseKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseKmsKeyIdInput() {
    return this._sseKmsKeyId;
  }
}
export interface SsmincidentsReplicationSetRegions {
  /**
  * The ReplicationSet regional configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmincidents_replication_set#region_configuration SsmincidentsReplicationSet#region_configuration}
  */
  readonly regionConfiguration?: SsmincidentsReplicationSetRegionsRegionConfiguration;
  /**
  * The AWS region name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmincidents_replication_set#region_name SsmincidentsReplicationSet#region_name}
  */
  readonly regionName?: string;
}

export function ssmincidentsReplicationSetRegionsToTerraform(struct?: SsmincidentsReplicationSetRegions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region_configuration: ssmincidentsReplicationSetRegionsRegionConfigurationToTerraform(struct!.regionConfiguration),
    region_name: cdktn.stringToTerraform(struct!.regionName),
  }
}


export function ssmincidentsReplicationSetRegionsToHclTerraform(struct?: SsmincidentsReplicationSetRegions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region_configuration: {
      value: ssmincidentsReplicationSetRegionsRegionConfigurationToHclTerraform(struct!.regionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SsmincidentsReplicationSetRegionsRegionConfiguration",
    },
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

export class SsmincidentsReplicationSetRegionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmincidentsReplicationSetRegions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionConfiguration = this._regionConfiguration?.internalValue;
    }
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsReplicationSetRegions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionConfiguration.internalValue = undefined;
      this._regionName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regionConfiguration.internalValue = value.regionConfiguration;
      this._regionName = value.regionName;
    }
  }

  // region_configuration - computed: true, optional: true, required: false
  private _regionConfiguration = new SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference(this, "region_configuration");
  public get regionConfiguration() {
    return this._regionConfiguration;
  }
  public putRegionConfiguration(value: SsmincidentsReplicationSetRegionsRegionConfiguration) {
    this._regionConfiguration.internalValue = value;
  }
  public resetRegionConfiguration() {
    this._regionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionConfigurationInput() {
    return this._regionConfiguration.internalValue;
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

export class SsmincidentsReplicationSetRegionsList extends cdktn.ComplexList {
  public internalValue? : SsmincidentsReplicationSetRegions[] | cdktn.IResolvable

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
  public get(index: number): SsmincidentsReplicationSetRegionsOutputReference {
    return new SsmincidentsReplicationSetRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmincidentsReplicationSetTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmincidents_replication_set#key SsmincidentsReplicationSet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmincidents_replication_set#value SsmincidentsReplicationSet#value}
  */
  readonly value?: string;
}

export function ssmincidentsReplicationSetTagsToTerraform(struct?: SsmincidentsReplicationSetTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ssmincidentsReplicationSetTagsToHclTerraform(struct?: SsmincidentsReplicationSetTags | cdktn.IResolvable): any {
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

export class SsmincidentsReplicationSetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmincidentsReplicationSetTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SsmincidentsReplicationSetTags | cdktn.IResolvable | undefined) {
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

export class SsmincidentsReplicationSetTagsList extends cdktn.ComplexList {
  public internalValue? : SsmincidentsReplicationSetTags[] | cdktn.IResolvable

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
  public get(index: number): SsmincidentsReplicationSetTagsOutputReference {
    return new SsmincidentsReplicationSetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmincidents_replication_set awscc_ssmincidents_replication_set}
*/
export class SsmincidentsReplicationSet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ssmincidents_replication_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SsmincidentsReplicationSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsmincidentsReplicationSet to import
  * @param importFromId The id of the existing SsmincidentsReplicationSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmincidents_replication_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsmincidentsReplicationSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssmincidents_replication_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ssmincidents_replication_set awscc_ssmincidents_replication_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmincidentsReplicationSetConfig
  */
  public constructor(scope: Construct, id: string, config: SsmincidentsReplicationSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ssmincidents_replication_set',
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
    this._deletionProtected = config.deletionProtected;
    this._regions.internalValue = config.regions;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deletion_protected - computed: true, optional: true, required: false
  private _deletionProtected?: boolean | cdktn.IResolvable; 
  public get deletionProtected() {
    return this.getBooleanAttribute('deletion_protected');
  }
  public set deletionProtected(value: boolean | cdktn.IResolvable) {
    this._deletionProtected = value;
  }
  public resetDeletionProtected() {
    this._deletionProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectedInput() {
    return this._deletionProtected;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // regions - computed: false, optional: false, required: true
  private _regions = new SsmincidentsReplicationSetRegionsList(this, "regions", true);
  public get regions() {
    return this._regions;
  }
  public putRegions(value: SsmincidentsReplicationSetRegions[] | cdktn.IResolvable) {
    this._regions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SsmincidentsReplicationSetTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SsmincidentsReplicationSetTags[] | cdktn.IResolvable) {
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
      deletion_protected: cdktn.booleanToTerraform(this._deletionProtected),
      regions: cdktn.listMapper(ssmincidentsReplicationSetRegionsToTerraform, false)(this._regions.internalValue),
      tags: cdktn.listMapper(ssmincidentsReplicationSetTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_protected: {
        value: cdktn.booleanToHclTerraform(this._deletionProtected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      regions: {
        value: cdktn.listMapperHcl(ssmincidentsReplicationSetRegionsToHclTerraform, false)(this._regions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SsmincidentsReplicationSetRegionsList",
      },
      tags: {
        value: cdktn.listMapperHcl(ssmincidentsReplicationSetTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SsmincidentsReplicationSetTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
