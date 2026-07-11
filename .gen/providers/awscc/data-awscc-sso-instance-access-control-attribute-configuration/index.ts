// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sso_instance_access_control_attribute_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sso_instance_access_control_attribute_configuration#id DataAwsccSsoInstanceAccessControlAttributeConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue {
}

export function dataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueToTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueToHclTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getListAttribute('source');
  }
}
export interface DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes {
}

export function dataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesToTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesToHclTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes | undefined) {
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
  private _value = new DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference {
    return new DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue {
}

export function dataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueToTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueToHclTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getListAttribute('source');
  }
}
export interface DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes {
}

export function dataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesToTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesToHclTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes | undefined) {
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
  private _value = new DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference {
    return new DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration {
}

export function dataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationToTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationToHclTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_control_attributes - computed: true, optional: false, required: false
  private _accessControlAttributes = new DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList(this, "access_control_attributes", false);
  public get accessControlAttributes() {
    return this._accessControlAttributes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sso_instance_access_control_attribute_configuration awscc_sso_instance_access_control_attribute_configuration}
*/
export class DataAwsccSsoInstanceAccessControlAttributeConfiguration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sso_instance_access_control_attribute_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSsoInstanceAccessControlAttributeConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSsoInstanceAccessControlAttributeConfiguration to import
  * @param importFromId The id of the existing DataAwsccSsoInstanceAccessControlAttributeConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sso_instance_access_control_attribute_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSsoInstanceAccessControlAttributeConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sso_instance_access_control_attribute_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sso_instance_access_control_attribute_configuration awscc_sso_instance_access_control_attribute_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sso_instance_access_control_attribute_configuration',
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

  // access_control_attributes - computed: true, optional: false, required: false
  private _accessControlAttributes = new DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList(this, "access_control_attributes", false);
  public get accessControlAttributes() {
    return this._accessControlAttributes;
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

  // instance_access_control_attribute_configuration - computed: true, optional: false, required: false
  private _instanceAccessControlAttributeConfiguration = new DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference(this, "instance_access_control_attribute_configuration");
  public get instanceAccessControlAttributeConfiguration() {
    return this._instanceAccessControlAttributeConfiguration;
  }

  // instance_arn - computed: true, optional: false, required: false
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
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
