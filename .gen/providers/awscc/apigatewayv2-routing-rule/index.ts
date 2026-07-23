// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apigatewayv2_routing_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Apigatewayv2RoutingRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * The resulting action based on matching a routing rules condition. Only InvokeApi is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apigatewayv2_routing_rule#actions Apigatewayv2RoutingRule#actions}
  */
  readonly actions: Apigatewayv2RoutingRuleActions[] | cdktn.IResolvable;
  /**
  * The conditions of the routing rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apigatewayv2_routing_rule#conditions Apigatewayv2RoutingRule#conditions}
  */
  readonly conditions: Apigatewayv2RoutingRuleConditions[] | cdktn.IResolvable;
  /**
  * The ARN of the domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apigatewayv2_routing_rule#domain_name_arn Apigatewayv2RoutingRule#domain_name_arn}
  */
  readonly domainNameArn: string;
  /**
  * The order in which API Gateway evaluates a rule. Priority is evaluated from the lowest value to the highest value. Rules can't have the same priority. Priority values 1-1,000,000 are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}
  */
  readonly priority: number;
}
export interface Apigatewayv2RoutingRuleActionsInvokeApi {
  /**
  * The API identifier of the target API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apigatewayv2_routing_rule#api_id Apigatewayv2RoutingRule#api_id}
  */
  readonly apiId: string;
  /**
  * The name of the target stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apigatewayv2_routing_rule#stage Apigatewayv2RoutingRule#stage}
  */
  readonly stage: string;
  /**
  * The strip base path setting. When true, API Gateway strips the incoming matched base path when forwarding the request to the target API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apigatewayv2_routing_rule#strip_base_path Apigatewayv2RoutingRule#strip_base_path}
  */
  readonly stripBasePath?: boolean | cdktn.IResolvable;
}

export function apigatewayv2RoutingRuleActionsInvokeApiToTerraform(struct?: Apigatewayv2RoutingRuleActionsInvokeApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_id: cdktn.stringToTerraform(struct!.apiId),
    stage: cdktn.stringToTerraform(struct!.stage),
    strip_base_path: cdktn.booleanToTerraform(struct!.stripBasePath),
  }
}


export function apigatewayv2RoutingRuleActionsInvokeApiToHclTerraform(struct?: Apigatewayv2RoutingRuleActionsInvokeApi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_id: {
      value: cdktn.stringToHclTerraform(struct!.apiId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage: {
      value: cdktn.stringToHclTerraform(struct!.stage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_base_path: {
      value: cdktn.booleanToHclTerraform(struct!.stripBasePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Apigatewayv2RoutingRuleActionsInvokeApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Apigatewayv2RoutingRuleActionsInvokeApi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiId !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiId = this._apiId;
    }
    if (this._stage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stage = this._stage;
    }
    if (this._stripBasePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripBasePath = this._stripBasePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2RoutingRuleActionsInvokeApi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiId = undefined;
      this._stage = undefined;
      this._stripBasePath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiId = value.apiId;
      this._stage = value.stage;
      this._stripBasePath = value.stripBasePath;
    }
  }

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // stage - computed: false, optional: false, required: true
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }

  // strip_base_path - computed: true, optional: true, required: false
  private _stripBasePath?: boolean | cdktn.IResolvable; 
  public get stripBasePath() {
    return this.getBooleanAttribute('strip_base_path');
  }
  public set stripBasePath(value: boolean | cdktn.IResolvable) {
    this._stripBasePath = value;
  }
  public resetStripBasePath() {
    this._stripBasePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripBasePathInput() {
    return this._stripBasePath;
  }
}
export interface Apigatewayv2RoutingRuleActions {
  /**
  * Represents an InvokeApi action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apigatewayv2_routing_rule#invoke_api Apigatewayv2RoutingRule#invoke_api}
  */
  readonly invokeApi: Apigatewayv2RoutingRuleActionsInvokeApi;
}

export function apigatewayv2RoutingRuleActionsToTerraform(struct?: Apigatewayv2RoutingRuleActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invoke_api: apigatewayv2RoutingRuleActionsInvokeApiToTerraform(struct!.invokeApi),
  }
}


export function apigatewayv2RoutingRuleActionsToHclTerraform(struct?: Apigatewayv2RoutingRuleActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invoke_api: {
      value: apigatewayv2RoutingRuleActionsInvokeApiToHclTerraform(struct!.invokeApi),
      isBlock: true,
      type: "struct",
      storageClassType: "Apigatewayv2RoutingRuleActionsInvokeApi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Apigatewayv2RoutingRuleActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Apigatewayv2RoutingRuleActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invokeApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invokeApi = this._invokeApi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2RoutingRuleActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invokeApi.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invokeApi.internalValue = value.invokeApi;
    }
  }

  // invoke_api - computed: false, optional: false, required: true
  private _invokeApi = new Apigatewayv2RoutingRuleActionsInvokeApiOutputReference(this, "invoke_api");
  public get invokeApi() {
    return this._invokeApi;
  }
  public putInvokeApi(value: Apigatewayv2RoutingRuleActionsInvokeApi) {
    this._invokeApi.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeApiInput() {
    return this._invokeApi.internalValue;
  }
}

export class Apigatewayv2RoutingRuleActionsList extends cdktn.ComplexList {
  public internalValue? : Apigatewayv2RoutingRuleActions[] | cdktn.IResolvable

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
  public get(index: number): Apigatewayv2RoutingRuleActionsOutputReference {
    return new Apigatewayv2RoutingRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Apigatewayv2RoutingRuleConditionsMatchBasePaths {
  /**
  * The string of the case sensitive base path to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}
  */
  readonly anyOf?: string[];
}

export function apigatewayv2RoutingRuleConditionsMatchBasePathsToTerraform(struct?: Apigatewayv2RoutingRuleConditionsMatchBasePaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    any_of: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.anyOf),
  }
}


export function apigatewayv2RoutingRuleConditionsMatchBasePathsToHclTerraform(struct?: Apigatewayv2RoutingRuleConditionsMatchBasePaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    any_of: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.anyOf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Apigatewayv2RoutingRuleConditionsMatchBasePaths | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2RoutingRuleConditionsMatchBasePaths | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyOf = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyOf = value.anyOf;
    }
  }

  // any_of - computed: true, optional: true, required: false
  private _anyOf?: string[]; 
  public get anyOf() {
    return this.getListAttribute('any_of');
  }
  public set anyOf(value: string[]) {
    this._anyOf = value;
  }
  public resetAnyOf() {
    this._anyOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }
}
export interface Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf {
  /**
  * The case insensitive header name to be matched. The header name must be less than 40 characters and the only allowed characters are ``a-z``, ``A-Z``, ``0-9``, and the following special characters: ``*?-!#$%&'.^_`|~.``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apigatewayv2_routing_rule#header Apigatewayv2RoutingRule#header}
  */
  readonly header?: string;
  /**
  * The case sensitive header glob value to be matched against entire header value. The header glob value must be less than 128 characters and the only allowed characters are ``a-z``, ``A-Z``, ``0-9``, and the following special characters: ``*?-!#$%&'.^_`|~``. Wildcard matching is supported for header glob values but must be for ``*prefix-match``, ``suffix-match*``, or ``*infix*-match``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apigatewayv2_routing_rule#value_glob Apigatewayv2RoutingRule#value_glob}
  */
  readonly valueGlob?: string;
}

export function apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfToTerraform(struct?: Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header: cdktn.stringToTerraform(struct!.header),
    value_glob: cdktn.stringToTerraform(struct!.valueGlob),
  }
}


export function apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfToHclTerraform(struct?: Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header: {
      value: cdktn.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_glob: {
      value: cdktn.stringToHclTerraform(struct!.valueGlob),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._valueGlob !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueGlob = this._valueGlob;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._valueGlob = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._valueGlob = value.valueGlob;
    }
  }

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // value_glob - computed: true, optional: true, required: false
  private _valueGlob?: string; 
  public get valueGlob() {
    return this.getStringAttribute('value_glob');
  }
  public set valueGlob(value: string) {
    this._valueGlob = value;
  }
  public resetValueGlob() {
    this._valueGlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueGlobInput() {
    return this._valueGlob;
  }
}

export class Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList extends cdktn.ComplexList {
  public internalValue? : Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf[] | cdktn.IResolvable

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
  public get(index: number): Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference {
    return new Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Apigatewayv2RoutingRuleConditionsMatchHeaders {
  /**
  * The header name and header value glob to be matched. The matchHeaders condition is matched if any of the header name and header value globs are matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}
  */
  readonly anyOf?: Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf[] | cdktn.IResolvable;
}

export function apigatewayv2RoutingRuleConditionsMatchHeadersToTerraform(struct?: Apigatewayv2RoutingRuleConditionsMatchHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    any_of: cdktn.listMapper(apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfToTerraform, false)(struct!.anyOf),
  }
}


export function apigatewayv2RoutingRuleConditionsMatchHeadersToHclTerraform(struct?: Apigatewayv2RoutingRuleConditionsMatchHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    any_of: {
      value: cdktn.listMapperHcl(apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfToHclTerraform, false)(struct!.anyOf),
      isBlock: true,
      type: "list",
      storageClassType: "Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Apigatewayv2RoutingRuleConditionsMatchHeaders | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2RoutingRuleConditionsMatchHeaders | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyOf.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyOf.internalValue = value.anyOf;
    }
  }

  // any_of - computed: true, optional: true, required: false
  private _anyOf = new Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList(this, "any_of", false);
  public get anyOf() {
    return this._anyOf;
  }
  public putAnyOf(value: Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf[] | cdktn.IResolvable) {
    this._anyOf.internalValue = value;
  }
  public resetAnyOf() {
    this._anyOf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf.internalValue;
  }
}
export interface Apigatewayv2RoutingRuleConditions {
  /**
  * The base path to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apigatewayv2_routing_rule#match_base_paths Apigatewayv2RoutingRule#match_base_paths}
  */
  readonly matchBasePaths?: Apigatewayv2RoutingRuleConditionsMatchBasePaths;
  /**
  * The headers to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apigatewayv2_routing_rule#match_headers Apigatewayv2RoutingRule#match_headers}
  */
  readonly matchHeaders?: Apigatewayv2RoutingRuleConditionsMatchHeaders;
}

export function apigatewayv2RoutingRuleConditionsToTerraform(struct?: Apigatewayv2RoutingRuleConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_base_paths: apigatewayv2RoutingRuleConditionsMatchBasePathsToTerraform(struct!.matchBasePaths),
    match_headers: apigatewayv2RoutingRuleConditionsMatchHeadersToTerraform(struct!.matchHeaders),
  }
}


export function apigatewayv2RoutingRuleConditionsToHclTerraform(struct?: Apigatewayv2RoutingRuleConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_base_paths: {
      value: apigatewayv2RoutingRuleConditionsMatchBasePathsToHclTerraform(struct!.matchBasePaths),
      isBlock: true,
      type: "struct",
      storageClassType: "Apigatewayv2RoutingRuleConditionsMatchBasePaths",
    },
    match_headers: {
      value: apigatewayv2RoutingRuleConditionsMatchHeadersToHclTerraform(struct!.matchHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "Apigatewayv2RoutingRuleConditionsMatchHeaders",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Apigatewayv2RoutingRuleConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Apigatewayv2RoutingRuleConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchBasePaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchBasePaths = this._matchBasePaths?.internalValue;
    }
    if (this._matchHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchHeaders = this._matchHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2RoutingRuleConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchBasePaths.internalValue = undefined;
      this._matchHeaders.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchBasePaths.internalValue = value.matchBasePaths;
      this._matchHeaders.internalValue = value.matchHeaders;
    }
  }

  // match_base_paths - computed: true, optional: true, required: false
  private _matchBasePaths = new Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference(this, "match_base_paths");
  public get matchBasePaths() {
    return this._matchBasePaths;
  }
  public putMatchBasePaths(value: Apigatewayv2RoutingRuleConditionsMatchBasePaths) {
    this._matchBasePaths.internalValue = value;
  }
  public resetMatchBasePaths() {
    this._matchBasePaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchBasePathsInput() {
    return this._matchBasePaths.internalValue;
  }

  // match_headers - computed: true, optional: true, required: false
  private _matchHeaders = new Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference(this, "match_headers");
  public get matchHeaders() {
    return this._matchHeaders;
  }
  public putMatchHeaders(value: Apigatewayv2RoutingRuleConditionsMatchHeaders) {
    this._matchHeaders.internalValue = value;
  }
  public resetMatchHeaders() {
    this._matchHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchHeadersInput() {
    return this._matchHeaders.internalValue;
  }
}

export class Apigatewayv2RoutingRuleConditionsList extends cdktn.ComplexList {
  public internalValue? : Apigatewayv2RoutingRuleConditions[] | cdktn.IResolvable

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
  public get(index: number): Apigatewayv2RoutingRuleConditionsOutputReference {
    return new Apigatewayv2RoutingRuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apigatewayv2_routing_rule awscc_apigatewayv2_routing_rule}
*/
export class Apigatewayv2RoutingRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apigatewayv2_routing_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Apigatewayv2RoutingRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Apigatewayv2RoutingRule to import
  * @param importFromId The id of the existing Apigatewayv2RoutingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apigatewayv2_routing_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Apigatewayv2RoutingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigatewayv2_routing_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/apigatewayv2_routing_rule awscc_apigatewayv2_routing_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Apigatewayv2RoutingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: Apigatewayv2RoutingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigatewayv2_routing_rule',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actions.internalValue = config.actions;
    this._conditions.internalValue = config.conditions;
    this._domainNameArn = config.domainNameArn;
    this._priority = config.priority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: false, required: true
  private _actions = new Apigatewayv2RoutingRuleActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: Apigatewayv2RoutingRuleActions[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new Apigatewayv2RoutingRuleConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: Apigatewayv2RoutingRuleConditions[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // domain_name_arn - computed: false, optional: false, required: true
  private _domainNameArn?: string; 
  public get domainNameArn() {
    return this.getStringAttribute('domain_name_arn');
  }
  public set domainNameArn(value: string) {
    this._domainNameArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameArnInput() {
    return this._domainNameArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // routing_rule_arn - computed: true, optional: false, required: false
  public get routingRuleArn() {
    return this.getStringAttribute('routing_rule_arn');
  }

  // routing_rule_id - computed: true, optional: false, required: false
  public get routingRuleId() {
    return this.getStringAttribute('routing_rule_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktn.listMapper(apigatewayv2RoutingRuleActionsToTerraform, false)(this._actions.internalValue),
      conditions: cdktn.listMapper(apigatewayv2RoutingRuleConditionsToTerraform, false)(this._conditions.internalValue),
      domain_name_arn: cdktn.stringToTerraform(this._domainNameArn),
      priority: cdktn.numberToTerraform(this._priority),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktn.listMapperHcl(apigatewayv2RoutingRuleActionsToHclTerraform, false)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Apigatewayv2RoutingRuleActionsList",
      },
      conditions: {
        value: cdktn.listMapperHcl(apigatewayv2RoutingRuleConditionsToHclTerraform, false)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Apigatewayv2RoutingRuleConditionsList",
      },
      domain_name_arn: {
        value: cdktn.stringToHclTerraform(this._domainNameArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktn.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
