// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/securityhub_security_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSecurityhubSecurityControlConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/securityhub_security_control#id DataAwsccSecurityhubSecurityControl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSecurityhubSecurityControlParametersValue {
}

export function dataAwsccSecurityhubSecurityControlParametersValueToTerraform(struct?: DataAwsccSecurityhubSecurityControlParametersValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubSecurityControlParametersValueToHclTerraform(struct?: DataAwsccSecurityhubSecurityControlParametersValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubSecurityControlParametersValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityhubSecurityControlParametersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubSecurityControlParametersValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean - computed: true, optional: false, required: false
  public get boolean() {
    return this.getBooleanAttribute('boolean');
  }

  // double - computed: true, optional: false, required: false
  public get double() {
    return this.getNumberAttribute('double');
  }

  // enum - computed: true, optional: false, required: false
  public get enum() {
    return this.getStringAttribute('enum');
  }

  // enum_list - computed: true, optional: false, required: false
  public get enumList() {
    return this.getListAttribute('enum_list');
  }

  // integer - computed: true, optional: false, required: false
  public get integer() {
    return this.getNumberAttribute('integer');
  }

  // integer_list - computed: true, optional: false, required: false
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }

  // string - computed: true, optional: false, required: false
  public get string() {
    return this.getStringAttribute('string');
  }

  // string_list - computed: true, optional: false, required: false
  public get stringList() {
    return this.getListAttribute('string_list');
  }
}
export interface DataAwsccSecurityhubSecurityControlParameters {
}

export function dataAwsccSecurityhubSecurityControlParametersToTerraform(struct?: DataAwsccSecurityhubSecurityControlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubSecurityControlParametersToHclTerraform(struct?: DataAwsccSecurityhubSecurityControlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubSecurityControlParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccSecurityhubSecurityControlParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubSecurityControlParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccSecurityhubSecurityControlParametersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }

  // value_type - computed: true, optional: false, required: false
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
}

export class DataAwsccSecurityhubSecurityControlParametersMap extends cdktn.ComplexMap {

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
  public get(key: string): DataAwsccSecurityhubSecurityControlParametersOutputReference {
    return new DataAwsccSecurityhubSecurityControlParametersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/securityhub_security_control awscc_securityhub_security_control}
*/
export class DataAwsccSecurityhubSecurityControl extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_securityhub_security_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSecurityhubSecurityControl resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSecurityhubSecurityControl to import
  * @param importFromId The id of the existing DataAwsccSecurityhubSecurityControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/securityhub_security_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSecurityhubSecurityControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_security_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/securityhub_security_control awscc_securityhub_security_control} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSecurityhubSecurityControlConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSecurityhubSecurityControlConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_securityhub_security_control',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // last_update_reason - computed: true, optional: false, required: false
  public get lastUpdateReason() {
    return this.getStringAttribute('last_update_reason');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAwsccSecurityhubSecurityControlParametersMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // security_control_arn - computed: true, optional: false, required: false
  public get securityControlArn() {
    return this.getStringAttribute('security_control_arn');
  }

  // security_control_id - computed: true, optional: false, required: false
  public get securityControlId() {
    return this.getStringAttribute('security_control_id');
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
