// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/bedrockagentcore_runtime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBedrockagentcoreRuntimeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/bedrockagentcore_runtime#id DataAwsccBedrockagentcoreRuntime#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 {
}

export function dataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3ToTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3ToHclTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
}
export interface DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode {
}

export function dataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeToTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeToHclTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration {
}

export function dataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  private _code = new DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference(this, "code");
  public get code() {
    return this._code;
  }

  // entry_point - computed: true, optional: false, required: false
  public get entryPoint() {
    return this.getListAttribute('entry_point');
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
}
export interface DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration {
}

export function dataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_uri - computed: true, optional: false, required: false
  public get containerUri() {
    return this.getStringAttribute('container_uri');
  }
}
export interface DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifact {
}

export function dataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactToTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifact): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactToHclTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifact): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code_configuration - computed: true, optional: false, required: false
  private _codeConfiguration = new DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference(this, "code_configuration");
  public get codeConfiguration() {
    return this._codeConfiguration;
  }

  // container_configuration - computed: true, optional: false, required: false
  private _containerConfiguration = new DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference(this, "container_configuration");
  public get containerConfiguration() {
    return this._containerConfiguration;
  }
}
export interface DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue {
}

export function dataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueToTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueToHclTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_value_string - computed: true, optional: false, required: false
  public get matchValueString() {
    return this.getStringAttribute('match_value_string');
  }

  // match_value_string_list - computed: true, optional: false, required: false
  public get matchValueStringList() {
    return this.getListAttribute('match_value_string_list');
  }
}
export interface DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue {
}

export function dataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueToTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueToHclTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claim_match_operator - computed: true, optional: false, required: false
  public get claimMatchOperator() {
    return this.getStringAttribute('claim_match_operator');
  }

  // claim_match_value - computed: true, optional: false, required: false
  private _claimMatchValue = new DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference(this, "claim_match_value");
  public get claimMatchValue() {
    return this._claimMatchValue;
  }
}
export interface DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims {
}

export function dataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsToTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsToHclTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorizing_claim_match_value - computed: true, optional: false, required: false
  private _authorizingClaimMatchValue = new DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference(this, "authorizing_claim_match_value");
  public get authorizingClaimMatchValue() {
    return this._authorizingClaimMatchValue;
  }

  // inbound_token_claim_name - computed: true, optional: false, required: false
  public get inboundTokenClaimName() {
    return this.getStringAttribute('inbound_token_claim_name');
  }

  // inbound_token_claim_value_type - computed: true, optional: false, required: false
  public get inboundTokenClaimValueType() {
    return this.getStringAttribute('inbound_token_claim_value_type');
  }
}

export class DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference {
    return new DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer {
}

export function dataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerToTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerToHclTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_audience - computed: true, optional: false, required: false
  public get allowedAudience() {
    return this.getListAttribute('allowed_audience');
  }

  // allowed_clients - computed: true, optional: false, required: false
  public get allowedClients() {
    return this.getListAttribute('allowed_clients');
  }

  // allowed_scopes - computed: true, optional: false, required: false
  public get allowedScopes() {
    return this.getListAttribute('allowed_scopes');
  }

  // custom_claims - computed: true, optional: false, required: false
  private _customClaims = new DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList(this, "custom_claims", false);
  public get customClaims() {
    return this._customClaims;
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
}
export interface DataAwsccBedrockagentcoreRuntimeAuthorizerConfiguration {
}

export function dataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAuthorizerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreRuntimeAuthorizerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreRuntimeAuthorizerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreRuntimeAuthorizerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_jwt_authorizer - computed: true, optional: false, required: false
  private _customJwtAuthorizer = new DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference(this, "custom_jwt_authorizer");
  public get customJwtAuthorizer() {
    return this._customJwtAuthorizer;
  }
}
export interface DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint {
}

export function dataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointToTerraform(struct?: DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointToHclTerraform(struct?: DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_arn - computed: true, optional: false, required: false
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
}
export interface DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint {
}

export function dataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointToTerraform(struct?: DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointToHclTerraform(struct?: DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_arn - computed: true, optional: false, required: false
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
}
export interface DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage {
}

export function dataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageToTerraform(struct?: DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageToHclTerraform(struct?: DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
}
export interface DataAwsccBedrockagentcoreRuntimeFilesystemConfigurations {
}

export function dataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsToTerraform(struct?: DataAwsccBedrockagentcoreRuntimeFilesystemConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsToHclTerraform(struct?: DataAwsccBedrockagentcoreRuntimeFilesystemConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreRuntimeFilesystemConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreRuntimeFilesystemConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // efs_access_point - computed: true, optional: false, required: false
  private _efsAccessPoint = new DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference(this, "efs_access_point");
  public get efsAccessPoint() {
    return this._efsAccessPoint;
  }

  // s3_files_access_point - computed: true, optional: false, required: false
  private _s3FilesAccessPoint = new DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference(this, "s3_files_access_point");
  public get s3FilesAccessPoint() {
    return this._s3FilesAccessPoint;
  }

  // session_storage - computed: true, optional: false, required: false
  private _sessionStorage = new DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference(this, "session_storage");
  public get sessionStorage() {
    return this._sessionStorage;
  }
}

export class DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsOutputReference {
    return new DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreRuntimeLifecycleConfiguration {
}

export function dataAwsccBedrockagentcoreRuntimeLifecycleConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreRuntimeLifecycleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreRuntimeLifecycleConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreRuntimeLifecycleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreRuntimeLifecycleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreRuntimeLifecycleConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreRuntimeLifecycleConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_runtime_session_timeout - computed: true, optional: false, required: false
  public get idleRuntimeSessionTimeout() {
    return this.getNumberAttribute('idle_runtime_session_timeout');
  }

  // max_lifetime - computed: true, optional: false, required: false
  public get maxLifetime() {
    return this.getNumberAttribute('max_lifetime');
  }
}
export interface DataAwsccBedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig {
}

export function dataAwsccBedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigToTerraform(struct?: DataAwsccBedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }
}
export interface DataAwsccBedrockagentcoreRuntimeNetworkConfiguration {
}

export function dataAwsccBedrockagentcoreRuntimeNetworkConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreRuntimeNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreRuntimeNetworkConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreRuntimeNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreRuntimeNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreRuntimeNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreRuntimeNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_mode - computed: true, optional: false, required: false
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }

  // network_mode_config - computed: true, optional: false, required: false
  private _networkModeConfig = new DataAwsccBedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference(this, "network_mode_config");
  public get networkModeConfig() {
    return this._networkModeConfig;
  }
}
export interface DataAwsccBedrockagentcoreRuntimeRequestHeaderConfiguration {
}

export function dataAwsccBedrockagentcoreRuntimeRequestHeaderConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreRuntimeRequestHeaderConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreRuntimeRequestHeaderConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreRuntimeRequestHeaderConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreRuntimeRequestHeaderConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreRuntimeRequestHeaderConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // request_header_allowlist - computed: true, optional: false, required: false
  public get requestHeaderAllowlist() {
    return cdktn.Fn.tolist(this.getListAttribute('request_header_allowlist'));
  }
}
export interface DataAwsccBedrockagentcoreRuntimeWorkloadIdentityDetails {
}

export function dataAwsccBedrockagentcoreRuntimeWorkloadIdentityDetailsToTerraform(struct?: DataAwsccBedrockagentcoreRuntimeWorkloadIdentityDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreRuntimeWorkloadIdentityDetailsToHclTerraform(struct?: DataAwsccBedrockagentcoreRuntimeWorkloadIdentityDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreRuntimeWorkloadIdentityDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreRuntimeWorkloadIdentityDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // workload_identity_arn - computed: true, optional: false, required: false
  public get workloadIdentityArn() {
    return this.getStringAttribute('workload_identity_arn');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/bedrockagentcore_runtime awscc_bedrockagentcore_runtime}
*/
export class DataAwsccBedrockagentcoreRuntime extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrockagentcore_runtime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBedrockagentcoreRuntime resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBedrockagentcoreRuntime to import
  * @param importFromId The id of the existing DataAwsccBedrockagentcoreRuntime that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/bedrockagentcore_runtime#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBedrockagentcoreRuntime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_runtime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/bedrockagentcore_runtime awscc_bedrockagentcore_runtime} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBedrockagentcoreRuntimeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBedrockagentcoreRuntimeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrockagentcore_runtime',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_runtime_arn - computed: true, optional: false, required: false
  public get agentRuntimeArn() {
    return this.getStringAttribute('agent_runtime_arn');
  }

  // agent_runtime_artifact - computed: true, optional: false, required: false
  private _agentRuntimeArtifact = new DataAwsccBedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference(this, "agent_runtime_artifact");
  public get agentRuntimeArtifact() {
    return this._agentRuntimeArtifact;
  }

  // agent_runtime_id - computed: true, optional: false, required: false
  public get agentRuntimeId() {
    return this.getStringAttribute('agent_runtime_id');
  }

  // agent_runtime_name - computed: true, optional: false, required: false
  public get agentRuntimeName() {
    return this.getStringAttribute('agent_runtime_name');
  }

  // agent_runtime_version - computed: true, optional: false, required: false
  public get agentRuntimeVersion() {
    return this.getStringAttribute('agent_runtime_version');
  }

  // authorizer_configuration - computed: true, optional: false, required: false
  private _authorizerConfiguration = new DataAwsccBedrockagentcoreRuntimeAuthorizerConfigurationOutputReference(this, "authorizer_configuration");
  public get authorizerConfiguration() {
    return this._authorizerConfiguration;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new cdktn.StringMap(this, "environment_variables");
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // filesystem_configurations - computed: true, optional: false, required: false
  private _filesystemConfigurations = new DataAwsccBedrockagentcoreRuntimeFilesystemConfigurationsList(this, "filesystem_configurations", false);
  public get filesystemConfigurations() {
    return this._filesystemConfigurations;
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

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // lifecycle_configuration - computed: true, optional: false, required: false
  private _lifecycleConfiguration = new DataAwsccBedrockagentcoreRuntimeLifecycleConfigurationOutputReference(this, "lifecycle_configuration");
  public get lifecycleConfiguration() {
    return this._lifecycleConfiguration;
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataAwsccBedrockagentcoreRuntimeNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // protocol_configuration - computed: true, optional: false, required: false
  public get protocolConfiguration() {
    return this.getStringAttribute('protocol_configuration');
  }

  // request_header_configuration - computed: true, optional: false, required: false
  private _requestHeaderConfiguration = new DataAwsccBedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference(this, "request_header_configuration");
  public get requestHeaderConfiguration() {
    return this._requestHeaderConfiguration;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // workload_identity_details - computed: true, optional: false, required: false
  private _workloadIdentityDetails = new DataAwsccBedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference(this, "workload_identity_details");
  public get workloadIdentityDetails() {
    return this._workloadIdentityDetails;
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
