// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sqs_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSqsQueueConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sqs_queue#id DataAwsccSqsQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSqsQueueTags {
}

export function dataAwsccSqsQueueTagsToTerraform(struct?: DataAwsccSqsQueueTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSqsQueueTagsToHclTerraform(struct?: DataAwsccSqsQueueTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSqsQueueTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSqsQueueTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSqsQueueTags | undefined) {
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

export class DataAwsccSqsQueueTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSqsQueueTagsOutputReference {
    return new DataAwsccSqsQueueTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sqs_queue awscc_sqs_queue}
*/
export class DataAwsccSqsQueue extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sqs_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSqsQueue resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSqsQueue to import
  * @param importFromId The id of the existing DataAwsccSqsQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sqs_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSqsQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sqs_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/sqs_queue awscc_sqs_queue} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSqsQueueConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSqsQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sqs_queue',
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

  // content_based_deduplication - computed: true, optional: false, required: false
  public get contentBasedDeduplication() {
    return this.getBooleanAttribute('content_based_deduplication');
  }

  // deduplication_scope - computed: true, optional: false, required: false
  public get deduplicationScope() {
    return this.getStringAttribute('deduplication_scope');
  }

  // delay_seconds - computed: true, optional: false, required: false
  public get delaySeconds() {
    return this.getNumberAttribute('delay_seconds');
  }

  // fifo_queue - computed: true, optional: false, required: false
  public get fifoQueue() {
    return this.getBooleanAttribute('fifo_queue');
  }

  // fifo_throughput_limit - computed: true, optional: false, required: false
  public get fifoThroughputLimit() {
    return this.getStringAttribute('fifo_throughput_limit');
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

  // kms_data_key_reuse_period_seconds - computed: true, optional: false, required: false
  public get kmsDataKeyReusePeriodSeconds() {
    return this.getNumberAttribute('kms_data_key_reuse_period_seconds');
  }

  // kms_master_key_id - computed: true, optional: false, required: false
  public get kmsMasterKeyId() {
    return this.getStringAttribute('kms_master_key_id');
  }

  // maximum_message_size - computed: true, optional: false, required: false
  public get maximumMessageSize() {
    return this.getNumberAttribute('maximum_message_size');
  }

  // message_retention_period - computed: true, optional: false, required: false
  public get messageRetentionPeriod() {
    return this.getNumberAttribute('message_retention_period');
  }

  // queue_name - computed: true, optional: false, required: false
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }

  // queue_url - computed: true, optional: false, required: false
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }

  // receive_message_wait_time_seconds - computed: true, optional: false, required: false
  public get receiveMessageWaitTimeSeconds() {
    return this.getNumberAttribute('receive_message_wait_time_seconds');
  }

  // redrive_allow_policy - computed: true, optional: false, required: false
  public get redriveAllowPolicy() {
    return this.getStringAttribute('redrive_allow_policy');
  }

  // redrive_policy - computed: true, optional: false, required: false
  public get redrivePolicy() {
    return this.getStringAttribute('redrive_policy');
  }

  // sqs_managed_sse_enabled - computed: true, optional: false, required: false
  public get sqsManagedSseEnabled() {
    return this.getBooleanAttribute('sqs_managed_sse_enabled');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSqsQueueTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // visibility_timeout - computed: true, optional: false, required: false
  public get visibilityTimeout() {
    return this.getNumberAttribute('visibility_timeout');
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
