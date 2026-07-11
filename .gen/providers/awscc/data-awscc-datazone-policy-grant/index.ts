// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datazone_policy_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDatazonePolicyGrantConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datazone_policy_grant#id DataAwsccDatazonePolicyGrant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool {
}

export function dataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolToTerraform(struct?: DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolToHclTerraform(struct?: DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_child_domain_units - computed: true, optional: false, required: false
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
}
export interface DataAwsccDatazonePolicyGrantDetailCreateAssetType {
}

export function dataAwsccDatazonePolicyGrantDetailCreateAssetTypeToTerraform(struct?: DataAwsccDatazonePolicyGrantDetailCreateAssetType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazonePolicyGrantDetailCreateAssetTypeToHclTerraform(struct?: DataAwsccDatazonePolicyGrantDetailCreateAssetType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazonePolicyGrantDetailCreateAssetType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazonePolicyGrantDetailCreateAssetType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_child_domain_units - computed: true, optional: false, required: false
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
}
export interface DataAwsccDatazonePolicyGrantDetailCreateDomainUnit {
}

export function dataAwsccDatazonePolicyGrantDetailCreateDomainUnitToTerraform(struct?: DataAwsccDatazonePolicyGrantDetailCreateDomainUnit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazonePolicyGrantDetailCreateDomainUnitToHclTerraform(struct?: DataAwsccDatazonePolicyGrantDetailCreateDomainUnit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazonePolicyGrantDetailCreateDomainUnit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazonePolicyGrantDetailCreateDomainUnit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_child_domain_units - computed: true, optional: false, required: false
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
}
export interface DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile {
}

export function dataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileToTerraform(struct?: DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileToHclTerraform(struct?: DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_unit_id - computed: true, optional: false, required: false
  public get domainUnitId() {
    return this.getStringAttribute('domain_unit_id');
  }
}
export interface DataAwsccDatazonePolicyGrantDetailCreateFormType {
}

export function dataAwsccDatazonePolicyGrantDetailCreateFormTypeToTerraform(struct?: DataAwsccDatazonePolicyGrantDetailCreateFormType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazonePolicyGrantDetailCreateFormTypeToHclTerraform(struct?: DataAwsccDatazonePolicyGrantDetailCreateFormType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazonePolicyGrantDetailCreateFormType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazonePolicyGrantDetailCreateFormType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_child_domain_units - computed: true, optional: false, required: false
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
}
export interface DataAwsccDatazonePolicyGrantDetailCreateGlossary {
}

export function dataAwsccDatazonePolicyGrantDetailCreateGlossaryToTerraform(struct?: DataAwsccDatazonePolicyGrantDetailCreateGlossary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazonePolicyGrantDetailCreateGlossaryToHclTerraform(struct?: DataAwsccDatazonePolicyGrantDetailCreateGlossary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazonePolicyGrantDetailCreateGlossary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazonePolicyGrantDetailCreateGlossary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_child_domain_units - computed: true, optional: false, required: false
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
}
export interface DataAwsccDatazonePolicyGrantDetailCreateProject {
}

export function dataAwsccDatazonePolicyGrantDetailCreateProjectToTerraform(struct?: DataAwsccDatazonePolicyGrantDetailCreateProject): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazonePolicyGrantDetailCreateProjectToHclTerraform(struct?: DataAwsccDatazonePolicyGrantDetailCreateProject): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazonePolicyGrantDetailCreateProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazonePolicyGrantDetailCreateProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_child_domain_units - computed: true, optional: false, required: false
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
}
export interface DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile {
}

export function dataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileToTerraform(struct?: DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileToHclTerraform(struct?: DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_child_domain_units - computed: true, optional: false, required: false
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }

  // project_profiles - computed: true, optional: false, required: false
  public get projectProfiles() {
    return this.getListAttribute('project_profiles');
  }
}
export interface DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners {
}

export function dataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersToTerraform(struct?: DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersToHclTerraform(struct?: DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_child_domain_units - computed: true, optional: false, required: false
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
}
export interface DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners {
}

export function dataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersToTerraform(struct?: DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersToHclTerraform(struct?: DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazonePolicyGrantDetailOverrideProjectOwners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_child_domain_units - computed: true, optional: false, required: false
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
}
export interface DataAwsccDatazonePolicyGrantDetail {
}

export function dataAwsccDatazonePolicyGrantDetailToTerraform(struct?: DataAwsccDatazonePolicyGrantDetail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazonePolicyGrantDetailToHclTerraform(struct?: DataAwsccDatazonePolicyGrantDetail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazonePolicyGrantDetailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazonePolicyGrantDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazonePolicyGrantDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_to_project_member_pool - computed: true, optional: false, required: false
  private _addToProjectMemberPool = new DataAwsccDatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference(this, "add_to_project_member_pool");
  public get addToProjectMemberPool() {
    return this._addToProjectMemberPool;
  }

  // create_asset_type - computed: true, optional: false, required: false
  private _createAssetType = new DataAwsccDatazonePolicyGrantDetailCreateAssetTypeOutputReference(this, "create_asset_type");
  public get createAssetType() {
    return this._createAssetType;
  }

  // create_domain_unit - computed: true, optional: false, required: false
  private _createDomainUnit = new DataAwsccDatazonePolicyGrantDetailCreateDomainUnitOutputReference(this, "create_domain_unit");
  public get createDomainUnit() {
    return this._createDomainUnit;
  }

  // create_environment - computed: true, optional: false, required: false
  public get createEnvironment() {
    return this.getStringAttribute('create_environment');
  }

  // create_environment_from_blueprint - computed: true, optional: false, required: false
  public get createEnvironmentFromBlueprint() {
    return this.getStringAttribute('create_environment_from_blueprint');
  }

  // create_environment_profile - computed: true, optional: false, required: false
  private _createEnvironmentProfile = new DataAwsccDatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference(this, "create_environment_profile");
  public get createEnvironmentProfile() {
    return this._createEnvironmentProfile;
  }

  // create_form_type - computed: true, optional: false, required: false
  private _createFormType = new DataAwsccDatazonePolicyGrantDetailCreateFormTypeOutputReference(this, "create_form_type");
  public get createFormType() {
    return this._createFormType;
  }

  // create_glossary - computed: true, optional: false, required: false
  private _createGlossary = new DataAwsccDatazonePolicyGrantDetailCreateGlossaryOutputReference(this, "create_glossary");
  public get createGlossary() {
    return this._createGlossary;
  }

  // create_project - computed: true, optional: false, required: false
  private _createProject = new DataAwsccDatazonePolicyGrantDetailCreateProjectOutputReference(this, "create_project");
  public get createProject() {
    return this._createProject;
  }

  // create_project_from_project_profile - computed: true, optional: false, required: false
  private _createProjectFromProjectProfile = new DataAwsccDatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference(this, "create_project_from_project_profile");
  public get createProjectFromProjectProfile() {
    return this._createProjectFromProjectProfile;
  }

  // delegate_create_environment_profile - computed: true, optional: false, required: false
  public get delegateCreateEnvironmentProfile() {
    return this.getStringAttribute('delegate_create_environment_profile');
  }

  // override_domain_unit_owners - computed: true, optional: false, required: false
  private _overrideDomainUnitOwners = new DataAwsccDatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference(this, "override_domain_unit_owners");
  public get overrideDomainUnitOwners() {
    return this._overrideDomainUnitOwners;
  }

  // override_project_owners - computed: true, optional: false, required: false
  private _overrideProjectOwners = new DataAwsccDatazonePolicyGrantDetailOverrideProjectOwnersOutputReference(this, "override_project_owners");
  public get overrideProjectOwners() {
    return this._overrideProjectOwners;
  }
}
export interface DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter {
}

export function dataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterToTerraform(struct?: DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterToHclTerraform(struct?: DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_domain_units_grant_filter - computed: true, optional: false, required: false
  public get allDomainUnitsGrantFilter() {
    return this.getStringAttribute('all_domain_units_grant_filter');
  }
}
export interface DataAwsccDatazonePolicyGrantPrincipalDomainUnit {
}

export function dataAwsccDatazonePolicyGrantPrincipalDomainUnitToTerraform(struct?: DataAwsccDatazonePolicyGrantPrincipalDomainUnit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazonePolicyGrantPrincipalDomainUnitToHclTerraform(struct?: DataAwsccDatazonePolicyGrantPrincipalDomainUnit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazonePolicyGrantPrincipalDomainUnit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazonePolicyGrantPrincipalDomainUnit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_unit_designation - computed: true, optional: false, required: false
  public get domainUnitDesignation() {
    return this.getStringAttribute('domain_unit_designation');
  }

  // domain_unit_grant_filter - computed: true, optional: false, required: false
  private _domainUnitGrantFilter = new DataAwsccDatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference(this, "domain_unit_grant_filter");
  public get domainUnitGrantFilter() {
    return this._domainUnitGrantFilter;
  }

  // domain_unit_identifier - computed: true, optional: false, required: false
  public get domainUnitIdentifier() {
    return this.getStringAttribute('domain_unit_identifier');
  }
}
export interface DataAwsccDatazonePolicyGrantPrincipalGroup {
}

export function dataAwsccDatazonePolicyGrantPrincipalGroupToTerraform(struct?: DataAwsccDatazonePolicyGrantPrincipalGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazonePolicyGrantPrincipalGroupToHclTerraform(struct?: DataAwsccDatazonePolicyGrantPrincipalGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazonePolicyGrantPrincipalGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazonePolicyGrantPrincipalGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_identifier - computed: true, optional: false, required: false
  public get groupIdentifier() {
    return this.getStringAttribute('group_identifier');
  }
}
export interface DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter {
}

export function dataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterToTerraform(struct?: DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterToHclTerraform(struct?: DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_unit - computed: true, optional: false, required: false
  public get domainUnit() {
    return this.getStringAttribute('domain_unit');
  }

  // include_child_domain_units - computed: true, optional: false, required: false
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
}
export interface DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter {
}

export function dataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterToTerraform(struct?: DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterToHclTerraform(struct?: DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_unit_filter - computed: true, optional: false, required: false
  private _domainUnitFilter = new DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference(this, "domain_unit_filter");
  public get domainUnitFilter() {
    return this._domainUnitFilter;
  }
}
export interface DataAwsccDatazonePolicyGrantPrincipalProject {
}

export function dataAwsccDatazonePolicyGrantPrincipalProjectToTerraform(struct?: DataAwsccDatazonePolicyGrantPrincipalProject): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazonePolicyGrantPrincipalProjectToHclTerraform(struct?: DataAwsccDatazonePolicyGrantPrincipalProject): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazonePolicyGrantPrincipalProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazonePolicyGrantPrincipalProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // project_designation - computed: true, optional: false, required: false
  public get projectDesignation() {
    return this.getStringAttribute('project_designation');
  }

  // project_grant_filter - computed: true, optional: false, required: false
  private _projectGrantFilter = new DataAwsccDatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference(this, "project_grant_filter");
  public get projectGrantFilter() {
    return this._projectGrantFilter;
  }

  // project_identifier - computed: true, optional: false, required: false
  public get projectIdentifier() {
    return this.getStringAttribute('project_identifier');
  }
}
export interface DataAwsccDatazonePolicyGrantPrincipalUser {
}

export function dataAwsccDatazonePolicyGrantPrincipalUserToTerraform(struct?: DataAwsccDatazonePolicyGrantPrincipalUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazonePolicyGrantPrincipalUserToHclTerraform(struct?: DataAwsccDatazonePolicyGrantPrincipalUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazonePolicyGrantPrincipalUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazonePolicyGrantPrincipalUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazonePolicyGrantPrincipalUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_users_grant_filter - computed: true, optional: false, required: false
  public get allUsersGrantFilter() {
    return this.getStringAttribute('all_users_grant_filter');
  }

  // user_identifier - computed: true, optional: false, required: false
  public get userIdentifier() {
    return this.getStringAttribute('user_identifier');
  }
}
export interface DataAwsccDatazonePolicyGrantPrincipal {
}

export function dataAwsccDatazonePolicyGrantPrincipalToTerraform(struct?: DataAwsccDatazonePolicyGrantPrincipal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazonePolicyGrantPrincipalToHclTerraform(struct?: DataAwsccDatazonePolicyGrantPrincipal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazonePolicyGrantPrincipalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazonePolicyGrantPrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazonePolicyGrantPrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_unit - computed: true, optional: false, required: false
  private _domainUnit = new DataAwsccDatazonePolicyGrantPrincipalDomainUnitOutputReference(this, "domain_unit");
  public get domainUnit() {
    return this._domainUnit;
  }

  // group - computed: true, optional: false, required: false
  private _group = new DataAwsccDatazonePolicyGrantPrincipalGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }

  // project - computed: true, optional: false, required: false
  private _project = new DataAwsccDatazonePolicyGrantPrincipalProjectOutputReference(this, "project");
  public get project() {
    return this._project;
  }

  // user - computed: true, optional: false, required: false
  private _user = new DataAwsccDatazonePolicyGrantPrincipalUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datazone_policy_grant awscc_datazone_policy_grant}
*/
export class DataAwsccDatazonePolicyGrant extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_datazone_policy_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDatazonePolicyGrant resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDatazonePolicyGrant to import
  * @param importFromId The id of the existing DataAwsccDatazonePolicyGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datazone_policy_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDatazonePolicyGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_policy_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/datazone_policy_grant awscc_datazone_policy_grant} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDatazonePolicyGrantConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDatazonePolicyGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datazone_policy_grant',
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // detail - computed: true, optional: false, required: false
  private _detail = new DataAwsccDatazonePolicyGrantDetailOutputReference(this, "detail");
  public get detail() {
    return this._detail;
  }

  // domain_identifier - computed: true, optional: false, required: false
  public get domainIdentifier() {
    return this.getStringAttribute('domain_identifier');
  }

  // entity_identifier - computed: true, optional: false, required: false
  public get entityIdentifier() {
    return this.getStringAttribute('entity_identifier');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // grant_id - computed: true, optional: false, required: false
  public get grantId() {
    return this.getStringAttribute('grant_id');
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

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // principal - computed: true, optional: false, required: false
  private _principal = new DataAwsccDatazonePolicyGrantPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
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
