// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TransferProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * AS2 identifier agreed with a trading partner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_profile#as_2_id TransferProfile#as_2_id}
  */
  readonly as2Id: string;
  /**
  * List of the certificate IDs associated with this profile to be used for encryption and signing of AS2 messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_profile#certificate_ids TransferProfile#certificate_ids}
  */
  readonly certificateIds?: string[];
  /**
  * Enum specifying whether the profile is local or associated with a trading partner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_profile#profile_type TransferProfile#profile_type}
  */
  readonly profileType: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_profile#tags TransferProfile#tags}
  */
  readonly tags?: TransferProfileTags[] | cdktn.IResolvable;
}
export interface TransferProfileTags {
  /**
  * The name assigned to the tag that you create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_profile#key TransferProfile#key}
  */
  readonly key?: string;
  /**
  * Contains one or more values that you assigned to the key name you create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_profile#value TransferProfile#value}
  */
  readonly value?: string;
}

export function transferProfileTagsToTerraform(struct?: TransferProfileTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function transferProfileTagsToHclTerraform(struct?: TransferProfileTags | cdktn.IResolvable): any {
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

export class TransferProfileTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): TransferProfileTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: TransferProfileTags | cdktn.IResolvable | undefined) {
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

export class TransferProfileTagsList extends cdktn.ComplexList {
  public internalValue? : TransferProfileTags[] | cdktn.IResolvable

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
  public get(index: number): TransferProfileTagsOutputReference {
    return new TransferProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_profile awscc_transfer_profile}
*/
export class TransferProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_transfer_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TransferProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransferProfile to import
  * @param importFromId The id of the existing TransferProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransferProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_transfer_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/transfer_profile awscc_transfer_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransferProfileConfig
  */
  public constructor(scope: Construct, id: string, config: TransferProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_transfer_profile',
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
    this._as2Id = config.as2Id;
    this._certificateIds = config.certificateIds;
    this._profileType = config.profileType;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // as_2_id - computed: false, optional: false, required: true
  private _as2Id?: string; 
  public get as2Id() {
    return this.getStringAttribute('as_2_id');
  }
  public set as2Id(value: string) {
    this._as2Id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get as2IdInput() {
    return this._as2Id;
  }

  // certificate_ids - computed: true, optional: true, required: false
  private _certificateIds?: string[]; 
  public get certificateIds() {
    return this.getListAttribute('certificate_ids');
  }
  public set certificateIds(value: string[]) {
    this._certificateIds = value;
  }
  public resetCertificateIds() {
    this._certificateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdsInput() {
    return this._certificateIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // profile_type - computed: false, optional: false, required: true
  private _profileType?: string; 
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }
  public set profileType(value: string) {
    this._profileType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeInput() {
    return this._profileType;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new TransferProfileTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: TransferProfileTags[] | cdktn.IResolvable) {
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
      as_2_id: cdktn.stringToTerraform(this._as2Id),
      certificate_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._certificateIds),
      profile_type: cdktn.stringToTerraform(this._profileType),
      tags: cdktn.listMapper(transferProfileTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as_2_id: {
        value: cdktn.stringToHclTerraform(this._as2Id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._certificateIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      profile_type: {
        value: cdktn.stringToHclTerraform(this._profileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(transferProfileTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TransferProfileTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
