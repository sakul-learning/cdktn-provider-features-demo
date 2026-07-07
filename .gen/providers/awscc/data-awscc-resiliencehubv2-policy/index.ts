// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/resiliencehubv2_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccResiliencehubv2PolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/resiliencehubv2_policy#id DataAwsccResiliencehubv2Policy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccResiliencehubv2PolicyAvailabilitySlo {
}

export function dataAwsccResiliencehubv2PolicyAvailabilitySloToTerraform(struct?: DataAwsccResiliencehubv2PolicyAvailabilitySlo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2PolicyAvailabilitySloToHclTerraform(struct?: DataAwsccResiliencehubv2PolicyAvailabilitySlo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubv2PolicyAvailabilitySlo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2PolicyAvailabilitySlo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getNumberAttribute('target');
  }
}
export interface DataAwsccResiliencehubv2PolicyDataRecovery {
}

export function dataAwsccResiliencehubv2PolicyDataRecoveryToTerraform(struct?: DataAwsccResiliencehubv2PolicyDataRecovery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2PolicyDataRecoveryToHclTerraform(struct?: DataAwsccResiliencehubv2PolicyDataRecovery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubv2PolicyDataRecovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2PolicyDataRecovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // time_between_backups_in_minutes - computed: true, optional: false, required: false
  public get timeBetweenBackupsInMinutes() {
    return this.getNumberAttribute('time_between_backups_in_minutes');
  }
}
export interface DataAwsccResiliencehubv2PolicyMultiAz {
}

export function dataAwsccResiliencehubv2PolicyMultiAzToTerraform(struct?: DataAwsccResiliencehubv2PolicyMultiAz): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2PolicyMultiAzToHclTerraform(struct?: DataAwsccResiliencehubv2PolicyMultiAz): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2PolicyMultiAzOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubv2PolicyMultiAz | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2PolicyMultiAz | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disaster_recovery_approach - computed: true, optional: false, required: false
  public get disasterRecoveryApproach() {
    return this.getStringAttribute('disaster_recovery_approach');
  }

  // rpo_in_minutes - computed: true, optional: false, required: false
  public get rpoInMinutes() {
    return this.getNumberAttribute('rpo_in_minutes');
  }

  // rto_in_minutes - computed: true, optional: false, required: false
  public get rtoInMinutes() {
    return this.getNumberAttribute('rto_in_minutes');
  }
}
export interface DataAwsccResiliencehubv2PolicyMultiRegion {
}

export function dataAwsccResiliencehubv2PolicyMultiRegionToTerraform(struct?: DataAwsccResiliencehubv2PolicyMultiRegion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2PolicyMultiRegionToHclTerraform(struct?: DataAwsccResiliencehubv2PolicyMultiRegion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2PolicyMultiRegionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubv2PolicyMultiRegion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2PolicyMultiRegion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disaster_recovery_approach - computed: true, optional: false, required: false
  public get disasterRecoveryApproach() {
    return this.getStringAttribute('disaster_recovery_approach');
  }

  // rpo_in_minutes - computed: true, optional: false, required: false
  public get rpoInMinutes() {
    return this.getNumberAttribute('rpo_in_minutes');
  }

  // rto_in_minutes - computed: true, optional: false, required: false
  public get rtoInMinutes() {
    return this.getNumberAttribute('rto_in_minutes');
  }
}
export interface DataAwsccResiliencehubv2PolicyTags {
}

export function dataAwsccResiliencehubv2PolicyTagsToTerraform(struct?: DataAwsccResiliencehubv2PolicyTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2PolicyTagsToHclTerraform(struct?: DataAwsccResiliencehubv2PolicyTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2PolicyTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccResiliencehubv2PolicyTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2PolicyTags | undefined) {
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

export class DataAwsccResiliencehubv2PolicyTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccResiliencehubv2PolicyTagsOutputReference {
    return new DataAwsccResiliencehubv2PolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/resiliencehubv2_policy awscc_resiliencehubv2_policy}
*/
export class DataAwsccResiliencehubv2Policy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_resiliencehubv2_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccResiliencehubv2Policy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccResiliencehubv2Policy to import
  * @param importFromId The id of the existing DataAwsccResiliencehubv2Policy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/resiliencehubv2_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccResiliencehubv2Policy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_resiliencehubv2_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/resiliencehubv2_policy awscc_resiliencehubv2_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccResiliencehubv2PolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccResiliencehubv2PolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_resiliencehubv2_policy',
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

  // associated_service_count - computed: true, optional: false, required: false
  public get associatedServiceCount() {
    return this.getNumberAttribute('associated_service_count');
  }

  // availability_slo - computed: true, optional: false, required: false
  private _availabilitySlo = new DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference(this, "availability_slo");
  public get availabilitySlo() {
    return this._availabilitySlo;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_recovery - computed: true, optional: false, required: false
  private _dataRecovery = new DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference(this, "data_recovery");
  public get dataRecovery() {
    return this._dataRecovery;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // multi_az - computed: true, optional: false, required: false
  private _multiAz = new DataAwsccResiliencehubv2PolicyMultiAzOutputReference(this, "multi_az");
  public get multiAz() {
    return this._multiAz;
  }

  // multi_region - computed: true, optional: false, required: false
  private _multiRegion = new DataAwsccResiliencehubv2PolicyMultiRegionOutputReference(this, "multi_region");
  public get multiRegion() {
    return this._multiRegion;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_arn - computed: true, optional: false, required: false
  public get policyArn() {
    return this.getStringAttribute('policy_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccResiliencehubv2PolicyTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
