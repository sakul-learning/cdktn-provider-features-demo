// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/servicecatalog_cloudformation_provisioned_product
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccServicecatalogCloudformationProvisionedProductConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/servicecatalog_cloudformation_provisioned_product#id DataAwsccServicecatalogCloudformationProvisionedProduct#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters {
}

export function dataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersToTerraform(struct?: DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersToHclTerraform(struct?: DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters | undefined) {
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

export class DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference {
    return new DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences {
}

export function dataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesToTerraform(struct?: DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesToHclTerraform(struct?: DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // stack_set_accounts - computed: true, optional: false, required: false
  public get stackSetAccounts() {
    return this.getListAttribute('stack_set_accounts');
  }

  // stack_set_failure_tolerance_count - computed: true, optional: false, required: false
  public get stackSetFailureToleranceCount() {
    return this.getNumberAttribute('stack_set_failure_tolerance_count');
  }

  // stack_set_failure_tolerance_percentage - computed: true, optional: false, required: false
  public get stackSetFailureTolerancePercentage() {
    return this.getNumberAttribute('stack_set_failure_tolerance_percentage');
  }

  // stack_set_max_concurrency_count - computed: true, optional: false, required: false
  public get stackSetMaxConcurrencyCount() {
    return this.getNumberAttribute('stack_set_max_concurrency_count');
  }

  // stack_set_max_concurrency_percentage - computed: true, optional: false, required: false
  public get stackSetMaxConcurrencyPercentage() {
    return this.getNumberAttribute('stack_set_max_concurrency_percentage');
  }

  // stack_set_operation_type - computed: true, optional: false, required: false
  public get stackSetOperationType() {
    return this.getStringAttribute('stack_set_operation_type');
  }

  // stack_set_regions - computed: true, optional: false, required: false
  public get stackSetRegions() {
    return this.getListAttribute('stack_set_regions');
  }
}
export interface DataAwsccServicecatalogCloudformationProvisionedProductTags {
}

export function dataAwsccServicecatalogCloudformationProvisionedProductTagsToTerraform(struct?: DataAwsccServicecatalogCloudformationProvisionedProductTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccServicecatalogCloudformationProvisionedProductTagsToHclTerraform(struct?: DataAwsccServicecatalogCloudformationProvisionedProductTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccServicecatalogCloudformationProvisionedProductTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccServicecatalogCloudformationProvisionedProductTags | undefined) {
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

export class DataAwsccServicecatalogCloudformationProvisionedProductTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference {
    return new DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/servicecatalog_cloudformation_provisioned_product awscc_servicecatalog_cloudformation_provisioned_product}
*/
export class DataAwsccServicecatalogCloudformationProvisionedProduct extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_servicecatalog_cloudformation_provisioned_product";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccServicecatalogCloudformationProvisionedProduct resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccServicecatalogCloudformationProvisionedProduct to import
  * @param importFromId The id of the existing DataAwsccServicecatalogCloudformationProvisionedProduct that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/servicecatalog_cloudformation_provisioned_product#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccServicecatalogCloudformationProvisionedProduct to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalog_cloudformation_provisioned_product", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/servicecatalog_cloudformation_provisioned_product awscc_servicecatalog_cloudformation_provisioned_product} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccServicecatalogCloudformationProvisionedProductConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccServicecatalogCloudformationProvisionedProductConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_servicecatalog_cloudformation_provisioned_product',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_language - computed: true, optional: false, required: false
  public get acceptLanguage() {
    return this.getStringAttribute('accept_language');
  }

  // cloudformation_stack_arn - computed: true, optional: false, required: false
  public get cloudformationStackArn() {
    return this.getStringAttribute('cloudformation_stack_arn');
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

  // notification_arns - computed: true, optional: false, required: false
  public get notificationArns() {
    return this.getListAttribute('notification_arns');
  }

  // outputs - computed: true, optional: false, required: false
  private _outputs = new cdktn.StringMap(this, "outputs");
  public get outputs() {
    return this._outputs;
  }

  // path_id - computed: true, optional: false, required: false
  public get pathId() {
    return this.getStringAttribute('path_id');
  }

  // path_name - computed: true, optional: false, required: false
  public get pathName() {
    return this.getStringAttribute('path_name');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // provisioned_product_id - computed: true, optional: false, required: false
  public get provisionedProductId() {
    return this.getStringAttribute('provisioned_product_id');
  }

  // provisioned_product_name - computed: true, optional: false, required: false
  public get provisionedProductName() {
    return this.getStringAttribute('provisioned_product_name');
  }

  // provisioning_artifact_id - computed: true, optional: false, required: false
  public get provisioningArtifactId() {
    return this.getStringAttribute('provisioning_artifact_id');
  }

  // provisioning_artifact_name - computed: true, optional: false, required: false
  public get provisioningArtifactName() {
    return this.getStringAttribute('provisioning_artifact_name');
  }

  // provisioning_parameters - computed: true, optional: false, required: false
  private _provisioningParameters = new DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList(this, "provisioning_parameters", false);
  public get provisioningParameters() {
    return this._provisioningParameters;
  }

  // provisioning_preferences - computed: true, optional: false, required: false
  private _provisioningPreferences = new DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference(this, "provisioning_preferences");
  public get provisioningPreferences() {
    return this._provisioningPreferences;
  }

  // record_id - computed: true, optional: false, required: false
  public get recordId() {
    return this.getStringAttribute('record_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccServicecatalogCloudformationProvisionedProductTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
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
