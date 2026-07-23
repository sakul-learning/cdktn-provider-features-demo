// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ComprehendFlywheelConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#active_model_arn ComprehendFlywheel#active_model_arn}
  */
  readonly activeModelArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#data_access_role_arn ComprehendFlywheel#data_access_role_arn}
  */
  readonly dataAccessRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#data_lake_s3_uri ComprehendFlywheel#data_lake_s3_uri}
  */
  readonly dataLakeS3Uri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#data_security_config ComprehendFlywheel#data_security_config}
  */
  readonly dataSecurityConfig?: ComprehendFlywheelDataSecurityConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#flywheel_name ComprehendFlywheel#flywheel_name}
  */
  readonly flywheelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#model_type ComprehendFlywheel#model_type}
  */
  readonly modelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#tags ComprehendFlywheel#tags}
  */
  readonly tags?: ComprehendFlywheelTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#task_config ComprehendFlywheel#task_config}
  */
  readonly taskConfig?: ComprehendFlywheelTaskConfig;
}
export interface ComprehendFlywheelDataSecurityConfigVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#security_group_ids ComprehendFlywheel#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#subnets ComprehendFlywheel#subnets}
  */
  readonly subnets?: string[];
}

export function comprehendFlywheelDataSecurityConfigVpcConfigToTerraform(struct?: ComprehendFlywheelDataSecurityConfigVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function comprehendFlywheelDataSecurityConfigVpcConfigToHclTerraform(struct?: ComprehendFlywheelDataSecurityConfigVpcConfig | cdktn.IResolvable): any {
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
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComprehendFlywheelDataSecurityConfigVpcConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendFlywheelDataSecurityConfigVpcConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnets = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnets = value.subnets;
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

  // subnets - computed: true, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return cdktn.Fn.tolist(this.getListAttribute('subnets'));
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
}
export interface ComprehendFlywheelDataSecurityConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#data_lake_kms_key_id ComprehendFlywheel#data_lake_kms_key_id}
  */
  readonly dataLakeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#model_kms_key_id ComprehendFlywheel#model_kms_key_id}
  */
  readonly modelKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#volume_kms_key_id ComprehendFlywheel#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#vpc_config ComprehendFlywheel#vpc_config}
  */
  readonly vpcConfig?: ComprehendFlywheelDataSecurityConfigVpcConfig;
}

export function comprehendFlywheelDataSecurityConfigToTerraform(struct?: ComprehendFlywheelDataSecurityConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_lake_kms_key_id: cdktn.stringToTerraform(struct!.dataLakeKmsKeyId),
    model_kms_key_id: cdktn.stringToTerraform(struct!.modelKmsKeyId),
    volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
    vpc_config: comprehendFlywheelDataSecurityConfigVpcConfigToTerraform(struct!.vpcConfig),
  }
}


export function comprehendFlywheelDataSecurityConfigToHclTerraform(struct?: ComprehendFlywheelDataSecurityConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_lake_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.dataLakeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.modelKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_config: {
      value: comprehendFlywheelDataSecurityConfigVpcConfigToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ComprehendFlywheelDataSecurityConfigVpcConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComprehendFlywheelDataSecurityConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComprehendFlywheelDataSecurityConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLakeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLakeKmsKeyId = this._dataLakeKmsKeyId;
    }
    if (this._modelKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelKmsKeyId = this._modelKmsKeyId;
    }
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendFlywheelDataSecurityConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataLakeKmsKeyId = undefined;
      this._modelKmsKeyId = undefined;
      this._volumeKmsKeyId = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataLakeKmsKeyId = value.dataLakeKmsKeyId;
      this._modelKmsKeyId = value.modelKmsKeyId;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // data_lake_kms_key_id - computed: true, optional: true, required: false
  private _dataLakeKmsKeyId?: string; 
  public get dataLakeKmsKeyId() {
    return this.getStringAttribute('data_lake_kms_key_id');
  }
  public set dataLakeKmsKeyId(value: string) {
    this._dataLakeKmsKeyId = value;
  }
  public resetDataLakeKmsKeyId() {
    this._dataLakeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLakeKmsKeyIdInput() {
    return this._dataLakeKmsKeyId;
  }

  // model_kms_key_id - computed: true, optional: true, required: false
  private _modelKmsKeyId?: string; 
  public get modelKmsKeyId() {
    return this.getStringAttribute('model_kms_key_id');
  }
  public set modelKmsKeyId(value: string) {
    this._modelKmsKeyId = value;
  }
  public resetModelKmsKeyId() {
    this._modelKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelKmsKeyIdInput() {
    return this._modelKmsKeyId;
  }

  // volume_kms_key_id - computed: true, optional: true, required: false
  private _volumeKmsKeyId?: string; 
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }
  public set volumeKmsKeyId(value: string) {
    this._volumeKmsKeyId = value;
  }
  public resetVolumeKmsKeyId() {
    this._volumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeKmsKeyIdInput() {
    return this._volumeKmsKeyId;
  }

  // vpc_config - computed: true, optional: true, required: false
  private _vpcConfig = new ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: ComprehendFlywheelDataSecurityConfigVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }
}
export interface ComprehendFlywheelTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#key ComprehendFlywheel#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#value ComprehendFlywheel#value}
  */
  readonly value?: string;
}

export function comprehendFlywheelTagsToTerraform(struct?: ComprehendFlywheelTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function comprehendFlywheelTagsToHclTerraform(struct?: ComprehendFlywheelTags | cdktn.IResolvable): any {
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

export class ComprehendFlywheelTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComprehendFlywheelTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ComprehendFlywheelTags | cdktn.IResolvable | undefined) {
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

export class ComprehendFlywheelTagsList extends cdktn.ComplexList {
  public internalValue? : ComprehendFlywheelTags[] | cdktn.IResolvable

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
  public get(index: number): ComprehendFlywheelTagsOutputReference {
    return new ComprehendFlywheelTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComprehendFlywheelTaskConfigDocumentClassificationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#labels ComprehendFlywheel#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#mode ComprehendFlywheel#mode}
  */
  readonly mode?: string;
}

export function comprehendFlywheelTaskConfigDocumentClassificationConfigToTerraform(struct?: ComprehendFlywheelTaskConfigDocumentClassificationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    labels: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.labels),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function comprehendFlywheelTaskConfigDocumentClassificationConfigToHclTerraform(struct?: ComprehendFlywheelTaskConfigDocumentClassificationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    labels: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComprehendFlywheelTaskConfigDocumentClassificationConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendFlywheelTaskConfigDocumentClassificationConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._mode = value.mode;
    }
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktn.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#type ComprehendFlywheel#type}
  */
  readonly type?: string;
}

export function comprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesToTerraform(struct?: ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function comprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesToHclTerraform(struct?: ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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
}

export class ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList extends cdktn.ComplexList {
  public internalValue? : ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes[] | cdktn.IResolvable

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
  public get(index: number): ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference {
    return new ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComprehendFlywheelTaskConfigEntityRecognitionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#entity_types ComprehendFlywheel#entity_types}
  */
  readonly entityTypes?: ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes[] | cdktn.IResolvable;
}

export function comprehendFlywheelTaskConfigEntityRecognitionConfigToTerraform(struct?: ComprehendFlywheelTaskConfigEntityRecognitionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entity_types: cdktn.listMapper(comprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesToTerraform, false)(struct!.entityTypes),
  }
}


export function comprehendFlywheelTaskConfigEntityRecognitionConfigToHclTerraform(struct?: ComprehendFlywheelTaskConfigEntityRecognitionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entity_types: {
      value: cdktn.listMapperHcl(comprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesToHclTerraform, false)(struct!.entityTypes),
      isBlock: true,
      type: "set",
      storageClassType: "ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComprehendFlywheelTaskConfigEntityRecognitionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityTypes = this._entityTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendFlywheelTaskConfigEntityRecognitionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityTypes.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityTypes.internalValue = value.entityTypes;
    }
  }

  // entity_types - computed: true, optional: true, required: false
  private _entityTypes = new ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList(this, "entity_types", true);
  public get entityTypes() {
    return this._entityTypes;
  }
  public putEntityTypes(value: ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes[] | cdktn.IResolvable) {
    this._entityTypes.internalValue = value;
  }
  public resetEntityTypes() {
    this._entityTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypesInput() {
    return this._entityTypes.internalValue;
  }
}
export interface ComprehendFlywheelTaskConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#document_classification_config ComprehendFlywheel#document_classification_config}
  */
  readonly documentClassificationConfig?: ComprehendFlywheelTaskConfigDocumentClassificationConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#entity_recognition_config ComprehendFlywheel#entity_recognition_config}
  */
  readonly entityRecognitionConfig?: ComprehendFlywheelTaskConfigEntityRecognitionConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#language_code ComprehendFlywheel#language_code}
  */
  readonly languageCode?: string;
}

export function comprehendFlywheelTaskConfigToTerraform(struct?: ComprehendFlywheelTaskConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    document_classification_config: comprehendFlywheelTaskConfigDocumentClassificationConfigToTerraform(struct!.documentClassificationConfig),
    entity_recognition_config: comprehendFlywheelTaskConfigEntityRecognitionConfigToTerraform(struct!.entityRecognitionConfig),
    language_code: cdktn.stringToTerraform(struct!.languageCode),
  }
}


export function comprehendFlywheelTaskConfigToHclTerraform(struct?: ComprehendFlywheelTaskConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    document_classification_config: {
      value: comprehendFlywheelTaskConfigDocumentClassificationConfigToHclTerraform(struct!.documentClassificationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ComprehendFlywheelTaskConfigDocumentClassificationConfig",
    },
    entity_recognition_config: {
      value: comprehendFlywheelTaskConfigEntityRecognitionConfigToHclTerraform(struct!.entityRecognitionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ComprehendFlywheelTaskConfigEntityRecognitionConfig",
    },
    language_code: {
      value: cdktn.stringToHclTerraform(struct!.languageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComprehendFlywheelTaskConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComprehendFlywheelTaskConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentClassificationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentClassificationConfig = this._documentClassificationConfig?.internalValue;
    }
    if (this._entityRecognitionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityRecognitionConfig = this._entityRecognitionConfig?.internalValue;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendFlywheelTaskConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._documentClassificationConfig.internalValue = undefined;
      this._entityRecognitionConfig.internalValue = undefined;
      this._languageCode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._documentClassificationConfig.internalValue = value.documentClassificationConfig;
      this._entityRecognitionConfig.internalValue = value.entityRecognitionConfig;
      this._languageCode = value.languageCode;
    }
  }

  // document_classification_config - computed: true, optional: true, required: false
  private _documentClassificationConfig = new ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference(this, "document_classification_config");
  public get documentClassificationConfig() {
    return this._documentClassificationConfig;
  }
  public putDocumentClassificationConfig(value: ComprehendFlywheelTaskConfigDocumentClassificationConfig) {
    this._documentClassificationConfig.internalValue = value;
  }
  public resetDocumentClassificationConfig() {
    this._documentClassificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentClassificationConfigInput() {
    return this._documentClassificationConfig.internalValue;
  }

  // entity_recognition_config - computed: true, optional: true, required: false
  private _entityRecognitionConfig = new ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference(this, "entity_recognition_config");
  public get entityRecognitionConfig() {
    return this._entityRecognitionConfig;
  }
  public putEntityRecognitionConfig(value: ComprehendFlywheelTaskConfigEntityRecognitionConfig) {
    this._entityRecognitionConfig.internalValue = value;
  }
  public resetEntityRecognitionConfig() {
    this._entityRecognitionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityRecognitionConfigInput() {
    return this._entityRecognitionConfig.internalValue;
  }

  // language_code - computed: true, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel awscc_comprehend_flywheel}
*/
export class ComprehendFlywheel extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_comprehend_flywheel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComprehendFlywheel resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComprehendFlywheel to import
  * @param importFromId The id of the existing ComprehendFlywheel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComprehendFlywheel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_comprehend_flywheel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/comprehend_flywheel awscc_comprehend_flywheel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComprehendFlywheelConfig
  */
  public constructor(scope: Construct, id: string, config: ComprehendFlywheelConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_comprehend_flywheel',
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
    this._activeModelArn = config.activeModelArn;
    this._dataAccessRoleArn = config.dataAccessRoleArn;
    this._dataLakeS3Uri = config.dataLakeS3Uri;
    this._dataSecurityConfig.internalValue = config.dataSecurityConfig;
    this._flywheelName = config.flywheelName;
    this._modelType = config.modelType;
    this._tags.internalValue = config.tags;
    this._taskConfig.internalValue = config.taskConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_model_arn - computed: true, optional: true, required: false
  private _activeModelArn?: string; 
  public get activeModelArn() {
    return this.getStringAttribute('active_model_arn');
  }
  public set activeModelArn(value: string) {
    this._activeModelArn = value;
  }
  public resetActiveModelArn() {
    this._activeModelArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeModelArnInput() {
    return this._activeModelArn;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_access_role_arn - computed: false, optional: false, required: true
  private _dataAccessRoleArn?: string; 
  public get dataAccessRoleArn() {
    return this.getStringAttribute('data_access_role_arn');
  }
  public set dataAccessRoleArn(value: string) {
    this._dataAccessRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAccessRoleArnInput() {
    return this._dataAccessRoleArn;
  }

  // data_lake_s3_uri - computed: false, optional: false, required: true
  private _dataLakeS3Uri?: string; 
  public get dataLakeS3Uri() {
    return this.getStringAttribute('data_lake_s3_uri');
  }
  public set dataLakeS3Uri(value: string) {
    this._dataLakeS3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLakeS3UriInput() {
    return this._dataLakeS3Uri;
  }

  // data_security_config - computed: true, optional: true, required: false
  private _dataSecurityConfig = new ComprehendFlywheelDataSecurityConfigOutputReference(this, "data_security_config");
  public get dataSecurityConfig() {
    return this._dataSecurityConfig;
  }
  public putDataSecurityConfig(value: ComprehendFlywheelDataSecurityConfig) {
    this._dataSecurityConfig.internalValue = value;
  }
  public resetDataSecurityConfig() {
    this._dataSecurityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSecurityConfigInput() {
    return this._dataSecurityConfig.internalValue;
  }

  // flywheel_name - computed: false, optional: false, required: true
  private _flywheelName?: string; 
  public get flywheelName() {
    return this.getStringAttribute('flywheel_name');
  }
  public set flywheelName(value: string) {
    this._flywheelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flywheelNameInput() {
    return this._flywheelName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // model_type - computed: true, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ComprehendFlywheelTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ComprehendFlywheelTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // task_config - computed: true, optional: true, required: false
  private _taskConfig = new ComprehendFlywheelTaskConfigOutputReference(this, "task_config");
  public get taskConfig() {
    return this._taskConfig;
  }
  public putTaskConfig(value: ComprehendFlywheelTaskConfig) {
    this._taskConfig.internalValue = value;
  }
  public resetTaskConfig() {
    this._taskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskConfigInput() {
    return this._taskConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_model_arn: cdktn.stringToTerraform(this._activeModelArn),
      data_access_role_arn: cdktn.stringToTerraform(this._dataAccessRoleArn),
      data_lake_s3_uri: cdktn.stringToTerraform(this._dataLakeS3Uri),
      data_security_config: comprehendFlywheelDataSecurityConfigToTerraform(this._dataSecurityConfig.internalValue),
      flywheel_name: cdktn.stringToTerraform(this._flywheelName),
      model_type: cdktn.stringToTerraform(this._modelType),
      tags: cdktn.listMapper(comprehendFlywheelTagsToTerraform, false)(this._tags.internalValue),
      task_config: comprehendFlywheelTaskConfigToTerraform(this._taskConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_model_arn: {
        value: cdktn.stringToHclTerraform(this._activeModelArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_access_role_arn: {
        value: cdktn.stringToHclTerraform(this._dataAccessRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_lake_s3_uri: {
        value: cdktn.stringToHclTerraform(this._dataLakeS3Uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_security_config: {
        value: comprehendFlywheelDataSecurityConfigToHclTerraform(this._dataSecurityConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComprehendFlywheelDataSecurityConfig",
      },
      flywheel_name: {
        value: cdktn.stringToHclTerraform(this._flywheelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_type: {
        value: cdktn.stringToHclTerraform(this._modelType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(comprehendFlywheelTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComprehendFlywheelTagsList",
      },
      task_config: {
        value: comprehendFlywheelTaskConfigToHclTerraform(this._taskConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComprehendFlywheelTaskConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
