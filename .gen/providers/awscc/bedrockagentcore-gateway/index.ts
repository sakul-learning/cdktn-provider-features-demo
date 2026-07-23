// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentcoreGatewayConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#authorizer_configuration BedrockagentcoreGateway#authorizer_configuration}
  */
  readonly authorizerConfiguration?: BedrockagentcoreGatewayAuthorizerConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#authorizer_type BedrockagentcoreGateway#authorizer_type}
  */
  readonly authorizerType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#description BedrockagentcoreGateway#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#exception_level BedrockagentcoreGateway#exception_level}
  */
  readonly exceptionLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#interceptor_configurations BedrockagentcoreGateway#interceptor_configurations}
  */
  readonly interceptorConfigurations?: BedrockagentcoreGatewayInterceptorConfigurations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#kms_key_arn BedrockagentcoreGateway#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#name BedrockagentcoreGateway#name}
  */
  readonly name: string;
  /**
  * The configuration for a policy engine associated with a gateway. A policy engine is a collection of policies that evaluates and authorizes agent tool calls. When associated with a gateway, the policy engine intercepts all agent requests and determines whether to allow or deny each action based on the defined policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#policy_engine_configuration BedrockagentcoreGateway#policy_engine_configuration}
  */
  readonly policyEngineConfiguration?: BedrockagentcoreGatewayPolicyEngineConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#protocol_configuration BedrockagentcoreGateway#protocol_configuration}
  */
  readonly protocolConfiguration?: BedrockagentcoreGatewayProtocolConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#protocol_type BedrockagentcoreGateway#protocol_type}
  */
  readonly protocolType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#role_arn BedrockagentcoreGateway#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#tags BedrockagentcoreGateway#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue {
  /**
  * The string value to match for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#match_value_string BedrockagentcoreGateway#match_value_string}
  */
  readonly matchValueString?: string;
  /**
  * The list of strings to check for a match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#match_value_string_list BedrockagentcoreGateway#match_value_string_list}
  */
  readonly matchValueStringList?: string[];
}

export function bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueToTerraform(struct?: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_value_string: cdktn.stringToTerraform(struct!.matchValueString),
    match_value_string_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchValueStringList),
  }
}


export function bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueToHclTerraform(struct?: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_value_string: {
      value: cdktn.stringToHclTerraform(struct!.matchValueString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_value_string_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchValueStringList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValueString !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValueString = this._matchValueString;
    }
    if (this._matchValueStringList !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValueStringList = this._matchValueStringList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValueString = undefined;
      this._matchValueStringList = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValueString = value.matchValueString;
      this._matchValueStringList = value.matchValueStringList;
    }
  }

  // match_value_string - computed: true, optional: true, required: false
  private _matchValueString?: string; 
  public get matchValueString() {
    return this.getStringAttribute('match_value_string');
  }
  public set matchValueString(value: string) {
    this._matchValueString = value;
  }
  public resetMatchValueString() {
    this._matchValueString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueStringInput() {
    return this._matchValueString;
  }

  // match_value_string_list - computed: true, optional: true, required: false
  private _matchValueStringList?: string[]; 
  public get matchValueStringList() {
    return this.getListAttribute('match_value_string_list');
  }
  public set matchValueStringList(value: string[]) {
    this._matchValueStringList = value;
  }
  public resetMatchValueStringList() {
    this._matchValueStringList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueStringListInput() {
    return this._matchValueStringList;
  }
}
export interface BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue {
  /**
  * The relationship between the claim field value and the value or values being matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#claim_match_operator BedrockagentcoreGateway#claim_match_operator}
  */
  readonly claimMatchOperator?: string;
  /**
  * The value or values in the custom claim to match for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#claim_match_value BedrockagentcoreGateway#claim_match_value}
  */
  readonly claimMatchValue?: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue;
}

export function bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueToTerraform(struct?: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    claim_match_operator: cdktn.stringToTerraform(struct!.claimMatchOperator),
    claim_match_value: bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueToTerraform(struct!.claimMatchValue),
  }
}


export function bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueToHclTerraform(struct?: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    claim_match_operator: {
      value: cdktn.stringToHclTerraform(struct!.claimMatchOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claim_match_value: {
      value: bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueToHclTerraform(struct!.claimMatchValue),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimMatchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimMatchOperator = this._claimMatchOperator;
    }
    if (this._claimMatchValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimMatchValue = this._claimMatchValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimMatchOperator = undefined;
      this._claimMatchValue.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimMatchOperator = value.claimMatchOperator;
      this._claimMatchValue.internalValue = value.claimMatchValue;
    }
  }

  // claim_match_operator - computed: true, optional: true, required: false
  private _claimMatchOperator?: string; 
  public get claimMatchOperator() {
    return this.getStringAttribute('claim_match_operator');
  }
  public set claimMatchOperator(value: string) {
    this._claimMatchOperator = value;
  }
  public resetClaimMatchOperator() {
    this._claimMatchOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimMatchOperatorInput() {
    return this._claimMatchOperator;
  }

  // claim_match_value - computed: true, optional: true, required: false
  private _claimMatchValue = new BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference(this, "claim_match_value");
  public get claimMatchValue() {
    return this._claimMatchValue;
  }
  public putClaimMatchValue(value: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue) {
    this._claimMatchValue.internalValue = value;
  }
  public resetClaimMatchValue() {
    this._claimMatchValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimMatchValueInput() {
    return this._claimMatchValue.internalValue;
  }
}
export interface BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims {
  /**
  * The value or values in the custom claim to match and relationship of match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#authorizing_claim_match_value BedrockagentcoreGateway#authorizing_claim_match_value}
  */
  readonly authorizingClaimMatchValue?: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue;
  /**
  * The name of the custom claim to validate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#inbound_token_claim_name BedrockagentcoreGateway#inbound_token_claim_name}
  */
  readonly inboundTokenClaimName?: string;
  /**
  * Token claim data type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#inbound_token_claim_value_type BedrockagentcoreGateway#inbound_token_claim_value_type}
  */
  readonly inboundTokenClaimValueType?: string;
}

export function bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsToTerraform(struct?: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorizing_claim_match_value: bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueToTerraform(struct!.authorizingClaimMatchValue),
    inbound_token_claim_name: cdktn.stringToTerraform(struct!.inboundTokenClaimName),
    inbound_token_claim_value_type: cdktn.stringToTerraform(struct!.inboundTokenClaimValueType),
  }
}


export function bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsToHclTerraform(struct?: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorizing_claim_match_value: {
      value: bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueToHclTerraform(struct!.authorizingClaimMatchValue),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue",
    },
    inbound_token_claim_name: {
      value: cdktn.stringToHclTerraform(struct!.inboundTokenClaimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_token_claim_value_type: {
      value: cdktn.stringToHclTerraform(struct!.inboundTokenClaimValueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizingClaimMatchValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizingClaimMatchValue = this._authorizingClaimMatchValue?.internalValue;
    }
    if (this._inboundTokenClaimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundTokenClaimName = this._inboundTokenClaimName;
    }
    if (this._inboundTokenClaimValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundTokenClaimValueType = this._inboundTokenClaimValueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizingClaimMatchValue.internalValue = undefined;
      this._inboundTokenClaimName = undefined;
      this._inboundTokenClaimValueType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizingClaimMatchValue.internalValue = value.authorizingClaimMatchValue;
      this._inboundTokenClaimName = value.inboundTokenClaimName;
      this._inboundTokenClaimValueType = value.inboundTokenClaimValueType;
    }
  }

  // authorizing_claim_match_value - computed: true, optional: true, required: false
  private _authorizingClaimMatchValue = new BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference(this, "authorizing_claim_match_value");
  public get authorizingClaimMatchValue() {
    return this._authorizingClaimMatchValue;
  }
  public putAuthorizingClaimMatchValue(value: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue) {
    this._authorizingClaimMatchValue.internalValue = value;
  }
  public resetAuthorizingClaimMatchValue() {
    this._authorizingClaimMatchValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizingClaimMatchValueInput() {
    return this._authorizingClaimMatchValue.internalValue;
  }

  // inbound_token_claim_name - computed: true, optional: true, required: false
  private _inboundTokenClaimName?: string; 
  public get inboundTokenClaimName() {
    return this.getStringAttribute('inbound_token_claim_name');
  }
  public set inboundTokenClaimName(value: string) {
    this._inboundTokenClaimName = value;
  }
  public resetInboundTokenClaimName() {
    this._inboundTokenClaimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundTokenClaimNameInput() {
    return this._inboundTokenClaimName;
  }

  // inbound_token_claim_value_type - computed: true, optional: true, required: false
  private _inboundTokenClaimValueType?: string; 
  public get inboundTokenClaimValueType() {
    return this.getStringAttribute('inbound_token_claim_value_type');
  }
  public set inboundTokenClaimValueType(value: string) {
    this._inboundTokenClaimValueType = value;
  }
  public resetInboundTokenClaimValueType() {
    this._inboundTokenClaimValueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundTokenClaimValueTypeInput() {
    return this._inboundTokenClaimValueType;
  }
}

export class BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference {
    return new BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#allowed_audience BedrockagentcoreGateway#allowed_audience}
  */
  readonly allowedAudience?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#allowed_clients BedrockagentcoreGateway#allowed_clients}
  */
  readonly allowedClients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#allowed_scopes BedrockagentcoreGateway#allowed_scopes}
  */
  readonly allowedScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#custom_claims BedrockagentcoreGateway#custom_claims}
  */
  readonly customClaims?: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#discovery_url BedrockagentcoreGateway#discovery_url}
  */
  readonly discoveryUrl?: string;
}

export function bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerToTerraform(struct?: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_audience: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAudience),
    allowed_clients: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedClients),
    allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedScopes),
    custom_claims: cdktn.listMapper(bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsToTerraform, false)(struct!.customClaims),
    discovery_url: cdktn.stringToTerraform(struct!.discoveryUrl),
  }
}


export function bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerToHclTerraform(struct?: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_audience: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAudience),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_clients: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedClients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_claims: {
      value: cdktn.listMapperHcl(bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsToHclTerraform, false)(struct!.customClaims),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList",
    },
    discovery_url: {
      value: cdktn.stringToHclTerraform(struct!.discoveryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAudience !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAudience = this._allowedAudience;
    }
    if (this._allowedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClients = this._allowedClients;
    }
    if (this._allowedScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedScopes = this._allowedScopes;
    }
    if (this._customClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customClaims = this._customClaims?.internalValue;
    }
    if (this._discoveryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryUrl = this._discoveryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedAudience = undefined;
      this._allowedClients = undefined;
      this._allowedScopes = undefined;
      this._customClaims.internalValue = undefined;
      this._discoveryUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedAudience = value.allowedAudience;
      this._allowedClients = value.allowedClients;
      this._allowedScopes = value.allowedScopes;
      this._customClaims.internalValue = value.customClaims;
      this._discoveryUrl = value.discoveryUrl;
    }
  }

  // allowed_audience - computed: true, optional: true, required: false
  private _allowedAudience?: string[]; 
  public get allowedAudience() {
    return this.getListAttribute('allowed_audience');
  }
  public set allowedAudience(value: string[]) {
    this._allowedAudience = value;
  }
  public resetAllowedAudience() {
    this._allowedAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAudienceInput() {
    return this._allowedAudience;
  }

  // allowed_clients - computed: true, optional: true, required: false
  private _allowedClients?: string[]; 
  public get allowedClients() {
    return this.getListAttribute('allowed_clients');
  }
  public set allowedClients(value: string[]) {
    this._allowedClients = value;
  }
  public resetAllowedClients() {
    this._allowedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientsInput() {
    return this._allowedClients;
  }

  // allowed_scopes - computed: true, optional: true, required: false
  private _allowedScopes?: string[]; 
  public get allowedScopes() {
    return this.getListAttribute('allowed_scopes');
  }
  public set allowedScopes(value: string[]) {
    this._allowedScopes = value;
  }
  public resetAllowedScopes() {
    this._allowedScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedScopesInput() {
    return this._allowedScopes;
  }

  // custom_claims - computed: true, optional: true, required: false
  private _customClaims = new BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList(this, "custom_claims", false);
  public get customClaims() {
    return this._customClaims;
  }
  public putCustomClaims(value: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[] | cdktn.IResolvable) {
    this._customClaims.internalValue = value;
  }
  public resetCustomClaims() {
    this._customClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customClaimsInput() {
    return this._customClaims.internalValue;
  }

  // discovery_url - computed: true, optional: true, required: false
  private _discoveryUrl?: string; 
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
  public set discoveryUrl(value: string) {
    this._discoveryUrl = value;
  }
  public resetDiscoveryUrl() {
    this._discoveryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryUrlInput() {
    return this._discoveryUrl;
  }
}
export interface BedrockagentcoreGatewayAuthorizerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#custom_jwt_authorizer BedrockagentcoreGateway#custom_jwt_authorizer}
  */
  readonly customJwtAuthorizer?: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer;
}

export function bedrockagentcoreGatewayAuthorizerConfigurationToTerraform(struct?: BedrockagentcoreGatewayAuthorizerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_jwt_authorizer: bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerToTerraform(struct!.customJwtAuthorizer),
  }
}


export function bedrockagentcoreGatewayAuthorizerConfigurationToHclTerraform(struct?: BedrockagentcoreGatewayAuthorizerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_jwt_authorizer: {
      value: bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerToHclTerraform(struct!.customJwtAuthorizer),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayAuthorizerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayAuthorizerConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customJwtAuthorizer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customJwtAuthorizer = this._customJwtAuthorizer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayAuthorizerConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customJwtAuthorizer.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customJwtAuthorizer.internalValue = value.customJwtAuthorizer;
    }
  }

  // custom_jwt_authorizer - computed: true, optional: true, required: false
  private _customJwtAuthorizer = new BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference(this, "custom_jwt_authorizer");
  public get customJwtAuthorizer() {
    return this._customJwtAuthorizer;
  }
  public putCustomJwtAuthorizer(value: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer) {
    this._customJwtAuthorizer.internalValue = value;
  }
  public resetCustomJwtAuthorizer() {
    this._customJwtAuthorizer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customJwtAuthorizerInput() {
    return this._customJwtAuthorizer.internalValue;
  }
}
export interface BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#pass_request_headers BedrockagentcoreGateway#pass_request_headers}
  */
  readonly passRequestHeaders?: boolean | cdktn.IResolvable;
}

export function bedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationToTerraform(struct?: BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pass_request_headers: cdktn.booleanToTerraform(struct!.passRequestHeaders),
  }
}


export function bedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationToHclTerraform(struct?: BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pass_request_headers: {
      value: cdktn.booleanToHclTerraform(struct!.passRequestHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.passRequestHeaders = this._passRequestHeaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passRequestHeaders = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passRequestHeaders = value.passRequestHeaders;
    }
  }

  // pass_request_headers - computed: true, optional: true, required: false
  private _passRequestHeaders?: boolean | cdktn.IResolvable; 
  public get passRequestHeaders() {
    return this.getBooleanAttribute('pass_request_headers');
  }
  public set passRequestHeaders(value: boolean | cdktn.IResolvable) {
    this._passRequestHeaders = value;
  }
  public resetPassRequestHeaders() {
    this._passRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passRequestHeadersInput() {
    return this._passRequestHeaders;
  }
}
export interface BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#arn BedrockagentcoreGateway#arn}
  */
  readonly arn?: string;
}

export function bedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaToTerraform(struct?: BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function bedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaToHclTerraform(struct?: BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface BedrockagentcoreGatewayInterceptorConfigurationsInterceptor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#lambda BedrockagentcoreGateway#lambda}
  */
  readonly lambda?: BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda;
}

export function bedrockagentcoreGatewayInterceptorConfigurationsInterceptorToTerraform(struct?: BedrockagentcoreGatewayInterceptorConfigurationsInterceptor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda: bedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaToTerraform(struct!.lambda),
  }
}


export function bedrockagentcoreGatewayInterceptorConfigurationsInterceptorToHclTerraform(struct?: BedrockagentcoreGatewayInterceptorConfigurationsInterceptor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda: {
      value: bedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaToHclTerraform(struct!.lambda),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayInterceptorConfigurationsInterceptor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayInterceptorConfigurationsInterceptor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambda.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambda.internalValue = value.lambda;
    }
  }

  // lambda - computed: true, optional: true, required: false
  private _lambda = new BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }
}
export interface BedrockagentcoreGatewayInterceptorConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#input_configuration BedrockagentcoreGateway#input_configuration}
  */
  readonly inputConfiguration?: BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#interception_points BedrockagentcoreGateway#interception_points}
  */
  readonly interceptionPoints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#interceptor BedrockagentcoreGateway#interceptor}
  */
  readonly interceptor?: BedrockagentcoreGatewayInterceptorConfigurationsInterceptor;
}

export function bedrockagentcoreGatewayInterceptorConfigurationsToTerraform(struct?: BedrockagentcoreGatewayInterceptorConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_configuration: bedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationToTerraform(struct!.inputConfiguration),
    interception_points: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.interceptionPoints),
    interceptor: bedrockagentcoreGatewayInterceptorConfigurationsInterceptorToTerraform(struct!.interceptor),
  }
}


export function bedrockagentcoreGatewayInterceptorConfigurationsToHclTerraform(struct?: BedrockagentcoreGatewayInterceptorConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_configuration: {
      value: bedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationToHclTerraform(struct!.inputConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration",
    },
    interception_points: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.interceptionPoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interceptor: {
      value: bedrockagentcoreGatewayInterceptorConfigurationsInterceptorToHclTerraform(struct!.interceptor),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreGatewayInterceptorConfigurationsInterceptor",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayInterceptorConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreGatewayInterceptorConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputConfiguration = this._inputConfiguration?.internalValue;
    }
    if (this._interceptionPoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.interceptionPoints = this._interceptionPoints;
    }
    if (this._interceptor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interceptor = this._interceptor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayInterceptorConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputConfiguration.internalValue = undefined;
      this._interceptionPoints = undefined;
      this._interceptor.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputConfiguration.internalValue = value.inputConfiguration;
      this._interceptionPoints = value.interceptionPoints;
      this._interceptor.internalValue = value.interceptor;
    }
  }

  // input_configuration - computed: true, optional: true, required: false
  private _inputConfiguration = new BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference(this, "input_configuration");
  public get inputConfiguration() {
    return this._inputConfiguration;
  }
  public putInputConfiguration(value: BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration) {
    this._inputConfiguration.internalValue = value;
  }
  public resetInputConfiguration() {
    this._inputConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputConfigurationInput() {
    return this._inputConfiguration.internalValue;
  }

  // interception_points - computed: true, optional: true, required: false
  private _interceptionPoints?: string[]; 
  public get interceptionPoints() {
    return this.getListAttribute('interception_points');
  }
  public set interceptionPoints(value: string[]) {
    this._interceptionPoints = value;
  }
  public resetInterceptionPoints() {
    this._interceptionPoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptionPointsInput() {
    return this._interceptionPoints;
  }

  // interceptor - computed: true, optional: true, required: false
  private _interceptor = new BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference(this, "interceptor");
  public get interceptor() {
    return this._interceptor;
  }
  public putInterceptor(value: BedrockagentcoreGatewayInterceptorConfigurationsInterceptor) {
    this._interceptor.internalValue = value;
  }
  public resetInterceptor() {
    this._interceptor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptorInput() {
    return this._interceptor.internalValue;
  }
}

export class BedrockagentcoreGatewayInterceptorConfigurationsList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreGatewayInterceptorConfigurations[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreGatewayInterceptorConfigurationsOutputReference {
    return new BedrockagentcoreGatewayInterceptorConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreGatewayPolicyEngineConfiguration {
  /**
  * The ARN of the policy engine. The policy engine contains Cedar policies that define fine-grained authorization rules specifying who can perform what actions on which resources as agents interact through the gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#arn BedrockagentcoreGateway#arn}
  */
  readonly arn?: string;
  /**
  * The enforcement mode for the policy engine. LOG_ONLY - The policy engine evaluates each action against your policies and adds traces on whether tool calls would be allowed or denied, but does not enforce the decision. Use this mode to test and validate policies before enabling enforcement. ENFORCE - The policy engine evaluates actions against your policies and enforces decisions by allowing or denying agent operations. Test and validate policies in LOG_ONLY mode before enabling enforcement to avoid unintended denials or adversely affecting production traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#mode BedrockagentcoreGateway#mode}
  */
  readonly mode?: string;
}

export function bedrockagentcoreGatewayPolicyEngineConfigurationToTerraform(struct?: BedrockagentcoreGatewayPolicyEngineConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function bedrockagentcoreGatewayPolicyEngineConfigurationToHclTerraform(struct?: BedrockagentcoreGatewayPolicyEngineConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayPolicyEngineConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayPolicyEngineConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._mode = value.mode;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#session_timeout_in_seconds BedrockagentcoreGateway#session_timeout_in_seconds}
  */
  readonly sessionTimeoutInSeconds?: number;
}

export function bedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationToTerraform(struct?: BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    session_timeout_in_seconds: cdktn.numberToTerraform(struct!.sessionTimeoutInSeconds),
  }
}


export function bedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationToHclTerraform(struct?: BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    session_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.sessionTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeoutInSeconds = this._sessionTimeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sessionTimeoutInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sessionTimeoutInSeconds = value.sessionTimeoutInSeconds;
    }
  }

  // session_timeout_in_seconds - computed: true, optional: true, required: false
  private _sessionTimeoutInSeconds?: number; 
  public get sessionTimeoutInSeconds() {
    return this.getNumberAttribute('session_timeout_in_seconds');
  }
  public set sessionTimeoutInSeconds(value: number) {
    this._sessionTimeoutInSeconds = value;
  }
  public resetSessionTimeoutInSeconds() {
    this._sessionTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInSecondsInput() {
    return this._sessionTimeoutInSeconds;
  }
}
export interface BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#enable_response_streaming BedrockagentcoreGateway#enable_response_streaming}
  */
  readonly enableResponseStreaming?: boolean | cdktn.IResolvable;
}

export function bedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationToTerraform(struct?: BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_response_streaming: cdktn.booleanToTerraform(struct!.enableResponseStreaming),
  }
}


export function bedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationToHclTerraform(struct?: BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_response_streaming: {
      value: cdktn.booleanToHclTerraform(struct!.enableResponseStreaming),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableResponseStreaming !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableResponseStreaming = this._enableResponseStreaming;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableResponseStreaming = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableResponseStreaming = value.enableResponseStreaming;
    }
  }

  // enable_response_streaming - computed: true, optional: true, required: false
  private _enableResponseStreaming?: boolean | cdktn.IResolvable; 
  public get enableResponseStreaming() {
    return this.getBooleanAttribute('enable_response_streaming');
  }
  public set enableResponseStreaming(value: boolean | cdktn.IResolvable) {
    this._enableResponseStreaming = value;
  }
  public resetEnableResponseStreaming() {
    this._enableResponseStreaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableResponseStreamingInput() {
    return this._enableResponseStreaming;
  }
}
export interface BedrockagentcoreGatewayProtocolConfigurationMcp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#instructions BedrockagentcoreGateway#instructions}
  */
  readonly instructions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#search_type BedrockagentcoreGateway#search_type}
  */
  readonly searchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#session_configuration BedrockagentcoreGateway#session_configuration}
  */
  readonly sessionConfiguration?: BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#streaming_configuration BedrockagentcoreGateway#streaming_configuration}
  */
  readonly streamingConfiguration?: BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#supported_versions BedrockagentcoreGateway#supported_versions}
  */
  readonly supportedVersions?: string[];
}

export function bedrockagentcoreGatewayProtocolConfigurationMcpToTerraform(struct?: BedrockagentcoreGatewayProtocolConfigurationMcp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instructions: cdktn.stringToTerraform(struct!.instructions),
    search_type: cdktn.stringToTerraform(struct!.searchType),
    session_configuration: bedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationToTerraform(struct!.sessionConfiguration),
    streaming_configuration: bedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationToTerraform(struct!.streamingConfiguration),
    supported_versions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedVersions),
  }
}


export function bedrockagentcoreGatewayProtocolConfigurationMcpToHclTerraform(struct?: BedrockagentcoreGatewayProtocolConfigurationMcp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instructions: {
      value: cdktn.stringToHclTerraform(struct!.instructions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_type: {
      value: cdktn.stringToHclTerraform(struct!.searchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_configuration: {
      value: bedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationToHclTerraform(struct!.sessionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration",
    },
    streaming_configuration: {
      value: bedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationToHclTerraform(struct!.streamingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration",
    },
    supported_versions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayProtocolConfigurationMcp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instructions !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructions = this._instructions;
    }
    if (this._searchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchType = this._searchType;
    }
    if (this._sessionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionConfiguration = this._sessionConfiguration?.internalValue;
    }
    if (this._streamingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamingConfiguration = this._streamingConfiguration?.internalValue;
    }
    if (this._supportedVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedVersions = this._supportedVersions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayProtocolConfigurationMcp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instructions = undefined;
      this._searchType = undefined;
      this._sessionConfiguration.internalValue = undefined;
      this._streamingConfiguration.internalValue = undefined;
      this._supportedVersions = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instructions = value.instructions;
      this._searchType = value.searchType;
      this._sessionConfiguration.internalValue = value.sessionConfiguration;
      this._streamingConfiguration.internalValue = value.streamingConfiguration;
      this._supportedVersions = value.supportedVersions;
    }
  }

  // instructions - computed: true, optional: true, required: false
  private _instructions?: string; 
  public get instructions() {
    return this.getStringAttribute('instructions');
  }
  public set instructions(value: string) {
    this._instructions = value;
  }
  public resetInstructions() {
    this._instructions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionsInput() {
    return this._instructions;
  }

  // search_type - computed: true, optional: true, required: false
  private _searchType?: string; 
  public get searchType() {
    return this.getStringAttribute('search_type');
  }
  public set searchType(value: string) {
    this._searchType = value;
  }
  public resetSearchType() {
    this._searchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTypeInput() {
    return this._searchType;
  }

  // session_configuration - computed: true, optional: true, required: false
  private _sessionConfiguration = new BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference(this, "session_configuration");
  public get sessionConfiguration() {
    return this._sessionConfiguration;
  }
  public putSessionConfiguration(value: BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration) {
    this._sessionConfiguration.internalValue = value;
  }
  public resetSessionConfiguration() {
    this._sessionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionConfigurationInput() {
    return this._sessionConfiguration.internalValue;
  }

  // streaming_configuration - computed: true, optional: true, required: false
  private _streamingConfiguration = new BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference(this, "streaming_configuration");
  public get streamingConfiguration() {
    return this._streamingConfiguration;
  }
  public putStreamingConfiguration(value: BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration) {
    this._streamingConfiguration.internalValue = value;
  }
  public resetStreamingConfiguration() {
    this._streamingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingConfigurationInput() {
    return this._streamingConfiguration.internalValue;
  }

  // supported_versions - computed: true, optional: true, required: false
  private _supportedVersions?: string[]; 
  public get supportedVersions() {
    return this.getListAttribute('supported_versions');
  }
  public set supportedVersions(value: string[]) {
    this._supportedVersions = value;
  }
  public resetSupportedVersions() {
    this._supportedVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedVersionsInput() {
    return this._supportedVersions;
  }
}
export interface BedrockagentcoreGatewayProtocolConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#mcp BedrockagentcoreGateway#mcp}
  */
  readonly mcp?: BedrockagentcoreGatewayProtocolConfigurationMcp;
}

export function bedrockagentcoreGatewayProtocolConfigurationToTerraform(struct?: BedrockagentcoreGatewayProtocolConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mcp: bedrockagentcoreGatewayProtocolConfigurationMcpToTerraform(struct!.mcp),
  }
}


export function bedrockagentcoreGatewayProtocolConfigurationToHclTerraform(struct?: BedrockagentcoreGatewayProtocolConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mcp: {
      value: bedrockagentcoreGatewayProtocolConfigurationMcpToHclTerraform(struct!.mcp),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreGatewayProtocolConfigurationMcp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreGatewayProtocolConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayProtocolConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcp = this._mcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayProtocolConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mcp.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mcp.internalValue = value.mcp;
    }
  }

  // mcp - computed: true, optional: true, required: false
  private _mcp = new BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference(this, "mcp");
  public get mcp() {
    return this._mcp;
  }
  public putMcp(value: BedrockagentcoreGatewayProtocolConfigurationMcp) {
    this._mcp.internalValue = value;
  }
  public resetMcp() {
    this._mcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpInput() {
    return this._mcp.internalValue;
  }
}
export interface BedrockagentcoreGatewayWorkloadIdentityDetails {
}

export function bedrockagentcoreGatewayWorkloadIdentityDetailsToTerraform(struct?: BedrockagentcoreGatewayWorkloadIdentityDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreGatewayWorkloadIdentityDetailsToHclTerraform(struct?: BedrockagentcoreGatewayWorkloadIdentityDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreGatewayWorkloadIdentityDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreGatewayWorkloadIdentityDetails | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway awscc_bedrockagentcore_gateway}
*/
export class BedrockagentcoreGateway extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrockagentcore_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentcoreGateway resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreGateway to import
  * @param importFromId The id of the existing BedrockagentcoreGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_gateway awscc_bedrockagentcore_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcoreGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcoreGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrockagentcore_gateway',
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
    this._authorizerConfiguration.internalValue = config.authorizerConfiguration;
    this._authorizerType = config.authorizerType;
    this._description = config.description;
    this._exceptionLevel = config.exceptionLevel;
    this._interceptorConfigurations.internalValue = config.interceptorConfigurations;
    this._kmsKeyArn = config.kmsKeyArn;
    this._name = config.name;
    this._policyEngineConfiguration.internalValue = config.policyEngineConfiguration;
    this._protocolConfiguration.internalValue = config.protocolConfiguration;
    this._protocolType = config.protocolType;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorizer_configuration - computed: true, optional: true, required: false
  private _authorizerConfiguration = new BedrockagentcoreGatewayAuthorizerConfigurationOutputReference(this, "authorizer_configuration");
  public get authorizerConfiguration() {
    return this._authorizerConfiguration;
  }
  public putAuthorizerConfiguration(value: BedrockagentcoreGatewayAuthorizerConfiguration) {
    this._authorizerConfiguration.internalValue = value;
  }
  public resetAuthorizerConfiguration() {
    this._authorizerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerConfigurationInput() {
    return this._authorizerConfiguration.internalValue;
  }

  // authorizer_type - computed: false, optional: false, required: true
  private _authorizerType?: string; 
  public get authorizerType() {
    return this.getStringAttribute('authorizer_type');
  }
  public set authorizerType(value: string) {
    this._authorizerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerTypeInput() {
    return this._authorizerType;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // exception_level - computed: true, optional: true, required: false
  private _exceptionLevel?: string; 
  public get exceptionLevel() {
    return this.getStringAttribute('exception_level');
  }
  public set exceptionLevel(value: string) {
    this._exceptionLevel = value;
  }
  public resetExceptionLevel() {
    this._exceptionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionLevelInput() {
    return this._exceptionLevel;
  }

  // gateway_arn - computed: true, optional: false, required: false
  public get gatewayArn() {
    return this.getStringAttribute('gateway_arn');
  }

  // gateway_identifier - computed: true, optional: false, required: false
  public get gatewayIdentifier() {
    return this.getStringAttribute('gateway_identifier');
  }

  // gateway_url - computed: true, optional: false, required: false
  public get gatewayUrl() {
    return this.getStringAttribute('gateway_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interceptor_configurations - computed: true, optional: true, required: false
  private _interceptorConfigurations = new BedrockagentcoreGatewayInterceptorConfigurationsList(this, "interceptor_configurations", false);
  public get interceptorConfigurations() {
    return this._interceptorConfigurations;
  }
  public putInterceptorConfigurations(value: BedrockagentcoreGatewayInterceptorConfigurations[] | cdktn.IResolvable) {
    this._interceptorConfigurations.internalValue = value;
  }
  public resetInterceptorConfigurations() {
    this._interceptorConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptorConfigurationsInput() {
    return this._interceptorConfigurations.internalValue;
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
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

  // policy_engine_configuration - computed: true, optional: true, required: false
  private _policyEngineConfiguration = new BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference(this, "policy_engine_configuration");
  public get policyEngineConfiguration() {
    return this._policyEngineConfiguration;
  }
  public putPolicyEngineConfiguration(value: BedrockagentcoreGatewayPolicyEngineConfiguration) {
    this._policyEngineConfiguration.internalValue = value;
  }
  public resetPolicyEngineConfiguration() {
    this._policyEngineConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyEngineConfigurationInput() {
    return this._policyEngineConfiguration.internalValue;
  }

  // protocol_configuration - computed: true, optional: true, required: false
  private _protocolConfiguration = new BedrockagentcoreGatewayProtocolConfigurationOutputReference(this, "protocol_configuration");
  public get protocolConfiguration() {
    return this._protocolConfiguration;
  }
  public putProtocolConfiguration(value: BedrockagentcoreGatewayProtocolConfiguration) {
    this._protocolConfiguration.internalValue = value;
  }
  public resetProtocolConfiguration() {
    this._protocolConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolConfigurationInput() {
    return this._protocolConfiguration.internalValue;
  }

  // protocol_type - computed: true, optional: true, required: false
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  public resetProtocolType() {
    this._protocolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reasons - computed: true, optional: false, required: false
  public get statusReasons() {
    return this.getListAttribute('status_reasons');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workload_identity_details - computed: true, optional: false, required: false
  private _workloadIdentityDetails = new BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference(this, "workload_identity_details");
  public get workloadIdentityDetails() {
    return this._workloadIdentityDetails;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorizer_configuration: bedrockagentcoreGatewayAuthorizerConfigurationToTerraform(this._authorizerConfiguration.internalValue),
      authorizer_type: cdktn.stringToTerraform(this._authorizerType),
      description: cdktn.stringToTerraform(this._description),
      exception_level: cdktn.stringToTerraform(this._exceptionLevel),
      interceptor_configurations: cdktn.listMapper(bedrockagentcoreGatewayInterceptorConfigurationsToTerraform, false)(this._interceptorConfigurations.internalValue),
      kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
      name: cdktn.stringToTerraform(this._name),
      policy_engine_configuration: bedrockagentcoreGatewayPolicyEngineConfigurationToTerraform(this._policyEngineConfiguration.internalValue),
      protocol_configuration: bedrockagentcoreGatewayProtocolConfigurationToTerraform(this._protocolConfiguration.internalValue),
      protocol_type: cdktn.stringToTerraform(this._protocolType),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorizer_configuration: {
        value: bedrockagentcoreGatewayAuthorizerConfigurationToHclTerraform(this._authorizerConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreGatewayAuthorizerConfiguration",
      },
      authorizer_type: {
        value: cdktn.stringToHclTerraform(this._authorizerType),
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
      exception_level: {
        value: cdktn.stringToHclTerraform(this._exceptionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interceptor_configurations: {
        value: cdktn.listMapperHcl(bedrockagentcoreGatewayInterceptorConfigurationsToHclTerraform, false)(this._interceptorConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreGatewayInterceptorConfigurationsList",
      },
      kms_key_arn: {
        value: cdktn.stringToHclTerraform(this._kmsKeyArn),
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
      policy_engine_configuration: {
        value: bedrockagentcoreGatewayPolicyEngineConfigurationToHclTerraform(this._policyEngineConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreGatewayPolicyEngineConfiguration",
      },
      protocol_configuration: {
        value: bedrockagentcoreGatewayProtocolConfigurationToHclTerraform(this._protocolConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreGatewayProtocolConfiguration",
      },
      protocol_type: {
        value: cdktn.stringToHclTerraform(this._protocolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
