// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/personalize_dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccPersonalizeDatasetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/personalize_dataset#id DataAwsccPersonalizeDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccPersonalizeDatasetDatasetImportJobDataSource {
}

export function dataAwsccPersonalizeDatasetDatasetImportJobDataSourceToTerraform(struct?: DataAwsccPersonalizeDatasetDatasetImportJobDataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPersonalizeDatasetDatasetImportJobDataSourceToHclTerraform(struct?: DataAwsccPersonalizeDatasetDatasetImportJobDataSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPersonalizeDatasetDatasetImportJobDataSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPersonalizeDatasetDatasetImportJobDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPersonalizeDatasetDatasetImportJobDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_location - computed: true, optional: false, required: false
  public get dataLocation() {
    return this.getStringAttribute('data_location');
  }
}
export interface DataAwsccPersonalizeDatasetDatasetImportJob {
}

export function dataAwsccPersonalizeDatasetDatasetImportJobToTerraform(struct?: DataAwsccPersonalizeDatasetDatasetImportJob): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPersonalizeDatasetDatasetImportJobToHclTerraform(struct?: DataAwsccPersonalizeDatasetDatasetImportJob): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPersonalizeDatasetDatasetImportJobOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPersonalizeDatasetDatasetImportJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPersonalizeDatasetDatasetImportJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source - computed: true, optional: false, required: false
  private _dataSource = new DataAwsccPersonalizeDatasetDatasetImportJobDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }

  // dataset_arn - computed: true, optional: false, required: false
  public get datasetArn() {
    return this.getStringAttribute('dataset_arn');
  }

  // dataset_import_job_arn - computed: true, optional: false, required: false
  public get datasetImportJobArn() {
    return this.getStringAttribute('dataset_import_job_arn');
  }

  // job_name - computed: true, optional: false, required: false
  public get jobName() {
    return this.getStringAttribute('job_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/personalize_dataset awscc_personalize_dataset}
*/
export class DataAwsccPersonalizeDataset extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_personalize_dataset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccPersonalizeDataset resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccPersonalizeDataset to import
  * @param importFromId The id of the existing DataAwsccPersonalizeDataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/personalize_dataset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccPersonalizeDataset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_personalize_dataset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/personalize_dataset awscc_personalize_dataset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccPersonalizeDatasetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccPersonalizeDatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_personalize_dataset',
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

  // dataset_arn - computed: true, optional: false, required: false
  public get datasetArn() {
    return this.getStringAttribute('dataset_arn');
  }

  // dataset_group_arn - computed: true, optional: false, required: false
  public get datasetGroupArn() {
    return this.getStringAttribute('dataset_group_arn');
  }

  // dataset_import_job - computed: true, optional: false, required: false
  private _datasetImportJob = new DataAwsccPersonalizeDatasetDatasetImportJobOutputReference(this, "dataset_import_job");
  public get datasetImportJob() {
    return this._datasetImportJob;
  }

  // dataset_type - computed: true, optional: false, required: false
  public get datasetType() {
    return this.getStringAttribute('dataset_type');
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

  // schema_arn - computed: true, optional: false, required: false
  public get schemaArn() {
    return this.getStringAttribute('schema_arn');
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
