// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotsitewise_portal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotsitewisePortalConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotsitewise_portal#id DataAwsccIotsitewisePortal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotsitewisePortalAlarms {
}

export function dataAwsccIotsitewisePortalAlarmsToTerraform(struct?: DataAwsccIotsitewisePortalAlarms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewisePortalAlarmsToHclTerraform(struct?: DataAwsccIotsitewisePortalAlarms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewisePortalAlarmsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewisePortalAlarms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewisePortalAlarms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_role_arn - computed: true, optional: false, required: false
  public get alarmRoleArn() {
    return this.getStringAttribute('alarm_role_arn');
  }

  // notification_lambda_arn - computed: true, optional: false, required: false
  public get notificationLambdaArn() {
    return this.getStringAttribute('notification_lambda_arn');
  }
}
export interface DataAwsccIotsitewisePortalPortalTypeConfiguration {
}

export function dataAwsccIotsitewisePortalPortalTypeConfigurationToTerraform(struct?: DataAwsccIotsitewisePortalPortalTypeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewisePortalPortalTypeConfigurationToHclTerraform(struct?: DataAwsccIotsitewisePortalPortalTypeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewisePortalPortalTypeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccIotsitewisePortalPortalTypeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewisePortalPortalTypeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // portal_tools - computed: true, optional: false, required: false
  public get portalTools() {
    return this.getListAttribute('portal_tools');
  }
}

export class DataAwsccIotsitewisePortalPortalTypeConfigurationMap extends cdktn.ComplexMap {

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
  public get(key: string): DataAwsccIotsitewisePortalPortalTypeConfigurationOutputReference {
    return new DataAwsccIotsitewisePortalPortalTypeConfigurationOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccIotsitewisePortalTags {
}

export function dataAwsccIotsitewisePortalTagsToTerraform(struct?: DataAwsccIotsitewisePortalTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewisePortalTagsToHclTerraform(struct?: DataAwsccIotsitewisePortalTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewisePortalTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotsitewisePortalTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewisePortalTags | undefined) {
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

export class DataAwsccIotsitewisePortalTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotsitewisePortalTagsOutputReference {
    return new DataAwsccIotsitewisePortalTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotsitewise_portal awscc_iotsitewise_portal}
*/
export class DataAwsccIotsitewisePortal extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotsitewise_portal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotsitewisePortal resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotsitewisePortal to import
  * @param importFromId The id of the existing DataAwsccIotsitewisePortal that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotsitewise_portal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotsitewisePortal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotsitewise_portal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotsitewise_portal awscc_iotsitewise_portal} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotsitewisePortalConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotsitewisePortalConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotsitewise_portal',
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

  // alarms - computed: true, optional: false, required: false
  private _alarms = new DataAwsccIotsitewisePortalAlarmsOutputReference(this, "alarms");
  public get alarms() {
    return this._alarms;
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

  // notification_sender_email - computed: true, optional: false, required: false
  public get notificationSenderEmail() {
    return this.getStringAttribute('notification_sender_email');
  }

  // portal_arn - computed: true, optional: false, required: false
  public get portalArn() {
    return this.getStringAttribute('portal_arn');
  }

  // portal_auth_mode - computed: true, optional: false, required: false
  public get portalAuthMode() {
    return this.getStringAttribute('portal_auth_mode');
  }

  // portal_client_id - computed: true, optional: false, required: false
  public get portalClientId() {
    return this.getStringAttribute('portal_client_id');
  }

  // portal_contact_email - computed: true, optional: false, required: false
  public get portalContactEmail() {
    return this.getStringAttribute('portal_contact_email');
  }

  // portal_description - computed: true, optional: false, required: false
  public get portalDescription() {
    return this.getStringAttribute('portal_description');
  }

  // portal_id - computed: true, optional: false, required: false
  public get portalId() {
    return this.getStringAttribute('portal_id');
  }

  // portal_name - computed: true, optional: false, required: false
  public get portalName() {
    return this.getStringAttribute('portal_name');
  }

  // portal_start_url - computed: true, optional: false, required: false
  public get portalStartUrl() {
    return this.getStringAttribute('portal_start_url');
  }

  // portal_type - computed: true, optional: false, required: false
  public get portalType() {
    return this.getStringAttribute('portal_type');
  }

  // portal_type_configuration - computed: true, optional: false, required: false
  private _portalTypeConfiguration = new DataAwsccIotsitewisePortalPortalTypeConfigurationMap(this, "portal_type_configuration");
  public get portalTypeConfiguration() {
    return this._portalTypeConfiguration;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotsitewisePortalTagsList(this, "tags", false);
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
