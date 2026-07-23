// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GroundstationMissionProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Post-pass time needed after the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile#contact_post_pass_duration_seconds GroundstationMissionProfile#contact_post_pass_duration_seconds}
  */
  readonly contactPostPassDurationSeconds?: number;
  /**
  * Pre-pass time needed before the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile#contact_pre_pass_duration_seconds GroundstationMissionProfile#contact_pre_pass_duration_seconds}
  */
  readonly contactPrePassDurationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile#dataflow_edges GroundstationMissionProfile#dataflow_edges}
  */
  readonly dataflowEdges: GroundstationMissionProfileDataflowEdges[] | cdktn.IResolvable;
  /**
  * Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile#minimum_viable_contact_duration_seconds GroundstationMissionProfile#minimum_viable_contact_duration_seconds}
  */
  readonly minimumViableContactDurationSeconds: number;
  /**
  * A name used to identify a mission profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile#name GroundstationMissionProfile#name}
  */
  readonly name: string;
  /**
  * The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile#streams_kms_key GroundstationMissionProfile#streams_kms_key}
  */
  readonly streamsKmsKey?: GroundstationMissionProfileStreamsKmsKey;
  /**
  * The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile#streams_kms_role GroundstationMissionProfile#streams_kms_role}
  */
  readonly streamsKmsRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile#tags GroundstationMissionProfile#tags}
  */
  readonly tags?: GroundstationMissionProfileTags[] | cdktn.IResolvable;
  /**
  * ARN of a Config resource of type TelemetrySinkConfig used for telemetry data sink configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile#telemetry_sink_config_arn GroundstationMissionProfile#telemetry_sink_config_arn}
  */
  readonly telemetrySinkConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile#tracking_config_arn GroundstationMissionProfile#tracking_config_arn}
  */
  readonly trackingConfigArn: string;
}
export interface GroundstationMissionProfileDataflowEdges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile#destination GroundstationMissionProfile#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile#source GroundstationMissionProfile#source}
  */
  readonly source?: string;
}

export function groundstationMissionProfileDataflowEdgesToTerraform(struct?: GroundstationMissionProfileDataflowEdges | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function groundstationMissionProfileDataflowEdgesToHclTerraform(struct?: GroundstationMissionProfileDataflowEdges | cdktn.IResolvable): any {
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
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationMissionProfileDataflowEdgesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GroundstationMissionProfileDataflowEdges | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationMissionProfileDataflowEdges | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._source = value.source;
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
}

export class GroundstationMissionProfileDataflowEdgesList extends cdktn.ComplexList {
  public internalValue? : GroundstationMissionProfileDataflowEdges[] | cdktn.IResolvable

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
  public get(index: number): GroundstationMissionProfileDataflowEdgesOutputReference {
    return new GroundstationMissionProfileDataflowEdgesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroundstationMissionProfileStreamsKmsKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile#kms_alias_arn GroundstationMissionProfile#kms_alias_arn}
  */
  readonly kmsAliasArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile#kms_alias_name GroundstationMissionProfile#kms_alias_name}
  */
  readonly kmsAliasName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile#kms_key_arn GroundstationMissionProfile#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function groundstationMissionProfileStreamsKmsKeyToTerraform(struct?: GroundstationMissionProfileStreamsKmsKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_alias_arn: cdktn.stringToTerraform(struct!.kmsAliasArn),
    kms_alias_name: cdktn.stringToTerraform(struct!.kmsAliasName),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function groundstationMissionProfileStreamsKmsKeyToHclTerraform(struct?: GroundstationMissionProfileStreamsKmsKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_alias_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsAliasArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_alias_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsAliasName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationMissionProfileStreamsKmsKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationMissionProfileStreamsKmsKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsAliasArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsAliasArn = this._kmsAliasArn;
    }
    if (this._kmsAliasName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsAliasName = this._kmsAliasName;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationMissionProfileStreamsKmsKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsAliasArn = undefined;
      this._kmsAliasName = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsAliasArn = value.kmsAliasArn;
      this._kmsAliasName = value.kmsAliasName;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // kms_alias_arn - computed: true, optional: true, required: false
  private _kmsAliasArn?: string; 
  public get kmsAliasArn() {
    return this.getStringAttribute('kms_alias_arn');
  }
  public set kmsAliasArn(value: string) {
    this._kmsAliasArn = value;
  }
  public resetKmsAliasArn() {
    this._kmsAliasArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsAliasArnInput() {
    return this._kmsAliasArn;
  }

  // kms_alias_name - computed: true, optional: true, required: false
  private _kmsAliasName?: string; 
  public get kmsAliasName() {
    return this.getStringAttribute('kms_alias_name');
  }
  public set kmsAliasName(value: string) {
    this._kmsAliasName = value;
  }
  public resetKmsAliasName() {
    this._kmsAliasName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsAliasNameInput() {
    return this._kmsAliasName;
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface GroundstationMissionProfileTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile#key GroundstationMissionProfile#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile#value GroundstationMissionProfile#value}
  */
  readonly value?: string;
}

export function groundstationMissionProfileTagsToTerraform(struct?: GroundstationMissionProfileTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function groundstationMissionProfileTagsToHclTerraform(struct?: GroundstationMissionProfileTags | cdktn.IResolvable): any {
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

export class GroundstationMissionProfileTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GroundstationMissionProfileTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GroundstationMissionProfileTags | cdktn.IResolvable | undefined) {
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

export class GroundstationMissionProfileTagsList extends cdktn.ComplexList {
  public internalValue? : GroundstationMissionProfileTags[] | cdktn.IResolvable

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
  public get(index: number): GroundstationMissionProfileTagsOutputReference {
    return new GroundstationMissionProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile awscc_groundstation_mission_profile}
*/
export class GroundstationMissionProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_groundstation_mission_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GroundstationMissionProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroundstationMissionProfile to import
  * @param importFromId The id of the existing GroundstationMissionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroundstationMissionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_groundstation_mission_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/groundstation_mission_profile awscc_groundstation_mission_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroundstationMissionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: GroundstationMissionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_groundstation_mission_profile',
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
    this._contactPostPassDurationSeconds = config.contactPostPassDurationSeconds;
    this._contactPrePassDurationSeconds = config.contactPrePassDurationSeconds;
    this._dataflowEdges.internalValue = config.dataflowEdges;
    this._minimumViableContactDurationSeconds = config.minimumViableContactDurationSeconds;
    this._name = config.name;
    this._streamsKmsKey.internalValue = config.streamsKmsKey;
    this._streamsKmsRole = config.streamsKmsRole;
    this._tags.internalValue = config.tags;
    this._telemetrySinkConfigArn = config.telemetrySinkConfigArn;
    this._trackingConfigArn = config.trackingConfigArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // contact_post_pass_duration_seconds - computed: true, optional: true, required: false
  private _contactPostPassDurationSeconds?: number; 
  public get contactPostPassDurationSeconds() {
    return this.getNumberAttribute('contact_post_pass_duration_seconds');
  }
  public set contactPostPassDurationSeconds(value: number) {
    this._contactPostPassDurationSeconds = value;
  }
  public resetContactPostPassDurationSeconds() {
    this._contactPostPassDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPostPassDurationSecondsInput() {
    return this._contactPostPassDurationSeconds;
  }

  // contact_pre_pass_duration_seconds - computed: true, optional: true, required: false
  private _contactPrePassDurationSeconds?: number; 
  public get contactPrePassDurationSeconds() {
    return this.getNumberAttribute('contact_pre_pass_duration_seconds');
  }
  public set contactPrePassDurationSeconds(value: number) {
    this._contactPrePassDurationSeconds = value;
  }
  public resetContactPrePassDurationSeconds() {
    this._contactPrePassDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPrePassDurationSecondsInput() {
    return this._contactPrePassDurationSeconds;
  }

  // dataflow_edges - computed: false, optional: false, required: true
  private _dataflowEdges = new GroundstationMissionProfileDataflowEdgesList(this, "dataflow_edges", false);
  public get dataflowEdges() {
    return this._dataflowEdges;
  }
  public putDataflowEdges(value: GroundstationMissionProfileDataflowEdges[] | cdktn.IResolvable) {
    this._dataflowEdges.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataflowEdgesInput() {
    return this._dataflowEdges.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // minimum_viable_contact_duration_seconds - computed: false, optional: false, required: true
  private _minimumViableContactDurationSeconds?: number; 
  public get minimumViableContactDurationSeconds() {
    return this.getNumberAttribute('minimum_viable_contact_duration_seconds');
  }
  public set minimumViableContactDurationSeconds(value: number) {
    this._minimumViableContactDurationSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumViableContactDurationSecondsInput() {
    return this._minimumViableContactDurationSeconds;
  }

  // mission_profile_id - computed: true, optional: false, required: false
  public get missionProfileId() {
    return this.getStringAttribute('mission_profile_id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // streams_kms_key - computed: true, optional: true, required: false
  private _streamsKmsKey = new GroundstationMissionProfileStreamsKmsKeyOutputReference(this, "streams_kms_key");
  public get streamsKmsKey() {
    return this._streamsKmsKey;
  }
  public putStreamsKmsKey(value: GroundstationMissionProfileStreamsKmsKey) {
    this._streamsKmsKey.internalValue = value;
  }
  public resetStreamsKmsKey() {
    this._streamsKmsKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsKmsKeyInput() {
    return this._streamsKmsKey.internalValue;
  }

  // streams_kms_role - computed: true, optional: true, required: false
  private _streamsKmsRole?: string; 
  public get streamsKmsRole() {
    return this.getStringAttribute('streams_kms_role');
  }
  public set streamsKmsRole(value: string) {
    this._streamsKmsRole = value;
  }
  public resetStreamsKmsRole() {
    this._streamsKmsRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsKmsRoleInput() {
    return this._streamsKmsRole;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new GroundstationMissionProfileTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: GroundstationMissionProfileTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // telemetry_sink_config_arn - computed: true, optional: true, required: false
  private _telemetrySinkConfigArn?: string; 
  public get telemetrySinkConfigArn() {
    return this.getStringAttribute('telemetry_sink_config_arn');
  }
  public set telemetrySinkConfigArn(value: string) {
    this._telemetrySinkConfigArn = value;
  }
  public resetTelemetrySinkConfigArn() {
    this._telemetrySinkConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetrySinkConfigArnInput() {
    return this._telemetrySinkConfigArn;
  }

  // tracking_config_arn - computed: false, optional: false, required: true
  private _trackingConfigArn?: string; 
  public get trackingConfigArn() {
    return this.getStringAttribute('tracking_config_arn');
  }
  public set trackingConfigArn(value: string) {
    this._trackingConfigArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingConfigArnInput() {
    return this._trackingConfigArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_post_pass_duration_seconds: cdktn.numberToTerraform(this._contactPostPassDurationSeconds),
      contact_pre_pass_duration_seconds: cdktn.numberToTerraform(this._contactPrePassDurationSeconds),
      dataflow_edges: cdktn.listMapper(groundstationMissionProfileDataflowEdgesToTerraform, false)(this._dataflowEdges.internalValue),
      minimum_viable_contact_duration_seconds: cdktn.numberToTerraform(this._minimumViableContactDurationSeconds),
      name: cdktn.stringToTerraform(this._name),
      streams_kms_key: groundstationMissionProfileStreamsKmsKeyToTerraform(this._streamsKmsKey.internalValue),
      streams_kms_role: cdktn.stringToTerraform(this._streamsKmsRole),
      tags: cdktn.listMapper(groundstationMissionProfileTagsToTerraform, false)(this._tags.internalValue),
      telemetry_sink_config_arn: cdktn.stringToTerraform(this._telemetrySinkConfigArn),
      tracking_config_arn: cdktn.stringToTerraform(this._trackingConfigArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_post_pass_duration_seconds: {
        value: cdktn.numberToHclTerraform(this._contactPostPassDurationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      contact_pre_pass_duration_seconds: {
        value: cdktn.numberToHclTerraform(this._contactPrePassDurationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dataflow_edges: {
        value: cdktn.listMapperHcl(groundstationMissionProfileDataflowEdgesToHclTerraform, false)(this._dataflowEdges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroundstationMissionProfileDataflowEdgesList",
      },
      minimum_viable_contact_duration_seconds: {
        value: cdktn.numberToHclTerraform(this._minimumViableContactDurationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      streams_kms_key: {
        value: groundstationMissionProfileStreamsKmsKeyToHclTerraform(this._streamsKmsKey.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroundstationMissionProfileStreamsKmsKey",
      },
      streams_kms_role: {
        value: cdktn.stringToHclTerraform(this._streamsKmsRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(groundstationMissionProfileTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroundstationMissionProfileTagsList",
      },
      telemetry_sink_config_arn: {
        value: cdktn.stringToHclTerraform(this._telemetrySinkConfigArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracking_config_arn: {
        value: cdktn.stringToHclTerraform(this._trackingConfigArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
