// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/events_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEventsConnectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/events_connection#id DataAwsccEventsConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters {
}

export function dataAwsccEventsConnectionAuthParametersApiKeyAuthParametersToTerraform(struct?: DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsConnectionAuthParametersApiKeyAuthParametersToHclTerraform(struct?: DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsConnectionAuthParametersApiKeyAuthParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_name - computed: true, optional: false, required: false
  public get apiKeyName() {
    return this.getStringAttribute('api_key_name');
  }

  // api_key_value - computed: true, optional: false, required: false
  public get apiKeyValue() {
    return this.getStringAttribute('api_key_value');
  }
}
export interface DataAwsccEventsConnectionAuthParametersBasicAuthParameters {
}

export function dataAwsccEventsConnectionAuthParametersBasicAuthParametersToTerraform(struct?: DataAwsccEventsConnectionAuthParametersBasicAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsConnectionAuthParametersBasicAuthParametersToHclTerraform(struct?: DataAwsccEventsConnectionAuthParametersBasicAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsConnectionAuthParametersBasicAuthParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsConnectionAuthParametersBasicAuthParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters {
}

export function dataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersToTerraform(struct?: DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersToHclTerraform(struct?: DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_association_arn - computed: true, optional: false, required: false
  public get resourceAssociationArn() {
    return this.getStringAttribute('resource_association_arn');
  }

  // resource_configuration_arn - computed: true, optional: false, required: false
  public get resourceConfigurationArn() {
    return this.getStringAttribute('resource_configuration_arn');
  }
}
export interface DataAwsccEventsConnectionAuthParametersConnectivityParameters {
}

export function dataAwsccEventsConnectionAuthParametersConnectivityParametersToTerraform(struct?: DataAwsccEventsConnectionAuthParametersConnectivityParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsConnectionAuthParametersConnectivityParametersToHclTerraform(struct?: DataAwsccEventsConnectionAuthParametersConnectivityParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsConnectionAuthParametersConnectivityParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsConnectionAuthParametersConnectivityParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_parameters - computed: true, optional: false, required: false
  private _resourceParameters = new DataAwsccEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference(this, "resource_parameters");
  public get resourceParameters() {
    return this._resourceParameters;
  }
}
export interface DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters {
}

export function dataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersToTerraform(struct?: DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersToHclTerraform(struct?: DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_value_secret - computed: true, optional: false, required: false
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
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

export class DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference {
    return new DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters {
}

export function dataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersToTerraform(struct?: DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersToHclTerraform(struct?: DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_value_secret - computed: true, optional: false, required: false
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
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

export class DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference {
    return new DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters {
}

export function dataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersToTerraform(struct?: DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersToHclTerraform(struct?: DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_value_secret - computed: true, optional: false, required: false
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
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

export class DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference {
    return new DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEventsConnectionAuthParametersInvocationHttpParameters {
}

export function dataAwsccEventsConnectionAuthParametersInvocationHttpParametersToTerraform(struct?: DataAwsccEventsConnectionAuthParametersInvocationHttpParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsConnectionAuthParametersInvocationHttpParametersToHclTerraform(struct?: DataAwsccEventsConnectionAuthParametersInvocationHttpParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsConnectionAuthParametersInvocationHttpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsConnectionAuthParametersInvocationHttpParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body_parameters - computed: true, optional: false, required: false
  private _bodyParameters = new DataAwsccEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList(this, "body_parameters", false);
  public get bodyParameters() {
    return this._bodyParameters;
  }

  // header_parameters - computed: true, optional: false, required: false
  private _headerParameters = new DataAwsccEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList(this, "header_parameters", false);
  public get headerParameters() {
    return this._headerParameters;
  }

  // query_string_parameters - computed: true, optional: false, required: false
  private _queryStringParameters = new DataAwsccEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList(this, "query_string_parameters", false);
  public get queryStringParameters() {
    return this._queryStringParameters;
  }
}
export interface DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters {
}

export function dataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersToTerraform(struct?: DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersToHclTerraform(struct?: DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsConnectionAuthParametersOAuthParametersClientParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
}
export interface DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters {
}

export function dataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersToTerraform(struct?: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersToHclTerraform(struct?: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_value_secret - computed: true, optional: false, required: false
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
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

export class DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference {
    return new DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters {
}

export function dataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersToTerraform(struct?: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersToHclTerraform(struct?: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_value_secret - computed: true, optional: false, required: false
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
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

export class DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference {
    return new DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters {
}

export function dataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersToTerraform(struct?: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersToHclTerraform(struct?: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_value_secret - computed: true, optional: false, required: false
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
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

export class DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference {
    return new DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters {
}

export function dataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersToTerraform(struct?: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersToHclTerraform(struct?: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body_parameters - computed: true, optional: false, required: false
  private _bodyParameters = new DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList(this, "body_parameters", false);
  public get bodyParameters() {
    return this._bodyParameters;
  }

  // header_parameters - computed: true, optional: false, required: false
  private _headerParameters = new DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList(this, "header_parameters", false);
  public get headerParameters() {
    return this._headerParameters;
  }

  // query_string_parameters - computed: true, optional: false, required: false
  private _queryStringParameters = new DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList(this, "query_string_parameters", false);
  public get queryStringParameters() {
    return this._queryStringParameters;
  }
}
export interface DataAwsccEventsConnectionAuthParametersOAuthParameters {
}

export function dataAwsccEventsConnectionAuthParametersOAuthParametersToTerraform(struct?: DataAwsccEventsConnectionAuthParametersOAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsConnectionAuthParametersOAuthParametersToHclTerraform(struct?: DataAwsccEventsConnectionAuthParametersOAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsConnectionAuthParametersOAuthParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsConnectionAuthParametersOAuthParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_endpoint - computed: true, optional: false, required: false
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }

  // client_parameters - computed: true, optional: false, required: false
  private _clientParameters = new DataAwsccEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference(this, "client_parameters");
  public get clientParameters() {
    return this._clientParameters;
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // o_auth_http_parameters - computed: true, optional: false, required: false
  private _oAuthHttpParameters = new DataAwsccEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference(this, "o_auth_http_parameters");
  public get oAuthHttpParameters() {
    return this._oAuthHttpParameters;
  }
}
export interface DataAwsccEventsConnectionAuthParameters {
}

export function dataAwsccEventsConnectionAuthParametersToTerraform(struct?: DataAwsccEventsConnectionAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsConnectionAuthParametersToHclTerraform(struct?: DataAwsccEventsConnectionAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsConnectionAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsConnectionAuthParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsConnectionAuthParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_auth_parameters - computed: true, optional: false, required: false
  private _apiKeyAuthParameters = new DataAwsccEventsConnectionAuthParametersApiKeyAuthParametersOutputReference(this, "api_key_auth_parameters");
  public get apiKeyAuthParameters() {
    return this._apiKeyAuthParameters;
  }

  // basic_auth_parameters - computed: true, optional: false, required: false
  private _basicAuthParameters = new DataAwsccEventsConnectionAuthParametersBasicAuthParametersOutputReference(this, "basic_auth_parameters");
  public get basicAuthParameters() {
    return this._basicAuthParameters;
  }

  // connectivity_parameters - computed: true, optional: false, required: false
  private _connectivityParameters = new DataAwsccEventsConnectionAuthParametersConnectivityParametersOutputReference(this, "connectivity_parameters");
  public get connectivityParameters() {
    return this._connectivityParameters;
  }

  // invocation_http_parameters - computed: true, optional: false, required: false
  private _invocationHttpParameters = new DataAwsccEventsConnectionAuthParametersInvocationHttpParametersOutputReference(this, "invocation_http_parameters");
  public get invocationHttpParameters() {
    return this._invocationHttpParameters;
  }

  // o_auth_parameters - computed: true, optional: false, required: false
  private _oAuthParameters = new DataAwsccEventsConnectionAuthParametersOAuthParametersOutputReference(this, "o_auth_parameters");
  public get oAuthParameters() {
    return this._oAuthParameters;
  }
}
export interface DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters {
}

export function dataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersToTerraform(struct?: DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersToHclTerraform(struct?: DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsConnectionInvocationConnectivityParametersResourceParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_association_arn - computed: true, optional: false, required: false
  public get resourceAssociationArn() {
    return this.getStringAttribute('resource_association_arn');
  }

  // resource_configuration_arn - computed: true, optional: false, required: false
  public get resourceConfigurationArn() {
    return this.getStringAttribute('resource_configuration_arn');
  }
}
export interface DataAwsccEventsConnectionInvocationConnectivityParameters {
}

export function dataAwsccEventsConnectionInvocationConnectivityParametersToTerraform(struct?: DataAwsccEventsConnectionInvocationConnectivityParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEventsConnectionInvocationConnectivityParametersToHclTerraform(struct?: DataAwsccEventsConnectionInvocationConnectivityParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEventsConnectionInvocationConnectivityParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEventsConnectionInvocationConnectivityParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_parameters - computed: true, optional: false, required: false
  private _resourceParameters = new DataAwsccEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference(this, "resource_parameters");
  public get resourceParameters() {
    return this._resourceParameters;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/events_connection awscc_events_connection}
*/
export class DataAwsccEventsConnection extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_events_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEventsConnection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEventsConnection to import
  * @param importFromId The id of the existing DataAwsccEventsConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/events_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEventsConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_events_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/events_connection awscc_events_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEventsConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEventsConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_events_connection',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // arn_for_policy - computed: true, optional: false, required: false
  public get arnForPolicy() {
    return this.getStringAttribute('arn_for_policy');
  }

  // auth_parameters - computed: true, optional: false, required: false
  private _authParameters = new DataAwsccEventsConnectionAuthParametersOutputReference(this, "auth_parameters");
  public get authParameters() {
    return this._authParameters;
  }

  // authorization_type - computed: true, optional: false, required: false
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // invocation_connectivity_parameters - computed: true, optional: false, required: false
  private _invocationConnectivityParameters = new DataAwsccEventsConnectionInvocationConnectivityParametersOutputReference(this, "invocation_connectivity_parameters");
  public get invocationConnectivityParameters() {
    return this._invocationConnectivityParameters;
  }

  // kms_key_identifier - computed: true, optional: false, required: false
  public get kmsKeyIdentifier() {
    return this.getStringAttribute('kms_key_identifier');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
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
