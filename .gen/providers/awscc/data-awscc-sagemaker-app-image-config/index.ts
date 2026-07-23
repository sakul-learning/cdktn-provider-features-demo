// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/sagemaker_app_image_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSagemakerAppImageConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/sagemaker_app_image_config#id DataAwsccSagemakerAppImageConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables {
}

export function dataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesToTerraform(struct?: DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesToHclTerraform(struct?: DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables | undefined) {
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

export class DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference {
    return new DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig {
}

export function dataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigToTerraform(struct?: DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigToHclTerraform(struct?: DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_arguments - computed: true, optional: false, required: false
  public get containerArguments() {
    return this.getListAttribute('container_arguments');
  }

  // container_entrypoint - computed: true, optional: false, required: false
  public get containerEntrypoint() {
    return this.getListAttribute('container_entrypoint');
  }

  // container_environment_variables - computed: true, optional: false, required: false
  private _containerEnvironmentVariables = new DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList(this, "container_environment_variables", false);
  public get containerEnvironmentVariables() {
    return this._containerEnvironmentVariables;
  }
}
export interface DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig {
}

export function dataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigToTerraform(struct?: DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigToHclTerraform(struct?: DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_config - computed: true, optional: false, required: false
  private _containerConfig = new DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference(this, "container_config");
  public get containerConfig() {
    return this._containerConfig;
  }
}
export interface DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables {
}

export function dataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesToTerraform(struct?: DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesToHclTerraform(struct?: DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables | undefined) {
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

export class DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference {
    return new DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig {
}

export function dataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigToTerraform(struct?: DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigToHclTerraform(struct?: DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_arguments - computed: true, optional: false, required: false
  public get containerArguments() {
    return this.getListAttribute('container_arguments');
  }

  // container_entrypoint - computed: true, optional: false, required: false
  public get containerEntrypoint() {
    return this.getListAttribute('container_entrypoint');
  }

  // container_environment_variables - computed: true, optional: false, required: false
  private _containerEnvironmentVariables = new DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList(this, "container_environment_variables", false);
  public get containerEnvironmentVariables() {
    return this._containerEnvironmentVariables;
  }
}
export interface DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig {
}

export function dataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigToTerraform(struct?: DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigToHclTerraform(struct?: DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_config - computed: true, optional: false, required: false
  private _containerConfig = new DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference(this, "container_config");
  public get containerConfig() {
    return this._containerConfig;
  }
}
export interface DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig {
}

export function dataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform(struct?: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToHclTerraform(struct?: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_gid - computed: true, optional: false, required: false
  public get defaultGid() {
    return this.getNumberAttribute('default_gid');
  }

  // default_uid - computed: true, optional: false, required: false
  public get defaultUid() {
    return this.getNumberAttribute('default_uid');
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
}
export interface DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs {
}

export function dataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsToTerraform(struct?: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsToHclTerraform(struct?: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference {
    return new DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig {
}

export function dataAwsccSagemakerAppImageConfigKernelGatewayImageConfigToTerraform(struct?: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAppImageConfigKernelGatewayImageConfigToHclTerraform(struct?: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_system_config - computed: true, optional: false, required: false
  private _fileSystemConfig = new DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference(this, "file_system_config");
  public get fileSystemConfig() {
    return this._fileSystemConfig;
  }

  // kernel_specs - computed: true, optional: false, required: false
  private _kernelSpecs = new DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList(this, "kernel_specs", false);
  public get kernelSpecs() {
    return this._kernelSpecs;
  }
}
export interface DataAwsccSagemakerAppImageConfigTags {
}

export function dataAwsccSagemakerAppImageConfigTagsToTerraform(struct?: DataAwsccSagemakerAppImageConfigTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSagemakerAppImageConfigTagsToHclTerraform(struct?: DataAwsccSagemakerAppImageConfigTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSagemakerAppImageConfigTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSagemakerAppImageConfigTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSagemakerAppImageConfigTags | undefined) {
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

export class DataAwsccSagemakerAppImageConfigTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSagemakerAppImageConfigTagsOutputReference {
    return new DataAwsccSagemakerAppImageConfigTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/sagemaker_app_image_config awscc_sagemaker_app_image_config}
*/
export class DataAwsccSagemakerAppImageConfig extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_app_image_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSagemakerAppImageConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSagemakerAppImageConfig to import
  * @param importFromId The id of the existing DataAwsccSagemakerAppImageConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/sagemaker_app_image_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSagemakerAppImageConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_app_image_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/sagemaker_app_image_config awscc_sagemaker_app_image_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerAppImageConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerAppImageConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_app_image_config',
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

  // app_image_config_arn - computed: true, optional: false, required: false
  public get appImageConfigArn() {
    return this.getStringAttribute('app_image_config_arn');
  }

  // app_image_config_name - computed: true, optional: false, required: false
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }

  // code_editor_app_image_config - computed: true, optional: false, required: false
  private _codeEditorAppImageConfig = new DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference(this, "code_editor_app_image_config");
  public get codeEditorAppImageConfig() {
    return this._codeEditorAppImageConfig;
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

  // jupyter_lab_app_image_config - computed: true, optional: false, required: false
  private _jupyterLabAppImageConfig = new DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference(this, "jupyter_lab_app_image_config");
  public get jupyterLabAppImageConfig() {
    return this._jupyterLabAppImageConfig;
  }

  // kernel_gateway_image_config - computed: true, optional: false, required: false
  private _kernelGatewayImageConfig = new DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference(this, "kernel_gateway_image_config");
  public get kernelGatewayImageConfig() {
    return this._kernelGatewayImageConfig;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSagemakerAppImageConfigTagsList(this, "tags", false);
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
