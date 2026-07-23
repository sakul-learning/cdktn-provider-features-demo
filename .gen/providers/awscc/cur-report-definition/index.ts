// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cur_report_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CurReportDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * A list of manifests that you want Amazon Web Services to create for this report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}
  */
  readonly additionalArtifacts?: string[];
  /**
  * A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}
  */
  readonly additionalSchemaElements?: string[];
  /**
  * The Amazon resource name of the billing view. You can get this value by using the billing view service public APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cur_report_definition#billing_view_arn CurReportDefinition#billing_view_arn}
  */
  readonly billingViewArn?: string;
  /**
  * The compression format that AWS uses for the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cur_report_definition#compression CurReportDefinition#compression}
  */
  readonly compression: string;
  /**
  * The format that AWS saves the report in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cur_report_definition#format CurReportDefinition#format}
  */
  readonly format: string;
  /**
  * Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to previous months. These charges can include refunds, credits, or support fees.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}
  */
  readonly refreshClosedReports: boolean | cdktn.IResolvable;
  /**
  * The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cur_report_definition#report_name CurReportDefinition#report_name}
  */
  readonly reportName: string;
  /**
  * Whether you want Amazon Web Services to overwrite the previous version of each report or to deliver the report in addition to the previous versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cur_report_definition#report_versioning CurReportDefinition#report_versioning}
  */
  readonly reportVersioning: string;
  /**
  * The S3 bucket where AWS delivers the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}
  */
  readonly s3Prefix: string;
  /**
  * The region of the S3 bucket that AWS delivers the report into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cur_report_definition#s3_region CurReportDefinition#s3_region}
  */
  readonly s3Region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cur_report_definition#tags CurReportDefinition#tags}
  */
  readonly tags?: CurReportDefinitionTags[] | cdktn.IResolvable;
  /**
  * The granularity of the line items in the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cur_report_definition#time_unit CurReportDefinition#time_unit}
  */
  readonly timeUnit: string;
}
export interface CurReportDefinitionTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cur_report_definition#key CurReportDefinition#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cur_report_definition#value CurReportDefinition#value}
  */
  readonly value?: string;
}

export function curReportDefinitionTagsToTerraform(struct?: CurReportDefinitionTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function curReportDefinitionTagsToHclTerraform(struct?: CurReportDefinitionTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CurReportDefinitionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CurReportDefinitionTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CurReportDefinitionTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CurReportDefinitionTagsList extends cdktn.ComplexList {
  public internalValue? : CurReportDefinitionTags[] | cdktn.IResolvable

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
  public get(index: number): CurReportDefinitionTagsOutputReference {
    return new CurReportDefinitionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cur_report_definition awscc_cur_report_definition}
*/
export class CurReportDefinition extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cur_report_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CurReportDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CurReportDefinition to import
  * @param importFromId The id of the existing CurReportDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cur_report_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CurReportDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cur_report_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cur_report_definition awscc_cur_report_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CurReportDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: CurReportDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cur_report_definition',
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
    this._additionalArtifacts = config.additionalArtifacts;
    this._additionalSchemaElements = config.additionalSchemaElements;
    this._billingViewArn = config.billingViewArn;
    this._compression = config.compression;
    this._format = config.format;
    this._refreshClosedReports = config.refreshClosedReports;
    this._reportName = config.reportName;
    this._reportVersioning = config.reportVersioning;
    this._s3Bucket = config.s3Bucket;
    this._s3Prefix = config.s3Prefix;
    this._s3Region = config.s3Region;
    this._tags.internalValue = config.tags;
    this._timeUnit = config.timeUnit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_artifacts - computed: true, optional: true, required: false
  private _additionalArtifacts?: string[]; 
  public get additionalArtifacts() {
    return this.getListAttribute('additional_artifacts');
  }
  public set additionalArtifacts(value: string[]) {
    this._additionalArtifacts = value;
  }
  public resetAdditionalArtifacts() {
    this._additionalArtifacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalArtifactsInput() {
    return this._additionalArtifacts;
  }

  // additional_schema_elements - computed: true, optional: true, required: false
  private _additionalSchemaElements?: string[]; 
  public get additionalSchemaElements() {
    return this.getListAttribute('additional_schema_elements');
  }
  public set additionalSchemaElements(value: string[]) {
    this._additionalSchemaElements = value;
  }
  public resetAdditionalSchemaElements() {
    this._additionalSchemaElements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSchemaElementsInput() {
    return this._additionalSchemaElements;
  }

  // billing_view_arn - computed: true, optional: true, required: false
  private _billingViewArn?: string; 
  public get billingViewArn() {
    return this.getStringAttribute('billing_view_arn');
  }
  public set billingViewArn(value: string) {
    this._billingViewArn = value;
  }
  public resetBillingViewArn() {
    this._billingViewArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingViewArnInput() {
    return this._billingViewArn;
  }

  // compression - computed: false, optional: false, required: true
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // refresh_closed_reports - computed: false, optional: false, required: true
  private _refreshClosedReports?: boolean | cdktn.IResolvable; 
  public get refreshClosedReports() {
    return this.getBooleanAttribute('refresh_closed_reports');
  }
  public set refreshClosedReports(value: boolean | cdktn.IResolvable) {
    this._refreshClosedReports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshClosedReportsInput() {
    return this._refreshClosedReports;
  }

  // report_name - computed: false, optional: false, required: true
  private _reportName?: string; 
  public get reportName() {
    return this.getStringAttribute('report_name');
  }
  public set reportName(value: string) {
    this._reportName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportNameInput() {
    return this._reportName;
  }

  // report_versioning - computed: false, optional: false, required: true
  private _reportVersioning?: string; 
  public get reportVersioning() {
    return this.getStringAttribute('report_versioning');
  }
  public set reportVersioning(value: string) {
    this._reportVersioning = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportVersioningInput() {
    return this._reportVersioning;
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_prefix - computed: false, optional: false, required: true
  private _s3Prefix?: string; 
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }
  public set s3Prefix(value: string) {
    this._s3Prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PrefixInput() {
    return this._s3Prefix;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new CurReportDefinitionTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CurReportDefinitionTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // time_unit - computed: false, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_artifacts: cdktn.listMapper(cdktn.stringToTerraform, false)(this._additionalArtifacts),
      additional_schema_elements: cdktn.listMapper(cdktn.stringToTerraform, false)(this._additionalSchemaElements),
      billing_view_arn: cdktn.stringToTerraform(this._billingViewArn),
      compression: cdktn.stringToTerraform(this._compression),
      format: cdktn.stringToTerraform(this._format),
      refresh_closed_reports: cdktn.booleanToTerraform(this._refreshClosedReports),
      report_name: cdktn.stringToTerraform(this._reportName),
      report_versioning: cdktn.stringToTerraform(this._reportVersioning),
      s3_bucket: cdktn.stringToTerraform(this._s3Bucket),
      s3_prefix: cdktn.stringToTerraform(this._s3Prefix),
      s3_region: cdktn.stringToTerraform(this._s3Region),
      tags: cdktn.listMapper(curReportDefinitionTagsToTerraform, false)(this._tags.internalValue),
      time_unit: cdktn.stringToTerraform(this._timeUnit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_artifacts: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._additionalArtifacts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      additional_schema_elements: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._additionalSchemaElements),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      billing_view_arn: {
        value: cdktn.stringToHclTerraform(this._billingViewArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compression: {
        value: cdktn.stringToHclTerraform(this._compression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktn.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_closed_reports: {
        value: cdktn.booleanToHclTerraform(this._refreshClosedReports),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      report_name: {
        value: cdktn.stringToHclTerraform(this._reportName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_versioning: {
        value: cdktn.stringToHclTerraform(this._reportVersioning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_bucket: {
        value: cdktn.stringToHclTerraform(this._s3Bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_prefix: {
        value: cdktn.stringToHclTerraform(this._s3Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_region: {
        value: cdktn.stringToHclTerraform(this._s3Region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(curReportDefinitionTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CurReportDefinitionTagsList",
      },
      time_unit: {
        value: cdktn.stringToHclTerraform(this._timeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
