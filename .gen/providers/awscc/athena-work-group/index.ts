// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AthenaWorkGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * The workgroup description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#description AthenaWorkGroup#description}
  */
  readonly description?: string;
  /**
  * The workGroup name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#name AthenaWorkGroup#name}
  */
  readonly name: string;
  /**
  * The option to delete the workgroup and its contents even if the workgroup contains any named queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#recursive_delete_option AthenaWorkGroup#recursive_delete_option}
  */
  readonly recursiveDeleteOption?: boolean | cdktn.IResolvable;
  /**
  * The state of the workgroup: ENABLED or DISABLED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#state AthenaWorkGroup#state}
  */
  readonly state?: string;
  /**
  * One or more tags, separated by commas, that you want to attach to the workgroup as you create it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#tags AthenaWorkGroup#tags}
  */
  readonly tags?: AthenaWorkGroupTags[] | cdktn.IResolvable;
  /**
  * The workgroup configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#work_group_configuration AthenaWorkGroup#work_group_configuration}
  */
  readonly workGroupConfiguration?: AthenaWorkGroupWorkGroupConfiguration;
  /**
  * The workgroup configuration update object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#work_group_configuration_updates AthenaWorkGroup#work_group_configuration_updates}
  */
  readonly workGroupConfigurationUpdates?: AthenaWorkGroupWorkGroupConfigurationUpdates;
}
export interface AthenaWorkGroupTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#key AthenaWorkGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#value AthenaWorkGroup#value}
  */
  readonly value?: string;
}

export function athenaWorkGroupTagsToTerraform(struct?: AthenaWorkGroupTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function athenaWorkGroupTagsToHclTerraform(struct?: AthenaWorkGroupTags | cdktn.IResolvable): any {
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

export class AthenaWorkGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AthenaWorkGroupTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AthenaWorkGroupTags | cdktn.IResolvable | undefined) {
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

export class AthenaWorkGroupTagsList extends cdktn.ComplexList {
  public internalValue? : AthenaWorkGroupTags[] | cdktn.IResolvable

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
  public get(index: number): AthenaWorkGroupTagsOutputReference {
    return new AthenaWorkGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration {
  /**
  * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}
  */
  readonly kmsKey?: string;
}

export function athenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
  }
}


export function athenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKey = value.kmsKey;
    }
  }

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string;
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications {
  /**
  * The name of the configuration classification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#name AthenaWorkGroup#name}
  */
  readonly name?: string;
  /**
  * A set of properties specified within a configuration classification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#properties AthenaWorkGroup#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function athenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.properties),
  }
}


export function athenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._properties = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._properties = value.properties;
    }
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

  // properties - computed: true, optional: true, required: false
  private _properties?: { [key: string]: string };
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }
}

export class AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList extends cdktn.ComplexList {
  public internalValue? : AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications[] | cdktn.IResolvable

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
  public get(index: number): AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference {
    return new AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationEngineConfiguration {
  /**
  * Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs. To specify an Athena notebook that the Jupyter server will download and serve, specify a value for the StartSessionRequest$NotebookVersion field, and then add a key named NotebookId to AdditionalConfigs that has the value of the Athena notebook ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#additional_configs AthenaWorkGroup#additional_configs}
  */
  readonly additionalConfigs?: { [key: string]: string };
  /**
  * The configuration classifications that can be specified for the engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#classifications AthenaWorkGroup#classifications}
  */
  readonly classifications?: AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications[] | cdktn.IResolvable;
  /**
  * The number of DPUs to use for the coordinator. A coordinator is a special executor that orchestrates processing work and manages other executors in a notebook session. The default is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#coordinator_dpu_size AthenaWorkGroup#coordinator_dpu_size}
  */
  readonly coordinatorDpuSize?: number;
  /**
  * The default number of DPUs to use for executors. An executor is the smallest unit of compute that a notebook session can request from Athena. The default is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#default_executor_dpu_size AthenaWorkGroup#default_executor_dpu_size}
  */
  readonly defaultExecutorDpuSize?: number;
  /**
  * The maximum number of DPUs that can run concurrently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#max_concurrent_dpus AthenaWorkGroup#max_concurrent_dpus}
  */
  readonly maxConcurrentDpus?: number;
  /**
  * Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#spark_properties AthenaWorkGroup#spark_properties}
  */
  readonly sparkProperties?: { [key: string]: string };
}

export function athenaWorkGroupWorkGroupConfigurationEngineConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationEngineConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_configs: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.additionalConfigs),
    classifications: cdktn.listMapper(athenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsToTerraform, false)(struct!.classifications),
    coordinator_dpu_size: cdktn.numberToTerraform(struct!.coordinatorDpuSize),
    default_executor_dpu_size: cdktn.numberToTerraform(struct!.defaultExecutorDpuSize),
    max_concurrent_dpus: cdktn.numberToTerraform(struct!.maxConcurrentDpus),
    spark_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sparkProperties),
  }
}


export function athenaWorkGroupWorkGroupConfigurationEngineConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationEngineConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_configs: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.additionalConfigs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    classifications: {
      value: cdktn.listMapperHcl(athenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsToHclTerraform, false)(struct!.classifications),
      isBlock: true,
      type: "list",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList",
    },
    coordinator_dpu_size: {
      value: cdktn.numberToHclTerraform(struct!.coordinatorDpuSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_executor_dpu_size: {
      value: cdktn.numberToHclTerraform(struct!.defaultExecutorDpuSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_concurrent_dpus: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrentDpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spark_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sparkProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationEngineConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalConfigs !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalConfigs = this._additionalConfigs;
    }
    if (this._classifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classifications = this._classifications?.internalValue;
    }
    if (this._coordinatorDpuSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinatorDpuSize = this._coordinatorDpuSize;
    }
    if (this._defaultExecutorDpuSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultExecutorDpuSize = this._defaultExecutorDpuSize;
    }
    if (this._maxConcurrentDpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentDpus = this._maxConcurrentDpus;
    }
    if (this._sparkProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkProperties = this._sparkProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationEngineConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalConfigs = undefined;
      this._classifications.internalValue = undefined;
      this._coordinatorDpuSize = undefined;
      this._defaultExecutorDpuSize = undefined;
      this._maxConcurrentDpus = undefined;
      this._sparkProperties = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalConfigs = value.additionalConfigs;
      this._classifications.internalValue = value.classifications;
      this._coordinatorDpuSize = value.coordinatorDpuSize;
      this._defaultExecutorDpuSize = value.defaultExecutorDpuSize;
      this._maxConcurrentDpus = value.maxConcurrentDpus;
      this._sparkProperties = value.sparkProperties;
    }
  }

  // additional_configs - computed: true, optional: true, required: false
  private _additionalConfigs?: { [key: string]: string };
  public get additionalConfigs() {
    return this.getStringMapAttribute('additional_configs');
  }
  public set additionalConfigs(value: { [key: string]: string }) {
    this._additionalConfigs = value;
  }
  public resetAdditionalConfigs() {
    this._additionalConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalConfigsInput() {
    return this._additionalConfigs;
  }

  // classifications - computed: true, optional: true, required: false
  private _classifications = new AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList(this, "classifications", false);
  public get classifications() {
    return this._classifications;
  }
  public putClassifications(value: AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications[] | cdktn.IResolvable) {
    this._classifications.internalValue = value;
  }
  public resetClassifications() {
    this._classifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationsInput() {
    return this._classifications.internalValue;
  }

  // coordinator_dpu_size - computed: true, optional: true, required: false
  private _coordinatorDpuSize?: number;
  public get coordinatorDpuSize() {
    return this.getNumberAttribute('coordinator_dpu_size');
  }
  public set coordinatorDpuSize(value: number) {
    this._coordinatorDpuSize = value;
  }
  public resetCoordinatorDpuSize() {
    this._coordinatorDpuSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatorDpuSizeInput() {
    return this._coordinatorDpuSize;
  }

  // default_executor_dpu_size - computed: true, optional: true, required: false
  private _defaultExecutorDpuSize?: number;
  public get defaultExecutorDpuSize() {
    return this.getNumberAttribute('default_executor_dpu_size');
  }
  public set defaultExecutorDpuSize(value: number) {
    this._defaultExecutorDpuSize = value;
  }
  public resetDefaultExecutorDpuSize() {
    this._defaultExecutorDpuSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultExecutorDpuSizeInput() {
    return this._defaultExecutorDpuSize;
  }

  // max_concurrent_dpus - computed: true, optional: true, required: false
  private _maxConcurrentDpus?: number;
  public get maxConcurrentDpus() {
    return this.getNumberAttribute('max_concurrent_dpus');
  }
  public set maxConcurrentDpus(value: number) {
    this._maxConcurrentDpus = value;
  }
  public resetMaxConcurrentDpus() {
    this._maxConcurrentDpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentDpusInput() {
    return this._maxConcurrentDpus;
  }

  // spark_properties - computed: true, optional: true, required: false
  private _sparkProperties?: { [key: string]: string };
  public get sparkProperties() {
    return this.getStringMapAttribute('spark_properties');
  }
  public set sparkProperties(value: { [key: string]: string }) {
    this._sparkProperties = value;
  }
  public resetSparkProperties() {
    this._sparkProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkPropertiesInput() {
    return this._sparkProperties;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationEngineVersion {
  /**
  * The engine version requested by the user. Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#selected_engine_version AthenaWorkGroup#selected_engine_version}
  */
  readonly selectedEngineVersion?: string;
}

export function athenaWorkGroupWorkGroupConfigurationEngineVersionToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationEngineVersion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    selected_engine_version: cdktn.stringToTerraform(struct!.selectedEngineVersion),
  }
}


export function athenaWorkGroupWorkGroupConfigurationEngineVersionToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationEngineVersion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    selected_engine_version: {
      value: cdktn.stringToHclTerraform(struct!.selectedEngineVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationEngineVersion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectedEngineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedEngineVersion = this._selectedEngineVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationEngineVersion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selectedEngineVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selectedEngineVersion = value.selectedEngineVersion;
    }
  }

  // effective_engine_version - computed: true, optional: false, required: false
  public get effectiveEngineVersion() {
    return this.getStringAttribute('effective_engine_version');
  }

  // selected_engine_version - computed: true, optional: true, required: false
  private _selectedEngineVersion?: string;
  public get selectedEngineVersion() {
    return this.getStringAttribute('selected_engine_version');
  }
  public set selectedEngineVersion(value: string) {
    this._selectedEngineVersion = value;
  }
  public resetSelectedEngineVersion() {
    this._selectedEngineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedEngineVersionInput() {
    return this._selectedEngineVersion;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration {
  /**
  * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}
  */
  readonly kmsKey?: string;
}

export function athenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
  }
}


export function athenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKey = value.kmsKey;
    }
  }

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string;
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Indicates the encryption configuration for Athena Managed Storage. If not setting this field, Managed Storage will encrypt the query results with Athena's encryption key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}
  */
  readonly encryptionConfiguration?: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration;
}

export function athenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    encryption_configuration: athenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
  }
}


export function athenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration | cdktn.IResolvable): any {
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
    encryption_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationToHclTerraform(struct!.encryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._encryptionConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
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

  // encryption_configuration - computed: true, optional: true, required: false
  private _encryptionConfiguration = new AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration {
  /**
  * Enables CloudWatch logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#log_group AthenaWorkGroup#log_group}
  */
  readonly logGroup?: string;
  /**
  * Prefix for the CloudWatch log stream name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#log_stream_name_prefix AthenaWorkGroup#log_stream_name_prefix}
  */
  readonly logStreamNamePrefix?: string;
  /**
  * The types of logs that you want to publish to CloudWatch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#log_types AthenaWorkGroup#log_types}
  */
  readonly logTypes?: { [key: string]: string[] } | cdktn.IResolvable;
}

export function athenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group: cdktn.stringToTerraform(struct!.logGroup),
    log_stream_name_prefix: cdktn.stringToTerraform(struct!.logStreamNamePrefix),
    log_types: cdktn.hashMapper(cdktn.listMapper(cdktn.stringToTerraform, false))(struct!.logTypes),
  }
}


export function athenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration | cdktn.IResolvable): any {
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
    log_group: {
      value: cdktn.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name_prefix: {
      value: cdktn.stringToHclTerraform(struct!.logStreamNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_types: {
      value: cdktn.hashMapperHcl(cdktn.listMapperHcl(cdktn.stringToHclTerraform, false))(struct!.logTypes),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    if (this._logStreamNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamNamePrefix = this._logStreamNamePrefix;
    }
    if (this._logTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypes = this._logTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._logGroup = undefined;
      this._logStreamNamePrefix = undefined;
      this._logTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._logGroup = value.logGroup;
      this._logStreamNamePrefix = value.logStreamNamePrefix;
      this._logTypes = value.logTypes;
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

  // log_group - computed: true, optional: true, required: false
  private _logGroup?: string;
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  public resetLogGroup() {
    this._logGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }

  // log_stream_name_prefix - computed: true, optional: true, required: false
  private _logStreamNamePrefix?: string;
  public get logStreamNamePrefix() {
    return this.getStringAttribute('log_stream_name_prefix');
  }
  public set logStreamNamePrefix(value: string) {
    this._logStreamNamePrefix = value;
  }
  public resetLogStreamNamePrefix() {
    this._logStreamNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNamePrefixInput() {
    return this._logStreamNamePrefix;
  }

  // log_types - computed: true, optional: true, required: false
  private _logTypes?: { [key: string]: string[] } | cdktn.IResolvable;
  public get logTypes() {
    return this.interpolationForAttribute('log_types');
  }
  public set logTypes(value: { [key: string]: string[] } | cdktn.IResolvable) {
    this._logTypes = value;
  }
  public resetLogTypes() {
    this._logTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypesInput() {
    return this._logTypes;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration {
  /**
  * Enables managed log persistence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The KMS key ARN to encrypt the logs stored in managed log persistence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}
  */
  readonly kmsKey?: string;
}

export function athenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
  }
}


export function athenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration | cdktn.IResolvable): any {
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
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._kmsKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._kmsKey = value.kmsKey;
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

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string;
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration {
  /**
  * Enables S3 log delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * The Amazon S3 destination URI for log publishing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#log_location AthenaWorkGroup#log_location}
  */
  readonly logLocation?: string;
}

export function athenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    log_location: cdktn.stringToTerraform(struct!.logLocation),
  }
}


export function athenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration | cdktn.IResolvable): any {
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
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_location: {
      value: cdktn.stringToHclTerraform(struct!.logLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._logLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLocation = this._logLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._kmsKey = undefined;
      this._logLocation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._kmsKey = value.kmsKey;
      this._logLocation = value.logLocation;
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

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string;
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // log_location - computed: true, optional: true, required: false
  private _logLocation?: string;
  public get logLocation() {
    return this.getStringAttribute('log_location');
  }
  public set logLocation(value: string) {
    this._logLocation = value;
  }
  public resetLogLocation() {
    this._logLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLocationInput() {
    return this._logLocation;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration {
  /**
  * Configuration settings for delivering logs to Amazon CloudWatch log groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#cloudwatch_logging_configuration AthenaWorkGroup#cloudwatch_logging_configuration}
  */
  readonly cloudwatchLoggingConfiguration?: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration;
  /**
  * Configuration settings for managed log persistence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#managed_logging_configuration AthenaWorkGroup#managed_logging_configuration}
  */
  readonly managedLoggingConfiguration?: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration;
  /**
  * Configuration settings for delivering logs to Amazon S3 buckets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#s3_logging_configuration AthenaWorkGroup#s3_logging_configuration}
  */
  readonly s3LoggingConfiguration?: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration;
}

export function athenaWorkGroupWorkGroupConfigurationMonitoringConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_logging_configuration: athenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationToTerraform(struct!.cloudwatchLoggingConfiguration),
    managed_logging_configuration: athenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationToTerraform(struct!.managedLoggingConfiguration),
    s3_logging_configuration: athenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationToTerraform(struct!.s3LoggingConfiguration),
  }
}


export function athenaWorkGroupWorkGroupConfigurationMonitoringConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_logging_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationToHclTerraform(struct!.cloudwatchLoggingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration",
    },
    managed_logging_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationToHclTerraform(struct!.managedLoggingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration",
    },
    s3_logging_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationToHclTerraform(struct!.s3LoggingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLoggingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingConfiguration = this._cloudwatchLoggingConfiguration?.internalValue;
    }
    if (this._managedLoggingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedLoggingConfiguration = this._managedLoggingConfiguration?.internalValue;
    }
    if (this._s3LoggingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3LoggingConfiguration = this._s3LoggingConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchLoggingConfiguration.internalValue = undefined;
      this._managedLoggingConfiguration.internalValue = undefined;
      this._s3LoggingConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchLoggingConfiguration.internalValue = value.cloudwatchLoggingConfiguration;
      this._managedLoggingConfiguration.internalValue = value.managedLoggingConfiguration;
      this._s3LoggingConfiguration.internalValue = value.s3LoggingConfiguration;
    }
  }

  // cloudwatch_logging_configuration - computed: true, optional: true, required: false
  private _cloudwatchLoggingConfiguration = new AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference(this, "cloudwatch_logging_configuration");
  public get cloudwatchLoggingConfiguration() {
    return this._cloudwatchLoggingConfiguration;
  }
  public putCloudwatchLoggingConfiguration(value: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration) {
    this._cloudwatchLoggingConfiguration.internalValue = value;
  }
  public resetCloudwatchLoggingConfiguration() {
    this._cloudwatchLoggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingConfigurationInput() {
    return this._cloudwatchLoggingConfiguration.internalValue;
  }

  // managed_logging_configuration - computed: true, optional: true, required: false
  private _managedLoggingConfiguration = new AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference(this, "managed_logging_configuration");
  public get managedLoggingConfiguration() {
    return this._managedLoggingConfiguration;
  }
  public putManagedLoggingConfiguration(value: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration) {
    this._managedLoggingConfiguration.internalValue = value;
  }
  public resetManagedLoggingConfiguration() {
    this._managedLoggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedLoggingConfigurationInput() {
    return this._managedLoggingConfiguration.internalValue;
  }

  // s3_logging_configuration - computed: true, optional: true, required: false
  private _s3LoggingConfiguration = new AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference(this, "s3_logging_configuration");
  public get s3LoggingConfiguration() {
    return this._s3LoggingConfiguration;
  }
  public putS3LoggingConfiguration(value: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration) {
    this._s3LoggingConfiguration.internalValue = value;
  }
  public resetS3LoggingConfiguration() {
    this._s3LoggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LoggingConfigurationInput() {
    return this._s3LoggingConfiguration.internalValue;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration {
  /**
  * The Amazon S3 canned ACL that Athena should specify when storing query results. Currently the only supported canned ACL is BUCKET_OWNER_FULL_CONTROL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#s3_acl_option AthenaWorkGroup#s3_acl_option}
  */
  readonly s3AclOption?: string;
}

export function athenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_acl_option: cdktn.stringToTerraform(struct!.s3AclOption),
  }
}


export function athenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_acl_option: {
      value: cdktn.stringToHclTerraform(struct!.s3AclOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3AclOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3AclOption = this._s3AclOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3AclOption = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3AclOption = value.s3AclOption;
    }
  }

  // s3_acl_option - computed: true, optional: true, required: false
  private _s3AclOption?: string;
  public get s3AclOption() {
    return this.getStringAttribute('s3_acl_option');
  }
  public set s3AclOption(value: string) {
    this._s3AclOption = value;
  }
  public resetS3AclOption() {
    this._s3AclOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AclOptionInput() {
    return this._s3AclOption;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration {
  /**
  * Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#encryption_option AthenaWorkGroup#encryption_option}
  */
  readonly encryptionOption?: string;
  /**
  * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}
  */
  readonly kmsKey?: string;
}

export function athenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_option: cdktn.stringToTerraform(struct!.encryptionOption),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
  }
}


export function athenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_option: {
      value: cdktn.stringToHclTerraform(struct!.encryptionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionOption = this._encryptionOption;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionOption = undefined;
      this._kmsKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionOption = value.encryptionOption;
      this._kmsKey = value.kmsKey;
    }
  }

  // encryption_option - computed: true, optional: true, required: false
  private _encryptionOption?: string;
  public get encryptionOption() {
    return this.getStringAttribute('encryption_option');
  }
  public set encryptionOption(value: string) {
    this._encryptionOption = value;
  }
  public resetEncryptionOption() {
    this._encryptionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionOptionInput() {
    return this._encryptionOption;
  }

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string;
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationResultConfiguration {
  /**
  * Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#acl_configuration AthenaWorkGroup#acl_configuration}
  */
  readonly aclConfiguration?: AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration;
  /**
  * If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}
  */
  readonly encryptionConfiguration?: AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration;
  /**
  * The AWS account ID of the owner of S3 bucket where query results are stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#expected_bucket_owner AthenaWorkGroup#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
  /**
  * The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#output_location AthenaWorkGroup#output_location}
  */
  readonly outputLocation?: string;
}

export function athenaWorkGroupWorkGroupConfigurationResultConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationResultConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    acl_configuration: athenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationToTerraform(struct!.aclConfiguration),
    encryption_configuration: athenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    expected_bucket_owner: cdktn.stringToTerraform(struct!.expectedBucketOwner),
    output_location: cdktn.stringToTerraform(struct!.outputLocation),
  }
}


export function athenaWorkGroupWorkGroupConfigurationResultConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationResultConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    acl_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationToHclTerraform(struct!.aclConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration",
    },
    encryption_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationToHclTerraform(struct!.encryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration",
    },
    expected_bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.expectedBucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_location: {
      value: cdktn.stringToHclTerraform(struct!.outputLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationResultConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclConfiguration = this._aclConfiguration?.internalValue;
    }
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    if (this._expectedBucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedBucketOwner = this._expectedBucketOwner;
    }
    if (this._outputLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputLocation = this._outputLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationResultConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclConfiguration.internalValue = undefined;
      this._encryptionConfiguration.internalValue = undefined;
      this._expectedBucketOwner = undefined;
      this._outputLocation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclConfiguration.internalValue = value.aclConfiguration;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
      this._expectedBucketOwner = value.expectedBucketOwner;
      this._outputLocation = value.outputLocation;
    }
  }

  // acl_configuration - computed: true, optional: true, required: false
  private _aclConfiguration = new AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference(this, "acl_configuration");
  public get aclConfiguration() {
    return this._aclConfiguration;
  }
  public putAclConfiguration(value: AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration) {
    this._aclConfiguration.internalValue = value;
  }
  public resetAclConfiguration() {
    this._aclConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclConfigurationInput() {
    return this._aclConfiguration.internalValue;
  }

  // encryption_configuration - computed: true, optional: true, required: false
  private _encryptionConfiguration = new AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // expected_bucket_owner - computed: true, optional: true, required: false
  private _expectedBucketOwner?: string;
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }
  public set expectedBucketOwner(value: string) {
    this._expectedBucketOwner = value;
  }
  public resetExpectedBucketOwner() {
    this._expectedBucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedBucketOwnerInput() {
    return this._expectedBucketOwner;
  }

  // output_location - computed: true, optional: true, required: false
  private _outputLocation?: string;
  public get outputLocation() {
    return this.getStringAttribute('output_location');
  }
  public set outputLocation(value: string) {
    this._outputLocation = value;
  }
  public resetOutputLocation() {
    this._outputLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation;
  }
}
export interface AthenaWorkGroupWorkGroupConfiguration {
  /**
  * Additional Configuration that are passed to Athena Spark Calculations running in this workgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#additional_configuration AthenaWorkGroup#additional_configuration}
  */
  readonly additionalConfiguration?: string;
  /**
  * The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#bytes_scanned_cutoff_per_query AthenaWorkGroup#bytes_scanned_cutoff_per_query}
  */
  readonly bytesScannedCutoffPerQuery?: number;
  /**
  * Indicates the KMS key for encrypting notebook content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#customer_content_encryption_configuration AthenaWorkGroup#customer_content_encryption_configuration}
  */
  readonly customerContentEncryptionConfiguration?: AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration;
  /**
  * If set to "true", the settings for the workgroup override client-side settings. If set to "false", client-side settings are used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#enforce_work_group_configuration AthenaWorkGroup#enforce_work_group_configuration}
  */
  readonly enforceWorkGroupConfiguration?: boolean | cdktn.IResolvable;
  /**
  * The engine configuration for running queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#engine_configuration AthenaWorkGroup#engine_configuration}
  */
  readonly engineConfiguration?: AthenaWorkGroupWorkGroupConfigurationEngineConfiguration;
  /**
  * The Athena engine version for running queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#engine_version AthenaWorkGroup#engine_version}
  */
  readonly engineVersion?: AthenaWorkGroupWorkGroupConfigurationEngineVersion;
  /**
  * The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups. This property applies only to Spark enabled workgroups and Identity Center enabled workgroups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#execution_role AthenaWorkGroup#execution_role}
  */
  readonly executionRole?: string;
  /**
  * The configuration for the managed query results and encryption option. ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#managed_query_results_configuration AthenaWorkGroup#managed_query_results_configuration}
  */
  readonly managedQueryResultsConfiguration?: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration;
  /**
  * Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#monitoring_configuration AthenaWorkGroup#monitoring_configuration}
  */
  readonly monitoringConfiguration?: AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration;
  /**
  * Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#publish_cloudwatch_metrics_enabled AthenaWorkGroup#publish_cloudwatch_metrics_enabled}
  */
  readonly publishCloudwatchMetricsEnabled?: boolean | cdktn.IResolvable;
  /**
  * If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#requester_pays_enabled AthenaWorkGroup#requester_pays_enabled}
  */
  readonly requesterPaysEnabled?: boolean | cdktn.IResolvable;
  /**
  * The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.
  *
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#result_configuration AthenaWorkGroup#result_configuration}
  */
  readonly resultConfiguration?: AthenaWorkGroupWorkGroupConfigurationResultConfiguration;
}

export function athenaWorkGroupWorkGroupConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_configuration: cdktn.stringToTerraform(struct!.additionalConfiguration),
    bytes_scanned_cutoff_per_query: cdktn.numberToTerraform(struct!.bytesScannedCutoffPerQuery),
    customer_content_encryption_configuration: athenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationToTerraform(struct!.customerContentEncryptionConfiguration),
    enforce_work_group_configuration: cdktn.booleanToTerraform(struct!.enforceWorkGroupConfiguration),
    engine_configuration: athenaWorkGroupWorkGroupConfigurationEngineConfigurationToTerraform(struct!.engineConfiguration),
    engine_version: athenaWorkGroupWorkGroupConfigurationEngineVersionToTerraform(struct!.engineVersion),
    execution_role: cdktn.stringToTerraform(struct!.executionRole),
    managed_query_results_configuration: athenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationToTerraform(struct!.managedQueryResultsConfiguration),
    monitoring_configuration: athenaWorkGroupWorkGroupConfigurationMonitoringConfigurationToTerraform(struct!.monitoringConfiguration),
    publish_cloudwatch_metrics_enabled: cdktn.booleanToTerraform(struct!.publishCloudwatchMetricsEnabled),
    requester_pays_enabled: cdktn.booleanToTerraform(struct!.requesterPaysEnabled),
    result_configuration: athenaWorkGroupWorkGroupConfigurationResultConfigurationToTerraform(struct!.resultConfiguration),
  }
}


export function athenaWorkGroupWorkGroupConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_configuration: {
      value: cdktn.stringToHclTerraform(struct!.additionalConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bytes_scanned_cutoff_per_query: {
      value: cdktn.numberToHclTerraform(struct!.bytesScannedCutoffPerQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    customer_content_encryption_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationToHclTerraform(struct!.customerContentEncryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration",
    },
    enforce_work_group_configuration: {
      value: cdktn.booleanToHclTerraform(struct!.enforceWorkGroupConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    engine_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationEngineConfigurationToHclTerraform(struct!.engineConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationEngineConfiguration",
    },
    engine_version: {
      value: athenaWorkGroupWorkGroupConfigurationEngineVersionToHclTerraform(struct!.engineVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationEngineVersion",
    },
    execution_role: {
      value: cdktn.stringToHclTerraform(struct!.executionRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_query_results_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationToHclTerraform(struct!.managedQueryResultsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration",
    },
    monitoring_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationMonitoringConfigurationToHclTerraform(struct!.monitoringConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration",
    },
    publish_cloudwatch_metrics_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.publishCloudwatchMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    requester_pays_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.requesterPaysEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    result_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationResultConfigurationToHclTerraform(struct!.resultConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationResultConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalConfiguration = this._additionalConfiguration;
    }
    if (this._bytesScannedCutoffPerQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesScannedCutoffPerQuery = this._bytesScannedCutoffPerQuery;
    }
    if (this._customerContentEncryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerContentEncryptionConfiguration = this._customerContentEncryptionConfiguration?.internalValue;
    }
    if (this._enforceWorkGroupConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceWorkGroupConfiguration = this._enforceWorkGroupConfiguration;
    }
    if (this._engineConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineConfiguration = this._engineConfiguration?.internalValue;
    }
    if (this._engineVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion?.internalValue;
    }
    if (this._executionRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRole = this._executionRole;
    }
    if (this._managedQueryResultsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedQueryResultsConfiguration = this._managedQueryResultsConfiguration?.internalValue;
    }
    if (this._monitoringConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringConfiguration = this._monitoringConfiguration?.internalValue;
    }
    if (this._publishCloudwatchMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishCloudwatchMetricsEnabled = this._publishCloudwatchMetricsEnabled;
    }
    if (this._requesterPaysEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.requesterPaysEnabled = this._requesterPaysEnabled;
    }
    if (this._resultConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultConfiguration = this._resultConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalConfiguration = undefined;
      this._bytesScannedCutoffPerQuery = undefined;
      this._customerContentEncryptionConfiguration.internalValue = undefined;
      this._enforceWorkGroupConfiguration = undefined;
      this._engineConfiguration.internalValue = undefined;
      this._engineVersion.internalValue = undefined;
      this._executionRole = undefined;
      this._managedQueryResultsConfiguration.internalValue = undefined;
      this._monitoringConfiguration.internalValue = undefined;
      this._publishCloudwatchMetricsEnabled = undefined;
      this._requesterPaysEnabled = undefined;
      this._resultConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalConfiguration = value.additionalConfiguration;
      this._bytesScannedCutoffPerQuery = value.bytesScannedCutoffPerQuery;
      this._customerContentEncryptionConfiguration.internalValue = value.customerContentEncryptionConfiguration;
      this._enforceWorkGroupConfiguration = value.enforceWorkGroupConfiguration;
      this._engineConfiguration.internalValue = value.engineConfiguration;
      this._engineVersion.internalValue = value.engineVersion;
      this._executionRole = value.executionRole;
      this._managedQueryResultsConfiguration.internalValue = value.managedQueryResultsConfiguration;
      this._monitoringConfiguration.internalValue = value.monitoringConfiguration;
      this._publishCloudwatchMetricsEnabled = value.publishCloudwatchMetricsEnabled;
      this._requesterPaysEnabled = value.requesterPaysEnabled;
      this._resultConfiguration.internalValue = value.resultConfiguration;
    }
  }

  // additional_configuration - computed: true, optional: true, required: false
  private _additionalConfiguration?: string;
  public get additionalConfiguration() {
    return this.getStringAttribute('additional_configuration');
  }
  public set additionalConfiguration(value: string) {
    this._additionalConfiguration = value;
  }
  public resetAdditionalConfiguration() {
    this._additionalConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalConfigurationInput() {
    return this._additionalConfiguration;
  }

  // bytes_scanned_cutoff_per_query - computed: true, optional: true, required: false
  private _bytesScannedCutoffPerQuery?: number;
  public get bytesScannedCutoffPerQuery() {
    return this.getNumberAttribute('bytes_scanned_cutoff_per_query');
  }
  public set bytesScannedCutoffPerQuery(value: number) {
    this._bytesScannedCutoffPerQuery = value;
  }
  public resetBytesScannedCutoffPerQuery() {
    this._bytesScannedCutoffPerQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesScannedCutoffPerQueryInput() {
    return this._bytesScannedCutoffPerQuery;
  }

  // customer_content_encryption_configuration - computed: true, optional: true, required: false
  private _customerContentEncryptionConfiguration = new AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference(this, "customer_content_encryption_configuration");
  public get customerContentEncryptionConfiguration() {
    return this._customerContentEncryptionConfiguration;
  }
  public putCustomerContentEncryptionConfiguration(value: AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration) {
    this._customerContentEncryptionConfiguration.internalValue = value;
  }
  public resetCustomerContentEncryptionConfiguration() {
    this._customerContentEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerContentEncryptionConfigurationInput() {
    return this._customerContentEncryptionConfiguration.internalValue;
  }

  // enforce_work_group_configuration - computed: true, optional: true, required: false
  private _enforceWorkGroupConfiguration?: boolean | cdktn.IResolvable;
  public get enforceWorkGroupConfiguration() {
    return this.getBooleanAttribute('enforce_work_group_configuration');
  }
  public set enforceWorkGroupConfiguration(value: boolean | cdktn.IResolvable) {
    this._enforceWorkGroupConfiguration = value;
  }
  public resetEnforceWorkGroupConfiguration() {
    this._enforceWorkGroupConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceWorkGroupConfigurationInput() {
    return this._enforceWorkGroupConfiguration;
  }

  // engine_configuration - computed: true, optional: true, required: false
  private _engineConfiguration = new AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference(this, "engine_configuration");
  public get engineConfiguration() {
    return this._engineConfiguration;
  }
  public putEngineConfiguration(value: AthenaWorkGroupWorkGroupConfigurationEngineConfiguration) {
    this._engineConfiguration.internalValue = value;
  }
  public resetEngineConfiguration() {
    this._engineConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigurationInput() {
    return this._engineConfiguration.internalValue;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion = new AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference(this, "engine_version");
  public get engineVersion() {
    return this._engineVersion;
  }
  public putEngineVersion(value: AthenaWorkGroupWorkGroupConfigurationEngineVersion) {
    this._engineVersion.internalValue = value;
  }
  public resetEngineVersion() {
    this._engineVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion.internalValue;
  }

  // execution_role - computed: true, optional: true, required: false
  private _executionRole?: string;
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  public resetExecutionRole() {
    this._executionRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // managed_query_results_configuration - computed: true, optional: true, required: false
  private _managedQueryResultsConfiguration = new AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference(this, "managed_query_results_configuration");
  public get managedQueryResultsConfiguration() {
    return this._managedQueryResultsConfiguration;
  }
  public putManagedQueryResultsConfiguration(value: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration) {
    this._managedQueryResultsConfiguration.internalValue = value;
  }
  public resetManagedQueryResultsConfiguration() {
    this._managedQueryResultsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedQueryResultsConfigurationInput() {
    return this._managedQueryResultsConfiguration.internalValue;
  }

  // monitoring_configuration - computed: true, optional: true, required: false
  private _monitoringConfiguration = new AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference(this, "monitoring_configuration");
  public get monitoringConfiguration() {
    return this._monitoringConfiguration;
  }
  public putMonitoringConfiguration(value: AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration) {
    this._monitoringConfiguration.internalValue = value;
  }
  public resetMonitoringConfiguration() {
    this._monitoringConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringConfigurationInput() {
    return this._monitoringConfiguration.internalValue;
  }

  // publish_cloudwatch_metrics_enabled - computed: true, optional: true, required: false
  private _publishCloudwatchMetricsEnabled?: boolean | cdktn.IResolvable;
  public get publishCloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('publish_cloudwatch_metrics_enabled');
  }
  public set publishCloudwatchMetricsEnabled(value: boolean | cdktn.IResolvable) {
    this._publishCloudwatchMetricsEnabled = value;
  }
  public resetPublishCloudwatchMetricsEnabled() {
    this._publishCloudwatchMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishCloudwatchMetricsEnabledInput() {
    return this._publishCloudwatchMetricsEnabled;
  }

  // requester_pays_enabled - computed: true, optional: true, required: false
  private _requesterPaysEnabled?: boolean | cdktn.IResolvable;
  public get requesterPaysEnabled() {
    return this.getBooleanAttribute('requester_pays_enabled');
  }
  public set requesterPaysEnabled(value: boolean | cdktn.IResolvable) {
    this._requesterPaysEnabled = value;
  }
  public resetRequesterPaysEnabled() {
    this._requesterPaysEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterPaysEnabledInput() {
    return this._requesterPaysEnabled;
  }

  // result_configuration - computed: true, optional: true, required: false
  private _resultConfiguration = new AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference(this, "result_configuration");
  public get resultConfiguration() {
    return this._resultConfiguration;
  }
  public putResultConfiguration(value: AthenaWorkGroupWorkGroupConfigurationResultConfiguration) {
    this._resultConfiguration.internalValue = value;
  }
  public resetResultConfiguration() {
    this._resultConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultConfigurationInput() {
    return this._resultConfiguration.internalValue;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration {
  /**
  * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}
  */
  readonly kmsKey?: string;
}

export function athenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
  }
}


export function athenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKey = value.kmsKey;
    }
  }

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string;
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications {
  /**
  * The name of the configuration classification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#name AthenaWorkGroup#name}
  */
  readonly name?: string;
  /**
  * A set of properties specified within a configuration classification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#properties AthenaWorkGroup#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function athenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.properties),
  }
}


export function athenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._properties = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._properties = value.properties;
    }
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

  // properties - computed: true, optional: true, required: false
  private _properties?: { [key: string]: string };
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }
}

export class AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList extends cdktn.ComplexList {
  public internalValue? : AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications[] | cdktn.IResolvable

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
  public get(index: number): AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference {
    return new AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration {
  /**
  * Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs. To specify an Athena notebook that the Jupyter server will download and serve, specify a value for the StartSessionRequest$NotebookVersion field, and then add a key named NotebookId to AdditionalConfigs that has the value of the Athena notebook ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#additional_configs AthenaWorkGroup#additional_configs}
  */
  readonly additionalConfigs?: { [key: string]: string };
  /**
  * The configuration classifications that can be specified for the engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#classifications AthenaWorkGroup#classifications}
  */
  readonly classifications?: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications[] | cdktn.IResolvable;
  /**
  * The number of DPUs to use for the coordinator. A coordinator is a special executor that orchestrates processing work and manages other executors in a notebook session. The default is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#coordinator_dpu_size AthenaWorkGroup#coordinator_dpu_size}
  */
  readonly coordinatorDpuSize?: number;
  /**
  * The default number of DPUs to use for executors. An executor is the smallest unit of compute that a notebook session can request from Athena. The default is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#default_executor_dpu_size AthenaWorkGroup#default_executor_dpu_size}
  */
  readonly defaultExecutorDpuSize?: number;
  /**
  * The maximum number of DPUs that can run concurrently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#max_concurrent_dpus AthenaWorkGroup#max_concurrent_dpus}
  */
  readonly maxConcurrentDpus?: number;
  /**
  * Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#spark_properties AthenaWorkGroup#spark_properties}
  */
  readonly sparkProperties?: { [key: string]: string };
}

export function athenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_configs: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.additionalConfigs),
    classifications: cdktn.listMapper(athenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsToTerraform, false)(struct!.classifications),
    coordinator_dpu_size: cdktn.numberToTerraform(struct!.coordinatorDpuSize),
    default_executor_dpu_size: cdktn.numberToTerraform(struct!.defaultExecutorDpuSize),
    max_concurrent_dpus: cdktn.numberToTerraform(struct!.maxConcurrentDpus),
    spark_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sparkProperties),
  }
}


export function athenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_configs: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.additionalConfigs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    classifications: {
      value: cdktn.listMapperHcl(athenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsToHclTerraform, false)(struct!.classifications),
      isBlock: true,
      type: "list",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList",
    },
    coordinator_dpu_size: {
      value: cdktn.numberToHclTerraform(struct!.coordinatorDpuSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_executor_dpu_size: {
      value: cdktn.numberToHclTerraform(struct!.defaultExecutorDpuSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_concurrent_dpus: {
      value: cdktn.numberToHclTerraform(struct!.maxConcurrentDpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spark_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sparkProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalConfigs !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalConfigs = this._additionalConfigs;
    }
    if (this._classifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classifications = this._classifications?.internalValue;
    }
    if (this._coordinatorDpuSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinatorDpuSize = this._coordinatorDpuSize;
    }
    if (this._defaultExecutorDpuSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultExecutorDpuSize = this._defaultExecutorDpuSize;
    }
    if (this._maxConcurrentDpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentDpus = this._maxConcurrentDpus;
    }
    if (this._sparkProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkProperties = this._sparkProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalConfigs = undefined;
      this._classifications.internalValue = undefined;
      this._coordinatorDpuSize = undefined;
      this._defaultExecutorDpuSize = undefined;
      this._maxConcurrentDpus = undefined;
      this._sparkProperties = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalConfigs = value.additionalConfigs;
      this._classifications.internalValue = value.classifications;
      this._coordinatorDpuSize = value.coordinatorDpuSize;
      this._defaultExecutorDpuSize = value.defaultExecutorDpuSize;
      this._maxConcurrentDpus = value.maxConcurrentDpus;
      this._sparkProperties = value.sparkProperties;
    }
  }

  // additional_configs - computed: true, optional: true, required: false
  private _additionalConfigs?: { [key: string]: string };
  public get additionalConfigs() {
    return this.getStringMapAttribute('additional_configs');
  }
  public set additionalConfigs(value: { [key: string]: string }) {
    this._additionalConfigs = value;
  }
  public resetAdditionalConfigs() {
    this._additionalConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalConfigsInput() {
    return this._additionalConfigs;
  }

  // classifications - computed: true, optional: true, required: false
  private _classifications = new AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList(this, "classifications", false);
  public get classifications() {
    return this._classifications;
  }
  public putClassifications(value: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications[] | cdktn.IResolvable) {
    this._classifications.internalValue = value;
  }
  public resetClassifications() {
    this._classifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationsInput() {
    return this._classifications.internalValue;
  }

  // coordinator_dpu_size - computed: true, optional: true, required: false
  private _coordinatorDpuSize?: number;
  public get coordinatorDpuSize() {
    return this.getNumberAttribute('coordinator_dpu_size');
  }
  public set coordinatorDpuSize(value: number) {
    this._coordinatorDpuSize = value;
  }
  public resetCoordinatorDpuSize() {
    this._coordinatorDpuSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatorDpuSizeInput() {
    return this._coordinatorDpuSize;
  }

  // default_executor_dpu_size - computed: true, optional: true, required: false
  private _defaultExecutorDpuSize?: number;
  public get defaultExecutorDpuSize() {
    return this.getNumberAttribute('default_executor_dpu_size');
  }
  public set defaultExecutorDpuSize(value: number) {
    this._defaultExecutorDpuSize = value;
  }
  public resetDefaultExecutorDpuSize() {
    this._defaultExecutorDpuSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultExecutorDpuSizeInput() {
    return this._defaultExecutorDpuSize;
  }

  // max_concurrent_dpus - computed: true, optional: true, required: false
  private _maxConcurrentDpus?: number;
  public get maxConcurrentDpus() {
    return this.getNumberAttribute('max_concurrent_dpus');
  }
  public set maxConcurrentDpus(value: number) {
    this._maxConcurrentDpus = value;
  }
  public resetMaxConcurrentDpus() {
    this._maxConcurrentDpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentDpusInput() {
    return this._maxConcurrentDpus;
  }

  // spark_properties - computed: true, optional: true, required: false
  private _sparkProperties?: { [key: string]: string };
  public get sparkProperties() {
    return this.getStringMapAttribute('spark_properties');
  }
  public set sparkProperties(value: { [key: string]: string }) {
    this._sparkProperties = value;
  }
  public resetSparkProperties() {
    this._sparkProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkPropertiesInput() {
    return this._sparkProperties;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion {
  /**
  * The engine version requested by the user. Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#selected_engine_version AthenaWorkGroup#selected_engine_version}
  */
  readonly selectedEngineVersion?: string;
}

export function athenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    selected_engine_version: cdktn.stringToTerraform(struct!.selectedEngineVersion),
  }
}


export function athenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    selected_engine_version: {
      value: cdktn.stringToHclTerraform(struct!.selectedEngineVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectedEngineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedEngineVersion = this._selectedEngineVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selectedEngineVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selectedEngineVersion = value.selectedEngineVersion;
    }
  }

  // effective_engine_version - computed: true, optional: false, required: false
  public get effectiveEngineVersion() {
    return this.getStringAttribute('effective_engine_version');
  }

  // selected_engine_version - computed: true, optional: true, required: false
  private _selectedEngineVersion?: string;
  public get selectedEngineVersion() {
    return this.getStringAttribute('selected_engine_version');
  }
  public set selectedEngineVersion(value: string) {
    this._selectedEngineVersion = value;
  }
  public resetSelectedEngineVersion() {
    this._selectedEngineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedEngineVersionInput() {
    return this._selectedEngineVersion;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration {
  /**
  * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}
  */
  readonly kmsKey?: string;
}

export function athenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
  }
}


export function athenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKey = value.kmsKey;
    }
  }

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string;
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Indicates the encryption configuration for Athena Managed Storage. If not setting this field, Managed Storage will encrypt the query results with Athena's encryption key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}
  */
  readonly encryptionConfiguration?: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration;
}

export function athenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    encryption_configuration: athenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
  }
}


export function athenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration | cdktn.IResolvable): any {
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
    encryption_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationToHclTerraform(struct!.encryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._encryptionConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
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

  // encryption_configuration - computed: true, optional: true, required: false
  private _encryptionConfiguration = new AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration {
  /**
  * Enables CloudWatch logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#log_group AthenaWorkGroup#log_group}
  */
  readonly logGroup?: string;
  /**
  * Prefix for the CloudWatch log stream name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#log_stream_name_prefix AthenaWorkGroup#log_stream_name_prefix}
  */
  readonly logStreamNamePrefix?: string;
  /**
  * The types of logs that you want to publish to CloudWatch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#log_types AthenaWorkGroup#log_types}
  */
  readonly logTypes?: { [key: string]: string[] } | cdktn.IResolvable;
}

export function athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group: cdktn.stringToTerraform(struct!.logGroup),
    log_stream_name_prefix: cdktn.stringToTerraform(struct!.logStreamNamePrefix),
    log_types: cdktn.hashMapper(cdktn.listMapper(cdktn.stringToTerraform, false))(struct!.logTypes),
  }
}


export function athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration | cdktn.IResolvable): any {
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
    log_group: {
      value: cdktn.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_name_prefix: {
      value: cdktn.stringToHclTerraform(struct!.logStreamNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_types: {
      value: cdktn.hashMapperHcl(cdktn.listMapperHcl(cdktn.stringToHclTerraform, false))(struct!.logTypes),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    if (this._logStreamNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamNamePrefix = this._logStreamNamePrefix;
    }
    if (this._logTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTypes = this._logTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._logGroup = undefined;
      this._logStreamNamePrefix = undefined;
      this._logTypes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._logGroup = value.logGroup;
      this._logStreamNamePrefix = value.logStreamNamePrefix;
      this._logTypes = value.logTypes;
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

  // log_group - computed: true, optional: true, required: false
  private _logGroup?: string;
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  public resetLogGroup() {
    this._logGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }

  // log_stream_name_prefix - computed: true, optional: true, required: false
  private _logStreamNamePrefix?: string;
  public get logStreamNamePrefix() {
    return this.getStringAttribute('log_stream_name_prefix');
  }
  public set logStreamNamePrefix(value: string) {
    this._logStreamNamePrefix = value;
  }
  public resetLogStreamNamePrefix() {
    this._logStreamNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNamePrefixInput() {
    return this._logStreamNamePrefix;
  }

  // log_types - computed: true, optional: true, required: false
  private _logTypes?: { [key: string]: string[] } | cdktn.IResolvable;
  public get logTypes() {
    return this.interpolationForAttribute('log_types');
  }
  public set logTypes(value: { [key: string]: string[] } | cdktn.IResolvable) {
    this._logTypes = value;
  }
  public resetLogTypes() {
    this._logTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypesInput() {
    return this._logTypes;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration {
  /**
  * Enables managed log persistence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The KMS key ARN to encrypt the logs stored in managed log persistence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}
  */
  readonly kmsKey?: string;
}

export function athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
  }
}


export function athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration | cdktn.IResolvable): any {
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
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._kmsKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._kmsKey = value.kmsKey;
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

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string;
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration {
  /**
  * Enables S3 log delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * The Amazon S3 destination URI for log publishing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#log_location AthenaWorkGroup#log_location}
  */
  readonly logLocation?: string;
}

export function athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    log_location: cdktn.stringToTerraform(struct!.logLocation),
  }
}


export function athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration | cdktn.IResolvable): any {
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
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_location: {
      value: cdktn.stringToHclTerraform(struct!.logLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._logLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLocation = this._logLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._kmsKey = undefined;
      this._logLocation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._kmsKey = value.kmsKey;
      this._logLocation = value.logLocation;
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

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string;
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // log_location - computed: true, optional: true, required: false
  private _logLocation?: string;
  public get logLocation() {
    return this.getStringAttribute('log_location');
  }
  public set logLocation(value: string) {
    this._logLocation = value;
  }
  public resetLogLocation() {
    this._logLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLocationInput() {
    return this._logLocation;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration {
  /**
  * Configuration settings for delivering logs to Amazon CloudWatch log groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#cloudwatch_logging_configuration AthenaWorkGroup#cloudwatch_logging_configuration}
  */
  readonly cloudwatchLoggingConfiguration?: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration;
  /**
  * Configuration settings for managed log persistence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#managed_logging_configuration AthenaWorkGroup#managed_logging_configuration}
  */
  readonly managedLoggingConfiguration?: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration;
  /**
  * Configuration settings for delivering logs to Amazon S3 buckets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#s3_logging_configuration AthenaWorkGroup#s3_logging_configuration}
  */
  readonly s3LoggingConfiguration?: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration;
}

export function athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_logging_configuration: athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationToTerraform(struct!.cloudwatchLoggingConfiguration),
    managed_logging_configuration: athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationToTerraform(struct!.managedLoggingConfiguration),
    s3_logging_configuration: athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationToTerraform(struct!.s3LoggingConfiguration),
  }
}


export function athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_logging_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationToHclTerraform(struct!.cloudwatchLoggingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration",
    },
    managed_logging_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationToHclTerraform(struct!.managedLoggingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration",
    },
    s3_logging_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationToHclTerraform(struct!.s3LoggingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLoggingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLoggingConfiguration = this._cloudwatchLoggingConfiguration?.internalValue;
    }
    if (this._managedLoggingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedLoggingConfiguration = this._managedLoggingConfiguration?.internalValue;
    }
    if (this._s3LoggingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3LoggingConfiguration = this._s3LoggingConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchLoggingConfiguration.internalValue = undefined;
      this._managedLoggingConfiguration.internalValue = undefined;
      this._s3LoggingConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchLoggingConfiguration.internalValue = value.cloudwatchLoggingConfiguration;
      this._managedLoggingConfiguration.internalValue = value.managedLoggingConfiguration;
      this._s3LoggingConfiguration.internalValue = value.s3LoggingConfiguration;
    }
  }

  // cloudwatch_logging_configuration - computed: true, optional: true, required: false
  private _cloudwatchLoggingConfiguration = new AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference(this, "cloudwatch_logging_configuration");
  public get cloudwatchLoggingConfiguration() {
    return this._cloudwatchLoggingConfiguration;
  }
  public putCloudwatchLoggingConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration) {
    this._cloudwatchLoggingConfiguration.internalValue = value;
  }
  public resetCloudwatchLoggingConfiguration() {
    this._cloudwatchLoggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingConfigurationInput() {
    return this._cloudwatchLoggingConfiguration.internalValue;
  }

  // managed_logging_configuration - computed: true, optional: true, required: false
  private _managedLoggingConfiguration = new AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference(this, "managed_logging_configuration");
  public get managedLoggingConfiguration() {
    return this._managedLoggingConfiguration;
  }
  public putManagedLoggingConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration) {
    this._managedLoggingConfiguration.internalValue = value;
  }
  public resetManagedLoggingConfiguration() {
    this._managedLoggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedLoggingConfigurationInput() {
    return this._managedLoggingConfiguration.internalValue;
  }

  // s3_logging_configuration - computed: true, optional: true, required: false
  private _s3LoggingConfiguration = new AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference(this, "s3_logging_configuration");
  public get s3LoggingConfiguration() {
    return this._s3LoggingConfiguration;
  }
  public putS3LoggingConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration) {
    this._s3LoggingConfiguration.internalValue = value;
  }
  public resetS3LoggingConfiguration() {
    this._s3LoggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LoggingConfigurationInput() {
    return this._s3LoggingConfiguration.internalValue;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration {
  /**
  * The Amazon S3 canned ACL that Athena should specify when storing query results. Currently the only supported canned ACL is BUCKET_OWNER_FULL_CONTROL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#s3_acl_option AthenaWorkGroup#s3_acl_option}
  */
  readonly s3AclOption?: string;
}

export function athenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_acl_option: cdktn.stringToTerraform(struct!.s3AclOption),
  }
}


export function athenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_acl_option: {
      value: cdktn.stringToHclTerraform(struct!.s3AclOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3AclOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3AclOption = this._s3AclOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3AclOption = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3AclOption = value.s3AclOption;
    }
  }

  // s3_acl_option - computed: true, optional: true, required: false
  private _s3AclOption?: string;
  public get s3AclOption() {
    return this.getStringAttribute('s3_acl_option');
  }
  public set s3AclOption(value: string) {
    this._s3AclOption = value;
  }
  public resetS3AclOption() {
    this._s3AclOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AclOptionInput() {
    return this._s3AclOption;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration {
  /**
  * Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#encryption_option AthenaWorkGroup#encryption_option}
  */
  readonly encryptionOption?: string;
  /**
  * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}
  */
  readonly kmsKey?: string;
}

export function athenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_option: cdktn.stringToTerraform(struct!.encryptionOption),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
  }
}


export function athenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_option: {
      value: cdktn.stringToHclTerraform(struct!.encryptionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionOption = this._encryptionOption;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionOption = undefined;
      this._kmsKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionOption = value.encryptionOption;
      this._kmsKey = value.kmsKey;
    }
  }

  // encryption_option - computed: true, optional: true, required: false
  private _encryptionOption?: string;
  public get encryptionOption() {
    return this.getStringAttribute('encryption_option');
  }
  public set encryptionOption(value: string) {
    this._encryptionOption = value;
  }
  public resetEncryptionOption() {
    this._encryptionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionOptionInput() {
    return this._encryptionOption;
  }

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string;
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates {
  /**
  * Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#acl_configuration AthenaWorkGroup#acl_configuration}
  */
  readonly aclConfiguration?: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration;
  /**
  * If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}
  */
  readonly encryptionConfiguration?: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration;
  /**
  * The AWS account ID of the owner of S3 bucket where query results are stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#expected_bucket_owner AthenaWorkGroup#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
  /**
  * The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#output_location AthenaWorkGroup#output_location}
  */
  readonly outputLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#remove_acl_configuration AthenaWorkGroup#remove_acl_configuration}
  */
  readonly removeAclConfiguration?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#remove_encryption_configuration AthenaWorkGroup#remove_encryption_configuration}
  */
  readonly removeEncryptionConfiguration?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#remove_expected_bucket_owner AthenaWorkGroup#remove_expected_bucket_owner}
  */
  readonly removeExpectedBucketOwner?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#remove_output_location AthenaWorkGroup#remove_output_location}
  */
  readonly removeOutputLocation?: boolean | cdktn.IResolvable;
}

export function athenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    acl_configuration: athenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationToTerraform(struct!.aclConfiguration),
    encryption_configuration: athenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    expected_bucket_owner: cdktn.stringToTerraform(struct!.expectedBucketOwner),
    output_location: cdktn.stringToTerraform(struct!.outputLocation),
    remove_acl_configuration: cdktn.booleanToTerraform(struct!.removeAclConfiguration),
    remove_encryption_configuration: cdktn.booleanToTerraform(struct!.removeEncryptionConfiguration),
    remove_expected_bucket_owner: cdktn.booleanToTerraform(struct!.removeExpectedBucketOwner),
    remove_output_location: cdktn.booleanToTerraform(struct!.removeOutputLocation),
  }
}


export function athenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    acl_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationToHclTerraform(struct!.aclConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration",
    },
    encryption_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationToHclTerraform(struct!.encryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration",
    },
    expected_bucket_owner: {
      value: cdktn.stringToHclTerraform(struct!.expectedBucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_location: {
      value: cdktn.stringToHclTerraform(struct!.outputLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_acl_configuration: {
      value: cdktn.booleanToHclTerraform(struct!.removeAclConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_encryption_configuration: {
      value: cdktn.booleanToHclTerraform(struct!.removeEncryptionConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_expected_bucket_owner: {
      value: cdktn.booleanToHclTerraform(struct!.removeExpectedBucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_output_location: {
      value: cdktn.booleanToHclTerraform(struct!.removeOutputLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclConfiguration = this._aclConfiguration?.internalValue;
    }
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    if (this._expectedBucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedBucketOwner = this._expectedBucketOwner;
    }
    if (this._outputLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputLocation = this._outputLocation;
    }
    if (this._removeAclConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeAclConfiguration = this._removeAclConfiguration;
    }
    if (this._removeEncryptionConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeEncryptionConfiguration = this._removeEncryptionConfiguration;
    }
    if (this._removeExpectedBucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeExpectedBucketOwner = this._removeExpectedBucketOwner;
    }
    if (this._removeOutputLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeOutputLocation = this._removeOutputLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclConfiguration.internalValue = undefined;
      this._encryptionConfiguration.internalValue = undefined;
      this._expectedBucketOwner = undefined;
      this._outputLocation = undefined;
      this._removeAclConfiguration = undefined;
      this._removeEncryptionConfiguration = undefined;
      this._removeExpectedBucketOwner = undefined;
      this._removeOutputLocation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclConfiguration.internalValue = value.aclConfiguration;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
      this._expectedBucketOwner = value.expectedBucketOwner;
      this._outputLocation = value.outputLocation;
      this._removeAclConfiguration = value.removeAclConfiguration;
      this._removeEncryptionConfiguration = value.removeEncryptionConfiguration;
      this._removeExpectedBucketOwner = value.removeExpectedBucketOwner;
      this._removeOutputLocation = value.removeOutputLocation;
    }
  }

  // acl_configuration - computed: true, optional: true, required: false
  private _aclConfiguration = new AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference(this, "acl_configuration");
  public get aclConfiguration() {
    return this._aclConfiguration;
  }
  public putAclConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration) {
    this._aclConfiguration.internalValue = value;
  }
  public resetAclConfiguration() {
    this._aclConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclConfigurationInput() {
    return this._aclConfiguration.internalValue;
  }

  // encryption_configuration - computed: true, optional: true, required: false
  private _encryptionConfiguration = new AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // expected_bucket_owner - computed: true, optional: true, required: false
  private _expectedBucketOwner?: string;
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }
  public set expectedBucketOwner(value: string) {
    this._expectedBucketOwner = value;
  }
  public resetExpectedBucketOwner() {
    this._expectedBucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedBucketOwnerInput() {
    return this._expectedBucketOwner;
  }

  // output_location - computed: true, optional: true, required: false
  private _outputLocation?: string;
  public get outputLocation() {
    return this.getStringAttribute('output_location');
  }
  public set outputLocation(value: string) {
    this._outputLocation = value;
  }
  public resetOutputLocation() {
    this._outputLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation;
  }

  // remove_acl_configuration - computed: true, optional: true, required: false
  private _removeAclConfiguration?: boolean | cdktn.IResolvable;
  public get removeAclConfiguration() {
    return this.getBooleanAttribute('remove_acl_configuration');
  }
  public set removeAclConfiguration(value: boolean | cdktn.IResolvable) {
    this._removeAclConfiguration = value;
  }
  public resetRemoveAclConfiguration() {
    this._removeAclConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAclConfigurationInput() {
    return this._removeAclConfiguration;
  }

  // remove_encryption_configuration - computed: true, optional: true, required: false
  private _removeEncryptionConfiguration?: boolean | cdktn.IResolvable;
  public get removeEncryptionConfiguration() {
    return this.getBooleanAttribute('remove_encryption_configuration');
  }
  public set removeEncryptionConfiguration(value: boolean | cdktn.IResolvable) {
    this._removeEncryptionConfiguration = value;
  }
  public resetRemoveEncryptionConfiguration() {
    this._removeEncryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeEncryptionConfigurationInput() {
    return this._removeEncryptionConfiguration;
  }

  // remove_expected_bucket_owner - computed: true, optional: true, required: false
  private _removeExpectedBucketOwner?: boolean | cdktn.IResolvable;
  public get removeExpectedBucketOwner() {
    return this.getBooleanAttribute('remove_expected_bucket_owner');
  }
  public set removeExpectedBucketOwner(value: boolean | cdktn.IResolvable) {
    this._removeExpectedBucketOwner = value;
  }
  public resetRemoveExpectedBucketOwner() {
    this._removeExpectedBucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeExpectedBucketOwnerInput() {
    return this._removeExpectedBucketOwner;
  }

  // remove_output_location - computed: true, optional: true, required: false
  private _removeOutputLocation?: boolean | cdktn.IResolvable;
  public get removeOutputLocation() {
    return this.getBooleanAttribute('remove_output_location');
  }
  public set removeOutputLocation(value: boolean | cdktn.IResolvable) {
    this._removeOutputLocation = value;
  }
  public resetRemoveOutputLocation() {
    this._removeOutputLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeOutputLocationInput() {
    return this._removeOutputLocation;
  }
}
export interface AthenaWorkGroupWorkGroupConfigurationUpdates {
  /**
  * Additional Configuration that are passed to Athena Spark Calculations running in this workgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#additional_configuration AthenaWorkGroup#additional_configuration}
  */
  readonly additionalConfiguration?: string;
  /**
  * The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#bytes_scanned_cutoff_per_query AthenaWorkGroup#bytes_scanned_cutoff_per_query}
  */
  readonly bytesScannedCutoffPerQuery?: number;
  /**
  * Indicates the KMS key for encrypting notebook content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#customer_content_encryption_configuration AthenaWorkGroup#customer_content_encryption_configuration}
  */
  readonly customerContentEncryptionConfiguration?: AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration;
  /**
  * If set to "true", the settings for the workgroup override client-side settings. If set to "false", client-side settings are used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#enforce_work_group_configuration AthenaWorkGroup#enforce_work_group_configuration}
  */
  readonly enforceWorkGroupConfiguration?: boolean | cdktn.IResolvable;
  /**
  * The engine configuration for running queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#engine_configuration AthenaWorkGroup#engine_configuration}
  */
  readonly engineConfiguration?: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration;
  /**
  * The Athena engine version for running queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#engine_version AthenaWorkGroup#engine_version}
  */
  readonly engineVersion?: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion;
  /**
  * The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups. This property applies only to Spark enabled workgroups and Identity Center enabled workgroups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#execution_role AthenaWorkGroup#execution_role}
  */
  readonly executionRole?: string;
  /**
  * The configuration for the managed query results and encryption option. ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#managed_query_results_configuration AthenaWorkGroup#managed_query_results_configuration}
  */
  readonly managedQueryResultsConfiguration?: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration;
  /**
  * Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#monitoring_configuration AthenaWorkGroup#monitoring_configuration}
  */
  readonly monitoringConfiguration?: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration;
  /**
  * Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#publish_cloudwatch_metrics_enabled AthenaWorkGroup#publish_cloudwatch_metrics_enabled}
  */
  readonly publishCloudwatchMetricsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Indicates that the data usage control limit per query is removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#remove_bytes_scanned_cutoff_per_query AthenaWorkGroup#remove_bytes_scanned_cutoff_per_query}
  */
  readonly removeBytesScannedCutoffPerQuery?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#remove_customer_content_encryption_configuration AthenaWorkGroup#remove_customer_content_encryption_configuration}
  */
  readonly removeCustomerContentEncryptionConfiguration?: boolean | cdktn.IResolvable;
  /**
  * If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#requester_pays_enabled AthenaWorkGroup#requester_pays_enabled}
  */
  readonly requesterPaysEnabled?: boolean | cdktn.IResolvable;
  /**
  * The result configuration information about the queries in this workgroup that will be updated. Includes the updated results location and an updated option for encrypting query results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#result_configuration_updates AthenaWorkGroup#result_configuration_updates}
  */
  readonly resultConfigurationUpdates?: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates;
}

export function athenaWorkGroupWorkGroupConfigurationUpdatesToTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_configuration: cdktn.stringToTerraform(struct!.additionalConfiguration),
    bytes_scanned_cutoff_per_query: cdktn.numberToTerraform(struct!.bytesScannedCutoffPerQuery),
    customer_content_encryption_configuration: athenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationToTerraform(struct!.customerContentEncryptionConfiguration),
    enforce_work_group_configuration: cdktn.booleanToTerraform(struct!.enforceWorkGroupConfiguration),
    engine_configuration: athenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationToTerraform(struct!.engineConfiguration),
    engine_version: athenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionToTerraform(struct!.engineVersion),
    execution_role: cdktn.stringToTerraform(struct!.executionRole),
    managed_query_results_configuration: athenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationToTerraform(struct!.managedQueryResultsConfiguration),
    monitoring_configuration: athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationToTerraform(struct!.monitoringConfiguration),
    publish_cloudwatch_metrics_enabled: cdktn.booleanToTerraform(struct!.publishCloudwatchMetricsEnabled),
    remove_bytes_scanned_cutoff_per_query: cdktn.booleanToTerraform(struct!.removeBytesScannedCutoffPerQuery),
    remove_customer_content_encryption_configuration: cdktn.booleanToTerraform(struct!.removeCustomerContentEncryptionConfiguration),
    requester_pays_enabled: cdktn.booleanToTerraform(struct!.requesterPaysEnabled),
    result_configuration_updates: athenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesToTerraform(struct!.resultConfigurationUpdates),
  }
}


export function athenaWorkGroupWorkGroupConfigurationUpdatesToHclTerraform(struct?: AthenaWorkGroupWorkGroupConfigurationUpdates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_configuration: {
      value: cdktn.stringToHclTerraform(struct!.additionalConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bytes_scanned_cutoff_per_query: {
      value: cdktn.numberToHclTerraform(struct!.bytesScannedCutoffPerQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    customer_content_encryption_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationToHclTerraform(struct!.customerContentEncryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration",
    },
    enforce_work_group_configuration: {
      value: cdktn.booleanToHclTerraform(struct!.enforceWorkGroupConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    engine_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationToHclTerraform(struct!.engineConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration",
    },
    engine_version: {
      value: athenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionToHclTerraform(struct!.engineVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion",
    },
    execution_role: {
      value: cdktn.stringToHclTerraform(struct!.executionRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_query_results_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationToHclTerraform(struct!.managedQueryResultsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration",
    },
    monitoring_configuration: {
      value: athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationToHclTerraform(struct!.monitoringConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration",
    },
    publish_cloudwatch_metrics_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.publishCloudwatchMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_bytes_scanned_cutoff_per_query: {
      value: cdktn.booleanToHclTerraform(struct!.removeBytesScannedCutoffPerQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_customer_content_encryption_configuration: {
      value: cdktn.booleanToHclTerraform(struct!.removeCustomerContentEncryptionConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    requester_pays_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.requesterPaysEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    result_configuration_updates: {
      value: athenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesToHclTerraform(struct!.resultConfigurationUpdates),
      isBlock: true,
      type: "struct",
      storageClassType: "AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AthenaWorkGroupWorkGroupConfigurationUpdates | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalConfiguration = this._additionalConfiguration;
    }
    if (this._bytesScannedCutoffPerQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesScannedCutoffPerQuery = this._bytesScannedCutoffPerQuery;
    }
    if (this._customerContentEncryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerContentEncryptionConfiguration = this._customerContentEncryptionConfiguration?.internalValue;
    }
    if (this._enforceWorkGroupConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceWorkGroupConfiguration = this._enforceWorkGroupConfiguration;
    }
    if (this._engineConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineConfiguration = this._engineConfiguration?.internalValue;
    }
    if (this._engineVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion?.internalValue;
    }
    if (this._executionRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRole = this._executionRole;
    }
    if (this._managedQueryResultsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedQueryResultsConfiguration = this._managedQueryResultsConfiguration?.internalValue;
    }
    if (this._monitoringConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringConfiguration = this._monitoringConfiguration?.internalValue;
    }
    if (this._publishCloudwatchMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishCloudwatchMetricsEnabled = this._publishCloudwatchMetricsEnabled;
    }
    if (this._removeBytesScannedCutoffPerQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeBytesScannedCutoffPerQuery = this._removeBytesScannedCutoffPerQuery;
    }
    if (this._removeCustomerContentEncryptionConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeCustomerContentEncryptionConfiguration = this._removeCustomerContentEncryptionConfiguration;
    }
    if (this._requesterPaysEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.requesterPaysEnabled = this._requesterPaysEnabled;
    }
    if (this._resultConfigurationUpdates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultConfigurationUpdates = this._resultConfigurationUpdates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkGroupWorkGroupConfigurationUpdates | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalConfiguration = undefined;
      this._bytesScannedCutoffPerQuery = undefined;
      this._customerContentEncryptionConfiguration.internalValue = undefined;
      this._enforceWorkGroupConfiguration = undefined;
      this._engineConfiguration.internalValue = undefined;
      this._engineVersion.internalValue = undefined;
      this._executionRole = undefined;
      this._managedQueryResultsConfiguration.internalValue = undefined;
      this._monitoringConfiguration.internalValue = undefined;
      this._publishCloudwatchMetricsEnabled = undefined;
      this._removeBytesScannedCutoffPerQuery = undefined;
      this._removeCustomerContentEncryptionConfiguration = undefined;
      this._requesterPaysEnabled = undefined;
      this._resultConfigurationUpdates.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalConfiguration = value.additionalConfiguration;
      this._bytesScannedCutoffPerQuery = value.bytesScannedCutoffPerQuery;
      this._customerContentEncryptionConfiguration.internalValue = value.customerContentEncryptionConfiguration;
      this._enforceWorkGroupConfiguration = value.enforceWorkGroupConfiguration;
      this._engineConfiguration.internalValue = value.engineConfiguration;
      this._engineVersion.internalValue = value.engineVersion;
      this._executionRole = value.executionRole;
      this._managedQueryResultsConfiguration.internalValue = value.managedQueryResultsConfiguration;
      this._monitoringConfiguration.internalValue = value.monitoringConfiguration;
      this._publishCloudwatchMetricsEnabled = value.publishCloudwatchMetricsEnabled;
      this._removeBytesScannedCutoffPerQuery = value.removeBytesScannedCutoffPerQuery;
      this._removeCustomerContentEncryptionConfiguration = value.removeCustomerContentEncryptionConfiguration;
      this._requesterPaysEnabled = value.requesterPaysEnabled;
      this._resultConfigurationUpdates.internalValue = value.resultConfigurationUpdates;
    }
  }

  // additional_configuration - computed: true, optional: true, required: false
  private _additionalConfiguration?: string;
  public get additionalConfiguration() {
    return this.getStringAttribute('additional_configuration');
  }
  public set additionalConfiguration(value: string) {
    this._additionalConfiguration = value;
  }
  public resetAdditionalConfiguration() {
    this._additionalConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalConfigurationInput() {
    return this._additionalConfiguration;
  }

  // bytes_scanned_cutoff_per_query - computed: true, optional: true, required: false
  private _bytesScannedCutoffPerQuery?: number;
  public get bytesScannedCutoffPerQuery() {
    return this.getNumberAttribute('bytes_scanned_cutoff_per_query');
  }
  public set bytesScannedCutoffPerQuery(value: number) {
    this._bytesScannedCutoffPerQuery = value;
  }
  public resetBytesScannedCutoffPerQuery() {
    this._bytesScannedCutoffPerQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesScannedCutoffPerQueryInput() {
    return this._bytesScannedCutoffPerQuery;
  }

  // customer_content_encryption_configuration - computed: true, optional: true, required: false
  private _customerContentEncryptionConfiguration = new AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference(this, "customer_content_encryption_configuration");
  public get customerContentEncryptionConfiguration() {
    return this._customerContentEncryptionConfiguration;
  }
  public putCustomerContentEncryptionConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration) {
    this._customerContentEncryptionConfiguration.internalValue = value;
  }
  public resetCustomerContentEncryptionConfiguration() {
    this._customerContentEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerContentEncryptionConfigurationInput() {
    return this._customerContentEncryptionConfiguration.internalValue;
  }

  // enforce_work_group_configuration - computed: true, optional: true, required: false
  private _enforceWorkGroupConfiguration?: boolean | cdktn.IResolvable;
  public get enforceWorkGroupConfiguration() {
    return this.getBooleanAttribute('enforce_work_group_configuration');
  }
  public set enforceWorkGroupConfiguration(value: boolean | cdktn.IResolvable) {
    this._enforceWorkGroupConfiguration = value;
  }
  public resetEnforceWorkGroupConfiguration() {
    this._enforceWorkGroupConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceWorkGroupConfigurationInput() {
    return this._enforceWorkGroupConfiguration;
  }

  // engine_configuration - computed: true, optional: true, required: false
  private _engineConfiguration = new AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference(this, "engine_configuration");
  public get engineConfiguration() {
    return this._engineConfiguration;
  }
  public putEngineConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration) {
    this._engineConfiguration.internalValue = value;
  }
  public resetEngineConfiguration() {
    this._engineConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigurationInput() {
    return this._engineConfiguration.internalValue;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion = new AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference(this, "engine_version");
  public get engineVersion() {
    return this._engineVersion;
  }
  public putEngineVersion(value: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion) {
    this._engineVersion.internalValue = value;
  }
  public resetEngineVersion() {
    this._engineVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion.internalValue;
  }

  // execution_role - computed: true, optional: true, required: false
  private _executionRole?: string;
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  public resetExecutionRole() {
    this._executionRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // managed_query_results_configuration - computed: true, optional: true, required: false
  private _managedQueryResultsConfiguration = new AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference(this, "managed_query_results_configuration");
  public get managedQueryResultsConfiguration() {
    return this._managedQueryResultsConfiguration;
  }
  public putManagedQueryResultsConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration) {
    this._managedQueryResultsConfiguration.internalValue = value;
  }
  public resetManagedQueryResultsConfiguration() {
    this._managedQueryResultsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedQueryResultsConfigurationInput() {
    return this._managedQueryResultsConfiguration.internalValue;
  }

  // monitoring_configuration - computed: true, optional: true, required: false
  private _monitoringConfiguration = new AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference(this, "monitoring_configuration");
  public get monitoringConfiguration() {
    return this._monitoringConfiguration;
  }
  public putMonitoringConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration) {
    this._monitoringConfiguration.internalValue = value;
  }
  public resetMonitoringConfiguration() {
    this._monitoringConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringConfigurationInput() {
    return this._monitoringConfiguration.internalValue;
  }

  // publish_cloudwatch_metrics_enabled - computed: true, optional: true, required: false
  private _publishCloudwatchMetricsEnabled?: boolean | cdktn.IResolvable;
  public get publishCloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('publish_cloudwatch_metrics_enabled');
  }
  public set publishCloudwatchMetricsEnabled(value: boolean | cdktn.IResolvable) {
    this._publishCloudwatchMetricsEnabled = value;
  }
  public resetPublishCloudwatchMetricsEnabled() {
    this._publishCloudwatchMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishCloudwatchMetricsEnabledInput() {
    return this._publishCloudwatchMetricsEnabled;
  }

  // remove_bytes_scanned_cutoff_per_query - computed: true, optional: true, required: false
  private _removeBytesScannedCutoffPerQuery?: boolean | cdktn.IResolvable;
  public get removeBytesScannedCutoffPerQuery() {
    return this.getBooleanAttribute('remove_bytes_scanned_cutoff_per_query');
  }
  public set removeBytesScannedCutoffPerQuery(value: boolean | cdktn.IResolvable) {
    this._removeBytesScannedCutoffPerQuery = value;
  }
  public resetRemoveBytesScannedCutoffPerQuery() {
    this._removeBytesScannedCutoffPerQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeBytesScannedCutoffPerQueryInput() {
    return this._removeBytesScannedCutoffPerQuery;
  }

  // remove_customer_content_encryption_configuration - computed: true, optional: true, required: false
  private _removeCustomerContentEncryptionConfiguration?: boolean | cdktn.IResolvable;
  public get removeCustomerContentEncryptionConfiguration() {
    return this.getBooleanAttribute('remove_customer_content_encryption_configuration');
  }
  public set removeCustomerContentEncryptionConfiguration(value: boolean | cdktn.IResolvable) {
    this._removeCustomerContentEncryptionConfiguration = value;
  }
  public resetRemoveCustomerContentEncryptionConfiguration() {
    this._removeCustomerContentEncryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeCustomerContentEncryptionConfigurationInput() {
    return this._removeCustomerContentEncryptionConfiguration;
  }

  // requester_pays_enabled - computed: true, optional: true, required: false
  private _requesterPaysEnabled?: boolean | cdktn.IResolvable;
  public get requesterPaysEnabled() {
    return this.getBooleanAttribute('requester_pays_enabled');
  }
  public set requesterPaysEnabled(value: boolean | cdktn.IResolvable) {
    this._requesterPaysEnabled = value;
  }
  public resetRequesterPaysEnabled() {
    this._requesterPaysEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterPaysEnabledInput() {
    return this._requesterPaysEnabled;
  }

  // result_configuration_updates - computed: true, optional: true, required: false
  private _resultConfigurationUpdates = new AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference(this, "result_configuration_updates");
  public get resultConfigurationUpdates() {
    return this._resultConfigurationUpdates;
  }
  public putResultConfigurationUpdates(value: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates) {
    this._resultConfigurationUpdates.internalValue = value;
  }
  public resetResultConfigurationUpdates() {
    this._resultConfigurationUpdates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultConfigurationUpdatesInput() {
    return this._resultConfigurationUpdates.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group awscc_athena_work_group}
*/
export class AthenaWorkGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_athena_work_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AthenaWorkGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AthenaWorkGroup to import
  * @param importFromId The id of the existing AthenaWorkGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AthenaWorkGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_athena_work_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/athena_work_group awscc_athena_work_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AthenaWorkGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AthenaWorkGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_athena_work_group',
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
    this._description = config.description;
    this._name = config.name;
    this._recursiveDeleteOption = config.recursiveDeleteOption;
    this._state = config.state;
    this._tags.internalValue = config.tags;
    this._workGroupConfiguration.internalValue = config.workGroupConfiguration;
    this._workGroupConfigurationUpdates.internalValue = config.workGroupConfigurationUpdates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // recursive_delete_option - computed: true, optional: true, required: false
  private _recursiveDeleteOption?: boolean | cdktn.IResolvable;
  public get recursiveDeleteOption() {
    return this.getBooleanAttribute('recursive_delete_option');
  }
  public set recursiveDeleteOption(value: boolean | cdktn.IResolvable) {
    this._recursiveDeleteOption = value;
  }
  public resetRecursiveDeleteOption() {
    this._recursiveDeleteOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveDeleteOptionInput() {
    return this._recursiveDeleteOption;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new AthenaWorkGroupTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AthenaWorkGroupTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // work_group_configuration - computed: true, optional: true, required: false
  private _workGroupConfiguration = new AthenaWorkGroupWorkGroupConfigurationOutputReference(this, "work_group_configuration");
  public get workGroupConfiguration() {
    return this._workGroupConfiguration;
  }
  public putWorkGroupConfiguration(value: AthenaWorkGroupWorkGroupConfiguration) {
    this._workGroupConfiguration.internalValue = value;
  }
  public resetWorkGroupConfiguration() {
    this._workGroupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupConfigurationInput() {
    return this._workGroupConfiguration.internalValue;
  }

  // work_group_configuration_updates - computed: true, optional: true, required: false
  private _workGroupConfigurationUpdates = new AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference(this, "work_group_configuration_updates");
  public get workGroupConfigurationUpdates() {
    return this._workGroupConfigurationUpdates;
  }
  public putWorkGroupConfigurationUpdates(value: AthenaWorkGroupWorkGroupConfigurationUpdates) {
    this._workGroupConfigurationUpdates.internalValue = value;
  }
  public resetWorkGroupConfigurationUpdates() {
    this._workGroupConfigurationUpdates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupConfigurationUpdatesInput() {
    return this._workGroupConfigurationUpdates.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      recursive_delete_option: cdktn.booleanToTerraform(this._recursiveDeleteOption),
      state: cdktn.stringToTerraform(this._state),
      tags: cdktn.listMapper(athenaWorkGroupTagsToTerraform, false)(this._tags.internalValue),
      work_group_configuration: athenaWorkGroupWorkGroupConfigurationToTerraform(this._workGroupConfiguration.internalValue),
      work_group_configuration_updates: athenaWorkGroupWorkGroupConfigurationUpdatesToTerraform(this._workGroupConfigurationUpdates.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recursive_delete_option: {
        value: cdktn.booleanToHclTerraform(this._recursiveDeleteOption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state: {
        value: cdktn.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(athenaWorkGroupTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AthenaWorkGroupTagsList",
      },
      work_group_configuration: {
        value: athenaWorkGroupWorkGroupConfigurationToHclTerraform(this._workGroupConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AthenaWorkGroupWorkGroupConfiguration",
      },
      work_group_configuration_updates: {
        value: athenaWorkGroupWorkGroupConfigurationUpdatesToHclTerraform(this._workGroupConfigurationUpdates.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AthenaWorkGroupWorkGroupConfigurationUpdates",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
