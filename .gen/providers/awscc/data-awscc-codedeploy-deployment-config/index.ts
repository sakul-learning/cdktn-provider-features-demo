// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/codedeploy_deployment_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCodedeployDeploymentConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/codedeploy_deployment_config#id DataAwsccCodedeployDeploymentConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts {
}

export function dataAwsccCodedeployDeploymentConfigMinimumHealthyHostsToTerraform(struct?: DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentConfigMinimumHealthyHostsToHclTerraform(struct?: DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentConfigMinimumHealthyHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary {
}

export function dataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToTerraform(struct?: DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToHclTerraform(struct?: DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // canary_interval - computed: true, optional: false, required: false
  public get canaryInterval() {
    return this.getNumberAttribute('canary_interval');
  }

  // canary_percentage - computed: true, optional: false, required: false
  public get canaryPercentage() {
    return this.getNumberAttribute('canary_percentage');
  }
}
export interface DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear {
}

export function dataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToTerraform(struct?: DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToHclTerraform(struct?: DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // linear_interval - computed: true, optional: false, required: false
  public get linearInterval() {
    return this.getNumberAttribute('linear_interval');
  }

  // linear_percentage - computed: true, optional: false, required: false
  public get linearPercentage() {
    return this.getNumberAttribute('linear_percentage');
  }
}
export interface DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig {
}

export function dataAwsccCodedeployDeploymentConfigTrafficRoutingConfigToTerraform(struct?: DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentConfigTrafficRoutingConfigToHclTerraform(struct?: DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentConfigTrafficRoutingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // time_based_canary - computed: true, optional: false, required: false
  private _timeBasedCanary = new DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference(this, "time_based_canary");
  public get timeBasedCanary() {
    return this._timeBasedCanary;
  }

  // time_based_linear - computed: true, optional: false, required: false
  private _timeBasedLinear = new DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference(this, "time_based_linear");
  public get timeBasedLinear() {
    return this._timeBasedLinear;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone {
}

export function dataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneToTerraform(struct?: DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneToHclTerraform(struct?: DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccCodedeployDeploymentConfigZonalConfig {
}

export function dataAwsccCodedeployDeploymentConfigZonalConfigToTerraform(struct?: DataAwsccCodedeployDeploymentConfigZonalConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodedeployDeploymentConfigZonalConfigToHclTerraform(struct?: DataAwsccCodedeployDeploymentConfigZonalConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodedeployDeploymentConfigZonalConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodedeployDeploymentConfigZonalConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // first_zone_monitor_duration_in_seconds - computed: true, optional: false, required: false
  public get firstZoneMonitorDurationInSeconds() {
    return this.getNumberAttribute('first_zone_monitor_duration_in_seconds');
  }

  // minimum_healthy_hosts_per_zone - computed: true, optional: false, required: false
  private _minimumHealthyHostsPerZone = new DataAwsccCodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference(this, "minimum_healthy_hosts_per_zone");
  public get minimumHealthyHostsPerZone() {
    return this._minimumHealthyHostsPerZone;
  }

  // monitor_duration_in_seconds - computed: true, optional: false, required: false
  public get monitorDurationInSeconds() {
    return this.getNumberAttribute('monitor_duration_in_seconds');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/codedeploy_deployment_config awscc_codedeploy_deployment_config}
*/
export class DataAwsccCodedeployDeploymentConfig extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_codedeploy_deployment_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCodedeployDeploymentConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCodedeployDeploymentConfig to import
  * @param importFromId The id of the existing DataAwsccCodedeployDeploymentConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/codedeploy_deployment_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCodedeployDeploymentConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codedeploy_deployment_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/codedeploy_deployment_config awscc_codedeploy_deployment_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCodedeployDeploymentConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCodedeployDeploymentConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_codedeploy_deployment_config',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_platform - computed: true, optional: false, required: false
  public get computePlatform() {
    return this.getStringAttribute('compute_platform');
  }

  // deployment_config_name - computed: true, optional: false, required: false
  public get deploymentConfigName() {
    return this.getStringAttribute('deployment_config_name');
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

  // minimum_healthy_hosts - computed: true, optional: false, required: false
  private _minimumHealthyHosts = new DataAwsccCodedeployDeploymentConfigMinimumHealthyHostsOutputReference(this, "minimum_healthy_hosts");
  public get minimumHealthyHosts() {
    return this._minimumHealthyHosts;
  }

  // traffic_routing_config - computed: true, optional: false, required: false
  private _trafficRoutingConfig = new DataAwsccCodedeployDeploymentConfigTrafficRoutingConfigOutputReference(this, "traffic_routing_config");
  public get trafficRoutingConfig() {
    return this._trafficRoutingConfig;
  }

  // zonal_config - computed: true, optional: false, required: false
  private _zonalConfig = new DataAwsccCodedeployDeploymentConfigZonalConfigOutputReference(this, "zonal_config");
  public get zonalConfig() {
    return this._zonalConfig;
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
