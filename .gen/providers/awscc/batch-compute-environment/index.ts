// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BatchComputeEnvironmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#compute_environment_name BatchComputeEnvironment#compute_environment_name}
  */
  readonly computeEnvironmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#compute_resources BatchComputeEnvironment#compute_resources}
  */
  readonly computeResources?: BatchComputeEnvironmentComputeResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#context BatchComputeEnvironment#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#eks_configuration BatchComputeEnvironment#eks_configuration}
  */
  readonly eksConfiguration?: BatchComputeEnvironmentEksConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#replace_compute_environment BatchComputeEnvironment#replace_compute_environment}
  */
  readonly replaceComputeEnvironment?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#service_role BatchComputeEnvironment#service_role}
  */
  readonly serviceRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#state BatchComputeEnvironment#state}
  */
  readonly state?: string;
  /**
  * A key-value pair to associate with a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#unmanagedv_cpus BatchComputeEnvironment#unmanagedv_cpus}
  */
  readonly unmanagedvCpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#update_policy BatchComputeEnvironment#update_policy}
  */
  readonly updatePolicy?: BatchComputeEnvironmentUpdatePolicy;
}
export interface BatchComputeEnvironmentComputeResourcesEc2Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#batch_image_status BatchComputeEnvironment#batch_image_status}
  */
  readonly batchImageStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#image_id_override BatchComputeEnvironment#image_id_override}
  */
  readonly imageIdOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#image_kubernetes_version BatchComputeEnvironment#image_kubernetes_version}
  */
  readonly imageKubernetesVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#image_type BatchComputeEnvironment#image_type}
  */
  readonly imageType?: string;
}

export function batchComputeEnvironmentComputeResourcesEc2ConfigurationToTerraform(struct?: BatchComputeEnvironmentComputeResourcesEc2Configuration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_image_status: cdktn.stringToTerraform(struct!.batchImageStatus),
    image_id_override: cdktn.stringToTerraform(struct!.imageIdOverride),
    image_kubernetes_version: cdktn.stringToTerraform(struct!.imageKubernetesVersion),
    image_type: cdktn.stringToTerraform(struct!.imageType),
  }
}


export function batchComputeEnvironmentComputeResourcesEc2ConfigurationToHclTerraform(struct?: BatchComputeEnvironmentComputeResourcesEc2Configuration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_image_status: {
      value: cdktn.stringToHclTerraform(struct!.batchImageStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id_override: {
      value: cdktn.stringToHclTerraform(struct!.imageIdOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_kubernetes_version: {
      value: cdktn.stringToHclTerraform(struct!.imageKubernetesVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_type: {
      value: cdktn.stringToHclTerraform(struct!.imageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BatchComputeEnvironmentComputeResourcesEc2Configuration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchImageStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchImageStatus = this._batchImageStatus;
    }
    if (this._imageIdOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageIdOverride = this._imageIdOverride;
    }
    if (this._imageKubernetesVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageKubernetesVersion = this._imageKubernetesVersion;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchComputeEnvironmentComputeResourcesEc2Configuration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchImageStatus = undefined;
      this._imageIdOverride = undefined;
      this._imageKubernetesVersion = undefined;
      this._imageType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchImageStatus = value.batchImageStatus;
      this._imageIdOverride = value.imageIdOverride;
      this._imageKubernetesVersion = value.imageKubernetesVersion;
      this._imageType = value.imageType;
    }
  }

  // batch_image_status - computed: true, optional: true, required: false
  private _batchImageStatus?: string; 
  public get batchImageStatus() {
    return this.getStringAttribute('batch_image_status');
  }
  public set batchImageStatus(value: string) {
    this._batchImageStatus = value;
  }
  public resetBatchImageStatus() {
    this._batchImageStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchImageStatusInput() {
    return this._batchImageStatus;
  }

  // image_id_override - computed: true, optional: true, required: false
  private _imageIdOverride?: string; 
  public get imageIdOverride() {
    return this.getStringAttribute('image_id_override');
  }
  public set imageIdOverride(value: string) {
    this._imageIdOverride = value;
  }
  public resetImageIdOverride() {
    this._imageIdOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdOverrideInput() {
    return this._imageIdOverride;
  }

  // image_kubernetes_version - computed: true, optional: true, required: false
  private _imageKubernetesVersion?: string; 
  public get imageKubernetesVersion() {
    return this.getStringAttribute('image_kubernetes_version');
  }
  public set imageKubernetesVersion(value: string) {
    this._imageKubernetesVersion = value;
  }
  public resetImageKubernetesVersion() {
    this._imageKubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageKubernetesVersionInput() {
    return this._imageKubernetesVersion;
  }

  // image_type - computed: true, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }
}

export class BatchComputeEnvironmentComputeResourcesEc2ConfigurationList extends cdktn.ComplexList {
  public internalValue? : BatchComputeEnvironmentComputeResourcesEc2Configuration[] | cdktn.IResolvable

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
  public get(index: number): BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference {
    return new BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#target_instance_types BatchComputeEnvironment#target_instance_types}
  */
  readonly targetInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#userdata_type BatchComputeEnvironment#userdata_type}
  */
  readonly userdataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}
  */
  readonly version?: string;
}

export function batchComputeEnvironmentComputeResourcesLaunchTemplateOverridesToTerraform(struct?: BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    launch_template_id: cdktn.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktn.stringToTerraform(struct!.launchTemplateName),
    target_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetInstanceTypes),
    userdata_type: cdktn.stringToTerraform(struct!.userdataType),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function batchComputeEnvironmentComputeResourcesLaunchTemplateOverridesToHclTerraform(struct?: BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    launch_template_id: {
      value: cdktn.stringToHclTerraform(struct!.launchTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template_name: {
      value: cdktn.stringToHclTerraform(struct!.launchTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_instance_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetInstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    userdata_type: {
      value: cdktn.stringToHclTerraform(struct!.userdataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._launchTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateId = this._launchTemplateId;
    }
    if (this._launchTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateName = this._launchTemplateName;
    }
    if (this._targetInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetInstanceTypes = this._targetInstanceTypes;
    }
    if (this._userdataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userdataType = this._userdataType;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._launchTemplateId = undefined;
      this._launchTemplateName = undefined;
      this._targetInstanceTypes = undefined;
      this._userdataType = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._launchTemplateId = value.launchTemplateId;
      this._launchTemplateName = value.launchTemplateName;
      this._targetInstanceTypes = value.targetInstanceTypes;
      this._userdataType = value.userdataType;
      this._version = value.version;
    }
  }

  // launch_template_id - computed: true, optional: true, required: false
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  public resetLaunchTemplateId() {
    this._launchTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_name - computed: true, optional: true, required: false
  private _launchTemplateName?: string; 
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }
  public set launchTemplateName(value: string) {
    this._launchTemplateName = value;
  }
  public resetLaunchTemplateName() {
    this._launchTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateNameInput() {
    return this._launchTemplateName;
  }

  // target_instance_types - computed: true, optional: true, required: false
  private _targetInstanceTypes?: string[]; 
  public get targetInstanceTypes() {
    return this.getListAttribute('target_instance_types');
  }
  public set targetInstanceTypes(value: string[]) {
    this._targetInstanceTypes = value;
  }
  public resetTargetInstanceTypes() {
    this._targetInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInstanceTypesInput() {
    return this._targetInstanceTypes;
  }

  // userdata_type - computed: true, optional: true, required: false
  private _userdataType?: string; 
  public get userdataType() {
    return this.getStringAttribute('userdata_type');
  }
  public set userdataType(value: string) {
    this._userdataType = value;
  }
  public resetUserdataType() {
    this._userdataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userdataTypeInput() {
    return this._userdataType;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList extends cdktn.ComplexList {
  public internalValue? : BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides[] | cdktn.IResolvable

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
  public get(index: number): BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference {
    return new BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchComputeEnvironmentComputeResourcesLaunchTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#overrides BatchComputeEnvironment#overrides}
  */
  readonly overrides?: BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#userdata_type BatchComputeEnvironment#userdata_type}
  */
  readonly userdataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}
  */
  readonly version?: string;
}

export function batchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform(struct?: BatchComputeEnvironmentComputeResourcesLaunchTemplate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    launch_template_id: cdktn.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktn.stringToTerraform(struct!.launchTemplateName),
    overrides: cdktn.listMapper(batchComputeEnvironmentComputeResourcesLaunchTemplateOverridesToTerraform, false)(struct!.overrides),
    userdata_type: cdktn.stringToTerraform(struct!.userdataType),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function batchComputeEnvironmentComputeResourcesLaunchTemplateToHclTerraform(struct?: BatchComputeEnvironmentComputeResourcesLaunchTemplate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    launch_template_id: {
      value: cdktn.stringToHclTerraform(struct!.launchTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template_name: {
      value: cdktn.stringToHclTerraform(struct!.launchTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overrides: {
      value: cdktn.listMapperHcl(batchComputeEnvironmentComputeResourcesLaunchTemplateOverridesToHclTerraform, false)(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList",
    },
    userdata_type: {
      value: cdktn.stringToHclTerraform(struct!.userdataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BatchComputeEnvironmentComputeResourcesLaunchTemplate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._launchTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateId = this._launchTemplateId;
    }
    if (this._launchTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateName = this._launchTemplateName;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    if (this._userdataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userdataType = this._userdataType;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchComputeEnvironmentComputeResourcesLaunchTemplate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._launchTemplateId = undefined;
      this._launchTemplateName = undefined;
      this._overrides.internalValue = undefined;
      this._userdataType = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._launchTemplateId = value.launchTemplateId;
      this._launchTemplateName = value.launchTemplateName;
      this._overrides.internalValue = value.overrides;
      this._userdataType = value.userdataType;
      this._version = value.version;
    }
  }

  // launch_template_id - computed: true, optional: true, required: false
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  public resetLaunchTemplateId() {
    this._launchTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_name - computed: true, optional: true, required: false
  private _launchTemplateName?: string; 
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }
  public set launchTemplateName(value: string) {
    this._launchTemplateName = value;
  }
  public resetLaunchTemplateName() {
    this._launchTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateNameInput() {
    return this._launchTemplateName;
  }

  // overrides - computed: true, optional: true, required: false
  private _overrides = new BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides[] | cdktn.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // userdata_type - computed: true, optional: true, required: false
  private _userdataType?: string; 
  public get userdataType() {
    return this.getStringAttribute('userdata_type');
  }
  public set userdataType(value: string) {
    this._userdataType = value;
  }
  public resetUserdataType() {
    this._userdataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userdataTypeInput() {
    return this._userdataType;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface BatchComputeEnvironmentComputeResourcesScalingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#min_scale_down_delay_minutes BatchComputeEnvironment#min_scale_down_delay_minutes}
  */
  readonly minScaleDownDelayMinutes?: number;
}

export function batchComputeEnvironmentComputeResourcesScalingPolicyToTerraform(struct?: BatchComputeEnvironmentComputeResourcesScalingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    min_scale_down_delay_minutes: cdktn.numberToTerraform(struct!.minScaleDownDelayMinutes),
  }
}


export function batchComputeEnvironmentComputeResourcesScalingPolicyToHclTerraform(struct?: BatchComputeEnvironmentComputeResourcesScalingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    min_scale_down_delay_minutes: {
      value: cdktn.numberToHclTerraform(struct!.minScaleDownDelayMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BatchComputeEnvironmentComputeResourcesScalingPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minScaleDownDelayMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minScaleDownDelayMinutes = this._minScaleDownDelayMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchComputeEnvironmentComputeResourcesScalingPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minScaleDownDelayMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minScaleDownDelayMinutes = value.minScaleDownDelayMinutes;
    }
  }

  // min_scale_down_delay_minutes - computed: true, optional: true, required: false
  private _minScaleDownDelayMinutes?: number; 
  public get minScaleDownDelayMinutes() {
    return this.getNumberAttribute('min_scale_down_delay_minutes');
  }
  public set minScaleDownDelayMinutes(value: number) {
    this._minScaleDownDelayMinutes = value;
  }
  public resetMinScaleDownDelayMinutes() {
    this._minScaleDownDelayMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minScaleDownDelayMinutesInput() {
    return this._minScaleDownDelayMinutes;
  }
}
export interface BatchComputeEnvironmentComputeResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#allocation_strategy BatchComputeEnvironment#allocation_strategy}
  */
  readonly allocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#bid_percentage BatchComputeEnvironment#bid_percentage}
  */
  readonly bidPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#desiredv_cpus BatchComputeEnvironment#desiredv_cpus}
  */
  readonly desiredvCpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#ec_2_configuration BatchComputeEnvironment#ec_2_configuration}
  */
  readonly ec2Configuration?: BatchComputeEnvironmentComputeResourcesEc2Configuration[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#ec_2_key_pair BatchComputeEnvironment#ec_2_key_pair}
  */
  readonly ec2KeyPair?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#image_id BatchComputeEnvironment#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#instance_role BatchComputeEnvironment#instance_role}
  */
  readonly instanceRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#instance_types BatchComputeEnvironment#instance_types}
  */
  readonly instanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#launch_template BatchComputeEnvironment#launch_template}
  */
  readonly launchTemplate?: BatchComputeEnvironmentComputeResourcesLaunchTemplate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#maxv_cpus BatchComputeEnvironment#maxv_cpus}
  */
  readonly maxvCpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#minv_cpus BatchComputeEnvironment#minv_cpus}
  */
  readonly minvCpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#placement_group BatchComputeEnvironment#placement_group}
  */
  readonly placementGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#scaling_policy BatchComputeEnvironment#scaling_policy}
  */
  readonly scalingPolicy?: BatchComputeEnvironmentComputeResourcesScalingPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#security_group_ids BatchComputeEnvironment#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#spot_iam_fleet_role BatchComputeEnvironment#spot_iam_fleet_role}
  */
  readonly spotIamFleetRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#subnets BatchComputeEnvironment#subnets}
  */
  readonly subnets?: string[];
  /**
  * A key-value pair to associate with a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#update_to_latest_image_version BatchComputeEnvironment#update_to_latest_image_version}
  */
  readonly updateToLatestImageVersion?: boolean | cdktn.IResolvable;
}

export function batchComputeEnvironmentComputeResourcesToTerraform(struct?: BatchComputeEnvironmentComputeResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allocation_strategy: cdktn.stringToTerraform(struct!.allocationStrategy),
    bid_percentage: cdktn.numberToTerraform(struct!.bidPercentage),
    desiredv_cpus: cdktn.numberToTerraform(struct!.desiredvCpus),
    ec_2_configuration: cdktn.listMapper(batchComputeEnvironmentComputeResourcesEc2ConfigurationToTerraform, false)(struct!.ec2Configuration),
    ec_2_key_pair: cdktn.stringToTerraform(struct!.ec2KeyPair),
    image_id: cdktn.stringToTerraform(struct!.imageId),
    instance_role: cdktn.stringToTerraform(struct!.instanceRole),
    instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceTypes),
    launch_template: batchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform(struct!.launchTemplate),
    maxv_cpus: cdktn.numberToTerraform(struct!.maxvCpus),
    minv_cpus: cdktn.numberToTerraform(struct!.minvCpus),
    placement_group: cdktn.stringToTerraform(struct!.placementGroup),
    scaling_policy: batchComputeEnvironmentComputeResourcesScalingPolicyToTerraform(struct!.scalingPolicy),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    spot_iam_fleet_role: cdktn.stringToTerraform(struct!.spotIamFleetRole),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    type: cdktn.stringToTerraform(struct!.type),
    update_to_latest_image_version: cdktn.booleanToTerraform(struct!.updateToLatestImageVersion),
  }
}


export function batchComputeEnvironmentComputeResourcesToHclTerraform(struct?: BatchComputeEnvironmentComputeResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allocation_strategy: {
      value: cdktn.stringToHclTerraform(struct!.allocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bid_percentage: {
      value: cdktn.numberToHclTerraform(struct!.bidPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    desiredv_cpus: {
      value: cdktn.numberToHclTerraform(struct!.desiredvCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ec_2_configuration: {
      value: cdktn.listMapperHcl(batchComputeEnvironmentComputeResourcesEc2ConfigurationToHclTerraform, false)(struct!.ec2Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "BatchComputeEnvironmentComputeResourcesEc2ConfigurationList",
    },
    ec_2_key_pair: {
      value: cdktn.stringToHclTerraform(struct!.ec2KeyPair),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktn.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_role: {
      value: cdktn.stringToHclTerraform(struct!.instanceRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    launch_template: {
      value: batchComputeEnvironmentComputeResourcesLaunchTemplateToHclTerraform(struct!.launchTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "BatchComputeEnvironmentComputeResourcesLaunchTemplate",
    },
    maxv_cpus: {
      value: cdktn.numberToHclTerraform(struct!.maxvCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minv_cpus: {
      value: cdktn.numberToHclTerraform(struct!.minvCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    placement_group: {
      value: cdktn.stringToHclTerraform(struct!.placementGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaling_policy: {
      value: batchComputeEnvironmentComputeResourcesScalingPolicyToHclTerraform(struct!.scalingPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "BatchComputeEnvironmentComputeResourcesScalingPolicy",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    spot_iam_fleet_role: {
      value: cdktn.stringToHclTerraform(struct!.spotIamFleetRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_to_latest_image_version: {
      value: cdktn.booleanToHclTerraform(struct!.updateToLatestImageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchComputeEnvironmentComputeResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BatchComputeEnvironmentComputeResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    if (this._bidPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.bidPercentage = this._bidPercentage;
    }
    if (this._desiredvCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredvCpus = this._desiredvCpus;
    }
    if (this._ec2Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2Configuration = this._ec2Configuration?.internalValue;
    }
    if (this._ec2KeyPair !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2KeyPair = this._ec2KeyPair;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._instanceRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRole = this._instanceRole;
    }
    if (this._instanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTypes = this._instanceTypes;
    }
    if (this._launchTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplate = this._launchTemplate?.internalValue;
    }
    if (this._maxvCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxvCpus = this._maxvCpus;
    }
    if (this._minvCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.minvCpus = this._minvCpus;
    }
    if (this._placementGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementGroup = this._placementGroup;
    }
    if (this._scalingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingPolicy = this._scalingPolicy?.internalValue;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._spotIamFleetRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotIamFleetRole = this._spotIamFleetRole;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._updateToLatestImageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateToLatestImageVersion = this._updateToLatestImageVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchComputeEnvironmentComputeResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocationStrategy = undefined;
      this._bidPercentage = undefined;
      this._desiredvCpus = undefined;
      this._ec2Configuration.internalValue = undefined;
      this._ec2KeyPair = undefined;
      this._imageId = undefined;
      this._instanceRole = undefined;
      this._instanceTypes = undefined;
      this._launchTemplate.internalValue = undefined;
      this._maxvCpus = undefined;
      this._minvCpus = undefined;
      this._placementGroup = undefined;
      this._scalingPolicy.internalValue = undefined;
      this._securityGroupIds = undefined;
      this._spotIamFleetRole = undefined;
      this._subnets = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._updateToLatestImageVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocationStrategy = value.allocationStrategy;
      this._bidPercentage = value.bidPercentage;
      this._desiredvCpus = value.desiredvCpus;
      this._ec2Configuration.internalValue = value.ec2Configuration;
      this._ec2KeyPair = value.ec2KeyPair;
      this._imageId = value.imageId;
      this._instanceRole = value.instanceRole;
      this._instanceTypes = value.instanceTypes;
      this._launchTemplate.internalValue = value.launchTemplate;
      this._maxvCpus = value.maxvCpus;
      this._minvCpus = value.minvCpus;
      this._placementGroup = value.placementGroup;
      this._scalingPolicy.internalValue = value.scalingPolicy;
      this._securityGroupIds = value.securityGroupIds;
      this._spotIamFleetRole = value.spotIamFleetRole;
      this._subnets = value.subnets;
      this._tags = value.tags;
      this._type = value.type;
      this._updateToLatestImageVersion = value.updateToLatestImageVersion;
    }
  }

  // allocation_strategy - computed: true, optional: true, required: false
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  public resetAllocationStrategy() {
    this._allocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }

  // bid_percentage - computed: true, optional: true, required: false
  private _bidPercentage?: number; 
  public get bidPercentage() {
    return this.getNumberAttribute('bid_percentage');
  }
  public set bidPercentage(value: number) {
    this._bidPercentage = value;
  }
  public resetBidPercentage() {
    this._bidPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidPercentageInput() {
    return this._bidPercentage;
  }

  // desiredv_cpus - computed: true, optional: true, required: false
  private _desiredvCpus?: number; 
  public get desiredvCpus() {
    return this.getNumberAttribute('desiredv_cpus');
  }
  public set desiredvCpus(value: number) {
    this._desiredvCpus = value;
  }
  public resetDesiredvCpus() {
    this._desiredvCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredvCpusInput() {
    return this._desiredvCpus;
  }

  // ec_2_configuration - computed: true, optional: true, required: false
  private _ec2Configuration = new BatchComputeEnvironmentComputeResourcesEc2ConfigurationList(this, "ec_2_configuration", false);
  public get ec2Configuration() {
    return this._ec2Configuration;
  }
  public putEc2Configuration(value: BatchComputeEnvironmentComputeResourcesEc2Configuration[] | cdktn.IResolvable) {
    this._ec2Configuration.internalValue = value;
  }
  public resetEc2Configuration() {
    this._ec2Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2ConfigurationInput() {
    return this._ec2Configuration.internalValue;
  }

  // ec_2_key_pair - computed: true, optional: true, required: false
  private _ec2KeyPair?: string; 
  public get ec2KeyPair() {
    return this.getStringAttribute('ec_2_key_pair');
  }
  public set ec2KeyPair(value: string) {
    this._ec2KeyPair = value;
  }
  public resetEc2KeyPair() {
    this._ec2KeyPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2KeyPairInput() {
    return this._ec2KeyPair;
  }

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_role - computed: true, optional: true, required: false
  private _instanceRole?: string; 
  public get instanceRole() {
    return this.getStringAttribute('instance_role');
  }
  public set instanceRole(value: string) {
    this._instanceRole = value;
  }
  public resetInstanceRole() {
    this._instanceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRoleInput() {
    return this._instanceRole;
  }

  // instance_types - computed: true, optional: true, required: false
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  public resetInstanceTypes() {
    this._instanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes;
  }

  // launch_template - computed: true, optional: true, required: false
  private _launchTemplate = new BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference(this, "launch_template");
  public get launchTemplate() {
    return this._launchTemplate;
  }
  public putLaunchTemplate(value: BatchComputeEnvironmentComputeResourcesLaunchTemplate) {
    this._launchTemplate.internalValue = value;
  }
  public resetLaunchTemplate() {
    this._launchTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate.internalValue;
  }

  // maxv_cpus - computed: true, optional: true, required: false
  private _maxvCpus?: number; 
  public get maxvCpus() {
    return this.getNumberAttribute('maxv_cpus');
  }
  public set maxvCpus(value: number) {
    this._maxvCpus = value;
  }
  public resetMaxvCpus() {
    this._maxvCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxvCpusInput() {
    return this._maxvCpus;
  }

  // minv_cpus - computed: true, optional: true, required: false
  private _minvCpus?: number; 
  public get minvCpus() {
    return this.getNumberAttribute('minv_cpus');
  }
  public set minvCpus(value: number) {
    this._minvCpus = value;
  }
  public resetMinvCpus() {
    this._minvCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minvCpusInput() {
    return this._minvCpus;
  }

  // placement_group - computed: true, optional: true, required: false
  private _placementGroup?: string; 
  public get placementGroup() {
    return this.getStringAttribute('placement_group');
  }
  public set placementGroup(value: string) {
    this._placementGroup = value;
  }
  public resetPlacementGroup() {
    this._placementGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupInput() {
    return this._placementGroup;
  }

  // scaling_policy - computed: true, optional: true, required: false
  private _scalingPolicy = new BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference(this, "scaling_policy");
  public get scalingPolicy() {
    return this._scalingPolicy;
  }
  public putScalingPolicy(value: BatchComputeEnvironmentComputeResourcesScalingPolicy) {
    this._scalingPolicy.internalValue = value;
  }
  public resetScalingPolicy() {
    this._scalingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyInput() {
    return this._scalingPolicy.internalValue;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
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

  // spot_iam_fleet_role - computed: true, optional: true, required: false
  private _spotIamFleetRole?: string; 
  public get spotIamFleetRole() {
    return this.getStringAttribute('spot_iam_fleet_role');
  }
  public set spotIamFleetRole(value: string) {
    this._spotIamFleetRole = value;
  }
  public resetSpotIamFleetRole() {
    this._spotIamFleetRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotIamFleetRoleInput() {
    return this._spotIamFleetRole;
  }

  // subnets - computed: true, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_to_latest_image_version - computed: true, optional: true, required: false
  private _updateToLatestImageVersion?: boolean | cdktn.IResolvable; 
  public get updateToLatestImageVersion() {
    return this.getBooleanAttribute('update_to_latest_image_version');
  }
  public set updateToLatestImageVersion(value: boolean | cdktn.IResolvable) {
    this._updateToLatestImageVersion = value;
  }
  public resetUpdateToLatestImageVersion() {
    this._updateToLatestImageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateToLatestImageVersionInput() {
    return this._updateToLatestImageVersion;
  }
}
export interface BatchComputeEnvironmentEksConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#eks_cluster_arn BatchComputeEnvironment#eks_cluster_arn}
  */
  readonly eksClusterArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#kubernetes_namespace BatchComputeEnvironment#kubernetes_namespace}
  */
  readonly kubernetesNamespace?: string;
}

export function batchComputeEnvironmentEksConfigurationToTerraform(struct?: BatchComputeEnvironmentEksConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    eks_cluster_arn: cdktn.stringToTerraform(struct!.eksClusterArn),
    kubernetes_namespace: cdktn.stringToTerraform(struct!.kubernetesNamespace),
  }
}


export function batchComputeEnvironmentEksConfigurationToHclTerraform(struct?: BatchComputeEnvironmentEksConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    eks_cluster_arn: {
      value: cdktn.stringToHclTerraform(struct!.eksClusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_namespace: {
      value: cdktn.stringToHclTerraform(struct!.kubernetesNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchComputeEnvironmentEksConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BatchComputeEnvironmentEksConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eksClusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksClusterArn = this._eksClusterArn;
    }
    if (this._kubernetesNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesNamespace = this._kubernetesNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchComputeEnvironmentEksConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eksClusterArn = undefined;
      this._kubernetesNamespace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eksClusterArn = value.eksClusterArn;
      this._kubernetesNamespace = value.kubernetesNamespace;
    }
  }

  // eks_cluster_arn - computed: true, optional: true, required: false
  private _eksClusterArn?: string; 
  public get eksClusterArn() {
    return this.getStringAttribute('eks_cluster_arn');
  }
  public set eksClusterArn(value: string) {
    this._eksClusterArn = value;
  }
  public resetEksClusterArn() {
    this._eksClusterArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksClusterArnInput() {
    return this._eksClusterArn;
  }

  // kubernetes_namespace - computed: true, optional: true, required: false
  private _kubernetesNamespace?: string; 
  public get kubernetesNamespace() {
    return this.getStringAttribute('kubernetes_namespace');
  }
  public set kubernetesNamespace(value: string) {
    this._kubernetesNamespace = value;
  }
  public resetKubernetesNamespace() {
    this._kubernetesNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesNamespaceInput() {
    return this._kubernetesNamespace;
  }
}
export interface BatchComputeEnvironmentUpdatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#job_execution_timeout_minutes BatchComputeEnvironment#job_execution_timeout_minutes}
  */
  readonly jobExecutionTimeoutMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#terminate_jobs_on_update BatchComputeEnvironment#terminate_jobs_on_update}
  */
  readonly terminateJobsOnUpdate?: boolean | cdktn.IResolvable;
}

export function batchComputeEnvironmentUpdatePolicyToTerraform(struct?: BatchComputeEnvironmentUpdatePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    job_execution_timeout_minutes: cdktn.numberToTerraform(struct!.jobExecutionTimeoutMinutes),
    terminate_jobs_on_update: cdktn.booleanToTerraform(struct!.terminateJobsOnUpdate),
  }
}


export function batchComputeEnvironmentUpdatePolicyToHclTerraform(struct?: BatchComputeEnvironmentUpdatePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    job_execution_timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.jobExecutionTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    terminate_jobs_on_update: {
      value: cdktn.booleanToHclTerraform(struct!.terminateJobsOnUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchComputeEnvironmentUpdatePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BatchComputeEnvironmentUpdatePolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobExecutionTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobExecutionTimeoutMinutes = this._jobExecutionTimeoutMinutes;
    }
    if (this._terminateJobsOnUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminateJobsOnUpdate = this._terminateJobsOnUpdate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchComputeEnvironmentUpdatePolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jobExecutionTimeoutMinutes = undefined;
      this._terminateJobsOnUpdate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jobExecutionTimeoutMinutes = value.jobExecutionTimeoutMinutes;
      this._terminateJobsOnUpdate = value.terminateJobsOnUpdate;
    }
  }

  // job_execution_timeout_minutes - computed: true, optional: true, required: false
  private _jobExecutionTimeoutMinutes?: number; 
  public get jobExecutionTimeoutMinutes() {
    return this.getNumberAttribute('job_execution_timeout_minutes');
  }
  public set jobExecutionTimeoutMinutes(value: number) {
    this._jobExecutionTimeoutMinutes = value;
  }
  public resetJobExecutionTimeoutMinutes() {
    this._jobExecutionTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobExecutionTimeoutMinutesInput() {
    return this._jobExecutionTimeoutMinutes;
  }

  // terminate_jobs_on_update - computed: true, optional: true, required: false
  private _terminateJobsOnUpdate?: boolean | cdktn.IResolvable; 
  public get terminateJobsOnUpdate() {
    return this.getBooleanAttribute('terminate_jobs_on_update');
  }
  public set terminateJobsOnUpdate(value: boolean | cdktn.IResolvable) {
    this._terminateJobsOnUpdate = value;
  }
  public resetTerminateJobsOnUpdate() {
    this._terminateJobsOnUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateJobsOnUpdateInput() {
    return this._terminateJobsOnUpdate;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment awscc_batch_compute_environment}
*/
export class BatchComputeEnvironment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_batch_compute_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BatchComputeEnvironment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BatchComputeEnvironment to import
  * @param importFromId The id of the existing BatchComputeEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BatchComputeEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_batch_compute_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/batch_compute_environment awscc_batch_compute_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BatchComputeEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: BatchComputeEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_batch_compute_environment',
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
    this._computeEnvironmentName = config.computeEnvironmentName;
    this._computeResources.internalValue = config.computeResources;
    this._context = config.context;
    this._eksConfiguration.internalValue = config.eksConfiguration;
    this._replaceComputeEnvironment = config.replaceComputeEnvironment;
    this._serviceRole = config.serviceRole;
    this._state = config.state;
    this._tags = config.tags;
    this._type = config.type;
    this._unmanagedvCpus = config.unmanagedvCpus;
    this._updatePolicy.internalValue = config.updatePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_environment_arn - computed: true, optional: false, required: false
  public get computeEnvironmentArn() {
    return this.getStringAttribute('compute_environment_arn');
  }

  // compute_environment_name - computed: true, optional: true, required: false
  private _computeEnvironmentName?: string; 
  public get computeEnvironmentName() {
    return this.getStringAttribute('compute_environment_name');
  }
  public set computeEnvironmentName(value: string) {
    this._computeEnvironmentName = value;
  }
  public resetComputeEnvironmentName() {
    this._computeEnvironmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeEnvironmentNameInput() {
    return this._computeEnvironmentName;
  }

  // compute_resources - computed: true, optional: true, required: false
  private _computeResources = new BatchComputeEnvironmentComputeResourcesOutputReference(this, "compute_resources");
  public get computeResources() {
    return this._computeResources;
  }
  public putComputeResources(value: BatchComputeEnvironmentComputeResources) {
    this._computeResources.internalValue = value;
  }
  public resetComputeResources() {
    this._computeResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeResourcesInput() {
    return this._computeResources.internalValue;
  }

  // context - computed: true, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // eks_configuration - computed: true, optional: true, required: false
  private _eksConfiguration = new BatchComputeEnvironmentEksConfigurationOutputReference(this, "eks_configuration");
  public get eksConfiguration() {
    return this._eksConfiguration;
  }
  public putEksConfiguration(value: BatchComputeEnvironmentEksConfiguration) {
    this._eksConfiguration.internalValue = value;
  }
  public resetEksConfiguration() {
    this._eksConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksConfigurationInput() {
    return this._eksConfiguration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // replace_compute_environment - computed: true, optional: true, required: false
  private _replaceComputeEnvironment?: boolean | cdktn.IResolvable; 
  public get replaceComputeEnvironment() {
    return this.getBooleanAttribute('replace_compute_environment');
  }
  public set replaceComputeEnvironment(value: boolean | cdktn.IResolvable) {
    this._replaceComputeEnvironment = value;
  }
  public resetReplaceComputeEnvironment() {
    this._replaceComputeEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceComputeEnvironmentInput() {
    return this._replaceComputeEnvironment;
  }

  // service_role - computed: true, optional: true, required: false
  private _serviceRole?: string; 
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }
  public set serviceRole(value: string) {
    this._serviceRole = value;
  }
  public resetServiceRole() {
    this._serviceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleInput() {
    return this._serviceRole;
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

  // unmanagedv_cpus - computed: true, optional: true, required: false
  private _unmanagedvCpus?: number; 
  public get unmanagedvCpus() {
    return this.getNumberAttribute('unmanagedv_cpus');
  }
  public set unmanagedvCpus(value: number) {
    this._unmanagedvCpus = value;
  }
  public resetUnmanagedvCpus() {
    this._unmanagedvCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmanagedvCpusInput() {
    return this._unmanagedvCpus;
  }

  // update_policy - computed: true, optional: true, required: false
  private _updatePolicy = new BatchComputeEnvironmentUpdatePolicyOutputReference(this, "update_policy");
  public get updatePolicy() {
    return this._updatePolicy;
  }
  public putUpdatePolicy(value: BatchComputeEnvironmentUpdatePolicy) {
    this._updatePolicy.internalValue = value;
  }
  public resetUpdatePolicy() {
    this._updatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_environment_name: cdktn.stringToTerraform(this._computeEnvironmentName),
      compute_resources: batchComputeEnvironmentComputeResourcesToTerraform(this._computeResources.internalValue),
      context: cdktn.stringToTerraform(this._context),
      eks_configuration: batchComputeEnvironmentEksConfigurationToTerraform(this._eksConfiguration.internalValue),
      replace_compute_environment: cdktn.booleanToTerraform(this._replaceComputeEnvironment),
      service_role: cdktn.stringToTerraform(this._serviceRole),
      state: cdktn.stringToTerraform(this._state),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      type: cdktn.stringToTerraform(this._type),
      unmanagedv_cpus: cdktn.numberToTerraform(this._unmanagedvCpus),
      update_policy: batchComputeEnvironmentUpdatePolicyToTerraform(this._updatePolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_environment_name: {
        value: cdktn.stringToHclTerraform(this._computeEnvironmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_resources: {
        value: batchComputeEnvironmentComputeResourcesToHclTerraform(this._computeResources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BatchComputeEnvironmentComputeResources",
      },
      context: {
        value: cdktn.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eks_configuration: {
        value: batchComputeEnvironmentEksConfigurationToHclTerraform(this._eksConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BatchComputeEnvironmentEksConfiguration",
      },
      replace_compute_environment: {
        value: cdktn.booleanToHclTerraform(this._replaceComputeEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_role: {
        value: cdktn.stringToHclTerraform(this._serviceRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktn.stringToHclTerraform(this._state),
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
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unmanagedv_cpus: {
        value: cdktn.numberToHclTerraform(this._unmanagedvCpus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_policy: {
        value: batchComputeEnvironmentUpdatePolicyToHclTerraform(this._updatePolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BatchComputeEnvironmentUpdatePolicy",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
