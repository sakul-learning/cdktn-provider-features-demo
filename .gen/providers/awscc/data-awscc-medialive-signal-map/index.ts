// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/medialive_signal_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMedialiveSignalMapConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/medialive_signal_map#id DataAwsccMedialiveSignalMap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations {
}

export function dataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsToTerraform(struct?: DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsToHclTerraform(struct?: DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations | undefined) {
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

export class DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference {
    return new DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMedialiveSignalMapFailedMediaResourceMapSources {
}

export function dataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesToTerraform(struct?: DataAwsccMedialiveSignalMapFailedMediaResourceMapSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesToHclTerraform(struct?: DataAwsccMedialiveSignalMapFailedMediaResourceMapSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMedialiveSignalMapFailedMediaResourceMapSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveSignalMapFailedMediaResourceMapSources | undefined) {
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

export class DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference {
    return new DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMedialiveSignalMapFailedMediaResourceMap {
}

export function dataAwsccMedialiveSignalMapFailedMediaResourceMapToTerraform(struct?: DataAwsccMedialiveSignalMapFailedMediaResourceMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveSignalMapFailedMediaResourceMapToHclTerraform(struct?: DataAwsccMedialiveSignalMapFailedMediaResourceMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccMedialiveSignalMapFailedMediaResourceMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveSignalMapFailedMediaResourceMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destinations - computed: true, optional: false, required: false
  private _destinations = new DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sources - computed: true, optional: false, required: false
  private _sources = new DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
}

export class DataAwsccMedialiveSignalMapFailedMediaResourceMapMap extends cdktn.ComplexMap {

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
  public get(key: string): DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference {
    return new DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment {
}

export function dataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentToTerraform(struct?: DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentToHclTerraform(struct?: DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment | undefined) {
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
export interface DataAwsccMedialiveSignalMapMediaResourceMapDestinations {
}

export function dataAwsccMedialiveSignalMapMediaResourceMapDestinationsToTerraform(struct?: DataAwsccMedialiveSignalMapMediaResourceMapDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveSignalMapMediaResourceMapDestinationsToHclTerraform(struct?: DataAwsccMedialiveSignalMapMediaResourceMapDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMedialiveSignalMapMediaResourceMapDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveSignalMapMediaResourceMapDestinations | undefined) {
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

export class DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference {
    return new DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMedialiveSignalMapMediaResourceMapSources {
}

export function dataAwsccMedialiveSignalMapMediaResourceMapSourcesToTerraform(struct?: DataAwsccMedialiveSignalMapMediaResourceMapSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveSignalMapMediaResourceMapSourcesToHclTerraform(struct?: DataAwsccMedialiveSignalMapMediaResourceMapSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMedialiveSignalMapMediaResourceMapSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveSignalMapMediaResourceMapSources | undefined) {
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

export class DataAwsccMedialiveSignalMapMediaResourceMapSourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference {
    return new DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMedialiveSignalMapMediaResourceMap {
}

export function dataAwsccMedialiveSignalMapMediaResourceMapToTerraform(struct?: DataAwsccMedialiveSignalMapMediaResourceMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveSignalMapMediaResourceMapToHclTerraform(struct?: DataAwsccMedialiveSignalMapMediaResourceMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveSignalMapMediaResourceMapOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccMedialiveSignalMapMediaResourceMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveSignalMapMediaResourceMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destinations - computed: true, optional: false, required: false
  private _destinations = new DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sources - computed: true, optional: false, required: false
  private _sources = new DataAwsccMedialiveSignalMapMediaResourceMapSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
}

export class DataAwsccMedialiveSignalMapMediaResourceMapMap extends cdktn.ComplexMap {

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
  public get(key: string): DataAwsccMedialiveSignalMapMediaResourceMapOutputReference {
    return new DataAwsccMedialiveSignalMapMediaResourceMapOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccMedialiveSignalMapMonitorDeployment {
}

export function dataAwsccMedialiveSignalMapMonitorDeploymentToTerraform(struct?: DataAwsccMedialiveSignalMapMonitorDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveSignalMapMonitorDeploymentToHclTerraform(struct?: DataAwsccMedialiveSignalMapMonitorDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveSignalMapMonitorDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveSignalMapMonitorDeployment | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/medialive_signal_map awscc_medialive_signal_map}
*/
export class DataAwsccMedialiveSignalMap extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_medialive_signal_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMedialiveSignalMap resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMedialiveSignalMap to import
  * @param importFromId The id of the existing DataAwsccMedialiveSignalMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/medialive_signal_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMedialiveSignalMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_medialive_signal_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/medialive_signal_map awscc_medialive_signal_map} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMedialiveSignalMapConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMedialiveSignalMapConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_medialive_signal_map',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.91.0'
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

  // cloudwatch_alarm_template_group_identifiers - computed: true, optional: false, required: false
  public get cloudwatchAlarmTemplateGroupIdentifiers() {
    return this.getListAttribute('cloudwatch_alarm_template_group_identifiers');
  }

  // cloudwatch_alarm_template_group_ids - computed: true, optional: false, required: false
  public get cloudwatchAlarmTemplateGroupIds() {
    return this.getListAttribute('cloudwatch_alarm_template_group_ids');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // discovery_entry_point_arn - computed: true, optional: false, required: false
  public get discoveryEntryPointArn() {
    return this.getStringAttribute('discovery_entry_point_arn');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // event_bridge_rule_template_group_identifiers - computed: true, optional: false, required: false
  public get eventBridgeRuleTemplateGroupIdentifiers() {
    return this.getListAttribute('event_bridge_rule_template_group_identifiers');
  }

  // event_bridge_rule_template_group_ids - computed: true, optional: false, required: false
  public get eventBridgeRuleTemplateGroupIds() {
    return this.getListAttribute('event_bridge_rule_template_group_ids');
  }

  // failed_media_resource_map - computed: true, optional: false, required: false
  private _failedMediaResourceMap = new DataAwsccMedialiveSignalMapFailedMediaResourceMapMap(this, "failed_media_resource_map");
  public get failedMediaResourceMap() {
    return this._failedMediaResourceMap;
  }

  // force_rediscovery - computed: true, optional: false, required: false
  public get forceRediscovery() {
    return this.getBooleanAttribute('force_rediscovery');
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

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // last_discovered_at - computed: true, optional: false, required: false
  public get lastDiscoveredAt() {
    return this.getStringAttribute('last_discovered_at');
  }

  // last_successful_monitor_deployment - computed: true, optional: false, required: false
  private _lastSuccessfulMonitorDeployment = new DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference(this, "last_successful_monitor_deployment");
  public get lastSuccessfulMonitorDeployment() {
    return this._lastSuccessfulMonitorDeployment;
  }

  // media_resource_map - computed: true, optional: false, required: false
  private _mediaResourceMap = new DataAwsccMedialiveSignalMapMediaResourceMapMap(this, "media_resource_map");
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
  private _monitorDeployment = new DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference(this, "monitor_deployment");
  public get monitorDeployment() {
    return this._monitorDeployment;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // signal_map_id - computed: true, optional: false, required: false
  public get signalMapId() {
    return this.getStringAttribute('signal_map_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
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
