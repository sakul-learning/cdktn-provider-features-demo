// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/verifiedpermissions_policy_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccVerifiedpermissionsPolicyStoreConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/verifiedpermissions_policy_store#id DataAwsccVerifiedpermissionsPolicyStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection {
}

export function dataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionToTerraform(struct?: DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionToHclTerraform(struct?: DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}
export interface DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings {
}

export function dataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsToTerraform(struct?: DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsToHclTerraform(struct?: DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_context - computed: true, optional: false, required: false
  private _encryptionContext = new cdktn.StringMap(this, "encryption_context");
  public get encryptionContext() {
    return this._encryptionContext;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings {
}

export function dataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsToTerraform(struct?: DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsToHclTerraform(struct?: DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // kms_encryption_settings - computed: true, optional: false, required: false
  private _kmsEncryptionSettings = new DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference(this, "kms_encryption_settings");
  public get kmsEncryptionSettings() {
    return this._kmsEncryptionSettings;
  }
}
export interface DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState {
}

export function dataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateToTerraform(struct?: DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateToHclTerraform(struct?: DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_context - computed: true, optional: false, required: false
  private _encryptionContext = new cdktn.StringMap(this, "encryption_context");
  public get encryptionContext() {
    return this._encryptionContext;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface DataAwsccVerifiedpermissionsPolicyStoreEncryptionState {
}

export function dataAwsccVerifiedpermissionsPolicyStoreEncryptionStateToTerraform(struct?: DataAwsccVerifiedpermissionsPolicyStoreEncryptionState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsPolicyStoreEncryptionStateToHclTerraform(struct?: DataAwsccVerifiedpermissionsPolicyStoreEncryptionState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsPolicyStoreEncryptionState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsPolicyStoreEncryptionState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // kms_encryption_state - computed: true, optional: false, required: false
  private _kmsEncryptionState = new DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference(this, "kms_encryption_state");
  public get kmsEncryptionState() {
    return this._kmsEncryptionState;
  }
}
export interface DataAwsccVerifiedpermissionsPolicyStoreSchema {
}

export function dataAwsccVerifiedpermissionsPolicyStoreSchemaToTerraform(struct?: DataAwsccVerifiedpermissionsPolicyStoreSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsPolicyStoreSchemaToHclTerraform(struct?: DataAwsccVerifiedpermissionsPolicyStoreSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsPolicyStoreSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsPolicyStoreSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cedar_json - computed: true, optional: false, required: false
  public get cedarJson() {
    return this.getStringAttribute('cedar_json');
  }
}
export interface DataAwsccVerifiedpermissionsPolicyStoreTags {
}

export function dataAwsccVerifiedpermissionsPolicyStoreTagsToTerraform(struct?: DataAwsccVerifiedpermissionsPolicyStoreTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsPolicyStoreTagsToHclTerraform(struct?: DataAwsccVerifiedpermissionsPolicyStoreTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccVerifiedpermissionsPolicyStoreTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsPolicyStoreTags | undefined) {
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

export class DataAwsccVerifiedpermissionsPolicyStoreTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference {
    return new DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccVerifiedpermissionsPolicyStoreValidationSettings {
}

export function dataAwsccVerifiedpermissionsPolicyStoreValidationSettingsToTerraform(struct?: DataAwsccVerifiedpermissionsPolicyStoreValidationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsPolicyStoreValidationSettingsToHclTerraform(struct?: DataAwsccVerifiedpermissionsPolicyStoreValidationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsPolicyStoreValidationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsPolicyStoreValidationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/verifiedpermissions_policy_store awscc_verifiedpermissions_policy_store}
*/
export class DataAwsccVerifiedpermissionsPolicyStore extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_verifiedpermissions_policy_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccVerifiedpermissionsPolicyStore resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccVerifiedpermissionsPolicyStore to import
  * @param importFromId The id of the existing DataAwsccVerifiedpermissionsPolicyStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/verifiedpermissions_policy_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccVerifiedpermissionsPolicyStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_verifiedpermissions_policy_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/verifiedpermissions_policy_store awscc_verifiedpermissions_policy_store} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccVerifiedpermissionsPolicyStoreConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccVerifiedpermissionsPolicyStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_verifiedpermissions_policy_store',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deletion_protection - computed: true, optional: false, required: false
  private _deletionProtection = new DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference(this, "deletion_protection");
  public get deletionProtection() {
    return this._deletionProtection;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // encryption_settings - computed: true, optional: false, required: false
  private _encryptionSettings = new DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference(this, "encryption_settings");
  public get encryptionSettings() {
    return this._encryptionSettings;
  }

  // encryption_state - computed: true, optional: false, required: false
  private _encryptionState = new DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference(this, "encryption_state");
  public get encryptionState() {
    return this._encryptionState;
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

  // policy_store_id - computed: true, optional: false, required: false
  public get policyStoreId() {
    return this.getStringAttribute('policy_store_id');
  }

  // schema - computed: true, optional: false, required: false
  private _schema = new DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccVerifiedpermissionsPolicyStoreTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // validation_settings - computed: true, optional: false, required: false
  private _validationSettings = new DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference(this, "validation_settings");
  public get validationSettings() {
    return this._validationSettings;
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
