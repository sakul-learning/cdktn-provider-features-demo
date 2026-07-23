// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope_analysis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2NetworkInsightsAccessScopeAnalysisConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope_analysis#network_insights_access_scope_id Ec2NetworkInsightsAccessScopeAnalysis#network_insights_access_scope_id}
  */
  readonly networkInsightsAccessScopeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope_analysis#tags Ec2NetworkInsightsAccessScopeAnalysis#tags}
  */
  readonly tags?: Ec2NetworkInsightsAccessScopeAnalysisTags[] | cdktn.IResolvable;
}
export interface Ec2NetworkInsightsAccessScopeAnalysisTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope_analysis#key Ec2NetworkInsightsAccessScopeAnalysis#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope_analysis#value Ec2NetworkInsightsAccessScopeAnalysis#value}
  */
  readonly value?: string;
}

export function ec2NetworkInsightsAccessScopeAnalysisTagsToTerraform(struct?: Ec2NetworkInsightsAccessScopeAnalysisTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ec2NetworkInsightsAccessScopeAnalysisTagsToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeAnalysisTags | cdktn.IResolvable): any {
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

export class Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2NetworkInsightsAccessScopeAnalysisTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ec2NetworkInsightsAccessScopeAnalysisTags | cdktn.IResolvable | undefined) {
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

export class Ec2NetworkInsightsAccessScopeAnalysisTagsList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeAnalysisTags[] | cdktn.IResolvable

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
  public get(index: number): Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference {
    return new Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope_analysis awscc_ec2_network_insights_access_scope_analysis}
*/
export class Ec2NetworkInsightsAccessScopeAnalysis extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_network_insights_access_scope_analysis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2NetworkInsightsAccessScopeAnalysis resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2NetworkInsightsAccessScopeAnalysis to import
  * @param importFromId The id of the existing Ec2NetworkInsightsAccessScopeAnalysis that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope_analysis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2NetworkInsightsAccessScopeAnalysis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_network_insights_access_scope_analysis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_network_insights_access_scope_analysis awscc_ec2_network_insights_access_scope_analysis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2NetworkInsightsAccessScopeAnalysisConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2NetworkInsightsAccessScopeAnalysisConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_network_insights_access_scope_analysis',
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
    this._networkInsightsAccessScopeId = config.networkInsightsAccessScopeId;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analyzed_eni_count - computed: true, optional: false, required: false
  public get analyzedEniCount() {
    return this.getNumberAttribute('analyzed_eni_count');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // findings_found - computed: true, optional: false, required: false
  public get findingsFound() {
    return this.getStringAttribute('findings_found');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_insights_access_scope_analysis_arn - computed: true, optional: false, required: false
  public get networkInsightsAccessScopeAnalysisArn() {
    return this.getStringAttribute('network_insights_access_scope_analysis_arn');
  }

  // network_insights_access_scope_analysis_id - computed: true, optional: false, required: false
  public get networkInsightsAccessScopeAnalysisId() {
    return this.getStringAttribute('network_insights_access_scope_analysis_id');
  }

  // network_insights_access_scope_id - computed: false, optional: false, required: true
  private _networkInsightsAccessScopeId?: string; 
  public get networkInsightsAccessScopeId() {
    return this.getStringAttribute('network_insights_access_scope_id');
  }
  public set networkInsightsAccessScopeId(value: string) {
    this._networkInsightsAccessScopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInsightsAccessScopeIdInput() {
    return this._networkInsightsAccessScopeId;
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Ec2NetworkInsightsAccessScopeAnalysisTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Ec2NetworkInsightsAccessScopeAnalysisTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_insights_access_scope_id: cdktn.stringToTerraform(this._networkInsightsAccessScopeId),
      tags: cdktn.listMapper(ec2NetworkInsightsAccessScopeAnalysisTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_insights_access_scope_id: {
        value: cdktn.stringToHclTerraform(this._networkInsightsAccessScopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeAnalysisTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2NetworkInsightsAccessScopeAnalysisTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
