// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/pcs_compute_node_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccPcsComputeNodeGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/pcs_compute_node_group#id DataAwsccPcsComputeNodeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccPcsComputeNodeGroupCustomLaunchTemplate {
}

export function dataAwsccPcsComputeNodeGroupCustomLaunchTemplateToTerraform(struct?: DataAwsccPcsComputeNodeGroupCustomLaunchTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcsComputeNodeGroupCustomLaunchTemplateToHclTerraform(struct?: DataAwsccPcsComputeNodeGroupCustomLaunchTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcsComputeNodeGroupCustomLaunchTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcsComputeNodeGroupCustomLaunchTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getStringAttribute('template_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataAwsccPcsComputeNodeGroupErrorInfo {
}

export function dataAwsccPcsComputeNodeGroupErrorInfoToTerraform(struct?: DataAwsccPcsComputeNodeGroupErrorInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcsComputeNodeGroupErrorInfoToHclTerraform(struct?: DataAwsccPcsComputeNodeGroupErrorInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcsComputeNodeGroupErrorInfoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPcsComputeNodeGroupErrorInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcsComputeNodeGroupErrorInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataAwsccPcsComputeNodeGroupErrorInfoList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPcsComputeNodeGroupErrorInfoOutputReference {
    return new DataAwsccPcsComputeNodeGroupErrorInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPcsComputeNodeGroupInstanceConfigs {
}

export function dataAwsccPcsComputeNodeGroupInstanceConfigsToTerraform(struct?: DataAwsccPcsComputeNodeGroupInstanceConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcsComputeNodeGroupInstanceConfigsToHclTerraform(struct?: DataAwsccPcsComputeNodeGroupInstanceConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPcsComputeNodeGroupInstanceConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcsComputeNodeGroupInstanceConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
}

export class DataAwsccPcsComputeNodeGroupInstanceConfigsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference {
    return new DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource {
}

export function dataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceToTerraform(struct?: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceToHclTerraform(struct?: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // s3_version_id - computed: true, optional: false, required: false
  public get s3VersionId() {
    return this.getStringAttribute('s3_version_id');
  }

  // script_location - computed: true, optional: false, required: false
  public get scriptLocation() {
    return this.getStringAttribute('script_location');
  }
}
export interface DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped {
}

export function dataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedToTerraform(struct?: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedToHclTerraform(struct?: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arguments - computed: true, optional: false, required: false
  public get arguments() {
    return this.getListAttribute('arguments');
  }

  // execution_policy - computed: true, optional: false, required: false
  public get executionPolicy() {
    return this.getStringAttribute('execution_policy');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // on_error - computed: true, optional: false, required: false
  public get onError() {
    return this.getStringAttribute('on_error');
  }

  // script_source - computed: true, optional: false, required: false
  private _scriptSource = new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference(this, "script_source");
  public get scriptSource() {
    return this._scriptSource;
  }
}

export class DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference {
    return new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource {
}

export function dataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceToTerraform(struct?: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceToHclTerraform(struct?: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // s3_version_id - computed: true, optional: false, required: false
  public get s3VersionId() {
    return this.getStringAttribute('s3_version_id');
  }

  // script_location - computed: true, optional: false, required: false
  public get scriptLocation() {
    return this.getStringAttribute('script_location');
  }
}
export interface DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady {
}

export function dataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyToTerraform(struct?: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyToHclTerraform(struct?: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arguments - computed: true, optional: false, required: false
  public get arguments() {
    return this.getListAttribute('arguments');
  }

  // execution_policy - computed: true, optional: false, required: false
  public get executionPolicy() {
    return this.getStringAttribute('execution_policy');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // on_error - computed: true, optional: false, required: false
  public get onError() {
    return this.getStringAttribute('on_error');
  }

  // script_source - computed: true, optional: false, required: false
  private _scriptSource = new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference(this, "script_source");
  public get scriptSource() {
    return this._scriptSource;
  }
}

export class DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference {
    return new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages {
}

export function dataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesToTerraform(struct?: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesToHclTerraform(struct?: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_bootstrapped - computed: true, optional: false, required: false
  private _nodeBootstrapped = new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList(this, "node_bootstrapped", false);
  public get nodeBootstrapped() {
    return this._nodeBootstrapped;
  }

  // node_ready - computed: true, optional: false, required: false
  private _nodeReady = new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList(this, "node_ready", false);
  public get nodeReady() {
    return this._nodeReady;
  }
}
export interface DataAwsccPcsComputeNodeGroupNodeLifecycleActions {
}

export function dataAwsccPcsComputeNodeGroupNodeLifecycleActionsToTerraform(struct?: DataAwsccPcsComputeNodeGroupNodeLifecycleActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcsComputeNodeGroupNodeLifecycleActionsToHclTerraform(struct?: DataAwsccPcsComputeNodeGroupNodeLifecycleActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcsComputeNodeGroupNodeLifecycleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcsComputeNodeGroupNodeLifecycleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // script_caching_policy - computed: true, optional: false, required: false
  public get scriptCachingPolicy() {
    return this.getStringAttribute('script_caching_policy');
  }

  // stages - computed: true, optional: false, required: false
  private _stages = new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference(this, "stages");
  public get stages() {
    return this._stages;
  }
}
export interface DataAwsccPcsComputeNodeGroupScalingConfiguration {
}

export function dataAwsccPcsComputeNodeGroupScalingConfigurationToTerraform(struct?: DataAwsccPcsComputeNodeGroupScalingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcsComputeNodeGroupScalingConfigurationToHclTerraform(struct?: DataAwsccPcsComputeNodeGroupScalingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcsComputeNodeGroupScalingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcsComputeNodeGroupScalingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_instance_count - computed: true, optional: false, required: false
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }

  // min_instance_count - computed: true, optional: false, required: false
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
}
export interface DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings {
}

export function dataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsToTerraform(struct?: DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsToHclTerraform(struct?: DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export class DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference {
    return new DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPcsComputeNodeGroupSlurmConfiguration {
}

export function dataAwsccPcsComputeNodeGroupSlurmConfigurationToTerraform(struct?: DataAwsccPcsComputeNodeGroupSlurmConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcsComputeNodeGroupSlurmConfigurationToHclTerraform(struct?: DataAwsccPcsComputeNodeGroupSlurmConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcsComputeNodeGroupSlurmConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcsComputeNodeGroupSlurmConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scale_down_idle_time_in_seconds - computed: true, optional: false, required: false
  public get scaleDownIdleTimeInSeconds() {
    return this.getNumberAttribute('scale_down_idle_time_in_seconds');
  }

  // slurm_custom_settings - computed: true, optional: false, required: false
  private _slurmCustomSettings = new DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList(this, "slurm_custom_settings", false);
  public get slurmCustomSettings() {
    return this._slurmCustomSettings;
  }
}
export interface DataAwsccPcsComputeNodeGroupSpotOptions {
}

export function dataAwsccPcsComputeNodeGroupSpotOptionsToTerraform(struct?: DataAwsccPcsComputeNodeGroupSpotOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcsComputeNodeGroupSpotOptionsToHclTerraform(struct?: DataAwsccPcsComputeNodeGroupSpotOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcsComputeNodeGroupSpotOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcsComputeNodeGroupSpotOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocation_strategy - computed: true, optional: false, required: false
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/pcs_compute_node_group awscc_pcs_compute_node_group}
*/
export class DataAwsccPcsComputeNodeGroup extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_pcs_compute_node_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccPcsComputeNodeGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccPcsComputeNodeGroup to import
  * @param importFromId The id of the existing DataAwsccPcsComputeNodeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/pcs_compute_node_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccPcsComputeNodeGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pcs_compute_node_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/pcs_compute_node_group awscc_pcs_compute_node_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccPcsComputeNodeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccPcsComputeNodeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_pcs_compute_node_group',
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

  // ami_id - computed: true, optional: false, required: false
  public get amiId() {
    return this.getStringAttribute('ami_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // compute_node_group_id - computed: true, optional: false, required: false
  public get computeNodeGroupId() {
    return this.getStringAttribute('compute_node_group_id');
  }

  // custom_launch_template - computed: true, optional: false, required: false
  private _customLaunchTemplate = new DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference(this, "custom_launch_template");
  public get customLaunchTemplate() {
    return this._customLaunchTemplate;
  }

  // error_info - computed: true, optional: false, required: false
  private _errorInfo = new DataAwsccPcsComputeNodeGroupErrorInfoList(this, "error_info", false);
  public get errorInfo() {
    return this._errorInfo;
  }

  // iam_instance_profile_arn - computed: true, optional: false, required: false
  public get iamInstanceProfileArn() {
    return this.getStringAttribute('iam_instance_profile_arn');
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

  // instance_configs - computed: true, optional: false, required: false
  private _instanceConfigs = new DataAwsccPcsComputeNodeGroupInstanceConfigsList(this, "instance_configs", false);
  public get instanceConfigs() {
    return this._instanceConfigs;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_lifecycle_actions - computed: true, optional: false, required: false
  private _nodeLifecycleActions = new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference(this, "node_lifecycle_actions");
  public get nodeLifecycleActions() {
    return this._nodeLifecycleActions;
  }

  // purchase_option - computed: true, optional: false, required: false
  public get purchaseOption() {
    return this.getStringAttribute('purchase_option');
  }

  // scaling_configuration - computed: true, optional: false, required: false
  private _scalingConfiguration = new DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference(this, "scaling_configuration");
  public get scalingConfiguration() {
    return this._scalingConfiguration;
  }

  // slurm_configuration - computed: true, optional: false, required: false
  private _slurmConfiguration = new DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference(this, "slurm_configuration");
  public get slurmConfiguration() {
    return this._slurmConfiguration;
  }

  // spot_options - computed: true, optional: false, required: false
  private _spotOptions = new DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference(this, "spot_options");
  public get spotOptions() {
    return this._spotOptions;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
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
