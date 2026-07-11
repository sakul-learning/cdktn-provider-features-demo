// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/paymentcryptography_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccPaymentcryptographyKeyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/paymentcryptography_key#id DataAwsccPaymentcryptographyKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse {
}

export function dataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseToTerraform(struct?: DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseToHclTerraform(struct?: DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decrypt - computed: true, optional: false, required: false
  public get decrypt() {
    return this.getBooleanAttribute('decrypt');
  }

  // derive_key - computed: true, optional: false, required: false
  public get deriveKey() {
    return this.getBooleanAttribute('derive_key');
  }

  // encrypt - computed: true, optional: false, required: false
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }

  // generate - computed: true, optional: false, required: false
  public get generate() {
    return this.getBooleanAttribute('generate');
  }

  // no_restrictions - computed: true, optional: false, required: false
  public get noRestrictions() {
    return this.getBooleanAttribute('no_restrictions');
  }

  // sign - computed: true, optional: false, required: false
  public get sign() {
    return this.getBooleanAttribute('sign');
  }

  // unwrap - computed: true, optional: false, required: false
  public get unwrap() {
    return this.getBooleanAttribute('unwrap');
  }

  // verify - computed: true, optional: false, required: false
  public get verify() {
    return this.getBooleanAttribute('verify');
  }

  // wrap - computed: true, optional: false, required: false
  public get wrap() {
    return this.getBooleanAttribute('wrap');
  }
}
export interface DataAwsccPaymentcryptographyKeyKeyAttributes {
}

export function dataAwsccPaymentcryptographyKeyKeyAttributesToTerraform(struct?: DataAwsccPaymentcryptographyKeyKeyAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPaymentcryptographyKeyKeyAttributesToHclTerraform(struct?: DataAwsccPaymentcryptographyKeyKeyAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPaymentcryptographyKeyKeyAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPaymentcryptographyKeyKeyAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // key_class - computed: true, optional: false, required: false
  public get keyClass() {
    return this.getStringAttribute('key_class');
  }

  // key_modes_of_use - computed: true, optional: false, required: false
  private _keyModesOfUse = new DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference(this, "key_modes_of_use");
  public get keyModesOfUse() {
    return this._keyModesOfUse;
  }

  // key_usage - computed: true, optional: false, required: false
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }
}
export interface DataAwsccPaymentcryptographyKeyReplicationStatus {
}

export function dataAwsccPaymentcryptographyKeyReplicationStatusToTerraform(struct?: DataAwsccPaymentcryptographyKeyReplicationStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPaymentcryptographyKeyReplicationStatusToHclTerraform(struct?: DataAwsccPaymentcryptographyKeyReplicationStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccPaymentcryptographyKeyReplicationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPaymentcryptographyKeyReplicationStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }
}

export class DataAwsccPaymentcryptographyKeyReplicationStatusMap extends cdktn.ComplexMap {

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
  public get(key: string): DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference {
    return new DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccPaymentcryptographyKeyTags {
}

export function dataAwsccPaymentcryptographyKeyTagsToTerraform(struct?: DataAwsccPaymentcryptographyKeyTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPaymentcryptographyKeyTagsToHclTerraform(struct?: DataAwsccPaymentcryptographyKeyTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPaymentcryptographyKeyTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPaymentcryptographyKeyTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPaymentcryptographyKeyTags | undefined) {
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

export class DataAwsccPaymentcryptographyKeyTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPaymentcryptographyKeyTagsOutputReference {
    return new DataAwsccPaymentcryptographyKeyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/paymentcryptography_key awscc_paymentcryptography_key}
*/
export class DataAwsccPaymentcryptographyKey extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_paymentcryptography_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccPaymentcryptographyKey resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccPaymentcryptographyKey to import
  * @param importFromId The id of the existing DataAwsccPaymentcryptographyKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/paymentcryptography_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccPaymentcryptographyKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_paymentcryptography_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/paymentcryptography_key awscc_paymentcryptography_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccPaymentcryptographyKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccPaymentcryptographyKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_paymentcryptography_key',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // derive_key_usage - computed: true, optional: false, required: false
  public get deriveKeyUsage() {
    return this.getStringAttribute('derive_key_usage');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // exportable - computed: true, optional: false, required: false
  public get exportable() {
    return this.getBooleanAttribute('exportable');
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

  // key_attributes - computed: true, optional: false, required: false
  private _keyAttributes = new DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference(this, "key_attributes");
  public get keyAttributes() {
    return this._keyAttributes;
  }

  // key_check_value_algorithm - computed: true, optional: false, required: false
  public get keyCheckValueAlgorithm() {
    return this.getStringAttribute('key_check_value_algorithm');
  }

  // key_identifier - computed: true, optional: false, required: false
  public get keyIdentifier() {
    return this.getStringAttribute('key_identifier');
  }

  // key_origin - computed: true, optional: false, required: false
  public get keyOrigin() {
    return this.getStringAttribute('key_origin');
  }

  // key_state - computed: true, optional: false, required: false
  public get keyState() {
    return this.getStringAttribute('key_state');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // replication_regions - computed: true, optional: false, required: false
  public get replicationRegions() {
    return this.getListAttribute('replication_regions');
  }

  // replication_status - computed: true, optional: false, required: false
  private _replicationStatus = new DataAwsccPaymentcryptographyKeyReplicationStatusMap(this, "replication_status");
  public get replicationStatus() {
    return this._replicationStatus;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccPaymentcryptographyKeyTagsList(this, "tags", false);
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
