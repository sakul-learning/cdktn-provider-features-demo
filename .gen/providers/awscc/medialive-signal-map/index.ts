// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_signal_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MedialiveSignalMapConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_signal_map#cloudwatch_alarm_template_group_identifiers MedialiveSignalMap#cloudwatch_alarm_template_group_identifiers}
  */
  readonly cloudwatchAlarmTemplateGroupIdentifiers?: string[];
  /**
  * A resource's optional description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_signal_map#description MedialiveSignalMap#description}
  */
  readonly description?: string;
  /**
  * A top-level supported AWS resource ARN to discovery a signal map from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_signal_map#discovery_entry_point_arn MedialiveSignalMap#discovery_entry_point_arn}
  */
  readonly discoveryEntryPointArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_signal_map#event_bridge_rule_template_group_identifiers MedialiveSignalMap#event_bridge_rule_template_group_identifiers}
  */
  readonly eventBridgeRuleTemplateGroupIdentifiers?: string[];
  /**
  * If true, will force a rediscovery of a signal map if an unchanged discoveryEntryPointArn is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_signal_map#force_rediscovery MedialiveSignalMap#force_rediscovery}
  */
  readonly forceRediscovery?: boolean | cdktn.IResolvable;
  /**
  * A resource's name. Names must be unique within the scope of a resource type in a specific region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_signal_map#name MedialiveSignalMap#name}
  */
  readonly name: string;
  /**
  * Represents the tags associated with a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_signal_map#tags MedialiveSignalMap#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface MedialiveSignalMapFailedMediaResourceMapDestinations {
}

export function medialiveSignalMapFailedMediaResourceMapDestinationsToTerraform(struct?: MedialiveSignalMapFailedMediaResourceMapDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function medialiveSignalMapFailedMediaResourceMapDestinationsToHclTerraform(struct?: MedialiveSignalMapFailedMediaResourceMapDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MedialiveSignalMapFailedMediaResourceMapDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveSignalMapFailedMediaResourceMapDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class MedialiveSignalMapFailedMediaResourceMapDestinationsList extends cdktn.ComplexList {

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
  public get(index: number): MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference {
    return new MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveSignalMapFailedMediaResourceMapSources {
}

export function medialiveSignalMapFailedMediaResourceMapSourcesToTerraform(struct?: MedialiveSignalMapFailedMediaResourceMapSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function medialiveSignalMapFailedMediaResourceMapSourcesToHclTerraform(struct?: MedialiveSignalMapFailedMediaResourceMapSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MedialiveSignalMapFailedMediaResourceMapSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveSignalMapFailedMediaResourceMapSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class MedialiveSignalMapFailedMediaResourceMapSourcesList extends cdktn.ComplexList {

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
  public get(index: number): MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference {
    return new MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveSignalMapFailedMediaResourceMap {
}

export function medialiveSignalMapFailedMediaResourceMapToTerraform(struct?: MedialiveSignalMapFailedMediaResourceMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function medialiveSignalMapFailedMediaResourceMapToHclTerraform(struct?: MedialiveSignalMapFailedMediaResourceMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MedialiveSignalMapFailedMediaResourceMapOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): MedialiveSignalMapFailedMediaResourceMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveSignalMapFailedMediaResourceMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destinations - computed: true, optional: false, required: false
  private _destinations = new MedialiveSignalMapFailedMediaResourceMapDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sources - computed: true, optional: false, required: false
  private _sources = new MedialiveSignalMapFailedMediaResourceMapSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
}

export class MedialiveSignalMapFailedMediaResourceMapMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): MedialiveSignalMapFailedMediaResourceMapOutputReference {
    return new MedialiveSignalMapFailedMediaResourceMapOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface MedialiveSignalMapLastSuccessfulMonitorDeployment {
}

export function medialiveSignalMapLastSuccessfulMonitorDeploymentToTerraform(struct?: MedialiveSignalMapLastSuccessfulMonitorDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function medialiveSignalMapLastSuccessfulMonitorDeploymentToHclTerraform(struct?: MedialiveSignalMapLastSuccessfulMonitorDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MedialiveSignalMapLastSuccessfulMonitorDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveSignalMapLastSuccessfulMonitorDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details_uri - computed: true, optional: false, required: false
  public get detailsUri() {
    return this.getStringAttribute('details_uri');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface MedialiveSignalMapMediaResourceMapDestinations {
}

export function medialiveSignalMapMediaResourceMapDestinationsToTerraform(struct?: MedialiveSignalMapMediaResourceMapDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function medialiveSignalMapMediaResourceMapDestinationsToHclTerraform(struct?: MedialiveSignalMapMediaResourceMapDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MedialiveSignalMapMediaResourceMapDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MedialiveSignalMapMediaResourceMapDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveSignalMapMediaResourceMapDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class MedialiveSignalMapMediaResourceMapDestinationsList extends cdktn.ComplexList {

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
  public get(index: number): MedialiveSignalMapMediaResourceMapDestinationsOutputReference {
    return new MedialiveSignalMapMediaResourceMapDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveSignalMapMediaResourceMapSources {
}

export function medialiveSignalMapMediaResourceMapSourcesToTerraform(struct?: MedialiveSignalMapMediaResourceMapSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function medialiveSignalMapMediaResourceMapSourcesToHclTerraform(struct?: MedialiveSignalMapMediaResourceMapSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MedialiveSignalMapMediaResourceMapSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MedialiveSignalMapMediaResourceMapSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveSignalMapMediaResourceMapSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class MedialiveSignalMapMediaResourceMapSourcesList extends cdktn.ComplexList {

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
  public get(index: number): MedialiveSignalMapMediaResourceMapSourcesOutputReference {
    return new MedialiveSignalMapMediaResourceMapSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveSignalMapMediaResourceMap {
}

export function medialiveSignalMapMediaResourceMapToTerraform(struct?: MedialiveSignalMapMediaResourceMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function medialiveSignalMapMediaResourceMapToHclTerraform(struct?: MedialiveSignalMapMediaResourceMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MedialiveSignalMapMediaResourceMapOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): MedialiveSignalMapMediaResourceMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveSignalMapMediaResourceMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destinations - computed: true, optional: false, required: false
  private _destinations = new MedialiveSignalMapMediaResourceMapDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sources - computed: true, optional: false, required: false
  private _sources = new MedialiveSignalMapMediaResourceMapSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
}

export class MedialiveSignalMapMediaResourceMapMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): MedialiveSignalMapMediaResourceMapOutputReference {
    return new MedialiveSignalMapMediaResourceMapOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface MedialiveSignalMapMonitorDeployment {
}

export function medialiveSignalMapMonitorDeploymentToTerraform(struct?: MedialiveSignalMapMonitorDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function medialiveSignalMapMonitorDeploymentToHclTerraform(struct?: MedialiveSignalMapMonitorDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MedialiveSignalMapMonitorDeploymentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MedialiveSignalMapMonitorDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveSignalMapMonitorDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details_uri - computed: true, optional: false, required: false
  public get detailsUri() {
    return this.getStringAttribute('details_uri');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_signal_map awscc_medialive_signal_map}
*/
export class MedialiveSignalMap extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_medialive_signal_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MedialiveSignalMap resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MedialiveSignalMap to import
  * @param importFromId The id of the existing MedialiveSignalMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_signal_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MedialiveSignalMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_medialive_signal_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_signal_map awscc_medialive_signal_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MedialiveSignalMapConfig
  */
  public constructor(scope: Construct, id: string, config: MedialiveSignalMapConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_medialive_signal_map',
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
    this._cloudwatchAlarmTemplateGroupIdentifiers = config.cloudwatchAlarmTemplateGroupIdentifiers;
    this._description = config.description;
    this._discoveryEntryPointArn = config.discoveryEntryPointArn;
    this._eventBridgeRuleTemplateGroupIdentifiers = config.eventBridgeRuleTemplateGroupIdentifiers;
    this._forceRediscovery = config.forceRediscovery;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cloudwatch_alarm_template_group_identifiers - computed: true, optional: true, required: false
  private _cloudwatchAlarmTemplateGroupIdentifiers?: string[];
  public get cloudwatchAlarmTemplateGroupIdentifiers() {
    return this.getListAttribute('cloudwatch_alarm_template_group_identifiers');
  }
  public set cloudwatchAlarmTemplateGroupIdentifiers(value: string[]) {
    this._cloudwatchAlarmTemplateGroupIdentifiers = value;
  }
  public resetCloudwatchAlarmTemplateGroupIdentifiers() {
    this._cloudwatchAlarmTemplateGroupIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchAlarmTemplateGroupIdentifiersInput() {
    return this._cloudwatchAlarmTemplateGroupIdentifiers;
  }

  // cloudwatch_alarm_template_group_ids - computed: true, optional: false, required: false
  public get cloudwatchAlarmTemplateGroupIds() {
    return this.getListAttribute('cloudwatch_alarm_template_group_ids');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // discovery_entry_point_arn - computed: false, optional: false, required: true
  private _discoveryEntryPointArn?: string;
  public get discoveryEntryPointArn() {
    return this.getStringAttribute('discovery_entry_point_arn');
  }
  public set discoveryEntryPointArn(value: string) {
    this._discoveryEntryPointArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryEntryPointArnInput() {
    return this._discoveryEntryPointArn;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // event_bridge_rule_template_group_identifiers - computed: true, optional: true, required: false
  private _eventBridgeRuleTemplateGroupIdentifiers?: string[];
  public get eventBridgeRuleTemplateGroupIdentifiers() {
    return this.getListAttribute('event_bridge_rule_template_group_identifiers');
  }
  public set eventBridgeRuleTemplateGroupIdentifiers(value: string[]) {
    this._eventBridgeRuleTemplateGroupIdentifiers = value;
  }
  public resetEventBridgeRuleTemplateGroupIdentifiers() {
    this._eventBridgeRuleTemplateGroupIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBridgeRuleTemplateGroupIdentifiersInput() {
    return this._eventBridgeRuleTemplateGroupIdentifiers;
  }

  // event_bridge_rule_template_group_ids - computed: true, optional: false, required: false
  public get eventBridgeRuleTemplateGroupIds() {
    return this.getListAttribute('event_bridge_rule_template_group_ids');
  }

  // failed_media_resource_map - computed: true, optional: false, required: false
  private _failedMediaResourceMap = new MedialiveSignalMapFailedMediaResourceMapMap(this, "failed_media_resource_map");
  public get failedMediaResourceMap() {
    return this._failedMediaResourceMap;
  }

  // force_rediscovery - computed: true, optional: true, required: false
  private _forceRediscovery?: boolean | cdktn.IResolvable;
  public get forceRediscovery() {
    return this.getBooleanAttribute('force_rediscovery');
  }
  public set forceRediscovery(value: boolean | cdktn.IResolvable) {
    this._forceRediscovery = value;
  }
  public resetForceRediscovery() {
    this._forceRediscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRediscoveryInput() {
    return this._forceRediscovery;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // last_discovered_at - computed: true, optional: false, required: false
  public get lastDiscoveredAt() {
    return this.getStringAttribute('last_discovered_at');
  }

  // last_successful_monitor_deployment - computed: true, optional: false, required: false
  private _lastSuccessfulMonitorDeployment = new MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference(this, "last_successful_monitor_deployment");
  public get lastSuccessfulMonitorDeployment() {
    return this._lastSuccessfulMonitorDeployment;
  }

  // media_resource_map - computed: true, optional: false, required: false
  private _mediaResourceMap = new MedialiveSignalMapMediaResourceMapMap(this, "media_resource_map");
  public get mediaResourceMap() {
    return this._mediaResourceMap;
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // monitor_changes_pending_deployment - computed: true, optional: false, required: false
  public get monitorChangesPendingDeployment() {
    return this.getBooleanAttribute('monitor_changes_pending_deployment');
  }

  // monitor_deployment - computed: true, optional: false, required: false
  private _monitorDeployment = new MedialiveSignalMapMonitorDeploymentOutputReference(this, "monitor_deployment");
  public get monitorDeployment() {
    return this._monitorDeployment;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // signal_map_id - computed: true, optional: false, required: false
  public get signalMapId() {
    return this.getStringAttribute('signal_map_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloudwatch_alarm_template_group_identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._cloudwatchAlarmTemplateGroupIdentifiers),
      description: cdktn.stringToTerraform(this._description),
      discovery_entry_point_arn: cdktn.stringToTerraform(this._discoveryEntryPointArn),
      event_bridge_rule_template_group_identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._eventBridgeRuleTemplateGroupIdentifiers),
      force_rediscovery: cdktn.booleanToTerraform(this._forceRediscovery),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloudwatch_alarm_template_group_identifiers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._cloudwatchAlarmTemplateGroupIdentifiers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discovery_entry_point_arn: {
        value: cdktn.stringToHclTerraform(this._discoveryEntryPointArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_bridge_rule_template_group_identifiers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._eventBridgeRuleTemplateGroupIdentifiers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      force_rediscovery: {
        value: cdktn.booleanToHclTerraform(this._forceRediscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
