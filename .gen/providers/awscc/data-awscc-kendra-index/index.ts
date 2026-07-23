// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/kendra_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccKendraIndexConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/kendra_index#id DataAwsccKendraIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccKendraIndexCapacityUnits {
}

export function dataAwsccKendraIndexCapacityUnitsToTerraform(struct?: DataAwsccKendraIndexCapacityUnits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraIndexCapacityUnitsToHclTerraform(struct?: DataAwsccKendraIndexCapacityUnits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraIndexCapacityUnitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraIndexCapacityUnits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraIndexCapacityUnits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // query_capacity_units - computed: true, optional: false, required: false
  public get queryCapacityUnits() {
    return this.getNumberAttribute('query_capacity_units');
  }

  // storage_capacity_units - computed: true, optional: false, required: false
  public get storageCapacityUnits() {
    return this.getNumberAttribute('storage_capacity_units');
  }
}
export interface DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems {
}

export function dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsToTerraform(struct?: DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsToHclTerraform(struct?: DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems | undefined) {
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
    return this.getNumberAttribute('value');
  }
}

export class DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference {
    return new DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance {
}

export function dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceToTerraform(struct?: DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceToHclTerraform(struct?: DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // freshness - computed: true, optional: false, required: false
  public get freshness() {
    return this.getBooleanAttribute('freshness');
  }

  // importance - computed: true, optional: false, required: false
  public get importance() {
    return this.getNumberAttribute('importance');
  }

  // rank_order - computed: true, optional: false, required: false
  public get rankOrder() {
    return this.getStringAttribute('rank_order');
  }

  // value_importance_items - computed: true, optional: false, required: false
  private _valueImportanceItems = new DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList(this, "value_importance_items", false);
  public get valueImportanceItems() {
    return this._valueImportanceItems;
  }
}
export interface DataAwsccKendraIndexDocumentMetadataConfigurationsSearch {
}

export function dataAwsccKendraIndexDocumentMetadataConfigurationsSearchToTerraform(struct?: DataAwsccKendraIndexDocumentMetadataConfigurationsSearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraIndexDocumentMetadataConfigurationsSearchToHclTerraform(struct?: DataAwsccKendraIndexDocumentMetadataConfigurationsSearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraIndexDocumentMetadataConfigurationsSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraIndexDocumentMetadataConfigurationsSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // displayable - computed: true, optional: false, required: false
  public get displayable() {
    return this.getBooleanAttribute('displayable');
  }

  // facetable - computed: true, optional: false, required: false
  public get facetable() {
    return this.getBooleanAttribute('facetable');
  }

  // searchable - computed: true, optional: false, required: false
  public get searchable() {
    return this.getBooleanAttribute('searchable');
  }

  // sortable - computed: true, optional: false, required: false
  public get sortable() {
    return this.getBooleanAttribute('sortable');
  }
}
export interface DataAwsccKendraIndexDocumentMetadataConfigurations {
}

export function dataAwsccKendraIndexDocumentMetadataConfigurationsToTerraform(struct?: DataAwsccKendraIndexDocumentMetadataConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraIndexDocumentMetadataConfigurationsToHclTerraform(struct?: DataAwsccKendraIndexDocumentMetadataConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraIndexDocumentMetadataConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraIndexDocumentMetadataConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // relevance - computed: true, optional: false, required: false
  private _relevance = new DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference(this, "relevance");
  public get relevance() {
    return this._relevance;
  }

  // search - computed: true, optional: false, required: false
  private _search = new DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccKendraIndexDocumentMetadataConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference {
    return new DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraIndexServerSideEncryptionConfiguration {
}

export function dataAwsccKendraIndexServerSideEncryptionConfigurationToTerraform(struct?: DataAwsccKendraIndexServerSideEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraIndexServerSideEncryptionConfigurationToHclTerraform(struct?: DataAwsccKendraIndexServerSideEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraIndexServerSideEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraIndexServerSideEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
}
export interface DataAwsccKendraIndexTags {
}

export function dataAwsccKendraIndexTagsToTerraform(struct?: DataAwsccKendraIndexTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraIndexTagsToHclTerraform(struct?: DataAwsccKendraIndexTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraIndexTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraIndexTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraIndexTags | undefined) {
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

export class DataAwsccKendraIndexTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraIndexTagsOutputReference {
    return new DataAwsccKendraIndexTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration {
}

export function dataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationToTerraform(struct?: DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationToHclTerraform(struct?: DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_attribute_field - computed: true, optional: false, required: false
  public get groupAttributeField() {
    return this.getStringAttribute('group_attribute_field');
  }

  // user_name_attribute_field - computed: true, optional: false, required: false
  public get userNameAttributeField() {
    return this.getStringAttribute('user_name_attribute_field');
  }
}
export interface DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration {
}

export function dataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationToTerraform(struct?: DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationToHclTerraform(struct?: DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claim_regex - computed: true, optional: false, required: false
  public get claimRegex() {
    return this.getStringAttribute('claim_regex');
  }

  // group_attribute_field - computed: true, optional: false, required: false
  public get groupAttributeField() {
    return this.getStringAttribute('group_attribute_field');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // key_location - computed: true, optional: false, required: false
  public get keyLocation() {
    return this.getStringAttribute('key_location');
  }

  // secret_manager_arn - computed: true, optional: false, required: false
  public get secretManagerArn() {
    return this.getStringAttribute('secret_manager_arn');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user_name_attribute_field - computed: true, optional: false, required: false
  public get userNameAttributeField() {
    return this.getStringAttribute('user_name_attribute_field');
  }
}
export interface DataAwsccKendraIndexUserTokenConfigurations {
}

export function dataAwsccKendraIndexUserTokenConfigurationsToTerraform(struct?: DataAwsccKendraIndexUserTokenConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccKendraIndexUserTokenConfigurationsToHclTerraform(struct?: DataAwsccKendraIndexUserTokenConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccKendraIndexUserTokenConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccKendraIndexUserTokenConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccKendraIndexUserTokenConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // json_token_type_configuration - computed: true, optional: false, required: false
  private _jsonTokenTypeConfiguration = new DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference(this, "json_token_type_configuration");
  public get jsonTokenTypeConfiguration() {
    return this._jsonTokenTypeConfiguration;
  }

  // jwt_token_type_configuration - computed: true, optional: false, required: false
  private _jwtTokenTypeConfiguration = new DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference(this, "jwt_token_type_configuration");
  public get jwtTokenTypeConfiguration() {
    return this._jwtTokenTypeConfiguration;
  }
}

export class DataAwsccKendraIndexUserTokenConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccKendraIndexUserTokenConfigurationsOutputReference {
    return new DataAwsccKendraIndexUserTokenConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/kendra_index awscc_kendra_index}
*/
export class DataAwsccKendraIndex extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_kendra_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccKendraIndex resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccKendraIndex to import
  * @param importFromId The id of the existing DataAwsccKendraIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/kendra_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccKendraIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_kendra_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/kendra_index awscc_kendra_index} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccKendraIndexConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccKendraIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_kendra_index',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity_units - computed: true, optional: false, required: false
  private _capacityUnits = new DataAwsccKendraIndexCapacityUnitsOutputReference(this, "capacity_units");
  public get capacityUnits() {
    return this._capacityUnits;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // document_metadata_configurations - computed: true, optional: false, required: false
  private _documentMetadataConfigurations = new DataAwsccKendraIndexDocumentMetadataConfigurationsList(this, "document_metadata_configurations", false);
  public get documentMetadataConfigurations() {
    return this._documentMetadataConfigurations;
  }

  // edition - computed: true, optional: false, required: false
  public get edition() {
    return this.getStringAttribute('edition');
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

  // index_id - computed: true, optional: false, required: false
  public get indexId() {
    return this.getStringAttribute('index_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // server_side_encryption_configuration - computed: true, optional: false, required: false
  private _serverSideEncryptionConfiguration = new DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference(this, "server_side_encryption_configuration");
  public get serverSideEncryptionConfiguration() {
    return this._serverSideEncryptionConfiguration;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccKendraIndexTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // user_context_policy - computed: true, optional: false, required: false
  public get userContextPolicy() {
    return this.getStringAttribute('user_context_policy');
  }

  // user_token_configurations - computed: true, optional: false, required: false
  private _userTokenConfigurations = new DataAwsccKendraIndexUserTokenConfigurationsList(this, "user_token_configurations", false);
  public get userTokenConfigurations() {
    return this._userTokenConfigurations;
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
