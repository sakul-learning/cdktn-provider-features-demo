// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConnectTaskTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * the client token string in uuid format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#client_token ConnectTaskTemplate#client_token}
  */
  readonly clientToken?: string;
  /**
  * The constraints for the task template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#constraints ConnectTaskTemplate#constraints}
  */
  readonly constraints?: ConnectTaskTemplateConstraints;
  /**
  * The identifier of the contact flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#contact_flow_arn ConnectTaskTemplate#contact_flow_arn}
  */
  readonly contactFlowArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#defaults ConnectTaskTemplate#defaults}
  */
  readonly defaults?: ConnectTaskTemplateDefaults[] | cdktn.IResolvable;
  /**
  * The description of the task template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#description ConnectTaskTemplate#description}
  */
  readonly description?: string;
  /**
  * The list of task template's fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#fields ConnectTaskTemplate#fields}
  */
  readonly fields?: ConnectTaskTemplateFields[] | cdktn.IResolvable;
  /**
  * The identifier (arn) of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#instance_arn ConnectTaskTemplate#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * The name of the task template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}
  */
  readonly name?: string;
  /**
  * The identifier of the contact flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#self_assign_contact_flow_arn ConnectTaskTemplate#self_assign_contact_flow_arn}
  */
  readonly selfAssignContactFlowArn?: string;
  /**
  * The status of the task template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#status ConnectTaskTemplate#status}
  */
  readonly status?: string;
  /**
  * One or more tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#tags ConnectTaskTemplate#tags}
  */
  readonly tags?: ConnectTaskTemplateTags[] | cdktn.IResolvable;
}
export interface ConnectTaskTemplateConstraintsInvisibleFieldsId {
  /**
  * The name of the task template field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}
  */
  readonly name?: string;
}

export function connectTaskTemplateConstraintsInvisibleFieldsIdToTerraform(struct?: ConnectTaskTemplateConstraintsInvisibleFieldsId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function connectTaskTemplateConstraintsInvisibleFieldsIdToHclTerraform(struct?: ConnectTaskTemplateConstraintsInvisibleFieldsId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectTaskTemplateConstraintsInvisibleFieldsId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectTaskTemplateConstraintsInvisibleFieldsId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface ConnectTaskTemplateConstraintsInvisibleFields {
  /**
  * the identifier (name) for the task template field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: ConnectTaskTemplateConstraintsInvisibleFieldsId;
}

export function connectTaskTemplateConstraintsInvisibleFieldsToTerraform(struct?: ConnectTaskTemplateConstraintsInvisibleFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: connectTaskTemplateConstraintsInvisibleFieldsIdToTerraform(struct!.id),
  }
}


export function connectTaskTemplateConstraintsInvisibleFieldsToHclTerraform(struct?: ConnectTaskTemplateConstraintsInvisibleFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: connectTaskTemplateConstraintsInvisibleFieldsIdToHclTerraform(struct!.id),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectTaskTemplateConstraintsInvisibleFieldsId",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectTaskTemplateConstraintsInvisibleFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectTaskTemplateConstraintsInvisibleFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id.internalValue = value.id;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id = new ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference(this, "id");
  public get id() {
    return this._id;
  }
  public putId(value: ConnectTaskTemplateConstraintsInvisibleFieldsId) {
    this._id.internalValue = value;
  }
  public resetId() {
    this._id.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id.internalValue;
  }
}

export class ConnectTaskTemplateConstraintsInvisibleFieldsList extends cdktn.ComplexList {
  public internalValue? : ConnectTaskTemplateConstraintsInvisibleFields[] | cdktn.IResolvable

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
  public get(index: number): ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference {
    return new ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectTaskTemplateConstraintsReadOnlyFieldsId {
  /**
  * The name of the task template field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}
  */
  readonly name?: string;
}

export function connectTaskTemplateConstraintsReadOnlyFieldsIdToTerraform(struct?: ConnectTaskTemplateConstraintsReadOnlyFieldsId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function connectTaskTemplateConstraintsReadOnlyFieldsIdToHclTerraform(struct?: ConnectTaskTemplateConstraintsReadOnlyFieldsId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectTaskTemplateConstraintsReadOnlyFieldsId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectTaskTemplateConstraintsReadOnlyFieldsId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface ConnectTaskTemplateConstraintsReadOnlyFields {
  /**
  * the identifier (name) for the task template field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: ConnectTaskTemplateConstraintsReadOnlyFieldsId;
}

export function connectTaskTemplateConstraintsReadOnlyFieldsToTerraform(struct?: ConnectTaskTemplateConstraintsReadOnlyFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: connectTaskTemplateConstraintsReadOnlyFieldsIdToTerraform(struct!.id),
  }
}


export function connectTaskTemplateConstraintsReadOnlyFieldsToHclTerraform(struct?: ConnectTaskTemplateConstraintsReadOnlyFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: connectTaskTemplateConstraintsReadOnlyFieldsIdToHclTerraform(struct!.id),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectTaskTemplateConstraintsReadOnlyFieldsId",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectTaskTemplateConstraintsReadOnlyFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectTaskTemplateConstraintsReadOnlyFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id.internalValue = value.id;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id = new ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference(this, "id");
  public get id() {
    return this._id;
  }
  public putId(value: ConnectTaskTemplateConstraintsReadOnlyFieldsId) {
    this._id.internalValue = value;
  }
  public resetId() {
    this._id.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id.internalValue;
  }
}

export class ConnectTaskTemplateConstraintsReadOnlyFieldsList extends cdktn.ComplexList {
  public internalValue? : ConnectTaskTemplateConstraintsReadOnlyFields[] | cdktn.IResolvable

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
  public get(index: number): ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference {
    return new ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectTaskTemplateConstraintsRequiredFieldsId {
  /**
  * The name of the task template field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}
  */
  readonly name?: string;
}

export function connectTaskTemplateConstraintsRequiredFieldsIdToTerraform(struct?: ConnectTaskTemplateConstraintsRequiredFieldsId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function connectTaskTemplateConstraintsRequiredFieldsIdToHclTerraform(struct?: ConnectTaskTemplateConstraintsRequiredFieldsId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectTaskTemplateConstraintsRequiredFieldsId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectTaskTemplateConstraintsRequiredFieldsId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface ConnectTaskTemplateConstraintsRequiredFields {
  /**
  * the identifier (name) for the task template field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: ConnectTaskTemplateConstraintsRequiredFieldsId;
}

export function connectTaskTemplateConstraintsRequiredFieldsToTerraform(struct?: ConnectTaskTemplateConstraintsRequiredFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: connectTaskTemplateConstraintsRequiredFieldsIdToTerraform(struct!.id),
  }
}


export function connectTaskTemplateConstraintsRequiredFieldsToHclTerraform(struct?: ConnectTaskTemplateConstraintsRequiredFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: connectTaskTemplateConstraintsRequiredFieldsIdToHclTerraform(struct!.id),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectTaskTemplateConstraintsRequiredFieldsId",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectTaskTemplateConstraintsRequiredFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectTaskTemplateConstraintsRequiredFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectTaskTemplateConstraintsRequiredFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id.internalValue = value.id;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id = new ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference(this, "id");
  public get id() {
    return this._id;
  }
  public putId(value: ConnectTaskTemplateConstraintsRequiredFieldsId) {
    this._id.internalValue = value;
  }
  public resetId() {
    this._id.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id.internalValue;
  }
}

export class ConnectTaskTemplateConstraintsRequiredFieldsList extends cdktn.ComplexList {
  public internalValue? : ConnectTaskTemplateConstraintsRequiredFields[] | cdktn.IResolvable

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
  public get(index: number): ConnectTaskTemplateConstraintsRequiredFieldsOutputReference {
    return new ConnectTaskTemplateConstraintsRequiredFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectTaskTemplateConstraints {
  /**
  * The list of the task template's invisible fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#invisible_fields ConnectTaskTemplate#invisible_fields}
  */
  readonly invisibleFields?: ConnectTaskTemplateConstraintsInvisibleFields[] | cdktn.IResolvable;
  /**
  * The list of the task template's read only fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#read_only_fields ConnectTaskTemplate#read_only_fields}
  */
  readonly readOnlyFields?: ConnectTaskTemplateConstraintsReadOnlyFields[] | cdktn.IResolvable;
  /**
  * The list of the task template's required fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#required_fields ConnectTaskTemplate#required_fields}
  */
  readonly requiredFields?: ConnectTaskTemplateConstraintsRequiredFields[] | cdktn.IResolvable;
}

export function connectTaskTemplateConstraintsToTerraform(struct?: ConnectTaskTemplateConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invisible_fields: cdktn.listMapper(connectTaskTemplateConstraintsInvisibleFieldsToTerraform, false)(struct!.invisibleFields),
    read_only_fields: cdktn.listMapper(connectTaskTemplateConstraintsReadOnlyFieldsToTerraform, false)(struct!.readOnlyFields),
    required_fields: cdktn.listMapper(connectTaskTemplateConstraintsRequiredFieldsToTerraform, false)(struct!.requiredFields),
  }
}


export function connectTaskTemplateConstraintsToHclTerraform(struct?: ConnectTaskTemplateConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invisible_fields: {
      value: cdktn.listMapperHcl(connectTaskTemplateConstraintsInvisibleFieldsToHclTerraform, false)(struct!.invisibleFields),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectTaskTemplateConstraintsInvisibleFieldsList",
    },
    read_only_fields: {
      value: cdktn.listMapperHcl(connectTaskTemplateConstraintsReadOnlyFieldsToHclTerraform, false)(struct!.readOnlyFields),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectTaskTemplateConstraintsReadOnlyFieldsList",
    },
    required_fields: {
      value: cdktn.listMapperHcl(connectTaskTemplateConstraintsRequiredFieldsToHclTerraform, false)(struct!.requiredFields),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectTaskTemplateConstraintsRequiredFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectTaskTemplateConstraintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectTaskTemplateConstraints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invisibleFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invisibleFields = this._invisibleFields?.internalValue;
    }
    if (this._readOnlyFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyFields = this._readOnlyFields?.internalValue;
    }
    if (this._requiredFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredFields = this._requiredFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectTaskTemplateConstraints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invisibleFields.internalValue = undefined;
      this._readOnlyFields.internalValue = undefined;
      this._requiredFields.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invisibleFields.internalValue = value.invisibleFields;
      this._readOnlyFields.internalValue = value.readOnlyFields;
      this._requiredFields.internalValue = value.requiredFields;
    }
  }

  // invisible_fields - computed: true, optional: true, required: false
  private _invisibleFields = new ConnectTaskTemplateConstraintsInvisibleFieldsList(this, "invisible_fields", false);
  public get invisibleFields() {
    return this._invisibleFields;
  }
  public putInvisibleFields(value: ConnectTaskTemplateConstraintsInvisibleFields[] | cdktn.IResolvable) {
    this._invisibleFields.internalValue = value;
  }
  public resetInvisibleFields() {
    this._invisibleFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invisibleFieldsInput() {
    return this._invisibleFields.internalValue;
  }

  // read_only_fields - computed: true, optional: true, required: false
  private _readOnlyFields = new ConnectTaskTemplateConstraintsReadOnlyFieldsList(this, "read_only_fields", false);
  public get readOnlyFields() {
    return this._readOnlyFields;
  }
  public putReadOnlyFields(value: ConnectTaskTemplateConstraintsReadOnlyFields[] | cdktn.IResolvable) {
    this._readOnlyFields.internalValue = value;
  }
  public resetReadOnlyFields() {
    this._readOnlyFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyFieldsInput() {
    return this._readOnlyFields.internalValue;
  }

  // required_fields - computed: true, optional: true, required: false
  private _requiredFields = new ConnectTaskTemplateConstraintsRequiredFieldsList(this, "required_fields", false);
  public get requiredFields() {
    return this._requiredFields;
  }
  public putRequiredFields(value: ConnectTaskTemplateConstraintsRequiredFields[] | cdktn.IResolvable) {
    this._requiredFields.internalValue = value;
  }
  public resetRequiredFields() {
    this._requiredFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredFieldsInput() {
    return this._requiredFields.internalValue;
  }
}
export interface ConnectTaskTemplateDefaultsId {
  /**
  * The name of the task template field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}
  */
  readonly name?: string;
}

export function connectTaskTemplateDefaultsIdToTerraform(struct?: ConnectTaskTemplateDefaultsId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function connectTaskTemplateDefaultsIdToHclTerraform(struct?: ConnectTaskTemplateDefaultsId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectTaskTemplateDefaultsIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectTaskTemplateDefaultsId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectTaskTemplateDefaultsId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface ConnectTaskTemplateDefaults {
  /**
  * the default value for the task template's field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#default_value ConnectTaskTemplate#default_value}
  */
  readonly defaultValue?: string;
  /**
  * the identifier (name) for the task template field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: ConnectTaskTemplateDefaultsId;
}

export function connectTaskTemplateDefaultsToTerraform(struct?: ConnectTaskTemplateDefaults | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    id: connectTaskTemplateDefaultsIdToTerraform(struct!.id),
  }
}


export function connectTaskTemplateDefaultsToHclTerraform(struct?: ConnectTaskTemplateDefaults | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: connectTaskTemplateDefaultsIdToHclTerraform(struct!.id),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectTaskTemplateDefaultsId",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectTaskTemplateDefaultsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectTaskTemplateDefaults | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._id?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectTaskTemplateDefaults | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._id.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._id.internalValue = value.id;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // id - computed: true, optional: true, required: false
  private _id = new ConnectTaskTemplateDefaultsIdOutputReference(this, "id");
  public get id() {
    return this._id;
  }
  public putId(value: ConnectTaskTemplateDefaultsId) {
    this._id.internalValue = value;
  }
  public resetId() {
    this._id.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id.internalValue;
  }
}

export class ConnectTaskTemplateDefaultsList extends cdktn.ComplexList {
  public internalValue? : ConnectTaskTemplateDefaults[] | cdktn.IResolvable

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
  public get(index: number): ConnectTaskTemplateDefaultsOutputReference {
    return new ConnectTaskTemplateDefaultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectTaskTemplateFieldsId {
  /**
  * The name of the task template field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}
  */
  readonly name?: string;
}

export function connectTaskTemplateFieldsIdToTerraform(struct?: ConnectTaskTemplateFieldsId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function connectTaskTemplateFieldsIdToHclTerraform(struct?: ConnectTaskTemplateFieldsId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectTaskTemplateFieldsIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectTaskTemplateFieldsId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectTaskTemplateFieldsId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface ConnectTaskTemplateFields {
  /**
  * The description of the task template's field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#description ConnectTaskTemplate#description}
  */
  readonly description?: string;
  /**
  * the identifier (name) for the task template field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: ConnectTaskTemplateFieldsId;
  /**
  * list of field options to be used with single select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#single_select_options ConnectTaskTemplate#single_select_options}
  */
  readonly singleSelectOptions?: string[];
  /**
  * The type of the task template's field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#type ConnectTaskTemplate#type}
  */
  readonly type?: string;
}

export function connectTaskTemplateFieldsToTerraform(struct?: ConnectTaskTemplateFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    id: connectTaskTemplateFieldsIdToTerraform(struct!.id),
    single_select_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.singleSelectOptions),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function connectTaskTemplateFieldsToHclTerraform(struct?: ConnectTaskTemplateFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: connectTaskTemplateFieldsIdToHclTerraform(struct!.id),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectTaskTemplateFieldsId",
    },
    single_select_options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.singleSelectOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectTaskTemplateFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectTaskTemplateFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id?.internalValue;
    }
    if (this._singleSelectOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleSelectOptions = this._singleSelectOptions;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectTaskTemplateFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id.internalValue = undefined;
      this._singleSelectOptions = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._id.internalValue = value.id;
      this._singleSelectOptions = value.singleSelectOptions;
      this._type = value.type;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id = new ConnectTaskTemplateFieldsIdOutputReference(this, "id");
  public get id() {
    return this._id;
  }
  public putId(value: ConnectTaskTemplateFieldsId) {
    this._id.internalValue = value;
  }
  public resetId() {
    this._id.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id.internalValue;
  }

  // single_select_options - computed: true, optional: true, required: false
  private _singleSelectOptions?: string[]; 
  public get singleSelectOptions() {
    return this.getListAttribute('single_select_options');
  }
  public set singleSelectOptions(value: string[]) {
    this._singleSelectOptions = value;
  }
  public resetSingleSelectOptions() {
    this._singleSelectOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSelectOptionsInput() {
    return this._singleSelectOptions;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ConnectTaskTemplateFieldsList extends cdktn.ComplexList {
  public internalValue? : ConnectTaskTemplateFields[] | cdktn.IResolvable

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
  public get(index: number): ConnectTaskTemplateFieldsOutputReference {
    return new ConnectTaskTemplateFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectTaskTemplateTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#key ConnectTaskTemplate#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. . You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#value ConnectTaskTemplate#value}
  */
  readonly value?: string;
}

export function connectTaskTemplateTagsToTerraform(struct?: ConnectTaskTemplateTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function connectTaskTemplateTagsToHclTerraform(struct?: ConnectTaskTemplateTags | cdktn.IResolvable): any {
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

export class ConnectTaskTemplateTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectTaskTemplateTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ConnectTaskTemplateTags | cdktn.IResolvable | undefined) {
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

export class ConnectTaskTemplateTagsList extends cdktn.ComplexList {
  public internalValue? : ConnectTaskTemplateTags[] | cdktn.IResolvable

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
  public get(index: number): ConnectTaskTemplateTagsOutputReference {
    return new ConnectTaskTemplateTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template awscc_connect_task_template}
*/
export class ConnectTaskTemplate extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_connect_task_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConnectTaskTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectTaskTemplate to import
  * @param importFromId The id of the existing ConnectTaskTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectTaskTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_task_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_task_template awscc_connect_task_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectTaskTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectTaskTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_connect_task_template',
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
    this._clientToken = config.clientToken;
    this._constraints.internalValue = config.constraints;
    this._contactFlowArn = config.contactFlowArn;
    this._defaults.internalValue = config.defaults;
    this._description = config.description;
    this._fields.internalValue = config.fields;
    this._instanceArn = config.instanceArn;
    this._name = config.name;
    this._selfAssignContactFlowArn = config.selfAssignContactFlowArn;
    this._status = config.status;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // client_token - computed: true, optional: true, required: false
  private _clientToken?: string; 
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }
  public set clientToken(value: string) {
    this._clientToken = value;
  }
  public resetClientToken() {
    this._clientToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTokenInput() {
    return this._clientToken;
  }

  // constraints - computed: true, optional: true, required: false
  private _constraints = new ConnectTaskTemplateConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: ConnectTaskTemplateConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // contact_flow_arn - computed: true, optional: true, required: false
  private _contactFlowArn?: string; 
  public get contactFlowArn() {
    return this.getStringAttribute('contact_flow_arn');
  }
  public set contactFlowArn(value: string) {
    this._contactFlowArn = value;
  }
  public resetContactFlowArn() {
    this._contactFlowArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactFlowArnInput() {
    return this._contactFlowArn;
  }

  // defaults - computed: true, optional: true, required: false
  private _defaults = new ConnectTaskTemplateDefaultsList(this, "defaults", false);
  public get defaults() {
    return this._defaults;
  }
  public putDefaults(value: ConnectTaskTemplateDefaults[] | cdktn.IResolvable) {
    this._defaults.internalValue = value;
  }
  public resetDefaults() {
    this._defaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsInput() {
    return this._defaults.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new ConnectTaskTemplateFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: ConnectTaskTemplateFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // self_assign_contact_flow_arn - computed: true, optional: true, required: false
  private _selfAssignContactFlowArn?: string; 
  public get selfAssignContactFlowArn() {
    return this.getStringAttribute('self_assign_contact_flow_arn');
  }
  public set selfAssignContactFlowArn(value: string) {
    this._selfAssignContactFlowArn = value;
  }
  public resetSelfAssignContactFlowArn() {
    this._selfAssignContactFlowArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfAssignContactFlowArnInput() {
    return this._selfAssignContactFlowArn;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ConnectTaskTemplateTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ConnectTaskTemplateTags[] | cdktn.IResolvable) {
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
      client_token: cdktn.stringToTerraform(this._clientToken),
      constraints: connectTaskTemplateConstraintsToTerraform(this._constraints.internalValue),
      contact_flow_arn: cdktn.stringToTerraform(this._contactFlowArn),
      defaults: cdktn.listMapper(connectTaskTemplateDefaultsToTerraform, false)(this._defaults.internalValue),
      description: cdktn.stringToTerraform(this._description),
      fields: cdktn.listMapper(connectTaskTemplateFieldsToTerraform, false)(this._fields.internalValue),
      instance_arn: cdktn.stringToTerraform(this._instanceArn),
      name: cdktn.stringToTerraform(this._name),
      self_assign_contact_flow_arn: cdktn.stringToTerraform(this._selfAssignContactFlowArn),
      status: cdktn.stringToTerraform(this._status),
      tags: cdktn.listMapper(connectTaskTemplateTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_token: {
        value: cdktn.stringToHclTerraform(this._clientToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      constraints: {
        value: connectTaskTemplateConstraintsToHclTerraform(this._constraints.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectTaskTemplateConstraints",
      },
      contact_flow_arn: {
        value: cdktn.stringToHclTerraform(this._contactFlowArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaults: {
        value: cdktn.listMapperHcl(connectTaskTemplateDefaultsToHclTerraform, false)(this._defaults.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectTaskTemplateDefaultsList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fields: {
        value: cdktn.listMapperHcl(connectTaskTemplateFieldsToHclTerraform, false)(this._fields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectTaskTemplateFieldsList",
      },
      instance_arn: {
        value: cdktn.stringToHclTerraform(this._instanceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      self_assign_contact_flow_arn: {
        value: cdktn.stringToHclTerraform(this._selfAssignContactFlowArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktn.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(connectTaskTemplateTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectTaskTemplateTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
