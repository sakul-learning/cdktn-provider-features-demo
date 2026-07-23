// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApsAnomalyDetectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * The AnomalyDetector alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#alias ApsAnomalyDetector#alias}
  */
  readonly alias: string;
  /**
  * Determines the anomaly detector's algorithm and its configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#configuration ApsAnomalyDetector#configuration}
  */
  readonly configuration: ApsAnomalyDetectorConfiguration;
  /**
  * The AnomalyDetector period of detection and metric generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#evaluation_interval_in_seconds ApsAnomalyDetector#evaluation_interval_in_seconds}
  */
  readonly evaluationIntervalInSeconds?: number;
  /**
  * An array of key-value pairs to provide meta-data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#labels ApsAnomalyDetector#labels}
  */
  readonly labels?: ApsAnomalyDetectorLabels[] | cdktn.IResolvable;
  /**
  * The action to perform when running the expression returns no data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#missing_data_action ApsAnomalyDetector#missing_data_action}
  */
  readonly missingDataAction?: ApsAnomalyDetectorMissingDataAction;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#tags ApsAnomalyDetector#tags}
  */
  readonly tags?: ApsAnomalyDetectorTags[] | cdktn.IResolvable;
  /**
  * Required to identify a specific APS Workspace associated with this Anomaly Detector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#workspace ApsAnomalyDetector#workspace}
  */
  readonly workspace: string;
}
export interface ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#amount ApsAnomalyDetector#amount}
  */
  readonly amount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#ratio ApsAnomalyDetector#ratio}
  */
  readonly ratio?: number;
}

export function apsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveToTerraform(struct?: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amount: cdktn.numberToTerraform(struct!.amount),
    ratio: cdktn.numberToTerraform(struct!.ratio),
  }
}


export function apsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveToHclTerraform(struct?: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amount: {
      value: cdktn.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratio: {
      value: cdktn.numberToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._ratio = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._ratio = value.ratio;
    }
  }

  // amount - computed: true, optional: true, required: false
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  public resetAmount() {
    this._amount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // ratio - computed: true, optional: true, required: false
  private _ratio?: number; 
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
  public set ratio(value: number) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }
}
export interface ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#amount ApsAnomalyDetector#amount}
  */
  readonly amount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#ratio ApsAnomalyDetector#ratio}
  */
  readonly ratio?: number;
}

export function apsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowToTerraform(struct?: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amount: cdktn.numberToTerraform(struct!.amount),
    ratio: cdktn.numberToTerraform(struct!.ratio),
  }
}


export function apsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowToHclTerraform(struct?: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amount: {
      value: cdktn.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratio: {
      value: cdktn.numberToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._ratio = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._ratio = value.ratio;
    }
  }

  // amount - computed: true, optional: true, required: false
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  public resetAmount() {
    this._amount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // ratio - computed: true, optional: true, required: false
  private _ratio?: number; 
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
  public set ratio(value: number) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }
}
export interface ApsAnomalyDetectorConfigurationRandomCutForest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#ignore_near_expected_from_above ApsAnomalyDetector#ignore_near_expected_from_above}
  */
  readonly ignoreNearExpectedFromAbove?: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#ignore_near_expected_from_below ApsAnomalyDetector#ignore_near_expected_from_below}
  */
  readonly ignoreNearExpectedFromBelow?: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#query ApsAnomalyDetector#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#sample_size ApsAnomalyDetector#sample_size}
  */
  readonly sampleSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#shingle_size ApsAnomalyDetector#shingle_size}
  */
  readonly shingleSize?: number;
}

export function apsAnomalyDetectorConfigurationRandomCutForestToTerraform(struct?: ApsAnomalyDetectorConfigurationRandomCutForest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ignore_near_expected_from_above: apsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveToTerraform(struct!.ignoreNearExpectedFromAbove),
    ignore_near_expected_from_below: apsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowToTerraform(struct!.ignoreNearExpectedFromBelow),
    query: cdktn.stringToTerraform(struct!.query),
    sample_size: cdktn.numberToTerraform(struct!.sampleSize),
    shingle_size: cdktn.numberToTerraform(struct!.shingleSize),
  }
}


export function apsAnomalyDetectorConfigurationRandomCutForestToHclTerraform(struct?: ApsAnomalyDetectorConfigurationRandomCutForest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ignore_near_expected_from_above: {
      value: apsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveToHclTerraform(struct!.ignoreNearExpectedFromAbove),
      isBlock: true,
      type: "struct",
      storageClassType: "ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove",
    },
    ignore_near_expected_from_below: {
      value: apsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowToHclTerraform(struct!.ignoreNearExpectedFromBelow),
      isBlock: true,
      type: "struct",
      storageClassType: "ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow",
    },
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_size: {
      value: cdktn.numberToHclTerraform(struct!.sampleSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shingle_size: {
      value: cdktn.numberToHclTerraform(struct!.shingleSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsAnomalyDetectorConfigurationRandomCutForestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsAnomalyDetectorConfigurationRandomCutForest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreNearExpectedFromAbove?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreNearExpectedFromAbove = this._ignoreNearExpectedFromAbove?.internalValue;
    }
    if (this._ignoreNearExpectedFromBelow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreNearExpectedFromBelow = this._ignoreNearExpectedFromBelow?.internalValue;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._sampleSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleSize = this._sampleSize;
    }
    if (this._shingleSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.shingleSize = this._shingleSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsAnomalyDetectorConfigurationRandomCutForest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreNearExpectedFromAbove.internalValue = undefined;
      this._ignoreNearExpectedFromBelow.internalValue = undefined;
      this._query = undefined;
      this._sampleSize = undefined;
      this._shingleSize = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreNearExpectedFromAbove.internalValue = value.ignoreNearExpectedFromAbove;
      this._ignoreNearExpectedFromBelow.internalValue = value.ignoreNearExpectedFromBelow;
      this._query = value.query;
      this._sampleSize = value.sampleSize;
      this._shingleSize = value.shingleSize;
    }
  }

  // ignore_near_expected_from_above - computed: true, optional: true, required: false
  private _ignoreNearExpectedFromAbove = new ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference(this, "ignore_near_expected_from_above");
  public get ignoreNearExpectedFromAbove() {
    return this._ignoreNearExpectedFromAbove;
  }
  public putIgnoreNearExpectedFromAbove(value: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove) {
    this._ignoreNearExpectedFromAbove.internalValue = value;
  }
  public resetIgnoreNearExpectedFromAbove() {
    this._ignoreNearExpectedFromAbove.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNearExpectedFromAboveInput() {
    return this._ignoreNearExpectedFromAbove.internalValue;
  }

  // ignore_near_expected_from_below - computed: true, optional: true, required: false
  private _ignoreNearExpectedFromBelow = new ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference(this, "ignore_near_expected_from_below");
  public get ignoreNearExpectedFromBelow() {
    return this._ignoreNearExpectedFromBelow;
  }
  public putIgnoreNearExpectedFromBelow(value: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow) {
    this._ignoreNearExpectedFromBelow.internalValue = value;
  }
  public resetIgnoreNearExpectedFromBelow() {
    this._ignoreNearExpectedFromBelow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNearExpectedFromBelowInput() {
    return this._ignoreNearExpectedFromBelow.internalValue;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // sample_size - computed: true, optional: true, required: false
  private _sampleSize?: number; 
  public get sampleSize() {
    return this.getNumberAttribute('sample_size');
  }
  public set sampleSize(value: number) {
    this._sampleSize = value;
  }
  public resetSampleSize() {
    this._sampleSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleSizeInput() {
    return this._sampleSize;
  }

  // shingle_size - computed: true, optional: true, required: false
  private _shingleSize?: number; 
  public get shingleSize() {
    return this.getNumberAttribute('shingle_size');
  }
  public set shingleSize(value: number) {
    this._shingleSize = value;
  }
  public resetShingleSize() {
    this._shingleSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shingleSizeInput() {
    return this._shingleSize;
  }
}
export interface ApsAnomalyDetectorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#random_cut_forest ApsAnomalyDetector#random_cut_forest}
  */
  readonly randomCutForest: ApsAnomalyDetectorConfigurationRandomCutForest;
}

export function apsAnomalyDetectorConfigurationToTerraform(struct?: ApsAnomalyDetectorConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    random_cut_forest: apsAnomalyDetectorConfigurationRandomCutForestToTerraform(struct!.randomCutForest),
  }
}


export function apsAnomalyDetectorConfigurationToHclTerraform(struct?: ApsAnomalyDetectorConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    random_cut_forest: {
      value: apsAnomalyDetectorConfigurationRandomCutForestToHclTerraform(struct!.randomCutForest),
      isBlock: true,
      type: "struct",
      storageClassType: "ApsAnomalyDetectorConfigurationRandomCutForest",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsAnomalyDetectorConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsAnomalyDetectorConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._randomCutForest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.randomCutForest = this._randomCutForest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsAnomalyDetectorConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._randomCutForest.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._randomCutForest.internalValue = value.randomCutForest;
    }
  }

  // random_cut_forest - computed: false, optional: false, required: true
  private _randomCutForest = new ApsAnomalyDetectorConfigurationRandomCutForestOutputReference(this, "random_cut_forest");
  public get randomCutForest() {
    return this._randomCutForest;
  }
  public putRandomCutForest(value: ApsAnomalyDetectorConfigurationRandomCutForest) {
    this._randomCutForest.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get randomCutForestInput() {
    return this._randomCutForest.internalValue;
  }
}
export interface ApsAnomalyDetectorLabels {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#key ApsAnomalyDetector#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#value ApsAnomalyDetector#value}
  */
  readonly value?: string;
}

export function apsAnomalyDetectorLabelsToTerraform(struct?: ApsAnomalyDetectorLabels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function apsAnomalyDetectorLabelsToHclTerraform(struct?: ApsAnomalyDetectorLabels | cdktn.IResolvable): any {
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

export class ApsAnomalyDetectorLabelsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApsAnomalyDetectorLabels | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApsAnomalyDetectorLabels | cdktn.IResolvable | undefined) {
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

export class ApsAnomalyDetectorLabelsList extends cdktn.ComplexList {
  public internalValue? : ApsAnomalyDetectorLabels[] | cdktn.IResolvable

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
  public get(index: number): ApsAnomalyDetectorLabelsOutputReference {
    return new ApsAnomalyDetectorLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsAnomalyDetectorMissingDataAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#mark_as_anomaly ApsAnomalyDetector#mark_as_anomaly}
  */
  readonly markAsAnomaly?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#skip ApsAnomalyDetector#skip}
  */
  readonly skip?: boolean | cdktn.IResolvable;
}

export function apsAnomalyDetectorMissingDataActionToTerraform(struct?: ApsAnomalyDetectorMissingDataAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mark_as_anomaly: cdktn.booleanToTerraform(struct!.markAsAnomaly),
    skip: cdktn.booleanToTerraform(struct!.skip),
  }
}


export function apsAnomalyDetectorMissingDataActionToHclTerraform(struct?: ApsAnomalyDetectorMissingDataAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mark_as_anomaly: {
      value: cdktn.booleanToHclTerraform(struct!.markAsAnomaly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip: {
      value: cdktn.booleanToHclTerraform(struct!.skip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsAnomalyDetectorMissingDataActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsAnomalyDetectorMissingDataAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._markAsAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.markAsAnomaly = this._markAsAnomaly;
    }
    if (this._skip !== undefined) {
      hasAnyValues = true;
      internalValueResult.skip = this._skip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsAnomalyDetectorMissingDataAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._markAsAnomaly = undefined;
      this._skip = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._markAsAnomaly = value.markAsAnomaly;
      this._skip = value.skip;
    }
  }

  // mark_as_anomaly - computed: true, optional: true, required: false
  private _markAsAnomaly?: boolean | cdktn.IResolvable; 
  public get markAsAnomaly() {
    return this.getBooleanAttribute('mark_as_anomaly');
  }
  public set markAsAnomaly(value: boolean | cdktn.IResolvable) {
    this._markAsAnomaly = value;
  }
  public resetMarkAsAnomaly() {
    this._markAsAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markAsAnomalyInput() {
    return this._markAsAnomaly;
  }

  // skip - computed: true, optional: true, required: false
  private _skip?: boolean | cdktn.IResolvable; 
  public get skip() {
    return this.getBooleanAttribute('skip');
  }
  public set skip(value: boolean | cdktn.IResolvable) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }
}
export interface ApsAnomalyDetectorTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#key ApsAnomalyDetector#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#value ApsAnomalyDetector#value}
  */
  readonly value?: string;
}

export function apsAnomalyDetectorTagsToTerraform(struct?: ApsAnomalyDetectorTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function apsAnomalyDetectorTagsToHclTerraform(struct?: ApsAnomalyDetectorTags | cdktn.IResolvable): any {
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

export class ApsAnomalyDetectorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApsAnomalyDetectorTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApsAnomalyDetectorTags | cdktn.IResolvable | undefined) {
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

export class ApsAnomalyDetectorTagsList extends cdktn.ComplexList {
  public internalValue? : ApsAnomalyDetectorTags[] | cdktn.IResolvable

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
  public get(index: number): ApsAnomalyDetectorTagsOutputReference {
    return new ApsAnomalyDetectorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector awscc_aps_anomaly_detector}
*/
export class ApsAnomalyDetector extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_aps_anomaly_detector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApsAnomalyDetector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsAnomalyDetector to import
  * @param importFromId The id of the existing ApsAnomalyDetector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsAnomalyDetector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_aps_anomaly_detector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_anomaly_detector awscc_aps_anomaly_detector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsAnomalyDetectorConfig
  */
  public constructor(scope: Construct, id: string, config: ApsAnomalyDetectorConfig) {
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
    this._alias = config.alias;
    this._configuration.internalValue = config.configuration;
    this._evaluationIntervalInSeconds = config.evaluationIntervalInSeconds;
    this._labels.internalValue = config.labels;
    this._missingDataAction.internalValue = config.missingDataAction;
    this._tags.internalValue = config.tags;
    this._workspace = config.workspace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new ApsAnomalyDetectorConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: ApsAnomalyDetectorConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // evaluation_interval_in_seconds - computed: true, optional: true, required: false
  private _evaluationIntervalInSeconds?: number; 
  public get evaluationIntervalInSeconds() {
    return this.getNumberAttribute('evaluation_interval_in_seconds');
  }
  public set evaluationIntervalInSeconds(value: number) {
    this._evaluationIntervalInSeconds = value;
  }
  public resetEvaluationIntervalInSeconds() {
    this._evaluationIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationIntervalInSecondsInput() {
    return this._evaluationIntervalInSeconds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels = new ApsAnomalyDetectorLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: ApsAnomalyDetectorLabels[] | cdktn.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // missing_data_action - computed: true, optional: true, required: false
  private _missingDataAction = new ApsAnomalyDetectorMissingDataActionOutputReference(this, "missing_data_action");
  public get missingDataAction() {
    return this._missingDataAction;
  }
  public putMissingDataAction(value: ApsAnomalyDetectorMissingDataAction) {
    this._missingDataAction.internalValue = value;
  }
  public resetMissingDataAction() {
    this._missingDataAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingDataActionInput() {
    return this._missingDataAction.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApsAnomalyDetectorTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApsAnomalyDetectorTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktn.stringToTerraform(this._alias),
      configuration: apsAnomalyDetectorConfigurationToTerraform(this._configuration.internalValue),
      evaluation_interval_in_seconds: cdktn.numberToTerraform(this._evaluationIntervalInSeconds),
      labels: cdktn.listMapper(apsAnomalyDetectorLabelsToTerraform, false)(this._labels.internalValue),
      missing_data_action: apsAnomalyDetectorMissingDataActionToTerraform(this._missingDataAction.internalValue),
      tags: cdktn.listMapper(apsAnomalyDetectorTagsToTerraform, false)(this._tags.internalValue),
      workspace: cdktn.stringToTerraform(this._workspace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktn.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: apsAnomalyDetectorConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsAnomalyDetectorConfiguration",
      },
      evaluation_interval_in_seconds: {
        value: cdktn.numberToHclTerraform(this._evaluationIntervalInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      labels: {
        value: cdktn.listMapperHcl(apsAnomalyDetectorLabelsToHclTerraform, false)(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsAnomalyDetectorLabelsList",
      },
      missing_data_action: {
        value: apsAnomalyDetectorMissingDataActionToHclTerraform(this._missingDataAction.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsAnomalyDetectorMissingDataAction",
      },
      tags: {
        value: cdktn.listMapperHcl(apsAnomalyDetectorTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsAnomalyDetectorTagsList",
      },
      workspace: {
        value: cdktn.stringToHclTerraform(this._workspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
