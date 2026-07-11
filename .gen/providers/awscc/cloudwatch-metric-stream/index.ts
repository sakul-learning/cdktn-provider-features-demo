// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudwatchMetricStreamConfig extends cdktn.TerraformMetaArguments {
  /**
  * Define which metrics will be not streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#exclude_filters CloudwatchMetricStream#exclude_filters}
  */
  readonly excludeFilters?: CloudwatchMetricStreamExcludeFilters[] | cdktn.IResolvable;
  /**
  * The ARN of the Kinesis Firehose where to stream the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}
  */
  readonly firehoseArn?: string;
  /**
  * Define which metrics will be streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#include_filters CloudwatchMetricStream#include_filters}
  */
  readonly includeFilters?: CloudwatchMetricStreamIncludeFilters[] | cdktn.IResolvable;
  /**
  * If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that are linked to this monitoring account, in the metric stream. The default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#include_linked_accounts_metrics CloudwatchMetricStream#include_linked_accounts_metrics}
  */
  readonly includeLinkedAccountsMetrics?: boolean | cdktn.IResolvable;
  /**
  * Name of the metric stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#name CloudwatchMetricStream#name}
  */
  readonly name?: string;
  /**
  * The output format of the data streamed to the Kinesis Firehose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}
  */
  readonly outputFormat?: string;
  /**
  * The ARN of the role that provides access to the Kinesis Firehose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}
  */
  readonly roleArn?: string;
  /**
  * By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed. You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#statistics_configurations CloudwatchMetricStream#statistics_configurations}
  */
  readonly statisticsConfigurations?: CloudwatchMetricStreamStatisticsConfigurations[] | cdktn.IResolvable;
  /**
  * A set of tags to assign to the delivery stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}
  */
  readonly tags?: CloudwatchMetricStreamTags[] | cdktn.IResolvable;
}
export interface CloudwatchMetricStreamExcludeFilters {
  /**
  * Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#metric_names CloudwatchMetricStream#metric_names}
  */
  readonly metricNames?: string[];
  /**
  * Only metrics with Namespace matching this value will be streamed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}
  */
  readonly namespace?: string;
}

export function cloudwatchMetricStreamExcludeFiltersToTerraform(struct?: CloudwatchMetricStreamExcludeFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metricNames),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function cloudwatchMetricStreamExcludeFiltersToHclTerraform(struct?: CloudwatchMetricStreamExcludeFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metricNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchMetricStreamExcludeFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchMetricStreamExcludeFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNames = this._metricNames;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchMetricStreamExcludeFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricNames = undefined;
      this._namespace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricNames = value.metricNames;
      this._namespace = value.namespace;
    }
  }

  // metric_names - computed: true, optional: true, required: false
  private _metricNames?: string[];
  public get metricNames() {
    return this.getListAttribute('metric_names');
  }
  public set metricNames(value: string[]) {
    this._metricNames = value;
  }
  public resetMetricNames() {
    this._metricNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamesInput() {
    return this._metricNames;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string;
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class CloudwatchMetricStreamExcludeFiltersList extends cdktn.ComplexList {
  public internalValue? : CloudwatchMetricStreamExcludeFilters[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchMetricStreamExcludeFiltersOutputReference {
    return new CloudwatchMetricStreamExcludeFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchMetricStreamIncludeFilters {
  /**
  * Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#metric_names CloudwatchMetricStream#metric_names}
  */
  readonly metricNames?: string[];
  /**
  * Only metrics with Namespace matching this value will be streamed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}
  */
  readonly namespace?: string;
}

export function cloudwatchMetricStreamIncludeFiltersToTerraform(struct?: CloudwatchMetricStreamIncludeFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metricNames),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function cloudwatchMetricStreamIncludeFiltersToHclTerraform(struct?: CloudwatchMetricStreamIncludeFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metricNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchMetricStreamIncludeFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchMetricStreamIncludeFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNames = this._metricNames;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchMetricStreamIncludeFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricNames = undefined;
      this._namespace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricNames = value.metricNames;
      this._namespace = value.namespace;
    }
  }

  // metric_names - computed: true, optional: true, required: false
  private _metricNames?: string[];
  public get metricNames() {
    return this.getListAttribute('metric_names');
  }
  public set metricNames(value: string[]) {
    this._metricNames = value;
  }
  public resetMetricNames() {
    this._metricNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamesInput() {
    return this._metricNames;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string;
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class CloudwatchMetricStreamIncludeFiltersList extends cdktn.ComplexList {
  public internalValue? : CloudwatchMetricStreamIncludeFilters[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchMetricStreamIncludeFiltersOutputReference {
    return new CloudwatchMetricStreamIncludeFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics {
  /**
  * The name of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#metric_name CloudwatchMetricStream#metric_name}
  */
  readonly metricName?: string;
  /**
  * The namespace of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}
  */
  readonly namespace?: string;
}

export function cloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsToTerraform(struct?: CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function cloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsToHclTerraform(struct?: CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
    }
  }

  // metric_name - computed: true, optional: true, required: false
  private _metricName?: string;
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string;
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList extends cdktn.ComplexList {
  public internalValue? : CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference {
    return new CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchMetricStreamStatisticsConfigurations {
  /**
  * The additional statistics to stream for the metrics listed in IncludeMetrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#additional_statistics CloudwatchMetricStream#additional_statistics}
  */
  readonly additionalStatistics?: string[];
  /**
  * An array that defines the metrics that are to have additional statistics streamed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#include_metrics CloudwatchMetricStream#include_metrics}
  */
  readonly includeMetrics?: CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics[] | cdktn.IResolvable;
}

export function cloudwatchMetricStreamStatisticsConfigurationsToTerraform(struct?: CloudwatchMetricStreamStatisticsConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_statistics: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.additionalStatistics),
    include_metrics: cdktn.listMapper(cloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsToTerraform, false)(struct!.includeMetrics),
  }
}


export function cloudwatchMetricStreamStatisticsConfigurationsToHclTerraform(struct?: CloudwatchMetricStreamStatisticsConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_statistics: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.additionalStatistics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_metrics: {
      value: cdktn.listMapperHcl(cloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsToHclTerraform, false)(struct!.includeMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchMetricStreamStatisticsConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchMetricStreamStatisticsConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalStatistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalStatistics = this._additionalStatistics;
    }
    if (this._includeMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeMetrics = this._includeMetrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchMetricStreamStatisticsConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalStatistics = undefined;
      this._includeMetrics.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalStatistics = value.additionalStatistics;
      this._includeMetrics.internalValue = value.includeMetrics;
    }
  }

  // additional_statistics - computed: true, optional: true, required: false
  private _additionalStatistics?: string[];
  public get additionalStatistics() {
    return this.getListAttribute('additional_statistics');
  }
  public set additionalStatistics(value: string[]) {
    this._additionalStatistics = value;
  }
  public resetAdditionalStatistics() {
    this._additionalStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalStatisticsInput() {
    return this._additionalStatistics;
  }

  // include_metrics - computed: true, optional: true, required: false
  private _includeMetrics = new CloudwatchMetricStreamStatisticsConfigurationsIncludeMetricsList(this, "include_metrics", false);
  public get includeMetrics() {
    return this._includeMetrics;
  }
  public putIncludeMetrics(value: CloudwatchMetricStreamStatisticsConfigurationsIncludeMetrics[] | cdktn.IResolvable) {
    this._includeMetrics.internalValue = value;
  }
  public resetIncludeMetrics() {
    this._includeMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMetricsInput() {
    return this._includeMetrics.internalValue;
  }
}

export class CloudwatchMetricStreamStatisticsConfigurationsList extends cdktn.ComplexList {
  public internalValue? : CloudwatchMetricStreamStatisticsConfigurations[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchMetricStreamStatisticsConfigurationsOutputReference {
    return new CloudwatchMetricStreamStatisticsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchMetricStreamTags {
  /**
  * A unique identifier for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#key CloudwatchMetricStream#key}
  */
  readonly key?: string;
  /**
  * String which you can use to describe or define the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#value CloudwatchMetricStream#value}
  */
  readonly value?: string;
}

export function cloudwatchMetricStreamTagsToTerraform(struct?: CloudwatchMetricStreamTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cloudwatchMetricStreamTagsToHclTerraform(struct?: CloudwatchMetricStreamTags | cdktn.IResolvable): any {
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

export class CloudwatchMetricStreamTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchMetricStreamTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CloudwatchMetricStreamTags | cdktn.IResolvable | undefined) {
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

export class CloudwatchMetricStreamTagsList extends cdktn.ComplexList {
  public internalValue? : CloudwatchMetricStreamTags[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchMetricStreamTagsOutputReference {
    return new CloudwatchMetricStreamTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream awscc_cloudwatch_metric_stream}
*/
export class CloudwatchMetricStream extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudwatch_metric_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudwatchMetricStream resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchMetricStream to import
  * @param importFromId The id of the existing CloudwatchMetricStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchMetricStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudwatch_metric_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudwatch_metric_stream awscc_cloudwatch_metric_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchMetricStreamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudwatchMetricStreamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudwatch_metric_stream',
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
    this._excludeFilters.internalValue = config.excludeFilters;
    this._firehoseArn = config.firehoseArn;
    this._includeFilters.internalValue = config.includeFilters;
    this._includeLinkedAccountsMetrics = config.includeLinkedAccountsMetrics;
    this._name = config.name;
    this._outputFormat = config.outputFormat;
    this._roleArn = config.roleArn;
    this._statisticsConfigurations.internalValue = config.statisticsConfigurations;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // exclude_filters - computed: true, optional: true, required: false
  private _excludeFilters = new CloudwatchMetricStreamExcludeFiltersList(this, "exclude_filters", false);
  public get excludeFilters() {
    return this._excludeFilters;
  }
  public putExcludeFilters(value: CloudwatchMetricStreamExcludeFilters[] | cdktn.IResolvable) {
    this._excludeFilters.internalValue = value;
  }
  public resetExcludeFilters() {
    this._excludeFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFiltersInput() {
    return this._excludeFilters.internalValue;
  }

  // firehose_arn - computed: true, optional: true, required: false
  private _firehoseArn?: string;
  public get firehoseArn() {
    return this.getStringAttribute('firehose_arn');
  }
  public set firehoseArn(value: string) {
    this._firehoseArn = value;
  }
  public resetFirehoseArn() {
    this._firehoseArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseArnInput() {
    return this._firehoseArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_filters - computed: true, optional: true, required: false
  private _includeFilters = new CloudwatchMetricStreamIncludeFiltersList(this, "include_filters", false);
  public get includeFilters() {
    return this._includeFilters;
  }
  public putIncludeFilters(value: CloudwatchMetricStreamIncludeFilters[] | cdktn.IResolvable) {
    this._includeFilters.internalValue = value;
  }
  public resetIncludeFilters() {
    this._includeFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFiltersInput() {
    return this._includeFilters.internalValue;
  }

  // include_linked_accounts_metrics - computed: true, optional: true, required: false
  private _includeLinkedAccountsMetrics?: boolean | cdktn.IResolvable;
  public get includeLinkedAccountsMetrics() {
    return this.getBooleanAttribute('include_linked_accounts_metrics');
  }
  public set includeLinkedAccountsMetrics(value: boolean | cdktn.IResolvable) {
    this._includeLinkedAccountsMetrics = value;
  }
  public resetIncludeLinkedAccountsMetrics() {
    this._includeLinkedAccountsMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLinkedAccountsMetricsInput() {
    return this._includeLinkedAccountsMetrics;
  }

  // last_update_date - computed: true, optional: false, required: false
  public get lastUpdateDate() {
    return this.getStringAttribute('last_update_date');
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

  // output_format - computed: true, optional: true, required: false
  private _outputFormat?: string;
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // statistics_configurations - computed: true, optional: true, required: false
  private _statisticsConfigurations = new CloudwatchMetricStreamStatisticsConfigurationsList(this, "statistics_configurations", false);
  public get statisticsConfigurations() {
    return this._statisticsConfigurations;
  }
  public putStatisticsConfigurations(value: CloudwatchMetricStreamStatisticsConfigurations[] | cdktn.IResolvable) {
    this._statisticsConfigurations.internalValue = value;
  }
  public resetStatisticsConfigurations() {
    this._statisticsConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsConfigurationsInput() {
    return this._statisticsConfigurations.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new CloudwatchMetricStreamTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CloudwatchMetricStreamTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_filters: cdktn.listMapper(cloudwatchMetricStreamExcludeFiltersToTerraform, false)(this._excludeFilters.internalValue),
      firehose_arn: cdktn.stringToTerraform(this._firehoseArn),
      include_filters: cdktn.listMapper(cloudwatchMetricStreamIncludeFiltersToTerraform, false)(this._includeFilters.internalValue),
      include_linked_accounts_metrics: cdktn.booleanToTerraform(this._includeLinkedAccountsMetrics),
      name: cdktn.stringToTerraform(this._name),
      output_format: cdktn.stringToTerraform(this._outputFormat),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      statistics_configurations: cdktn.listMapper(cloudwatchMetricStreamStatisticsConfigurationsToTerraform, false)(this._statisticsConfigurations.internalValue),
      tags: cdktn.listMapper(cloudwatchMetricStreamTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclude_filters: {
        value: cdktn.listMapperHcl(cloudwatchMetricStreamExcludeFiltersToHclTerraform, false)(this._excludeFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchMetricStreamExcludeFiltersList",
      },
      firehose_arn: {
        value: cdktn.stringToHclTerraform(this._firehoseArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_filters: {
        value: cdktn.listMapperHcl(cloudwatchMetricStreamIncludeFiltersToHclTerraform, false)(this._includeFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchMetricStreamIncludeFiltersList",
      },
      include_linked_accounts_metrics: {
        value: cdktn.booleanToHclTerraform(this._includeLinkedAccountsMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_format: {
        value: cdktn.stringToHclTerraform(this._outputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statistics_configurations: {
        value: cdktn.listMapperHcl(cloudwatchMetricStreamStatisticsConfigurationsToHclTerraform, false)(this._statisticsConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchMetricStreamStatisticsConfigurationsList",
      },
      tags: {
        value: cdktn.listMapperHcl(cloudwatchMetricStreamTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchMetricStreamTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
