// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_configuration_set_event_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSesConfigurationSetEventDestinationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_configuration_set_event_destination#id DataAwsccSesConfigurationSetEventDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations {
}

export function dataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsToTerraform(struct?: DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsToHclTerraform(struct?: DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_dimension_value - computed: true, optional: false, required: false
  public get defaultDimensionValue() {
    return this.getStringAttribute('default_dimension_value');
  }

  // dimension_name - computed: true, optional: false, required: false
  public get dimensionName() {
    return this.getStringAttribute('dimension_name');
  }

  // dimension_value_source - computed: true, optional: false, required: false
  public get dimensionValueSource() {
    return this.getStringAttribute('dimension_value_source');
  }
}

export class DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference {
    return new DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination {
}

export function dataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationToTerraform(struct?: DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationToHclTerraform(struct?: DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension_configurations - computed: true, optional: false, required: false
  private _dimensionConfigurations = new DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList(this, "dimension_configurations", false);
  public get dimensionConfigurations() {
    return this._dimensionConfigurations;
  }
}
export interface DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination {
}

export function dataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationToTerraform(struct?: DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationToHclTerraform(struct?: DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_bus_arn - computed: true, optional: false, required: false
  public get eventBusArn() {
    return this.getStringAttribute('event_bus_arn');
  }
}
export interface DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination {
}

export function dataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationToTerraform(struct?: DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationToHclTerraform(struct?: DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delivery_stream_arn - computed: true, optional: false, required: false
  public get deliveryStreamArn() {
    return this.getStringAttribute('delivery_stream_arn');
  }

  // iam_role_arn - computed: true, optional: false, required: false
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
}
export interface DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination {
}

export function dataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationToTerraform(struct?: DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationToHclTerraform(struct?: DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // topic_arn - computed: true, optional: false, required: false
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
}
export interface DataAwsccSesConfigurationSetEventDestinationEventDestination {
}

export function dataAwsccSesConfigurationSetEventDestinationEventDestinationToTerraform(struct?: DataAwsccSesConfigurationSetEventDestinationEventDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesConfigurationSetEventDestinationEventDestinationToHclTerraform(struct?: DataAwsccSesConfigurationSetEventDestinationEventDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesConfigurationSetEventDestinationEventDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesConfigurationSetEventDestinationEventDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_destination - computed: true, optional: false, required: false
  private _cloudwatchDestination = new DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference(this, "cloudwatch_destination");
  public get cloudwatchDestination() {
    return this._cloudwatchDestination;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // event_bridge_destination - computed: true, optional: false, required: false
  private _eventBridgeDestination = new DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference(this, "event_bridge_destination");
  public get eventBridgeDestination() {
    return this._eventBridgeDestination;
  }

  // kinesis_firehose_destination - computed: true, optional: false, required: false
  private _kinesisFirehoseDestination = new DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference(this, "kinesis_firehose_destination");
  public get kinesisFirehoseDestination() {
    return this._kinesisFirehoseDestination;
  }

  // matching_event_types - computed: true, optional: false, required: false
  public get matchingEventTypes() {
    return this.getListAttribute('matching_event_types');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sns_destination - computed: true, optional: false, required: false
  private _snsDestination = new DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference(this, "sns_destination");
  public get snsDestination() {
    return this._snsDestination;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_configuration_set_event_destination awscc_ses_configuration_set_event_destination}
*/
export class DataAwsccSesConfigurationSetEventDestination extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ses_configuration_set_event_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSesConfigurationSetEventDestination resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSesConfigurationSetEventDestination to import
  * @param importFromId The id of the existing DataAwsccSesConfigurationSetEventDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_configuration_set_event_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSesConfigurationSetEventDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_configuration_set_event_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_configuration_set_event_destination awscc_ses_configuration_set_event_destination} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSesConfigurationSetEventDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSesConfigurationSetEventDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ses_configuration_set_event_destination',
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

  // configuration_set_event_destination_id - computed: true, optional: false, required: false
  public get configurationSetEventDestinationId() {
    return this.getStringAttribute('configuration_set_event_destination_id');
  }

  // configuration_set_name - computed: true, optional: false, required: false
  public get configurationSetName() {
    return this.getStringAttribute('configuration_set_name');
  }

  // event_destination - computed: true, optional: false, required: false
  private _eventDestination = new DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference(this, "event_destination");
  public get eventDestination() {
    return this._eventDestination;
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
