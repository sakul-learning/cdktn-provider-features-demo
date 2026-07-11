// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_inference_experiment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSagemakerInferenceExperimentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_inference_experiment#id DataAwsccSagemakerInferenceExperiment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType {
}

export function dataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeToTerraform(struct?: DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeToHclTerraform(struct?: DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceExperimentDataStorageConfigContentType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // csv_content_types - computed: true, optional: false, required: false
  public get csvContentTypes() {
    return this.getListAttribute('csv_content_types');
  }

  // json_content_types - computed: true, optional: false, required: false
  public get jsonContentTypes() {
    return this.getListAttribute('json_content_types');
  }
}
export interface DataAwsccSagemakerInferenceExperimentDataStorageConfig {
}

export function dataAwsccSagemakerInferenceExperimentDataStorageConfigToTerraform(struct?: DataAwsccSagemakerInferenceExperimentDataStorageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceExperimentDataStorageConfigToHclTerraform(struct?: DataAwsccSagemakerInferenceExperimentDataStorageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceExperimentDataStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceExperimentDataStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  private _contentType = new DataAwsccSagemakerInferenceExperimentDataStorageConfigContentTypeOutputReference(this, "content_type");
  public get contentType() {
    return this._contentType;
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
}
export interface DataAwsccSagemakerInferenceExperimentEndpointMetadata {
}

export function dataAwsccSagemakerInferenceExperimentEndpointMetadataToTerraform(struct?: DataAwsccSagemakerInferenceExperimentEndpointMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceExperimentEndpointMetadataToHclTerraform(struct?: DataAwsccSagemakerInferenceExperimentEndpointMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceExperimentEndpointMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceExperimentEndpointMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_config_name - computed: true, optional: false, required: false
  public get endpointConfigName() {
    return this.getStringAttribute('endpoint_config_name');
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }

  // endpoint_status - computed: true, optional: false, required: false
  public get endpointStatus() {
    return this.getStringAttribute('endpoint_status');
  }
}
export interface DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig {
}

export function dataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigToTerraform(struct?: DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigToHclTerraform(struct?: DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
}
export interface DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig {
}

export function dataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigToTerraform(struct?: DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigToHclTerraform(struct?: DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // infrastructure_type - computed: true, optional: false, required: false
  public get infrastructureType() {
    return this.getStringAttribute('infrastructure_type');
  }

  // real_time_inference_config - computed: true, optional: false, required: false
  private _realTimeInferenceConfig = new DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigRealTimeInferenceConfigOutputReference(this, "real_time_inference_config");
  public get realTimeInferenceConfig() {
    return this._realTimeInferenceConfig;
  }
}
export interface DataAwsccSagemakerInferenceExperimentModelVariants {
}

export function dataAwsccSagemakerInferenceExperimentModelVariantsToTerraform(struct?: DataAwsccSagemakerInferenceExperimentModelVariants): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceExperimentModelVariantsToHclTerraform(struct?: DataAwsccSagemakerInferenceExperimentModelVariants): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerInferenceExperimentModelVariants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceExperimentModelVariants | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // infrastructure_config - computed: true, optional: false, required: false
  private _infrastructureConfig = new DataAwsccSagemakerInferenceExperimentModelVariantsInfrastructureConfigOutputReference(this, "infrastructure_config");
  public get infrastructureConfig() {
    return this._infrastructureConfig;
  }

  // model_name - computed: true, optional: false, required: false
  public get modelName() {
    return this.getStringAttribute('model_name');
  }

  // variant_name - computed: true, optional: false, required: false
  public get variantName() {
    return this.getStringAttribute('variant_name');
  }
}

export class DataAwsccSagemakerInferenceExperimentModelVariantsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference {
    return new DataAwsccSagemakerInferenceExperimentModelVariantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerInferenceExperimentSchedule {
}

export function dataAwsccSagemakerInferenceExperimentScheduleToTerraform(struct?: DataAwsccSagemakerInferenceExperimentSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceExperimentScheduleToHclTerraform(struct?: DataAwsccSagemakerInferenceExperimentSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceExperimentScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceExperimentSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceExperimentSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}
export interface DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants {
}

export function dataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsToTerraform(struct?: DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsToHclTerraform(struct?: DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariants | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sampling_percentage - computed: true, optional: false, required: false
  public get samplingPercentage() {
    return this.getNumberAttribute('sampling_percentage');
  }

  // shadow_model_variant_name - computed: true, optional: false, required: false
  public get shadowModelVariantName() {
    return this.getStringAttribute('shadow_model_variant_name');
  }
}

export class DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference {
    return new DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerInferenceExperimentShadowModeConfig {
}

export function dataAwsccSagemakerInferenceExperimentShadowModeConfigToTerraform(struct?: DataAwsccSagemakerInferenceExperimentShadowModeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceExperimentShadowModeConfigToHclTerraform(struct?: DataAwsccSagemakerInferenceExperimentShadowModeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerInferenceExperimentShadowModeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceExperimentShadowModeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // shadow_model_variants - computed: true, optional: false, required: false
  private _shadowModelVariants = new DataAwsccSagemakerInferenceExperimentShadowModeConfigShadowModelVariantsList(this, "shadow_model_variants", false);
  public get shadowModelVariants() {
    return this._shadowModelVariants;
  }

  // source_model_variant_name - computed: true, optional: false, required: false
  public get sourceModelVariantName() {
    return this.getStringAttribute('source_model_variant_name');
  }
}
export interface DataAwsccSagemakerInferenceExperimentTags {
}

export function dataAwsccSagemakerInferenceExperimentTagsToTerraform(struct?: DataAwsccSagemakerInferenceExperimentTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerInferenceExperimentTagsToHclTerraform(struct?: DataAwsccSagemakerInferenceExperimentTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerInferenceExperimentTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerInferenceExperimentTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerInferenceExperimentTags | undefined) {
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

export class DataAwsccSagemakerInferenceExperimentTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerInferenceExperimentTagsOutputReference {
    return new DataAwsccSagemakerInferenceExperimentTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_inference_experiment awscc_sagemaker_inference_experiment}
*/
export class DataAwsccSagemakerInferenceExperiment extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_inference_experiment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSagemakerInferenceExperiment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSagemakerInferenceExperiment to import
  * @param importFromId The id of the existing DataAwsccSagemakerInferenceExperiment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_inference_experiment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSagemakerInferenceExperiment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_inference_experiment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sagemaker_inference_experiment awscc_sagemaker_inference_experiment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerInferenceExperimentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerInferenceExperimentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_inference_experiment',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // data_storage_config - computed: true, optional: false, required: false
  private _dataStorageConfig = new DataAwsccSagemakerInferenceExperimentDataStorageConfigOutputReference(this, "data_storage_config");
  public get dataStorageConfig() {
    return this._dataStorageConfig;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // desired_state - computed: true, optional: false, required: false
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }

  // endpoint_metadata - computed: true, optional: false, required: false
  private _endpointMetadata = new DataAwsccSagemakerInferenceExperimentEndpointMetadataOutputReference(this, "endpoint_metadata");
  public get endpointMetadata() {
    return this._endpointMetadata;
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
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

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // model_variants - computed: true, optional: false, required: false
  private _modelVariants = new DataAwsccSagemakerInferenceExperimentModelVariantsList(this, "model_variants", false);
  public get modelVariants() {
    return this._modelVariants;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataAwsccSagemakerInferenceExperimentScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // shadow_mode_config - computed: true, optional: false, required: false
  private _shadowModeConfig = new DataAwsccSagemakerInferenceExperimentShadowModeConfigOutputReference(this, "shadow_mode_config");
  public get shadowModeConfig() {
    return this._shadowModeConfig;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSagemakerInferenceExperimentTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
