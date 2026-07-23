// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cloudwatch_composite_alarm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCloudwatchCompositeAlarmConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cloudwatch_composite_alarm#id DataAwsccCloudwatchCompositeAlarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCloudwatchCompositeAlarmTags {
}

export function dataAwsccCloudwatchCompositeAlarmTagsToTerraform(struct?: DataAwsccCloudwatchCompositeAlarmTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudwatchCompositeAlarmTagsToHclTerraform(struct?: DataAwsccCloudwatchCompositeAlarmTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudwatchCompositeAlarmTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudwatchCompositeAlarmTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudwatchCompositeAlarmTags | undefined) {
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

export class DataAwsccCloudwatchCompositeAlarmTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudwatchCompositeAlarmTagsOutputReference {
    return new DataAwsccCloudwatchCompositeAlarmTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cloudwatch_composite_alarm awscc_cloudwatch_composite_alarm}
*/
export class DataAwsccCloudwatchCompositeAlarm extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudwatch_composite_alarm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCloudwatchCompositeAlarm resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCloudwatchCompositeAlarm to import
  * @param importFromId The id of the existing DataAwsccCloudwatchCompositeAlarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cloudwatch_composite_alarm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCloudwatchCompositeAlarm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudwatch_composite_alarm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cloudwatch_composite_alarm awscc_cloudwatch_composite_alarm} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudwatchCompositeAlarmConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudwatchCompositeAlarmConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudwatch_composite_alarm',
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

  // actions_enabled - computed: true, optional: false, required: false
  public get actionsEnabled() {
    return this.getBooleanAttribute('actions_enabled');
  }

  // actions_suppressor - computed: true, optional: false, required: false
  public get actionsSuppressor() {
    return this.getStringAttribute('actions_suppressor');
  }

  // actions_suppressor_extension_period - computed: true, optional: false, required: false
  public get actionsSuppressorExtensionPeriod() {
    return this.getNumberAttribute('actions_suppressor_extension_period');
  }

  // actions_suppressor_wait_period - computed: true, optional: false, required: false
  public get actionsSuppressorWaitPeriod() {
    return this.getNumberAttribute('actions_suppressor_wait_period');
  }

  // alarm_actions - computed: true, optional: false, required: false
  public get alarmActions() {
    return this.getListAttribute('alarm_actions');
  }

  // alarm_description - computed: true, optional: false, required: false
  public get alarmDescription() {
    return this.getStringAttribute('alarm_description');
  }

  // alarm_name - computed: true, optional: false, required: false
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }

  // alarm_rule - computed: true, optional: false, required: false
  public get alarmRule() {
    return this.getStringAttribute('alarm_rule');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // insufficient_data_actions - computed: true, optional: false, required: false
  public get insufficientDataActions() {
    return this.getListAttribute('insufficient_data_actions');
  }

  // ok_actions - computed: true, optional: false, required: false
  public get okActions() {
    return this.getListAttribute('ok_actions');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCloudwatchCompositeAlarmTagsList(this, "tags", false);
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
