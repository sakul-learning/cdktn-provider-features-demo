// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EmrserverlessApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The cpu architecture of an application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#architecture EmrserverlessApplication#architecture}
  */
  readonly architecture?: string;
  /**
  * Configuration for Auto Start of Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#auto_start_configuration EmrserverlessApplication#auto_start_configuration}
  */
  readonly autoStartConfiguration?: EmrserverlessApplicationAutoStartConfiguration;
  /**
  * Configuration for Auto Stop of Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#auto_stop_configuration EmrserverlessApplication#auto_stop_configuration}
  */
  readonly autoStopConfiguration?: EmrserverlessApplicationAutoStopConfiguration;
  /**
  * The image configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#image_configuration EmrserverlessApplication#image_configuration}
  */
  readonly imageConfiguration?: EmrserverlessApplicationImageConfiguration;
  /**
  * Initial capacity initialized when an Application is started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#initial_capacity EmrserverlessApplication#initial_capacity}
  */
  readonly initialCapacity?: EmrserverlessApplicationInitialCapacity[] | cdktn.IResolvable;
  /**
  * Maximum allowed cumulative resources for an Application. No new resources will be created once the limit is hit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#maximum_capacity EmrserverlessApplication#maximum_capacity}
  */
  readonly maximumCapacity?: EmrserverlessApplicationMaximumCapacity;
  /**
  * User friendly Application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#name EmrserverlessApplication#name}
  */
  readonly name?: string;
  /**
  * Network Configuration for customer VPC connectivity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#network_configuration EmrserverlessApplication#network_configuration}
  */
  readonly networkConfiguration?: EmrserverlessApplicationNetworkConfiguration;
  /**
  * EMR release label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#release_label EmrserverlessApplication#release_label}
  */
  readonly releaseLabel: string;
  /**
  * Tag map with key and value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#tags EmrserverlessApplication#tags}
  */
  readonly tags?: EmrserverlessApplicationTags[] | cdktn.IResolvable;
  /**
  * The type of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#type EmrserverlessApplication#type}
  */
  readonly type: string;
  /**
  * The key-value pairs that specify worker type to WorkerTypeSpecificationInput. This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include Driver and Executor for Spark applications and HiveDriver and TezTask for Hive applications. You can either set image details in this parameter for each worker type, or in imageConfiguration for all worker types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#worker_type_specifications EmrserverlessApplication#worker_type_specifications}
  */
  readonly workerTypeSpecifications?: { [key: string]: EmrserverlessApplicationWorkerTypeSpecifications } | cdktn.IResolvable;
}
export interface EmrserverlessApplicationAutoStartConfiguration {
  /**
  * If set to true, the Application will automatically start. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function emrserverlessApplicationAutoStartConfigurationToTerraform(struct?: EmrserverlessApplicationAutoStartConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function emrserverlessApplicationAutoStartConfigurationToHclTerraform(struct?: EmrserverlessApplicationAutoStartConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationAutoStartConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EmrserverlessApplicationAutoStartConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationAutoStartConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface EmrserverlessApplicationAutoStopConfiguration {
  /**
  * If set to true, the Application will automatically stop after being idle. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The amount of time [in minutes] to wait before auto stopping the Application when idle. Defaults to 15 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#idle_timeout_minutes EmrserverlessApplication#idle_timeout_minutes}
  */
  readonly idleTimeoutMinutes?: number;
}

export function emrserverlessApplicationAutoStopConfigurationToTerraform(struct?: EmrserverlessApplicationAutoStopConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    idle_timeout_minutes: cdktn.numberToTerraform(struct!.idleTimeoutMinutes),
  }
}


export function emrserverlessApplicationAutoStopConfigurationToHclTerraform(struct?: EmrserverlessApplicationAutoStopConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idle_timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.idleTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationAutoStopConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EmrserverlessApplicationAutoStopConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._idleTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutMinutes = this._idleTimeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationAutoStopConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._idleTimeoutMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._idleTimeoutMinutes = value.idleTimeoutMinutes;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // idle_timeout_minutes - computed: true, optional: true, required: false
  private _idleTimeoutMinutes?: number; 
  public get idleTimeoutMinutes() {
    return this.getNumberAttribute('idle_timeout_minutes');
  }
  public set idleTimeoutMinutes(value: number) {
    this._idleTimeoutMinutes = value;
  }
  public resetIdleTimeoutMinutes() {
    this._idleTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutMinutesInput() {
    return this._idleTimeoutMinutes;
  }
}
export interface EmrserverlessApplicationImageConfiguration {
  /**
  * The URI of an image in the Amazon ECR registry. This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#image_uri EmrserverlessApplication#image_uri}
  */
  readonly imageUri?: string;
}

export function emrserverlessApplicationImageConfigurationToTerraform(struct?: EmrserverlessApplicationImageConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_uri: cdktn.stringToTerraform(struct!.imageUri),
  }
}


export function emrserverlessApplicationImageConfigurationToHclTerraform(struct?: EmrserverlessApplicationImageConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_uri: {
      value: cdktn.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationImageConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EmrserverlessApplicationImageConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationImageConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUri = value.imageUri;
    }
  }

  // image_uri - computed: true, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }
}
export interface EmrserverlessApplicationInitialCapacityValueWorkerConfiguration {
  /**
  * Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#cpu EmrserverlessApplication#cpu}
  */
  readonly cpu?: string;
  /**
  * Per worker Disk resource. GB is the only supported unit and specifying GB is optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#disk EmrserverlessApplication#disk}
  */
  readonly disk?: string;
  /**
  * Per worker memory resource. GB is the only supported unit and specifying GB is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#memory EmrserverlessApplication#memory}
  */
  readonly memory?: string;
}

export function emrserverlessApplicationInitialCapacityValueWorkerConfigurationToTerraform(struct?: EmrserverlessApplicationInitialCapacityValueWorkerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cpu: cdktn.stringToTerraform(struct!.cpu),
    disk: cdktn.stringToTerraform(struct!.disk),
    memory: cdktn.stringToTerraform(struct!.memory),
  }
}


export function emrserverlessApplicationInitialCapacityValueWorkerConfigurationToHclTerraform(struct?: EmrserverlessApplicationInitialCapacityValueWorkerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cpu: {
      value: cdktn.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk: {
      value: cdktn.stringToHclTerraform(struct!.disk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktn.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EmrserverlessApplicationInitialCapacityValueWorkerConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationInitialCapacityValueWorkerConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._disk = undefined;
      this._memory = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._disk = value.disk;
      this._memory = value.memory;
    }
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk - computed: true, optional: true, required: false
  private _disk?: string; 
  public get disk() {
    return this.getStringAttribute('disk');
  }
  public set disk(value: string) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface EmrserverlessApplicationInitialCapacityValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#worker_configuration EmrserverlessApplication#worker_configuration}
  */
  readonly workerConfiguration?: EmrserverlessApplicationInitialCapacityValueWorkerConfiguration;
  /**
  * Initial count of workers to be initialized when an Application is started. This count will be continued to be maintained until the Application is stopped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#worker_count EmrserverlessApplication#worker_count}
  */
  readonly workerCount?: number;
}

export function emrserverlessApplicationInitialCapacityValueToTerraform(struct?: EmrserverlessApplicationInitialCapacityValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    worker_configuration: emrserverlessApplicationInitialCapacityValueWorkerConfigurationToTerraform(struct!.workerConfiguration),
    worker_count: cdktn.numberToTerraform(struct!.workerCount),
  }
}


export function emrserverlessApplicationInitialCapacityValueToHclTerraform(struct?: EmrserverlessApplicationInitialCapacityValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    worker_configuration: {
      value: emrserverlessApplicationInitialCapacityValueWorkerConfigurationToHclTerraform(struct!.workerConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "EmrserverlessApplicationInitialCapacityValueWorkerConfiguration",
    },
    worker_count: {
      value: cdktn.numberToHclTerraform(struct!.workerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationInitialCapacityValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EmrserverlessApplicationInitialCapacityValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerConfiguration = this._workerConfiguration?.internalValue;
    }
    if (this._workerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerCount = this._workerCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationInitialCapacityValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workerConfiguration.internalValue = undefined;
      this._workerCount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workerConfiguration.internalValue = value.workerConfiguration;
      this._workerCount = value.workerCount;
    }
  }

  // worker_configuration - computed: true, optional: true, required: false
  private _workerConfiguration = new EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference(this, "worker_configuration");
  public get workerConfiguration() {
    return this._workerConfiguration;
  }
  public putWorkerConfiguration(value: EmrserverlessApplicationInitialCapacityValueWorkerConfiguration) {
    this._workerConfiguration.internalValue = value;
  }
  public resetWorkerConfiguration() {
    this._workerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConfigurationInput() {
    return this._workerConfiguration.internalValue;
  }

  // worker_count - computed: true, optional: true, required: false
  private _workerCount?: number; 
  public get workerCount() {
    return this.getNumberAttribute('worker_count');
  }
  public set workerCount(value: number) {
    this._workerCount = value;
  }
  public resetWorkerCount() {
    this._workerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerCountInput() {
    return this._workerCount;
  }
}
export interface EmrserverlessApplicationInitialCapacity {
  /**
  * Worker type for an analytics framework.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#key EmrserverlessApplication#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#value EmrserverlessApplication#value}
  */
  readonly value?: EmrserverlessApplicationInitialCapacityValue;
}

export function emrserverlessApplicationInitialCapacityToTerraform(struct?: EmrserverlessApplicationInitialCapacity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: emrserverlessApplicationInitialCapacityValueToTerraform(struct!.value),
  }
}


export function emrserverlessApplicationInitialCapacityToHclTerraform(struct?: EmrserverlessApplicationInitialCapacity | cdktn.IResolvable): any {
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
      value: emrserverlessApplicationInitialCapacityValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "EmrserverlessApplicationInitialCapacityValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationInitialCapacityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EmrserverlessApplicationInitialCapacity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationInitialCapacity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value.internalValue = value.value;
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
  private _value = new EmrserverlessApplicationInitialCapacityValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: EmrserverlessApplicationInitialCapacityValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class EmrserverlessApplicationInitialCapacityList extends cdktn.ComplexList {
  public internalValue? : EmrserverlessApplicationInitialCapacity[] | cdktn.IResolvable

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
  public get(index: number): EmrserverlessApplicationInitialCapacityOutputReference {
    return new EmrserverlessApplicationInitialCapacityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrserverlessApplicationMaximumCapacity {
  /**
  * Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#cpu EmrserverlessApplication#cpu}
  */
  readonly cpu?: string;
  /**
  * Per worker Disk resource. GB is the only supported unit and specifying GB is optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#disk EmrserverlessApplication#disk}
  */
  readonly disk?: string;
  /**
  * Per worker memory resource. GB is the only supported unit and specifying GB is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#memory EmrserverlessApplication#memory}
  */
  readonly memory?: string;
}

export function emrserverlessApplicationMaximumCapacityToTerraform(struct?: EmrserverlessApplicationMaximumCapacity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cpu: cdktn.stringToTerraform(struct!.cpu),
    disk: cdktn.stringToTerraform(struct!.disk),
    memory: cdktn.stringToTerraform(struct!.memory),
  }
}


export function emrserverlessApplicationMaximumCapacityToHclTerraform(struct?: EmrserverlessApplicationMaximumCapacity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cpu: {
      value: cdktn.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk: {
      value: cdktn.stringToHclTerraform(struct!.disk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktn.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationMaximumCapacityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EmrserverlessApplicationMaximumCapacity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationMaximumCapacity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._disk = undefined;
      this._memory = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._disk = value.disk;
      this._memory = value.memory;
    }
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk - computed: true, optional: true, required: false
  private _disk?: string; 
  public get disk() {
    return this.getStringAttribute('disk');
  }
  public set disk(value: string) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface EmrserverlessApplicationNetworkConfiguration {
  /**
  * The ID of the security groups in the VPC to which you want to connect your job or application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#security_group_ids EmrserverlessApplication#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The ID of the subnets in the VPC to which you want to connect your job or application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#subnet_ids EmrserverlessApplication#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function emrserverlessApplicationNetworkConfigurationToTerraform(struct?: EmrserverlessApplicationNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function emrserverlessApplicationNetworkConfigurationToHclTerraform(struct?: EmrserverlessApplicationNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EmrserverlessApplicationNetworkConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationNetworkConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
export interface EmrserverlessApplicationTags {
  /**
  * The value for the tag. You can specify a value that is 1 to 128 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#key EmrserverlessApplication#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#value EmrserverlessApplication#value}
  */
  readonly value?: string;
}

export function emrserverlessApplicationTagsToTerraform(struct?: EmrserverlessApplicationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function emrserverlessApplicationTagsToHclTerraform(struct?: EmrserverlessApplicationTags | cdktn.IResolvable): any {
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

export class EmrserverlessApplicationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EmrserverlessApplicationTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EmrserverlessApplicationTags | cdktn.IResolvable | undefined) {
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

export class EmrserverlessApplicationTagsList extends cdktn.ComplexList {
  public internalValue? : EmrserverlessApplicationTags[] | cdktn.IResolvable

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
  public get(index: number): EmrserverlessApplicationTagsOutputReference {
    return new EmrserverlessApplicationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration {
  /**
  * The URI of an image in the Amazon ECR registry. This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#image_uri EmrserverlessApplication#image_uri}
  */
  readonly imageUri?: string;
}

export function emrserverlessApplicationWorkerTypeSpecificationsImageConfigurationToTerraform(struct?: EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_uri: cdktn.stringToTerraform(struct!.imageUri),
  }
}


export function emrserverlessApplicationWorkerTypeSpecificationsImageConfigurationToHclTerraform(struct?: EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_uri: {
      value: cdktn.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUri = value.imageUri;
    }
  }

  // image_uri - computed: true, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }
}
export interface EmrserverlessApplicationWorkerTypeSpecifications {
  /**
  * The image configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#image_configuration EmrserverlessApplication#image_configuration}
  */
  readonly imageConfiguration?: EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration;
}

export function emrserverlessApplicationWorkerTypeSpecificationsToTerraform(struct?: EmrserverlessApplicationWorkerTypeSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_configuration: emrserverlessApplicationWorkerTypeSpecificationsImageConfigurationToTerraform(struct!.imageConfiguration),
  }
}


export function emrserverlessApplicationWorkerTypeSpecificationsToHclTerraform(struct?: EmrserverlessApplicationWorkerTypeSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_configuration: {
      value: emrserverlessApplicationWorkerTypeSpecificationsImageConfigurationToHclTerraform(struct!.imageConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrserverlessApplicationWorkerTypeSpecificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): EmrserverlessApplicationWorkerTypeSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageConfiguration = this._imageConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationWorkerTypeSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageConfiguration.internalValue = value.imageConfiguration;
    }
  }

  // image_configuration - computed: true, optional: true, required: false
  private _imageConfiguration = new EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference(this, "image_configuration");
  public get imageConfiguration() {
    return this._imageConfiguration;
  }
  public putImageConfiguration(value: EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration) {
    this._imageConfiguration.internalValue = value;
  }
  public resetImageConfiguration() {
    this._imageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConfigurationInput() {
    return this._imageConfiguration.internalValue;
  }
}

export class EmrserverlessApplicationWorkerTypeSpecificationsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: EmrserverlessApplicationWorkerTypeSpecifications } | cdktn.IResolvable

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
  public get(key: string): EmrserverlessApplicationWorkerTypeSpecificationsOutputReference {
    return new EmrserverlessApplicationWorkerTypeSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application awscc_emrserverless_application}
*/
export class EmrserverlessApplication extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_emrserverless_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EmrserverlessApplication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmrserverlessApplication to import
  * @param importFromId The id of the existing EmrserverlessApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmrserverlessApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_emrserverless_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/emrserverless_application awscc_emrserverless_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrserverlessApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: EmrserverlessApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_emrserverless_application',
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
    this._architecture = config.architecture;
    this._autoStartConfiguration.internalValue = config.autoStartConfiguration;
    this._autoStopConfiguration.internalValue = config.autoStopConfiguration;
    this._imageConfiguration.internalValue = config.imageConfiguration;
    this._initialCapacity.internalValue = config.initialCapacity;
    this._maximumCapacity.internalValue = config.maximumCapacity;
    this._name = config.name;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._releaseLabel = config.releaseLabel;
    this._tags.internalValue = config.tags;
    this._type = config.type;
    this._workerTypeSpecifications.internalValue = config.workerTypeSpecifications;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // architecture - computed: true, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_start_configuration - computed: true, optional: true, required: false
  private _autoStartConfiguration = new EmrserverlessApplicationAutoStartConfigurationOutputReference(this, "auto_start_configuration");
  public get autoStartConfiguration() {
    return this._autoStartConfiguration;
  }
  public putAutoStartConfiguration(value: EmrserverlessApplicationAutoStartConfiguration) {
    this._autoStartConfiguration.internalValue = value;
  }
  public resetAutoStartConfiguration() {
    this._autoStartConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStartConfigurationInput() {
    return this._autoStartConfiguration.internalValue;
  }

  // auto_stop_configuration - computed: true, optional: true, required: false
  private _autoStopConfiguration = new EmrserverlessApplicationAutoStopConfigurationOutputReference(this, "auto_stop_configuration");
  public get autoStopConfiguration() {
    return this._autoStopConfiguration;
  }
  public putAutoStopConfiguration(value: EmrserverlessApplicationAutoStopConfiguration) {
    this._autoStopConfiguration.internalValue = value;
  }
  public resetAutoStopConfiguration() {
    this._autoStopConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStopConfigurationInput() {
    return this._autoStopConfiguration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_configuration - computed: true, optional: true, required: false
  private _imageConfiguration = new EmrserverlessApplicationImageConfigurationOutputReference(this, "image_configuration");
  public get imageConfiguration() {
    return this._imageConfiguration;
  }
  public putImageConfiguration(value: EmrserverlessApplicationImageConfiguration) {
    this._imageConfiguration.internalValue = value;
  }
  public resetImageConfiguration() {
    this._imageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConfigurationInput() {
    return this._imageConfiguration.internalValue;
  }

  // initial_capacity - computed: true, optional: true, required: false
  private _initialCapacity = new EmrserverlessApplicationInitialCapacityList(this, "initial_capacity", true);
  public get initialCapacity() {
    return this._initialCapacity;
  }
  public putInitialCapacity(value: EmrserverlessApplicationInitialCapacity[] | cdktn.IResolvable) {
    this._initialCapacity.internalValue = value;
  }
  public resetInitialCapacity() {
    this._initialCapacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCapacityInput() {
    return this._initialCapacity.internalValue;
  }

  // maximum_capacity - computed: true, optional: true, required: false
  private _maximumCapacity = new EmrserverlessApplicationMaximumCapacityOutputReference(this, "maximum_capacity");
  public get maximumCapacity() {
    return this._maximumCapacity;
  }
  public putMaximumCapacity(value: EmrserverlessApplicationMaximumCapacity) {
    this._maximumCapacity.internalValue = value;
  }
  public resetMaximumCapacity() {
    this._maximumCapacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCapacityInput() {
    return this._maximumCapacity.internalValue;
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

  // network_configuration - computed: true, optional: true, required: false
  private _networkConfiguration = new EmrserverlessApplicationNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: EmrserverlessApplicationNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // release_label - computed: false, optional: false, required: true
  private _releaseLabel?: string; 
  public get releaseLabel() {
    return this.getStringAttribute('release_label');
  }
  public set releaseLabel(value: string) {
    this._releaseLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseLabelInput() {
    return this._releaseLabel;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new EmrserverlessApplicationTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: EmrserverlessApplicationTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // worker_type_specifications - computed: true, optional: true, required: false
  private _workerTypeSpecifications = new EmrserverlessApplicationWorkerTypeSpecificationsMap(this, "worker_type_specifications");
  public get workerTypeSpecifications() {
    return this._workerTypeSpecifications;
  }
  public putWorkerTypeSpecifications(value: { [key: string]: EmrserverlessApplicationWorkerTypeSpecifications } | cdktn.IResolvable) {
    this._workerTypeSpecifications.internalValue = value;
  }
  public resetWorkerTypeSpecifications() {
    this._workerTypeSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerTypeSpecificationsInput() {
    return this._workerTypeSpecifications.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      architecture: cdktn.stringToTerraform(this._architecture),
      auto_start_configuration: emrserverlessApplicationAutoStartConfigurationToTerraform(this._autoStartConfiguration.internalValue),
      auto_stop_configuration: emrserverlessApplicationAutoStopConfigurationToTerraform(this._autoStopConfiguration.internalValue),
      image_configuration: emrserverlessApplicationImageConfigurationToTerraform(this._imageConfiguration.internalValue),
      initial_capacity: cdktn.listMapper(emrserverlessApplicationInitialCapacityToTerraform, false)(this._initialCapacity.internalValue),
      maximum_capacity: emrserverlessApplicationMaximumCapacityToTerraform(this._maximumCapacity.internalValue),
      name: cdktn.stringToTerraform(this._name),
      network_configuration: emrserverlessApplicationNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      release_label: cdktn.stringToTerraform(this._releaseLabel),
      tags: cdktn.listMapper(emrserverlessApplicationTagsToTerraform, false)(this._tags.internalValue),
      type: cdktn.stringToTerraform(this._type),
      worker_type_specifications: cdktn.hashMapper(emrserverlessApplicationWorkerTypeSpecificationsToTerraform)(this._workerTypeSpecifications.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      architecture: {
        value: cdktn.stringToHclTerraform(this._architecture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_start_configuration: {
        value: emrserverlessApplicationAutoStartConfigurationToHclTerraform(this._autoStartConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EmrserverlessApplicationAutoStartConfiguration",
      },
      auto_stop_configuration: {
        value: emrserverlessApplicationAutoStopConfigurationToHclTerraform(this._autoStopConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EmrserverlessApplicationAutoStopConfiguration",
      },
      image_configuration: {
        value: emrserverlessApplicationImageConfigurationToHclTerraform(this._imageConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EmrserverlessApplicationImageConfiguration",
      },
      initial_capacity: {
        value: cdktn.listMapperHcl(emrserverlessApplicationInitialCapacityToHclTerraform, false)(this._initialCapacity.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EmrserverlessApplicationInitialCapacityList",
      },
      maximum_capacity: {
        value: emrserverlessApplicationMaximumCapacityToHclTerraform(this._maximumCapacity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EmrserverlessApplicationMaximumCapacity",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_configuration: {
        value: emrserverlessApplicationNetworkConfigurationToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EmrserverlessApplicationNetworkConfiguration",
      },
      release_label: {
        value: cdktn.stringToHclTerraform(this._releaseLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(emrserverlessApplicationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EmrserverlessApplicationTagsList",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_type_specifications: {
        value: cdktn.hashMapperHcl(emrserverlessApplicationWorkerTypeSpecificationsToHclTerraform)(this._workerTypeSpecifications.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "EmrserverlessApplicationWorkerTypeSpecificationsMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
