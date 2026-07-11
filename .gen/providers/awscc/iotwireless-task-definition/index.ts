// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotwirelessTaskDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether to automatically create tasks using this task definition for all gateways with the specified current version. If false, the task must me created by calling CreateWirelessGatewayTask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#auto_create_tasks IotwirelessTaskDefinition#auto_create_tasks}
  */
  readonly autoCreateTasks: boolean | cdktn.IResolvable;
  /**
  * The list of task definitions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#lo_ra_wan_update_gateway_task_entry IotwirelessTaskDefinition#lo_ra_wan_update_gateway_task_entry}
  */
  readonly loRaWanUpdateGatewayTaskEntry?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry;
  /**
  * The name of the new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#name IotwirelessTaskDefinition#name}
  */
  readonly name?: string;
  /**
  * A list of key-value pairs that contain metadata for the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#tags IotwirelessTaskDefinition#tags}
  */
  readonly tags?: IotwirelessTaskDefinitionTags[] | cdktn.IResolvable;
  /**
  * A filter to list only the wireless gateway task definitions that use this task definition type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#task_definition_type IotwirelessTaskDefinition#task_definition_type}
  */
  readonly taskDefinitionType?: string;
  /**
  * Information about the gateways to update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#update IotwirelessTaskDefinition#update}
  */
  readonly update?: IotwirelessTaskDefinitionUpdate;
}
export interface IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}
  */
  readonly packageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}
  */
  readonly station?: string;
}

export function iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionToTerraform(struct?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    package_version: cdktn.stringToTerraform(struct!.packageVersion),
    station: cdktn.stringToTerraform(struct!.station),
  }
}


export function iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionToHclTerraform(struct?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_version: {
      value: cdktn.stringToHclTerraform(struct!.packageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    station: {
      value: cdktn.stringToHclTerraform(struct!.station),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._packageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageVersion = this._packageVersion;
    }
    if (this._station !== undefined) {
      hasAnyValues = true;
      internalValueResult.station = this._station;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._model = undefined;
      this._packageVersion = undefined;
      this._station = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._model = value.model;
      this._packageVersion = value.packageVersion;
      this._station = value.station;
    }
  }

  // model - computed: true, optional: true, required: false
  private _model?: string;
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // package_version - computed: true, optional: true, required: false
  private _packageVersion?: string;
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }
  public set packageVersion(value: string) {
    this._packageVersion = value;
  }
  public resetPackageVersion() {
    this._packageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageVersionInput() {
    return this._packageVersion;
  }

  // station - computed: true, optional: true, required: false
  private _station?: string;
  public get station() {
    return this.getStringAttribute('station');
  }
  public set station(value: string) {
    this._station = value;
  }
  public resetStation() {
    this._station = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stationInput() {
    return this._station;
  }
}
export interface IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}
  */
  readonly packageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}
  */
  readonly station?: string;
}

export function iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionToTerraform(struct?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    package_version: cdktn.stringToTerraform(struct!.packageVersion),
    station: cdktn.stringToTerraform(struct!.station),
  }
}


export function iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionToHclTerraform(struct?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_version: {
      value: cdktn.stringToHclTerraform(struct!.packageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    station: {
      value: cdktn.stringToHclTerraform(struct!.station),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._packageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageVersion = this._packageVersion;
    }
    if (this._station !== undefined) {
      hasAnyValues = true;
      internalValueResult.station = this._station;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._model = undefined;
      this._packageVersion = undefined;
      this._station = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._model = value.model;
      this._packageVersion = value.packageVersion;
      this._station = value.station;
    }
  }

  // model - computed: true, optional: true, required: false
  private _model?: string;
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // package_version - computed: true, optional: true, required: false
  private _packageVersion?: string;
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }
  public set packageVersion(value: string) {
    this._packageVersion = value;
  }
  public resetPackageVersion() {
    this._packageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageVersionInput() {
    return this._packageVersion;
  }

  // station - computed: true, optional: true, required: false
  private _station?: string;
  public get station() {
    return this.getStringAttribute('station');
  }
  public set station(value: string) {
    this._station = value;
  }
  public resetStation() {
    this._station = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stationInput() {
    return this._station;
  }
}
export interface IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}
  */
  readonly currentVersion?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}
  */
  readonly updateVersion?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion;
}

export function iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryToTerraform(struct?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    current_version: iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionToTerraform(struct!.currentVersion),
    update_version: iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionToTerraform(struct!.updateVersion),
  }
}


export function iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryToHclTerraform(struct?: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    current_version: {
      value: iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionToHclTerraform(struct!.currentVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion",
    },
    update_version: {
      value: iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionToHclTerraform(struct!.updateVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentVersion = this._currentVersion?.internalValue;
    }
    if (this._updateVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateVersion = this._updateVersion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentVersion.internalValue = undefined;
      this._updateVersion.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentVersion.internalValue = value.currentVersion;
      this._updateVersion.internalValue = value.updateVersion;
    }
  }

  // current_version - computed: true, optional: true, required: false
  private _currentVersion = new IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference(this, "current_version");
  public get currentVersion() {
    return this._currentVersion;
  }
  public putCurrentVersion(value: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion) {
    this._currentVersion.internalValue = value;
  }
  public resetCurrentVersion() {
    this._currentVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentVersionInput() {
    return this._currentVersion.internalValue;
  }

  // update_version - computed: true, optional: true, required: false
  private _updateVersion = new IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference(this, "update_version");
  public get updateVersion() {
    return this._updateVersion;
  }
  public putUpdateVersion(value: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion) {
    this._updateVersion.internalValue = value;
  }
  public resetUpdateVersion() {
    this._updateVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateVersionInput() {
    return this._updateVersion.internalValue;
  }
}
export interface IotwirelessTaskDefinitionTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#key IotwirelessTaskDefinition#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#value IotwirelessTaskDefinition#value}
  */
  readonly value?: string;
}

export function iotwirelessTaskDefinitionTagsToTerraform(struct?: IotwirelessTaskDefinitionTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotwirelessTaskDefinitionTagsToHclTerraform(struct?: IotwirelessTaskDefinitionTags | cdktn.IResolvable): any {
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

export class IotwirelessTaskDefinitionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotwirelessTaskDefinitionTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotwirelessTaskDefinitionTags | cdktn.IResolvable | undefined) {
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

export class IotwirelessTaskDefinitionTagsList extends cdktn.ComplexList {
  public internalValue? : IotwirelessTaskDefinitionTags[] | cdktn.IResolvable

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
  public get(index: number): IotwirelessTaskDefinitionTagsOutputReference {
    return new IotwirelessTaskDefinitionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}
  */
  readonly packageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}
  */
  readonly station?: string;
}

export function iotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionToTerraform(struct?: IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    package_version: cdktn.stringToTerraform(struct!.packageVersion),
    station: cdktn.stringToTerraform(struct!.station),
  }
}


export function iotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionToHclTerraform(struct?: IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_version: {
      value: cdktn.stringToHclTerraform(struct!.packageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    station: {
      value: cdktn.stringToHclTerraform(struct!.station),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._packageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageVersion = this._packageVersion;
    }
    if (this._station !== undefined) {
      hasAnyValues = true;
      internalValueResult.station = this._station;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._model = undefined;
      this._packageVersion = undefined;
      this._station = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._model = value.model;
      this._packageVersion = value.packageVersion;
      this._station = value.station;
    }
  }

  // model - computed: true, optional: true, required: false
  private _model?: string;
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // package_version - computed: true, optional: true, required: false
  private _packageVersion?: string;
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }
  public set packageVersion(value: string) {
    this._packageVersion = value;
  }
  public resetPackageVersion() {
    this._packageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageVersionInput() {
    return this._packageVersion;
  }

  // station - computed: true, optional: true, required: false
  private _station?: string;
  public get station() {
    return this.getStringAttribute('station');
  }
  public set station(value: string) {
    this._station = value;
  }
  public resetStation() {
    this._station = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stationInput() {
    return this._station;
  }
}
export interface IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}
  */
  readonly packageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}
  */
  readonly station?: string;
}

export function iotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionToTerraform(struct?: IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    package_version: cdktn.stringToTerraform(struct!.packageVersion),
    station: cdktn.stringToTerraform(struct!.station),
  }
}


export function iotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionToHclTerraform(struct?: IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_version: {
      value: cdktn.stringToHclTerraform(struct!.packageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    station: {
      value: cdktn.stringToHclTerraform(struct!.station),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._packageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageVersion = this._packageVersion;
    }
    if (this._station !== undefined) {
      hasAnyValues = true;
      internalValueResult.station = this._station;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._model = undefined;
      this._packageVersion = undefined;
      this._station = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._model = value.model;
      this._packageVersion = value.packageVersion;
      this._station = value.station;
    }
  }

  // model - computed: true, optional: true, required: false
  private _model?: string;
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // package_version - computed: true, optional: true, required: false
  private _packageVersion?: string;
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }
  public set packageVersion(value: string) {
    this._packageVersion = value;
  }
  public resetPackageVersion() {
    this._packageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageVersionInput() {
    return this._packageVersion;
  }

  // station - computed: true, optional: true, required: false
  private _station?: string;
  public get station() {
    return this.getStringAttribute('station');
  }
  public set station(value: string) {
    this._station = value;
  }
  public resetStation() {
    this._station = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stationInput() {
    return this._station;
  }
}
export interface IotwirelessTaskDefinitionUpdateLoRaWan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}
  */
  readonly currentVersion?: IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#sig_key_crc IotwirelessTaskDefinition#sig_key_crc}
  */
  readonly sigKeyCrc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#update_signature IotwirelessTaskDefinition#update_signature}
  */
  readonly updateSignature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}
  */
  readonly updateVersion?: IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion;
}

export function iotwirelessTaskDefinitionUpdateLoRaWanToTerraform(struct?: IotwirelessTaskDefinitionUpdateLoRaWan | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    current_version: iotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionToTerraform(struct!.currentVersion),
    sig_key_crc: cdktn.numberToTerraform(struct!.sigKeyCrc),
    update_signature: cdktn.stringToTerraform(struct!.updateSignature),
    update_version: iotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionToTerraform(struct!.updateVersion),
  }
}


export function iotwirelessTaskDefinitionUpdateLoRaWanToHclTerraform(struct?: IotwirelessTaskDefinitionUpdateLoRaWan | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    current_version: {
      value: iotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionToHclTerraform(struct!.currentVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion",
    },
    sig_key_crc: {
      value: cdktn.numberToHclTerraform(struct!.sigKeyCrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_signature: {
      value: cdktn.stringToHclTerraform(struct!.updateSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_version: {
      value: iotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionToHclTerraform(struct!.updateVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotwirelessTaskDefinitionUpdateLoRaWanOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotwirelessTaskDefinitionUpdateLoRaWan | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentVersion = this._currentVersion?.internalValue;
    }
    if (this._sigKeyCrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.sigKeyCrc = this._sigKeyCrc;
    }
    if (this._updateSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateSignature = this._updateSignature;
    }
    if (this._updateVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateVersion = this._updateVersion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotwirelessTaskDefinitionUpdateLoRaWan | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentVersion.internalValue = undefined;
      this._sigKeyCrc = undefined;
      this._updateSignature = undefined;
      this._updateVersion.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentVersion.internalValue = value.currentVersion;
      this._sigKeyCrc = value.sigKeyCrc;
      this._updateSignature = value.updateSignature;
      this._updateVersion.internalValue = value.updateVersion;
    }
  }

  // current_version - computed: true, optional: true, required: false
  private _currentVersion = new IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference(this, "current_version");
  public get currentVersion() {
    return this._currentVersion;
  }
  public putCurrentVersion(value: IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion) {
    this._currentVersion.internalValue = value;
  }
  public resetCurrentVersion() {
    this._currentVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentVersionInput() {
    return this._currentVersion.internalValue;
  }

  // sig_key_crc - computed: true, optional: true, required: false
  private _sigKeyCrc?: number;
  public get sigKeyCrc() {
    return this.getNumberAttribute('sig_key_crc');
  }
  public set sigKeyCrc(value: number) {
    this._sigKeyCrc = value;
  }
  public resetSigKeyCrc() {
    this._sigKeyCrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigKeyCrcInput() {
    return this._sigKeyCrc;
  }

  // update_signature - computed: true, optional: true, required: false
  private _updateSignature?: string;
  public get updateSignature() {
    return this.getStringAttribute('update_signature');
  }
  public set updateSignature(value: string) {
    this._updateSignature = value;
  }
  public resetUpdateSignature() {
    this._updateSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSignatureInput() {
    return this._updateSignature;
  }

  // update_version - computed: true, optional: true, required: false
  private _updateVersion = new IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference(this, "update_version");
  public get updateVersion() {
    return this._updateVersion;
  }
  public putUpdateVersion(value: IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion) {
    this._updateVersion.internalValue = value;
  }
  public resetUpdateVersion() {
    this._updateVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateVersionInput() {
    return this._updateVersion.internalValue;
  }
}
export interface IotwirelessTaskDefinitionUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#lo_ra_wan IotwirelessTaskDefinition#lo_ra_wan}
  */
  readonly loRaWan?: IotwirelessTaskDefinitionUpdateLoRaWan;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#update_data_role IotwirelessTaskDefinition#update_data_role}
  */
  readonly updateDataRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#update_data_source IotwirelessTaskDefinition#update_data_source}
  */
  readonly updateDataSource?: string;
}

export function iotwirelessTaskDefinitionUpdateToTerraform(struct?: IotwirelessTaskDefinitionUpdate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lo_ra_wan: iotwirelessTaskDefinitionUpdateLoRaWanToTerraform(struct!.loRaWan),
    update_data_role: cdktn.stringToTerraform(struct!.updateDataRole),
    update_data_source: cdktn.stringToTerraform(struct!.updateDataSource),
  }
}


export function iotwirelessTaskDefinitionUpdateToHclTerraform(struct?: IotwirelessTaskDefinitionUpdate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lo_ra_wan: {
      value: iotwirelessTaskDefinitionUpdateLoRaWanToHclTerraform(struct!.loRaWan),
      isBlock: true,
      type: "struct",
      storageClassType: "IotwirelessTaskDefinitionUpdateLoRaWan",
    },
    update_data_role: {
      value: cdktn.stringToHclTerraform(struct!.updateDataRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_data_source: {
      value: cdktn.stringToHclTerraform(struct!.updateDataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotwirelessTaskDefinitionUpdateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotwirelessTaskDefinitionUpdate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loRaWan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loRaWan = this._loRaWan?.internalValue;
    }
    if (this._updateDataRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateDataRole = this._updateDataRole;
    }
    if (this._updateDataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateDataSource = this._updateDataSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotwirelessTaskDefinitionUpdate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loRaWan.internalValue = undefined;
      this._updateDataRole = undefined;
      this._updateDataSource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loRaWan.internalValue = value.loRaWan;
      this._updateDataRole = value.updateDataRole;
      this._updateDataSource = value.updateDataSource;
    }
  }

  // lo_ra_wan - computed: true, optional: true, required: false
  private _loRaWan = new IotwirelessTaskDefinitionUpdateLoRaWanOutputReference(this, "lo_ra_wan");
  public get loRaWan() {
    return this._loRaWan;
  }
  public putLoRaWan(value: IotwirelessTaskDefinitionUpdateLoRaWan) {
    this._loRaWan.internalValue = value;
  }
  public resetLoRaWan() {
    this._loRaWan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loRaWanInput() {
    return this._loRaWan.internalValue;
  }

  // update_data_role - computed: true, optional: true, required: false
  private _updateDataRole?: string;
  public get updateDataRole() {
    return this.getStringAttribute('update_data_role');
  }
  public set updateDataRole(value: string) {
    this._updateDataRole = value;
  }
  public resetUpdateDataRole() {
    this._updateDataRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDataRoleInput() {
    return this._updateDataRole;
  }

  // update_data_source - computed: true, optional: true, required: false
  private _updateDataSource?: string;
  public get updateDataSource() {
    return this.getStringAttribute('update_data_source');
  }
  public set updateDataSource(value: string) {
    this._updateDataSource = value;
  }
  public resetUpdateDataSource() {
    this._updateDataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDataSourceInput() {
    return this._updateDataSource;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition awscc_iotwireless_task_definition}
*/
export class IotwirelessTaskDefinition extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotwireless_task_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotwirelessTaskDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotwirelessTaskDefinition to import
  * @param importFromId The id of the existing IotwirelessTaskDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotwirelessTaskDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotwireless_task_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_task_definition awscc_iotwireless_task_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotwirelessTaskDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: IotwirelessTaskDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotwireless_task_definition',
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
    this._autoCreateTasks = config.autoCreateTasks;
    this._loRaWanUpdateGatewayTaskEntry.internalValue = config.loRaWanUpdateGatewayTaskEntry;
    this._name = config.name;
    this._tags.internalValue = config.tags;
    this._taskDefinitionType = config.taskDefinitionType;
    this._update.internalValue = config.update;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_create_tasks - computed: false, optional: false, required: true
  private _autoCreateTasks?: boolean | cdktn.IResolvable;
  public get autoCreateTasks() {
    return this.getBooleanAttribute('auto_create_tasks');
  }
  public set autoCreateTasks(value: boolean | cdktn.IResolvable) {
    this._autoCreateTasks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateTasksInput() {
    return this._autoCreateTasks;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lo_ra_wan_update_gateway_task_entry - computed: true, optional: true, required: false
  private _loRaWanUpdateGatewayTaskEntry = new IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference(this, "lo_ra_wan_update_gateway_task_entry");
  public get loRaWanUpdateGatewayTaskEntry() {
    return this._loRaWanUpdateGatewayTaskEntry;
  }
  public putLoRaWanUpdateGatewayTaskEntry(value: IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry) {
    this._loRaWanUpdateGatewayTaskEntry.internalValue = value;
  }
  public resetLoRaWanUpdateGatewayTaskEntry() {
    this._loRaWanUpdateGatewayTaskEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loRaWanUpdateGatewayTaskEntryInput() {
    return this._loRaWanUpdateGatewayTaskEntry.internalValue;
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

  // tags - computed: true, optional: true, required: false
  private _tags = new IotwirelessTaskDefinitionTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IotwirelessTaskDefinitionTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // task_definition_id - computed: true, optional: false, required: false
  public get taskDefinitionId() {
    return this.getStringAttribute('task_definition_id');
  }

  // task_definition_type - computed: true, optional: true, required: false
  private _taskDefinitionType?: string;
  public get taskDefinitionType() {
    return this.getStringAttribute('task_definition_type');
  }
  public set taskDefinitionType(value: string) {
    this._taskDefinitionType = value;
  }
  public resetTaskDefinitionType() {
    this._taskDefinitionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDefinitionTypeInput() {
    return this._taskDefinitionType;
  }

  // update - computed: true, optional: true, required: false
  private _update = new IotwirelessTaskDefinitionUpdateOutputReference(this, "update");
  public get update() {
    return this._update;
  }
  public putUpdate(value: IotwirelessTaskDefinitionUpdate) {
    this._update.internalValue = value;
  }
  public resetUpdate() {
    this._update.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create_tasks: cdktn.booleanToTerraform(this._autoCreateTasks),
      lo_ra_wan_update_gateway_task_entry: iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryToTerraform(this._loRaWanUpdateGatewayTaskEntry.internalValue),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(iotwirelessTaskDefinitionTagsToTerraform, false)(this._tags.internalValue),
      task_definition_type: cdktn.stringToTerraform(this._taskDefinitionType),
      update: iotwirelessTaskDefinitionUpdateToTerraform(this._update.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_create_tasks: {
        value: cdktn.booleanToHclTerraform(this._autoCreateTasks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lo_ra_wan_update_gateway_task_entry: {
        value: iotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryToHclTerraform(this._loRaWanUpdateGatewayTaskEntry.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(iotwirelessTaskDefinitionTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotwirelessTaskDefinitionTagsList",
      },
      task_definition_type: {
        value: cdktn.stringToHclTerraform(this._taskDefinitionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update: {
        value: iotwirelessTaskDefinitionUpdateToHclTerraform(this._update.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotwirelessTaskDefinitionUpdate",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
