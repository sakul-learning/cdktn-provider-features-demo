// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SsmMaintenanceWindowTaskConfig extends cdktn.TerraformMetaArguments {
  /**
  * The specification for whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#cutoff_behavior SsmMaintenanceWindowTask#cutoff_behavior}
  */
  readonly cutoffBehavior?: string;
  /**
  * A description of the task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#description SsmMaintenanceWindowTask#description}
  */
  readonly description?: string;
  /**
  * Information about an Amazon S3 bucket to write Run Command task-level logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#logging_info SsmMaintenanceWindowTask#logging_info}
  */
  readonly loggingInfo?: SsmMaintenanceWindowTaskLoggingInfo;
  /**
  * The maximum number of targets this task can be run for, in parallel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#max_concurrency SsmMaintenanceWindowTask#max_concurrency}
  */
  readonly maxConcurrency?: string;
  /**
  * The maximum number of errors allowed before this task stops being scheduled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#max_errors SsmMaintenanceWindowTask#max_errors}
  */
  readonly maxErrors?: string;
  /**
  * The task name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}
  */
  readonly name?: string;
  /**
  * The priority of the task in the maintenance window. The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#priority SsmMaintenanceWindowTask#priority}
  */
  readonly priority: number;
  /**
  * The Amazon Resource Name (ARN) of the IAM service role for AWS Systems Manager to assume when running a maintenance window task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#service_role_arn SsmMaintenanceWindowTask#service_role_arn}
  */
  readonly serviceRoleArn?: string;
  /**
  * The targets (either instances or window target ids).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#targets SsmMaintenanceWindowTask#targets}
  */
  readonly targets?: SsmMaintenanceWindowTaskTargets[] | cdktn.IResolvable;
  /**
  * The resource that the task uses during execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#task_arn SsmMaintenanceWindowTask#task_arn}
  */
  readonly taskArn: string;
  /**
  * The parameters to pass to the task when it runs. Populate only the fields that match the task type. All other fields should be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#task_invocation_parameters SsmMaintenanceWindowTask#task_invocation_parameters}
  */
  readonly taskInvocationParameters?: SsmMaintenanceWindowTaskTaskInvocationParameters;
  /**
  * The parameters to pass to the task when it runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#task_parameters SsmMaintenanceWindowTask#task_parameters}
  */
  readonly taskParameters?: string;
  /**
  * The type of task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#task_type SsmMaintenanceWindowTask#task_type}
  */
  readonly taskType: string;
  /**
  * The ID of the maintenance window where the task is registered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#window_id SsmMaintenanceWindowTask#window_id}
  */
  readonly windowId: string;
}
export interface SsmMaintenanceWindowTaskLoggingInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#region SsmMaintenanceWindowTask#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#s3_bucket SsmMaintenanceWindowTask#s3_bucket}
  */
  readonly s3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#s3_prefix SsmMaintenanceWindowTask#s3_prefix}
  */
  readonly s3Prefix?: string;
}

export function ssmMaintenanceWindowTaskLoggingInfoToTerraform(struct?: SsmMaintenanceWindowTaskLoggingInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
    s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
    s3_prefix: cdktn.stringToTerraform(struct!.s3Prefix),
  }
}


export function ssmMaintenanceWindowTaskLoggingInfoToHclTerraform(struct?: SsmMaintenanceWindowTaskLoggingInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket: {
      value: cdktn.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_prefix: {
      value: cdktn.stringToHclTerraform(struct!.s3Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmMaintenanceWindowTaskLoggingInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmMaintenanceWindowTaskLoggingInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Prefix = this._s3Prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmMaintenanceWindowTaskLoggingInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._s3Bucket = undefined;
      this._s3Prefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._s3Bucket = value.s3Bucket;
      this._s3Prefix = value.s3Prefix;
    }
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // s3_bucket - computed: true, optional: true, required: false
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_prefix - computed: true, optional: true, required: false
  private _s3Prefix?: string; 
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }
  public set s3Prefix(value: string) {
    this._s3Prefix = value;
  }
  public resetS3Prefix() {
    this._s3Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PrefixInput() {
    return this._s3Prefix;
  }
}
export interface SsmMaintenanceWindowTaskTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#key SsmMaintenanceWindowTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}
  */
  readonly values?: string[];
}

export function ssmMaintenanceWindowTaskTargetsToTerraform(struct?: SsmMaintenanceWindowTaskTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function ssmMaintenanceWindowTaskTargetsToHclTerraform(struct?: SsmMaintenanceWindowTaskTargets | cdktn.IResolvable): any {
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

export class SsmMaintenanceWindowTaskTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmMaintenanceWindowTaskTargets | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SsmMaintenanceWindowTaskTargets | cdktn.IResolvable | undefined) {
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

export class SsmMaintenanceWindowTaskTargetsList extends cdktn.ComplexList {
  public internalValue? : SsmMaintenanceWindowTaskTargets[] | cdktn.IResolvable

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
  public get(index: number): SsmMaintenanceWindowTaskTargetsOutputReference {
    return new SsmMaintenanceWindowTaskTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}
  */
  readonly documentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#parameters SsmMaintenanceWindowTask#parameters}
  */
  readonly parameters?: string;
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    document_version: cdktn.stringToTerraform(struct!.documentVersion),
    parameters: cdktn.stringToTerraform(struct!.parameters),
  }
}


export function ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersToHclTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    document_version: {
      value: cdktn.stringToHclTerraform(struct!.documentVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentVersion = this._documentVersion;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._documentVersion = undefined;
      this._parameters = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._documentVersion = value.documentVersion;
      this._parameters = value.parameters;
    }
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

  // parameters - computed: true, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#client_context SsmMaintenanceWindowTask#client_context}
  */
  readonly clientContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#payload SsmMaintenanceWindowTask#payload}
  */
  readonly payload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#qualifier SsmMaintenanceWindowTask#qualifier}
  */
  readonly qualifier?: string;
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_context: cdktn.stringToTerraform(struct!.clientContext),
    payload: cdktn.stringToTerraform(struct!.payload),
    qualifier: cdktn.stringToTerraform(struct!.qualifier),
  }
}


export function ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersToHclTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_context: {
      value: cdktn.stringToHclTerraform(struct!.clientContext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktn.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualifier: {
      value: cdktn.stringToHclTerraform(struct!.qualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientContext = this._clientContext;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._qualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientContext = undefined;
      this._payload = undefined;
      this._qualifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientContext = value.clientContext;
      this._payload = value.payload;
      this._qualifier = value.qualifier;
    }
  }

  // client_context - computed: true, optional: true, required: false
  private _clientContext?: string; 
  public get clientContext() {
    return this.getStringAttribute('client_context');
  }
  public set clientContext(value: string) {
    this._clientContext = value;
  }
  public resetClientContext() {
    this._clientContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientContextInput() {
    return this._clientContext;
  }

  // payload - computed: true, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // qualifier - computed: true, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig {
  /**
  * The name of the CloudWatch log group where you want to send command output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#cloudwatch_log_group_name SsmMaintenanceWindowTask#cloudwatch_log_group_name}
  */
  readonly cloudwatchLogGroupName?: string;
  /**
  * Enables Systems Manager to send command output to CloudWatch Logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#cloudwatch_output_enabled SsmMaintenanceWindowTask#cloudwatch_output_enabled}
  */
  readonly cloudwatchOutputEnabled?: boolean | cdktn.IResolvable;
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_log_group_name: cdktn.stringToTerraform(struct!.cloudwatchLogGroupName),
    cloudwatch_output_enabled: cdktn.booleanToTerraform(struct!.cloudwatchOutputEnabled),
  }
}


export function ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigToHclTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.cloudwatchLogGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_output_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.cloudwatchOutputEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogGroupName = this._cloudwatchLogGroupName;
    }
    if (this._cloudwatchOutputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchOutputEnabled = this._cloudwatchOutputEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchLogGroupName = undefined;
      this._cloudwatchOutputEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchLogGroupName = value.cloudwatchLogGroupName;
      this._cloudwatchOutputEnabled = value.cloudwatchOutputEnabled;
    }
  }

  // cloudwatch_log_group_name - computed: true, optional: true, required: false
  private _cloudwatchLogGroupName?: string; 
  public get cloudwatchLogGroupName() {
    return this.getStringAttribute('cloudwatch_log_group_name');
  }
  public set cloudwatchLogGroupName(value: string) {
    this._cloudwatchLogGroupName = value;
  }
  public resetCloudwatchLogGroupName() {
    this._cloudwatchLogGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogGroupNameInput() {
    return this._cloudwatchLogGroupName;
  }

  // cloudwatch_output_enabled - computed: true, optional: true, required: false
  private _cloudwatchOutputEnabled?: boolean | cdktn.IResolvable; 
  public get cloudwatchOutputEnabled() {
    return this.getBooleanAttribute('cloudwatch_output_enabled');
  }
  public set cloudwatchOutputEnabled(value: boolean | cdktn.IResolvable) {
    this._cloudwatchOutputEnabled = value;
  }
  public resetCloudwatchOutputEnabled() {
    this._cloudwatchOutputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchOutputEnabledInput() {
    return this._cloudwatchOutputEnabled;
  }
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#notification_arn SsmMaintenanceWindowTask#notification_arn}
  */
  readonly notificationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#notification_events SsmMaintenanceWindowTask#notification_events}
  */
  readonly notificationEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#notification_type SsmMaintenanceWindowTask#notification_type}
  */
  readonly notificationType?: string;
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    notification_arn: cdktn.stringToTerraform(struct!.notificationArn),
    notification_events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notificationEvents),
    notification_type: cdktn.stringToTerraform(struct!.notificationType),
  }
}


export function ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigToHclTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    notification_arn: {
      value: cdktn.stringToHclTerraform(struct!.notificationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notificationEvents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    notification_type: {
      value: cdktn.stringToHclTerraform(struct!.notificationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationArn = this._notificationArn;
    }
    if (this._notificationEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationEvents = this._notificationEvents;
    }
    if (this._notificationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationType = this._notificationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notificationArn = undefined;
      this._notificationEvents = undefined;
      this._notificationType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notificationArn = value.notificationArn;
      this._notificationEvents = value.notificationEvents;
      this._notificationType = value.notificationType;
    }
  }

  // notification_arn - computed: true, optional: true, required: false
  private _notificationArn?: string; 
  public get notificationArn() {
    return this.getStringAttribute('notification_arn');
  }
  public set notificationArn(value: string) {
    this._notificationArn = value;
  }
  public resetNotificationArn() {
    this._notificationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationArnInput() {
    return this._notificationArn;
  }

  // notification_events - computed: true, optional: true, required: false
  private _notificationEvents?: string[]; 
  public get notificationEvents() {
    return this.getListAttribute('notification_events');
  }
  public set notificationEvents(value: string[]) {
    this._notificationEvents = value;
  }
  public resetNotificationEvents() {
    this._notificationEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEventsInput() {
    return this._notificationEvents;
  }

  // notification_type - computed: true, optional: true, required: false
  private _notificationType?: string; 
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  public resetNotificationType() {
    this._notificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType;
  }
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#cloudwatch_output_config SsmMaintenanceWindowTask#cloudwatch_output_config}
  */
  readonly cloudwatchOutputConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#comment SsmMaintenanceWindowTask#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#document_hash SsmMaintenanceWindowTask#document_hash}
  */
  readonly documentHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#document_hash_type SsmMaintenanceWindowTask#document_hash_type}
  */
  readonly documentHashType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}
  */
  readonly documentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#notification_config SsmMaintenanceWindowTask#notification_config}
  */
  readonly notificationConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#output_s3_bucket_name SsmMaintenanceWindowTask#output_s3_bucket_name}
  */
  readonly outputS3BucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#output_s3_key_prefix SsmMaintenanceWindowTask#output_s3_key_prefix}
  */
  readonly outputS3KeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#parameters SsmMaintenanceWindowTask#parameters}
  */
  readonly parameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#service_role_arn SsmMaintenanceWindowTask#service_role_arn}
  */
  readonly serviceRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#timeout_seconds SsmMaintenanceWindowTask#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_output_config: ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigToTerraform(struct!.cloudwatchOutputConfig),
    comment: cdktn.stringToTerraform(struct!.comment),
    document_hash: cdktn.stringToTerraform(struct!.documentHash),
    document_hash_type: cdktn.stringToTerraform(struct!.documentHashType),
    document_version: cdktn.stringToTerraform(struct!.documentVersion),
    notification_config: ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigToTerraform(struct!.notificationConfig),
    output_s3_bucket_name: cdktn.stringToTerraform(struct!.outputS3BucketName),
    output_s3_key_prefix: cdktn.stringToTerraform(struct!.outputS3KeyPrefix),
    parameters: cdktn.stringToTerraform(struct!.parameters),
    service_role_arn: cdktn.stringToTerraform(struct!.serviceRoleArn),
    timeout_seconds: cdktn.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersToHclTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_output_config: {
      value: ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigToHclTerraform(struct!.cloudwatchOutputConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig",
    },
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_hash: {
      value: cdktn.stringToHclTerraform(struct!.documentHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_hash_type: {
      value: cdktn.stringToHclTerraform(struct!.documentHashType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_version: {
      value: cdktn.stringToHclTerraform(struct!.documentVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_config: {
      value: ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigToHclTerraform(struct!.notificationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig",
    },
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
    parameters: {
      value: cdktn.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.serviceRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchOutputConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchOutputConfig = this._cloudwatchOutputConfig?.internalValue;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._documentHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentHash = this._documentHash;
    }
    if (this._documentHashType !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentHashType = this._documentHashType;
    }
    if (this._documentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentVersion = this._documentVersion;
    }
    if (this._notificationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationConfig = this._notificationConfig?.internalValue;
    }
    if (this._outputS3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputS3BucketName = this._outputS3BucketName;
    }
    if (this._outputS3KeyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputS3KeyPrefix = this._outputS3KeyPrefix;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._serviceRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRoleArn = this._serviceRoleArn;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchOutputConfig.internalValue = undefined;
      this._comment = undefined;
      this._documentHash = undefined;
      this._documentHashType = undefined;
      this._documentVersion = undefined;
      this._notificationConfig.internalValue = undefined;
      this._outputS3BucketName = undefined;
      this._outputS3KeyPrefix = undefined;
      this._parameters = undefined;
      this._serviceRoleArn = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchOutputConfig.internalValue = value.cloudwatchOutputConfig;
      this._comment = value.comment;
      this._documentHash = value.documentHash;
      this._documentHashType = value.documentHashType;
      this._documentVersion = value.documentVersion;
      this._notificationConfig.internalValue = value.notificationConfig;
      this._outputS3BucketName = value.outputS3BucketName;
      this._outputS3KeyPrefix = value.outputS3KeyPrefix;
      this._parameters = value.parameters;
      this._serviceRoleArn = value.serviceRoleArn;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // cloudwatch_output_config - computed: true, optional: true, required: false
  private _cloudwatchOutputConfig = new SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference(this, "cloudwatch_output_config");
  public get cloudwatchOutputConfig() {
    return this._cloudwatchOutputConfig;
  }
  public putCloudwatchOutputConfig(value: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig) {
    this._cloudwatchOutputConfig.internalValue = value;
  }
  public resetCloudwatchOutputConfig() {
    this._cloudwatchOutputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchOutputConfigInput() {
    return this._cloudwatchOutputConfig.internalValue;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // document_hash - computed: true, optional: true, required: false
  private _documentHash?: string; 
  public get documentHash() {
    return this.getStringAttribute('document_hash');
  }
  public set documentHash(value: string) {
    this._documentHash = value;
  }
  public resetDocumentHash() {
    this._documentHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentHashInput() {
    return this._documentHash;
  }

  // document_hash_type - computed: true, optional: true, required: false
  private _documentHashType?: string; 
  public get documentHashType() {
    return this.getStringAttribute('document_hash_type');
  }
  public set documentHashType(value: string) {
    this._documentHashType = value;
  }
  public resetDocumentHashType() {
    this._documentHashType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentHashTypeInput() {
    return this._documentHashType;
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

  // notification_config - computed: true, optional: true, required: false
  private _notificationConfig = new SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference(this, "notification_config");
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
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

  // parameters - computed: true, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // service_role_arn - computed: true, optional: true, required: false
  private _serviceRoleArn?: string; 
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }
  public set serviceRoleArn(value: string) {
    this._serviceRoleArn = value;
  }
  public resetServiceRoleArn() {
    this._serviceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleArnInput() {
    return this._serviceRoleArn;
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#input SsmMaintenanceWindowTask#input}
  */
  readonly input?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}
  */
  readonly name?: string;
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersToHclTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input: {
      value: cdktn.stringToHclTerraform(struct!.input),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
      this._name = value.name;
    }
  }

  // input - computed: true, optional: true, required: false
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
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
export interface SsmMaintenanceWindowTaskTaskInvocationParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#maintenance_window_automation_parameters SsmMaintenanceWindowTask#maintenance_window_automation_parameters}
  */
  readonly maintenanceWindowAutomationParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#maintenance_window_lambda_parameters SsmMaintenanceWindowTask#maintenance_window_lambda_parameters}
  */
  readonly maintenanceWindowLambdaParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#maintenance_window_run_command_parameters SsmMaintenanceWindowTask#maintenance_window_run_command_parameters}
  */
  readonly maintenanceWindowRunCommandParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#maintenance_window_step_functions_parameters SsmMaintenanceWindowTask#maintenance_window_step_functions_parameters}
  */
  readonly maintenanceWindowStepFunctionsParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters;
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maintenance_window_automation_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersToTerraform(struct!.maintenanceWindowAutomationParameters),
    maintenance_window_lambda_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersToTerraform(struct!.maintenanceWindowLambdaParameters),
    maintenance_window_run_command_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersToTerraform(struct!.maintenanceWindowRunCommandParameters),
    maintenance_window_step_functions_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersToTerraform(struct!.maintenanceWindowStepFunctionsParameters),
  }
}


export function ssmMaintenanceWindowTaskTaskInvocationParametersToHclTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maintenance_window_automation_parameters: {
      value: ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersToHclTerraform(struct!.maintenanceWindowAutomationParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters",
    },
    maintenance_window_lambda_parameters: {
      value: ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersToHclTerraform(struct!.maintenanceWindowLambdaParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters",
    },
    maintenance_window_run_command_parameters: {
      value: ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersToHclTerraform(struct!.maintenanceWindowRunCommandParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters",
    },
    maintenance_window_step_functions_parameters: {
      value: ssmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersToHclTerraform(struct!.maintenanceWindowStepFunctionsParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceWindowAutomationParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindowAutomationParameters = this._maintenanceWindowAutomationParameters?.internalValue;
    }
    if (this._maintenanceWindowLambdaParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindowLambdaParameters = this._maintenanceWindowLambdaParameters?.internalValue;
    }
    if (this._maintenanceWindowRunCommandParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindowRunCommandParameters = this._maintenanceWindowRunCommandParameters?.internalValue;
    }
    if (this._maintenanceWindowStepFunctionsParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindowStepFunctionsParameters = this._maintenanceWindowStepFunctionsParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maintenanceWindowAutomationParameters.internalValue = undefined;
      this._maintenanceWindowLambdaParameters.internalValue = undefined;
      this._maintenanceWindowRunCommandParameters.internalValue = undefined;
      this._maintenanceWindowStepFunctionsParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maintenanceWindowAutomationParameters.internalValue = value.maintenanceWindowAutomationParameters;
      this._maintenanceWindowLambdaParameters.internalValue = value.maintenanceWindowLambdaParameters;
      this._maintenanceWindowRunCommandParameters.internalValue = value.maintenanceWindowRunCommandParameters;
      this._maintenanceWindowStepFunctionsParameters.internalValue = value.maintenanceWindowStepFunctionsParameters;
    }
  }

  // maintenance_window_automation_parameters - computed: true, optional: true, required: false
  private _maintenanceWindowAutomationParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference(this, "maintenance_window_automation_parameters");
  public get maintenanceWindowAutomationParameters() {
    return this._maintenanceWindowAutomationParameters;
  }
  public putMaintenanceWindowAutomationParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters) {
    this._maintenanceWindowAutomationParameters.internalValue = value;
  }
  public resetMaintenanceWindowAutomationParameters() {
    this._maintenanceWindowAutomationParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowAutomationParametersInput() {
    return this._maintenanceWindowAutomationParameters.internalValue;
  }

  // maintenance_window_lambda_parameters - computed: true, optional: true, required: false
  private _maintenanceWindowLambdaParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference(this, "maintenance_window_lambda_parameters");
  public get maintenanceWindowLambdaParameters() {
    return this._maintenanceWindowLambdaParameters;
  }
  public putMaintenanceWindowLambdaParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters) {
    this._maintenanceWindowLambdaParameters.internalValue = value;
  }
  public resetMaintenanceWindowLambdaParameters() {
    this._maintenanceWindowLambdaParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowLambdaParametersInput() {
    return this._maintenanceWindowLambdaParameters.internalValue;
  }

  // maintenance_window_run_command_parameters - computed: true, optional: true, required: false
  private _maintenanceWindowRunCommandParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference(this, "maintenance_window_run_command_parameters");
  public get maintenanceWindowRunCommandParameters() {
    return this._maintenanceWindowRunCommandParameters;
  }
  public putMaintenanceWindowRunCommandParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters) {
    this._maintenanceWindowRunCommandParameters.internalValue = value;
  }
  public resetMaintenanceWindowRunCommandParameters() {
    this._maintenanceWindowRunCommandParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowRunCommandParametersInput() {
    return this._maintenanceWindowRunCommandParameters.internalValue;
  }

  // maintenance_window_step_functions_parameters - computed: true, optional: true, required: false
  private _maintenanceWindowStepFunctionsParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference(this, "maintenance_window_step_functions_parameters");
  public get maintenanceWindowStepFunctionsParameters() {
    return this._maintenanceWindowStepFunctionsParameters;
  }
  public putMaintenanceWindowStepFunctionsParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters) {
    this._maintenanceWindowStepFunctionsParameters.internalValue = value;
  }
  public resetMaintenanceWindowStepFunctionsParameters() {
    this._maintenanceWindowStepFunctionsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowStepFunctionsParametersInput() {
    return this._maintenanceWindowStepFunctionsParameters.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task awscc_ssm_maintenance_window_task}
*/
export class SsmMaintenanceWindowTask extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ssm_maintenance_window_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SsmMaintenanceWindowTask resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsmMaintenanceWindowTask to import
  * @param importFromId The id of the existing SsmMaintenanceWindowTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsmMaintenanceWindowTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssm_maintenance_window_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ssm_maintenance_window_task awscc_ssm_maintenance_window_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmMaintenanceWindowTaskConfig
  */
  public constructor(scope: Construct, id: string, config: SsmMaintenanceWindowTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ssm_maintenance_window_task',
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
    this._cutoffBehavior = config.cutoffBehavior;
    this._description = config.description;
    this._loggingInfo.internalValue = config.loggingInfo;
    this._maxConcurrency = config.maxConcurrency;
    this._maxErrors = config.maxErrors;
    this._name = config.name;
    this._priority = config.priority;
    this._serviceRoleArn = config.serviceRoleArn;
    this._targets.internalValue = config.targets;
    this._taskArn = config.taskArn;
    this._taskInvocationParameters.internalValue = config.taskInvocationParameters;
    this._taskParameters = config.taskParameters;
    this._taskType = config.taskType;
    this._windowId = config.windowId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cutoff_behavior - computed: true, optional: true, required: false
  private _cutoffBehavior?: string; 
  public get cutoffBehavior() {
    return this.getStringAttribute('cutoff_behavior');
  }
  public set cutoffBehavior(value: string) {
    this._cutoffBehavior = value;
  }
  public resetCutoffBehavior() {
    this._cutoffBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cutoffBehaviorInput() {
    return this._cutoffBehavior;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logging_info - computed: true, optional: true, required: false
  private _loggingInfo = new SsmMaintenanceWindowTaskLoggingInfoOutputReference(this, "logging_info");
  public get loggingInfo() {
    return this._loggingInfo;
  }
  public putLoggingInfo(value: SsmMaintenanceWindowTaskLoggingInfo) {
    this._loggingInfo.internalValue = value;
  }
  public resetLoggingInfo() {
    this._loggingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInfoInput() {
    return this._loggingInfo.internalValue;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // service_role_arn - computed: true, optional: true, required: false
  private _serviceRoleArn?: string; 
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }
  public set serviceRoleArn(value: string) {
    this._serviceRoleArn = value;
  }
  public resetServiceRoleArn() {
    this._serviceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleArnInput() {
    return this._serviceRoleArn;
  }

  // targets - computed: true, optional: true, required: false
  private _targets = new SsmMaintenanceWindowTaskTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: SsmMaintenanceWindowTaskTargets[] | cdktn.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // task_arn - computed: false, optional: false, required: true
  private _taskArn?: string; 
  public get taskArn() {
    return this.getStringAttribute('task_arn');
  }
  public set taskArn(value: string) {
    this._taskArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskArnInput() {
    return this._taskArn;
  }

  // task_invocation_parameters - computed: true, optional: true, required: false
  private _taskInvocationParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference(this, "task_invocation_parameters");
  public get taskInvocationParameters() {
    return this._taskInvocationParameters;
  }
  public putTaskInvocationParameters(value: SsmMaintenanceWindowTaskTaskInvocationParameters) {
    this._taskInvocationParameters.internalValue = value;
  }
  public resetTaskInvocationParameters() {
    this._taskInvocationParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInvocationParametersInput() {
    return this._taskInvocationParameters.internalValue;
  }

  // task_parameters - computed: true, optional: true, required: false
  private _taskParameters?: string; 
  public get taskParameters() {
    return this.getStringAttribute('task_parameters');
  }
  public set taskParameters(value: string) {
    this._taskParameters = value;
  }
  public resetTaskParameters() {
    this._taskParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskParametersInput() {
    return this._taskParameters;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // window_id - computed: false, optional: false, required: true
  private _windowId?: string; 
  public get windowId() {
    return this.getStringAttribute('window_id');
  }
  public set windowId(value: string) {
    this._windowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowIdInput() {
    return this._windowId;
  }

  // window_task_id - computed: true, optional: false, required: false
  public get windowTaskId() {
    return this.getStringAttribute('window_task_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cutoff_behavior: cdktn.stringToTerraform(this._cutoffBehavior),
      description: cdktn.stringToTerraform(this._description),
      logging_info: ssmMaintenanceWindowTaskLoggingInfoToTerraform(this._loggingInfo.internalValue),
      max_concurrency: cdktn.stringToTerraform(this._maxConcurrency),
      max_errors: cdktn.stringToTerraform(this._maxErrors),
      name: cdktn.stringToTerraform(this._name),
      priority: cdktn.numberToTerraform(this._priority),
      service_role_arn: cdktn.stringToTerraform(this._serviceRoleArn),
      targets: cdktn.listMapper(ssmMaintenanceWindowTaskTargetsToTerraform, false)(this._targets.internalValue),
      task_arn: cdktn.stringToTerraform(this._taskArn),
      task_invocation_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform(this._taskInvocationParameters.internalValue),
      task_parameters: cdktn.stringToTerraform(this._taskParameters),
      task_type: cdktn.stringToTerraform(this._taskType),
      window_id: cdktn.stringToTerraform(this._windowId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cutoff_behavior: {
        value: cdktn.stringToHclTerraform(this._cutoffBehavior),
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
      logging_info: {
        value: ssmMaintenanceWindowTaskLoggingInfoToHclTerraform(this._loggingInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SsmMaintenanceWindowTaskLoggingInfo",
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
      priority: {
        value: cdktn.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_role_arn: {
        value: cdktn.stringToHclTerraform(this._serviceRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets: {
        value: cdktn.listMapperHcl(ssmMaintenanceWindowTaskTargetsToHclTerraform, false)(this._targets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsmMaintenanceWindowTaskTargetsList",
      },
      task_arn: {
        value: cdktn.stringToHclTerraform(this._taskArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_invocation_parameters: {
        value: ssmMaintenanceWindowTaskTaskInvocationParametersToHclTerraform(this._taskInvocationParameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SsmMaintenanceWindowTaskTaskInvocationParameters",
      },
      task_parameters: {
        value: cdktn.stringToHclTerraform(this._taskParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_type: {
        value: cdktn.stringToHclTerraform(this._taskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      window_id: {
        value: cdktn.stringToHclTerraform(this._windowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
