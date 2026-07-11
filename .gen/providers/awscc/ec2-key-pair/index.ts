// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_key_pair
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2KeyPairConfig extends cdktn.TerraformMetaArguments {
  /**
  * The format of the key pair.
  *  Default: ``pem``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_key_pair#key_format Ec2KeyPair#key_format}
  */
  readonly keyFormat?: string;
  /**
  * A unique name for the key pair.
  *  Constraints: Up to 255 ASCII characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_key_pair#key_name Ec2KeyPair#key_name}
  */
  readonly keyName: string;
  /**
  * The type of key pair. Note that ED25519 keys are not supported for Windows instances.
  *  If the ``PublicKeyMaterial`` property is specified, the ``KeyType`` property is ignored, and the key type is inferred from the ``PublicKeyMaterial`` value.
  *  Default: ``rsa``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_key_pair#key_type Ec2KeyPair#key_type}
  */
  readonly keyType?: string;
  /**
  * The public key material. The ``PublicKeyMaterial`` property is used to import a key pair. If this property is not specified, then a new key pair will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_key_pair#public_key_material Ec2KeyPair#public_key_material}
  */
  readonly publicKeyMaterial?: string;
  /**
  * The tags to apply to the key pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_key_pair#tags Ec2KeyPair#tags}
  */
  readonly tags?: Ec2KeyPairTags[] | cdktn.IResolvable;
}
export interface Ec2KeyPairTags {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_key_pair#key Ec2KeyPair#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_key_pair#value Ec2KeyPair#value}
  */
  readonly value?: string;
}

export function ec2KeyPairTagsToTerraform(struct?: Ec2KeyPairTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ec2KeyPairTagsToHclTerraform(struct?: Ec2KeyPairTags | cdktn.IResolvable): any {
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

export class Ec2KeyPairTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2KeyPairTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ec2KeyPairTags | cdktn.IResolvable | undefined) {
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

export class Ec2KeyPairTagsList extends cdktn.ComplexList {
  public internalValue? : Ec2KeyPairTags[] | cdktn.IResolvable

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
  public get(index: number): Ec2KeyPairTagsOutputReference {
    return new Ec2KeyPairTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_key_pair awscc_ec2_key_pair}
*/
export class Ec2KeyPair extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_key_pair";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2KeyPair resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2KeyPair to import
  * @param importFromId The id of the existing Ec2KeyPair that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_key_pair#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2KeyPair to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_key_pair", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_key_pair awscc_ec2_key_pair} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2KeyPairConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2KeyPairConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_key_pair',
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
    this._keyFormat = config.keyFormat;
    this._keyName = config.keyName;
    this._keyType = config.keyType;
    this._publicKeyMaterial = config.publicKeyMaterial;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_fingerprint - computed: true, optional: false, required: false
  public get keyFingerprint() {
    return this.getStringAttribute('key_fingerprint');
  }

  // key_format - computed: true, optional: true, required: false
  private _keyFormat?: string; 
  public get keyFormat() {
    return this.getStringAttribute('key_format');
  }
  public set keyFormat(value: string) {
    this._keyFormat = value;
  }
  public resetKeyFormat() {
    this._keyFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFormatInput() {
    return this._keyFormat;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // key_pair_id - computed: true, optional: false, required: false
  public get keyPairId() {
    return this.getStringAttribute('key_pair_id');
  }

  // key_type - computed: true, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // public_key_material - computed: true, optional: true, required: false
  private _publicKeyMaterial?: string; 
  public get publicKeyMaterial() {
    return this.getStringAttribute('public_key_material');
  }
  public set publicKeyMaterial(value: string) {
    this._publicKeyMaterial = value;
  }
  public resetPublicKeyMaterial() {
    this._publicKeyMaterial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyMaterialInput() {
    return this._publicKeyMaterial;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Ec2KeyPairTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Ec2KeyPairTags[] | cdktn.IResolvable) {
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
      key_format: cdktn.stringToTerraform(this._keyFormat),
      key_name: cdktn.stringToTerraform(this._keyName),
      key_type: cdktn.stringToTerraform(this._keyType),
      public_key_material: cdktn.stringToTerraform(this._publicKeyMaterial),
      tags: cdktn.listMapper(ec2KeyPairTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key_format: {
        value: cdktn.stringToHclTerraform(this._keyFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_name: {
        value: cdktn.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_type: {
        value: cdktn.stringToHclTerraform(this._keyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key_material: {
        value: cdktn.stringToHclTerraform(this._publicKeyMaterial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(ec2KeyPairTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Ec2KeyPairTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
