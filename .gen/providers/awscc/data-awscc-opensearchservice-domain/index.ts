// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/opensearchservice_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccOpensearchserviceDomainConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/opensearchservice_domain#id DataAwsccOpensearchserviceDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions {
}

export function dataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // roles_key - computed: true, optional: false, required: false
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }

  // subject_key - computed: true, optional: false, required: false
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
}
export interface DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions {
}

export function dataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // roles_key - computed: true, optional: false, required: false
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }

  // subject_key - computed: true, optional: false, required: false
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
}
export interface DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions {
}

export function dataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // master_user_arn - computed: true, optional: false, required: false
  public get masterUserArn() {
    return this.getStringAttribute('master_user_arn');
  }

  // master_user_name - computed: true, optional: false, required: false
  public get masterUserName() {
    return this.getStringAttribute('master_user_name');
  }

  // master_user_password - computed: true, optional: false, required: false
  public get masterUserPassword() {
    return this.getStringAttribute('master_user_password');
  }
}
export interface DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp {
}

export function dataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpToTerraform(struct?: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpToHclTerraform(struct?: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp | undefined) {
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

  // metadata_content - computed: true, optional: false, required: false
  public get metadataContent() {
    return this.getStringAttribute('metadata_content');
  }
}
export interface DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions {
}

export function dataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // idp - computed: true, optional: false, required: false
  private _idp = new DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference(this, "idp");
  public get idp() {
    return this._idp;
  }

  // master_backend_role - computed: true, optional: false, required: false
  public get masterBackendRole() {
    return this.getStringAttribute('master_backend_role');
  }

  // master_user_name - computed: true, optional: false, required: false
  public get masterUserName() {
    return this.getStringAttribute('master_user_name');
  }

  // roles_key - computed: true, optional: false, required: false
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }

  // session_timeout_minutes - computed: true, optional: false, required: false
  public get sessionTimeoutMinutes() {
    return this.getNumberAttribute('session_timeout_minutes');
  }

  // subject_key - computed: true, optional: false, required: false
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
}
export interface DataAwsccOpensearchserviceDomainAdvancedSecurityOptions {
}

export function dataAwsccOpensearchserviceDomainAdvancedSecurityOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainAdvancedSecurityOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainAdvancedSecurityOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainAdvancedSecurityOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainAdvancedSecurityOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainAdvancedSecurityOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anonymous_auth_disable_date - computed: true, optional: false, required: false
  public get anonymousAuthDisableDate() {
    return this.getStringAttribute('anonymous_auth_disable_date');
  }

  // anonymous_auth_enabled - computed: true, optional: false, required: false
  public get anonymousAuthEnabled() {
    return this.getBooleanAttribute('anonymous_auth_enabled');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // iam_federation_options - computed: true, optional: false, required: false
  private _iamFederationOptions = new DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference(this, "iam_federation_options");
  public get iamFederationOptions() {
    return this._iamFederationOptions;
  }

  // internal_user_database_enabled - computed: true, optional: false, required: false
  public get internalUserDatabaseEnabled() {
    return this.getBooleanAttribute('internal_user_database_enabled');
  }

  // jwt_options - computed: true, optional: false, required: false
  private _jwtOptions = new DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference(this, "jwt_options");
  public get jwtOptions() {
    return this._jwtOptions;
  }

  // master_user_options - computed: true, optional: false, required: false
  private _masterUserOptions = new DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference(this, "master_user_options");
  public get masterUserOptions() {
    return this._masterUserOptions;
  }

  // saml_options - computed: true, optional: false, required: false
  private _samlOptions = new DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference(this, "saml_options");
  public get samlOptions() {
    return this._samlOptions;
  }
}
export interface DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine {
}

export function dataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineToTerraform(struct?: DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineToHclTerraform(struct?: DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration {
}

export function dataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationToTerraform(struct?: DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationToHclTerraform(struct?: DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAcceleration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccOpensearchserviceDomainAimlOptions {
}

export function dataAwsccOpensearchserviceDomainAimlOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainAimlOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainAimlOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainAimlOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainAimlOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainAimlOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainAimlOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_vectors_engine - computed: true, optional: false, required: false
  private _s3VectorsEngine = new DataAwsccOpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference(this, "s3_vectors_engine");
  public get s3VectorsEngine() {
    return this._s3VectorsEngine;
  }

  // serverless_vector_acceleration - computed: true, optional: false, required: false
  private _serverlessVectorAcceleration = new DataAwsccOpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference(this, "serverless_vector_acceleration");
  public get serverlessVectorAcceleration() {
    return this._serverlessVectorAcceleration;
  }
}
export interface DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions {
}

export function dataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}
export interface DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions {
}

export function dataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig {
}

export function dataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigToTerraform(struct?: DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigToHclTerraform(struct?: DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccOpensearchserviceDomainClusterConfigNodeOptions {
}

export function dataAwsccOpensearchserviceDomainClusterConfigNodeOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainClusterConfigNodeOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainClusterConfigNodeOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainClusterConfigNodeOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccOpensearchserviceDomainClusterConfigNodeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainClusterConfigNodeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_config - computed: true, optional: false, required: false
  private _nodeConfig = new DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
}

export class DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference {
    return new DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig {
}

export function dataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigToTerraform(struct?: DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigToHclTerraform(struct?: DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone_count - computed: true, optional: false, required: false
  public get availabilityZoneCount() {
    return this.getNumberAttribute('availability_zone_count');
  }
}
export interface DataAwsccOpensearchserviceDomainClusterConfig {
}

export function dataAwsccOpensearchserviceDomainClusterConfigToTerraform(struct?: DataAwsccOpensearchserviceDomainClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainClusterConfigToHclTerraform(struct?: DataAwsccOpensearchserviceDomainClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainClusterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cold_storage_options - computed: true, optional: false, required: false
  private _coldStorageOptions = new DataAwsccOpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference(this, "cold_storage_options");
  public get coldStorageOptions() {
    return this._coldStorageOptions;
  }

  // dedicated_master_count - computed: true, optional: false, required: false
  public get dedicatedMasterCount() {
    return this.getNumberAttribute('dedicated_master_count');
  }

  // dedicated_master_enabled - computed: true, optional: false, required: false
  public get dedicatedMasterEnabled() {
    return this.getBooleanAttribute('dedicated_master_enabled');
  }

  // dedicated_master_type - computed: true, optional: false, required: false
  public get dedicatedMasterType() {
    return this.getStringAttribute('dedicated_master_type');
  }

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // multi_az_with_standby_enabled - computed: true, optional: false, required: false
  public get multiAzWithStandbyEnabled() {
    return this.getBooleanAttribute('multi_az_with_standby_enabled');
  }

  // node_options - computed: true, optional: false, required: false
  private _nodeOptions = new DataAwsccOpensearchserviceDomainClusterConfigNodeOptionsList(this, "node_options", false);
  public get nodeOptions() {
    return this._nodeOptions;
  }

  // warm_count - computed: true, optional: false, required: false
  public get warmCount() {
    return this.getNumberAttribute('warm_count');
  }

  // warm_enabled - computed: true, optional: false, required: false
  public get warmEnabled() {
    return this.getBooleanAttribute('warm_enabled');
  }

  // warm_type - computed: true, optional: false, required: false
  public get warmType() {
    return this.getStringAttribute('warm_type');
  }

  // zone_awareness_config - computed: true, optional: false, required: false
  private _zoneAwarenessConfig = new DataAwsccOpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference(this, "zone_awareness_config");
  public get zoneAwarenessConfig() {
    return this._zoneAwarenessConfig;
  }

  // zone_awareness_enabled - computed: true, optional: false, required: false
  public get zoneAwarenessEnabled() {
    return this.getBooleanAttribute('zone_awareness_enabled');
  }
}
export interface DataAwsccOpensearchserviceDomainCognitoOptions {
}

export function dataAwsccOpensearchserviceDomainCognitoOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainCognitoOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainCognitoOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainCognitoOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainCognitoOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainCognitoOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // identity_pool_id - computed: true, optional: false, required: false
  public get identityPoolId() {
    return this.getStringAttribute('identity_pool_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // user_pool_id - computed: true, optional: false, required: false
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
}
export interface DataAwsccOpensearchserviceDomainDeploymentStrategyOptions {
}

export function dataAwsccOpensearchserviceDomainDeploymentStrategyOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainDeploymentStrategyOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainDeploymentStrategyOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainDeploymentStrategyOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainDeploymentStrategyOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainDeploymentStrategyOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployment_strategy - computed: true, optional: false, required: false
  public get deploymentStrategy() {
    return this.getStringAttribute('deployment_strategy');
  }
}
export interface DataAwsccOpensearchserviceDomainDomainEndpointOptions {
}

export function dataAwsccOpensearchserviceDomainDomainEndpointOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainDomainEndpointOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainDomainEndpointOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainDomainEndpointOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainDomainEndpointOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainDomainEndpointOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_endpoint - computed: true, optional: false, required: false
  public get customEndpoint() {
    return this.getStringAttribute('custom_endpoint');
  }

  // custom_endpoint_certificate_arn - computed: true, optional: false, required: false
  public get customEndpointCertificateArn() {
    return this.getStringAttribute('custom_endpoint_certificate_arn');
  }

  // custom_endpoint_enabled - computed: true, optional: false, required: false
  public get customEndpointEnabled() {
    return this.getBooleanAttribute('custom_endpoint_enabled');
  }

  // enforce_https - computed: true, optional: false, required: false
  public get enforceHttps() {
    return this.getBooleanAttribute('enforce_https');
  }

  // tls_security_policy - computed: true, optional: false, required: false
  public get tlsSecurityPolicy() {
    return this.getStringAttribute('tls_security_policy');
  }
}
export interface DataAwsccOpensearchserviceDomainEbsOptions {
}

export function dataAwsccOpensearchserviceDomainEbsOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainEbsOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainEbsOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainEbsOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainEbsOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainEbsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainEbsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ebs_enabled - computed: true, optional: false, required: false
  public get ebsEnabled() {
    return this.getBooleanAttribute('ebs_enabled');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}
export interface DataAwsccOpensearchserviceDomainEncryptionAtRestOptions {
}

export function dataAwsccOpensearchserviceDomainEncryptionAtRestOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainEncryptionAtRestOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainEncryptionAtRestOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainEncryptionAtRestOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainEncryptionAtRestOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainEncryptionAtRestOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
}
export interface DataAwsccOpensearchserviceDomainIdentityCenterOptions {
}

export function dataAwsccOpensearchserviceDomainIdentityCenterOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainIdentityCenterOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainIdentityCenterOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainIdentityCenterOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainIdentityCenterOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainIdentityCenterOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled_api_access - computed: true, optional: false, required: false
  public get enabledApiAccess() {
    return this.getBooleanAttribute('enabled_api_access');
  }

  // identity_center_application_arn - computed: true, optional: false, required: false
  public get identityCenterApplicationArn() {
    return this.getStringAttribute('identity_center_application_arn');
  }

  // identity_center_instance_arn - computed: true, optional: false, required: false
  public get identityCenterInstanceArn() {
    return this.getStringAttribute('identity_center_instance_arn');
  }

  // identity_store_id - computed: true, optional: false, required: false
  public get identityStoreId() {
    return this.getStringAttribute('identity_store_id');
  }

  // roles_key - computed: true, optional: false, required: false
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }

  // subject_key - computed: true, optional: false, required: false
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
}
export interface DataAwsccOpensearchserviceDomainLogPublishingOptions {
}

export function dataAwsccOpensearchserviceDomainLogPublishingOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainLogPublishingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainLogPublishingOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainLogPublishingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainLogPublishingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainLogPublishingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_logs_log_group_arn - computed: true, optional: false, required: false
  public get cloudwatchLogsLogGroupArn() {
    return this.getStringAttribute('cloudwatch_logs_log_group_arn');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataAwsccOpensearchserviceDomainLogPublishingOptionsMap extends cdktn.ComplexMap {

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
  public get(key: string): DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference {
    return new DataAwsccOpensearchserviceDomainLogPublishingOptionsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions {
}

export function dataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime {
}

export function dataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeToTerraform(struct?: DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeToHclTerraform(struct?: DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
}
export interface DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow {
}

export function dataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowToTerraform(struct?: DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowToHclTerraform(struct?: DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // window_start_time - computed: true, optional: false, required: false
  private _windowStartTime = new DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference(this, "window_start_time");
  public get windowStartTime() {
    return this._windowStartTime;
  }
}
export interface DataAwsccOpensearchserviceDomainOffPeakWindowOptions {
}

export function dataAwsccOpensearchserviceDomainOffPeakWindowOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainOffPeakWindowOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainOffPeakWindowOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainOffPeakWindowOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainOffPeakWindowOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainOffPeakWindowOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // off_peak_window - computed: true, optional: false, required: false
  private _offPeakWindow = new DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference(this, "off_peak_window");
  public get offPeakWindow() {
    return this._offPeakWindow;
  }
}
export interface DataAwsccOpensearchserviceDomainServiceSoftwareOptions {
}

export function dataAwsccOpensearchserviceDomainServiceSoftwareOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainServiceSoftwareOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainServiceSoftwareOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainServiceSoftwareOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainServiceSoftwareOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainServiceSoftwareOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automated_update_date - computed: true, optional: false, required: false
  public get automatedUpdateDate() {
    return this.getStringAttribute('automated_update_date');
  }

  // cancellable - computed: true, optional: false, required: false
  public get cancellable() {
    return this.getBooleanAttribute('cancellable');
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // new_version - computed: true, optional: false, required: false
  public get newVersion() {
    return this.getStringAttribute('new_version');
  }

  // optional_deployment - computed: true, optional: false, required: false
  public get optionalDeployment() {
    return this.getBooleanAttribute('optional_deployment');
  }

  // update_available - computed: true, optional: false, required: false
  public get updateAvailable() {
    return this.getBooleanAttribute('update_available');
  }

  // update_status - computed: true, optional: false, required: false
  public get updateStatus() {
    return this.getStringAttribute('update_status');
  }
}
export interface DataAwsccOpensearchserviceDomainSnapshotOptions {
}

export function dataAwsccOpensearchserviceDomainSnapshotOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainSnapshotOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainSnapshotOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainSnapshotOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainSnapshotOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainSnapshotOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automated_snapshot_start_hour - computed: true, optional: false, required: false
  public get automatedSnapshotStartHour() {
    return this.getNumberAttribute('automated_snapshot_start_hour');
  }
}
export interface DataAwsccOpensearchserviceDomainSoftwareUpdateOptions {
}

export function dataAwsccOpensearchserviceDomainSoftwareUpdateOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainSoftwareUpdateOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainSoftwareUpdateOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainSoftwareUpdateOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainSoftwareUpdateOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainSoftwareUpdateOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_software_update_enabled - computed: true, optional: false, required: false
  public get autoSoftwareUpdateEnabled() {
    return this.getBooleanAttribute('auto_software_update_enabled');
  }
}
export interface DataAwsccOpensearchserviceDomainTags {
}

export function dataAwsccOpensearchserviceDomainTagsToTerraform(struct?: DataAwsccOpensearchserviceDomainTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainTagsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccOpensearchserviceDomainTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainTags | undefined) {
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

export class DataAwsccOpensearchserviceDomainTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccOpensearchserviceDomainTagsOutputReference {
    return new DataAwsccOpensearchserviceDomainTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccOpensearchserviceDomainVpcOptions {
}

export function dataAwsccOpensearchserviceDomainVpcOptionsToTerraform(struct?: DataAwsccOpensearchserviceDomainVpcOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserviceDomainVpcOptionsToHclTerraform(struct?: DataAwsccOpensearchserviceDomainVpcOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserviceDomainVpcOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserviceDomainVpcOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserviceDomainVpcOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // egress_enabled - computed: true, optional: false, required: false
  public get egressEnabled() {
    return this.getBooleanAttribute('egress_enabled');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/opensearchservice_domain awscc_opensearchservice_domain}
*/
export class DataAwsccOpensearchserviceDomain extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_opensearchservice_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccOpensearchserviceDomain resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccOpensearchserviceDomain to import
  * @param importFromId The id of the existing DataAwsccOpensearchserviceDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/opensearchservice_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccOpensearchserviceDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_opensearchservice_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/opensearchservice_domain awscc_opensearchservice_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccOpensearchserviceDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccOpensearchserviceDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_opensearchservice_domain',
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

  // access_policies - computed: true, optional: false, required: false
  public get accessPolicies() {
    return this.getStringAttribute('access_policies');
  }

  // advanced_options - computed: true, optional: false, required: false
  private _advancedOptions = new cdktn.StringMap(this, "advanced_options");
  public get advancedOptions() {
    return this._advancedOptions;
  }

  // advanced_security_options - computed: true, optional: false, required: false
  private _advancedSecurityOptions = new DataAwsccOpensearchserviceDomainAdvancedSecurityOptionsOutputReference(this, "advanced_security_options");
  public get advancedSecurityOptions() {
    return this._advancedSecurityOptions;
  }

  // aiml_options - computed: true, optional: false, required: false
  private _aimlOptions = new DataAwsccOpensearchserviceDomainAimlOptionsOutputReference(this, "aiml_options");
  public get aimlOptions() {
    return this._aimlOptions;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // automated_snapshot_pause_options - computed: true, optional: false, required: false
  private _automatedSnapshotPauseOptions = new DataAwsccOpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference(this, "automated_snapshot_pause_options");
  public get automatedSnapshotPauseOptions() {
    return this._automatedSnapshotPauseOptions;
  }

  // cluster_config - computed: true, optional: false, required: false
  private _clusterConfig = new DataAwsccOpensearchserviceDomainClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }

  // cognito_options - computed: true, optional: false, required: false
  private _cognitoOptions = new DataAwsccOpensearchserviceDomainCognitoOptionsOutputReference(this, "cognito_options");
  public get cognitoOptions() {
    return this._cognitoOptions;
  }

  // deployment_strategy_options - computed: true, optional: false, required: false
  private _deploymentStrategyOptions = new DataAwsccOpensearchserviceDomainDeploymentStrategyOptionsOutputReference(this, "deployment_strategy_options");
  public get deploymentStrategyOptions() {
    return this._deploymentStrategyOptions;
  }

  // domain_arn - computed: true, optional: false, required: false
  public get domainArn() {
    return this.getStringAttribute('domain_arn');
  }

  // domain_endpoint - computed: true, optional: false, required: false
  public get domainEndpoint() {
    return this.getStringAttribute('domain_endpoint');
  }

  // domain_endpoint_options - computed: true, optional: false, required: false
  private _domainEndpointOptions = new DataAwsccOpensearchserviceDomainDomainEndpointOptionsOutputReference(this, "domain_endpoint_options");
  public get domainEndpointOptions() {
    return this._domainEndpointOptions;
  }

  // domain_endpoint_v2 - computed: true, optional: false, required: false
  public get domainEndpointV2() {
    return this.getStringAttribute('domain_endpoint_v2');
  }

  // domain_endpoints - computed: true, optional: false, required: false
  private _domainEndpoints = new cdktn.StringMap(this, "domain_endpoints");
  public get domainEndpoints() {
    return this._domainEndpoints;
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // ebs_options - computed: true, optional: false, required: false
  private _ebsOptions = new DataAwsccOpensearchserviceDomainEbsOptionsOutputReference(this, "ebs_options");
  public get ebsOptions() {
    return this._ebsOptions;
  }

  // encryption_at_rest_options - computed: true, optional: false, required: false
  private _encryptionAtRestOptions = new DataAwsccOpensearchserviceDomainEncryptionAtRestOptionsOutputReference(this, "encryption_at_rest_options");
  public get encryptionAtRestOptions() {
    return this._encryptionAtRestOptions;
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
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

  // identity_center_options - computed: true, optional: false, required: false
  private _identityCenterOptions = new DataAwsccOpensearchserviceDomainIdentityCenterOptionsOutputReference(this, "identity_center_options");
  public get identityCenterOptions() {
    return this._identityCenterOptions;
  }

  // ip_address_type - computed: true, optional: false, required: false
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }

  // log_publishing_options - computed: true, optional: false, required: false
  private _logPublishingOptions = new DataAwsccOpensearchserviceDomainLogPublishingOptionsMap(this, "log_publishing_options");
  public get logPublishingOptions() {
    return this._logPublishingOptions;
  }

  // node_to_node_encryption_options - computed: true, optional: false, required: false
  private _nodeToNodeEncryptionOptions = new DataAwsccOpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference(this, "node_to_node_encryption_options");
  public get nodeToNodeEncryptionOptions() {
    return this._nodeToNodeEncryptionOptions;
  }

  // off_peak_window_options - computed: true, optional: false, required: false
  private _offPeakWindowOptions = new DataAwsccOpensearchserviceDomainOffPeakWindowOptionsOutputReference(this, "off_peak_window_options");
  public get offPeakWindowOptions() {
    return this._offPeakWindowOptions;
  }

  // service_software_options - computed: true, optional: false, required: false
  private _serviceSoftwareOptions = new DataAwsccOpensearchserviceDomainServiceSoftwareOptionsOutputReference(this, "service_software_options");
  public get serviceSoftwareOptions() {
    return this._serviceSoftwareOptions;
  }

  // skip_shard_migration_wait - computed: true, optional: false, required: false
  public get skipShardMigrationWait() {
    return this.getBooleanAttribute('skip_shard_migration_wait');
  }

  // snapshot_options - computed: true, optional: false, required: false
  private _snapshotOptions = new DataAwsccOpensearchserviceDomainSnapshotOptionsOutputReference(this, "snapshot_options");
  public get snapshotOptions() {
    return this._snapshotOptions;
  }

  // software_update_options - computed: true, optional: false, required: false
  private _softwareUpdateOptions = new DataAwsccOpensearchserviceDomainSoftwareUpdateOptionsOutputReference(this, "software_update_options");
  public get softwareUpdateOptions() {
    return this._softwareUpdateOptions;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccOpensearchserviceDomainTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // vpc_options - computed: true, optional: false, required: false
  private _vpcOptions = new DataAwsccOpensearchserviceDomainVpcOptionsOutputReference(this, "vpc_options");
  public get vpcOptions() {
    return this._vpcOptions;
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
