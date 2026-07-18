// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudtrailTrailConfig extends cdktn.TerraformMetaArguments {
  /**
  * The advanced event selectors that were used to select events for the data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#advanced_event_selectors CloudtrailTrail#advanced_event_selectors}
  */
  readonly advancedEventSelectors?: CloudtrailTrailAdvancedEventSelectors[] | cdktn.IResolvable;
  /**
  * Specifies the aggregation configuration to aggregate CloudTrail Events. A maximum of 1 aggregation configuration is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#aggregation_configurations CloudtrailTrail#aggregation_configurations}
  */
  readonly aggregationConfigurations?: CloudtrailTrailAggregationConfigurations[] | cdktn.IResolvable;
  /**
  * Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. Not required unless you specify CloudWatchLogsRoleArn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#cloudwatch_logs_log_group_arn CloudtrailTrail#cloudwatch_logs_log_group_arn}
  */
  readonly cloudwatchLogsLogGroupArn?: string;
  /**
  * Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#cloudwatch_logs_role_arn CloudtrailTrail#cloudwatch_logs_role_arn}
  */
  readonly cloudwatchLogsRoleArn?: string;
  /**
  * Specifies whether log file validation is enabled. The default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#enable_log_file_validation CloudtrailTrail#enable_log_file_validation}
  */
  readonly enableLogFileValidation?: boolean | cdktn.IResolvable;
  /**
  * Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event. You can configure up to five event selectors for a trail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#event_selectors CloudtrailTrail#event_selectors}
  */
  readonly eventSelectors?: CloudtrailTrailEventSelectors[] | cdktn.IResolvable;
  /**
  * Specifies whether the trail is publishing events from global services such as IAM to the log files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#include_global_service_events CloudtrailTrail#include_global_service_events}
  */
  readonly includeGlobalServiceEvents?: boolean | cdktn.IResolvable;
  /**
  * Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#insight_selectors CloudtrailTrail#insight_selectors}
  */
  readonly insightSelectors?: CloudtrailTrailInsightSelectors[] | cdktn.IResolvable;
  /**
  * Whether the CloudTrail is currently logging AWS API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#is_logging CloudtrailTrail#is_logging}
  */
  readonly isLogging: boolean | cdktn.IResolvable;
  /**
  * Specifies whether the trail applies only to the current region or to all regions. The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider using trails that log events in all regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#is_multi_region_trail CloudtrailTrail#is_multi_region_trail}
  */
  readonly isMultiRegionTrail?: boolean | cdktn.IResolvable;
  /**
  * Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account. The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the master account for an organization in AWS Organizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#is_organization_trail CloudtrailTrail#is_organization_trail}
  */
  readonly isOrganizationTrail?: boolean | cdktn.IResolvable;
  /**
  * Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#kms_key_id CloudtrailTrail#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#s3_bucket_name CloudtrailTrail#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see Finding Your CloudTrail Log Files. The maximum length is 200 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#s3_key_prefix CloudtrailTrail#s3_key_prefix}
  */
  readonly s3KeyPrefix?: string;
  /**
  * Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#sns_topic_name CloudtrailTrail#sns_topic_name}
  */
  readonly snsTopicName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#tags CloudtrailTrail#tags}
  */
  readonly tags?: CloudtrailTrailTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#trail_name CloudtrailTrail#trail_name}
  */
  readonly trailName?: string;
}
export interface CloudtrailTrailAdvancedEventSelectorsFieldSelectors {
  /**
  * An operator that includes events that match the last few characters of the event record field specified as the value of Field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#ends_with CloudtrailTrail#ends_with}
  */
  readonly endsWith?: string[];
  /**
  * An operator that includes events that match the exact value of the event record field specified as the value of Field. This is the only valid operator that you can use with the readOnly, eventCategory, and resources.type fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#equals CloudtrailTrail#equals}
  */
  readonly equalTo?: string[];
  /**
  * A field in an event record on which to filter events to be logged. Supported fields include readOnly, eventCategory, eventSource (for management events), eventName, resources.type, and resources.ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#field CloudtrailTrail#field}
  */
  readonly field?: string;
  /**
  * An operator that excludes events that match the last few characters of the event record field specified as the value of Field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#not_ends_with CloudtrailTrail#not_ends_with}
  */
  readonly notEndsWith?: string[];
  /**
  * An operator that excludes events that match the exact value of the event record field specified as the value of Field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#not_equals CloudtrailTrail#not_equals}
  */
  readonly notEquals?: string[];
  /**
  * An operator that excludes events that match the first few characters of the event record field specified as the value of Field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#not_starts_with CloudtrailTrail#not_starts_with}
  */
  readonly notStartsWith?: string[];
  /**
  * An operator that includes events that match the first few characters of the event record field specified as the value of Field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#starts_with CloudtrailTrail#starts_with}
  */
  readonly startsWith?: string[];
}

export function cloudtrailTrailAdvancedEventSelectorsFieldSelectorsToTerraform(struct?: CloudtrailTrailAdvancedEventSelectorsFieldSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ends_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endsWith),
    equals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.equalTo),
    field: cdktn.stringToTerraform(struct!.field),
    not_ends_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notEndsWith),
    not_equals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notEquals),
    not_starts_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notStartsWith),
    starts_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.startsWith),
  }
}


export function cloudtrailTrailAdvancedEventSelectorsFieldSelectorsToHclTerraform(struct?: CloudtrailTrailAdvancedEventSelectorsFieldSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ends_with: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.endsWith),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    equals: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.equalTo),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_ends_with: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notEndsWith),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    not_equals: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notEquals),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    not_starts_with: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notStartsWith),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    starts_with: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.startsWith),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudtrailTrailAdvancedEventSelectorsFieldSelectors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endsWith = this._endsWith;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._notEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.notEndsWith = this._notEndsWith;
    }
    if (this._notEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.notEquals = this._notEquals;
    }
    if (this._notStartsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.notStartsWith = this._notStartsWith;
    }
    if (this._startsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startsWith = this._startsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudtrailTrailAdvancedEventSelectorsFieldSelectors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endsWith = undefined;
      this._equals = undefined;
      this._field = undefined;
      this._notEndsWith = undefined;
      this._notEquals = undefined;
      this._notStartsWith = undefined;
      this._startsWith = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endsWith = value.endsWith;
      this._equals = value.equalTo;
      this._field = value.field;
      this._notEndsWith = value.notEndsWith;
      this._notEquals = value.notEquals;
      this._notStartsWith = value.notStartsWith;
      this._startsWith = value.startsWith;
    }
  }

  // ends_with - computed: true, optional: true, required: false
  private _endsWith?: string[]; 
  public get endsWith() {
    return cdktn.Fn.tolist(this.getListAttribute('ends_with'));
  }
  public set endsWith(value: string[]) {
    this._endsWith = value;
  }
  public resetEndsWith() {
    this._endsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endsWithInput() {
    return this._endsWith;
  }

  // equals - computed: true, optional: true, required: false
  private _equals?: string[]; 
  public get equalTo() {
    return cdktn.Fn.tolist(this.getListAttribute('equals'));
  }
  public set equalTo(value: string[]) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // not_ends_with - computed: true, optional: true, required: false
  private _notEndsWith?: string[]; 
  public get notEndsWith() {
    return cdktn.Fn.tolist(this.getListAttribute('not_ends_with'));
  }
  public set notEndsWith(value: string[]) {
    this._notEndsWith = value;
  }
  public resetNotEndsWith() {
    this._notEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notEndsWithInput() {
    return this._notEndsWith;
  }

  // not_equals - computed: true, optional: true, required: false
  private _notEquals?: string[]; 
  public get notEquals() {
    return cdktn.Fn.tolist(this.getListAttribute('not_equals'));
  }
  public set notEquals(value: string[]) {
    this._notEquals = value;
  }
  public resetNotEquals() {
    this._notEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notEqualsInput() {
    return this._notEquals;
  }

  // not_starts_with - computed: true, optional: true, required: false
  private _notStartsWith?: string[]; 
  public get notStartsWith() {
    return cdktn.Fn.tolist(this.getListAttribute('not_starts_with'));
  }
  public set notStartsWith(value: string[]) {
    this._notStartsWith = value;
  }
  public resetNotStartsWith() {
    this._notStartsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notStartsWithInput() {
    return this._notStartsWith;
  }

  // starts_with - computed: true, optional: true, required: false
  private _startsWith?: string[]; 
  public get startsWith() {
    return cdktn.Fn.tolist(this.getListAttribute('starts_with'));
  }
  public set startsWith(value: string[]) {
    this._startsWith = value;
  }
  public resetStartsWith() {
    this._startsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithInput() {
    return this._startsWith;
  }
}

export class CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList extends cdktn.ComplexList {
  public internalValue? : CloudtrailTrailAdvancedEventSelectorsFieldSelectors[] | cdktn.IResolvable

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
  public get(index: number): CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference {
    return new CloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudtrailTrailAdvancedEventSelectors {
  /**
  * Contains all selector statements in an advanced event selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#field_selectors CloudtrailTrail#field_selectors}
  */
  readonly fieldSelectors?: CloudtrailTrailAdvancedEventSelectorsFieldSelectors[] | cdktn.IResolvable;
  /**
  * An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#name CloudtrailTrail#name}
  */
  readonly name?: string;
}

export function cloudtrailTrailAdvancedEventSelectorsToTerraform(struct?: CloudtrailTrailAdvancedEventSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_selectors: cdktn.listMapper(cloudtrailTrailAdvancedEventSelectorsFieldSelectorsToTerraform, false)(struct!.fieldSelectors),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function cloudtrailTrailAdvancedEventSelectorsToHclTerraform(struct?: CloudtrailTrailAdvancedEventSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_selectors: {
      value: cdktn.listMapperHcl(cloudtrailTrailAdvancedEventSelectorsFieldSelectorsToHclTerraform, false)(struct!.fieldSelectors),
      isBlock: true,
      type: "set",
      storageClassType: "CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudtrailTrailAdvancedEventSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudtrailTrailAdvancedEventSelectors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelectors = this._fieldSelectors?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudtrailTrailAdvancedEventSelectors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldSelectors.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldSelectors.internalValue = value.fieldSelectors;
      this._name = value.name;
    }
  }

  // field_selectors - computed: true, optional: true, required: false
  private _fieldSelectors = new CloudtrailTrailAdvancedEventSelectorsFieldSelectorsList(this, "field_selectors", true);
  public get fieldSelectors() {
    return this._fieldSelectors;
  }
  public putFieldSelectors(value: CloudtrailTrailAdvancedEventSelectorsFieldSelectors[] | cdktn.IResolvable) {
    this._fieldSelectors.internalValue = value;
  }
  public resetFieldSelectors() {
    this._fieldSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorsInput() {
    return this._fieldSelectors.internalValue;
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
}

export class CloudtrailTrailAdvancedEventSelectorsList extends cdktn.ComplexList {
  public internalValue? : CloudtrailTrailAdvancedEventSelectors[] | cdktn.IResolvable

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
  public get(index: number): CloudtrailTrailAdvancedEventSelectorsOutputReference {
    return new CloudtrailTrailAdvancedEventSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudtrailTrailAggregationConfigurations {
  /**
  * The category of events to be aggregated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#event_category CloudtrailTrail#event_category}
  */
  readonly eventCategory?: string;
  /**
  * Contains all templates in an aggregation configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#templates CloudtrailTrail#templates}
  */
  readonly templates?: string[];
}

export function cloudtrailTrailAggregationConfigurationsToTerraform(struct?: CloudtrailTrailAggregationConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_category: cdktn.stringToTerraform(struct!.eventCategory),
    templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.templates),
  }
}


export function cloudtrailTrailAggregationConfigurationsToHclTerraform(struct?: CloudtrailTrailAggregationConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_category: {
      value: cdktn.stringToHclTerraform(struct!.eventCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    templates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.templates),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudtrailTrailAggregationConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudtrailTrailAggregationConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventCategory = this._eventCategory;
    }
    if (this._templates !== undefined) {
      hasAnyValues = true;
      internalValueResult.templates = this._templates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudtrailTrailAggregationConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventCategory = undefined;
      this._templates = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventCategory = value.eventCategory;
      this._templates = value.templates;
    }
  }

  // event_category - computed: true, optional: true, required: false
  private _eventCategory?: string; 
  public get eventCategory() {
    return this.getStringAttribute('event_category');
  }
  public set eventCategory(value: string) {
    this._eventCategory = value;
  }
  public resetEventCategory() {
    this._eventCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCategoryInput() {
    return this._eventCategory;
  }

  // templates - computed: true, optional: true, required: false
  private _templates?: string[]; 
  public get templates() {
    return cdktn.Fn.tolist(this.getListAttribute('templates'));
  }
  public set templates(value: string[]) {
    this._templates = value;
  }
  public resetTemplates() {
    this._templates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates;
  }
}

export class CloudtrailTrailAggregationConfigurationsList extends cdktn.ComplexList {
  public internalValue? : CloudtrailTrailAggregationConfigurations[] | cdktn.IResolvable

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
  public get(index: number): CloudtrailTrailAggregationConfigurationsOutputReference {
    return new CloudtrailTrailAggregationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudtrailTrailEventSelectorsDataResources {
  /**
  * The resource type in which you want to log data events. You can specify AWS::S3::Object or AWS::Lambda::Function resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#type CloudtrailTrail#type}
  */
  readonly type?: string;
  /**
  * An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#values CloudtrailTrail#values}
  */
  readonly values?: string[];
}

export function cloudtrailTrailEventSelectorsDataResourcesToTerraform(struct?: CloudtrailTrailEventSelectorsDataResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cloudtrailTrailEventSelectorsDataResourcesToHclTerraform(struct?: CloudtrailTrailEventSelectorsDataResources | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudtrailTrailEventSelectorsDataResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudtrailTrailEventSelectorsDataResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudtrailTrailEventSelectorsDataResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._values = value.values;
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

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
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

export class CloudtrailTrailEventSelectorsDataResourcesList extends cdktn.ComplexList {
  public internalValue? : CloudtrailTrailEventSelectorsDataResources[] | cdktn.IResolvable

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
  public get(index: number): CloudtrailTrailEventSelectorsDataResourcesOutputReference {
    return new CloudtrailTrailEventSelectorsDataResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudtrailTrailEventSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#data_resources CloudtrailTrail#data_resources}
  */
  readonly dataResources?: CloudtrailTrailEventSelectorsDataResources[] | cdktn.IResolvable;
  /**
  * An optional list of service event sources from which you do not want management events to be logged on your trail. In this release, the list can be empty (disables the filter), or it can filter out AWS Key Management Service events by containing "kms.amazonaws.com". By default, ExcludeManagementEventSources is empty, and AWS KMS events are included in events that are logged to your trail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#exclude_management_event_sources CloudtrailTrail#exclude_management_event_sources}
  */
  readonly excludeManagementEventSources?: string[];
  /**
  * Specify if you want your event selector to include management events for your trail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#include_management_events CloudtrailTrail#include_management_events}
  */
  readonly includeManagementEvents?: boolean | cdktn.IResolvable;
  /**
  * Specify if you want your trail to log read-only events, write-only events, or all. For example, the EC2 GetConsoleOutput is a read-only API operation and RunInstances is a write-only API operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#read_write_type CloudtrailTrail#read_write_type}
  */
  readonly readWriteType?: string;
}

export function cloudtrailTrailEventSelectorsToTerraform(struct?: CloudtrailTrailEventSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_resources: cdktn.listMapper(cloudtrailTrailEventSelectorsDataResourcesToTerraform, false)(struct!.dataResources),
    exclude_management_event_sources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeManagementEventSources),
    include_management_events: cdktn.booleanToTerraform(struct!.includeManagementEvents),
    read_write_type: cdktn.stringToTerraform(struct!.readWriteType),
  }
}


export function cloudtrailTrailEventSelectorsToHclTerraform(struct?: CloudtrailTrailEventSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_resources: {
      value: cdktn.listMapperHcl(cloudtrailTrailEventSelectorsDataResourcesToHclTerraform, false)(struct!.dataResources),
      isBlock: true,
      type: "set",
      storageClassType: "CloudtrailTrailEventSelectorsDataResourcesList",
    },
    exclude_management_event_sources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeManagementEventSources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include_management_events: {
      value: cdktn.booleanToHclTerraform(struct!.includeManagementEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_write_type: {
      value: cdktn.stringToHclTerraform(struct!.readWriteType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudtrailTrailEventSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudtrailTrailEventSelectors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataResources = this._dataResources?.internalValue;
    }
    if (this._excludeManagementEventSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeManagementEventSources = this._excludeManagementEventSources;
    }
    if (this._includeManagementEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeManagementEvents = this._includeManagementEvents;
    }
    if (this._readWriteType !== undefined) {
      hasAnyValues = true;
      internalValueResult.readWriteType = this._readWriteType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudtrailTrailEventSelectors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataResources.internalValue = undefined;
      this._excludeManagementEventSources = undefined;
      this._includeManagementEvents = undefined;
      this._readWriteType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataResources.internalValue = value.dataResources;
      this._excludeManagementEventSources = value.excludeManagementEventSources;
      this._includeManagementEvents = value.includeManagementEvents;
      this._readWriteType = value.readWriteType;
    }
  }

  // data_resources - computed: true, optional: true, required: false
  private _dataResources = new CloudtrailTrailEventSelectorsDataResourcesList(this, "data_resources", true);
  public get dataResources() {
    return this._dataResources;
  }
  public putDataResources(value: CloudtrailTrailEventSelectorsDataResources[] | cdktn.IResolvable) {
    this._dataResources.internalValue = value;
  }
  public resetDataResources() {
    this._dataResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataResourcesInput() {
    return this._dataResources.internalValue;
  }

  // exclude_management_event_sources - computed: true, optional: true, required: false
  private _excludeManagementEventSources?: string[]; 
  public get excludeManagementEventSources() {
    return cdktn.Fn.tolist(this.getListAttribute('exclude_management_event_sources'));
  }
  public set excludeManagementEventSources(value: string[]) {
    this._excludeManagementEventSources = value;
  }
  public resetExcludeManagementEventSources() {
    this._excludeManagementEventSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeManagementEventSourcesInput() {
    return this._excludeManagementEventSources;
  }

  // include_management_events - computed: true, optional: true, required: false
  private _includeManagementEvents?: boolean | cdktn.IResolvable; 
  public get includeManagementEvents() {
    return this.getBooleanAttribute('include_management_events');
  }
  public set includeManagementEvents(value: boolean | cdktn.IResolvable) {
    this._includeManagementEvents = value;
  }
  public resetIncludeManagementEvents() {
    this._includeManagementEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeManagementEventsInput() {
    return this._includeManagementEvents;
  }

  // read_write_type - computed: true, optional: true, required: false
  private _readWriteType?: string; 
  public get readWriteType() {
    return this.getStringAttribute('read_write_type');
  }
  public set readWriteType(value: string) {
    this._readWriteType = value;
  }
  public resetReadWriteType() {
    this._readWriteType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readWriteTypeInput() {
    return this._readWriteType;
  }
}

export class CloudtrailTrailEventSelectorsList extends cdktn.ComplexList {
  public internalValue? : CloudtrailTrailEventSelectors[] | cdktn.IResolvable

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
  public get(index: number): CloudtrailTrailEventSelectorsOutputReference {
    return new CloudtrailTrailEventSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudtrailTrailInsightSelectors {
  /**
  * The categories of events for which to log insights. By default, insights are logged for management events only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#event_categories CloudtrailTrail#event_categories}
  */
  readonly eventCategories?: string[];
  /**
  * The type of insight to log on a trail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#insight_type CloudtrailTrail#insight_type}
  */
  readonly insightType?: string;
}

export function cloudtrailTrailInsightSelectorsToTerraform(struct?: CloudtrailTrailInsightSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_categories: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.eventCategories),
    insight_type: cdktn.stringToTerraform(struct!.insightType),
  }
}


export function cloudtrailTrailInsightSelectorsToHclTerraform(struct?: CloudtrailTrailInsightSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_categories: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.eventCategories),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    insight_type: {
      value: cdktn.stringToHclTerraform(struct!.insightType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudtrailTrailInsightSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudtrailTrailInsightSelectors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventCategories = this._eventCategories;
    }
    if (this._insightType !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightType = this._insightType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudtrailTrailInsightSelectors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventCategories = undefined;
      this._insightType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventCategories = value.eventCategories;
      this._insightType = value.insightType;
    }
  }

  // event_categories - computed: true, optional: true, required: false
  private _eventCategories?: string[]; 
  public get eventCategories() {
    return cdktn.Fn.tolist(this.getListAttribute('event_categories'));
  }
  public set eventCategories(value: string[]) {
    this._eventCategories = value;
  }
  public resetEventCategories() {
    this._eventCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCategoriesInput() {
    return this._eventCategories;
  }

  // insight_type - computed: true, optional: true, required: false
  private _insightType?: string; 
  public get insightType() {
    return this.getStringAttribute('insight_type');
  }
  public set insightType(value: string) {
    this._insightType = value;
  }
  public resetInsightType() {
    this._insightType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightTypeInput() {
    return this._insightType;
  }
}

export class CloudtrailTrailInsightSelectorsList extends cdktn.ComplexList {
  public internalValue? : CloudtrailTrailInsightSelectors[] | cdktn.IResolvable

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
  public get(index: number): CloudtrailTrailInsightSelectorsOutputReference {
    return new CloudtrailTrailInsightSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudtrailTrailTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#key CloudtrailTrail#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#value CloudtrailTrail#value}
  */
  readonly value?: string;
}

export function cloudtrailTrailTagsToTerraform(struct?: CloudtrailTrailTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cloudtrailTrailTagsToHclTerraform(struct?: CloudtrailTrailTags | cdktn.IResolvable): any {
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

export class CloudtrailTrailTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudtrailTrailTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CloudtrailTrailTags | cdktn.IResolvable | undefined) {
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

export class CloudtrailTrailTagsList extends cdktn.ComplexList {
  public internalValue? : CloudtrailTrailTags[] | cdktn.IResolvable

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
  public get(index: number): CloudtrailTrailTagsOutputReference {
    return new CloudtrailTrailTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail awscc_cloudtrail_trail}
*/
export class CloudtrailTrail extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudtrail_trail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudtrailTrail resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudtrailTrail to import
  * @param importFromId The id of the existing CloudtrailTrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudtrailTrail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudtrail_trail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cloudtrail_trail awscc_cloudtrail_trail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudtrailTrailConfig
  */
  public constructor(scope: Construct, id: string, config: CloudtrailTrailConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudtrail_trail',
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
    this._advancedEventSelectors.internalValue = config.advancedEventSelectors;
    this._aggregationConfigurations.internalValue = config.aggregationConfigurations;
    this._cloudwatchLogsLogGroupArn = config.cloudwatchLogsLogGroupArn;
    this._cloudwatchLogsRoleArn = config.cloudwatchLogsRoleArn;
    this._enableLogFileValidation = config.enableLogFileValidation;
    this._eventSelectors.internalValue = config.eventSelectors;
    this._includeGlobalServiceEvents = config.includeGlobalServiceEvents;
    this._insightSelectors.internalValue = config.insightSelectors;
    this._isLogging = config.isLogging;
    this._isMultiRegionTrail = config.isMultiRegionTrail;
    this._isOrganizationTrail = config.isOrganizationTrail;
    this._kmsKeyId = config.kmsKeyId;
    this._s3BucketName = config.s3BucketName;
    this._s3KeyPrefix = config.s3KeyPrefix;
    this._snsTopicName = config.snsTopicName;
    this._tags.internalValue = config.tags;
    this._trailName = config.trailName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_event_selectors - computed: true, optional: true, required: false
  private _advancedEventSelectors = new CloudtrailTrailAdvancedEventSelectorsList(this, "advanced_event_selectors", true);
  public get advancedEventSelectors() {
    return this._advancedEventSelectors;
  }
  public putAdvancedEventSelectors(value: CloudtrailTrailAdvancedEventSelectors[] | cdktn.IResolvable) {
    this._advancedEventSelectors.internalValue = value;
  }
  public resetAdvancedEventSelectors() {
    this._advancedEventSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedEventSelectorsInput() {
    return this._advancedEventSelectors.internalValue;
  }

  // aggregation_configurations - computed: true, optional: true, required: false
  private _aggregationConfigurations = new CloudtrailTrailAggregationConfigurationsList(this, "aggregation_configurations", true);
  public get aggregationConfigurations() {
    return this._aggregationConfigurations;
  }
  public putAggregationConfigurations(value: CloudtrailTrailAggregationConfigurations[] | cdktn.IResolvable) {
    this._aggregationConfigurations.internalValue = value;
  }
  public resetAggregationConfigurations() {
    this._aggregationConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationConfigurationsInput() {
    return this._aggregationConfigurations.internalValue;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cloudwatch_logs_log_group_arn - computed: true, optional: true, required: false
  private _cloudwatchLogsLogGroupArn?: string; 
  public get cloudwatchLogsLogGroupArn() {
    return this.getStringAttribute('cloudwatch_logs_log_group_arn');
  }
  public set cloudwatchLogsLogGroupArn(value: string) {
    this._cloudwatchLogsLogGroupArn = value;
  }
  public resetCloudwatchLogsLogGroupArn() {
    this._cloudwatchLogsLogGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsLogGroupArnInput() {
    return this._cloudwatchLogsLogGroupArn;
  }

  // cloudwatch_logs_role_arn - computed: true, optional: true, required: false
  private _cloudwatchLogsRoleArn?: string; 
  public get cloudwatchLogsRoleArn() {
    return this.getStringAttribute('cloudwatch_logs_role_arn');
  }
  public set cloudwatchLogsRoleArn(value: string) {
    this._cloudwatchLogsRoleArn = value;
  }
  public resetCloudwatchLogsRoleArn() {
    this._cloudwatchLogsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsRoleArnInput() {
    return this._cloudwatchLogsRoleArn;
  }

  // enable_log_file_validation - computed: true, optional: true, required: false
  private _enableLogFileValidation?: boolean | cdktn.IResolvable; 
  public get enableLogFileValidation() {
    return this.getBooleanAttribute('enable_log_file_validation');
  }
  public set enableLogFileValidation(value: boolean | cdktn.IResolvable) {
    this._enableLogFileValidation = value;
  }
  public resetEnableLogFileValidation() {
    this._enableLogFileValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLogFileValidationInput() {
    return this._enableLogFileValidation;
  }

  // event_selectors - computed: true, optional: true, required: false
  private _eventSelectors = new CloudtrailTrailEventSelectorsList(this, "event_selectors", true);
  public get eventSelectors() {
    return this._eventSelectors;
  }
  public putEventSelectors(value: CloudtrailTrailEventSelectors[] | cdktn.IResolvable) {
    this._eventSelectors.internalValue = value;
  }
  public resetEventSelectors() {
    this._eventSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSelectorsInput() {
    return this._eventSelectors.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_global_service_events - computed: true, optional: true, required: false
  private _includeGlobalServiceEvents?: boolean | cdktn.IResolvable; 
  public get includeGlobalServiceEvents() {
    return this.getBooleanAttribute('include_global_service_events');
  }
  public set includeGlobalServiceEvents(value: boolean | cdktn.IResolvable) {
    this._includeGlobalServiceEvents = value;
  }
  public resetIncludeGlobalServiceEvents() {
    this._includeGlobalServiceEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeGlobalServiceEventsInput() {
    return this._includeGlobalServiceEvents;
  }

  // insight_selectors - computed: true, optional: true, required: false
  private _insightSelectors = new CloudtrailTrailInsightSelectorsList(this, "insight_selectors", true);
  public get insightSelectors() {
    return this._insightSelectors;
  }
  public putInsightSelectors(value: CloudtrailTrailInsightSelectors[] | cdktn.IResolvable) {
    this._insightSelectors.internalValue = value;
  }
  public resetInsightSelectors() {
    this._insightSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightSelectorsInput() {
    return this._insightSelectors.internalValue;
  }

  // is_logging - computed: false, optional: false, required: true
  private _isLogging?: boolean | cdktn.IResolvable; 
  public get isLogging() {
    return this.getBooleanAttribute('is_logging');
  }
  public set isLogging(value: boolean | cdktn.IResolvable) {
    this._isLogging = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isLoggingInput() {
    return this._isLogging;
  }

  // is_multi_region_trail - computed: true, optional: true, required: false
  private _isMultiRegionTrail?: boolean | cdktn.IResolvable; 
  public get isMultiRegionTrail() {
    return this.getBooleanAttribute('is_multi_region_trail');
  }
  public set isMultiRegionTrail(value: boolean | cdktn.IResolvable) {
    this._isMultiRegionTrail = value;
  }
  public resetIsMultiRegionTrail() {
    this._isMultiRegionTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMultiRegionTrailInput() {
    return this._isMultiRegionTrail;
  }

  // is_organization_trail - computed: true, optional: true, required: false
  private _isOrganizationTrail?: boolean | cdktn.IResolvable; 
  public get isOrganizationTrail() {
    return this.getBooleanAttribute('is_organization_trail');
  }
  public set isOrganizationTrail(value: boolean | cdktn.IResolvable) {
    this._isOrganizationTrail = value;
  }
  public resetIsOrganizationTrail() {
    this._isOrganizationTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOrganizationTrailInput() {
    return this._isOrganizationTrail;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_key_prefix - computed: true, optional: true, required: false
  private _s3KeyPrefix?: string; 
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
  public set s3KeyPrefix(value: string) {
    this._s3KeyPrefix = value;
  }
  public resetS3KeyPrefix() {
    this._s3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyPrefixInput() {
    return this._s3KeyPrefix;
  }

  // sns_topic_arn - computed: true, optional: false, required: false
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }

  // sns_topic_name - computed: true, optional: true, required: false
  private _snsTopicName?: string; 
  public get snsTopicName() {
    return this.getStringAttribute('sns_topic_name');
  }
  public set snsTopicName(value: string) {
    this._snsTopicName = value;
  }
  public resetSnsTopicName() {
    this._snsTopicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicNameInput() {
    return this._snsTopicName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new CloudtrailTrailTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CloudtrailTrailTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // trail_name - computed: true, optional: true, required: false
  private _trailName?: string; 
  public get trailName() {
    return this.getStringAttribute('trail_name');
  }
  public set trailName(value: string) {
    this._trailName = value;
  }
  public resetTrailName() {
    this._trailName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trailNameInput() {
    return this._trailName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advanced_event_selectors: cdktn.listMapper(cloudtrailTrailAdvancedEventSelectorsToTerraform, false)(this._advancedEventSelectors.internalValue),
      aggregation_configurations: cdktn.listMapper(cloudtrailTrailAggregationConfigurationsToTerraform, false)(this._aggregationConfigurations.internalValue),
      cloudwatch_logs_log_group_arn: cdktn.stringToTerraform(this._cloudwatchLogsLogGroupArn),
      cloudwatch_logs_role_arn: cdktn.stringToTerraform(this._cloudwatchLogsRoleArn),
      enable_log_file_validation: cdktn.booleanToTerraform(this._enableLogFileValidation),
      event_selectors: cdktn.listMapper(cloudtrailTrailEventSelectorsToTerraform, false)(this._eventSelectors.internalValue),
      include_global_service_events: cdktn.booleanToTerraform(this._includeGlobalServiceEvents),
      insight_selectors: cdktn.listMapper(cloudtrailTrailInsightSelectorsToTerraform, false)(this._insightSelectors.internalValue),
      is_logging: cdktn.booleanToTerraform(this._isLogging),
      is_multi_region_trail: cdktn.booleanToTerraform(this._isMultiRegionTrail),
      is_organization_trail: cdktn.booleanToTerraform(this._isOrganizationTrail),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      s3_bucket_name: cdktn.stringToTerraform(this._s3BucketName),
      s3_key_prefix: cdktn.stringToTerraform(this._s3KeyPrefix),
      sns_topic_name: cdktn.stringToTerraform(this._snsTopicName),
      tags: cdktn.listMapper(cloudtrailTrailTagsToTerraform, false)(this._tags.internalValue),
      trail_name: cdktn.stringToTerraform(this._trailName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_event_selectors: {
        value: cdktn.listMapperHcl(cloudtrailTrailAdvancedEventSelectorsToHclTerraform, false)(this._advancedEventSelectors.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudtrailTrailAdvancedEventSelectorsList",
      },
      aggregation_configurations: {
        value: cdktn.listMapperHcl(cloudtrailTrailAggregationConfigurationsToHclTerraform, false)(this._aggregationConfigurations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudtrailTrailAggregationConfigurationsList",
      },
      cloudwatch_logs_log_group_arn: {
        value: cdktn.stringToHclTerraform(this._cloudwatchLogsLogGroupArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudwatch_logs_role_arn: {
        value: cdktn.stringToHclTerraform(this._cloudwatchLogsRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_log_file_validation: {
        value: cdktn.booleanToHclTerraform(this._enableLogFileValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_selectors: {
        value: cdktn.listMapperHcl(cloudtrailTrailEventSelectorsToHclTerraform, false)(this._eventSelectors.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudtrailTrailEventSelectorsList",
      },
      include_global_service_events: {
        value: cdktn.booleanToHclTerraform(this._includeGlobalServiceEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      insight_selectors: {
        value: cdktn.listMapperHcl(cloudtrailTrailInsightSelectorsToHclTerraform, false)(this._insightSelectors.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudtrailTrailInsightSelectorsList",
      },
      is_logging: {
        value: cdktn.booleanToHclTerraform(this._isLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_multi_region_trail: {
        value: cdktn.booleanToHclTerraform(this._isMultiRegionTrail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_organization_trail: {
        value: cdktn.booleanToHclTerraform(this._isOrganizationTrail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kms_key_id: {
        value: cdktn.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_bucket_name: {
        value: cdktn.stringToHclTerraform(this._s3BucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_key_prefix: {
        value: cdktn.stringToHclTerraform(this._s3KeyPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sns_topic_name: {
        value: cdktn.stringToHclTerraform(this._snsTopicName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(cloudtrailTrailTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudtrailTrailTagsList",
      },
      trail_name: {
        value: cdktn.stringToHclTerraform(this._trailName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
