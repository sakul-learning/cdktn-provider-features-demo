// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mpa_identity_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MpaIdentitySourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mpa_identity_source#identity_source_parameters MpaIdentitySource#identity_source_parameters}
  */
  readonly identitySourceParameters: MpaIdentitySourceIdentitySourceParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mpa_identity_source#tags MpaIdentitySource#tags}
  */
  readonly tags?: MpaIdentitySourceTags[] | cdktn.IResolvable;
}
export interface MpaIdentitySourceIdentitySourceParametersIamIdentityCenter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mpa_identity_source#instance_arn MpaIdentitySource#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mpa_identity_source#region MpaIdentitySource#region}
  */
  readonly region: string;
}

export function mpaIdentitySourceIdentitySourceParametersIamIdentityCenterToTerraform(struct?: MpaIdentitySourceIdentitySourceParametersIamIdentityCenter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_arn: cdktn.stringToTerraform(struct!.instanceArn),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function mpaIdentitySourceIdentitySourceParametersIamIdentityCenterToHclTerraform(struct?: MpaIdentitySourceIdentitySourceParametersIamIdentityCenter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_arn: {
      value: cdktn.stringToHclTerraform(struct!.instanceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MpaIdentitySourceIdentitySourceParametersIamIdentityCenter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceArn = this._instanceArn;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpaIdentitySourceIdentitySourceParametersIamIdentityCenter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceArn = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceArn = value.instanceArn;
      this._region = value.region;
    }
  }

  // approval_portal_url - computed: true, optional: false, required: false
  public get approvalPortalUrl() {
    return this.getStringAttribute('approval_portal_url');
  }

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn?: string; 
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpaIdentitySourceIdentitySourceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mpa_identity_source#iam_identity_center MpaIdentitySource#iam_identity_center}
  */
  readonly iamIdentityCenter: MpaIdentitySourceIdentitySourceParametersIamIdentityCenter;
}

export function mpaIdentitySourceIdentitySourceParametersToTerraform(struct?: MpaIdentitySourceIdentitySourceParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iam_identity_center: mpaIdentitySourceIdentitySourceParametersIamIdentityCenterToTerraform(struct!.iamIdentityCenter),
  }
}


export function mpaIdentitySourceIdentitySourceParametersToHclTerraform(struct?: MpaIdentitySourceIdentitySourceParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iam_identity_center: {
      value: mpaIdentitySourceIdentitySourceParametersIamIdentityCenterToHclTerraform(struct!.iamIdentityCenter),
      isBlock: true,
      type: "struct",
      storageClassType: "MpaIdentitySourceIdentitySourceParametersIamIdentityCenter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpaIdentitySourceIdentitySourceParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MpaIdentitySourceIdentitySourceParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamIdentityCenter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamIdentityCenter = this._iamIdentityCenter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpaIdentitySourceIdentitySourceParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamIdentityCenter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamIdentityCenter.internalValue = value.iamIdentityCenter;
    }
  }

  // iam_identity_center - computed: false, optional: false, required: true
  private _iamIdentityCenter = new MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference(this, "iam_identity_center");
  public get iamIdentityCenter() {
    return this._iamIdentityCenter;
  }
  public putIamIdentityCenter(value: MpaIdentitySourceIdentitySourceParametersIamIdentityCenter) {
    this._iamIdentityCenter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamIdentityCenterInput() {
    return this._iamIdentityCenter.internalValue;
  }
}
export interface MpaIdentitySourceTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mpa_identity_source#key MpaIdentitySource#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mpa_identity_source#value MpaIdentitySource#value}
  */
  readonly value?: string;
}

export function mpaIdentitySourceTagsToTerraform(struct?: MpaIdentitySourceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function mpaIdentitySourceTagsToHclTerraform(struct?: MpaIdentitySourceTags | cdktn.IResolvable): any {
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

export class MpaIdentitySourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MpaIdentitySourceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MpaIdentitySourceTags | cdktn.IResolvable | undefined) {
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

export class MpaIdentitySourceTagsList extends cdktn.ComplexList {
  public internalValue? : MpaIdentitySourceTags[] | cdktn.IResolvable

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
  public get(index: number): MpaIdentitySourceTagsOutputReference {
    return new MpaIdentitySourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mpa_identity_source awscc_mpa_identity_source}
*/
export class MpaIdentitySource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mpa_identity_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MpaIdentitySource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MpaIdentitySource to import
  * @param importFromId The id of the existing MpaIdentitySource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mpa_identity_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MpaIdentitySource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mpa_identity_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mpa_identity_source awscc_mpa_identity_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpaIdentitySourceConfig
  */
  public constructor(scope: Construct, id: string, config: MpaIdentitySourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mpa_identity_source',
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
    this._identitySourceParameters.internalValue = config.identitySourceParameters;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_source_arn - computed: true, optional: false, required: false
  public get identitySourceArn() {
    return this.getStringAttribute('identity_source_arn');
  }

  // identity_source_parameters - computed: false, optional: false, required: true
  private _identitySourceParameters = new MpaIdentitySourceIdentitySourceParametersOutputReference(this, "identity_source_parameters");
  public get identitySourceParameters() {
    return this._identitySourceParameters;
  }
  public putIdentitySourceParameters(value: MpaIdentitySourceIdentitySourceParameters) {
    this._identitySourceParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identitySourceParametersInput() {
    return this._identitySourceParameters.internalValue;
  }

  // identity_source_type - computed: true, optional: false, required: false
  public get identitySourceType() {
    return this.getStringAttribute('identity_source_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new MpaIdentitySourceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MpaIdentitySourceTags[] | cdktn.IResolvable) {
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
      identity_source_parameters: mpaIdentitySourceIdentitySourceParametersToTerraform(this._identitySourceParameters.internalValue),
      tags: cdktn.listMapper(mpaIdentitySourceTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      identity_source_parameters: {
        value: mpaIdentitySourceIdentitySourceParametersToHclTerraform(this._identitySourceParameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MpaIdentitySourceIdentitySourceParameters",
      },
      tags: {
        value: cdktn.listMapperHcl(mpaIdentitySourceTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MpaIdentitySourceTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
