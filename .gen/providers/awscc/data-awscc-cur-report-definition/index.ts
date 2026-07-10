// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cur_report_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCurReportDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cur_report_definition#id DataAwsccCurReportDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCurReportDefinitionTags {
}

export function dataAwsccCurReportDefinitionTagsToTerraform(struct?: DataAwsccCurReportDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCurReportDefinitionTagsToHclTerraform(struct?: DataAwsccCurReportDefinitionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCurReportDefinitionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCurReportDefinitionTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCurReportDefinitionTags | undefined) {
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

export class DataAwsccCurReportDefinitionTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCurReportDefinitionTagsOutputReference {
    return new DataAwsccCurReportDefinitionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cur_report_definition awscc_cur_report_definition}
*/
export class DataAwsccCurReportDefinition extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cur_report_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCurReportDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCurReportDefinition to import
  * @param importFromId The id of the existing DataAwsccCurReportDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cur_report_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCurReportDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cur_report_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cur_report_definition awscc_cur_report_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCurReportDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCurReportDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cur_report_definition',
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

  // additional_artifacts - computed: true, optional: false, required: false
  public get additionalArtifacts() {
    return this.getListAttribute('additional_artifacts');
  }

  // additional_schema_elements - computed: true, optional: false, required: false
  public get additionalSchemaElements() {
    return this.getListAttribute('additional_schema_elements');
  }

  // billing_view_arn - computed: true, optional: false, required: false
  public get billingViewArn() {
    return this.getStringAttribute('billing_view_arn');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
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

  // refresh_closed_reports - computed: true, optional: false, required: false
  public get refreshClosedReports() {
    return this.getBooleanAttribute('refresh_closed_reports');
  }

  // report_name - computed: true, optional: false, required: false
  public get reportName() {
    return this.getStringAttribute('report_name');
  }

  // report_versioning - computed: true, optional: false, required: false
  public get reportVersioning() {
    return this.getStringAttribute('report_versioning');
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_prefix - computed: true, optional: false, required: false
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCurReportDefinitionTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // time_unit - computed: true, optional: false, required: false
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
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
