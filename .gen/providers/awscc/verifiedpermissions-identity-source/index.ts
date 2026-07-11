// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VerifiedpermissionsIdentitySourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#configuration VerifiedpermissionsIdentitySource#configuration}
  */
  readonly configuration: VerifiedpermissionsIdentitySourceConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#policy_store_id VerifiedpermissionsIdentitySource#policy_store_id}
  */
  readonly policyStoreId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#principal_entity_type VerifiedpermissionsIdentitySource#principal_entity_type}
  */
  readonly principalEntityType?: string;
}
export interface VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#group_entity_type VerifiedpermissionsIdentitySource#group_entity_type}
  */
  readonly groupEntityType?: string;
}

export function verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_entity_type: cdktn.stringToTerraform(struct!.groupEntityType),
  }
}


export function verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_entity_type: {
      value: cdktn.stringToHclTerraform(struct!.groupEntityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupEntityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupEntityType = this._groupEntityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupEntityType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupEntityType = value.groupEntityType;
    }
  }

  // group_entity_type - computed: true, optional: true, required: false
  private _groupEntityType?: string;
  public get groupEntityType() {
    return this.getStringAttribute('group_entity_type');
  }
  public set groupEntityType(value: string) {
    this._groupEntityType = value;
  }
  public resetGroupEntityType() {
    this._groupEntityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupEntityTypeInput() {
    return this._groupEntityType;
  }
}
export interface VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#client_ids VerifiedpermissionsIdentitySource#client_ids}
  */
  readonly clientIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#group_configuration VerifiedpermissionsIdentitySource#group_configuration}
  */
  readonly groupConfiguration?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#user_pool_arn VerifiedpermissionsIdentitySource#user_pool_arn}
  */
  readonly userPoolArn?: string;
}

export function verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.clientIds),
    group_configuration: verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationToTerraform(struct!.groupConfiguration),
    user_pool_arn: cdktn.stringToTerraform(struct!.userPoolArn),
  }
}


export function verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.clientIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_configuration: {
      value: verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationToHclTerraform(struct!.groupConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration",
    },
    user_pool_arn: {
      value: cdktn.stringToHclTerraform(struct!.userPoolArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIds = this._clientIds;
    }
    if (this._groupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupConfiguration = this._groupConfiguration?.internalValue;
    }
    if (this._userPoolArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolArn = this._userPoolArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIds = undefined;
      this._groupConfiguration.internalValue = undefined;
      this._userPoolArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIds = value.clientIds;
      this._groupConfiguration.internalValue = value.groupConfiguration;
      this._userPoolArn = value.userPoolArn;
    }
  }

  // client_ids - computed: true, optional: true, required: false
  private _clientIds?: string[];
  public get clientIds() {
    return this.getListAttribute('client_ids');
  }
  public set clientIds(value: string[]) {
    this._clientIds = value;
  }
  public resetClientIds() {
    this._clientIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdsInput() {
    return this._clientIds;
  }

  // group_configuration - computed: true, optional: true, required: false
  private _groupConfiguration = new VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference(this, "group_configuration");
  public get groupConfiguration() {
    return this._groupConfiguration;
  }
  public putGroupConfiguration(value: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration) {
    this._groupConfiguration.internalValue = value;
  }
  public resetGroupConfiguration() {
    this._groupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupConfigurationInput() {
    return this._groupConfiguration.internalValue;
  }

  // user_pool_arn - computed: true, optional: true, required: false
  private _userPoolArn?: string;
  public get userPoolArn() {
    return this.getStringAttribute('user_pool_arn');
  }
  public set userPoolArn(value: string) {
    this._userPoolArn = value;
  }
  public resetUserPoolArn() {
    this._userPoolArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolArnInput() {
    return this._userPoolArn;
  }
}
export interface VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#group_claim VerifiedpermissionsIdentitySource#group_claim}
  */
  readonly groupClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#group_entity_type VerifiedpermissionsIdentitySource#group_entity_type}
  */
  readonly groupEntityType?: string;
}

export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_claim: cdktn.stringToTerraform(struct!.groupClaim),
    group_entity_type: cdktn.stringToTerraform(struct!.groupEntityType),
  }
}


export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_claim: {
      value: cdktn.stringToHclTerraform(struct!.groupClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_entity_type: {
      value: cdktn.stringToHclTerraform(struct!.groupEntityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupClaim = this._groupClaim;
    }
    if (this._groupEntityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupEntityType = this._groupEntityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupClaim = undefined;
      this._groupEntityType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupClaim = value.groupClaim;
      this._groupEntityType = value.groupEntityType;
    }
  }

  // group_claim - computed: true, optional: true, required: false
  private _groupClaim?: string;
  public get groupClaim() {
    return this.getStringAttribute('group_claim');
  }
  public set groupClaim(value: string) {
    this._groupClaim = value;
  }
  public resetGroupClaim() {
    this._groupClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupClaimInput() {
    return this._groupClaim;
  }

  // group_entity_type - computed: true, optional: true, required: false
  private _groupEntityType?: string;
  public get groupEntityType() {
    return this.getStringAttribute('group_entity_type');
  }
  public set groupEntityType(value: string) {
    this._groupEntityType = value;
  }
  public resetGroupEntityType() {
    this._groupEntityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupEntityTypeInput() {
    return this._groupEntityType;
  }
}
export interface VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#audiences VerifiedpermissionsIdentitySource#audiences}
  */
  readonly audiences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#principal_id_claim VerifiedpermissionsIdentitySource#principal_id_claim}
  */
  readonly principalIdClaim?: string;
}

export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audiences: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.audiences),
    principal_id_claim: cdktn.stringToTerraform(struct!.principalIdClaim),
  }
}


export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audiences: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principal_id_claim: {
      value: cdktn.stringToHclTerraform(struct!.principalIdClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._principalIdClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalIdClaim = this._principalIdClaim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audiences = undefined;
      this._principalIdClaim = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audiences = value.audiences;
      this._principalIdClaim = value.principalIdClaim;
    }
  }

  // audiences - computed: true, optional: true, required: false
  private _audiences?: string[];
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // principal_id_claim - computed: true, optional: true, required: false
  private _principalIdClaim?: string;
  public get principalIdClaim() {
    return this.getStringAttribute('principal_id_claim');
  }
  public set principalIdClaim(value: string) {
    this._principalIdClaim = value;
  }
  public resetPrincipalIdClaim() {
    this._principalIdClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdClaimInput() {
    return this._principalIdClaim;
  }
}
export interface VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#client_ids VerifiedpermissionsIdentitySource#client_ids}
  */
  readonly clientIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#principal_id_claim VerifiedpermissionsIdentitySource#principal_id_claim}
  */
  readonly principalIdClaim?: string;
}

export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.clientIds),
    principal_id_claim: cdktn.stringToTerraform(struct!.principalIdClaim),
  }
}


export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.clientIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principal_id_claim: {
      value: cdktn.stringToHclTerraform(struct!.principalIdClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIds = this._clientIds;
    }
    if (this._principalIdClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalIdClaim = this._principalIdClaim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIds = undefined;
      this._principalIdClaim = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIds = value.clientIds;
      this._principalIdClaim = value.principalIdClaim;
    }
  }

  // client_ids - computed: true, optional: true, required: false
  private _clientIds?: string[];
  public get clientIds() {
    return this.getListAttribute('client_ids');
  }
  public set clientIds(value: string[]) {
    this._clientIds = value;
  }
  public resetClientIds() {
    this._clientIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdsInput() {
    return this._clientIds;
  }

  // principal_id_claim - computed: true, optional: true, required: false
  private _principalIdClaim?: string;
  public get principalIdClaim() {
    return this.getStringAttribute('principal_id_claim');
  }
  public set principalIdClaim(value: string) {
    this._principalIdClaim = value;
  }
  public resetPrincipalIdClaim() {
    this._principalIdClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdClaimInput() {
    return this._principalIdClaim;
  }
}
export interface VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#access_token_only VerifiedpermissionsIdentitySource#access_token_only}
  */
  readonly accessTokenOnly?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#identity_token_only VerifiedpermissionsIdentitySource#identity_token_only}
  */
  readonly identityTokenOnly?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly;
}

export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token_only: verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyToTerraform(struct!.accessTokenOnly),
    identity_token_only: verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyToTerraform(struct!.identityTokenOnly),
  }
}


export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token_only: {
      value: verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyToHclTerraform(struct!.accessTokenOnly),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly",
    },
    identity_token_only: {
      value: verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyToHclTerraform(struct!.identityTokenOnly),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenOnly = this._accessTokenOnly?.internalValue;
    }
    if (this._identityTokenOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityTokenOnly = this._identityTokenOnly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTokenOnly.internalValue = undefined;
      this._identityTokenOnly.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTokenOnly.internalValue = value.accessTokenOnly;
      this._identityTokenOnly.internalValue = value.identityTokenOnly;
    }
  }

  // access_token_only - computed: true, optional: true, required: false
  private _accessTokenOnly = new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference(this, "access_token_only");
  public get accessTokenOnly() {
    return this._accessTokenOnly;
  }
  public putAccessTokenOnly(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly) {
    this._accessTokenOnly.internalValue = value;
  }
  public resetAccessTokenOnly() {
    this._accessTokenOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenOnlyInput() {
    return this._accessTokenOnly.internalValue;
  }

  // identity_token_only - computed: true, optional: true, required: false
  private _identityTokenOnly = new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference(this, "identity_token_only");
  public get identityTokenOnly() {
    return this._identityTokenOnly;
  }
  public putIdentityTokenOnly(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly) {
    this._identityTokenOnly.internalValue = value;
  }
  public resetIdentityTokenOnly() {
    this._identityTokenOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTokenOnlyInput() {
    return this._identityTokenOnly.internalValue;
  }
}
export interface VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#entity_id_prefix VerifiedpermissionsIdentitySource#entity_id_prefix}
  */
  readonly entityIdPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#group_configuration VerifiedpermissionsIdentitySource#group_configuration}
  */
  readonly groupConfiguration?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#issuer VerifiedpermissionsIdentitySource#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#token_selection VerifiedpermissionsIdentitySource#token_selection}
  */
  readonly tokenSelection?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection;
}

export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entity_id_prefix: cdktn.stringToTerraform(struct!.entityIdPrefix),
    group_configuration: verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationToTerraform(struct!.groupConfiguration),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    token_selection: verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionToTerraform(struct!.tokenSelection),
  }
}


export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entity_id_prefix: {
      value: cdktn.stringToHclTerraform(struct!.entityIdPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_configuration: {
      value: verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationToHclTerraform(struct!.groupConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_selection: {
      value: verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionToHclTerraform(struct!.tokenSelection),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityIdPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityIdPrefix = this._entityIdPrefix;
    }
    if (this._groupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupConfiguration = this._groupConfiguration?.internalValue;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._tokenSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSelection = this._tokenSelection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityIdPrefix = undefined;
      this._groupConfiguration.internalValue = undefined;
      this._issuer = undefined;
      this._tokenSelection.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityIdPrefix = value.entityIdPrefix;
      this._groupConfiguration.internalValue = value.groupConfiguration;
      this._issuer = value.issuer;
      this._tokenSelection.internalValue = value.tokenSelection;
    }
  }

  // entity_id_prefix - computed: true, optional: true, required: false
  private _entityIdPrefix?: string;
  public get entityIdPrefix() {
    return this.getStringAttribute('entity_id_prefix');
  }
  public set entityIdPrefix(value: string) {
    this._entityIdPrefix = value;
  }
  public resetEntityIdPrefix() {
    this._entityIdPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdPrefixInput() {
    return this._entityIdPrefix;
  }

  // group_configuration - computed: true, optional: true, required: false
  private _groupConfiguration = new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference(this, "group_configuration");
  public get groupConfiguration() {
    return this._groupConfiguration;
  }
  public putGroupConfiguration(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration) {
    this._groupConfiguration.internalValue = value;
  }
  public resetGroupConfiguration() {
    this._groupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupConfigurationInput() {
    return this._groupConfiguration.internalValue;
  }

  // issuer - computed: true, optional: true, required: false
  private _issuer?: string;
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // token_selection - computed: true, optional: true, required: false
  private _tokenSelection = new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference(this, "token_selection");
  public get tokenSelection() {
    return this._tokenSelection;
  }
  public putTokenSelection(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection) {
    this._tokenSelection.internalValue = value;
  }
  public resetTokenSelection() {
    this._tokenSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSelectionInput() {
    return this._tokenSelection.internalValue;
  }
}
export interface VerifiedpermissionsIdentitySourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#cognito_user_pool_configuration VerifiedpermissionsIdentitySource#cognito_user_pool_configuration}
  */
  readonly cognitoUserPoolConfiguration?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#open_id_connect_configuration VerifiedpermissionsIdentitySource#open_id_connect_configuration}
  */
  readonly openIdConnectConfiguration?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration;
}

export function verifiedpermissionsIdentitySourceConfigurationToTerraform(struct?: VerifiedpermissionsIdentitySourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cognito_user_pool_configuration: verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationToTerraform(struct!.cognitoUserPoolConfiguration),
    open_id_connect_configuration: verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationToTerraform(struct!.openIdConnectConfiguration),
  }
}


export function verifiedpermissionsIdentitySourceConfigurationToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cognito_user_pool_configuration: {
      value: verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationToHclTerraform(struct!.cognitoUserPoolConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration",
    },
    open_id_connect_configuration: {
      value: verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationToHclTerraform(struct!.openIdConnectConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsIdentitySourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifiedpermissionsIdentitySourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cognitoUserPoolConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cognitoUserPoolConfiguration = this._cognitoUserPoolConfiguration?.internalValue;
    }
    if (this._openIdConnectConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openIdConnectConfiguration = this._openIdConnectConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsIdentitySourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cognitoUserPoolConfiguration.internalValue = undefined;
      this._openIdConnectConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cognitoUserPoolConfiguration.internalValue = value.cognitoUserPoolConfiguration;
      this._openIdConnectConfiguration.internalValue = value.openIdConnectConfiguration;
    }
  }

  // cognito_user_pool_configuration - computed: true, optional: true, required: false
  private _cognitoUserPoolConfiguration = new VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference(this, "cognito_user_pool_configuration");
  public get cognitoUserPoolConfiguration() {
    return this._cognitoUserPoolConfiguration;
  }
  public putCognitoUserPoolConfiguration(value: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration) {
    this._cognitoUserPoolConfiguration.internalValue = value;
  }
  public resetCognitoUserPoolConfiguration() {
    this._cognitoUserPoolConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoUserPoolConfigurationInput() {
    return this._cognitoUserPoolConfiguration.internalValue;
  }

  // open_id_connect_configuration - computed: true, optional: true, required: false
  private _openIdConnectConfiguration = new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference(this, "open_id_connect_configuration");
  public get openIdConnectConfiguration() {
    return this._openIdConnectConfiguration;
  }
  public putOpenIdConnectConfiguration(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration) {
    this._openIdConnectConfiguration.internalValue = value;
  }
  public resetOpenIdConnectConfiguration() {
    this._openIdConnectConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openIdConnectConfigurationInput() {
    return this._openIdConnectConfiguration.internalValue;
  }
}
export interface VerifiedpermissionsIdentitySourceDetails {
}

export function verifiedpermissionsIdentitySourceDetailsToTerraform(struct?: VerifiedpermissionsIdentitySourceDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function verifiedpermissionsIdentitySourceDetailsToHclTerraform(struct?: VerifiedpermissionsIdentitySourceDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class VerifiedpermissionsIdentitySourceDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifiedpermissionsIdentitySourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsIdentitySourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_ids - computed: true, optional: false, required: false
  public get clientIds() {
    return this.getListAttribute('client_ids');
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }

  // open_id_issuer - computed: true, optional: false, required: false
  public get openIdIssuer() {
    return this.getStringAttribute('open_id_issuer');
  }

  // user_pool_arn - computed: true, optional: false, required: false
  public get userPoolArn() {
    return this.getStringAttribute('user_pool_arn');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source awscc_verifiedpermissions_identity_source}
*/
export class VerifiedpermissionsIdentitySource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_verifiedpermissions_identity_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VerifiedpermissionsIdentitySource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VerifiedpermissionsIdentitySource to import
  * @param importFromId The id of the existing VerifiedpermissionsIdentitySource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VerifiedpermissionsIdentitySource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_verifiedpermissions_identity_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/verifiedpermissions_identity_source awscc_verifiedpermissions_identity_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VerifiedpermissionsIdentitySourceConfig
  */
  public constructor(scope: Construct, id: string, config: VerifiedpermissionsIdentitySourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_verifiedpermissions_identity_source',
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
    this._configuration.internalValue = config.configuration;
    this._policyStoreId = config.policyStoreId;
    this._principalEntityType = config.principalEntityType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new VerifiedpermissionsIdentitySourceConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: VerifiedpermissionsIdentitySourceConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // details - computed: true, optional: false, required: false
  private _details = new VerifiedpermissionsIdentitySourceDetailsOutputReference(this, "details");
  public get details() {
    return this._details;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_source_id - computed: true, optional: false, required: false
  public get identitySourceId() {
    return this.getStringAttribute('identity_source_id');
  }

  // policy_store_id - computed: false, optional: false, required: true
  private _policyStoreId?: string;
  public get policyStoreId() {
    return this.getStringAttribute('policy_store_id');
  }
  public set policyStoreId(value: string) {
    this._policyStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyStoreIdInput() {
    return this._policyStoreId;
  }

  // principal_entity_type - computed: true, optional: true, required: false
  private _principalEntityType?: string;
  public get principalEntityType() {
    return this.getStringAttribute('principal_entity_type');
  }
  public set principalEntityType(value: string) {
    this._principalEntityType = value;
  }
  public resetPrincipalEntityType() {
    this._principalEntityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalEntityTypeInput() {
    return this._principalEntityType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: verifiedpermissionsIdentitySourceConfigurationToTerraform(this._configuration.internalValue),
      policy_store_id: cdktn.stringToTerraform(this._policyStoreId),
      principal_entity_type: cdktn.stringToTerraform(this._principalEntityType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: verifiedpermissionsIdentitySourceConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VerifiedpermissionsIdentitySourceConfiguration",
      },
      policy_store_id: {
        value: cdktn.stringToHclTerraform(this._policyStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_entity_type: {
        value: cdktn.stringToHclTerraform(this._principalEntityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
