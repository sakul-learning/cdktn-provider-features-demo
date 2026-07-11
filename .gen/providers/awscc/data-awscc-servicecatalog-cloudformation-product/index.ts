// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/servicecatalog_cloudformation_product
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccServicecatalogCloudformationProductConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/servicecatalog_cloudformation_product#id DataAwsccServicecatalogCloudformationProduct#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo {
}

export function dataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoToTerraform(struct?: DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoToHclTerraform(struct?: DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // import_from_physical_id - computed: true, optional: false, required: false
  public get importFromPhysicalId() {
    return this.getStringAttribute('import_from_physical_id');
  }

  // load_template_from_url - computed: true, optional: false, required: false
  public get loadTemplateFromUrl() {
    return this.getStringAttribute('load_template_from_url');
  }
}
export interface DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters {
}

export function dataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersToTerraform(struct?: DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersToHclTerraform(struct?: DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters | undefined) {
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

  // disable_template_validation - computed: true, optional: false, required: false
  public get disableTemplateValidation() {
    return this.getBooleanAttribute('disable_template_validation');
  }

  // info - computed: true, optional: false, required: false
  private _info = new DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference(this, "info");
  public get info() {
    return this._info;
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

export class DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference {
    return new DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar {
}

export function dataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarToTerraform(struct?: DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarToHclTerraform(struct?: DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // artifact_path - computed: true, optional: false, required: false
  public get artifactPath() {
    return this.getStringAttribute('artifact_path');
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // connection_arn - computed: true, optional: false, required: false
  public get connectionArn() {
    return this.getStringAttribute('connection_arn');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }
}
export interface DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters {
}

export function dataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersToTerraform(struct?: DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersToHclTerraform(struct?: DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code_star - computed: true, optional: false, required: false
  private _codeStar = new DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference(this, "code_star");
  public get codeStar() {
    return this._codeStar;
  }
}
export interface DataAwsccServicecatalogCloudformationProductSourceConnection {
}

export function dataAwsccServicecatalogCloudformationProductSourceConnectionToTerraform(struct?: DataAwsccServicecatalogCloudformationProductSourceConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccServicecatalogCloudformationProductSourceConnectionToHclTerraform(struct?: DataAwsccServicecatalogCloudformationProductSourceConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccServicecatalogCloudformationProductSourceConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccServicecatalogCloudformationProductSourceConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_parameters - computed: true, optional: false, required: false
  private _connectionParameters = new DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference(this, "connection_parameters");
  public get connectionParameters() {
    return this._connectionParameters;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccServicecatalogCloudformationProductTags {
}

export function dataAwsccServicecatalogCloudformationProductTagsToTerraform(struct?: DataAwsccServicecatalogCloudformationProductTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccServicecatalogCloudformationProductTagsToHclTerraform(struct?: DataAwsccServicecatalogCloudformationProductTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccServicecatalogCloudformationProductTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccServicecatalogCloudformationProductTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccServicecatalogCloudformationProductTags | undefined) {
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

export class DataAwsccServicecatalogCloudformationProductTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccServicecatalogCloudformationProductTagsOutputReference {
    return new DataAwsccServicecatalogCloudformationProductTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/servicecatalog_cloudformation_product awscc_servicecatalog_cloudformation_product}
*/
export class DataAwsccServicecatalogCloudformationProduct extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_servicecatalog_cloudformation_product";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccServicecatalogCloudformationProduct resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccServicecatalogCloudformationProduct to import
  * @param importFromId The id of the existing DataAwsccServicecatalogCloudformationProduct that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/servicecatalog_cloudformation_product#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccServicecatalogCloudformationProduct to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalog_cloudformation_product", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/servicecatalog_cloudformation_product awscc_servicecatalog_cloudformation_product} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccServicecatalogCloudformationProductConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccServicecatalogCloudformationProductConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_servicecatalog_cloudformation_product',
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

  // cloudformation_product_id - computed: true, optional: false, required: false
  public get cloudformationProductId() {
    return this.getStringAttribute('cloudformation_product_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distributor - computed: true, optional: false, required: false
  public get distributor() {
    return this.getStringAttribute('distributor');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // product_type - computed: true, optional: false, required: false
  public get productType() {
    return this.getStringAttribute('product_type');
  }

  // provisioning_artifact_ids - computed: true, optional: false, required: false
  public get provisioningArtifactIds() {
    return this.getStringAttribute('provisioning_artifact_ids');
  }

  // provisioning_artifact_names - computed: true, optional: false, required: false
  public get provisioningArtifactNames() {
    return this.getStringAttribute('provisioning_artifact_names');
  }

  // provisioning_artifact_parameters - computed: true, optional: false, required: false
  private _provisioningArtifactParameters = new DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList(this, "provisioning_artifact_parameters", false);
  public get provisioningArtifactParameters() {
    return this._provisioningArtifactParameters;
  }

  // replace_provisioning_artifacts - computed: true, optional: false, required: false
  public get replaceProvisioningArtifacts() {
    return this.getBooleanAttribute('replace_provisioning_artifacts');
  }

  // source_connection - computed: true, optional: false, required: false
  private _sourceConnection = new DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference(this, "source_connection");
  public get sourceConnection() {
    return this._sourceConnection;
  }

  // support_description - computed: true, optional: false, required: false
  public get supportDescription() {
    return this.getStringAttribute('support_description');
  }

  // support_email - computed: true, optional: false, required: false
  public get supportEmail() {
    return this.getStringAttribute('support_email');
  }

  // support_url - computed: true, optional: false, required: false
  public get supportUrl() {
    return this.getStringAttribute('support_url');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccServicecatalogCloudformationProductTagsList(this, "tags", false);
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
