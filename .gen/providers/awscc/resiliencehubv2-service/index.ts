// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Resiliencehubv2ServiceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Assertions associated with this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#assertions Resiliencehubv2Service#assertions}
  */
  readonly assertions?: Resiliencehubv2ServiceAssertions[] | cdktn.IResolvable;
  /**
  * Systems associated with this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#associated_systems Resiliencehubv2Service#associated_systems}
  */
  readonly associatedSystems?: Resiliencehubv2ServiceAssociatedSystems[] | cdktn.IResolvable;
  /**
  * Dependency discovery state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#dependency_discovery Resiliencehubv2Service#dependency_discovery}
  */
  readonly dependencyDiscovery?: string;
  /**
  * The description of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#description Resiliencehubv2Service#description}
  */
  readonly description?: string;
  /**
  * Input sources for this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#input_sources Resiliencehubv2Service#input_sources}
  */
  readonly inputSources?: Resiliencehubv2ServiceInputSources[] | cdktn.IResolvable;
  /**
  * The KMS key ID for encrypting service data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#kms_key_id Resiliencehubv2Service#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The name of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#name Resiliencehubv2Service#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#permission_model Resiliencehubv2Service#permission_model}
  */
  readonly permissionModel?: Resiliencehubv2ServicePermissionModel;
  /**
  * The ARN of the resilience policy to associate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#policy_arn Resiliencehubv2Service#policy_arn}
  */
  readonly policyArn?: string;
  /**
  * AWS regions for the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#regions Resiliencehubv2Service#regions}
  */
  readonly regions: string[];
  /**
  * Configuration for automatic report generation on a Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#report_configuration Resiliencehubv2Service#report_configuration}
  */
  readonly reportConfiguration?: Resiliencehubv2ServiceReportConfiguration;
  /**
  * Tags assigned to the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#tags Resiliencehubv2Service#tags}
  */
  readonly tags?: Resiliencehubv2ServiceTags[] | cdktn.IResolvable;
}
export interface Resiliencehubv2ServiceAssertions {
  /**
  * The text of the assertion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#text Resiliencehubv2Service#text}
  */
  readonly text?: string;
}

export function resiliencehubv2ServiceAssertionsToTerraform(struct?: Resiliencehubv2ServiceAssertions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
  }
}


export function resiliencehubv2ServiceAssertionsToHclTerraform(struct?: Resiliencehubv2ServiceAssertions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Resiliencehubv2ServiceAssertionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Resiliencehubv2ServiceAssertions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServiceAssertions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: true, optional: true, required: false
  private _text?: string;
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class Resiliencehubv2ServiceAssertionsList extends cdktn.ComplexList {
  public internalValue? : Resiliencehubv2ServiceAssertions[] | cdktn.IResolvable

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
  public get(index: number): Resiliencehubv2ServiceAssertionsOutputReference {
    return new Resiliencehubv2ServiceAssertionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Resiliencehubv2ServiceAssociatedSystems {
  /**
  * The system ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#system_arn Resiliencehubv2Service#system_arn}
  */
  readonly systemArn?: string;
  /**
  * User journey IDs associated with this system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#user_journey_ids Resiliencehubv2Service#user_journey_ids}
  */
  readonly userJourneyIds?: string[];
}

export function resiliencehubv2ServiceAssociatedSystemsToTerraform(struct?: Resiliencehubv2ServiceAssociatedSystems | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    system_arn: cdktn.stringToTerraform(struct!.systemArn),
    user_journey_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.userJourneyIds),
  }
}


export function resiliencehubv2ServiceAssociatedSystemsToHclTerraform(struct?: Resiliencehubv2ServiceAssociatedSystems | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    system_arn: {
      value: cdktn.stringToHclTerraform(struct!.systemArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_journey_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.userJourneyIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Resiliencehubv2ServiceAssociatedSystemsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Resiliencehubv2ServiceAssociatedSystems | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systemArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemArn = this._systemArn;
    }
    if (this._userJourneyIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.userJourneyIds = this._userJourneyIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServiceAssociatedSystems | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._systemArn = undefined;
      this._userJourneyIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._systemArn = value.systemArn;
      this._userJourneyIds = value.userJourneyIds;
    }
  }

  // system_arn - computed: true, optional: true, required: false
  private _systemArn?: string;
  public get systemArn() {
    return this.getStringAttribute('system_arn');
  }
  public set systemArn(value: string) {
    this._systemArn = value;
  }
  public resetSystemArn() {
    this._systemArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemArnInput() {
    return this._systemArn;
  }

  // user_journey_ids - computed: true, optional: true, required: false
  private _userJourneyIds?: string[];
  public get userJourneyIds() {
    return this.getListAttribute('user_journey_ids');
  }
  public set userJourneyIds(value: string[]) {
    this._userJourneyIds = value;
  }
  public resetUserJourneyIds() {
    this._userJourneyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userJourneyIdsInput() {
    return this._userJourneyIds;
  }
}

export class Resiliencehubv2ServiceAssociatedSystemsList extends cdktn.ComplexList {
  public internalValue? : Resiliencehubv2ServiceAssociatedSystems[] | cdktn.IResolvable

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
  public get(index: number): Resiliencehubv2ServiceAssociatedSystemsOutputReference {
    return new Resiliencehubv2ServiceAssociatedSystemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo {
}

export function resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloToTerraform(struct?: Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloToHclTerraform(struct?: Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach {
}

export function resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachToTerraform(struct?: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachToHclTerraform(struct?: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo {
}

export function resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoToTerraform(struct?: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoToHclTerraform(struct?: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto {
}

export function resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoToTerraform(struct?: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoToHclTerraform(struct?: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach {
}

export function resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachToTerraform(struct?: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachToHclTerraform(struct?: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo {
}

export function resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoToTerraform(struct?: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoToHclTerraform(struct?: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto {
}

export function resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoToTerraform(struct?: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoToHclTerraform(struct?: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface Resiliencehubv2ServiceEffectivePolicyValues {
}

export function resiliencehubv2ServiceEffectivePolicyValuesToTerraform(struct?: Resiliencehubv2ServiceEffectivePolicyValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function resiliencehubv2ServiceEffectivePolicyValuesToHclTerraform(struct?: Resiliencehubv2ServiceEffectivePolicyValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Resiliencehubv2ServiceEffectivePolicyValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Resiliencehubv2ServiceEffectivePolicyValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServiceEffectivePolicyValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_slo - computed: true, optional: false, required: false
  private _availabilitySlo = new Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference(this, "availability_slo");
  public get availabilitySlo() {
    return this._availabilitySlo;
  }

  // multi_az_dr_approach - computed: true, optional: false, required: false
  private _multiAzDrApproach = new Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference(this, "multi_az_dr_approach");
  public get multiAzDrApproach() {
    return this._multiAzDrApproach;
  }

  // multi_az_rpo - computed: true, optional: false, required: false
  private _multiAzRpo = new Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference(this, "multi_az_rpo");
  public get multiAzRpo() {
    return this._multiAzRpo;
  }

  // multi_az_rto - computed: true, optional: false, required: false
  private _multiAzRto = new Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference(this, "multi_az_rto");
  public get multiAzRto() {
    return this._multiAzRto;
  }

  // multi_region_dr_approach - computed: true, optional: false, required: false
  private _multiRegionDrApproach = new Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference(this, "multi_region_dr_approach");
  public get multiRegionDrApproach() {
    return this._multiRegionDrApproach;
  }

  // multi_region_rpo - computed: true, optional: false, required: false
  private _multiRegionRpo = new Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference(this, "multi_region_rpo");
  public get multiRegionRpo() {
    return this._multiRegionRpo;
  }

  // multi_region_rto - computed: true, optional: false, required: false
  private _multiRegionRto = new Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference(this, "multi_region_rto");
  public get multiRegionRto() {
    return this._multiRegionRto;
  }
}
export interface Resiliencehubv2ServiceInputSourcesResourceConfigurationEks {
  /**
  * ARN of the EKS cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#cluster_arn Resiliencehubv2Service#cluster_arn}
  */
  readonly clusterArn?: string;
  /**
  * EKS namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#namespaces Resiliencehubv2Service#namespaces}
  */
  readonly namespaces?: string[];
}

export function resiliencehubv2ServiceInputSourcesResourceConfigurationEksToTerraform(struct?: Resiliencehubv2ServiceInputSourcesResourceConfigurationEks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_arn: cdktn.stringToTerraform(struct!.clusterArn),
    namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaces),
  }
}


export function resiliencehubv2ServiceInputSourcesResourceConfigurationEksToHclTerraform(struct?: Resiliencehubv2ServiceInputSourcesResourceConfigurationEks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_arn: {
      value: cdktn.stringToHclTerraform(struct!.clusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespaces: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Resiliencehubv2ServiceInputSourcesResourceConfigurationEks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterArn = this._clusterArn;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServiceInputSourcesResourceConfigurationEks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterArn = undefined;
      this._namespaces = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterArn = value.clusterArn;
      this._namespaces = value.namespaces;
    }
  }

  // cluster_arn - computed: true, optional: true, required: false
  private _clusterArn?: string;
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  public resetClusterArn() {
    this._clusterArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
  }

  // namespaces - computed: true, optional: true, required: false
  private _namespaces?: string[];
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }
}
export interface Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags {
  /**
  * Tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#key Resiliencehubv2Service#key}
  */
  readonly key?: string;
  /**
  * Tag values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#values Resiliencehubv2Service#values}
  */
  readonly values?: string[];
}

export function resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsToTerraform(struct?: Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsToHclTerraform(struct?: Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
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

  // values - computed: true, optional: true, required: false
  private _values?: string[];
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList extends cdktn.ComplexList {
  public internalValue? : Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags[] | cdktn.IResolvable

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
  public get(index: number): Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference {
    return new Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Resiliencehubv2ServiceInputSourcesResourceConfiguration {
  /**
  * ARN of a CloudFormation stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#cfn_stack_arn Resiliencehubv2Service#cfn_stack_arn}
  */
  readonly cfnStackArn?: string;
  /**
  * S3 URL of a design file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#design_file_s3_url Resiliencehubv2Service#design_file_s3_url}
  */
  readonly designFileS3Url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#eks Resiliencehubv2Service#eks}
  */
  readonly eks?: Resiliencehubv2ServiceInputSourcesResourceConfigurationEks;
  /**
  * Resource tags to discover resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#resource_tags Resiliencehubv2Service#resource_tags}
  */
  readonly resourceTags?: Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags[] | cdktn.IResolvable;
  /**
  * URL of a Terraform state file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#tf_state_file_url Resiliencehubv2Service#tf_state_file_url}
  */
  readonly tfStateFileUrl?: string;
}

export function resiliencehubv2ServiceInputSourcesResourceConfigurationToTerraform(struct?: Resiliencehubv2ServiceInputSourcesResourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cfn_stack_arn: cdktn.stringToTerraform(struct!.cfnStackArn),
    design_file_s3_url: cdktn.stringToTerraform(struct!.designFileS3Url),
    eks: resiliencehubv2ServiceInputSourcesResourceConfigurationEksToTerraform(struct!.eks),
    resource_tags: cdktn.listMapper(resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsToTerraform, false)(struct!.resourceTags),
    tf_state_file_url: cdktn.stringToTerraform(struct!.tfStateFileUrl),
  }
}


export function resiliencehubv2ServiceInputSourcesResourceConfigurationToHclTerraform(struct?: Resiliencehubv2ServiceInputSourcesResourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cfn_stack_arn: {
      value: cdktn.stringToHclTerraform(struct!.cfnStackArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    design_file_s3_url: {
      value: cdktn.stringToHclTerraform(struct!.designFileS3Url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eks: {
      value: resiliencehubv2ServiceInputSourcesResourceConfigurationEksToHclTerraform(struct!.eks),
      isBlock: true,
      type: "struct",
      storageClassType: "Resiliencehubv2ServiceInputSourcesResourceConfigurationEks",
    },
    resource_tags: {
      value: cdktn.listMapperHcl(resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsToHclTerraform, false)(struct!.resourceTags),
      isBlock: true,
      type: "list",
      storageClassType: "Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList",
    },
    tf_state_file_url: {
      value: cdktn.stringToHclTerraform(struct!.tfStateFileUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Resiliencehubv2ServiceInputSourcesResourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cfnStackArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfnStackArn = this._cfnStackArn;
    }
    if (this._designFileS3Url !== undefined) {
      hasAnyValues = true;
      internalValueResult.designFileS3Url = this._designFileS3Url;
    }
    if (this._eks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eks = this._eks?.internalValue;
    }
    if (this._resourceTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTags = this._resourceTags?.internalValue;
    }
    if (this._tfStateFileUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tfStateFileUrl = this._tfStateFileUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServiceInputSourcesResourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cfnStackArn = undefined;
      this._designFileS3Url = undefined;
      this._eks.internalValue = undefined;
      this._resourceTags.internalValue = undefined;
      this._tfStateFileUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cfnStackArn = value.cfnStackArn;
      this._designFileS3Url = value.designFileS3Url;
      this._eks.internalValue = value.eks;
      this._resourceTags.internalValue = value.resourceTags;
      this._tfStateFileUrl = value.tfStateFileUrl;
    }
  }

  // cfn_stack_arn - computed: true, optional: true, required: false
  private _cfnStackArn?: string;
  public get cfnStackArn() {
    return this.getStringAttribute('cfn_stack_arn');
  }
  public set cfnStackArn(value: string) {
    this._cfnStackArn = value;
  }
  public resetCfnStackArn() {
    this._cfnStackArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfnStackArnInput() {
    return this._cfnStackArn;
  }

  // design_file_s3_url - computed: true, optional: true, required: false
  private _designFileS3Url?: string;
  public get designFileS3Url() {
    return this.getStringAttribute('design_file_s3_url');
  }
  public set designFileS3Url(value: string) {
    this._designFileS3Url = value;
  }
  public resetDesignFileS3Url() {
    this._designFileS3Url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get designFileS3UrlInput() {
    return this._designFileS3Url;
  }

  // eks - computed: true, optional: true, required: false
  private _eks = new Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference(this, "eks");
  public get eks() {
    return this._eks;
  }
  public putEks(value: Resiliencehubv2ServiceInputSourcesResourceConfigurationEks) {
    this._eks.internalValue = value;
  }
  public resetEks() {
    this._eks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksInput() {
    return this._eks.internalValue;
  }

  // resource_tags - computed: true, optional: true, required: false
  private _resourceTags = new Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList(this, "resource_tags", false);
  public get resourceTags() {
    return this._resourceTags;
  }
  public putResourceTags(value: Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags[] | cdktn.IResolvable) {
    this._resourceTags.internalValue = value;
  }
  public resetResourceTags() {
    this._resourceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags.internalValue;
  }

  // tf_state_file_url - computed: true, optional: true, required: false
  private _tfStateFileUrl?: string;
  public get tfStateFileUrl() {
    return this.getStringAttribute('tf_state_file_url');
  }
  public set tfStateFileUrl(value: string) {
    this._tfStateFileUrl = value;
  }
  public resetTfStateFileUrl() {
    this._tfStateFileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tfStateFileUrlInput() {
    return this._tfStateFileUrl;
  }
}
export interface Resiliencehubv2ServiceInputSources {
  /**
  * Resource configuration for an input source. Provide exactly one field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#resource_configuration Resiliencehubv2Service#resource_configuration}
  */
  readonly resourceConfiguration?: Resiliencehubv2ServiceInputSourcesResourceConfiguration;
}

export function resiliencehubv2ServiceInputSourcesToTerraform(struct?: Resiliencehubv2ServiceInputSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_configuration: resiliencehubv2ServiceInputSourcesResourceConfigurationToTerraform(struct!.resourceConfiguration),
  }
}


export function resiliencehubv2ServiceInputSourcesToHclTerraform(struct?: Resiliencehubv2ServiceInputSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_configuration: {
      value: resiliencehubv2ServiceInputSourcesResourceConfigurationToHclTerraform(struct!.resourceConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Resiliencehubv2ServiceInputSourcesResourceConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Resiliencehubv2ServiceInputSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Resiliencehubv2ServiceInputSources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfiguration = this._resourceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServiceInputSources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceConfiguration.internalValue = value.resourceConfiguration;
    }
  }

  // resource_configuration - computed: true, optional: true, required: false
  private _resourceConfiguration = new Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference(this, "resource_configuration");
  public get resourceConfiguration() {
    return this._resourceConfiguration;
  }
  public putResourceConfiguration(value: Resiliencehubv2ServiceInputSourcesResourceConfiguration) {
    this._resourceConfiguration.internalValue = value;
  }
  public resetResourceConfiguration() {
    this._resourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigurationInput() {
    return this._resourceConfiguration.internalValue;
  }
}

export class Resiliencehubv2ServiceInputSourcesList extends cdktn.ComplexList {
  public internalValue? : Resiliencehubv2ServiceInputSources[] | cdktn.IResolvable

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
  public get(index: number): Resiliencehubv2ServiceInputSourcesOutputReference {
    return new Resiliencehubv2ServiceInputSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Resiliencehubv2ServicePermissionModelCrossAccountRoleArns {
  /**
  * ARN of the cross-account IAM role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#cross_account_role_arn Resiliencehubv2Service#cross_account_role_arn}
  */
  readonly crossAccountRoleArn?: string;
  /**
  * External ID for cross-account access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#external_id Resiliencehubv2Service#external_id}
  */
  readonly externalId?: string;
}

export function resiliencehubv2ServicePermissionModelCrossAccountRoleArnsToTerraform(struct?: Resiliencehubv2ServicePermissionModelCrossAccountRoleArns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role_arn: cdktn.stringToTerraform(struct!.crossAccountRoleArn),
    external_id: cdktn.stringToTerraform(struct!.externalId),
  }
}


export function resiliencehubv2ServicePermissionModelCrossAccountRoleArnsToHclTerraform(struct?: Resiliencehubv2ServicePermissionModelCrossAccountRoleArns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.crossAccountRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Resiliencehubv2ServicePermissionModelCrossAccountRoleArns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRoleArn = this._crossAccountRoleArn;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServicePermissionModelCrossAccountRoleArns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRoleArn = undefined;
      this._externalId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRoleArn = value.crossAccountRoleArn;
      this._externalId = value.externalId;
    }
  }

  // cross_account_role_arn - computed: true, optional: true, required: false
  private _crossAccountRoleArn?: string;
  public get crossAccountRoleArn() {
    return this.getStringAttribute('cross_account_role_arn');
  }
  public set crossAccountRoleArn(value: string) {
    this._crossAccountRoleArn = value;
  }
  public resetCrossAccountRoleArn() {
    this._crossAccountRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleArnInput() {
    return this._crossAccountRoleArn;
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string;
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }
}

export class Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList extends cdktn.ComplexList {
  public internalValue? : Resiliencehubv2ServicePermissionModelCrossAccountRoleArns[] | cdktn.IResolvable

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
  public get(index: number): Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference {
    return new Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Resiliencehubv2ServicePermissionModel {
  /**
  * Cross-account role ARNs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#cross_account_role_arns Resiliencehubv2Service#cross_account_role_arns}
  */
  readonly crossAccountRoleArns?: Resiliencehubv2ServicePermissionModelCrossAccountRoleArns[] | cdktn.IResolvable;
  /**
  * Name of the invoker IAM role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#invoker_role_name Resiliencehubv2Service#invoker_role_name}
  */
  readonly invokerRoleName?: string;
}

export function resiliencehubv2ServicePermissionModelToTerraform(struct?: Resiliencehubv2ServicePermissionModel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role_arns: cdktn.listMapper(resiliencehubv2ServicePermissionModelCrossAccountRoleArnsToTerraform, false)(struct!.crossAccountRoleArns),
    invoker_role_name: cdktn.stringToTerraform(struct!.invokerRoleName),
  }
}


export function resiliencehubv2ServicePermissionModelToHclTerraform(struct?: Resiliencehubv2ServicePermissionModel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role_arns: {
      value: cdktn.listMapperHcl(resiliencehubv2ServicePermissionModelCrossAccountRoleArnsToHclTerraform, false)(struct!.crossAccountRoleArns),
      isBlock: true,
      type: "list",
      storageClassType: "Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList",
    },
    invoker_role_name: {
      value: cdktn.stringToHclTerraform(struct!.invokerRoleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Resiliencehubv2ServicePermissionModelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Resiliencehubv2ServicePermissionModel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRoleArns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRoleArns = this._crossAccountRoleArns?.internalValue;
    }
    if (this._invokerRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.invokerRoleName = this._invokerRoleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServicePermissionModel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRoleArns.internalValue = undefined;
      this._invokerRoleName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRoleArns.internalValue = value.crossAccountRoleArns;
      this._invokerRoleName = value.invokerRoleName;
    }
  }

  // cross_account_role_arns - computed: true, optional: true, required: false
  private _crossAccountRoleArns = new Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList(this, "cross_account_role_arns", false);
  public get crossAccountRoleArns() {
    return this._crossAccountRoleArns;
  }
  public putCrossAccountRoleArns(value: Resiliencehubv2ServicePermissionModelCrossAccountRoleArns[] | cdktn.IResolvable) {
    this._crossAccountRoleArns.internalValue = value;
  }
  public resetCrossAccountRoleArns() {
    this._crossAccountRoleArns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleArnsInput() {
    return this._crossAccountRoleArns.internalValue;
  }

  // invoker_role_name - computed: true, optional: true, required: false
  private _invokerRoleName?: string;
  public get invokerRoleName() {
    return this.getStringAttribute('invoker_role_name');
  }
  public set invokerRoleName(value: string) {
    this._invokerRoleName = value;
  }
  public resetInvokerRoleName() {
    this._invokerRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokerRoleNameInput() {
    return this._invokerRoleName;
  }
}
export interface Resiliencehubv2ServiceReportConfigurationReportOutputS3 {
  /**
  * Account ID of the bucket owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#bucket_owner Resiliencehubv2Service#bucket_owner}
  */
  readonly bucketOwner?: string;
  /**
  * S3 bucket path where reports will be written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#bucket_path Resiliencehubv2Service#bucket_path}
  */
  readonly bucketPath?: string;
}

export function resiliencehubv2ServiceReportConfigurationReportOutputS3ToTerraform(struct?: Resiliencehubv2ServiceReportConfigurationReportOutputS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
    bucket_path: cdktn.stringToTerraform(struct!.bucketPath),
  }
}


export function resiliencehubv2ServiceReportConfigurationReportOutputS3ToHclTerraform(struct?: Resiliencehubv2ServiceReportConfigurationReportOutputS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_path: {
      value: cdktn.stringToHclTerraform(struct!.bucketPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Resiliencehubv2ServiceReportConfigurationReportOutputS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwner = this._bucketOwner;
    }
    if (this._bucketPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPath = this._bucketPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServiceReportConfigurationReportOutputS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketOwner = undefined;
      this._bucketPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketOwner = value.bucketOwner;
      this._bucketPath = value.bucketPath;
    }
  }

  // bucket_owner - computed: true, optional: true, required: false
  private _bucketOwner?: string;
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }
  public set bucketOwner(value: string) {
    this._bucketOwner = value;
  }
  public resetBucketOwner() {
    this._bucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerInput() {
    return this._bucketOwner;
  }

  // bucket_path - computed: true, optional: true, required: false
  private _bucketPath?: string;
  public get bucketPath() {
    return this.getStringAttribute('bucket_path');
  }
  public set bucketPath(value: string) {
    this._bucketPath = value;
  }
  public resetBucketPath() {
    this._bucketPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPathInput() {
    return this._bucketPath;
  }
}
export interface Resiliencehubv2ServiceReportConfigurationReportOutput {
  /**
  * S3 configuration for report output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#s3 Resiliencehubv2Service#s3}
  */
  readonly s3?: Resiliencehubv2ServiceReportConfigurationReportOutputS3;
}

export function resiliencehubv2ServiceReportConfigurationReportOutputToTerraform(struct?: Resiliencehubv2ServiceReportConfigurationReportOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3: resiliencehubv2ServiceReportConfigurationReportOutputS3ToTerraform(struct!.s3),
  }
}


export function resiliencehubv2ServiceReportConfigurationReportOutputToHclTerraform(struct?: Resiliencehubv2ServiceReportConfigurationReportOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3: {
      value: resiliencehubv2ServiceReportConfigurationReportOutputS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "Resiliencehubv2ServiceReportConfigurationReportOutputS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Resiliencehubv2ServiceReportConfigurationReportOutput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServiceReportConfigurationReportOutput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3.internalValue = value.s3;
    }
  }

  // s3 - computed: true, optional: true, required: false
  private _s3 = new Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: Resiliencehubv2ServiceReportConfigurationReportOutputS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}

export class Resiliencehubv2ServiceReportConfigurationReportOutputList extends cdktn.ComplexList {
  public internalValue? : Resiliencehubv2ServiceReportConfigurationReportOutput[] | cdktn.IResolvable

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
  public get(index: number): Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference {
    return new Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Resiliencehubv2ServiceReportConfiguration {
  /**
  * Output destinations for generated reports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#report_output Resiliencehubv2Service#report_output}
  */
  readonly reportOutput?: Resiliencehubv2ServiceReportConfigurationReportOutput[] | cdktn.IResolvable;
}

export function resiliencehubv2ServiceReportConfigurationToTerraform(struct?: Resiliencehubv2ServiceReportConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    report_output: cdktn.listMapper(resiliencehubv2ServiceReportConfigurationReportOutputToTerraform, false)(struct!.reportOutput),
  }
}


export function resiliencehubv2ServiceReportConfigurationToHclTerraform(struct?: Resiliencehubv2ServiceReportConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    report_output: {
      value: cdktn.listMapperHcl(resiliencehubv2ServiceReportConfigurationReportOutputToHclTerraform, false)(struct!.reportOutput),
      isBlock: true,
      type: "list",
      storageClassType: "Resiliencehubv2ServiceReportConfigurationReportOutputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Resiliencehubv2ServiceReportConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Resiliencehubv2ServiceReportConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reportOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportOutput = this._reportOutput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2ServiceReportConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reportOutput.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reportOutput.internalValue = value.reportOutput;
    }
  }

  // report_output - computed: true, optional: true, required: false
  private _reportOutput = new Resiliencehubv2ServiceReportConfigurationReportOutputList(this, "report_output", false);
  public get reportOutput() {
    return this._reportOutput;
  }
  public putReportOutput(value: Resiliencehubv2ServiceReportConfigurationReportOutput[] | cdktn.IResolvable) {
    this._reportOutput.internalValue = value;
  }
  public resetReportOutput() {
    this._reportOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportOutputInput() {
    return this._reportOutput.internalValue;
  }
}
export interface Resiliencehubv2ServiceTags {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#key Resiliencehubv2Service#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#value Resiliencehubv2Service#value}
  */
  readonly value?: string;
}

export function resiliencehubv2ServiceTagsToTerraform(struct?: Resiliencehubv2ServiceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function resiliencehubv2ServiceTagsToHclTerraform(struct?: Resiliencehubv2ServiceTags | cdktn.IResolvable): any {
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

export class Resiliencehubv2ServiceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Resiliencehubv2ServiceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Resiliencehubv2ServiceTags | cdktn.IResolvable | undefined) {
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

export class Resiliencehubv2ServiceTagsList extends cdktn.ComplexList {
  public internalValue? : Resiliencehubv2ServiceTags[] | cdktn.IResolvable

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
  public get(index: number): Resiliencehubv2ServiceTagsOutputReference {
    return new Resiliencehubv2ServiceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service awscc_resiliencehubv2_service}
*/
export class Resiliencehubv2Service extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_resiliencehubv2_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Resiliencehubv2Service resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Resiliencehubv2Service to import
  * @param importFromId The id of the existing Resiliencehubv2Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Resiliencehubv2Service to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_resiliencehubv2_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehubv2_service awscc_resiliencehubv2_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Resiliencehubv2ServiceConfig
  */
  public constructor(scope: Construct, id: string, config: Resiliencehubv2ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_resiliencehubv2_service',
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
    this._assertions.internalValue = config.assertions;
    this._associatedSystems.internalValue = config.associatedSystems;
    this._dependencyDiscovery = config.dependencyDiscovery;
    this._description = config.description;
    this._inputSources.internalValue = config.inputSources;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._permissionModel.internalValue = config.permissionModel;
    this._policyArn = config.policyArn;
    this._regions = config.regions;
    this._reportConfiguration.internalValue = config.reportConfiguration;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assertions - computed: true, optional: true, required: false
  private _assertions = new Resiliencehubv2ServiceAssertionsList(this, "assertions", false);
  public get assertions() {
    return this._assertions;
  }
  public putAssertions(value: Resiliencehubv2ServiceAssertions[] | cdktn.IResolvable) {
    this._assertions.internalValue = value;
  }
  public resetAssertions() {
    this._assertions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionsInput() {
    return this._assertions.internalValue;
  }

  // associated_systems - computed: true, optional: true, required: false
  private _associatedSystems = new Resiliencehubv2ServiceAssociatedSystemsList(this, "associated_systems", false);
  public get associatedSystems() {
    return this._associatedSystems;
  }
  public putAssociatedSystems(value: Resiliencehubv2ServiceAssociatedSystems[] | cdktn.IResolvable) {
    this._associatedSystems.internalValue = value;
  }
  public resetAssociatedSystems() {
    this._associatedSystems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedSystemsInput() {
    return this._associatedSystems.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dependency_discovery - computed: true, optional: true, required: false
  private _dependencyDiscovery?: string;
  public get dependencyDiscovery() {
    return this.getStringAttribute('dependency_discovery');
  }
  public set dependencyDiscovery(value: string) {
    this._dependencyDiscovery = value;
  }
  public resetDependencyDiscovery() {
    this._dependencyDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyDiscoveryInput() {
    return this._dependencyDiscovery;
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

  // effective_policy_values - computed: true, optional: false, required: false
  private _effectivePolicyValues = new Resiliencehubv2ServiceEffectivePolicyValuesOutputReference(this, "effective_policy_values");
  public get effectivePolicyValues() {
    return this._effectivePolicyValues;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_sources - computed: true, optional: true, required: false
  private _inputSources = new Resiliencehubv2ServiceInputSourcesList(this, "input_sources", false);
  public get inputSources() {
    return this._inputSources;
  }
  public putInputSources(value: Resiliencehubv2ServiceInputSources[] | cdktn.IResolvable) {
    this._inputSources.internalValue = value;
  }
  public resetInputSources() {
    this._inputSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSourcesInput() {
    return this._inputSources.internalValue;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
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

  // permission_model - computed: true, optional: true, required: false
  private _permissionModel = new Resiliencehubv2ServicePermissionModelOutputReference(this, "permission_model");
  public get permissionModel() {
    return this._permissionModel;
  }
  public putPermissionModel(value: Resiliencehubv2ServicePermissionModel) {
    this._permissionModel.internalValue = value;
  }
  public resetPermissionModel() {
    this._permissionModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionModelInput() {
    return this._permissionModel.internalValue;
  }

  // policy_arn - computed: true, optional: true, required: false
  private _policyArn?: string;
  public get policyArn() {
    return this.getStringAttribute('policy_arn');
  }
  public set policyArn(value: string) {
    this._policyArn = value;
  }
  public resetPolicyArn() {
    this._policyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnInput() {
    return this._policyArn;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[];
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // report_configuration - computed: true, optional: true, required: false
  private _reportConfiguration = new Resiliencehubv2ServiceReportConfigurationOutputReference(this, "report_configuration");
  public get reportConfiguration() {
    return this._reportConfiguration;
  }
  public putReportConfiguration(value: Resiliencehubv2ServiceReportConfiguration) {
    this._reportConfiguration.internalValue = value;
  }
  public resetReportConfiguration() {
    this._reportConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportConfigurationInput() {
    return this._reportConfiguration.internalValue;
  }

  // service_arn - computed: true, optional: false, required: false
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Resiliencehubv2ServiceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Resiliencehubv2ServiceTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assertions: cdktn.listMapper(resiliencehubv2ServiceAssertionsToTerraform, false)(this._assertions.internalValue),
      associated_systems: cdktn.listMapper(resiliencehubv2ServiceAssociatedSystemsToTerraform, false)(this._associatedSystems.internalValue),
      dependency_discovery: cdktn.stringToTerraform(this._dependencyDiscovery),
      description: cdktn.stringToTerraform(this._description),
      input_sources: cdktn.listMapper(resiliencehubv2ServiceInputSourcesToTerraform, false)(this._inputSources.internalValue),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      name: cdktn.stringToTerraform(this._name),
      permission_model: resiliencehubv2ServicePermissionModelToTerraform(this._permissionModel.internalValue),
      policy_arn: cdktn.stringToTerraform(this._policyArn),
      regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._regions),
      report_configuration: resiliencehubv2ServiceReportConfigurationToTerraform(this._reportConfiguration.internalValue),
      tags: cdktn.listMapper(resiliencehubv2ServiceTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assertions: {
        value: cdktn.listMapperHcl(resiliencehubv2ServiceAssertionsToHclTerraform, false)(this._assertions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Resiliencehubv2ServiceAssertionsList",
      },
      associated_systems: {
        value: cdktn.listMapperHcl(resiliencehubv2ServiceAssociatedSystemsToHclTerraform, false)(this._associatedSystems.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Resiliencehubv2ServiceAssociatedSystemsList",
      },
      dependency_discovery: {
        value: cdktn.stringToHclTerraform(this._dependencyDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_sources: {
        value: cdktn.listMapperHcl(resiliencehubv2ServiceInputSourcesToHclTerraform, false)(this._inputSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Resiliencehubv2ServiceInputSourcesList",
      },
      kms_key_id: {
        value: cdktn.stringToHclTerraform(this._kmsKeyId),
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
      permission_model: {
        value: resiliencehubv2ServicePermissionModelToHclTerraform(this._permissionModel.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Resiliencehubv2ServicePermissionModel",
      },
      policy_arn: {
        value: cdktn.stringToHclTerraform(this._policyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      report_configuration: {
        value: resiliencehubv2ServiceReportConfigurationToHclTerraform(this._reportConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Resiliencehubv2ServiceReportConfiguration",
      },
      tags: {
        value: cdktn.listMapperHcl(resiliencehubv2ServiceTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Resiliencehubv2ServiceTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
