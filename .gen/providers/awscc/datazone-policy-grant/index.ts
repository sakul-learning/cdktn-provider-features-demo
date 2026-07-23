// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatazonePolicyGrantConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#detail DatazonePolicyGrant#detail}
  */
  readonly detail?: DatazonePolicyGrantDetail;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#domain_identifier DatazonePolicyGrant#domain_identifier}
  */
  readonly domainIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#entity_identifier DatazonePolicyGrant#entity_identifier}
  */
  readonly entityIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#entity_type DatazonePolicyGrant#entity_type}
  */
  readonly entityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#policy_type DatazonePolicyGrant#policy_type}
  */
  readonly policyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#principal DatazonePolicyGrant#principal}
  */
  readonly principal?: DatazonePolicyGrantPrincipal;
}
export interface DatazonePolicyGrantDetailAddToProjectMemberPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}

export function datazonePolicyGrantDetailAddToProjectMemberPoolToTerraform(struct?: DatazonePolicyGrantDetailAddToProjectMemberPool | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
  }
}


export function datazonePolicyGrantDetailAddToProjectMemberPoolToHclTerraform(struct?: DatazonePolicyGrantDetailAddToProjectMemberPool | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazonePolicyGrantDetailAddToProjectMemberPool | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailAddToProjectMemberPool | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
    }
  }

  // include_child_domain_units - computed: true, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }
}
export interface DatazonePolicyGrantDetailCreateAssetType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}

export function datazonePolicyGrantDetailCreateAssetTypeToTerraform(struct?: DatazonePolicyGrantDetailCreateAssetType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
  }
}


export function datazonePolicyGrantDetailCreateAssetTypeToHclTerraform(struct?: DatazonePolicyGrantDetailCreateAssetType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailCreateAssetTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazonePolicyGrantDetailCreateAssetType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailCreateAssetType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
    }
  }

  // include_child_domain_units - computed: true, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }
}
export interface DatazonePolicyGrantDetailCreateDomainUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}

export function datazonePolicyGrantDetailCreateDomainUnitToTerraform(struct?: DatazonePolicyGrantDetailCreateDomainUnit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
  }
}


export function datazonePolicyGrantDetailCreateDomainUnitToHclTerraform(struct?: DatazonePolicyGrantDetailCreateDomainUnit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailCreateDomainUnitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazonePolicyGrantDetailCreateDomainUnit | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailCreateDomainUnit | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
    }
  }

  // include_child_domain_units - computed: true, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }
}
export interface DatazonePolicyGrantDetailCreateEnvironmentProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#domain_unit_id DatazonePolicyGrant#domain_unit_id}
  */
  readonly domainUnitId?: string;
}

export function datazonePolicyGrantDetailCreateEnvironmentProfileToTerraform(struct?: DatazonePolicyGrantDetailCreateEnvironmentProfile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_unit_id: cdktn.stringToTerraform(struct!.domainUnitId),
  }
}


export function datazonePolicyGrantDetailCreateEnvironmentProfileToHclTerraform(struct?: DatazonePolicyGrantDetailCreateEnvironmentProfile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain_unit_id: {
      value: cdktn.stringToHclTerraform(struct!.domainUnitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazonePolicyGrantDetailCreateEnvironmentProfile | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainUnitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainUnitId = this._domainUnitId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailCreateEnvironmentProfile | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainUnitId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainUnitId = value.domainUnitId;
    }
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
}
export interface DatazonePolicyGrantDetailCreateFormType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}

export function datazonePolicyGrantDetailCreateFormTypeToTerraform(struct?: DatazonePolicyGrantDetailCreateFormType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
  }
}


export function datazonePolicyGrantDetailCreateFormTypeToHclTerraform(struct?: DatazonePolicyGrantDetailCreateFormType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailCreateFormTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazonePolicyGrantDetailCreateFormType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailCreateFormType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
    }
  }

  // include_child_domain_units - computed: true, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }
}
export interface DatazonePolicyGrantDetailCreateGlossary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}

export function datazonePolicyGrantDetailCreateGlossaryToTerraform(struct?: DatazonePolicyGrantDetailCreateGlossary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
  }
}


export function datazonePolicyGrantDetailCreateGlossaryToHclTerraform(struct?: DatazonePolicyGrantDetailCreateGlossary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailCreateGlossaryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazonePolicyGrantDetailCreateGlossary | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailCreateGlossary | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
    }
  }

  // include_child_domain_units - computed: true, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }
}
export interface DatazonePolicyGrantDetailCreateProject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}

export function datazonePolicyGrantDetailCreateProjectToTerraform(struct?: DatazonePolicyGrantDetailCreateProject | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
  }
}


export function datazonePolicyGrantDetailCreateProjectToHclTerraform(struct?: DatazonePolicyGrantDetailCreateProject | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailCreateProjectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazonePolicyGrantDetailCreateProject | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailCreateProject | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
    }
  }

  // include_child_domain_units - computed: true, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }
}
export interface DatazonePolicyGrantDetailCreateProjectFromProjectProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#project_profiles DatazonePolicyGrant#project_profiles}
  */
  readonly projectProfiles?: string[];
}

export function datazonePolicyGrantDetailCreateProjectFromProjectProfileToTerraform(struct?: DatazonePolicyGrantDetailCreateProjectFromProjectProfile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
    project_profiles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.projectProfiles),
  }
}


export function datazonePolicyGrantDetailCreateProjectFromProjectProfileToHclTerraform(struct?: DatazonePolicyGrantDetailCreateProjectFromProjectProfile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project_profiles: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.projectProfiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazonePolicyGrantDetailCreateProjectFromProjectProfile | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    if (this._projectProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectProfiles = this._projectProfiles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailCreateProjectFromProjectProfile | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = undefined;
      this._projectProfiles = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
      this._projectProfiles = value.projectProfiles;
    }
  }

  // include_child_domain_units - computed: true, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }

  // project_profiles - computed: true, optional: true, required: false
  private _projectProfiles?: string[]; 
  public get projectProfiles() {
    return this.getListAttribute('project_profiles');
  }
  public set projectProfiles(value: string[]) {
    this._projectProfiles = value;
  }
  public resetProjectProfiles() {
    this._projectProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectProfilesInput() {
    return this._projectProfiles;
  }
}
export interface DatazonePolicyGrantDetailOverrideDomainUnitOwners {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}

export function datazonePolicyGrantDetailOverrideDomainUnitOwnersToTerraform(struct?: DatazonePolicyGrantDetailOverrideDomainUnitOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
  }
}


export function datazonePolicyGrantDetailOverrideDomainUnitOwnersToHclTerraform(struct?: DatazonePolicyGrantDetailOverrideDomainUnitOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazonePolicyGrantDetailOverrideDomainUnitOwners | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailOverrideDomainUnitOwners | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
    }
  }

  // include_child_domain_units - computed: true, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }
}
export interface DatazonePolicyGrantDetailOverrideProjectOwners {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}

export function datazonePolicyGrantDetailOverrideProjectOwnersToTerraform(struct?: DatazonePolicyGrantDetailOverrideProjectOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
  }
}


export function datazonePolicyGrantDetailOverrideProjectOwnersToHclTerraform(struct?: DatazonePolicyGrantDetailOverrideProjectOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazonePolicyGrantDetailOverrideProjectOwners | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailOverrideProjectOwners | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
    }
  }

  // include_child_domain_units - computed: true, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }
}
export interface DatazonePolicyGrantDetail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#add_to_project_member_pool DatazonePolicyGrant#add_to_project_member_pool}
  */
  readonly addToProjectMemberPool?: DatazonePolicyGrantDetailAddToProjectMemberPool;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#create_asset_type DatazonePolicyGrant#create_asset_type}
  */
  readonly createAssetType?: DatazonePolicyGrantDetailCreateAssetType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#create_domain_unit DatazonePolicyGrant#create_domain_unit}
  */
  readonly createDomainUnit?: DatazonePolicyGrantDetailCreateDomainUnit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#create_environment DatazonePolicyGrant#create_environment}
  */
  readonly createEnvironment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#create_environment_from_blueprint DatazonePolicyGrant#create_environment_from_blueprint}
  */
  readonly createEnvironmentFromBlueprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#create_environment_profile DatazonePolicyGrant#create_environment_profile}
  */
  readonly createEnvironmentProfile?: DatazonePolicyGrantDetailCreateEnvironmentProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#create_form_type DatazonePolicyGrant#create_form_type}
  */
  readonly createFormType?: DatazonePolicyGrantDetailCreateFormType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#create_glossary DatazonePolicyGrant#create_glossary}
  */
  readonly createGlossary?: DatazonePolicyGrantDetailCreateGlossary;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#create_project DatazonePolicyGrant#create_project}
  */
  readonly createProject?: DatazonePolicyGrantDetailCreateProject;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#create_project_from_project_profile DatazonePolicyGrant#create_project_from_project_profile}
  */
  readonly createProjectFromProjectProfile?: DatazonePolicyGrantDetailCreateProjectFromProjectProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#delegate_create_environment_profile DatazonePolicyGrant#delegate_create_environment_profile}
  */
  readonly delegateCreateEnvironmentProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#override_domain_unit_owners DatazonePolicyGrant#override_domain_unit_owners}
  */
  readonly overrideDomainUnitOwners?: DatazonePolicyGrantDetailOverrideDomainUnitOwners;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#override_project_owners DatazonePolicyGrant#override_project_owners}
  */
  readonly overrideProjectOwners?: DatazonePolicyGrantDetailOverrideProjectOwners;
}

export function datazonePolicyGrantDetailToTerraform(struct?: DatazonePolicyGrantDetail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    add_to_project_member_pool: datazonePolicyGrantDetailAddToProjectMemberPoolToTerraform(struct!.addToProjectMemberPool),
    create_asset_type: datazonePolicyGrantDetailCreateAssetTypeToTerraform(struct!.createAssetType),
    create_domain_unit: datazonePolicyGrantDetailCreateDomainUnitToTerraform(struct!.createDomainUnit),
    create_environment: cdktn.stringToTerraform(struct!.createEnvironment),
    create_environment_from_blueprint: cdktn.stringToTerraform(struct!.createEnvironmentFromBlueprint),
    create_environment_profile: datazonePolicyGrantDetailCreateEnvironmentProfileToTerraform(struct!.createEnvironmentProfile),
    create_form_type: datazonePolicyGrantDetailCreateFormTypeToTerraform(struct!.createFormType),
    create_glossary: datazonePolicyGrantDetailCreateGlossaryToTerraform(struct!.createGlossary),
    create_project: datazonePolicyGrantDetailCreateProjectToTerraform(struct!.createProject),
    create_project_from_project_profile: datazonePolicyGrantDetailCreateProjectFromProjectProfileToTerraform(struct!.createProjectFromProjectProfile),
    delegate_create_environment_profile: cdktn.stringToTerraform(struct!.delegateCreateEnvironmentProfile),
    override_domain_unit_owners: datazonePolicyGrantDetailOverrideDomainUnitOwnersToTerraform(struct!.overrideDomainUnitOwners),
    override_project_owners: datazonePolicyGrantDetailOverrideProjectOwnersToTerraform(struct!.overrideProjectOwners),
  }
}


export function datazonePolicyGrantDetailToHclTerraform(struct?: DatazonePolicyGrantDetail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    add_to_project_member_pool: {
      value: datazonePolicyGrantDetailAddToProjectMemberPoolToHclTerraform(struct!.addToProjectMemberPool),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazonePolicyGrantDetailAddToProjectMemberPool",
    },
    create_asset_type: {
      value: datazonePolicyGrantDetailCreateAssetTypeToHclTerraform(struct!.createAssetType),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazonePolicyGrantDetailCreateAssetType",
    },
    create_domain_unit: {
      value: datazonePolicyGrantDetailCreateDomainUnitToHclTerraform(struct!.createDomainUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazonePolicyGrantDetailCreateDomainUnit",
    },
    create_environment: {
      value: cdktn.stringToHclTerraform(struct!.createEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_environment_from_blueprint: {
      value: cdktn.stringToHclTerraform(struct!.createEnvironmentFromBlueprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_environment_profile: {
      value: datazonePolicyGrantDetailCreateEnvironmentProfileToHclTerraform(struct!.createEnvironmentProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazonePolicyGrantDetailCreateEnvironmentProfile",
    },
    create_form_type: {
      value: datazonePolicyGrantDetailCreateFormTypeToHclTerraform(struct!.createFormType),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazonePolicyGrantDetailCreateFormType",
    },
    create_glossary: {
      value: datazonePolicyGrantDetailCreateGlossaryToHclTerraform(struct!.createGlossary),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazonePolicyGrantDetailCreateGlossary",
    },
    create_project: {
      value: datazonePolicyGrantDetailCreateProjectToHclTerraform(struct!.createProject),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazonePolicyGrantDetailCreateProject",
    },
    create_project_from_project_profile: {
      value: datazonePolicyGrantDetailCreateProjectFromProjectProfileToHclTerraform(struct!.createProjectFromProjectProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazonePolicyGrantDetailCreateProjectFromProjectProfile",
    },
    delegate_create_environment_profile: {
      value: cdktn.stringToHclTerraform(struct!.delegateCreateEnvironmentProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_domain_unit_owners: {
      value: datazonePolicyGrantDetailOverrideDomainUnitOwnersToHclTerraform(struct!.overrideDomainUnitOwners),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazonePolicyGrantDetailOverrideDomainUnitOwners",
    },
    override_project_owners: {
      value: datazonePolicyGrantDetailOverrideProjectOwnersToHclTerraform(struct!.overrideProjectOwners),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazonePolicyGrantDetailOverrideProjectOwners",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazonePolicyGrantDetail | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addToProjectMemberPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addToProjectMemberPool = this._addToProjectMemberPool?.internalValue;
    }
    if (this._createAssetType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createAssetType = this._createAssetType?.internalValue;
    }
    if (this._createDomainUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDomainUnit = this._createDomainUnit?.internalValue;
    }
    if (this._createEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.createEnvironment = this._createEnvironment;
    }
    if (this._createEnvironmentFromBlueprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.createEnvironmentFromBlueprint = this._createEnvironmentFromBlueprint;
    }
    if (this._createEnvironmentProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createEnvironmentProfile = this._createEnvironmentProfile?.internalValue;
    }
    if (this._createFormType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createFormType = this._createFormType?.internalValue;
    }
    if (this._createGlossary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createGlossary = this._createGlossary?.internalValue;
    }
    if (this._createProject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createProject = this._createProject?.internalValue;
    }
    if (this._createProjectFromProjectProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createProjectFromProjectProfile = this._createProjectFromProjectProfile?.internalValue;
    }
    if (this._delegateCreateEnvironmentProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegateCreateEnvironmentProfile = this._delegateCreateEnvironmentProfile;
    }
    if (this._overrideDomainUnitOwners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideDomainUnitOwners = this._overrideDomainUnitOwners?.internalValue;
    }
    if (this._overrideProjectOwners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideProjectOwners = this._overrideProjectOwners?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetail | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addToProjectMemberPool.internalValue = undefined;
      this._createAssetType.internalValue = undefined;
      this._createDomainUnit.internalValue = undefined;
      this._createEnvironment = undefined;
      this._createEnvironmentFromBlueprint = undefined;
      this._createEnvironmentProfile.internalValue = undefined;
      this._createFormType.internalValue = undefined;
      this._createGlossary.internalValue = undefined;
      this._createProject.internalValue = undefined;
      this._createProjectFromProjectProfile.internalValue = undefined;
      this._delegateCreateEnvironmentProfile = undefined;
      this._overrideDomainUnitOwners.internalValue = undefined;
      this._overrideProjectOwners.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addToProjectMemberPool.internalValue = value.addToProjectMemberPool;
      this._createAssetType.internalValue = value.createAssetType;
      this._createDomainUnit.internalValue = value.createDomainUnit;
      this._createEnvironment = value.createEnvironment;
      this._createEnvironmentFromBlueprint = value.createEnvironmentFromBlueprint;
      this._createEnvironmentProfile.internalValue = value.createEnvironmentProfile;
      this._createFormType.internalValue = value.createFormType;
      this._createGlossary.internalValue = value.createGlossary;
      this._createProject.internalValue = value.createProject;
      this._createProjectFromProjectProfile.internalValue = value.createProjectFromProjectProfile;
      this._delegateCreateEnvironmentProfile = value.delegateCreateEnvironmentProfile;
      this._overrideDomainUnitOwners.internalValue = value.overrideDomainUnitOwners;
      this._overrideProjectOwners.internalValue = value.overrideProjectOwners;
    }
  }

  // add_to_project_member_pool - computed: true, optional: true, required: false
  private _addToProjectMemberPool = new DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference(this, "add_to_project_member_pool");
  public get addToProjectMemberPool() {
    return this._addToProjectMemberPool;
  }
  public putAddToProjectMemberPool(value: DatazonePolicyGrantDetailAddToProjectMemberPool) {
    this._addToProjectMemberPool.internalValue = value;
  }
  public resetAddToProjectMemberPool() {
    this._addToProjectMemberPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addToProjectMemberPoolInput() {
    return this._addToProjectMemberPool.internalValue;
  }

  // create_asset_type - computed: true, optional: true, required: false
  private _createAssetType = new DatazonePolicyGrantDetailCreateAssetTypeOutputReference(this, "create_asset_type");
  public get createAssetType() {
    return this._createAssetType;
  }
  public putCreateAssetType(value: DatazonePolicyGrantDetailCreateAssetType) {
    this._createAssetType.internalValue = value;
  }
  public resetCreateAssetType() {
    this._createAssetType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAssetTypeInput() {
    return this._createAssetType.internalValue;
  }

  // create_domain_unit - computed: true, optional: true, required: false
  private _createDomainUnit = new DatazonePolicyGrantDetailCreateDomainUnitOutputReference(this, "create_domain_unit");
  public get createDomainUnit() {
    return this._createDomainUnit;
  }
  public putCreateDomainUnit(value: DatazonePolicyGrantDetailCreateDomainUnit) {
    this._createDomainUnit.internalValue = value;
  }
  public resetCreateDomainUnit() {
    this._createDomainUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDomainUnitInput() {
    return this._createDomainUnit.internalValue;
  }

  // create_environment - computed: true, optional: true, required: false
  private _createEnvironment?: string; 
  public get createEnvironment() {
    return this.getStringAttribute('create_environment');
  }
  public set createEnvironment(value: string) {
    this._createEnvironment = value;
  }
  public resetCreateEnvironment() {
    this._createEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createEnvironmentInput() {
    return this._createEnvironment;
  }

  // create_environment_from_blueprint - computed: true, optional: true, required: false
  private _createEnvironmentFromBlueprint?: string; 
  public get createEnvironmentFromBlueprint() {
    return this.getStringAttribute('create_environment_from_blueprint');
  }
  public set createEnvironmentFromBlueprint(value: string) {
    this._createEnvironmentFromBlueprint = value;
  }
  public resetCreateEnvironmentFromBlueprint() {
    this._createEnvironmentFromBlueprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createEnvironmentFromBlueprintInput() {
    return this._createEnvironmentFromBlueprint;
  }

  // create_environment_profile - computed: true, optional: true, required: false
  private _createEnvironmentProfile = new DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference(this, "create_environment_profile");
  public get createEnvironmentProfile() {
    return this._createEnvironmentProfile;
  }
  public putCreateEnvironmentProfile(value: DatazonePolicyGrantDetailCreateEnvironmentProfile) {
    this._createEnvironmentProfile.internalValue = value;
  }
  public resetCreateEnvironmentProfile() {
    this._createEnvironmentProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createEnvironmentProfileInput() {
    return this._createEnvironmentProfile.internalValue;
  }

  // create_form_type - computed: true, optional: true, required: false
  private _createFormType = new DatazonePolicyGrantDetailCreateFormTypeOutputReference(this, "create_form_type");
  public get createFormType() {
    return this._createFormType;
  }
  public putCreateFormType(value: DatazonePolicyGrantDetailCreateFormType) {
    this._createFormType.internalValue = value;
  }
  public resetCreateFormType() {
    this._createFormType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createFormTypeInput() {
    return this._createFormType.internalValue;
  }

  // create_glossary - computed: true, optional: true, required: false
  private _createGlossary = new DatazonePolicyGrantDetailCreateGlossaryOutputReference(this, "create_glossary");
  public get createGlossary() {
    return this._createGlossary;
  }
  public putCreateGlossary(value: DatazonePolicyGrantDetailCreateGlossary) {
    this._createGlossary.internalValue = value;
  }
  public resetCreateGlossary() {
    this._createGlossary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createGlossaryInput() {
    return this._createGlossary.internalValue;
  }

  // create_project - computed: true, optional: true, required: false
  private _createProject = new DatazonePolicyGrantDetailCreateProjectOutputReference(this, "create_project");
  public get createProject() {
    return this._createProject;
  }
  public putCreateProject(value: DatazonePolicyGrantDetailCreateProject) {
    this._createProject.internalValue = value;
  }
  public resetCreateProject() {
    this._createProject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createProjectInput() {
    return this._createProject.internalValue;
  }

  // create_project_from_project_profile - computed: true, optional: true, required: false
  private _createProjectFromProjectProfile = new DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference(this, "create_project_from_project_profile");
  public get createProjectFromProjectProfile() {
    return this._createProjectFromProjectProfile;
  }
  public putCreateProjectFromProjectProfile(value: DatazonePolicyGrantDetailCreateProjectFromProjectProfile) {
    this._createProjectFromProjectProfile.internalValue = value;
  }
  public resetCreateProjectFromProjectProfile() {
    this._createProjectFromProjectProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createProjectFromProjectProfileInput() {
    return this._createProjectFromProjectProfile.internalValue;
  }

  // delegate_create_environment_profile - computed: true, optional: true, required: false
  private _delegateCreateEnvironmentProfile?: string; 
  public get delegateCreateEnvironmentProfile() {
    return this.getStringAttribute('delegate_create_environment_profile');
  }
  public set delegateCreateEnvironmentProfile(value: string) {
    this._delegateCreateEnvironmentProfile = value;
  }
  public resetDelegateCreateEnvironmentProfile() {
    this._delegateCreateEnvironmentProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateCreateEnvironmentProfileInput() {
    return this._delegateCreateEnvironmentProfile;
  }

  // override_domain_unit_owners - computed: true, optional: true, required: false
  private _overrideDomainUnitOwners = new DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference(this, "override_domain_unit_owners");
  public get overrideDomainUnitOwners() {
    return this._overrideDomainUnitOwners;
  }
  public putOverrideDomainUnitOwners(value: DatazonePolicyGrantDetailOverrideDomainUnitOwners) {
    this._overrideDomainUnitOwners.internalValue = value;
  }
  public resetOverrideDomainUnitOwners() {
    this._overrideDomainUnitOwners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideDomainUnitOwnersInput() {
    return this._overrideDomainUnitOwners.internalValue;
  }

  // override_project_owners - computed: true, optional: true, required: false
  private _overrideProjectOwners = new DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference(this, "override_project_owners");
  public get overrideProjectOwners() {
    return this._overrideProjectOwners;
  }
  public putOverrideProjectOwners(value: DatazonePolicyGrantDetailOverrideProjectOwners) {
    this._overrideProjectOwners.internalValue = value;
  }
  public resetOverrideProjectOwners() {
    this._overrideProjectOwners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideProjectOwnersInput() {
    return this._overrideProjectOwners.internalValue;
  }
}
export interface DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#all_domain_units_grant_filter DatazonePolicyGrant#all_domain_units_grant_filter}
  */
  readonly allDomainUnitsGrantFilter?: string;
}

export function datazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterToTerraform(struct?: DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all_domain_units_grant_filter: cdktn.stringToTerraform(struct!.allDomainUnitsGrantFilter),
  }
}


export function datazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterToHclTerraform(struct?: DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all_domain_units_grant_filter: {
      value: cdktn.stringToHclTerraform(struct!.allDomainUnitsGrantFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDomainUnitsGrantFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDomainUnitsGrantFilter = this._allDomainUnitsGrantFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDomainUnitsGrantFilter = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDomainUnitsGrantFilter = value.allDomainUnitsGrantFilter;
    }
  }

  // all_domain_units_grant_filter - computed: true, optional: true, required: false
  private _allDomainUnitsGrantFilter?: string; 
  public get allDomainUnitsGrantFilter() {
    return this.getStringAttribute('all_domain_units_grant_filter');
  }
  public set allDomainUnitsGrantFilter(value: string) {
    this._allDomainUnitsGrantFilter = value;
  }
  public resetAllDomainUnitsGrantFilter() {
    this._allDomainUnitsGrantFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDomainUnitsGrantFilterInput() {
    return this._allDomainUnitsGrantFilter;
  }
}
export interface DatazonePolicyGrantPrincipalDomainUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#domain_unit_designation DatazonePolicyGrant#domain_unit_designation}
  */
  readonly domainUnitDesignation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#domain_unit_grant_filter DatazonePolicyGrant#domain_unit_grant_filter}
  */
  readonly domainUnitGrantFilter?: DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#domain_unit_identifier DatazonePolicyGrant#domain_unit_identifier}
  */
  readonly domainUnitIdentifier?: string;
}

export function datazonePolicyGrantPrincipalDomainUnitToTerraform(struct?: DatazonePolicyGrantPrincipalDomainUnit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_unit_designation: cdktn.stringToTerraform(struct!.domainUnitDesignation),
    domain_unit_grant_filter: datazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterToTerraform(struct!.domainUnitGrantFilter),
    domain_unit_identifier: cdktn.stringToTerraform(struct!.domainUnitIdentifier),
  }
}


export function datazonePolicyGrantPrincipalDomainUnitToHclTerraform(struct?: DatazonePolicyGrantPrincipalDomainUnit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain_unit_designation: {
      value: cdktn.stringToHclTerraform(struct!.domainUnitDesignation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_unit_grant_filter: {
      value: datazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterToHclTerraform(struct!.domainUnitGrantFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter",
    },
    domain_unit_identifier: {
      value: cdktn.stringToHclTerraform(struct!.domainUnitIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantPrincipalDomainUnitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazonePolicyGrantPrincipalDomainUnit | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainUnitDesignation !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainUnitDesignation = this._domainUnitDesignation;
    }
    if (this._domainUnitGrantFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainUnitGrantFilter = this._domainUnitGrantFilter?.internalValue;
    }
    if (this._domainUnitIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainUnitIdentifier = this._domainUnitIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantPrincipalDomainUnit | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainUnitDesignation = undefined;
      this._domainUnitGrantFilter.internalValue = undefined;
      this._domainUnitIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainUnitDesignation = value.domainUnitDesignation;
      this._domainUnitGrantFilter.internalValue = value.domainUnitGrantFilter;
      this._domainUnitIdentifier = value.domainUnitIdentifier;
    }
  }

  // domain_unit_designation - computed: true, optional: true, required: false
  private _domainUnitDesignation?: string; 
  public get domainUnitDesignation() {
    return this.getStringAttribute('domain_unit_designation');
  }
  public set domainUnitDesignation(value: string) {
    this._domainUnitDesignation = value;
  }
  public resetDomainUnitDesignation() {
    this._domainUnitDesignation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUnitDesignationInput() {
    return this._domainUnitDesignation;
  }

  // domain_unit_grant_filter - computed: true, optional: true, required: false
  private _domainUnitGrantFilter = new DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilterOutputReference(this, "domain_unit_grant_filter");
  public get domainUnitGrantFilter() {
    return this._domainUnitGrantFilter;
  }
  public putDomainUnitGrantFilter(value: DatazonePolicyGrantPrincipalDomainUnitDomainUnitGrantFilter) {
    this._domainUnitGrantFilter.internalValue = value;
  }
  public resetDomainUnitGrantFilter() {
    this._domainUnitGrantFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUnitGrantFilterInput() {
    return this._domainUnitGrantFilter.internalValue;
  }

  // domain_unit_identifier - computed: true, optional: true, required: false
  private _domainUnitIdentifier?: string; 
  public get domainUnitIdentifier() {
    return this.getStringAttribute('domain_unit_identifier');
  }
  public set domainUnitIdentifier(value: string) {
    this._domainUnitIdentifier = value;
  }
  public resetDomainUnitIdentifier() {
    this._domainUnitIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUnitIdentifierInput() {
    return this._domainUnitIdentifier;
  }
}
export interface DatazonePolicyGrantPrincipalGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#group_identifier DatazonePolicyGrant#group_identifier}
  */
  readonly groupIdentifier?: string;
}

export function datazonePolicyGrantPrincipalGroupToTerraform(struct?: DatazonePolicyGrantPrincipalGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_identifier: cdktn.stringToTerraform(struct!.groupIdentifier),
  }
}


export function datazonePolicyGrantPrincipalGroupToHclTerraform(struct?: DatazonePolicyGrantPrincipalGroup | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantPrincipalGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazonePolicyGrantPrincipalGroup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIdentifier = this._groupIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantPrincipalGroup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupIdentifier = value.groupIdentifier;
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
}
export interface DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}
  */
  readonly domainUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}

export function datazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterToTerraform(struct?: DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_unit: cdktn.stringToTerraform(struct!.domainUnit),
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
  }
}


export function datazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterToHclTerraform(struct?: DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain_unit: {
      value: cdktn.stringToHclTerraform(struct!.domainUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainUnit = this._domainUnit;
    }
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainUnit = undefined;
      this._includeChildDomainUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainUnit = value.domainUnit;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
    }
  }

  // domain_unit - computed: true, optional: true, required: false
  private _domainUnit?: string; 
  public get domainUnit() {
    return this.getStringAttribute('domain_unit');
  }
  public set domainUnit(value: string) {
    this._domainUnit = value;
  }
  public resetDomainUnit() {
    this._domainUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUnitInput() {
    return this._domainUnit;
  }

  // include_child_domain_units - computed: true, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }
}
export interface DatazonePolicyGrantPrincipalProjectProjectGrantFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#domain_unit_filter DatazonePolicyGrant#domain_unit_filter}
  */
  readonly domainUnitFilter?: DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter;
}

export function datazonePolicyGrantPrincipalProjectProjectGrantFilterToTerraform(struct?: DatazonePolicyGrantPrincipalProjectProjectGrantFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_unit_filter: datazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterToTerraform(struct!.domainUnitFilter),
  }
}


export function datazonePolicyGrantPrincipalProjectProjectGrantFilterToHclTerraform(struct?: DatazonePolicyGrantPrincipalProjectProjectGrantFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain_unit_filter: {
      value: datazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterToHclTerraform(struct!.domainUnitFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazonePolicyGrantPrincipalProjectProjectGrantFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainUnitFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainUnitFilter = this._domainUnitFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantPrincipalProjectProjectGrantFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainUnitFilter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainUnitFilter.internalValue = value.domainUnitFilter;
    }
  }

  // domain_unit_filter - computed: true, optional: true, required: false
  private _domainUnitFilter = new DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilterOutputReference(this, "domain_unit_filter");
  public get domainUnitFilter() {
    return this._domainUnitFilter;
  }
  public putDomainUnitFilter(value: DatazonePolicyGrantPrincipalProjectProjectGrantFilterDomainUnitFilter) {
    this._domainUnitFilter.internalValue = value;
  }
  public resetDomainUnitFilter() {
    this._domainUnitFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUnitFilterInput() {
    return this._domainUnitFilter.internalValue;
  }
}
export interface DatazonePolicyGrantPrincipalProject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#project_designation DatazonePolicyGrant#project_designation}
  */
  readonly projectDesignation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#project_grant_filter DatazonePolicyGrant#project_grant_filter}
  */
  readonly projectGrantFilter?: DatazonePolicyGrantPrincipalProjectProjectGrantFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#project_identifier DatazonePolicyGrant#project_identifier}
  */
  readonly projectIdentifier?: string;
}

export function datazonePolicyGrantPrincipalProjectToTerraform(struct?: DatazonePolicyGrantPrincipalProject | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    project_designation: cdktn.stringToTerraform(struct!.projectDesignation),
    project_grant_filter: datazonePolicyGrantPrincipalProjectProjectGrantFilterToTerraform(struct!.projectGrantFilter),
    project_identifier: cdktn.stringToTerraform(struct!.projectIdentifier),
  }
}


export function datazonePolicyGrantPrincipalProjectToHclTerraform(struct?: DatazonePolicyGrantPrincipalProject | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    project_designation: {
      value: cdktn.stringToHclTerraform(struct!.projectDesignation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_grant_filter: {
      value: datazonePolicyGrantPrincipalProjectProjectGrantFilterToHclTerraform(struct!.projectGrantFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazonePolicyGrantPrincipalProjectProjectGrantFilter",
    },
    project_identifier: {
      value: cdktn.stringToHclTerraform(struct!.projectIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantPrincipalProjectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazonePolicyGrantPrincipalProject | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectDesignation !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectDesignation = this._projectDesignation;
    }
    if (this._projectGrantFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectGrantFilter = this._projectGrantFilter?.internalValue;
    }
    if (this._projectIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIdentifier = this._projectIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantPrincipalProject | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectDesignation = undefined;
      this._projectGrantFilter.internalValue = undefined;
      this._projectIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectDesignation = value.projectDesignation;
      this._projectGrantFilter.internalValue = value.projectGrantFilter;
      this._projectIdentifier = value.projectIdentifier;
    }
  }

  // project_designation - computed: true, optional: true, required: false
  private _projectDesignation?: string; 
  public get projectDesignation() {
    return this.getStringAttribute('project_designation');
  }
  public set projectDesignation(value: string) {
    this._projectDesignation = value;
  }
  public resetProjectDesignation() {
    this._projectDesignation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectDesignationInput() {
    return this._projectDesignation;
  }

  // project_grant_filter - computed: true, optional: true, required: false
  private _projectGrantFilter = new DatazonePolicyGrantPrincipalProjectProjectGrantFilterOutputReference(this, "project_grant_filter");
  public get projectGrantFilter() {
    return this._projectGrantFilter;
  }
  public putProjectGrantFilter(value: DatazonePolicyGrantPrincipalProjectProjectGrantFilter) {
    this._projectGrantFilter.internalValue = value;
  }
  public resetProjectGrantFilter() {
    this._projectGrantFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectGrantFilterInput() {
    return this._projectGrantFilter.internalValue;
  }

  // project_identifier - computed: true, optional: true, required: false
  private _projectIdentifier?: string; 
  public get projectIdentifier() {
    return this.getStringAttribute('project_identifier');
  }
  public set projectIdentifier(value: string) {
    this._projectIdentifier = value;
  }
  public resetProjectIdentifier() {
    this._projectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdentifierInput() {
    return this._projectIdentifier;
  }
}
export interface DatazonePolicyGrantPrincipalUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#all_users_grant_filter DatazonePolicyGrant#all_users_grant_filter}
  */
  readonly allUsersGrantFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#user_identifier DatazonePolicyGrant#user_identifier}
  */
  readonly userIdentifier?: string;
}

export function datazonePolicyGrantPrincipalUserToTerraform(struct?: DatazonePolicyGrantPrincipalUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all_users_grant_filter: cdktn.stringToTerraform(struct!.allUsersGrantFilter),
    user_identifier: cdktn.stringToTerraform(struct!.userIdentifier),
  }
}


export function datazonePolicyGrantPrincipalUserToHclTerraform(struct?: DatazonePolicyGrantPrincipalUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all_users_grant_filter: {
      value: cdktn.stringToHclTerraform(struct!.allUsersGrantFilter),
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

export class DatazonePolicyGrantPrincipalUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazonePolicyGrantPrincipalUser | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allUsersGrantFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.allUsersGrantFilter = this._allUsersGrantFilter;
    }
    if (this._userIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdentifier = this._userIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantPrincipalUser | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allUsersGrantFilter = undefined;
      this._userIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allUsersGrantFilter = value.allUsersGrantFilter;
      this._userIdentifier = value.userIdentifier;
    }
  }

  // all_users_grant_filter - computed: true, optional: true, required: false
  private _allUsersGrantFilter?: string; 
  public get allUsersGrantFilter() {
    return this.getStringAttribute('all_users_grant_filter');
  }
  public set allUsersGrantFilter(value: string) {
    this._allUsersGrantFilter = value;
  }
  public resetAllUsersGrantFilter() {
    this._allUsersGrantFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allUsersGrantFilterInput() {
    return this._allUsersGrantFilter;
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
export interface DatazonePolicyGrantPrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}
  */
  readonly domainUnit?: DatazonePolicyGrantPrincipalDomainUnit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#group DatazonePolicyGrant#group}
  */
  readonly group?: DatazonePolicyGrantPrincipalGroup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#project DatazonePolicyGrant#project}
  */
  readonly project?: DatazonePolicyGrantPrincipalProject;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#user DatazonePolicyGrant#user}
  */
  readonly user?: DatazonePolicyGrantPrincipalUser;
}

export function datazonePolicyGrantPrincipalToTerraform(struct?: DatazonePolicyGrantPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_unit: datazonePolicyGrantPrincipalDomainUnitToTerraform(struct!.domainUnit),
    group: datazonePolicyGrantPrincipalGroupToTerraform(struct!.group),
    project: datazonePolicyGrantPrincipalProjectToTerraform(struct!.project),
    user: datazonePolicyGrantPrincipalUserToTerraform(struct!.user),
  }
}


export function datazonePolicyGrantPrincipalToHclTerraform(struct?: DatazonePolicyGrantPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain_unit: {
      value: datazonePolicyGrantPrincipalDomainUnitToHclTerraform(struct!.domainUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazonePolicyGrantPrincipalDomainUnit",
    },
    group: {
      value: datazonePolicyGrantPrincipalGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazonePolicyGrantPrincipalGroup",
    },
    project: {
      value: datazonePolicyGrantPrincipalProjectToHclTerraform(struct!.project),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazonePolicyGrantPrincipalProject",
    },
    user: {
      value: datazonePolicyGrantPrincipalUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazonePolicyGrantPrincipalUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantPrincipalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazonePolicyGrantPrincipal | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainUnit = this._domainUnit?.internalValue;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._project?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantPrincipal | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainUnit.internalValue = undefined;
      this._group.internalValue = undefined;
      this._project.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainUnit.internalValue = value.domainUnit;
      this._group.internalValue = value.group;
      this._project.internalValue = value.project;
      this._user.internalValue = value.user;
    }
  }

  // domain_unit - computed: true, optional: true, required: false
  private _domainUnit = new DatazonePolicyGrantPrincipalDomainUnitOutputReference(this, "domain_unit");
  public get domainUnit() {
    return this._domainUnit;
  }
  public putDomainUnit(value: DatazonePolicyGrantPrincipalDomainUnit) {
    this._domainUnit.internalValue = value;
  }
  public resetDomainUnit() {
    this._domainUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUnitInput() {
    return this._domainUnit.internalValue;
  }

  // group - computed: true, optional: true, required: false
  private _group = new DatazonePolicyGrantPrincipalGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: DatazonePolicyGrantPrincipalGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // project - computed: true, optional: true, required: false
  private _project = new DatazonePolicyGrantPrincipalProjectOutputReference(this, "project");
  public get project() {
    return this._project;
  }
  public putProject(value: DatazonePolicyGrantPrincipalProject) {
    this._project.internalValue = value;
  }
  public resetProject() {
    this._project.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user = new DatazonePolicyGrantPrincipalUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: DatazonePolicyGrantPrincipalUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant awscc_datazone_policy_grant}
*/
export class DatazonePolicyGrant extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_datazone_policy_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DatazonePolicyGrant resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatazonePolicyGrant to import
  * @param importFromId The id of the existing DatazonePolicyGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatazonePolicyGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_policy_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/datazone_policy_grant awscc_datazone_policy_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatazonePolicyGrantConfig
  */
  public constructor(scope: Construct, id: string, config: DatazonePolicyGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datazone_policy_grant',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._detail.internalValue = config.detail;
    this._domainIdentifier = config.domainIdentifier;
    this._entityIdentifier = config.entityIdentifier;
    this._entityType = config.entityType;
    this._policyType = config.policyType;
    this._principal.internalValue = config.principal;
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

  // detail - computed: true, optional: true, required: false
  private _detail = new DatazonePolicyGrantDetailOutputReference(this, "detail");
  public get detail() {
    return this._detail;
  }
  public putDetail(value: DatazonePolicyGrantDetail) {
    this._detail.internalValue = value;
  }
  public resetDetail() {
    this._detail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail.internalValue;
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

  // entity_identifier - computed: false, optional: false, required: true
  private _entityIdentifier?: string; 
  public get entityIdentifier() {
    return this.getStringAttribute('entity_identifier');
  }
  public set entityIdentifier(value: string) {
    this._entityIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdentifierInput() {
    return this._entityIdentifier;
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // grant_id - computed: true, optional: false, required: false
  public get grantId() {
    return this.getStringAttribute('grant_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // principal - computed: true, optional: true, required: false
  private _principal = new DatazonePolicyGrantPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: DatazonePolicyGrantPrincipal) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      detail: datazonePolicyGrantDetailToTerraform(this._detail.internalValue),
      domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
      entity_identifier: cdktn.stringToTerraform(this._entityIdentifier),
      entity_type: cdktn.stringToTerraform(this._entityType),
      policy_type: cdktn.stringToTerraform(this._policyType),
      principal: datazonePolicyGrantPrincipalToTerraform(this._principal.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      detail: {
        value: datazonePolicyGrantDetailToHclTerraform(this._detail.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatazonePolicyGrantDetail",
      },
      domain_identifier: {
        value: cdktn.stringToHclTerraform(this._domainIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_identifier: {
        value: cdktn.stringToHclTerraform(this._entityIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_type: {
        value: cdktn.stringToHclTerraform(this._entityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktn.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal: {
        value: datazonePolicyGrantPrincipalToHclTerraform(this._principal.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatazonePolicyGrantPrincipal",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
