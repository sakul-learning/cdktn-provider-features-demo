// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/resiliencehub_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccResiliencehubAppConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/resiliencehub_app#id DataAwsccResiliencehubApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccResiliencehubAppEventSubscriptions {
}

export function dataAwsccResiliencehubAppEventSubscriptionsToTerraform(struct?: DataAwsccResiliencehubAppEventSubscriptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubAppEventSubscriptionsToHclTerraform(struct?: DataAwsccResiliencehubAppEventSubscriptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubAppEventSubscriptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccResiliencehubAppEventSubscriptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubAppEventSubscriptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getStringAttribute('event_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sns_topic_arn - computed: true, optional: false, required: false
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
}

export class DataAwsccResiliencehubAppEventSubscriptionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccResiliencehubAppEventSubscriptionsOutputReference {
    return new DataAwsccResiliencehubAppEventSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccResiliencehubAppPermissionModel {
}

export function dataAwsccResiliencehubAppPermissionModelToTerraform(struct?: DataAwsccResiliencehubAppPermissionModel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubAppPermissionModelToHclTerraform(struct?: DataAwsccResiliencehubAppPermissionModel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubAppPermissionModelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubAppPermissionModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubAppPermissionModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cross_account_role_arns - computed: true, optional: false, required: false
  public get crossAccountRoleArns() {
    return this.getListAttribute('cross_account_role_arns');
  }

  // invoker_role_name - computed: true, optional: false, required: false
  public get invokerRoleName() {
    return this.getStringAttribute('invoker_role_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId {
}

export function dataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdToTerraform(struct?: DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdToHclTerraform(struct?: DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccResiliencehubAppResourceMappings {
}

export function dataAwsccResiliencehubAppResourceMappingsToTerraform(struct?: DataAwsccResiliencehubAppResourceMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubAppResourceMappingsToHclTerraform(struct?: DataAwsccResiliencehubAppResourceMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubAppResourceMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccResiliencehubAppResourceMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubAppResourceMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // eks_source_name - computed: true, optional: false, required: false
  public get eksSourceName() {
    return this.getStringAttribute('eks_source_name');
  }

  // logical_stack_name - computed: true, optional: false, required: false
  public get logicalStackName() {
    return this.getStringAttribute('logical_stack_name');
  }

  // mapping_type - computed: true, optional: false, required: false
  public get mappingType() {
    return this.getStringAttribute('mapping_type');
  }

  // physical_resource_id - computed: true, optional: false, required: false
  private _physicalResourceId = new DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference(this, "physical_resource_id");
  public get physicalResourceId() {
    return this._physicalResourceId;
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // terraform_source_name - computed: true, optional: false, required: false
  public get terraformSourceName() {
    return this.getStringAttribute('terraform_source_name');
  }
}

export class DataAwsccResiliencehubAppResourceMappingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccResiliencehubAppResourceMappingsOutputReference {
    return new DataAwsccResiliencehubAppResourceMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/resiliencehub_app awscc_resiliencehub_app}
*/
export class DataAwsccResiliencehubApp extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_resiliencehub_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccResiliencehubApp resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccResiliencehubApp to import
  * @param importFromId The id of the existing DataAwsccResiliencehubApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/resiliencehub_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccResiliencehubApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_resiliencehub_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/resiliencehub_app awscc_resiliencehub_app} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccResiliencehubAppConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccResiliencehubAppConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_resiliencehub_app',
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

  // app_arn - computed: true, optional: false, required: false
  public get appArn() {
    return this.getStringAttribute('app_arn');
  }

  // app_assessment_schedule - computed: true, optional: false, required: false
  public get appAssessmentSchedule() {
    return this.getStringAttribute('app_assessment_schedule');
  }

  // app_template_body - computed: true, optional: false, required: false
  public get appTemplateBody() {
    return this.getStringAttribute('app_template_body');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // drift_status - computed: true, optional: false, required: false
  public get driftStatus() {
    return this.getStringAttribute('drift_status');
  }

  // event_subscriptions - computed: true, optional: false, required: false
  private _eventSubscriptions = new DataAwsccResiliencehubAppEventSubscriptionsList(this, "event_subscriptions", false);
  public get eventSubscriptions() {
    return this._eventSubscriptions;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permission_model - computed: true, optional: false, required: false
  private _permissionModel = new DataAwsccResiliencehubAppPermissionModelOutputReference(this, "permission_model");
  public get permissionModel() {
    return this._permissionModel;
  }

  // resiliency_policy_arn - computed: true, optional: false, required: false
  public get resiliencyPolicyArn() {
    return this.getStringAttribute('resiliency_policy_arn');
  }

  // resource_mappings - computed: true, optional: false, required: false
  private _resourceMappings = new DataAwsccResiliencehubAppResourceMappingsList(this, "resource_mappings", false);
  public get resourceMappings() {
    return this._resourceMappings;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
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
