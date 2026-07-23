// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotanalyticsPipelineConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#pipeline_activities IotanalyticsPipeline#pipeline_activities}
  */
  readonly pipelineActivities: IotanalyticsPipelinePipelineActivities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#pipeline_name IotanalyticsPipeline#pipeline_name}
  */
  readonly pipelineName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#tags IotanalyticsPipeline#tags}
  */
  readonly tags?: IotanalyticsPipelineTags[] | cdktn.IResolvable;
}
export interface IotanalyticsPipelinePipelineActivitiesAddAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#attributes IotanalyticsPipeline#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}
  */
  readonly next?: string;
}

export function iotanalyticsPipelinePipelineActivitiesAddAttributesToTerraform(struct?: IotanalyticsPipelinePipelineActivitiesAddAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.attributes),
    name: cdktn.stringToTerraform(struct!.name),
    next: cdktn.stringToTerraform(struct!.next),
  }
}


export function iotanalyticsPipelinePipelineActivitiesAddAttributesToHclTerraform(struct?: IotanalyticsPipelinePipelineActivitiesAddAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next: {
      value: cdktn.stringToHclTerraform(struct!.next),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsPipelinePipelineActivitiesAddAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._next !== undefined) {
      hasAnyValues = true;
      internalValueResult.next = this._next;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsPipelinePipelineActivitiesAddAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._name = undefined;
      this._next = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
      this._name = value.name;
      this._next = value.next;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // next - computed: true, optional: true, required: false
  private _next?: string; 
  public get next() {
    return this.getStringAttribute('next');
  }
  public set next(value: string) {
    this._next = value;
  }
  public resetNext() {
    this._next = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextInput() {
    return this._next;
  }
}
export interface IotanalyticsPipelinePipelineActivitiesChannel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#channel_name IotanalyticsPipeline#channel_name}
  */
  readonly channelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}
  */
  readonly next?: string;
}

export function iotanalyticsPipelinePipelineActivitiesChannelToTerraform(struct?: IotanalyticsPipelinePipelineActivitiesChannel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel_name: cdktn.stringToTerraform(struct!.channelName),
    name: cdktn.stringToTerraform(struct!.name),
    next: cdktn.stringToTerraform(struct!.next),
  }
}


export function iotanalyticsPipelinePipelineActivitiesChannelToHclTerraform(struct?: IotanalyticsPipelinePipelineActivitiesChannel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel_name: {
      value: cdktn.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next: {
      value: cdktn.stringToHclTerraform(struct!.next),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsPipelinePipelineActivitiesChannelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsPipelinePipelineActivitiesChannel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._next !== undefined) {
      hasAnyValues = true;
      internalValueResult.next = this._next;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsPipelinePipelineActivitiesChannel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelName = undefined;
      this._name = undefined;
      this._next = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelName = value.channelName;
      this._name = value.name;
      this._next = value.next;
    }
  }

  // channel_name - computed: true, optional: true, required: false
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  public resetChannelName() {
    this._channelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // next - computed: true, optional: true, required: false
  private _next?: string; 
  public get next() {
    return this.getStringAttribute('next');
  }
  public set next(value: string) {
    this._next = value;
  }
  public resetNext() {
    this._next = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextInput() {
    return this._next;
  }
}
export interface IotanalyticsPipelinePipelineActivitiesDatastore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#datastore_name IotanalyticsPipeline#datastore_name}
  */
  readonly datastoreName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}
  */
  readonly name?: string;
}

export function iotanalyticsPipelinePipelineActivitiesDatastoreToTerraform(struct?: IotanalyticsPipelinePipelineActivitiesDatastore | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    datastore_name: cdktn.stringToTerraform(struct!.datastoreName),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function iotanalyticsPipelinePipelineActivitiesDatastoreToHclTerraform(struct?: IotanalyticsPipelinePipelineActivitiesDatastore | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    datastore_name: {
      value: cdktn.stringToHclTerraform(struct!.datastoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsPipelinePipelineActivitiesDatastore | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreName = this._datastoreName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsPipelinePipelineActivitiesDatastore | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datastoreName = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datastoreName = value.datastoreName;
      this._name = value.name;
    }
  }

  // datastore_name - computed: true, optional: true, required: false
  private _datastoreName?: string; 
  public get datastoreName() {
    return this.getStringAttribute('datastore_name');
  }
  public set datastoreName(value: string) {
    this._datastoreName = value;
  }
  public resetDatastoreName() {
    this._datastoreName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreNameInput() {
    return this._datastoreName;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#attribute IotanalyticsPipeline#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}
  */
  readonly next?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#role_arn IotanalyticsPipeline#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#thing_name IotanalyticsPipeline#thing_name}
  */
  readonly thingName?: string;
}

export function iotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichToTerraform(struct?: IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
    name: cdktn.stringToTerraform(struct!.name),
    next: cdktn.stringToTerraform(struct!.next),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    thing_name: cdktn.stringToTerraform(struct!.thingName),
  }
}


export function iotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichToHclTerraform(struct?: IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next: {
      value: cdktn.stringToHclTerraform(struct!.next),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thing_name: {
      value: cdktn.stringToHclTerraform(struct!.thingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._next !== undefined) {
      hasAnyValues = true;
      internalValueResult.next = this._next;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._thingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.thingName = this._thingName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._name = undefined;
      this._next = undefined;
      this._roleArn = undefined;
      this._thingName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._name = value.name;
      this._next = value.next;
      this._roleArn = value.roleArn;
      this._thingName = value.thingName;
    }
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // next - computed: true, optional: true, required: false
  private _next?: string; 
  public get next() {
    return this.getStringAttribute('next');
  }
  public set next(value: string) {
    this._next = value;
  }
  public resetNext() {
    this._next = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextInput() {
    return this._next;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // thing_name - computed: true, optional: true, required: false
  private _thingName?: string; 
  public get thingName() {
    return this.getStringAttribute('thing_name');
  }
  public set thingName(value: string) {
    this._thingName = value;
  }
  public resetThingName() {
    this._thingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingNameInput() {
    return this._thingName;
  }
}
export interface IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#attribute IotanalyticsPipeline#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}
  */
  readonly next?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#role_arn IotanalyticsPipeline#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#thing_name IotanalyticsPipeline#thing_name}
  */
  readonly thingName?: string;
}

export function iotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichToTerraform(struct?: IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
    name: cdktn.stringToTerraform(struct!.name),
    next: cdktn.stringToTerraform(struct!.next),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    thing_name: cdktn.stringToTerraform(struct!.thingName),
  }
}


export function iotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichToHclTerraform(struct?: IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next: {
      value: cdktn.stringToHclTerraform(struct!.next),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thing_name: {
      value: cdktn.stringToHclTerraform(struct!.thingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._next !== undefined) {
      hasAnyValues = true;
      internalValueResult.next = this._next;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._thingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.thingName = this._thingName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._name = undefined;
      this._next = undefined;
      this._roleArn = undefined;
      this._thingName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._name = value.name;
      this._next = value.next;
      this._roleArn = value.roleArn;
      this._thingName = value.thingName;
    }
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // next - computed: true, optional: true, required: false
  private _next?: string; 
  public get next() {
    return this.getStringAttribute('next');
  }
  public set next(value: string) {
    this._next = value;
  }
  public resetNext() {
    this._next = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextInput() {
    return this._next;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // thing_name - computed: true, optional: true, required: false
  private _thingName?: string; 
  public get thingName() {
    return this.getStringAttribute('thing_name');
  }
  public set thingName(value: string) {
    this._thingName = value;
  }
  public resetThingName() {
    this._thingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingNameInput() {
    return this._thingName;
  }
}
export interface IotanalyticsPipelinePipelineActivitiesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#filter IotanalyticsPipeline#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}
  */
  readonly next?: string;
}

export function iotanalyticsPipelinePipelineActivitiesFilterToTerraform(struct?: IotanalyticsPipelinePipelineActivitiesFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter: cdktn.stringToTerraform(struct!.filter),
    name: cdktn.stringToTerraform(struct!.name),
    next: cdktn.stringToTerraform(struct!.next),
  }
}


export function iotanalyticsPipelinePipelineActivitiesFilterToHclTerraform(struct?: IotanalyticsPipelinePipelineActivitiesFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter: {
      value: cdktn.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next: {
      value: cdktn.stringToHclTerraform(struct!.next),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsPipelinePipelineActivitiesFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsPipelinePipelineActivitiesFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._next !== undefined) {
      hasAnyValues = true;
      internalValueResult.next = this._next;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsPipelinePipelineActivitiesFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._name = undefined;
      this._next = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._name = value.name;
      this._next = value.next;
    }
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // next - computed: true, optional: true, required: false
  private _next?: string; 
  public get next() {
    return this.getStringAttribute('next');
  }
  public set next(value: string) {
    this._next = value;
  }
  public resetNext() {
    this._next = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextInput() {
    return this._next;
  }
}
export interface IotanalyticsPipelinePipelineActivitiesLambda {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#batch_size IotanalyticsPipeline#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#lambda_name IotanalyticsPipeline#lambda_name}
  */
  readonly lambdaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}
  */
  readonly next?: string;
}

export function iotanalyticsPipelinePipelineActivitiesLambdaToTerraform(struct?: IotanalyticsPipelinePipelineActivitiesLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_size: cdktn.numberToTerraform(struct!.batchSize),
    lambda_name: cdktn.stringToTerraform(struct!.lambdaName),
    name: cdktn.stringToTerraform(struct!.name),
    next: cdktn.stringToTerraform(struct!.next),
  }
}


export function iotanalyticsPipelinePipelineActivitiesLambdaToHclTerraform(struct?: IotanalyticsPipelinePipelineActivitiesLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_size: {
      value: cdktn.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lambda_name: {
      value: cdktn.stringToHclTerraform(struct!.lambdaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next: {
      value: cdktn.stringToHclTerraform(struct!.next),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsPipelinePipelineActivitiesLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsPipelinePipelineActivitiesLambda | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._lambdaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaName = this._lambdaName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._next !== undefined) {
      hasAnyValues = true;
      internalValueResult.next = this._next;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsPipelinePipelineActivitiesLambda | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchSize = undefined;
      this._lambdaName = undefined;
      this._name = undefined;
      this._next = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchSize = value.batchSize;
      this._lambdaName = value.lambdaName;
      this._name = value.name;
      this._next = value.next;
    }
  }

  // batch_size - computed: true, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // lambda_name - computed: true, optional: true, required: false
  private _lambdaName?: string; 
  public get lambdaName() {
    return this.getStringAttribute('lambda_name');
  }
  public set lambdaName(value: string) {
    this._lambdaName = value;
  }
  public resetLambdaName() {
    this._lambdaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaNameInput() {
    return this._lambdaName;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // next - computed: true, optional: true, required: false
  private _next?: string; 
  public get next() {
    return this.getStringAttribute('next');
  }
  public set next(value: string) {
    this._next = value;
  }
  public resetNext() {
    this._next = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextInput() {
    return this._next;
  }
}
export interface IotanalyticsPipelinePipelineActivitiesMath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#attribute IotanalyticsPipeline#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#math IotanalyticsPipeline#math}
  */
  readonly math?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}
  */
  readonly next?: string;
}

export function iotanalyticsPipelinePipelineActivitiesMathToTerraform(struct?: IotanalyticsPipelinePipelineActivitiesMath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
    math: cdktn.stringToTerraform(struct!.math),
    name: cdktn.stringToTerraform(struct!.name),
    next: cdktn.stringToTerraform(struct!.next),
  }
}


export function iotanalyticsPipelinePipelineActivitiesMathToHclTerraform(struct?: IotanalyticsPipelinePipelineActivitiesMath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    math: {
      value: cdktn.stringToHclTerraform(struct!.math),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next: {
      value: cdktn.stringToHclTerraform(struct!.next),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsPipelinePipelineActivitiesMathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsPipelinePipelineActivitiesMath | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._math !== undefined) {
      hasAnyValues = true;
      internalValueResult.math = this._math;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._next !== undefined) {
      hasAnyValues = true;
      internalValueResult.next = this._next;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsPipelinePipelineActivitiesMath | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._math = undefined;
      this._name = undefined;
      this._next = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._math = value.math;
      this._name = value.name;
      this._next = value.next;
    }
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // math - computed: true, optional: true, required: false
  private _math?: string; 
  public get math() {
    return this.getStringAttribute('math');
  }
  public set math(value: string) {
    this._math = value;
  }
  public resetMath() {
    this._math = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mathInput() {
    return this._math;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // next - computed: true, optional: true, required: false
  private _next?: string; 
  public get next() {
    return this.getStringAttribute('next');
  }
  public set next(value: string) {
    this._next = value;
  }
  public resetNext() {
    this._next = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextInput() {
    return this._next;
  }
}
export interface IotanalyticsPipelinePipelineActivitiesRemoveAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#attributes IotanalyticsPipeline#attributes}
  */
  readonly attributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}
  */
  readonly next?: string;
}

export function iotanalyticsPipelinePipelineActivitiesRemoveAttributesToTerraform(struct?: IotanalyticsPipelinePipelineActivitiesRemoveAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attributes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.attributes),
    name: cdktn.stringToTerraform(struct!.name),
    next: cdktn.stringToTerraform(struct!.next),
  }
}


export function iotanalyticsPipelinePipelineActivitiesRemoveAttributesToHclTerraform(struct?: IotanalyticsPipelinePipelineActivitiesRemoveAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attributes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.attributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next: {
      value: cdktn.stringToHclTerraform(struct!.next),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsPipelinePipelineActivitiesRemoveAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._next !== undefined) {
      hasAnyValues = true;
      internalValueResult.next = this._next;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsPipelinePipelineActivitiesRemoveAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._name = undefined;
      this._next = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
      this._name = value.name;
      this._next = value.next;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // next - computed: true, optional: true, required: false
  private _next?: string; 
  public get next() {
    return this.getStringAttribute('next');
  }
  public set next(value: string) {
    this._next = value;
  }
  public resetNext() {
    this._next = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextInput() {
    return this._next;
  }
}
export interface IotanalyticsPipelinePipelineActivitiesSelectAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#attributes IotanalyticsPipeline#attributes}
  */
  readonly attributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}
  */
  readonly next?: string;
}

export function iotanalyticsPipelinePipelineActivitiesSelectAttributesToTerraform(struct?: IotanalyticsPipelinePipelineActivitiesSelectAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attributes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.attributes),
    name: cdktn.stringToTerraform(struct!.name),
    next: cdktn.stringToTerraform(struct!.next),
  }
}


export function iotanalyticsPipelinePipelineActivitiesSelectAttributesToHclTerraform(struct?: IotanalyticsPipelinePipelineActivitiesSelectAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attributes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.attributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next: {
      value: cdktn.stringToHclTerraform(struct!.next),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotanalyticsPipelinePipelineActivitiesSelectAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._next !== undefined) {
      hasAnyValues = true;
      internalValueResult.next = this._next;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsPipelinePipelineActivitiesSelectAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._name = undefined;
      this._next = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
      this._name = value.name;
      this._next = value.next;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // next - computed: true, optional: true, required: false
  private _next?: string; 
  public get next() {
    return this.getStringAttribute('next');
  }
  public set next(value: string) {
    this._next = value;
  }
  public resetNext() {
    this._next = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextInput() {
    return this._next;
  }
}
export interface IotanalyticsPipelinePipelineActivities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#add_attributes IotanalyticsPipeline#add_attributes}
  */
  readonly addAttributes?: IotanalyticsPipelinePipelineActivitiesAddAttributes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#channel IotanalyticsPipeline#channel}
  */
  readonly channel?: IotanalyticsPipelinePipelineActivitiesChannel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#datastore IotanalyticsPipeline#datastore}
  */
  readonly datastore?: IotanalyticsPipelinePipelineActivitiesDatastore;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#device_registry_enrich IotanalyticsPipeline#device_registry_enrich}
  */
  readonly deviceRegistryEnrich?: IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#device_shadow_enrich IotanalyticsPipeline#device_shadow_enrich}
  */
  readonly deviceShadowEnrich?: IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#filter IotanalyticsPipeline#filter}
  */
  readonly filter?: IotanalyticsPipelinePipelineActivitiesFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#lambda IotanalyticsPipeline#lambda}
  */
  readonly lambda?: IotanalyticsPipelinePipelineActivitiesLambda;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#math IotanalyticsPipeline#math}
  */
  readonly math?: IotanalyticsPipelinePipelineActivitiesMath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#remove_attributes IotanalyticsPipeline#remove_attributes}
  */
  readonly removeAttributes?: IotanalyticsPipelinePipelineActivitiesRemoveAttributes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#select_attributes IotanalyticsPipeline#select_attributes}
  */
  readonly selectAttributes?: IotanalyticsPipelinePipelineActivitiesSelectAttributes;
}

export function iotanalyticsPipelinePipelineActivitiesToTerraform(struct?: IotanalyticsPipelinePipelineActivities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    add_attributes: iotanalyticsPipelinePipelineActivitiesAddAttributesToTerraform(struct!.addAttributes),
    channel: iotanalyticsPipelinePipelineActivitiesChannelToTerraform(struct!.channel),
    datastore: iotanalyticsPipelinePipelineActivitiesDatastoreToTerraform(struct!.datastore),
    device_registry_enrich: iotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichToTerraform(struct!.deviceRegistryEnrich),
    device_shadow_enrich: iotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichToTerraform(struct!.deviceShadowEnrich),
    filter: iotanalyticsPipelinePipelineActivitiesFilterToTerraform(struct!.filter),
    lambda: iotanalyticsPipelinePipelineActivitiesLambdaToTerraform(struct!.lambda),
    math: iotanalyticsPipelinePipelineActivitiesMathToTerraform(struct!.math),
    remove_attributes: iotanalyticsPipelinePipelineActivitiesRemoveAttributesToTerraform(struct!.removeAttributes),
    select_attributes: iotanalyticsPipelinePipelineActivitiesSelectAttributesToTerraform(struct!.selectAttributes),
  }
}


export function iotanalyticsPipelinePipelineActivitiesToHclTerraform(struct?: IotanalyticsPipelinePipelineActivities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    add_attributes: {
      value: iotanalyticsPipelinePipelineActivitiesAddAttributesToHclTerraform(struct!.addAttributes),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsPipelinePipelineActivitiesAddAttributes",
    },
    channel: {
      value: iotanalyticsPipelinePipelineActivitiesChannelToHclTerraform(struct!.channel),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsPipelinePipelineActivitiesChannel",
    },
    datastore: {
      value: iotanalyticsPipelinePipelineActivitiesDatastoreToHclTerraform(struct!.datastore),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsPipelinePipelineActivitiesDatastore",
    },
    device_registry_enrich: {
      value: iotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichToHclTerraform(struct!.deviceRegistryEnrich),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich",
    },
    device_shadow_enrich: {
      value: iotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichToHclTerraform(struct!.deviceShadowEnrich),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich",
    },
    filter: {
      value: iotanalyticsPipelinePipelineActivitiesFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsPipelinePipelineActivitiesFilter",
    },
    lambda: {
      value: iotanalyticsPipelinePipelineActivitiesLambdaToHclTerraform(struct!.lambda),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsPipelinePipelineActivitiesLambda",
    },
    math: {
      value: iotanalyticsPipelinePipelineActivitiesMathToHclTerraform(struct!.math),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsPipelinePipelineActivitiesMath",
    },
    remove_attributes: {
      value: iotanalyticsPipelinePipelineActivitiesRemoveAttributesToHclTerraform(struct!.removeAttributes),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsPipelinePipelineActivitiesRemoveAttributes",
    },
    select_attributes: {
      value: iotanalyticsPipelinePipelineActivitiesSelectAttributesToHclTerraform(struct!.selectAttributes),
      isBlock: true,
      type: "struct",
      storageClassType: "IotanalyticsPipelinePipelineActivitiesSelectAttributes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotanalyticsPipelinePipelineActivitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotanalyticsPipelinePipelineActivities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addAttributes = this._addAttributes?.internalValue;
    }
    if (this._channel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel?.internalValue;
    }
    if (this._datastore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastore = this._datastore?.internalValue;
    }
    if (this._deviceRegistryEnrich?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceRegistryEnrich = this._deviceRegistryEnrich?.internalValue;
    }
    if (this._deviceShadowEnrich?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceShadowEnrich = this._deviceShadowEnrich?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    if (this._math?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.math = this._math?.internalValue;
    }
    if (this._removeAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeAttributes = this._removeAttributes?.internalValue;
    }
    if (this._selectAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAttributes = this._selectAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotanalyticsPipelinePipelineActivities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addAttributes.internalValue = undefined;
      this._channel.internalValue = undefined;
      this._datastore.internalValue = undefined;
      this._deviceRegistryEnrich.internalValue = undefined;
      this._deviceShadowEnrich.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._lambda.internalValue = undefined;
      this._math.internalValue = undefined;
      this._removeAttributes.internalValue = undefined;
      this._selectAttributes.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addAttributes.internalValue = value.addAttributes;
      this._channel.internalValue = value.channel;
      this._datastore.internalValue = value.datastore;
      this._deviceRegistryEnrich.internalValue = value.deviceRegistryEnrich;
      this._deviceShadowEnrich.internalValue = value.deviceShadowEnrich;
      this._filter.internalValue = value.filter;
      this._lambda.internalValue = value.lambda;
      this._math.internalValue = value.math;
      this._removeAttributes.internalValue = value.removeAttributes;
      this._selectAttributes.internalValue = value.selectAttributes;
    }
  }

  // add_attributes - computed: true, optional: true, required: false
  private _addAttributes = new IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference(this, "add_attributes");
  public get addAttributes() {
    return this._addAttributes;
  }
  public putAddAttributes(value: IotanalyticsPipelinePipelineActivitiesAddAttributes) {
    this._addAttributes.internalValue = value;
  }
  public resetAddAttributes() {
    this._addAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addAttributesInput() {
    return this._addAttributes.internalValue;
  }

  // channel - computed: true, optional: true, required: false
  private _channel = new IotanalyticsPipelinePipelineActivitiesChannelOutputReference(this, "channel");
  public get channel() {
    return this._channel;
  }
  public putChannel(value: IotanalyticsPipelinePipelineActivitiesChannel) {
    this._channel.internalValue = value;
  }
  public resetChannel() {
    this._channel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel.internalValue;
  }

  // datastore - computed: true, optional: true, required: false
  private _datastore = new IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference(this, "datastore");
  public get datastore() {
    return this._datastore;
  }
  public putDatastore(value: IotanalyticsPipelinePipelineActivitiesDatastore) {
    this._datastore.internalValue = value;
  }
  public resetDatastore() {
    this._datastore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore.internalValue;
  }

  // device_registry_enrich - computed: true, optional: true, required: false
  private _deviceRegistryEnrich = new IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference(this, "device_registry_enrich");
  public get deviceRegistryEnrich() {
    return this._deviceRegistryEnrich;
  }
  public putDeviceRegistryEnrich(value: IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich) {
    this._deviceRegistryEnrich.internalValue = value;
  }
  public resetDeviceRegistryEnrich() {
    this._deviceRegistryEnrich.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceRegistryEnrichInput() {
    return this._deviceRegistryEnrich.internalValue;
  }

  // device_shadow_enrich - computed: true, optional: true, required: false
  private _deviceShadowEnrich = new IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference(this, "device_shadow_enrich");
  public get deviceShadowEnrich() {
    return this._deviceShadowEnrich;
  }
  public putDeviceShadowEnrich(value: IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich) {
    this._deviceShadowEnrich.internalValue = value;
  }
  public resetDeviceShadowEnrich() {
    this._deviceShadowEnrich.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceShadowEnrichInput() {
    return this._deviceShadowEnrich.internalValue;
  }

  // filter - computed: true, optional: true, required: false
  private _filter = new IotanalyticsPipelinePipelineActivitiesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: IotanalyticsPipelinePipelineActivitiesFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // lambda - computed: true, optional: true, required: false
  private _lambda = new IotanalyticsPipelinePipelineActivitiesLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: IotanalyticsPipelinePipelineActivitiesLambda) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }

  // math - computed: true, optional: true, required: false
  private _math = new IotanalyticsPipelinePipelineActivitiesMathOutputReference(this, "math");
  public get math() {
    return this._math;
  }
  public putMath(value: IotanalyticsPipelinePipelineActivitiesMath) {
    this._math.internalValue = value;
  }
  public resetMath() {
    this._math.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mathInput() {
    return this._math.internalValue;
  }

  // remove_attributes - computed: true, optional: true, required: false
  private _removeAttributes = new IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference(this, "remove_attributes");
  public get removeAttributes() {
    return this._removeAttributes;
  }
  public putRemoveAttributes(value: IotanalyticsPipelinePipelineActivitiesRemoveAttributes) {
    this._removeAttributes.internalValue = value;
  }
  public resetRemoveAttributes() {
    this._removeAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAttributesInput() {
    return this._removeAttributes.internalValue;
  }

  // select_attributes - computed: true, optional: true, required: false
  private _selectAttributes = new IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference(this, "select_attributes");
  public get selectAttributes() {
    return this._selectAttributes;
  }
  public putSelectAttributes(value: IotanalyticsPipelinePipelineActivitiesSelectAttributes) {
    this._selectAttributes.internalValue = value;
  }
  public resetSelectAttributes() {
    this._selectAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAttributesInput() {
    return this._selectAttributes.internalValue;
  }
}

export class IotanalyticsPipelinePipelineActivitiesList extends cdktn.ComplexList {
  public internalValue? : IotanalyticsPipelinePipelineActivities[] | cdktn.IResolvable

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
  public get(index: number): IotanalyticsPipelinePipelineActivitiesOutputReference {
    return new IotanalyticsPipelinePipelineActivitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotanalyticsPipelineTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#key IotanalyticsPipeline#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#value IotanalyticsPipeline#value}
  */
  readonly value?: string;
}

export function iotanalyticsPipelineTagsToTerraform(struct?: IotanalyticsPipelineTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotanalyticsPipelineTagsToHclTerraform(struct?: IotanalyticsPipelineTags | cdktn.IResolvable): any {
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

export class IotanalyticsPipelineTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotanalyticsPipelineTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotanalyticsPipelineTags | cdktn.IResolvable | undefined) {
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

export class IotanalyticsPipelineTagsList extends cdktn.ComplexList {
  public internalValue? : IotanalyticsPipelineTags[] | cdktn.IResolvable

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
  public get(index: number): IotanalyticsPipelineTagsOutputReference {
    return new IotanalyticsPipelineTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline awscc_iotanalytics_pipeline}
*/
export class IotanalyticsPipeline extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotanalytics_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotanalyticsPipeline resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotanalyticsPipeline to import
  * @param importFromId The id of the existing IotanalyticsPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotanalyticsPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotanalytics_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iotanalytics_pipeline awscc_iotanalytics_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotanalyticsPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: IotanalyticsPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotanalytics_pipeline',
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
    this._pipelineActivities.internalValue = config.pipelineActivities;
    this._pipelineName = config.pipelineName;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pipeline_activities - computed: false, optional: false, required: true
  private _pipelineActivities = new IotanalyticsPipelinePipelineActivitiesList(this, "pipeline_activities", false);
  public get pipelineActivities() {
    return this._pipelineActivities;
  }
  public putPipelineActivities(value: IotanalyticsPipelinePipelineActivities[] | cdktn.IResolvable) {
    this._pipelineActivities.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineActivitiesInput() {
    return this._pipelineActivities.internalValue;
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // pipeline_name - computed: true, optional: true, required: false
  private _pipelineName?: string; 
  public get pipelineName() {
    return this.getStringAttribute('pipeline_name');
  }
  public set pipelineName(value: string) {
    this._pipelineName = value;
  }
  public resetPipelineName() {
    this._pipelineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineNameInput() {
    return this._pipelineName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new IotanalyticsPipelineTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IotanalyticsPipelineTags[] | cdktn.IResolvable) {
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
      pipeline_activities: cdktn.listMapper(iotanalyticsPipelinePipelineActivitiesToTerraform, false)(this._pipelineActivities.internalValue),
      pipeline_name: cdktn.stringToTerraform(this._pipelineName),
      tags: cdktn.listMapper(iotanalyticsPipelineTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      pipeline_activities: {
        value: cdktn.listMapperHcl(iotanalyticsPipelinePipelineActivitiesToHclTerraform, false)(this._pipelineActivities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotanalyticsPipelinePipelineActivitiesList",
      },
      pipeline_name: {
        value: cdktn.stringToHclTerraform(this._pipelineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(iotanalyticsPipelineTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotanalyticsPipelineTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
