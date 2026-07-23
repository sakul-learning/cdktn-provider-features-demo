// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/appsync_source_api_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccAppsyncSourceApiAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/appsync_source_api_association#id DataAwsccAppsyncSourceApiAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig {
}

export function dataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigToTerraform(struct?: DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigToHclTerraform(struct?: DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // merge_type - computed: true, optional: false, required: false
  public get mergeType() {
    return this.getStringAttribute('merge_type');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/appsync_source_api_association awscc_appsync_source_api_association}
*/
export class DataAwsccAppsyncSourceApiAssociation extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_appsync_source_api_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccAppsyncSourceApiAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccAppsyncSourceApiAssociation to import
  * @param importFromId The id of the existing DataAwsccAppsyncSourceApiAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/appsync_source_api_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccAppsyncSourceApiAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appsync_source_api_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/appsync_source_api_association awscc_appsync_source_api_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAppsyncSourceApiAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAppsyncSourceApiAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_appsync_source_api_association',
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

  // association_arn - computed: true, optional: false, required: false
  public get associationArn() {
    return this.getStringAttribute('association_arn');
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
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

  // last_successful_merge_date - computed: true, optional: false, required: false
  public get lastSuccessfulMergeDate() {
    return this.getStringAttribute('last_successful_merge_date');
  }

  // merged_api_arn - computed: true, optional: false, required: false
  public get mergedApiArn() {
    return this.getStringAttribute('merged_api_arn');
  }

  // merged_api_id - computed: true, optional: false, required: false
  public get mergedApiId() {
    return this.getStringAttribute('merged_api_id');
  }

  // merged_api_identifier - computed: true, optional: false, required: false
  public get mergedApiIdentifier() {
    return this.getStringAttribute('merged_api_identifier');
  }

  // source_api_arn - computed: true, optional: false, required: false
  public get sourceApiArn() {
    return this.getStringAttribute('source_api_arn');
  }

  // source_api_association_config - computed: true, optional: false, required: false
  private _sourceApiAssociationConfig = new DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference(this, "source_api_association_config");
  public get sourceApiAssociationConfig() {
    return this._sourceApiAssociationConfig;
  }

  // source_api_association_status - computed: true, optional: false, required: false
  public get sourceApiAssociationStatus() {
    return this.getStringAttribute('source_api_association_status');
  }

  // source_api_association_status_detail - computed: true, optional: false, required: false
  public get sourceApiAssociationStatusDetail() {
    return this.getStringAttribute('source_api_association_status_detail');
  }

  // source_api_id - computed: true, optional: false, required: false
  public get sourceApiId() {
    return this.getStringAttribute('source_api_id');
  }

  // source_api_identifier - computed: true, optional: false, required: false
  public get sourceApiIdentifier() {
    return this.getStringAttribute('source_api_identifier');
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
