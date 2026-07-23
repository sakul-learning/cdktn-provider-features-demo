// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/aps_anomaly_detector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccApsAnomalyDetectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/aps_anomaly_detector#id DataAwsccApsAnomalyDetector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove {
}

export function dataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveToTerraform(struct?: DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveToHclTerraform(struct?: DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amount - computed: true, optional: false, required: false
  public get amount() {
    return this.getNumberAttribute('amount');
  }

  // ratio - computed: true, optional: false, required: false
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
}
export interface DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow {
}

export function dataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowToTerraform(struct?: DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowToHclTerraform(struct?: DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amount - computed: true, optional: false, required: false
  public get amount() {
    return this.getNumberAttribute('amount');
  }

  // ratio - computed: true, optional: false, required: false
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
}
export interface DataAwsccApsAnomalyDetectorConfigurationRandomCutForest {
}

export function dataAwsccApsAnomalyDetectorConfigurationRandomCutForestToTerraform(struct?: DataAwsccApsAnomalyDetectorConfigurationRandomCutForest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApsAnomalyDetectorConfigurationRandomCutForestToHclTerraform(struct?: DataAwsccApsAnomalyDetectorConfigurationRandomCutForest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApsAnomalyDetectorConfigurationRandomCutForest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApsAnomalyDetectorConfigurationRandomCutForest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ignore_near_expected_from_above - computed: true, optional: false, required: false
  private _ignoreNearExpectedFromAbove = new DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference(this, "ignore_near_expected_from_above");
  public get ignoreNearExpectedFromAbove() {
    return this._ignoreNearExpectedFromAbove;
  }

  // ignore_near_expected_from_below - computed: true, optional: false, required: false
  private _ignoreNearExpectedFromBelow = new DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference(this, "ignore_near_expected_from_below");
  public get ignoreNearExpectedFromBelow() {
    return this._ignoreNearExpectedFromBelow;
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // sample_size - computed: true, optional: false, required: false
  public get sampleSize() {
    return this.getNumberAttribute('sample_size');
  }

  // shingle_size - computed: true, optional: false, required: false
  public get shingleSize() {
    return this.getNumberAttribute('shingle_size');
  }
}
export interface DataAwsccApsAnomalyDetectorConfiguration {
}

export function dataAwsccApsAnomalyDetectorConfigurationToTerraform(struct?: DataAwsccApsAnomalyDetectorConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApsAnomalyDetectorConfigurationToHclTerraform(struct?: DataAwsccApsAnomalyDetectorConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApsAnomalyDetectorConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApsAnomalyDetectorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApsAnomalyDetectorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // random_cut_forest - computed: true, optional: false, required: false
  private _randomCutForest = new DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference(this, "random_cut_forest");
  public get randomCutForest() {
    return this._randomCutForest;
  }
}
export interface DataAwsccApsAnomalyDetectorLabels {
}

export function dataAwsccApsAnomalyDetectorLabelsToTerraform(struct?: DataAwsccApsAnomalyDetectorLabels): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApsAnomalyDetectorLabelsToHclTerraform(struct?: DataAwsccApsAnomalyDetectorLabels): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApsAnomalyDetectorLabelsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApsAnomalyDetectorLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApsAnomalyDetectorLabels | undefined) {
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

export class DataAwsccApsAnomalyDetectorLabelsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApsAnomalyDetectorLabelsOutputReference {
    return new DataAwsccApsAnomalyDetectorLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApsAnomalyDetectorMissingDataAction {
}

export function dataAwsccApsAnomalyDetectorMissingDataActionToTerraform(struct?: DataAwsccApsAnomalyDetectorMissingDataAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApsAnomalyDetectorMissingDataActionToHclTerraform(struct?: DataAwsccApsAnomalyDetectorMissingDataAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApsAnomalyDetectorMissingDataActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApsAnomalyDetectorMissingDataAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApsAnomalyDetectorMissingDataAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mark_as_anomaly - computed: true, optional: false, required: false
  public get markAsAnomaly() {
    return this.getBooleanAttribute('mark_as_anomaly');
  }

  // skip - computed: true, optional: false, required: false
  public get skip() {
    return this.getBooleanAttribute('skip');
  }
}
export interface DataAwsccApsAnomalyDetectorTags {
}

export function dataAwsccApsAnomalyDetectorTagsToTerraform(struct?: DataAwsccApsAnomalyDetectorTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApsAnomalyDetectorTagsToHclTerraform(struct?: DataAwsccApsAnomalyDetectorTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApsAnomalyDetectorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApsAnomalyDetectorTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApsAnomalyDetectorTags | undefined) {
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

export class DataAwsccApsAnomalyDetectorTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApsAnomalyDetectorTagsOutputReference {
    return new DataAwsccApsAnomalyDetectorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/aps_anomaly_detector awscc_aps_anomaly_detector}
*/
export class DataAwsccApsAnomalyDetector extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_aps_anomaly_detector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccApsAnomalyDetector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccApsAnomalyDetector to import
  * @param importFromId The id of the existing DataAwsccApsAnomalyDetector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/aps_anomaly_detector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccApsAnomalyDetector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_aps_anomaly_detector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/aps_anomaly_detector awscc_aps_anomaly_detector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApsAnomalyDetectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApsAnomalyDetectorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_aps_anomaly_detector',
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

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccApsAnomalyDetectorConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // evaluation_interval_in_seconds - computed: true, optional: false, required: false
  public get evaluationIntervalInSeconds() {
    return this.getNumberAttribute('evaluation_interval_in_seconds');
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

  // labels - computed: true, optional: false, required: false
  private _labels = new DataAwsccApsAnomalyDetectorLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }

  // missing_data_action - computed: true, optional: false, required: false
  private _missingDataAction = new DataAwsccApsAnomalyDetectorMissingDataActionOutputReference(this, "missing_data_action");
  public get missingDataAction() {
    return this._missingDataAction;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccApsAnomalyDetectorTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // workspace - computed: true, optional: false, required: false
  public get workspace() {
    return this.getStringAttribute('workspace');
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
