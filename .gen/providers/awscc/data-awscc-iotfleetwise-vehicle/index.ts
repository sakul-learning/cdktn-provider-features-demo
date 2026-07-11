// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotfleetwise_vehicle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotfleetwiseVehicleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotfleetwise_vehicle#id DataAwsccIotfleetwiseVehicle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate {
}

export function dataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateToTerraform(struct?: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateToHclTerraform(struct?: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic {
}

export function dataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicToTerraform(struct?: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicToHclTerraform(struct?: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state_template_update_rate - computed: true, optional: false, required: false
  private _stateTemplateUpdateRate = new DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference(this, "state_template_update_rate");
  public get stateTemplateUpdateRate() {
    return this._stateTemplateUpdateRate;
  }
}
export interface DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy {
}

export function dataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyToTerraform(struct?: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyToHclTerraform(struct?: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // on_change - computed: true, optional: false, required: false
  public get onChange() {
    return this.getStringAttribute('on_change');
  }

  // periodic - computed: true, optional: false, required: false
  private _periodic = new DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference(this, "periodic");
  public get periodic() {
    return this._periodic;
  }
}
export interface DataAwsccIotfleetwiseVehicleStateTemplates {
}

export function dataAwsccIotfleetwiseVehicleStateTemplatesToTerraform(struct?: DataAwsccIotfleetwiseVehicleStateTemplates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseVehicleStateTemplatesToHclTerraform(struct?: DataAwsccIotfleetwiseVehicleStateTemplates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotfleetwiseVehicleStateTemplates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseVehicleStateTemplates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // state_template_update_strategy - computed: true, optional: false, required: false
  private _stateTemplateUpdateStrategy = new DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference(this, "state_template_update_strategy");
  public get stateTemplateUpdateStrategy() {
    return this._stateTemplateUpdateStrategy;
  }
}

export class DataAwsccIotfleetwiseVehicleStateTemplatesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference {
    return new DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotfleetwiseVehicleTags {
}

export function dataAwsccIotfleetwiseVehicleTagsToTerraform(struct?: DataAwsccIotfleetwiseVehicleTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotfleetwiseVehicleTagsToHclTerraform(struct?: DataAwsccIotfleetwiseVehicleTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotfleetwiseVehicleTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotfleetwiseVehicleTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotfleetwiseVehicleTags | undefined) {
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

export class DataAwsccIotfleetwiseVehicleTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotfleetwiseVehicleTagsOutputReference {
    return new DataAwsccIotfleetwiseVehicleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotfleetwise_vehicle awscc_iotfleetwise_vehicle}
*/
export class DataAwsccIotfleetwiseVehicle extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotfleetwise_vehicle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotfleetwiseVehicle resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotfleetwiseVehicle to import
  * @param importFromId The id of the existing DataAwsccIotfleetwiseVehicle that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotfleetwise_vehicle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotfleetwiseVehicle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotfleetwise_vehicle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotfleetwise_vehicle awscc_iotfleetwise_vehicle} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotfleetwiseVehicleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotfleetwiseVehicleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotfleetwise_vehicle',
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

  // association_behavior - computed: true, optional: false, required: false
  public get associationBehavior() {
    return this.getStringAttribute('association_behavior');
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new cdktn.StringMap(this, "attributes");
  public get attributes() {
    return this._attributes;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // decoder_manifest_arn - computed: true, optional: false, required: false
  public get decoderManifestArn() {
    return this.getStringAttribute('decoder_manifest_arn');
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

  // last_modification_time - computed: true, optional: false, required: false
  public get lastModificationTime() {
    return this.getStringAttribute('last_modification_time');
  }

  // model_manifest_arn - computed: true, optional: false, required: false
  public get modelManifestArn() {
    return this.getStringAttribute('model_manifest_arn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state_templates - computed: true, optional: false, required: false
  private _stateTemplates = new DataAwsccIotfleetwiseVehicleStateTemplatesList(this, "state_templates", true);
  public get stateTemplates() {
    return this._stateTemplates;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotfleetwiseVehicleTagsList(this, "tags", true);
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
