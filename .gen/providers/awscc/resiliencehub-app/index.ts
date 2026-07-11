// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ResiliencehubAppConfig extends cdktn.TerraformMetaArguments {
  /**
  * Assessment execution schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#app_assessment_schedule ResiliencehubApp#app_assessment_schedule}
  */
  readonly appAssessmentSchedule?: string;
  /**
  * A string containing full ResilienceHub app template body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#app_template_body ResiliencehubApp#app_template_body}
  */
  readonly appTemplateBody: string;
  /**
  * App description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#description ResiliencehubApp#description}
  */
  readonly description?: string;
  /**
  * The list of events you would like to subscribe and get notification for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#event_subscriptions ResiliencehubApp#event_subscriptions}
  */
  readonly eventSubscriptions?: ResiliencehubAppEventSubscriptions[] | cdktn.IResolvable;
  /**
  * Name of the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#name ResiliencehubApp#name}
  */
  readonly name: string;
  /**
  * Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#permission_model ResiliencehubApp#permission_model}
  */
  readonly permissionModel?: ResiliencehubAppPermissionModel;
  /**
  * Amazon Resource Name (ARN) of the Resiliency Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#resiliency_policy_arn ResiliencehubApp#resiliency_policy_arn}
  */
  readonly resiliencyPolicyArn?: string;
  /**
  * An array of ResourceMapping objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#resource_mappings ResiliencehubApp#resource_mappings}
  */
  readonly resourceMappings: ResiliencehubAppResourceMappings[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#tags ResiliencehubApp#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface ResiliencehubAppEventSubscriptions {
  /**
  * The type of event you would like to subscribe and get notification for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#event_type ResiliencehubApp#event_type}
  */
  readonly eventType?: string;
  /**
  * Unique name to identify an event subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#name ResiliencehubApp#name}
  */
  readonly name?: string;
  /**
  * Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#sns_topic_arn ResiliencehubApp#sns_topic_arn}
  */
  readonly snsTopicArn?: string;
}

export function resiliencehubAppEventSubscriptionsToTerraform(struct?: ResiliencehubAppEventSubscriptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_type: cdktn.stringToTerraform(struct!.eventType),
    name: cdktn.stringToTerraform(struct!.name),
    sns_topic_arn: cdktn.stringToTerraform(struct!.snsTopicArn),
  }
}


export function resiliencehubAppEventSubscriptionsToHclTerraform(struct?: ResiliencehubAppEventSubscriptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_type: {
      value: cdktn.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sns_topic_arn: {
      value: cdktn.stringToHclTerraform(struct!.snsTopicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResiliencehubAppEventSubscriptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResiliencehubAppEventSubscriptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._snsTopicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsTopicArn = this._snsTopicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResiliencehubAppEventSubscriptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._name = undefined;
      this._snsTopicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._name = value.name;
      this._snsTopicArn = value.snsTopicArn;
    }
  }

  // event_type - computed: true, optional: true, required: false
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
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

  // sns_topic_arn - computed: true, optional: true, required: false
  private _snsTopicArn?: string; 
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }
  public resetSnsTopicArn() {
    this._snsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn;
  }
}

export class ResiliencehubAppEventSubscriptionsList extends cdktn.ComplexList {
  public internalValue? : ResiliencehubAppEventSubscriptions[] | cdktn.IResolvable

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
  public get(index: number): ResiliencehubAppEventSubscriptionsOutputReference {
    return new ResiliencehubAppEventSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResiliencehubAppPermissionModel {
  /**
  * Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts. These ARNs are used for querying purposes while importing resources and assessing your application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#cross_account_role_arns ResiliencehubApp#cross_account_role_arns}
  */
  readonly crossAccountRoleArns?: string[];
  /**
  * Existing AWS IAM role name in the primary AWS account that will be assumed by AWS Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#invoker_role_name ResiliencehubApp#invoker_role_name}
  */
  readonly invokerRoleName?: string;
  /**
  * Defines how AWS Resilience Hub scans your resources. It can scan for the resources by using a pre-existing role in your AWS account, or by using the credentials of the current IAM user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#type ResiliencehubApp#type}
  */
  readonly type?: string;
}

export function resiliencehubAppPermissionModelToTerraform(struct?: ResiliencehubAppPermissionModel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cross_account_role_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.crossAccountRoleArns),
    invoker_role_name: cdktn.stringToTerraform(struct!.invokerRoleName),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function resiliencehubAppPermissionModelToHclTerraform(struct?: ResiliencehubAppPermissionModel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cross_account_role_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.crossAccountRoleArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    invoker_role_name: {
      value: cdktn.stringToHclTerraform(struct!.invokerRoleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ResiliencehubAppPermissionModelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResiliencehubAppPermissionModel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountRoleArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRoleArns = this._crossAccountRoleArns;
    }
    if (this._invokerRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.invokerRoleName = this._invokerRoleName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResiliencehubAppPermissionModel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccountRoleArns = undefined;
      this._invokerRoleName = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccountRoleArns = value.crossAccountRoleArns;
      this._invokerRoleName = value.invokerRoleName;
      this._type = value.type;
    }
  }

  // cross_account_role_arns - computed: true, optional: true, required: false
  private _crossAccountRoleArns?: string[]; 
  public get crossAccountRoleArns() {
    return this.getListAttribute('cross_account_role_arns');
  }
  public set crossAccountRoleArns(value: string[]) {
    this._crossAccountRoleArns = value;
  }
  public resetCrossAccountRoleArns() {
    this._crossAccountRoleArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleArnsInput() {
    return this._crossAccountRoleArns;
  }

  // invoker_role_name - computed: true, optional: true, required: false
  private _invokerRoleName?: string; 
  public get invokerRoleName() {
    return this.getStringAttribute('invoker_role_name');
  }
  public set invokerRoleName(value: string) {
    this._invokerRoleName = value;
  }
  public resetInvokerRoleName() {
    this._invokerRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokerRoleNameInput() {
    return this._invokerRoleName;
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
export interface ResiliencehubAppResourceMappingsPhysicalResourceId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#aws_account_id ResiliencehubApp#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#aws_region ResiliencehubApp#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#identifier ResiliencehubApp#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#type ResiliencehubApp#type}
  */
  readonly type: string;
}

export function resiliencehubAppResourceMappingsPhysicalResourceIdToTerraform(struct?: ResiliencehubAppResourceMappingsPhysicalResourceId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_account_id: cdktn.stringToTerraform(struct!.awsAccountId),
    aws_region: cdktn.stringToTerraform(struct!.awsRegion),
    identifier: cdktn.stringToTerraform(struct!.identifier),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function resiliencehubAppResourceMappingsPhysicalResourceIdToHclTerraform(struct?: ResiliencehubAppResourceMappingsPhysicalResourceId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_account_id: {
      value: cdktn.stringToHclTerraform(struct!.awsAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktn.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResiliencehubAppResourceMappingsPhysicalResourceId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResiliencehubAppResourceMappingsPhysicalResourceId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccountId = undefined;
      this._awsRegion = undefined;
      this._identifier = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccountId = value.awsAccountId;
      this._awsRegion = value.awsRegion;
      this._identifier = value.identifier;
      this._type = value.type;
    }
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // aws_region - computed: true, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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
}
export interface ResiliencehubAppResourceMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#eks_source_name ResiliencehubApp#eks_source_name}
  */
  readonly eksSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#logical_stack_name ResiliencehubApp#logical_stack_name}
  */
  readonly logicalStackName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#mapping_type ResiliencehubApp#mapping_type}
  */
  readonly mappingType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#physical_resource_id ResiliencehubApp#physical_resource_id}
  */
  readonly physicalResourceId: ResiliencehubAppResourceMappingsPhysicalResourceId;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#resource_name ResiliencehubApp#resource_name}
  */
  readonly resourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#terraform_source_name ResiliencehubApp#terraform_source_name}
  */
  readonly terraformSourceName?: string;
}

export function resiliencehubAppResourceMappingsToTerraform(struct?: ResiliencehubAppResourceMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    eks_source_name: cdktn.stringToTerraform(struct!.eksSourceName),
    logical_stack_name: cdktn.stringToTerraform(struct!.logicalStackName),
    mapping_type: cdktn.stringToTerraform(struct!.mappingType),
    physical_resource_id: resiliencehubAppResourceMappingsPhysicalResourceIdToTerraform(struct!.physicalResourceId),
    resource_name: cdktn.stringToTerraform(struct!.resourceName),
    terraform_source_name: cdktn.stringToTerraform(struct!.terraformSourceName),
  }
}


export function resiliencehubAppResourceMappingsToHclTerraform(struct?: ResiliencehubAppResourceMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    eks_source_name: {
      value: cdktn.stringToHclTerraform(struct!.eksSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_stack_name: {
      value: cdktn.stringToHclTerraform(struct!.logicalStackName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping_type: {
      value: cdktn.stringToHclTerraform(struct!.mappingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    physical_resource_id: {
      value: resiliencehubAppResourceMappingsPhysicalResourceIdToHclTerraform(struct!.physicalResourceId),
      isBlock: true,
      type: "struct",
      storageClassType: "ResiliencehubAppResourceMappingsPhysicalResourceId",
    },
    resource_name: {
      value: cdktn.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    terraform_source_name: {
      value: cdktn.stringToHclTerraform(struct!.terraformSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResiliencehubAppResourceMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResiliencehubAppResourceMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eksSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksSourceName = this._eksSourceName;
    }
    if (this._logicalStackName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalStackName = this._logicalStackName;
    }
    if (this._mappingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingType = this._mappingType;
    }
    if (this._physicalResourceId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalResourceId = this._physicalResourceId?.internalValue;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._terraformSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.terraformSourceName = this._terraformSourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResiliencehubAppResourceMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eksSourceName = undefined;
      this._logicalStackName = undefined;
      this._mappingType = undefined;
      this._physicalResourceId.internalValue = undefined;
      this._resourceName = undefined;
      this._terraformSourceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eksSourceName = value.eksSourceName;
      this._logicalStackName = value.logicalStackName;
      this._mappingType = value.mappingType;
      this._physicalResourceId.internalValue = value.physicalResourceId;
      this._resourceName = value.resourceName;
      this._terraformSourceName = value.terraformSourceName;
    }
  }

  // eks_source_name - computed: true, optional: true, required: false
  private _eksSourceName?: string; 
  public get eksSourceName() {
    return this.getStringAttribute('eks_source_name');
  }
  public set eksSourceName(value: string) {
    this._eksSourceName = value;
  }
  public resetEksSourceName() {
    this._eksSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksSourceNameInput() {
    return this._eksSourceName;
  }

  // logical_stack_name - computed: true, optional: true, required: false
  private _logicalStackName?: string; 
  public get logicalStackName() {
    return this.getStringAttribute('logical_stack_name');
  }
  public set logicalStackName(value: string) {
    this._logicalStackName = value;
  }
  public resetLogicalStackName() {
    this._logicalStackName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalStackNameInput() {
    return this._logicalStackName;
  }

  // mapping_type - computed: false, optional: false, required: true
  private _mappingType?: string; 
  public get mappingType() {
    return this.getStringAttribute('mapping_type');
  }
  public set mappingType(value: string) {
    this._mappingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingTypeInput() {
    return this._mappingType;
  }

  // physical_resource_id - computed: false, optional: false, required: true
  private _physicalResourceId = new ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference(this, "physical_resource_id");
  public get physicalResourceId() {
    return this._physicalResourceId;
  }
  public putPhysicalResourceId(value: ResiliencehubAppResourceMappingsPhysicalResourceId) {
    this._physicalResourceId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalResourceIdInput() {
    return this._physicalResourceId.internalValue;
  }

  // resource_name - computed: true, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // terraform_source_name - computed: true, optional: true, required: false
  private _terraformSourceName?: string; 
  public get terraformSourceName() {
    return this.getStringAttribute('terraform_source_name');
  }
  public set terraformSourceName(value: string) {
    this._terraformSourceName = value;
  }
  public resetTerraformSourceName() {
    this._terraformSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformSourceNameInput() {
    return this._terraformSourceName;
  }
}

export class ResiliencehubAppResourceMappingsList extends cdktn.ComplexList {
  public internalValue? : ResiliencehubAppResourceMappings[] | cdktn.IResolvable

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
  public get(index: number): ResiliencehubAppResourceMappingsOutputReference {
    return new ResiliencehubAppResourceMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app awscc_resiliencehub_app}
*/
export class ResiliencehubApp extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_resiliencehub_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ResiliencehubApp resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResiliencehubApp to import
  * @param importFromId The id of the existing ResiliencehubApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResiliencehubApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_resiliencehub_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/resiliencehub_app awscc_resiliencehub_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResiliencehubAppConfig
  */
  public constructor(scope: Construct, id: string, config: ResiliencehubAppConfig) {
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
    this._appAssessmentSchedule = config.appAssessmentSchedule;
    this._appTemplateBody = config.appTemplateBody;
    this._description = config.description;
    this._eventSubscriptions.internalValue = config.eventSubscriptions;
    this._name = config.name;
    this._permissionModel.internalValue = config.permissionModel;
    this._resiliencyPolicyArn = config.resiliencyPolicyArn;
    this._resourceMappings.internalValue = config.resourceMappings;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_arn - computed: true, optional: false, required: false
  public get appArn() {
    return this.getStringAttribute('app_arn');
  }

  // app_assessment_schedule - computed: true, optional: true, required: false
  private _appAssessmentSchedule?: string; 
  public get appAssessmentSchedule() {
    return this.getStringAttribute('app_assessment_schedule');
  }
  public set appAssessmentSchedule(value: string) {
    this._appAssessmentSchedule = value;
  }
  public resetAppAssessmentSchedule() {
    this._appAssessmentSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appAssessmentScheduleInput() {
    return this._appAssessmentSchedule;
  }

  // app_template_body - computed: false, optional: false, required: true
  private _appTemplateBody?: string; 
  public get appTemplateBody() {
    return this.getStringAttribute('app_template_body');
  }
  public set appTemplateBody(value: string) {
    this._appTemplateBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appTemplateBodyInput() {
    return this._appTemplateBody;
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

  // drift_status - computed: true, optional: false, required: false
  public get driftStatus() {
    return this.getStringAttribute('drift_status');
  }

  // event_subscriptions - computed: true, optional: true, required: false
  private _eventSubscriptions = new ResiliencehubAppEventSubscriptionsList(this, "event_subscriptions", false);
  public get eventSubscriptions() {
    return this._eventSubscriptions;
  }
  public putEventSubscriptions(value: ResiliencehubAppEventSubscriptions[] | cdktn.IResolvable) {
    this._eventSubscriptions.internalValue = value;
  }
  public resetEventSubscriptions() {
    this._eventSubscriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSubscriptionsInput() {
    return this._eventSubscriptions.internalValue;
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

  // permission_model - computed: true, optional: true, required: false
  private _permissionModel = new ResiliencehubAppPermissionModelOutputReference(this, "permission_model");
  public get permissionModel() {
    return this._permissionModel;
  }
  public putPermissionModel(value: ResiliencehubAppPermissionModel) {
    this._permissionModel.internalValue = value;
  }
  public resetPermissionModel() {
    this._permissionModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionModelInput() {
    return this._permissionModel.internalValue;
  }

  // resiliency_policy_arn - computed: true, optional: true, required: false
  private _resiliencyPolicyArn?: string; 
  public get resiliencyPolicyArn() {
    return this.getStringAttribute('resiliency_policy_arn');
  }
  public set resiliencyPolicyArn(value: string) {
    this._resiliencyPolicyArn = value;
  }
  public resetResiliencyPolicyArn() {
    this._resiliencyPolicyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resiliencyPolicyArnInput() {
    return this._resiliencyPolicyArn;
  }

  // resource_mappings - computed: false, optional: false, required: true
  private _resourceMappings = new ResiliencehubAppResourceMappingsList(this, "resource_mappings", false);
  public get resourceMappings() {
    return this._resourceMappings;
  }
  public putResourceMappings(value: ResiliencehubAppResourceMappings[] | cdktn.IResolvable) {
    this._resourceMappings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceMappingsInput() {
    return this._resourceMappings.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_assessment_schedule: cdktn.stringToTerraform(this._appAssessmentSchedule),
      app_template_body: cdktn.stringToTerraform(this._appTemplateBody),
      description: cdktn.stringToTerraform(this._description),
      event_subscriptions: cdktn.listMapper(resiliencehubAppEventSubscriptionsToTerraform, false)(this._eventSubscriptions.internalValue),
      name: cdktn.stringToTerraform(this._name),
      permission_model: resiliencehubAppPermissionModelToTerraform(this._permissionModel.internalValue),
      resiliency_policy_arn: cdktn.stringToTerraform(this._resiliencyPolicyArn),
      resource_mappings: cdktn.listMapper(resiliencehubAppResourceMappingsToTerraform, false)(this._resourceMappings.internalValue),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_assessment_schedule: {
        value: cdktn.stringToHclTerraform(this._appAssessmentSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_template_body: {
        value: cdktn.stringToHclTerraform(this._appTemplateBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_subscriptions: {
        value: cdktn.listMapperHcl(resiliencehubAppEventSubscriptionsToHclTerraform, false)(this._eventSubscriptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResiliencehubAppEventSubscriptionsList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission_model: {
        value: resiliencehubAppPermissionModelToHclTerraform(this._permissionModel.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResiliencehubAppPermissionModel",
      },
      resiliency_policy_arn: {
        value: cdktn.stringToHclTerraform(this._resiliencyPolicyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_mappings: {
        value: cdktn.listMapperHcl(resiliencehubAppResourceMappingsToHclTerraform, false)(this._resourceMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResiliencehubAppResourceMappingsList",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
