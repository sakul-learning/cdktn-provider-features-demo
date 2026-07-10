// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bcmdataexports_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBcmdataexportsExportConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bcmdataexports_export#id DataAwsccBcmdataexportsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBcmdataexportsExportExportDataQuery {
}

export function dataAwsccBcmdataexportsExportExportDataQueryToTerraform(struct?: DataAwsccBcmdataexportsExportExportDataQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBcmdataexportsExportExportDataQueryToHclTerraform(struct?: DataAwsccBcmdataexportsExportExportDataQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBcmdataexportsExportExportDataQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBcmdataexportsExportExportDataQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBcmdataexportsExportExportDataQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // query_statement - computed: true, optional: false, required: false
  public get queryStatement() {
    return this.getStringAttribute('query_statement');
  }

  // table_configurations - computed: true, optional: false, required: false
  private _tableConfigurations = new cdktn.StringMapMap(this, "table_configurations");
  public get tableConfigurations() {
    return this._tableConfigurations;
  }
}
export interface DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations {
}

export function dataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsToTerraform(struct?: DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsToHclTerraform(struct?: DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // output_type - computed: true, optional: false, required: false
  public get outputType() {
    return this.getStringAttribute('output_type');
  }

  // overwrite - computed: true, optional: false, required: false
  public get overwrite() {
    return this.getStringAttribute('overwrite');
  }
}
export interface DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3Destination {
}

export function dataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationToTerraform(struct?: DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3Destination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationToHclTerraform(struct?: DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3Destination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3Destination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3Destination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_bucket_owner - computed: true, optional: false, required: false
  public get s3BucketOwner() {
    return this.getStringAttribute('s3_bucket_owner');
  }

  // s3_output_configurations - computed: true, optional: false, required: false
  private _s3OutputConfigurations = new DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference(this, "s3_output_configurations");
  public get s3OutputConfigurations() {
    return this._s3OutputConfigurations;
  }

  // s3_prefix - computed: true, optional: false, required: false
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
}
export interface DataAwsccBcmdataexportsExportExportDestinationConfigurations {
}

export function dataAwsccBcmdataexportsExportExportDestinationConfigurationsToTerraform(struct?: DataAwsccBcmdataexportsExportExportDestinationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBcmdataexportsExportExportDestinationConfigurationsToHclTerraform(struct?: DataAwsccBcmdataexportsExportExportDestinationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBcmdataexportsExportExportDestinationConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBcmdataexportsExportExportDestinationConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_destination - computed: true, optional: false, required: false
  private _s3Destination = new DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference(this, "s3_destination");
  public get s3Destination() {
    return this._s3Destination;
  }
}
export interface DataAwsccBcmdataexportsExportExportRefreshCadence {
}

export function dataAwsccBcmdataexportsExportExportRefreshCadenceToTerraform(struct?: DataAwsccBcmdataexportsExportExportRefreshCadence): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBcmdataexportsExportExportRefreshCadenceToHclTerraform(struct?: DataAwsccBcmdataexportsExportExportRefreshCadence): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBcmdataexportsExportExportRefreshCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBcmdataexportsExportExportRefreshCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
}
export interface DataAwsccBcmdataexportsExportExport {
}

export function dataAwsccBcmdataexportsExportExportToTerraform(struct?: DataAwsccBcmdataexportsExportExport): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBcmdataexportsExportExportToHclTerraform(struct?: DataAwsccBcmdataexportsExportExport): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBcmdataexportsExportExportOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBcmdataexportsExportExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBcmdataexportsExportExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_query - computed: true, optional: false, required: false
  private _dataQuery = new DataAwsccBcmdataexportsExportExportDataQueryOutputReference(this, "data_query");
  public get dataQuery() {
    return this._dataQuery;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_configurations - computed: true, optional: false, required: false
  private _destinationConfigurations = new DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference(this, "destination_configurations");
  public get destinationConfigurations() {
    return this._destinationConfigurations;
  }

  // export_arn - computed: true, optional: false, required: false
  public get exportArn() {
    return this.getStringAttribute('export_arn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // refresh_cadence - computed: true, optional: false, required: false
  private _refreshCadence = new DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference(this, "refresh_cadence");
  public get refreshCadence() {
    return this._refreshCadence;
  }
}
export interface DataAwsccBcmdataexportsExportTags {
}

export function dataAwsccBcmdataexportsExportTagsToTerraform(struct?: DataAwsccBcmdataexportsExportTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBcmdataexportsExportTagsToHclTerraform(struct?: DataAwsccBcmdataexportsExportTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBcmdataexportsExportTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBcmdataexportsExportTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBcmdataexportsExportTags | undefined) {
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

export class DataAwsccBcmdataexportsExportTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBcmdataexportsExportTagsOutputReference {
    return new DataAwsccBcmdataexportsExportTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bcmdataexports_export awscc_bcmdataexports_export}
*/
export class DataAwsccBcmdataexportsExport extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bcmdataexports_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBcmdataexportsExport resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBcmdataexportsExport to import
  * @param importFromId The id of the existing DataAwsccBcmdataexportsExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bcmdataexports_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBcmdataexportsExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bcmdataexports_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/bcmdataexports_export awscc_bcmdataexports_export} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBcmdataexportsExportConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBcmdataexportsExportConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bcmdataexports_export',
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

  // export - computed: true, optional: false, required: false
  private _export = new DataAwsccBcmdataexportsExportExportOutputReference(this, "export");
  public get export() {
    return this._export;
  }

  // export_arn - computed: true, optional: false, required: false
  public get exportArn() {
    return this.getStringAttribute('export_arn');
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

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccBcmdataexportsExportTagsList(this, "tags", false);
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
