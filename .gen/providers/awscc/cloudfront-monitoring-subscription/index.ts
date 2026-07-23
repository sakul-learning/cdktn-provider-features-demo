// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_monitoring_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudfrontMonitoringSubscriptionConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the distribution that you are enabling metrics for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_monitoring_subscription#distribution_id CloudfrontMonitoringSubscription#distribution_id}
  */
  readonly distributionId: string;
  /**
  * A subscription configuration for additional CloudWatch metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_monitoring_subscription#monitoring_subscription CloudfrontMonitoringSubscription#monitoring_subscription}
  */
  readonly monitoringSubscription: CloudfrontMonitoringSubscriptionMonitoringSubscription;
}
export interface CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig {
  /**
  * A flag that indicates whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_monitoring_subscription#realtime_metrics_subscription_status CloudfrontMonitoringSubscription#realtime_metrics_subscription_status}
  */
  readonly realtimeMetricsSubscriptionStatus?: string;
}

export function cloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigToTerraform(struct?: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    realtime_metrics_subscription_status: cdktn.stringToTerraform(struct!.realtimeMetricsSubscriptionStatus),
  }
}


export function cloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigToHclTerraform(struct?: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    realtime_metrics_subscription_status: {
      value: cdktn.stringToHclTerraform(struct!.realtimeMetricsSubscriptionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realtimeMetricsSubscriptionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.realtimeMetricsSubscriptionStatus = this._realtimeMetricsSubscriptionStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._realtimeMetricsSubscriptionStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._realtimeMetricsSubscriptionStatus = value.realtimeMetricsSubscriptionStatus;
    }
  }

  // realtime_metrics_subscription_status - computed: true, optional: true, required: false
  private _realtimeMetricsSubscriptionStatus?: string; 
  public get realtimeMetricsSubscriptionStatus() {
    return this.getStringAttribute('realtime_metrics_subscription_status');
  }
  public set realtimeMetricsSubscriptionStatus(value: string) {
    this._realtimeMetricsSubscriptionStatus = value;
  }
  public resetRealtimeMetricsSubscriptionStatus() {
    this._realtimeMetricsSubscriptionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeMetricsSubscriptionStatusInput() {
    return this._realtimeMetricsSubscriptionStatus;
  }
}
export interface CloudfrontMonitoringSubscriptionMonitoringSubscription {
  /**
  * A subscription configuration for additional CloudWatch metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_monitoring_subscription#realtime_metrics_subscription_config CloudfrontMonitoringSubscription#realtime_metrics_subscription_config}
  */
  readonly realtimeMetricsSubscriptionConfig?: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig;
}

export function cloudfrontMonitoringSubscriptionMonitoringSubscriptionToTerraform(struct?: CloudfrontMonitoringSubscriptionMonitoringSubscription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    realtime_metrics_subscription_config: cloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigToTerraform(struct!.realtimeMetricsSubscriptionConfig),
  }
}


export function cloudfrontMonitoringSubscriptionMonitoringSubscriptionToHclTerraform(struct?: CloudfrontMonitoringSubscriptionMonitoringSubscription | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    realtime_metrics_subscription_config: {
      value: cloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigToHclTerraform(struct!.realtimeMetricsSubscriptionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontMonitoringSubscriptionMonitoringSubscription | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realtimeMetricsSubscriptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realtimeMetricsSubscriptionConfig = this._realtimeMetricsSubscriptionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMonitoringSubscriptionMonitoringSubscription | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._realtimeMetricsSubscriptionConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._realtimeMetricsSubscriptionConfig.internalValue = value.realtimeMetricsSubscriptionConfig;
    }
  }

  // realtime_metrics_subscription_config - computed: true, optional: true, required: false
  private _realtimeMetricsSubscriptionConfig = new CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference(this, "realtime_metrics_subscription_config");
  public get realtimeMetricsSubscriptionConfig() {
    return this._realtimeMetricsSubscriptionConfig;
  }
  public putRealtimeMetricsSubscriptionConfig(value: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig) {
    this._realtimeMetricsSubscriptionConfig.internalValue = value;
  }
  public resetRealtimeMetricsSubscriptionConfig() {
    this._realtimeMetricsSubscriptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeMetricsSubscriptionConfigInput() {
    return this._realtimeMetricsSubscriptionConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_monitoring_subscription awscc_cloudfront_monitoring_subscription}
*/
export class CloudfrontMonitoringSubscription extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudfront_monitoring_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudfrontMonitoringSubscription resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudfrontMonitoringSubscription to import
  * @param importFromId The id of the existing CloudfrontMonitoringSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_monitoring_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudfrontMonitoringSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_monitoring_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_monitoring_subscription awscc_cloudfront_monitoring_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontMonitoringSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontMonitoringSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudfront_monitoring_subscription',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._distributionId = config.distributionId;
    this._monitoringSubscription.internalValue = config.monitoringSubscription;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // distribution_id - computed: false, optional: false, required: true
  private _distributionId?: string; 
  public get distributionId() {
    return this.getStringAttribute('distribution_id');
  }
  public set distributionId(value: string) {
    this._distributionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionIdInput() {
    return this._distributionId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // monitoring_subscription - computed: false, optional: false, required: true
  private _monitoringSubscription = new CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference(this, "monitoring_subscription");
  public get monitoringSubscription() {
    return this._monitoringSubscription;
  }
  public putMonitoringSubscription(value: CloudfrontMonitoringSubscriptionMonitoringSubscription) {
    this._monitoringSubscription.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringSubscriptionInput() {
    return this._monitoringSubscription.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      distribution_id: cdktn.stringToTerraform(this._distributionId),
      monitoring_subscription: cloudfrontMonitoringSubscriptionMonitoringSubscriptionToTerraform(this._monitoringSubscription.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      distribution_id: {
        value: cdktn.stringToHclTerraform(this._distributionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring_subscription: {
        value: cloudfrontMonitoringSubscriptionMonitoringSubscriptionToHclTerraform(this._monitoringSubscription.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudfrontMonitoringSubscriptionMonitoringSubscription",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
