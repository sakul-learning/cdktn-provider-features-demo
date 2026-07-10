// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bedrockagentcore_harness
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBedrockagentcoreHarnessConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bedrockagentcore_harness#id DataAwsccBedrockagentcoreHarness#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue {
}

export function dataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueToTerraform(struct?: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue | undefined) {
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
export interface DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue {
}

export function dataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueToTerraform(struct?: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue | undefined) {
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
  private _claimMatchValue = new DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference(this, "claim_match_value");
  public get claimMatchValue() {
    return this._claimMatchValue;
  }
}
export interface DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims {
}

export function dataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsToTerraform(struct?: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorizing_claim_match_value - computed: true, optional: false, required: false
  private _authorizingClaimMatchValue = new DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference(this, "authorizing_claim_match_value");
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

export class DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference {
    return new DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer {
}

export function dataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerToTerraform(struct?: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer | undefined) {
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
  private _customClaims = new DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList(this, "custom_claims", false);
  public get customClaims() {
    return this._customClaims;
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
}
export interface DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration {
}

export function dataAwsccBedrockagentcoreHarnessAuthorizerConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessAuthorizerConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_jwt_authorizer - computed: true, optional: false, required: false
  private _customJwtAuthorizer = new DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference(this, "custom_jwt_authorizer");
  public get customJwtAuthorizer() {
    return this._customJwtAuthorizer;
  }
}
export interface DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage {
}

export function dataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageToTerraform(struct?: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage | undefined) {
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
export interface DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations {
}

export function dataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsToTerraform(struct?: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // session_storage - computed: true, optional: false, required: false
  private _sessionStorage = new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference(this, "session_storage");
  public get sessionStorage() {
    return this._sessionStorage;
  }
}

export class DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference {
    return new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration {
}

export function dataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration | undefined) {
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
export interface DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig {
}

export function dataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigToTerraform(struct?: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig | undefined) {
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
export interface DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration {
}

export function dataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration | undefined) {
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
  private _networkModeConfig = new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference(this, "network_mode_config");
  public get networkModeConfig() {
    return this._networkModeConfig;
  }
}
export interface DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment {
}

export function dataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentToTerraform(struct?: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_runtime_arn - computed: true, optional: false, required: false
  public get agentRuntimeArn() {
    return this.getStringAttribute('agent_runtime_arn');
  }

  // agent_runtime_id - computed: true, optional: false, required: false
  public get agentRuntimeId() {
    return this.getStringAttribute('agent_runtime_id');
  }

  // agent_runtime_name - computed: true, optional: false, required: false
  public get agentRuntimeName() {
    return this.getStringAttribute('agent_runtime_name');
  }

  // filesystem_configurations - computed: true, optional: false, required: false
  private _filesystemConfigurations = new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList(this, "filesystem_configurations", false);
  public get filesystemConfigurations() {
    return this._filesystemConfigurations;
  }

  // lifecycle_configuration - computed: true, optional: false, required: false
  private _lifecycleConfiguration = new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference(this, "lifecycle_configuration");
  public get lifecycleConfiguration() {
    return this._lifecycleConfiguration;
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
}
export interface DataAwsccBedrockagentcoreHarnessEnvironment {
}

export function dataAwsccBedrockagentcoreHarnessEnvironmentToTerraform(struct?: DataAwsccBedrockagentcoreHarnessEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessEnvironmentToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_core_runtime_environment - computed: true, optional: false, required: false
  private _agentCoreRuntimeEnvironment = new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference(this, "agent_core_runtime_environment");
  public get agentCoreRuntimeEnvironment() {
    return this._agentCoreRuntimeEnvironment;
  }
}
export interface DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration {
}

export function dataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration | undefined) {
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
export interface DataAwsccBedrockagentcoreHarnessEnvironmentArtifact {
}

export function dataAwsccBedrockagentcoreHarnessEnvironmentArtifactToTerraform(struct?: DataAwsccBedrockagentcoreHarnessEnvironmentArtifact): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessEnvironmentArtifactToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessEnvironmentArtifact): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessEnvironmentArtifact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessEnvironmentArtifact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_configuration - computed: true, optional: false, required: false
  private _containerConfiguration = new DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference(this, "container_configuration");
  public get containerConfiguration() {
    return this._containerConfiguration;
  }
}
export interface DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig {
}

export function dataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigToTerraform(struct?: DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // relevance_score - computed: true, optional: false, required: false
  public get relevanceScore() {
    return this.getNumberAttribute('relevance_score');
  }

  // strategy_id - computed: true, optional: false, required: false
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }

  // top_k - computed: true, optional: false, required: false
  public get topK() {
    return this.getNumberAttribute('top_k');
  }
}

export class DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap extends cdktn.ComplexMap {

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
  public get(key: string): DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference {
    return new DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration {
}

export function dataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actor_id - computed: true, optional: false, required: false
  public get actorId() {
    return this.getStringAttribute('actor_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // messages_count - computed: true, optional: false, required: false
  public get messagesCount() {
    return this.getNumberAttribute('messages_count');
  }

  // retrieval_config - computed: true, optional: false, required: false
  private _retrievalConfig = new DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap(this, "retrieval_config");
  public get retrievalConfig() {
    return this._retrievalConfig;
  }
}
export interface DataAwsccBedrockagentcoreHarnessMemory {
}

export function dataAwsccBedrockagentcoreHarnessMemoryToTerraform(struct?: DataAwsccBedrockagentcoreHarnessMemory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessMemoryToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessMemory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessMemoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessMemory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_core_memory_configuration - computed: true, optional: false, required: false
  private _agentCoreMemoryConfiguration = new DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference(this, "agent_core_memory_configuration");
  public get agentCoreMemoryConfiguration() {
    return this._agentCoreMemoryConfiguration;
  }
}
export interface DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig {
}

export function dataAwsccBedrockagentcoreHarnessModelBedrockModelConfigToTerraform(struct?: DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessModelBedrockModelConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_tokens - computed: true, optional: false, required: false
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }

  // top_p - computed: true, optional: false, required: false
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
}
export interface DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig {
}

export function dataAwsccBedrockagentcoreHarnessModelGeminiModelConfigToTerraform(struct?: DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessModelGeminiModelConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_arn - computed: true, optional: false, required: false
  public get apiKeyArn() {
    return this.getStringAttribute('api_key_arn');
  }

  // max_tokens - computed: true, optional: false, required: false
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }

  // top_k - computed: true, optional: false, required: false
  public get topK() {
    return this.getNumberAttribute('top_k');
  }

  // top_p - computed: true, optional: false, required: false
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
}
export interface DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig {
}

export function dataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigToTerraform(struct?: DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_arn - computed: true, optional: false, required: false
  public get apiKeyArn() {
    return this.getStringAttribute('api_key_arn');
  }

  // max_tokens - computed: true, optional: false, required: false
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }

  // top_p - computed: true, optional: false, required: false
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
}
export interface DataAwsccBedrockagentcoreHarnessModel {
}

export function dataAwsccBedrockagentcoreHarnessModelToTerraform(struct?: DataAwsccBedrockagentcoreHarnessModel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessModelToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessModel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessModelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bedrock_model_config - computed: true, optional: false, required: false
  private _bedrockModelConfig = new DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference(this, "bedrock_model_config");
  public get bedrockModelConfig() {
    return this._bedrockModelConfig;
  }

  // gemini_model_config - computed: true, optional: false, required: false
  private _geminiModelConfig = new DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference(this, "gemini_model_config");
  public get geminiModelConfig() {
    return this._geminiModelConfig;
  }

  // open_ai_model_config - computed: true, optional: false, required: false
  private _openAiModelConfig = new DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference(this, "open_ai_model_config");
  public get openAiModelConfig() {
    return this._openAiModelConfig;
  }
}
export interface DataAwsccBedrockagentcoreHarnessSkills {
}

export function dataAwsccBedrockagentcoreHarnessSkillsToTerraform(struct?: DataAwsccBedrockagentcoreHarnessSkills): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessSkillsToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessSkills): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessSkillsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreHarnessSkills | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessSkills | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataAwsccBedrockagentcoreHarnessSkillsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreHarnessSkillsOutputReference {
    return new DataAwsccBedrockagentcoreHarnessSkillsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreHarnessSystemPrompt {
}

export function dataAwsccBedrockagentcoreHarnessSystemPromptToTerraform(struct?: DataAwsccBedrockagentcoreHarnessSystemPrompt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessSystemPromptToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessSystemPrompt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreHarnessSystemPrompt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessSystemPrompt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class DataAwsccBedrockagentcoreHarnessSystemPromptList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference {
    return new DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreHarnessTags {
}

export function dataAwsccBedrockagentcoreHarnessTagsToTerraform(struct?: DataAwsccBedrockagentcoreHarnessTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessTagsToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreHarnessTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccBedrockagentcoreHarnessTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreHarnessTagsOutputReference {
    return new DataAwsccBedrockagentcoreHarnessTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser {
}

export function dataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserToTerraform(struct?: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // browser_arn - computed: true, optional: false, required: false
  public get browserArn() {
    return this.getStringAttribute('browser_arn');
  }
}
export interface DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter {
}

export function dataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterToTerraform(struct?: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code_interpreter_arn - computed: true, optional: false, required: false
  public get codeInterpreterArn() {
    return this.getStringAttribute('code_interpreter_arn');
  }
}
export interface DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth {
}

export function dataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthToTerraform(struct?: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_parameters - computed: true, optional: false, required: false
  private _customParameters = new cdktn.StringMap(this, "custom_parameters");
  public get customParameters() {
    return this._customParameters;
  }

  // default_return_url - computed: true, optional: false, required: false
  public get defaultReturnUrl() {
    return this.getStringAttribute('default_return_url');
  }

  // grant_type - computed: true, optional: false, required: false
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }

  // provider_arn - computed: true, optional: false, required: false
  public get providerArn() {
    return this.getStringAttribute('provider_arn');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }
}
export interface DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth {
}

export function dataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthToTerraform(struct?: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_iam - computed: true, optional: false, required: false
  public get awsIam() {
    return this.getStringAttribute('aws_iam');
  }

  // none - computed: true, optional: false, required: false
  public get none() {
    return this.getStringAttribute('none');
  }

  // oauth - computed: true, optional: false, required: false
  private _oauth = new DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference(this, "oauth");
  public get oauth() {
    return this._oauth;
  }
}
export interface DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway {
}

export function dataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayToTerraform(struct?: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gateway_arn - computed: true, optional: false, required: false
  public get gatewayArn() {
    return this.getStringAttribute('gateway_arn');
  }

  // outbound_auth - computed: true, optional: false, required: false
  private _outboundAuth = new DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference(this, "outbound_auth");
  public get outboundAuth() {
    return this._outboundAuth;
  }
}
export interface DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction {
}

export function dataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionToTerraform(struct?: DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction | undefined) {
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

  // input_schema - computed: true, optional: false, required: false
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }
}
export interface DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp {
}

export function dataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpToTerraform(struct?: DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktn.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataAwsccBedrockagentcoreHarnessToolsConfig {
}

export function dataAwsccBedrockagentcoreHarnessToolsConfigToTerraform(struct?: DataAwsccBedrockagentcoreHarnessToolsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessToolsConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessToolsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessToolsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessToolsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_core_browser - computed: true, optional: false, required: false
  private _agentCoreBrowser = new DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference(this, "agent_core_browser");
  public get agentCoreBrowser() {
    return this._agentCoreBrowser;
  }

  // agent_core_code_interpreter - computed: true, optional: false, required: false
  private _agentCoreCodeInterpreter = new DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference(this, "agent_core_code_interpreter");
  public get agentCoreCodeInterpreter() {
    return this._agentCoreCodeInterpreter;
  }

  // agent_core_gateway - computed: true, optional: false, required: false
  private _agentCoreGateway = new DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference(this, "agent_core_gateway");
  public get agentCoreGateway() {
    return this._agentCoreGateway;
  }

  // inline_function - computed: true, optional: false, required: false
  private _inlineFunction = new DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference(this, "inline_function");
  public get inlineFunction() {
    return this._inlineFunction;
  }

  // remote_mcp - computed: true, optional: false, required: false
  private _remoteMcp = new DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference(this, "remote_mcp");
  public get remoteMcp() {
    return this._remoteMcp;
  }
}
export interface DataAwsccBedrockagentcoreHarnessTools {
}

export function dataAwsccBedrockagentcoreHarnessToolsToTerraform(struct?: DataAwsccBedrockagentcoreHarnessTools): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessToolsToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessTools): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessToolsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreHarnessTools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessTools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccBedrockagentcoreHarnessToolsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreHarnessToolsOutputReference {
    return new DataAwsccBedrockagentcoreHarnessToolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow {
}

export function dataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowToTerraform(struct?: DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // messages_count - computed: true, optional: false, required: false
  public get messagesCount() {
    return this.getNumberAttribute('messages_count');
  }
}
export interface DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization {
}

export function dataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationToTerraform(struct?: DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preserve_recent_messages - computed: true, optional: false, required: false
  public get preserveRecentMessages() {
    return this.getNumberAttribute('preserve_recent_messages');
  }

  // summarization_system_prompt - computed: true, optional: false, required: false
  public get summarizationSystemPrompt() {
    return this.getStringAttribute('summarization_system_prompt');
  }

  // summary_ratio - computed: true, optional: false, required: false
  public get summaryRatio() {
    return this.getNumberAttribute('summary_ratio');
  }
}
export interface DataAwsccBedrockagentcoreHarnessTruncationConfig {
}

export function dataAwsccBedrockagentcoreHarnessTruncationConfigToTerraform(struct?: DataAwsccBedrockagentcoreHarnessTruncationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessTruncationConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessTruncationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessTruncationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessTruncationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sliding_window - computed: true, optional: false, required: false
  private _slidingWindow = new DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference(this, "sliding_window");
  public get slidingWindow() {
    return this._slidingWindow;
  }

  // summarization - computed: true, optional: false, required: false
  private _summarization = new DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference(this, "summarization");
  public get summarization() {
    return this._summarization;
  }
}
export interface DataAwsccBedrockagentcoreHarnessTruncation {
}

export function dataAwsccBedrockagentcoreHarnessTruncationToTerraform(struct?: DataAwsccBedrockagentcoreHarnessTruncation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreHarnessTruncationToHclTerraform(struct?: DataAwsccBedrockagentcoreHarnessTruncation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreHarnessTruncationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreHarnessTruncation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreHarnessTruncation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bedrockagentcore_harness awscc_bedrockagentcore_harness}
*/
export class DataAwsccBedrockagentcoreHarness extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrockagentcore_harness";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBedrockagentcoreHarness resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBedrockagentcoreHarness to import
  * @param importFromId The id of the existing DataAwsccBedrockagentcoreHarness that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bedrockagentcore_harness#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBedrockagentcoreHarness to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_harness", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bedrockagentcore_harness awscc_bedrockagentcore_harness} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBedrockagentcoreHarnessConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBedrockagentcoreHarnessConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrockagentcore_harness',
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

  // allowed_tools - computed: true, optional: false, required: false
  public get allowedTools() {
    return this.getListAttribute('allowed_tools');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authorizer_configuration - computed: true, optional: false, required: false
  private _authorizerConfiguration = new DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference(this, "authorizer_configuration");
  public get authorizerConfiguration() {
    return this._authorizerConfiguration;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }

  // environment_artifact - computed: true, optional: false, required: false
  private _environmentArtifact = new DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference(this, "environment_artifact");
  public get environmentArtifact() {
    return this._environmentArtifact;
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new cdktn.StringMap(this, "environment_variables");
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // harness_id - computed: true, optional: false, required: false
  public get harnessId() {
    return this.getStringAttribute('harness_id');
  }

  // harness_name - computed: true, optional: false, required: false
  public get harnessName() {
    return this.getStringAttribute('harness_name');
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

  // max_iterations - computed: true, optional: false, required: false
  public get maxIterations() {
    return this.getNumberAttribute('max_iterations');
  }

  // max_tokens - computed: true, optional: false, required: false
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }

  // memory - computed: true, optional: false, required: false
  private _memory = new DataAwsccBedrockagentcoreHarnessMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }

  // model - computed: true, optional: false, required: false
  private _model = new DataAwsccBedrockagentcoreHarnessModelOutputReference(this, "model");
  public get model() {
    return this._model;
  }

  // skills - computed: true, optional: false, required: false
  private _skills = new DataAwsccBedrockagentcoreHarnessSkillsList(this, "skills", false);
  public get skills() {
    return this._skills;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // system_prompt - computed: true, optional: false, required: false
  private _systemPrompt = new DataAwsccBedrockagentcoreHarnessSystemPromptList(this, "system_prompt", false);
  public get systemPrompt() {
    return this._systemPrompt;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccBedrockagentcoreHarnessTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }

  // tools - computed: true, optional: false, required: false
  private _tools = new DataAwsccBedrockagentcoreHarnessToolsList(this, "tools", false);
  public get tools() {
    return this._tools;
  }

  // truncation - computed: true, optional: false, required: false
  private _truncation = new DataAwsccBedrockagentcoreHarnessTruncationOutputReference(this, "truncation");
  public get truncation() {
    return this._truncation;
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
