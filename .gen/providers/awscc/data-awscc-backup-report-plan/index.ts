// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/backup_report_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBackupReportPlanConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/backup_report_plan#id DataAwsccBackupReportPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBackupReportPlanReportDeliveryChannel {
}

export function dataAwsccBackupReportPlanReportDeliveryChannelToTerraform(struct?: DataAwsccBackupReportPlanReportDeliveryChannel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupReportPlanReportDeliveryChannelToHclTerraform(struct?: DataAwsccBackupReportPlanReportDeliveryChannel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupReportPlanReportDeliveryChannelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBackupReportPlanReportDeliveryChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupReportPlanReportDeliveryChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // formats - computed: true, optional: false, required: false
  public get formats() {
    return cdktn.Fn.tolist(this.getListAttribute('formats'));
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // s3_key_prefix - computed: true, optional: false, required: false
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
}
export interface DataAwsccBackupReportPlanReportPlanTags {
}

export function dataAwsccBackupReportPlanReportPlanTagsToTerraform(struct?: DataAwsccBackupReportPlanReportPlanTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupReportPlanReportPlanTagsToHclTerraform(struct?: DataAwsccBackupReportPlanReportPlanTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupReportPlanReportPlanTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBackupReportPlanReportPlanTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupReportPlanReportPlanTags | undefined) {
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

export class DataAwsccBackupReportPlanReportPlanTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBackupReportPlanReportPlanTagsOutputReference {
    return new DataAwsccBackupReportPlanReportPlanTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBackupReportPlanReportSetting {
}

export function dataAwsccBackupReportPlanReportSettingToTerraform(struct?: DataAwsccBackupReportPlanReportSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupReportPlanReportSettingToHclTerraform(struct?: DataAwsccBackupReportPlanReportSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupReportPlanReportSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBackupReportPlanReportSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupReportPlanReportSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accounts - computed: true, optional: false, required: false
  public get accounts() {
    return cdktn.Fn.tolist(this.getListAttribute('accounts'));
  }

  // framework_arns - computed: true, optional: false, required: false
  public get frameworkArns() {
    return cdktn.Fn.tolist(this.getListAttribute('framework_arns'));
  }

  // organization_units - computed: true, optional: false, required: false
  public get organizationUnits() {
    return cdktn.Fn.tolist(this.getListAttribute('organization_units'));
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return cdktn.Fn.tolist(this.getListAttribute('regions'));
  }

  // report_template - computed: true, optional: false, required: false
  public get reportTemplate() {
    return this.getStringAttribute('report_template');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/backup_report_plan awscc_backup_report_plan}
*/
export class DataAwsccBackupReportPlan extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_backup_report_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBackupReportPlan resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBackupReportPlan to import
  * @param importFromId The id of the existing DataAwsccBackupReportPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/backup_report_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBackupReportPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_backup_report_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/backup_report_plan awscc_backup_report_plan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBackupReportPlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBackupReportPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_backup_report_plan',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // report_delivery_channel - computed: true, optional: false, required: false
  private _reportDeliveryChannel = new DataAwsccBackupReportPlanReportDeliveryChannelOutputReference(this, "report_delivery_channel");
  public get reportDeliveryChannel() {
    return this._reportDeliveryChannel;
  }

  // report_plan_arn - computed: true, optional: false, required: false
  public get reportPlanArn() {
    return this.getStringAttribute('report_plan_arn');
  }

  // report_plan_description - computed: true, optional: false, required: false
  public get reportPlanDescription() {
    return this.getStringAttribute('report_plan_description');
  }

  // report_plan_name - computed: true, optional: false, required: false
  public get reportPlanName() {
    return this.getStringAttribute('report_plan_name');
  }

  // report_plan_tags - computed: true, optional: false, required: false
  private _reportPlanTags = new DataAwsccBackupReportPlanReportPlanTagsList(this, "report_plan_tags", false);
  public get reportPlanTags() {
    return this._reportPlanTags;
  }

  // report_setting - computed: true, optional: false, required: false
  private _reportSetting = new DataAwsccBackupReportPlanReportSettingOutputReference(this, "report_setting");
  public get reportSetting() {
    return this._reportSetting;
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
