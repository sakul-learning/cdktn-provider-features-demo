// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CasesLayoutConfig extends cdktn.TerraformMetaArguments {
  /**
  * Defines the layout structure and field organization for the case interface. Specifies which fields appear in the top panel and More Info tab, and their display order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#content CasesLayout#content}
  */
  readonly content: CasesLayoutContent;
  /**
  * The unique identifier of the Cases domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#domain_id CasesLayout#domain_id}
  */
  readonly domainId?: string;
  /**
  * A descriptive name for the layout. Must be unique within the Cases domain and should clearly indicate the layout's purpose and field organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#name CasesLayout#name}
  */
  readonly name: string;
  /**
  * The tags that you attach to this layout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#tags CasesLayout#tags}
  */
  readonly tags?: CasesLayoutTags[] | cdktn.IResolvable;
}
export interface CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields {
  /**
  * The unique identifier of a field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#id CasesLayout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function casesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsToTerraform(struct?: CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function casesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsToHclTerraform(struct?: CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList extends cdktn.ComplexList {
  public internalValue? : CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields[] | cdktn.IResolvable

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
  public get(index: number): CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference {
    return new CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasesLayoutContentBasicMoreInfoSectionsFieldGroup {
  /**
  * An ordered list of fields to display in this group. The order determines the sequence in which fields appear in the agent interface. Each field is referenced by its unique field ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#fields CasesLayout#fields}
  */
  readonly fields?: CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields[] | cdktn.IResolvable;
  /**
  * A descriptive name for the field group. Helps organize related fields together in the layout interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#name CasesLayout#name}
  */
  readonly name?: string;
}

export function casesLayoutContentBasicMoreInfoSectionsFieldGroupToTerraform(struct?: CasesLayoutContentBasicMoreInfoSectionsFieldGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(casesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsToTerraform, false)(struct!.fields),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function casesLayoutContentBasicMoreInfoSectionsFieldGroupToHclTerraform(struct?: CasesLayoutContentBasicMoreInfoSectionsFieldGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fields: {
      value: cdktn.listMapperHcl(casesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList",
    },
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

export class CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesLayoutContentBasicMoreInfoSectionsFieldGroup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesLayoutContentBasicMoreInfoSectionsFieldGroup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
      this._name = value.name;
    }
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
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
export interface CasesLayoutContentBasicMoreInfoSections {
  /**
  * Consists of a group of fields and associated properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#field_group CasesLayout#field_group}
  */
  readonly fieldGroup?: CasesLayoutContentBasicMoreInfoSectionsFieldGroup;
}

export function casesLayoutContentBasicMoreInfoSectionsToTerraform(struct?: CasesLayoutContentBasicMoreInfoSections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_group: casesLayoutContentBasicMoreInfoSectionsFieldGroupToTerraform(struct!.fieldGroup),
  }
}


export function casesLayoutContentBasicMoreInfoSectionsToHclTerraform(struct?: CasesLayoutContentBasicMoreInfoSections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_group: {
      value: casesLayoutContentBasicMoreInfoSectionsFieldGroupToHclTerraform(struct!.fieldGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "CasesLayoutContentBasicMoreInfoSectionsFieldGroup",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesLayoutContentBasicMoreInfoSectionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CasesLayoutContentBasicMoreInfoSections | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldGroup = this._fieldGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesLayoutContentBasicMoreInfoSections | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldGroup.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldGroup.internalValue = value.fieldGroup;
    }
  }

  // field_group - computed: true, optional: true, required: false
  private _fieldGroup = new CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference(this, "field_group");
  public get fieldGroup() {
    return this._fieldGroup;
  }
  public putFieldGroup(value: CasesLayoutContentBasicMoreInfoSectionsFieldGroup) {
    this._fieldGroup.internalValue = value;
  }
  public resetFieldGroup() {
    this._fieldGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldGroupInput() {
    return this._fieldGroup.internalValue;
  }
}

export class CasesLayoutContentBasicMoreInfoSectionsList extends cdktn.ComplexList {
  public internalValue? : CasesLayoutContentBasicMoreInfoSections[] | cdktn.IResolvable

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
  public get(index: number): CasesLayoutContentBasicMoreInfoSectionsOutputReference {
    return new CasesLayoutContentBasicMoreInfoSectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasesLayoutContentBasicMoreInfo {
  /**
  * Defines the sections within a panel or tab. Contains field groups that organize related fields together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#sections CasesLayout#sections}
  */
  readonly sections?: CasesLayoutContentBasicMoreInfoSections[] | cdktn.IResolvable;
}

export function casesLayoutContentBasicMoreInfoToTerraform(struct?: CasesLayoutContentBasicMoreInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sections: cdktn.listMapper(casesLayoutContentBasicMoreInfoSectionsToTerraform, false)(struct!.sections),
  }
}


export function casesLayoutContentBasicMoreInfoToHclTerraform(struct?: CasesLayoutContentBasicMoreInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sections: {
      value: cdktn.listMapperHcl(casesLayoutContentBasicMoreInfoSectionsToHclTerraform, false)(struct!.sections),
      isBlock: true,
      type: "list",
      storageClassType: "CasesLayoutContentBasicMoreInfoSectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesLayoutContentBasicMoreInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesLayoutContentBasicMoreInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sections = this._sections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesLayoutContentBasicMoreInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sections.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sections.internalValue = value.sections;
    }
  }

  // sections - computed: true, optional: true, required: false
  private _sections = new CasesLayoutContentBasicMoreInfoSectionsList(this, "sections", false);
  public get sections() {
    return this._sections;
  }
  public putSections(value: CasesLayoutContentBasicMoreInfoSections[] | cdktn.IResolvable) {
    this._sections.internalValue = value;
  }
  public resetSections() {
    this._sections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionsInput() {
    return this._sections.internalValue;
  }
}
export interface CasesLayoutContentBasicTopPanelSectionsFieldGroupFields {
  /**
  * The unique identifier of a field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#id CasesLayout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function casesLayoutContentBasicTopPanelSectionsFieldGroupFieldsToTerraform(struct?: CasesLayoutContentBasicTopPanelSectionsFieldGroupFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function casesLayoutContentBasicTopPanelSectionsFieldGroupFieldsToHclTerraform(struct?: CasesLayoutContentBasicTopPanelSectionsFieldGroupFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CasesLayoutContentBasicTopPanelSectionsFieldGroupFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesLayoutContentBasicTopPanelSectionsFieldGroupFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList extends cdktn.ComplexList {
  public internalValue? : CasesLayoutContentBasicTopPanelSectionsFieldGroupFields[] | cdktn.IResolvable

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
  public get(index: number): CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference {
    return new CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasesLayoutContentBasicTopPanelSectionsFieldGroup {
  /**
  * An ordered list of fields to display in this group. The order determines the sequence in which fields appear in the agent interface. Each field is referenced by its unique field ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#fields CasesLayout#fields}
  */
  readonly fields?: CasesLayoutContentBasicTopPanelSectionsFieldGroupFields[] | cdktn.IResolvable;
  /**
  * A descriptive name for the field group. Helps organize related fields together in the layout interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#name CasesLayout#name}
  */
  readonly name?: string;
}

export function casesLayoutContentBasicTopPanelSectionsFieldGroupToTerraform(struct?: CasesLayoutContentBasicTopPanelSectionsFieldGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(casesLayoutContentBasicTopPanelSectionsFieldGroupFieldsToTerraform, false)(struct!.fields),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function casesLayoutContentBasicTopPanelSectionsFieldGroupToHclTerraform(struct?: CasesLayoutContentBasicTopPanelSectionsFieldGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fields: {
      value: cdktn.listMapperHcl(casesLayoutContentBasicTopPanelSectionsFieldGroupFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList",
    },
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

export class CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesLayoutContentBasicTopPanelSectionsFieldGroup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesLayoutContentBasicTopPanelSectionsFieldGroup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
      this._name = value.name;
    }
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: CasesLayoutContentBasicTopPanelSectionsFieldGroupFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
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
export interface CasesLayoutContentBasicTopPanelSections {
  /**
  * Consists of a group of fields and associated properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#field_group CasesLayout#field_group}
  */
  readonly fieldGroup?: CasesLayoutContentBasicTopPanelSectionsFieldGroup;
}

export function casesLayoutContentBasicTopPanelSectionsToTerraform(struct?: CasesLayoutContentBasicTopPanelSections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_group: casesLayoutContentBasicTopPanelSectionsFieldGroupToTerraform(struct!.fieldGroup),
  }
}


export function casesLayoutContentBasicTopPanelSectionsToHclTerraform(struct?: CasesLayoutContentBasicTopPanelSections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_group: {
      value: casesLayoutContentBasicTopPanelSectionsFieldGroupToHclTerraform(struct!.fieldGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "CasesLayoutContentBasicTopPanelSectionsFieldGroup",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesLayoutContentBasicTopPanelSectionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CasesLayoutContentBasicTopPanelSections | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldGroup = this._fieldGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesLayoutContentBasicTopPanelSections | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldGroup.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldGroup.internalValue = value.fieldGroup;
    }
  }

  // field_group - computed: true, optional: true, required: false
  private _fieldGroup = new CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference(this, "field_group");
  public get fieldGroup() {
    return this._fieldGroup;
  }
  public putFieldGroup(value: CasesLayoutContentBasicTopPanelSectionsFieldGroup) {
    this._fieldGroup.internalValue = value;
  }
  public resetFieldGroup() {
    this._fieldGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldGroupInput() {
    return this._fieldGroup.internalValue;
  }
}

export class CasesLayoutContentBasicTopPanelSectionsList extends cdktn.ComplexList {
  public internalValue? : CasesLayoutContentBasicTopPanelSections[] | cdktn.IResolvable

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
  public get(index: number): CasesLayoutContentBasicTopPanelSectionsOutputReference {
    return new CasesLayoutContentBasicTopPanelSectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CasesLayoutContentBasicTopPanel {
  /**
  * Defines the sections within a panel or tab. Contains field groups that organize related fields together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#sections CasesLayout#sections}
  */
  readonly sections?: CasesLayoutContentBasicTopPanelSections[] | cdktn.IResolvable;
}

export function casesLayoutContentBasicTopPanelToTerraform(struct?: CasesLayoutContentBasicTopPanel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sections: cdktn.listMapper(casesLayoutContentBasicTopPanelSectionsToTerraform, false)(struct!.sections),
  }
}


export function casesLayoutContentBasicTopPanelToHclTerraform(struct?: CasesLayoutContentBasicTopPanel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sections: {
      value: cdktn.listMapperHcl(casesLayoutContentBasicTopPanelSectionsToHclTerraform, false)(struct!.sections),
      isBlock: true,
      type: "list",
      storageClassType: "CasesLayoutContentBasicTopPanelSectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesLayoutContentBasicTopPanelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesLayoutContentBasicTopPanel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sections = this._sections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesLayoutContentBasicTopPanel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sections.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sections.internalValue = value.sections;
    }
  }

  // sections - computed: true, optional: true, required: false
  private _sections = new CasesLayoutContentBasicTopPanelSectionsList(this, "sections", false);
  public get sections() {
    return this._sections;
  }
  public putSections(value: CasesLayoutContentBasicTopPanelSections[] | cdktn.IResolvable) {
    this._sections.internalValue = value;
  }
  public resetSections() {
    this._sections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionsInput() {
    return this._sections.internalValue;
  }
}
export interface CasesLayoutContentBasic {
  /**
  * Sections within a panel or tab of the page layout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#more_info CasesLayout#more_info}
  */
  readonly moreInfo?: CasesLayoutContentBasicMoreInfo;
  /**
  * Sections within a panel or tab of the page layout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#top_panel CasesLayout#top_panel}
  */
  readonly topPanel?: CasesLayoutContentBasicTopPanel;
}

export function casesLayoutContentBasicToTerraform(struct?: CasesLayoutContentBasic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    more_info: casesLayoutContentBasicMoreInfoToTerraform(struct!.moreInfo),
    top_panel: casesLayoutContentBasicTopPanelToTerraform(struct!.topPanel),
  }
}


export function casesLayoutContentBasicToHclTerraform(struct?: CasesLayoutContentBasic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    more_info: {
      value: casesLayoutContentBasicMoreInfoToHclTerraform(struct!.moreInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "CasesLayoutContentBasicMoreInfo",
    },
    top_panel: {
      value: casesLayoutContentBasicTopPanelToHclTerraform(struct!.topPanel),
      isBlock: true,
      type: "struct",
      storageClassType: "CasesLayoutContentBasicTopPanel",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesLayoutContentBasicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesLayoutContentBasic | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._moreInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.moreInfo = this._moreInfo?.internalValue;
    }
    if (this._topPanel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topPanel = this._topPanel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesLayoutContentBasic | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._moreInfo.internalValue = undefined;
      this._topPanel.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._moreInfo.internalValue = value.moreInfo;
      this._topPanel.internalValue = value.topPanel;
    }
  }

  // more_info - computed: true, optional: true, required: false
  private _moreInfo = new CasesLayoutContentBasicMoreInfoOutputReference(this, "more_info");
  public get moreInfo() {
    return this._moreInfo;
  }
  public putMoreInfo(value: CasesLayoutContentBasicMoreInfo) {
    this._moreInfo.internalValue = value;
  }
  public resetMoreInfo() {
    this._moreInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moreInfoInput() {
    return this._moreInfo.internalValue;
  }

  // top_panel - computed: true, optional: true, required: false
  private _topPanel = new CasesLayoutContentBasicTopPanelOutputReference(this, "top_panel");
  public get topPanel() {
    return this._topPanel;
  }
  public putTopPanel(value: CasesLayoutContentBasicTopPanel) {
    this._topPanel.internalValue = value;
  }
  public resetTopPanel() {
    this._topPanel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topPanelInput() {
    return this._topPanel.internalValue;
  }
}
export interface CasesLayoutContent {
  /**
  * Defines the field layout for the agent's case interface. Configures which fields appear in the top panel (immediately visible) and More Info tab (expandable section) of the case view, allowing customization of the agent experience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#basic CasesLayout#basic}
  */
  readonly basic?: CasesLayoutContentBasic;
}

export function casesLayoutContentToTerraform(struct?: CasesLayoutContent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    basic: casesLayoutContentBasicToTerraform(struct!.basic),
  }
}


export function casesLayoutContentToHclTerraform(struct?: CasesLayoutContent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    basic: {
      value: casesLayoutContentBasicToHclTerraform(struct!.basic),
      isBlock: true,
      type: "struct",
      storageClassType: "CasesLayoutContentBasic",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CasesLayoutContentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CasesLayoutContent | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basic = this._basic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CasesLayoutContent | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basic.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basic.internalValue = value.basic;
    }
  }

  // basic - computed: true, optional: true, required: false
  private _basic = new CasesLayoutContentBasicOutputReference(this, "basic");
  public get basic() {
    return this._basic;
  }
  public putBasic(value: CasesLayoutContentBasic) {
    this._basic.internalValue = value;
  }
  public resetBasic() {
    this._basic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicInput() {
    return this._basic.internalValue;
  }
}
export interface CasesLayoutTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#key CasesLayout#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#value CasesLayout#value}
  */
  readonly value?: string;
}

export function casesLayoutTagsToTerraform(struct?: CasesLayoutTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function casesLayoutTagsToHclTerraform(struct?: CasesLayoutTags | cdktn.IResolvable): any {
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

export class CasesLayoutTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CasesLayoutTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CasesLayoutTags | cdktn.IResolvable | undefined) {
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

export class CasesLayoutTagsList extends cdktn.ComplexList {
  public internalValue? : CasesLayoutTags[] | cdktn.IResolvable

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
  public get(index: number): CasesLayoutTagsOutputReference {
    return new CasesLayoutTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout awscc_cases_layout}
*/
export class CasesLayout extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cases_layout";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CasesLayout resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CasesLayout to import
  * @param importFromId The id of the existing CasesLayout that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CasesLayout to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cases_layout", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cases_layout awscc_cases_layout} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CasesLayoutConfig
  */
  public constructor(scope: Construct, id: string, config: CasesLayoutConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cases_layout',
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
    this._content.internalValue = config.content;
    this._domainId = config.domainId;
    this._name = config.name;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: false, optional: false, required: true
  private _content = new CasesLayoutContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: CasesLayoutContent) {
    this._content.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // domain_id - computed: true, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // layout_arn - computed: true, optional: false, required: false
  public get layoutArn() {
    return this.getStringAttribute('layout_arn');
  }

  // layout_id - computed: true, optional: false, required: false
  public get layoutId() {
    return this.getStringAttribute('layout_id');
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

  // tags - computed: true, optional: true, required: false
  private _tags = new CasesLayoutTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CasesLayoutTags[] | cdktn.IResolvable) {
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
      content: casesLayoutContentToTerraform(this._content.internalValue),
      domain_id: cdktn.stringToTerraform(this._domainId),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(casesLayoutTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: casesLayoutContentToHclTerraform(this._content.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CasesLayoutContent",
      },
      domain_id: {
        value: cdktn.stringToHclTerraform(this._domainId),
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
      tags: {
        value: cdktn.listMapperHcl(casesLayoutTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CasesLayoutTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
