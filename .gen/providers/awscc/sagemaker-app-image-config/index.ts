// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerAppImageConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Name of the AppImageConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#app_image_config_name SagemakerAppImageConfig#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * The CodeEditorAppImageConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#code_editor_app_image_config SagemakerAppImageConfig#code_editor_app_image_config}
  */
  readonly codeEditorAppImageConfig?: SagemakerAppImageConfigCodeEditorAppImageConfig;
  /**
  * The JupyterLabAppImageConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#jupyter_lab_app_image_config SagemakerAppImageConfig#jupyter_lab_app_image_config}
  */
  readonly jupyterLabAppImageConfig?: SagemakerAppImageConfigJupyterLabAppImageConfig;
  /**
  * The KernelGatewayImageConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#kernel_gateway_image_config SagemakerAppImageConfig#kernel_gateway_image_config}
  */
  readonly kernelGatewayImageConfig?: SagemakerAppImageConfigKernelGatewayImageConfig;
  /**
  * A list of tags to apply to the AppImageConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#tags SagemakerAppImageConfig#tags}
  */
  readonly tags?: SagemakerAppImageConfigTags[] | cdktn.IResolvable;
}
export interface SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#key SagemakerAppImageConfig#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#value SagemakerAppImageConfig#value}
  */
  readonly value?: string;
}

export function sagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesToTerraform(struct?: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesToHclTerraform(struct?: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables | cdktn.IResolvable): any {
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

export class SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables | cdktn.IResolvable | undefined) {
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

export class SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList extends cdktn.ComplexList {
  public internalValue? : SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference {
    return new SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig {
  /**
  * A list of arguments to apply to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#container_arguments SagemakerAppImageConfig#container_arguments}
  */
  readonly containerArguments?: string[];
  /**
  * The custom entry point to use on container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#container_entrypoint SagemakerAppImageConfig#container_entrypoint}
  */
  readonly containerEntrypoint?: string[];
  /**
  * A list of variables to apply to the custom container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#container_environment_variables SagemakerAppImageConfig#container_environment_variables}
  */
  readonly containerEnvironmentVariables?: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables[] | cdktn.IResolvable;
}

export function sagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigToTerraform(struct?: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_arguments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerArguments),
    container_entrypoint: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerEntrypoint),
    container_environment_variables: cdktn.listMapper(sagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesToTerraform, false)(struct!.containerEnvironmentVariables),
  }
}


export function sagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigToHclTerraform(struct?: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_arguments: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerArguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_entrypoint: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerEntrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_environment_variables: {
      value: cdktn.listMapperHcl(sagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesToHclTerraform, false)(struct!.containerEnvironmentVariables),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerArguments = this._containerArguments;
    }
    if (this._containerEntrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerEntrypoint = this._containerEntrypoint;
    }
    if (this._containerEnvironmentVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerEnvironmentVariables = this._containerEnvironmentVariables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerArguments = undefined;
      this._containerEntrypoint = undefined;
      this._containerEnvironmentVariables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerArguments = value.containerArguments;
      this._containerEntrypoint = value.containerEntrypoint;
      this._containerEnvironmentVariables.internalValue = value.containerEnvironmentVariables;
    }
  }

  // container_arguments - computed: true, optional: true, required: false
  private _containerArguments?: string[]; 
  public get containerArguments() {
    return this.getListAttribute('container_arguments');
  }
  public set containerArguments(value: string[]) {
    this._containerArguments = value;
  }
  public resetContainerArguments() {
    this._containerArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerArgumentsInput() {
    return this._containerArguments;
  }

  // container_entrypoint - computed: true, optional: true, required: false
  private _containerEntrypoint?: string[]; 
  public get containerEntrypoint() {
    return this.getListAttribute('container_entrypoint');
  }
  public set containerEntrypoint(value: string[]) {
    this._containerEntrypoint = value;
  }
  public resetContainerEntrypoint() {
    this._containerEntrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerEntrypointInput() {
    return this._containerEntrypoint;
  }

  // container_environment_variables - computed: true, optional: true, required: false
  private _containerEnvironmentVariables = new SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList(this, "container_environment_variables", false);
  public get containerEnvironmentVariables() {
    return this._containerEnvironmentVariables;
  }
  public putContainerEnvironmentVariables(value: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables[] | cdktn.IResolvable) {
    this._containerEnvironmentVariables.internalValue = value;
  }
  public resetContainerEnvironmentVariables() {
    this._containerEnvironmentVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerEnvironmentVariablesInput() {
    return this._containerEnvironmentVariables.internalValue;
  }
}
export interface SagemakerAppImageConfigCodeEditorAppImageConfig {
  /**
  * The container configuration for a SageMaker image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#container_config SagemakerAppImageConfig#container_config}
  */
  readonly containerConfig?: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig;
}

export function sagemakerAppImageConfigCodeEditorAppImageConfigToTerraform(struct?: SagemakerAppImageConfigCodeEditorAppImageConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_config: sagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigToTerraform(struct!.containerConfig),
  }
}


export function sagemakerAppImageConfigCodeEditorAppImageConfigToHclTerraform(struct?: SagemakerAppImageConfigCodeEditorAppImageConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_config: {
      value: sagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigToHclTerraform(struct!.containerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerAppImageConfigCodeEditorAppImageConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerConfig = this._containerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAppImageConfigCodeEditorAppImageConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerConfig.internalValue = value.containerConfig;
    }
  }

  // container_config - computed: true, optional: true, required: false
  private _containerConfig = new SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference(this, "container_config");
  public get containerConfig() {
    return this._containerConfig;
  }
  public putContainerConfig(value: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig) {
    this._containerConfig.internalValue = value;
  }
  public resetContainerConfig() {
    this._containerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConfigInput() {
    return this._containerConfig.internalValue;
  }
}
export interface SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#key SagemakerAppImageConfig#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#value SagemakerAppImageConfig#value}
  */
  readonly value?: string;
}

export function sagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesToTerraform(struct?: SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesToHclTerraform(struct?: SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables | cdktn.IResolvable): any {
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

export class SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables | cdktn.IResolvable | undefined) {
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

export class SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList extends cdktn.ComplexList {
  public internalValue? : SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference {
    return new SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig {
  /**
  * A list of arguments to apply to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#container_arguments SagemakerAppImageConfig#container_arguments}
  */
  readonly containerArguments?: string[];
  /**
  * The custom entry point to use on container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#container_entrypoint SagemakerAppImageConfig#container_entrypoint}
  */
  readonly containerEntrypoint?: string[];
  /**
  * A list of variables to apply to the custom container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#container_environment_variables SagemakerAppImageConfig#container_environment_variables}
  */
  readonly containerEnvironmentVariables?: SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables[] | cdktn.IResolvable;
}

export function sagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigToTerraform(struct?: SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_arguments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerArguments),
    container_entrypoint: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerEntrypoint),
    container_environment_variables: cdktn.listMapper(sagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesToTerraform, false)(struct!.containerEnvironmentVariables),
  }
}


export function sagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigToHclTerraform(struct?: SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_arguments: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerArguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_entrypoint: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerEntrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_environment_variables: {
      value: cdktn.listMapperHcl(sagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesToHclTerraform, false)(struct!.containerEnvironmentVariables),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerArguments = this._containerArguments;
    }
    if (this._containerEntrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerEntrypoint = this._containerEntrypoint;
    }
    if (this._containerEnvironmentVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerEnvironmentVariables = this._containerEnvironmentVariables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerArguments = undefined;
      this._containerEntrypoint = undefined;
      this._containerEnvironmentVariables.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerArguments = value.containerArguments;
      this._containerEntrypoint = value.containerEntrypoint;
      this._containerEnvironmentVariables.internalValue = value.containerEnvironmentVariables;
    }
  }

  // container_arguments - computed: true, optional: true, required: false
  private _containerArguments?: string[]; 
  public get containerArguments() {
    return this.getListAttribute('container_arguments');
  }
  public set containerArguments(value: string[]) {
    this._containerArguments = value;
  }
  public resetContainerArguments() {
    this._containerArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerArgumentsInput() {
    return this._containerArguments;
  }

  // container_entrypoint - computed: true, optional: true, required: false
  private _containerEntrypoint?: string[]; 
  public get containerEntrypoint() {
    return this.getListAttribute('container_entrypoint');
  }
  public set containerEntrypoint(value: string[]) {
    this._containerEntrypoint = value;
  }
  public resetContainerEntrypoint() {
    this._containerEntrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerEntrypointInput() {
    return this._containerEntrypoint;
  }

  // container_environment_variables - computed: true, optional: true, required: false
  private _containerEnvironmentVariables = new SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList(this, "container_environment_variables", false);
  public get containerEnvironmentVariables() {
    return this._containerEnvironmentVariables;
  }
  public putContainerEnvironmentVariables(value: SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables[] | cdktn.IResolvable) {
    this._containerEnvironmentVariables.internalValue = value;
  }
  public resetContainerEnvironmentVariables() {
    this._containerEnvironmentVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerEnvironmentVariablesInput() {
    return this._containerEnvironmentVariables.internalValue;
  }
}
export interface SagemakerAppImageConfigJupyterLabAppImageConfig {
  /**
  * The container configuration for a SageMaker image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#container_config SagemakerAppImageConfig#container_config}
  */
  readonly containerConfig?: SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig;
}

export function sagemakerAppImageConfigJupyterLabAppImageConfigToTerraform(struct?: SagemakerAppImageConfigJupyterLabAppImageConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_config: sagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigToTerraform(struct!.containerConfig),
  }
}


export function sagemakerAppImageConfigJupyterLabAppImageConfigToHclTerraform(struct?: SagemakerAppImageConfigJupyterLabAppImageConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_config: {
      value: sagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigToHclTerraform(struct!.containerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerAppImageConfigJupyterLabAppImageConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerConfig = this._containerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAppImageConfigJupyterLabAppImageConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerConfig.internalValue = value.containerConfig;
    }
  }

  // container_config - computed: true, optional: true, required: false
  private _containerConfig = new SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference(this, "container_config");
  public get containerConfig() {
    return this._containerConfig;
  }
  public putContainerConfig(value: SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig) {
    this._containerConfig.internalValue = value;
  }
  public resetContainerConfig() {
    this._containerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConfigInput() {
    return this._containerConfig.internalValue;
  }
}
export interface SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig {
  /**
  * The default POSIX group ID (GID). If not specified, defaults to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}
  */
  readonly defaultGid?: number;
  /**
  * The default POSIX user ID (UID). If not specified, defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}
  */
  readonly defaultUid?: number;
  /**
  * The path within the image to mount the user's EFS home directory. The directory should be empty. If not specified, defaults to /home/sagemaker-user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}
  */
  readonly mountPath?: string;
}

export function sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_gid: cdktn.numberToTerraform(struct!.defaultGid),
    default_uid: cdktn.numberToTerraform(struct!.defaultUid),
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
  }
}


export function sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToHclTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_gid: {
      value: cdktn.numberToHclTerraform(struct!.defaultGid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_uid: {
      value: cdktn.numberToHclTerraform(struct!.defaultUid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mount_path: {
      value: cdktn.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGid = this._defaultGid;
    }
    if (this._defaultUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUid = this._defaultUid;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultGid = undefined;
      this._defaultUid = undefined;
      this._mountPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultGid = value.defaultGid;
      this._defaultUid = value.defaultUid;
      this._mountPath = value.mountPath;
    }
  }

  // default_gid - computed: true, optional: true, required: false
  private _defaultGid?: number; 
  public get defaultGid() {
    return this.getNumberAttribute('default_gid');
  }
  public set defaultGid(value: number) {
    this._defaultGid = value;
  }
  public resetDefaultGid() {
    this._defaultGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGidInput() {
    return this._defaultGid;
  }

  // default_uid - computed: true, optional: true, required: false
  private _defaultUid?: number; 
  public get defaultUid() {
    return this.getNumberAttribute('default_uid');
  }
  public set defaultUid(value: number) {
    this._defaultUid = value;
  }
  public resetDefaultUid() {
    this._defaultUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUidInput() {
    return this._defaultUid;
  }

  // mount_path - computed: true, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}
export interface SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs {
  /**
  * The display name of the kernel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#display_name SagemakerAppImageConfig#display_name}
  */
  readonly displayName?: string;
  /**
  * The name of the kernel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#name SagemakerAppImageConfig#name}
  */
  readonly name?: string;
}

export function sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsToHclTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
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

export class SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._name = value.name;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

export class SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList extends cdktn.ComplexList {
  public internalValue? : SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference {
    return new SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAppImageConfigKernelGatewayImageConfig {
  /**
  * The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#file_system_config SagemakerAppImageConfig#file_system_config}
  */
  readonly fileSystemConfig?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig;
  /**
  * The specification of the Jupyter kernels in the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#kernel_specs SagemakerAppImageConfig#kernel_specs}
  */
  readonly kernelSpecs?: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs[] | cdktn.IResolvable;
}

export function sagemakerAppImageConfigKernelGatewayImageConfigToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_config: sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform(struct!.fileSystemConfig),
    kernel_specs: cdktn.listMapper(sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsToTerraform, false)(struct!.kernelSpecs),
  }
}


export function sagemakerAppImageConfigKernelGatewayImageConfigToHclTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_config: {
      value: sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToHclTerraform(struct!.fileSystemConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig",
    },
    kernel_specs: {
      value: cdktn.listMapperHcl(sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsToHclTerraform, false)(struct!.kernelSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAppImageConfigKernelGatewayImageConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerAppImageConfigKernelGatewayImageConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemConfig = this._fileSystemConfig?.internalValue;
    }
    if (this._kernelSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelSpecs = this._kernelSpecs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAppImageConfigKernelGatewayImageConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemConfig.internalValue = undefined;
      this._kernelSpecs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemConfig.internalValue = value.fileSystemConfig;
      this._kernelSpecs.internalValue = value.kernelSpecs;
    }
  }

  // file_system_config - computed: true, optional: true, required: false
  private _fileSystemConfig = new SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference(this, "file_system_config");
  public get fileSystemConfig() {
    return this._fileSystemConfig;
  }
  public putFileSystemConfig(value: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig) {
    this._fileSystemConfig.internalValue = value;
  }
  public resetFileSystemConfig() {
    this._fileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemConfigInput() {
    return this._fileSystemConfig.internalValue;
  }

  // kernel_specs - computed: true, optional: true, required: false
  private _kernelSpecs = new SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList(this, "kernel_specs", false);
  public get kernelSpecs() {
    return this._kernelSpecs;
  }
  public putKernelSpecs(value: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs[] | cdktn.IResolvable) {
    this._kernelSpecs.internalValue = value;
  }
  public resetKernelSpecs() {
    this._kernelSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelSpecsInput() {
    return this._kernelSpecs.internalValue;
  }
}
export interface SagemakerAppImageConfigTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#key SagemakerAppImageConfig#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#value SagemakerAppImageConfig#value}
  */
  readonly value?: string;
}

export function sagemakerAppImageConfigTagsToTerraform(struct?: SagemakerAppImageConfigTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerAppImageConfigTagsToHclTerraform(struct?: SagemakerAppImageConfigTags | cdktn.IResolvable): any {
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

export class SagemakerAppImageConfigTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerAppImageConfigTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerAppImageConfigTags | cdktn.IResolvable | undefined) {
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

export class SagemakerAppImageConfigTagsList extends cdktn.ComplexList {
  public internalValue? : SagemakerAppImageConfigTags[] | cdktn.IResolvable

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
  public get(index: number): SagemakerAppImageConfigTagsOutputReference {
    return new SagemakerAppImageConfigTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config awscc_sagemaker_app_image_config}
*/
export class SagemakerAppImageConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_app_image_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerAppImageConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerAppImageConfig to import
  * @param importFromId The id of the existing SagemakerAppImageConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerAppImageConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_app_image_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/sagemaker_app_image_config awscc_sagemaker_app_image_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerAppImageConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerAppImageConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_app_image_config',
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
    this._appImageConfigName = config.appImageConfigName;
    this._codeEditorAppImageConfig.internalValue = config.codeEditorAppImageConfig;
    this._jupyterLabAppImageConfig.internalValue = config.jupyterLabAppImageConfig;
    this._kernelGatewayImageConfig.internalValue = config.kernelGatewayImageConfig;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_image_config_arn - computed: true, optional: false, required: false
  public get appImageConfigArn() {
    return this.getStringAttribute('app_image_config_arn');
  }

  // app_image_config_name - computed: false, optional: false, required: true
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // code_editor_app_image_config - computed: true, optional: true, required: false
  private _codeEditorAppImageConfig = new SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference(this, "code_editor_app_image_config");
  public get codeEditorAppImageConfig() {
    return this._codeEditorAppImageConfig;
  }
  public putCodeEditorAppImageConfig(value: SagemakerAppImageConfigCodeEditorAppImageConfig) {
    this._codeEditorAppImageConfig.internalValue = value;
  }
  public resetCodeEditorAppImageConfig() {
    this._codeEditorAppImageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeEditorAppImageConfigInput() {
    return this._codeEditorAppImageConfig.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jupyter_lab_app_image_config - computed: true, optional: true, required: false
  private _jupyterLabAppImageConfig = new SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference(this, "jupyter_lab_app_image_config");
  public get jupyterLabAppImageConfig() {
    return this._jupyterLabAppImageConfig;
  }
  public putJupyterLabAppImageConfig(value: SagemakerAppImageConfigJupyterLabAppImageConfig) {
    this._jupyterLabAppImageConfig.internalValue = value;
  }
  public resetJupyterLabAppImageConfig() {
    this._jupyterLabAppImageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterLabAppImageConfigInput() {
    return this._jupyterLabAppImageConfig.internalValue;
  }

  // kernel_gateway_image_config - computed: true, optional: true, required: false
  private _kernelGatewayImageConfig = new SagemakerAppImageConfigKernelGatewayImageConfigOutputReference(this, "kernel_gateway_image_config");
  public get kernelGatewayImageConfig() {
    return this._kernelGatewayImageConfig;
  }
  public putKernelGatewayImageConfig(value: SagemakerAppImageConfigKernelGatewayImageConfig) {
    this._kernelGatewayImageConfig.internalValue = value;
  }
  public resetKernelGatewayImageConfig() {
    this._kernelGatewayImageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelGatewayImageConfigInput() {
    return this._kernelGatewayImageConfig.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SagemakerAppImageConfigTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SagemakerAppImageConfigTags[] | cdktn.IResolvable) {
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
      app_image_config_name: cdktn.stringToTerraform(this._appImageConfigName),
      code_editor_app_image_config: sagemakerAppImageConfigCodeEditorAppImageConfigToTerraform(this._codeEditorAppImageConfig.internalValue),
      jupyter_lab_app_image_config: sagemakerAppImageConfigJupyterLabAppImageConfigToTerraform(this._jupyterLabAppImageConfig.internalValue),
      kernel_gateway_image_config: sagemakerAppImageConfigKernelGatewayImageConfigToTerraform(this._kernelGatewayImageConfig.internalValue),
      tags: cdktn.listMapper(sagemakerAppImageConfigTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_image_config_name: {
        value: cdktn.stringToHclTerraform(this._appImageConfigName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_editor_app_image_config: {
        value: sagemakerAppImageConfigCodeEditorAppImageConfigToHclTerraform(this._codeEditorAppImageConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerAppImageConfigCodeEditorAppImageConfig",
      },
      jupyter_lab_app_image_config: {
        value: sagemakerAppImageConfigJupyterLabAppImageConfigToHclTerraform(this._jupyterLabAppImageConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerAppImageConfigJupyterLabAppImageConfig",
      },
      kernel_gateway_image_config: {
        value: sagemakerAppImageConfigKernelGatewayImageConfigToHclTerraform(this._kernelGatewayImageConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerAppImageConfigKernelGatewayImageConfig",
      },
      tags: {
        value: cdktn.listMapperHcl(sagemakerAppImageConfigTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerAppImageConfigTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
