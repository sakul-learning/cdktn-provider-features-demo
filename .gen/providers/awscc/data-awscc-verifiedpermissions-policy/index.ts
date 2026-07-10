// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/verifiedpermissions_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccVerifiedpermissionsPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/verifiedpermissions_policy#id DataAwsccVerifiedpermissionsPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccVerifiedpermissionsPolicyDefinitionStatic {
}

export function dataAwsccVerifiedpermissionsPolicyDefinitionStaticToTerraform(struct?: DataAwsccVerifiedpermissionsPolicyDefinitionStatic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsPolicyDefinitionStaticToHclTerraform(struct?: DataAwsccVerifiedpermissionsPolicyDefinitionStatic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsPolicyDefinitionStatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsPolicyDefinitionStatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // statement - computed: true, optional: false, required: false
  public get statement() {
    return this.getStringAttribute('statement');
  }
}
export interface DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal {
}

export function dataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalToTerraform(struct?: DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalToHclTerraform(struct?: DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
}
export interface DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource {
}

export function dataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceToTerraform(struct?: DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceToHclTerraform(struct?: DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
}
export interface DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked {
}

export function dataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedToTerraform(struct?: DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedToHclTerraform(struct?: DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_template_id - computed: true, optional: false, required: false
  public get policyTemplateId() {
    return this.getStringAttribute('policy_template_id');
  }

  // principal - computed: true, optional: false, required: false
  private _principal = new DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }

  // resource - computed: true, optional: false, required: false
  private _resource = new DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
}
export interface DataAwsccVerifiedpermissionsPolicyDefinition {
}

export function dataAwsccVerifiedpermissionsPolicyDefinitionToTerraform(struct?: DataAwsccVerifiedpermissionsPolicyDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsPolicyDefinitionToHclTerraform(struct?: DataAwsccVerifiedpermissionsPolicyDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsPolicyDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsPolicyDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // static - computed: true, optional: false, required: false
  private _static = new DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }

  // template_linked - computed: true, optional: false, required: false
  private _templateLinked = new DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference(this, "template_linked");
  public get templateLinked() {
    return this._templateLinked;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/verifiedpermissions_policy awscc_verifiedpermissions_policy}
*/
export class DataAwsccVerifiedpermissionsPolicy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_verifiedpermissions_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccVerifiedpermissionsPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccVerifiedpermissionsPolicy to import
  * @param importFromId The id of the existing DataAwsccVerifiedpermissionsPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/verifiedpermissions_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccVerifiedpermissionsPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_verifiedpermissions_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/verifiedpermissions_policy awscc_verifiedpermissions_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccVerifiedpermissionsPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccVerifiedpermissionsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_verifiedpermissions_policy',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // definition - computed: true, optional: false, required: false
  private _definition = new DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // policy_store_id - computed: true, optional: false, required: false
  public get policyStoreId() {
    return this.getStringAttribute('policy_store_id');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
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
