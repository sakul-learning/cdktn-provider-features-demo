// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotanalytics_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotanalyticsPipelineConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotanalytics_pipeline#id DataAwsccIotanalyticsPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes {
}

export function dataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesToTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesToHclTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new cdktn.StringMap(this, "attributes");
  public get attributes() {
    return this._attributes;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
  }
}
export interface DataAwsccIotanalyticsPipelinePipelineActivitiesChannel {
}

export function dataAwsccIotanalyticsPipelinePipelineActivitiesChannelToTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesChannel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsPipelinePipelineActivitiesChannelToHclTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesChannel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsPipelinePipelineActivitiesChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsPipelinePipelineActivitiesChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
  }
}
export interface DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore {
}

export function dataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreToTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreToHclTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datastore_name - computed: true, optional: false, required: false
  public get datastoreName() {
    return this.getStringAttribute('datastore_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich {
}

export function dataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichToTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichToHclTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // thing_name - computed: true, optional: false, required: false
  public get thingName() {
    return this.getStringAttribute('thing_name');
  }
}
export interface DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich {
}

export function dataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichToTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichToHclTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // thing_name - computed: true, optional: false, required: false
  public get thingName() {
    return this.getStringAttribute('thing_name');
  }
}
export interface DataAwsccIotanalyticsPipelinePipelineActivitiesFilter {
}

export function dataAwsccIotanalyticsPipelinePipelineActivitiesFilterToTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsPipelinePipelineActivitiesFilterToHclTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsPipelinePipelineActivitiesFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsPipelinePipelineActivitiesFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
  }
}
export interface DataAwsccIotanalyticsPipelinePipelineActivitiesLambda {
}

export function dataAwsccIotanalyticsPipelinePipelineActivitiesLambdaToTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsPipelinePipelineActivitiesLambdaToHclTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsPipelinePipelineActivitiesLambda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsPipelinePipelineActivitiesLambda | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_size - computed: true, optional: false, required: false
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }

  // lambda_name - computed: true, optional: false, required: false
  public get lambdaName() {
    return this.getStringAttribute('lambda_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
  }
}
export interface DataAwsccIotanalyticsPipelinePipelineActivitiesMath {
}

export function dataAwsccIotanalyticsPipelinePipelineActivitiesMathToTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesMath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsPipelinePipelineActivitiesMathToHclTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesMath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsPipelinePipelineActivitiesMath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsPipelinePipelineActivitiesMath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // math - computed: true, optional: false, required: false
  public get math() {
    return this.getStringAttribute('math');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
  }
}
export interface DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes {
}

export function dataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesToTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesToHclTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.getListAttribute('attributes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
  }
}
export interface DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes {
}

export function dataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesToTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesToHclTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.getListAttribute('attributes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
  }
}
export interface DataAwsccIotanalyticsPipelinePipelineActivities {
}

export function dataAwsccIotanalyticsPipelinePipelineActivitiesToTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsPipelinePipelineActivitiesToHclTerraform(struct?: DataAwsccIotanalyticsPipelinePipelineActivities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotanalyticsPipelinePipelineActivities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsPipelinePipelineActivities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_attributes - computed: true, optional: false, required: false
  private _addAttributes = new DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference(this, "add_attributes");
  public get addAttributes() {
    return this._addAttributes;
  }

  // channel - computed: true, optional: false, required: false
  private _channel = new DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference(this, "channel");
  public get channel() {
    return this._channel;
  }

  // datastore - computed: true, optional: false, required: false
  private _datastore = new DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference(this, "datastore");
  public get datastore() {
    return this._datastore;
  }

  // device_registry_enrich - computed: true, optional: false, required: false
  private _deviceRegistryEnrich = new DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference(this, "device_registry_enrich");
  public get deviceRegistryEnrich() {
    return this._deviceRegistryEnrich;
  }

  // device_shadow_enrich - computed: true, optional: false, required: false
  private _deviceShadowEnrich = new DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference(this, "device_shadow_enrich");
  public get deviceShadowEnrich() {
    return this._deviceShadowEnrich;
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }

  // lambda - computed: true, optional: false, required: false
  private _lambda = new DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }

  // math - computed: true, optional: false, required: false
  private _math = new DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference(this, "math");
  public get math() {
    return this._math;
  }

  // remove_attributes - computed: true, optional: false, required: false
  private _removeAttributes = new DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference(this, "remove_attributes");
  public get removeAttributes() {
    return this._removeAttributes;
  }

  // select_attributes - computed: true, optional: false, required: false
  private _selectAttributes = new DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference(this, "select_attributes");
  public get selectAttributes() {
    return this._selectAttributes;
  }
}

export class DataAwsccIotanalyticsPipelinePipelineActivitiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference {
    return new DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotanalyticsPipelineTags {
}

export function dataAwsccIotanalyticsPipelineTagsToTerraform(struct?: DataAwsccIotanalyticsPipelineTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotanalyticsPipelineTagsToHclTerraform(struct?: DataAwsccIotanalyticsPipelineTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotanalyticsPipelineTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotanalyticsPipelineTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotanalyticsPipelineTags | undefined) {
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

export class DataAwsccIotanalyticsPipelineTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotanalyticsPipelineTagsOutputReference {
    return new DataAwsccIotanalyticsPipelineTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotanalytics_pipeline awscc_iotanalytics_pipeline}
*/
export class DataAwsccIotanalyticsPipeline extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotanalytics_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotanalyticsPipeline resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotanalyticsPipeline to import
  * @param importFromId The id of the existing DataAwsccIotanalyticsPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotanalytics_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotanalyticsPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotanalytics_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotanalytics_pipeline awscc_iotanalytics_pipeline} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotanalyticsPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotanalyticsPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotanalytics_pipeline',
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

  // pipeline_activities - computed: true, optional: false, required: false
  private _pipelineActivities = new DataAwsccIotanalyticsPipelinePipelineActivitiesList(this, "pipeline_activities", false);
  public get pipelineActivities() {
    return this._pipelineActivities;
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // pipeline_name - computed: true, optional: false, required: false
  public get pipelineName() {
    return this.getStringAttribute('pipeline_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotanalyticsPipelineTagsList(this, "tags", false);
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
