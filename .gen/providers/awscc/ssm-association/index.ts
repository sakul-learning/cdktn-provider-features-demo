// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SsmAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}
  */
  readonly applyOnlyAtCronInterval?: boolean | cdktn.IResolvable;
  /**
  * A role used by association to take actions on your behalf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#association_dispatch_assume_role SsmAssociation#association_dispatch_assume_role}
  */
  readonly associationDispatchAssumeRole?: string;
  /**
  * The name of the association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#association_name SsmAssociation#association_name}
  */
  readonly associationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}
  */
  readonly automationTargetParameterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#calendar_names SsmAssociation#calendar_names}
  */
  readonly calendarNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#compliance_severity SsmAssociation#compliance_severity}
  */
  readonly complianceSeverity?: string;
  /**
  * The version of the SSM document to associate with the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#document_version SsmAssociation#document_version}
  */
  readonly documentVersion?: string;
  /**
  * The ID of the instance that the SSM document is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#instance_id SsmAssociation#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#max_concurrency SsmAssociation#max_concurrency}
  */
  readonly maxConcurrency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#max_errors SsmAssociation#max_errors}
  */
  readonly maxErrors?: string;
  /**
  * The name of the SSM document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#name SsmAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#output_location SsmAssociation#output_location}
  */
  readonly outputLocation?: SsmAssociationOutputLocation;
  /**
  * Parameter values that the SSM document uses at runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#parameters SsmAssociation#parameters}
  */
  readonly parameters?: { [key: string]: string[] } | cdktn.IResolvable;
  /**
  * A Cron or Rate expression that specifies when the association is applied to the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#schedule_expression SsmAssociation#schedule_expression}
  */
  readonly scheduleExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#schedule_offset SsmAssociation#schedule_offset}
  */
  readonly scheduleOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#sync_compliance SsmAssociation#sync_compliance}
  */
  readonly syncCompliance?: string;
  /**
  * A key-value pair to associate with a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#tags SsmAssociation#tags}
  */
  readonly tags?: SsmAssociationTags[] | cdktn.IResolvable;
  /**
  * The targets that the SSM document sends commands to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#targets SsmAssociation#targets}
  */
  readonly targets?: SsmAssociationTargets[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}
  */
  readonly waitForSuccessTimeoutSeconds?: number;
}
export interface SsmAssociationOutputLocationS3Location {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#output_s3_bucket_name SsmAssociation#output_s3_bucket_name}
  */
  readonly outputS3BucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#output_s3_key_prefix SsmAssociation#output_s3_key_prefix}
  */
  readonly outputS3KeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#output_s3_region SsmAssociation#output_s3_region}
  */
  readonly outputS3Region?: string;
}

export function ssmAssociationOutputLocationS3LocationToTerraform(struct?: SsmAssociationOutputLocationS3Location | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    output_s3_bucket_name: cdktn.stringToTerraform(struct!.outputS3BucketName),
    output_s3_key_prefix: cdktn.stringToTerraform(struct!.outputS3KeyPrefix),
    output_s3_region: cdktn.stringToTerraform(struct!.outputS3Region),
  }
}


export function ssmAssociationOutputLocationS3LocationToHclTerraform(struct?: SsmAssociationOutputLocationS3Location | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    output_s3_bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.outputS3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_s3_key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.outputS3KeyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_s3_region: {
      value: cdktn.stringToHclTerraform(struct!.outputS3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmAssociationOutputLocationS3LocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmAssociationOutputLocationS3Location | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputS3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputS3BucketName = this._outputS3BucketName;
    }
    if (this._outputS3KeyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputS3KeyPrefix = this._outputS3KeyPrefix;
    }
    if (this._outputS3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputS3Region = this._outputS3Region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmAssociationOutputLocationS3Location | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._outputS3BucketName = undefined;
      this._outputS3KeyPrefix = undefined;
      this._outputS3Region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._outputS3BucketName = value.outputS3BucketName;
      this._outputS3KeyPrefix = value.outputS3KeyPrefix;
      this._outputS3Region = value.outputS3Region;
    }
  }

  // output_s3_bucket_name - computed: true, optional: true, required: false
  private _outputS3BucketName?: string; 
  public get outputS3BucketName() {
    return this.getStringAttribute('output_s3_bucket_name');
  }
  public set outputS3BucketName(value: string) {
    this._outputS3BucketName = value;
  }
  public resetOutputS3BucketName() {
    this._outputS3BucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputS3BucketNameInput() {
    return this._outputS3BucketName;
  }

  // output_s3_key_prefix - computed: true, optional: true, required: false
  private _outputS3KeyPrefix?: string; 
  public get outputS3KeyPrefix() {
    return this.getStringAttribute('output_s3_key_prefix');
  }
  public set outputS3KeyPrefix(value: string) {
    this._outputS3KeyPrefix = value;
  }
  public resetOutputS3KeyPrefix() {
    this._outputS3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputS3KeyPrefixInput() {
    return this._outputS3KeyPrefix;
  }

  // output_s3_region - computed: true, optional: true, required: false
  private _outputS3Region?: string; 
  public get outputS3Region() {
    return this.getStringAttribute('output_s3_region');
  }
  public set outputS3Region(value: string) {
    this._outputS3Region = value;
  }
  public resetOutputS3Region() {
    this._outputS3Region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputS3RegionInput() {
    return this._outputS3Region;
  }
}
export interface SsmAssociationOutputLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#s3_location SsmAssociation#s3_location}
  */
  readonly s3Location?: SsmAssociationOutputLocationS3Location;
}

export function ssmAssociationOutputLocationToTerraform(struct?: SsmAssociationOutputLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_location: ssmAssociationOutputLocationS3LocationToTerraform(struct!.s3Location),
  }
}


export function ssmAssociationOutputLocationToHclTerraform(struct?: SsmAssociationOutputLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_location: {
      value: ssmAssociationOutputLocationS3LocationToHclTerraform(struct!.s3Location),
      isBlock: true,
      type: "struct",
      storageClassType: "SsmAssociationOutputLocationS3Location",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmAssociationOutputLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmAssociationOutputLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Location = this._s3Location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmAssociationOutputLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Location.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Location.internalValue = value.s3Location;
    }
  }

  // s3_location - computed: true, optional: true, required: false
  private _s3Location = new SsmAssociationOutputLocationS3LocationOutputReference(this, "s3_location");
  public get s3Location() {
    return this._s3Location;
  }
  public putS3Location(value: SsmAssociationOutputLocationS3Location) {
    this._s3Location.internalValue = value;
  }
  public resetS3Location() {
    this._s3Location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LocationInput() {
    return this._s3Location.internalValue;
  }
}
export interface SsmAssociationTags {
  /**
  * The name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#key SsmAssociation#key}
  */
  readonly key?: string;
  /**
  * The value of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#value SsmAssociation#value}
  */
  readonly value?: string;
}

export function ssmAssociationTagsToTerraform(struct?: SsmAssociationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ssmAssociationTagsToHclTerraform(struct?: SsmAssociationTags | cdktn.IResolvable): any {
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

export class SsmAssociationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmAssociationTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SsmAssociationTags | cdktn.IResolvable | undefined) {
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

export class SsmAssociationTagsList extends cdktn.ComplexList {
  public internalValue? : SsmAssociationTags[] | cdktn.IResolvable

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
  public get(index: number): SsmAssociationTagsOutputReference {
    return new SsmAssociationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmAssociationTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#key SsmAssociation#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#values SsmAssociation#values}
  */
  readonly values?: string[];
}

export function ssmAssociationTargetsToTerraform(struct?: SsmAssociationTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function ssmAssociationTargetsToHclTerraform(struct?: SsmAssociationTargets | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmAssociationTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmAssociationTargets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmAssociationTargets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
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

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SsmAssociationTargetsList extends cdktn.ComplexList {
  public internalValue? : SsmAssociationTargets[] | cdktn.IResolvable

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
  public get(index: number): SsmAssociationTargetsOutputReference {
    return new SsmAssociationTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association awscc_ssm_association}
*/
export class SsmAssociation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ssm_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SsmAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsmAssociation to import
  * @param importFromId The id of the existing SsmAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsmAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssm_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_association awscc_ssm_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: SsmAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ssm_association',
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
    this._applyOnlyAtCronInterval = config.applyOnlyAtCronInterval;
    this._associationDispatchAssumeRole = config.associationDispatchAssumeRole;
    this._associationName = config.associationName;
    this._automationTargetParameterName = config.automationTargetParameterName;
    this._calendarNames = config.calendarNames;
    this._complianceSeverity = config.complianceSeverity;
    this._documentVersion = config.documentVersion;
    this._instanceId = config.instanceId;
    this._maxConcurrency = config.maxConcurrency;
    this._maxErrors = config.maxErrors;
    this._name = config.name;
    this._outputLocation.internalValue = config.outputLocation;
    this._parameters = config.parameters;
    this._scheduleExpression = config.scheduleExpression;
    this._scheduleOffset = config.scheduleOffset;
    this._syncCompliance = config.syncCompliance;
    this._tags.internalValue = config.tags;
    this._targets.internalValue = config.targets;
    this._waitForSuccessTimeoutSeconds = config.waitForSuccessTimeoutSeconds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_only_at_cron_interval - computed: true, optional: true, required: false
  private _applyOnlyAtCronInterval?: boolean | cdktn.IResolvable; 
  public get applyOnlyAtCronInterval() {
    return this.getBooleanAttribute('apply_only_at_cron_interval');
  }
  public set applyOnlyAtCronInterval(value: boolean | cdktn.IResolvable) {
    this._applyOnlyAtCronInterval = value;
  }
  public resetApplyOnlyAtCronInterval() {
    this._applyOnlyAtCronInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyOnlyAtCronIntervalInput() {
    return this._applyOnlyAtCronInterval;
  }

  // association_dispatch_assume_role - computed: true, optional: true, required: false
  private _associationDispatchAssumeRole?: string; 
  public get associationDispatchAssumeRole() {
    return this.getStringAttribute('association_dispatch_assume_role');
  }
  public set associationDispatchAssumeRole(value: string) {
    this._associationDispatchAssumeRole = value;
  }
  public resetAssociationDispatchAssumeRole() {
    this._associationDispatchAssumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationDispatchAssumeRoleInput() {
    return this._associationDispatchAssumeRole;
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // association_name - computed: true, optional: true, required: false
  private _associationName?: string; 
  public get associationName() {
    return this.getStringAttribute('association_name');
  }
  public set associationName(value: string) {
    this._associationName = value;
  }
  public resetAssociationName() {
    this._associationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationNameInput() {
    return this._associationName;
  }

  // automation_target_parameter_name - computed: true, optional: true, required: false
  private _automationTargetParameterName?: string; 
  public get automationTargetParameterName() {
    return this.getStringAttribute('automation_target_parameter_name');
  }
  public set automationTargetParameterName(value: string) {
    this._automationTargetParameterName = value;
  }
  public resetAutomationTargetParameterName() {
    this._automationTargetParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationTargetParameterNameInput() {
    return this._automationTargetParameterName;
  }

  // calendar_names - computed: true, optional: true, required: false
  private _calendarNames?: string[]; 
  public get calendarNames() {
    return this.getListAttribute('calendar_names');
  }
  public set calendarNames(value: string[]) {
    this._calendarNames = value;
  }
  public resetCalendarNames() {
    this._calendarNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarNamesInput() {
    return this._calendarNames;
  }

  // compliance_severity - computed: true, optional: true, required: false
  private _complianceSeverity?: string; 
  public get complianceSeverity() {
    return this.getStringAttribute('compliance_severity');
  }
  public set complianceSeverity(value: string) {
    this._complianceSeverity = value;
  }
  public resetComplianceSeverity() {
    this._complianceSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceSeverityInput() {
    return this._complianceSeverity;
  }

  // document_version - computed: true, optional: true, required: false
  private _documentVersion?: string; 
  public get documentVersion() {
    return this.getStringAttribute('document_version');
  }
  public set documentVersion(value: string) {
    this._documentVersion = value;
  }
  public resetDocumentVersion() {
    this._documentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentVersionInput() {
    return this._documentVersion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // max_concurrency - computed: true, optional: true, required: false
  private _maxConcurrency?: string; 
  public get maxConcurrency() {
    return this.getStringAttribute('max_concurrency');
  }
  public set maxConcurrency(value: string) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // max_errors - computed: true, optional: true, required: false
  private _maxErrors?: string; 
  public get maxErrors() {
    return this.getStringAttribute('max_errors');
  }
  public set maxErrors(value: string) {
    this._maxErrors = value;
  }
  public resetMaxErrors() {
    this._maxErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxErrorsInput() {
    return this._maxErrors;
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

  // output_location - computed: true, optional: true, required: false
  private _outputLocation = new SsmAssociationOutputLocationOutputReference(this, "output_location");
  public get outputLocation() {
    return this._outputLocation;
  }
  public putOutputLocation(value: SsmAssociationOutputLocation) {
    this._outputLocation.internalValue = value;
  }
  public resetOutputLocation() {
    this._outputLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation.internalValue;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string[] } | cdktn.IResolvable; 
  public get parameters() {
    return this.interpolationForAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string[] } | cdktn.IResolvable) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // schedule_expression - computed: true, optional: true, required: false
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  public resetScheduleExpression() {
    this._scheduleExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }

  // schedule_offset - computed: true, optional: true, required: false
  private _scheduleOffset?: number; 
  public get scheduleOffset() {
    return this.getNumberAttribute('schedule_offset');
  }
  public set scheduleOffset(value: number) {
    this._scheduleOffset = value;
  }
  public resetScheduleOffset() {
    this._scheduleOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleOffsetInput() {
    return this._scheduleOffset;
  }

  // sync_compliance - computed: true, optional: true, required: false
  private _syncCompliance?: string; 
  public get syncCompliance() {
    return this.getStringAttribute('sync_compliance');
  }
  public set syncCompliance(value: string) {
    this._syncCompliance = value;
  }
  public resetSyncCompliance() {
    this._syncCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncComplianceInput() {
    return this._syncCompliance;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SsmAssociationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SsmAssociationTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // targets - computed: true, optional: true, required: false
  private _targets = new SsmAssociationTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: SsmAssociationTargets[] | cdktn.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // wait_for_success_timeout_seconds - computed: true, optional: true, required: false
  private _waitForSuccessTimeoutSeconds?: number; 
  public get waitForSuccessTimeoutSeconds() {
    return this.getNumberAttribute('wait_for_success_timeout_seconds');
  }
  public set waitForSuccessTimeoutSeconds(value: number) {
    this._waitForSuccessTimeoutSeconds = value;
  }
  public resetWaitForSuccessTimeoutSeconds() {
    this._waitForSuccessTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForSuccessTimeoutSecondsInput() {
    return this._waitForSuccessTimeoutSeconds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_only_at_cron_interval: cdktn.booleanToTerraform(this._applyOnlyAtCronInterval),
      association_dispatch_assume_role: cdktn.stringToTerraform(this._associationDispatchAssumeRole),
      association_name: cdktn.stringToTerraform(this._associationName),
      automation_target_parameter_name: cdktn.stringToTerraform(this._automationTargetParameterName),
      calendar_names: cdktn.listMapper(cdktn.stringToTerraform, false)(this._calendarNames),
      compliance_severity: cdktn.stringToTerraform(this._complianceSeverity),
      document_version: cdktn.stringToTerraform(this._documentVersion),
      instance_id: cdktn.stringToTerraform(this._instanceId),
      max_concurrency: cdktn.stringToTerraform(this._maxConcurrency),
      max_errors: cdktn.stringToTerraform(this._maxErrors),
      name: cdktn.stringToTerraform(this._name),
      output_location: ssmAssociationOutputLocationToTerraform(this._outputLocation.internalValue),
      parameters: cdktn.hashMapper(cdktn.listMapper(cdktn.stringToTerraform, false))(this._parameters),
      schedule_expression: cdktn.stringToTerraform(this._scheduleExpression),
      schedule_offset: cdktn.numberToTerraform(this._scheduleOffset),
      sync_compliance: cdktn.stringToTerraform(this._syncCompliance),
      tags: cdktn.listMapper(ssmAssociationTagsToTerraform, false)(this._tags.internalValue),
      targets: cdktn.listMapper(ssmAssociationTargetsToTerraform, false)(this._targets.internalValue),
      wait_for_success_timeout_seconds: cdktn.numberToTerraform(this._waitForSuccessTimeoutSeconds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_only_at_cron_interval: {
        value: cdktn.booleanToHclTerraform(this._applyOnlyAtCronInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      association_dispatch_assume_role: {
        value: cdktn.stringToHclTerraform(this._associationDispatchAssumeRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      association_name: {
        value: cdktn.stringToHclTerraform(this._associationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automation_target_parameter_name: {
        value: cdktn.stringToHclTerraform(this._automationTargetParameterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      calendar_names: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._calendarNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      compliance_severity: {
        value: cdktn.stringToHclTerraform(this._complianceSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document_version: {
        value: cdktn.stringToHclTerraform(this._documentVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktn.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_concurrency: {
        value: cdktn.stringToHclTerraform(this._maxConcurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_errors: {
        value: cdktn.stringToHclTerraform(this._maxErrors),
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
      output_location: {
        value: ssmAssociationOutputLocationToHclTerraform(this._outputLocation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SsmAssociationOutputLocation",
      },
      parameters: {
        value: cdktn.hashMapperHcl(cdktn.listMapperHcl(cdktn.stringToHclTerraform, false))(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      schedule_expression: {
        value: cdktn.stringToHclTerraform(this._scheduleExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_offset: {
        value: cdktn.numberToHclTerraform(this._scheduleOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sync_compliance: {
        value: cdktn.stringToHclTerraform(this._syncCompliance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(ssmAssociationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsmAssociationTagsList",
      },
      targets: {
        value: cdktn.listMapperHcl(ssmAssociationTargetsToHclTerraform, false)(this._targets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsmAssociationTargetsList",
      },
      wait_for_success_timeout_seconds: {
        value: cdktn.numberToHclTerraform(this._waitForSuccessTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
