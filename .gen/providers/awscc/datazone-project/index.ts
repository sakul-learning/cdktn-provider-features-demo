// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatazoneProjectConfig extends cdktn.TerraformMetaArguments {
  /**
  * The description of the Amazon DataZone project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#description DatazoneProject#description}
  */
  readonly description?: string;
  /**
  * The ID of the Amazon DataZone domain in which this project is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#domain_identifier DatazoneProject#domain_identifier}
  */
  readonly domainIdentifier: string;
  /**
  * The ID of the domain unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#domain_unit_id DatazoneProject#domain_unit_id}
  */
  readonly domainUnitId?: string;
  /**
  * The glossary terms that can be used in this Amazon DataZone project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#glossary_terms DatazoneProject#glossary_terms}
  */
  readonly glossaryTerms?: string[];
  /**
  * The project membership assignments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#membership_assignments DatazoneProject#membership_assignments}
  */
  readonly membershipAssignments?: DatazoneProjectMembershipAssignments[] | cdktn.IResolvable;
  /**
  * The name of the Amazon DataZone project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#name DatazoneProject#name}
  */
  readonly name: string;
  /**
  * The project category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#project_category DatazoneProject#project_category}
  */
  readonly projectCategory?: string;
  /**
  * The project execution role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#project_execution_role DatazoneProject#project_execution_role}
  */
  readonly projectExecutionRole?: string;
  /**
  * The project profile ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#project_profile_id DatazoneProject#project_profile_id}
  */
  readonly projectProfileId?: string;
  /**
  * The project profile version to which the project should be updated. You can only specify the following string for this parameter: latest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#project_profile_version DatazoneProject#project_profile_version}
  */
  readonly projectProfileVersion?: string;
  /**
  * The resource tags of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#resource_tags DatazoneProject#resource_tags}
  */
  readonly resourceTags?: DatazoneProjectResourceTags[] | cdktn.IResolvable;
  /**
  * The user parameters of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#user_parameters DatazoneProject#user_parameters}
  */
  readonly userParameters?: DatazoneProjectUserParameters[] | cdktn.IResolvable;
}
export interface DatazoneProjectMembershipAssignmentsMember {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#group_identifier DatazoneProject#group_identifier}
  */
  readonly groupIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#user_identifier DatazoneProject#user_identifier}
  */
  readonly userIdentifier?: string;
}

export function datazoneProjectMembershipAssignmentsMemberToTerraform(struct?: DatazoneProjectMembershipAssignmentsMember | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_identifier: cdktn.stringToTerraform(struct!.groupIdentifier),
    user_identifier: cdktn.stringToTerraform(struct!.userIdentifier),
  }
}


export function datazoneProjectMembershipAssignmentsMemberToHclTerraform(struct?: DatazoneProjectMembershipAssignmentsMember | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_identifier: {
      value: cdktn.stringToHclTerraform(struct!.groupIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_identifier: {
      value: cdktn.stringToHclTerraform(struct!.userIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazoneProjectMembershipAssignmentsMemberOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazoneProjectMembershipAssignmentsMember | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIdentifier = this._groupIdentifier;
    }
    if (this._userIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdentifier = this._userIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazoneProjectMembershipAssignmentsMember | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupIdentifier = undefined;
      this._userIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupIdentifier = value.groupIdentifier;
      this._userIdentifier = value.userIdentifier;
    }
  }

  // group_identifier - computed: true, optional: true, required: false
  private _groupIdentifier?: string;
  public get groupIdentifier() {
    return this.getStringAttribute('group_identifier');
  }
  public set groupIdentifier(value: string) {
    this._groupIdentifier = value;
  }
  public resetGroupIdentifier() {
    this._groupIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdentifierInput() {
    return this._groupIdentifier;
  }

  // user_identifier - computed: true, optional: true, required: false
  private _userIdentifier?: string;
  public get userIdentifier() {
    return this.getStringAttribute('user_identifier');
  }
  public set userIdentifier(value: string) {
    this._userIdentifier = value;
  }
  public resetUserIdentifier() {
    this._userIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentifierInput() {
    return this._userIdentifier;
  }
}
export interface DatazoneProjectMembershipAssignments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#designation DatazoneProject#designation}
  */
  readonly designation?: string;
  /**
  * The member of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#member DatazoneProject#member}
  */
  readonly member?: DatazoneProjectMembershipAssignmentsMember;
}

export function datazoneProjectMembershipAssignmentsToTerraform(struct?: DatazoneProjectMembershipAssignments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    designation: cdktn.stringToTerraform(struct!.designation),
    member: datazoneProjectMembershipAssignmentsMemberToTerraform(struct!.member),
  }
}


export function datazoneProjectMembershipAssignmentsToHclTerraform(struct?: DatazoneProjectMembershipAssignments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    designation: {
      value: cdktn.stringToHclTerraform(struct!.designation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member: {
      value: datazoneProjectMembershipAssignmentsMemberToHclTerraform(struct!.member),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazoneProjectMembershipAssignmentsMember",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazoneProjectMembershipAssignmentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazoneProjectMembershipAssignments | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._designation !== undefined) {
      hasAnyValues = true;
      internalValueResult.designation = this._designation;
    }
    if (this._member?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.member = this._member?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazoneProjectMembershipAssignments | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._designation = undefined;
      this._member.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._designation = value.designation;
      this._member.internalValue = value.member;
    }
  }

  // designation - computed: true, optional: true, required: false
  private _designation?: string;
  public get designation() {
    return this.getStringAttribute('designation');
  }
  public set designation(value: string) {
    this._designation = value;
  }
  public resetDesignation() {
    this._designation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get designationInput() {
    return this._designation;
  }

  // member - computed: true, optional: true, required: false
  private _member = new DatazoneProjectMembershipAssignmentsMemberOutputReference(this, "member");
  public get member() {
    return this._member;
  }
  public putMember(value: DatazoneProjectMembershipAssignmentsMember) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }
}

export class DatazoneProjectMembershipAssignmentsList extends cdktn.ComplexList {
  public internalValue? : DatazoneProjectMembershipAssignments[] | cdktn.IResolvable

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
  public get(index: number): DatazoneProjectMembershipAssignmentsOutputReference {
    return new DatazoneProjectMembershipAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazoneProjectResourceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#key DatazoneProject#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#value DatazoneProject#value}
  */
  readonly value?: string;
}

export function datazoneProjectResourceTagsToTerraform(struct?: DatazoneProjectResourceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function datazoneProjectResourceTagsToHclTerraform(struct?: DatazoneProjectResourceTags | cdktn.IResolvable): any {
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

export class DatazoneProjectResourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazoneProjectResourceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DatazoneProjectResourceTags | cdktn.IResolvable | undefined) {
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

export class DatazoneProjectResourceTagsList extends cdktn.ComplexList {
  public internalValue? : DatazoneProjectResourceTags[] | cdktn.IResolvable

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
  public get(index: number): DatazoneProjectResourceTagsOutputReference {
    return new DatazoneProjectResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazoneProjectUserParametersEnvironmentParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#name DatazoneProject#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#value DatazoneProject#value}
  */
  readonly value?: string;
}

export function datazoneProjectUserParametersEnvironmentParametersToTerraform(struct?: DatazoneProjectUserParametersEnvironmentParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function datazoneProjectUserParametersEnvironmentParametersToHclTerraform(struct?: DatazoneProjectUserParametersEnvironmentParameters | cdktn.IResolvable): any {
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

export class DatazoneProjectUserParametersEnvironmentParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazoneProjectUserParametersEnvironmentParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazoneProjectUserParametersEnvironmentParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class DatazoneProjectUserParametersEnvironmentParametersList extends cdktn.ComplexList {
  public internalValue? : DatazoneProjectUserParametersEnvironmentParameters[] | cdktn.IResolvable

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
  public get(index: number): DatazoneProjectUserParametersEnvironmentParametersOutputReference {
    return new DatazoneProjectUserParametersEnvironmentParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazoneProjectUserParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#environment_configuration_name DatazoneProject#environment_configuration_name}
  */
  readonly environmentConfigurationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#environment_id DatazoneProject#environment_id}
  */
  readonly environmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#environment_parameters DatazoneProject#environment_parameters}
  */
  readonly environmentParameters?: DatazoneProjectUserParametersEnvironmentParameters[] | cdktn.IResolvable;
}

export function datazoneProjectUserParametersToTerraform(struct?: DatazoneProjectUserParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    environment_configuration_name: cdktn.stringToTerraform(struct!.environmentConfigurationName),
    environment_id: cdktn.stringToTerraform(struct!.environmentId),
    environment_parameters: cdktn.listMapper(datazoneProjectUserParametersEnvironmentParametersToTerraform, false)(struct!.environmentParameters),
  }
}


export function datazoneProjectUserParametersToHclTerraform(struct?: DatazoneProjectUserParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    environment_configuration_name: {
      value: cdktn.stringToHclTerraform(struct!.environmentConfigurationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_id: {
      value: cdktn.stringToHclTerraform(struct!.environmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_parameters: {
      value: cdktn.listMapperHcl(datazoneProjectUserParametersEnvironmentParametersToHclTerraform, false)(struct!.environmentParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DatazoneProjectUserParametersEnvironmentParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazoneProjectUserParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazoneProjectUserParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentConfigurationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentConfigurationName = this._environmentConfigurationName;
    }
    if (this._environmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentId = this._environmentId;
    }
    if (this._environmentParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentParameters = this._environmentParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazoneProjectUserParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environmentConfigurationName = undefined;
      this._environmentId = undefined;
      this._environmentParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environmentConfigurationName = value.environmentConfigurationName;
      this._environmentId = value.environmentId;
      this._environmentParameters.internalValue = value.environmentParameters;
    }
  }

  // environment_configuration_name - computed: true, optional: true, required: false
  private _environmentConfigurationName?: string;
  public get environmentConfigurationName() {
    return this.getStringAttribute('environment_configuration_name');
  }
  public set environmentConfigurationName(value: string) {
    this._environmentConfigurationName = value;
  }
  public resetEnvironmentConfigurationName() {
    this._environmentConfigurationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentConfigurationNameInput() {
    return this._environmentConfigurationName;
  }

  // environment_id - computed: true, optional: true, required: false
  private _environmentId?: string;
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // environment_parameters - computed: true, optional: true, required: false
  private _environmentParameters = new DatazoneProjectUserParametersEnvironmentParametersList(this, "environment_parameters", false);
  public get environmentParameters() {
    return this._environmentParameters;
  }
  public putEnvironmentParameters(value: DatazoneProjectUserParametersEnvironmentParameters[] | cdktn.IResolvable) {
    this._environmentParameters.internalValue = value;
  }
  public resetEnvironmentParameters() {
    this._environmentParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentParametersInput() {
    return this._environmentParameters.internalValue;
  }
}

export class DatazoneProjectUserParametersList extends cdktn.ComplexList {
  public internalValue? : DatazoneProjectUserParameters[] | cdktn.IResolvable

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
  public get(index: number): DatazoneProjectUserParametersOutputReference {
    return new DatazoneProjectUserParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project awscc_datazone_project}
*/
export class DatazoneProject extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_datazone_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DatazoneProject resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatazoneProject to import
  * @param importFromId The id of the existing DatazoneProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatazoneProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_project awscc_datazone_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatazoneProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DatazoneProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datazone_project',
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
    this._description = config.description;
    this._domainIdentifier = config.domainIdentifier;
    this._domainUnitId = config.domainUnitId;
    this._glossaryTerms = config.glossaryTerms;
    this._membershipAssignments.internalValue = config.membershipAssignments;
    this._name = config.name;
    this._projectCategory = config.projectCategory;
    this._projectExecutionRole = config.projectExecutionRole;
    this._projectProfileId = config.projectProfileId;
    this._projectProfileVersion = config.projectProfileVersion;
    this._resourceTags.internalValue = config.resourceTags;
    this._userParameters.internalValue = config.userParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_identifier - computed: false, optional: false, required: true
  private _domainIdentifier?: string;
  public get domainIdentifier() {
    return this.getStringAttribute('domain_identifier');
  }
  public set domainIdentifier(value: string) {
    this._domainIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdentifierInput() {
    return this._domainIdentifier;
  }

  // domain_unit_id - computed: true, optional: true, required: false
  private _domainUnitId?: string;
  public get domainUnitId() {
    return this.getStringAttribute('domain_unit_id');
  }
  public set domainUnitId(value: string) {
    this._domainUnitId = value;
  }
  public resetDomainUnitId() {
    this._domainUnitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUnitIdInput() {
    return this._domainUnitId;
  }

  // glossary_terms - computed: true, optional: true, required: false
  private _glossaryTerms?: string[];
  public get glossaryTerms() {
    return this.getListAttribute('glossary_terms');
  }
  public set glossaryTerms(value: string[]) {
    this._glossaryTerms = value;
  }
  public resetGlossaryTerms() {
    this._glossaryTerms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glossaryTermsInput() {
    return this._glossaryTerms;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // membership_assignments - computed: true, optional: true, required: false
  private _membershipAssignments = new DatazoneProjectMembershipAssignmentsList(this, "membership_assignments", false);
  public get membershipAssignments() {
    return this._membershipAssignments;
  }
  public putMembershipAssignments(value: DatazoneProjectMembershipAssignments[] | cdktn.IResolvable) {
    this._membershipAssignments.internalValue = value;
  }
  public resetMembershipAssignments() {
    this._membershipAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipAssignmentsInput() {
    return this._membershipAssignments.internalValue;
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

  // project_category - computed: true, optional: true, required: false
  private _projectCategory?: string;
  public get projectCategory() {
    return this.getStringAttribute('project_category');
  }
  public set projectCategory(value: string) {
    this._projectCategory = value;
  }
  public resetProjectCategory() {
    this._projectCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectCategoryInput() {
    return this._projectCategory;
  }

  // project_execution_role - computed: true, optional: true, required: false
  private _projectExecutionRole?: string;
  public get projectExecutionRole() {
    return this.getStringAttribute('project_execution_role');
  }
  public set projectExecutionRole(value: string) {
    this._projectExecutionRole = value;
  }
  public resetProjectExecutionRole() {
    this._projectExecutionRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectExecutionRoleInput() {
    return this._projectExecutionRole;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_profile_id - computed: true, optional: true, required: false
  private _projectProfileId?: string;
  public get projectProfileId() {
    return this.getStringAttribute('project_profile_id');
  }
  public set projectProfileId(value: string) {
    this._projectProfileId = value;
  }
  public resetProjectProfileId() {
    this._projectProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectProfileIdInput() {
    return this._projectProfileId;
  }

  // project_profile_version - computed: true, optional: true, required: false
  private _projectProfileVersion?: string;
  public get projectProfileVersion() {
    return this.getStringAttribute('project_profile_version');
  }
  public set projectProfileVersion(value: string) {
    this._projectProfileVersion = value;
  }
  public resetProjectProfileVersion() {
    this._projectProfileVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectProfileVersionInput() {
    return this._projectProfileVersion;
  }

  // project_status - computed: true, optional: false, required: false
  public get projectStatus() {
    return this.getStringAttribute('project_status');
  }

  // resource_tags - computed: true, optional: true, required: false
  private _resourceTags = new DatazoneProjectResourceTagsList(this, "resource_tags", false);
  public get resourceTags() {
    return this._resourceTags;
  }
  public putResourceTags(value: DatazoneProjectResourceTags[] | cdktn.IResolvable) {
    this._resourceTags.internalValue = value;
  }
  public resetResourceTags() {
    this._resourceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags.internalValue;
  }

  // user_parameters - computed: true, optional: true, required: false
  private _userParameters = new DatazoneProjectUserParametersList(this, "user_parameters", false);
  public get userParameters() {
    return this._userParameters;
  }
  public putUserParameters(value: DatazoneProjectUserParameters[] | cdktn.IResolvable) {
    this._userParameters.internalValue = value;
  }
  public resetUserParameters() {
    this._userParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userParametersInput() {
    return this._userParameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
      domain_unit_id: cdktn.stringToTerraform(this._domainUnitId),
      glossary_terms: cdktn.listMapper(cdktn.stringToTerraform, false)(this._glossaryTerms),
      membership_assignments: cdktn.listMapper(datazoneProjectMembershipAssignmentsToTerraform, false)(this._membershipAssignments.internalValue),
      name: cdktn.stringToTerraform(this._name),
      project_category: cdktn.stringToTerraform(this._projectCategory),
      project_execution_role: cdktn.stringToTerraform(this._projectExecutionRole),
      project_profile_id: cdktn.stringToTerraform(this._projectProfileId),
      project_profile_version: cdktn.stringToTerraform(this._projectProfileVersion),
      resource_tags: cdktn.listMapper(datazoneProjectResourceTagsToTerraform, false)(this._resourceTags.internalValue),
      user_parameters: cdktn.listMapper(datazoneProjectUserParametersToTerraform, false)(this._userParameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_identifier: {
        value: cdktn.stringToHclTerraform(this._domainIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_unit_id: {
        value: cdktn.stringToHclTerraform(this._domainUnitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glossary_terms: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._glossaryTerms),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      membership_assignments: {
        value: cdktn.listMapperHcl(datazoneProjectMembershipAssignmentsToHclTerraform, false)(this._membershipAssignments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatazoneProjectMembershipAssignmentsList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_category: {
        value: cdktn.stringToHclTerraform(this._projectCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_execution_role: {
        value: cdktn.stringToHclTerraform(this._projectExecutionRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_profile_id: {
        value: cdktn.stringToHclTerraform(this._projectProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_profile_version: {
        value: cdktn.stringToHclTerraform(this._projectProfileVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_tags: {
        value: cdktn.listMapperHcl(datazoneProjectResourceTagsToHclTerraform, false)(this._resourceTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatazoneProjectResourceTagsList",
      },
      user_parameters: {
        value: cdktn.listMapperHcl(datazoneProjectUserParametersToHclTerraform, false)(this._userParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatazoneProjectUserParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
