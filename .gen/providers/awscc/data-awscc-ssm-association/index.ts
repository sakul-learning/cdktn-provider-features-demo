// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ssm_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSsmAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ssm_association#id DataAwsccSsmAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSsmAssociationOutputLocationS3Location {
}

export function dataAwsccSsmAssociationOutputLocationS3LocationToTerraform(struct?: DataAwsccSsmAssociationOutputLocationS3Location): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmAssociationOutputLocationS3LocationToHclTerraform(struct?: DataAwsccSsmAssociationOutputLocationS3Location): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmAssociationOutputLocationS3LocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSsmAssociationOutputLocationS3Location | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmAssociationOutputLocationS3Location | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // output_s3_bucket_name - computed: true, optional: false, required: false
  public get outputS3BucketName() {
    return this.getStringAttribute('output_s3_bucket_name');
  }

  // output_s3_key_prefix - computed: true, optional: false, required: false
  public get outputS3KeyPrefix() {
    return this.getStringAttribute('output_s3_key_prefix');
  }

  // output_s3_region - computed: true, optional: false, required: false
  public get outputS3Region() {
    return this.getStringAttribute('output_s3_region');
  }
}
export interface DataAwsccSsmAssociationOutputLocation {
}

export function dataAwsccSsmAssociationOutputLocationToTerraform(struct?: DataAwsccSsmAssociationOutputLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmAssociationOutputLocationToHclTerraform(struct?: DataAwsccSsmAssociationOutputLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmAssociationOutputLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSsmAssociationOutputLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmAssociationOutputLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_location - computed: true, optional: false, required: false
  private _s3Location = new DataAwsccSsmAssociationOutputLocationS3LocationOutputReference(this, "s3_location");
  public get s3Location() {
    return this._s3Location;
  }
}
export interface DataAwsccSsmAssociationTags {
}

export function dataAwsccSsmAssociationTagsToTerraform(struct?: DataAwsccSsmAssociationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmAssociationTagsToHclTerraform(struct?: DataAwsccSsmAssociationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmAssociationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSsmAssociationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmAssociationTags | undefined) {
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

export class DataAwsccSsmAssociationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSsmAssociationTagsOutputReference {
    return new DataAwsccSsmAssociationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSsmAssociationTargets {
}

export function dataAwsccSsmAssociationTargetsToTerraform(struct?: DataAwsccSsmAssociationTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmAssociationTargetsToHclTerraform(struct?: DataAwsccSsmAssociationTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmAssociationTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSsmAssociationTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmAssociationTargets | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccSsmAssociationTargetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSsmAssociationTargetsOutputReference {
    return new DataAwsccSsmAssociationTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ssm_association awscc_ssm_association}
*/
export class DataAwsccSsmAssociation extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ssm_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSsmAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSsmAssociation to import
  * @param importFromId The id of the existing DataAwsccSsmAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ssm_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSsmAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssm_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ssm_association awscc_ssm_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSsmAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSsmAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ssm_association',
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

  // apply_only_at_cron_interval - computed: true, optional: false, required: false
  public get applyOnlyAtCronInterval() {
    return this.getBooleanAttribute('apply_only_at_cron_interval');
  }

  // association_dispatch_assume_role - computed: true, optional: false, required: false
  public get associationDispatchAssumeRole() {
    return this.getStringAttribute('association_dispatch_assume_role');
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // association_name - computed: true, optional: false, required: false
  public get associationName() {
    return this.getStringAttribute('association_name');
  }

  // automation_target_parameter_name - computed: true, optional: false, required: false
  public get automationTargetParameterName() {
    return this.getStringAttribute('automation_target_parameter_name');
  }

  // calendar_names - computed: true, optional: false, required: false
  public get calendarNames() {
    return this.getListAttribute('calendar_names');
  }

  // compliance_severity - computed: true, optional: false, required: false
  public get complianceSeverity() {
    return this.getStringAttribute('compliance_severity');
  }

  // document_version - computed: true, optional: false, required: false
  public get documentVersion() {
    return this.getStringAttribute('document_version');
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // max_concurrency - computed: true, optional: false, required: false
  public get maxConcurrency() {
    return this.getStringAttribute('max_concurrency');
  }

  // max_errors - computed: true, optional: false, required: false
  public get maxErrors() {
    return this.getStringAttribute('max_errors');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // output_location - computed: true, optional: false, required: false
  private _outputLocation = new DataAwsccSsmAssociationOutputLocationOutputReference(this, "output_location");
  public get outputLocation() {
    return this._outputLocation;
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktn.StringListMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }

  // schedule_offset - computed: true, optional: false, required: false
  public get scheduleOffset() {
    return this.getNumberAttribute('schedule_offset');
  }

  // sync_compliance - computed: true, optional: false, required: false
  public get syncCompliance() {
    return this.getStringAttribute('sync_compliance');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSsmAssociationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataAwsccSsmAssociationTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }

  // wait_for_success_timeout_seconds - computed: true, optional: false, required: false
  public get waitForSuccessTimeoutSeconds() {
    return this.getNumberAttribute('wait_for_success_timeout_seconds');
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
