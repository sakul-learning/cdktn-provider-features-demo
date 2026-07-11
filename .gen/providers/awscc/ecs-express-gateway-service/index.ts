// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EcsExpressGatewayServiceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#cluster EcsExpressGatewayService#cluster}
  */
  readonly cluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#cpu EcsExpressGatewayService#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#execution_role_arn EcsExpressGatewayService#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#health_check_path EcsExpressGatewayService#health_check_path}
  */
  readonly healthCheckPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#infrastructure_role_arn EcsExpressGatewayService#infrastructure_role_arn}
  */
  readonly infrastructureRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#memory EcsExpressGatewayService#memory}
  */
  readonly memory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#network_configuration EcsExpressGatewayService#network_configuration}
  */
  readonly networkConfiguration?: EcsExpressGatewayServiceNetworkConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#primary_container EcsExpressGatewayService#primary_container}
  */
  readonly primaryContainer?: EcsExpressGatewayServicePrimaryContainer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#scaling_target EcsExpressGatewayService#scaling_target}
  */
  readonly scalingTarget?: EcsExpressGatewayServiceScalingTarget;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#service_name EcsExpressGatewayService#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#tags EcsExpressGatewayService#tags}
  */
  readonly tags?: EcsExpressGatewayServiceTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#task_definition_arn EcsExpressGatewayService#task_definition_arn}
  */
  readonly taskDefinitionArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#task_role_arn EcsExpressGatewayService#task_role_arn}
  */
  readonly taskRoleArn?: string;
}
export interface EcsExpressGatewayServiceActiveConfigurationsIngressPaths {
}

export function ecsExpressGatewayServiceActiveConfigurationsIngressPathsToTerraform(struct?: EcsExpressGatewayServiceActiveConfigurationsIngressPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ecsExpressGatewayServiceActiveConfigurationsIngressPathsToHclTerraform(struct?: EcsExpressGatewayServiceActiveConfigurationsIngressPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcsExpressGatewayServiceActiveConfigurationsIngressPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServiceActiveConfigurationsIngressPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_type - computed: true, optional: false, required: false
  public get accessType() {
    return this.getStringAttribute('access_type');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
}

export class EcsExpressGatewayServiceActiveConfigurationsIngressPathsList extends cdktn.ComplexList {

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
  public get(index: number): EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference {
    return new EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration {
}

export function ecsExpressGatewayServiceActiveConfigurationsNetworkConfigurationToTerraform(struct?: EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ecsExpressGatewayServiceActiveConfigurationsNetworkConfigurationToHclTerraform(struct?: EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }
}
export interface EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration {
}

export function ecsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationToTerraform(struct?: EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ecsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationToHclTerraform(struct?: EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_group - computed: true, optional: false, required: false
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }

  // log_stream_prefix - computed: true, optional: false, required: false
  public get logStreamPrefix() {
    return this.getStringAttribute('log_stream_prefix');
  }
}
export interface EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment {
}

export function ecsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentToTerraform(struct?: EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ecsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentToHclTerraform(struct?: EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList extends cdktn.ComplexList {

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
  public get(index: number): EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference {
    return new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials {
}

export function ecsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsToTerraform(struct?: EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ecsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsToHclTerraform(struct?: EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials_parameter - computed: true, optional: false, required: false
  public get credentialsParameter() {
    return this.getStringAttribute('credentials_parameter');
  }
}
export interface EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets {
}

export function ecsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsToTerraform(struct?: EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ecsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsToHclTerraform(struct?: EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
}

export class EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList extends cdktn.ComplexList {

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
  public get(index: number): EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference {
    return new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer {
}

export function ecsExpressGatewayServiceActiveConfigurationsPrimaryContainerToTerraform(struct?: EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ecsExpressGatewayServiceActiveConfigurationsPrimaryContainerToHclTerraform(struct?: EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_logs_configuration - computed: true, optional: false, required: false
  private _awsLogsConfiguration = new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference(this, "aws_logs_configuration");
  public get awsLogsConfiguration() {
    return this._awsLogsConfiguration;
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // container_port - computed: true, optional: false, required: false
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // repository_credentials - computed: true, optional: false, required: false
  private _repositoryCredentials = new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference(this, "repository_credentials");
  public get repositoryCredentials() {
    return this._repositoryCredentials;
  }

  // secrets - computed: true, optional: false, required: false
  private _secrets = new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
}
export interface EcsExpressGatewayServiceActiveConfigurationsScalingTarget {
}

export function ecsExpressGatewayServiceActiveConfigurationsScalingTargetToTerraform(struct?: EcsExpressGatewayServiceActiveConfigurationsScalingTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ecsExpressGatewayServiceActiveConfigurationsScalingTargetToHclTerraform(struct?: EcsExpressGatewayServiceActiveConfigurationsScalingTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsExpressGatewayServiceActiveConfigurationsScalingTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServiceActiveConfigurationsScalingTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_scaling_metric - computed: true, optional: false, required: false
  public get autoScalingMetric() {
    return this.getStringAttribute('auto_scaling_metric');
  }

  // auto_scaling_target_value - computed: true, optional: false, required: false
  public get autoScalingTargetValue() {
    return this.getNumberAttribute('auto_scaling_target_value');
  }

  // max_task_count - computed: true, optional: false, required: false
  public get maxTaskCount() {
    return this.getNumberAttribute('max_task_count');
  }

  // min_task_count - computed: true, optional: false, required: false
  public get minTaskCount() {
    return this.getNumberAttribute('min_task_count');
  }
}
export interface EcsExpressGatewayServiceActiveConfigurations {
}

export function ecsExpressGatewayServiceActiveConfigurationsToTerraform(struct?: EcsExpressGatewayServiceActiveConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ecsExpressGatewayServiceActiveConfigurationsToHclTerraform(struct?: EcsExpressGatewayServiceActiveConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EcsExpressGatewayServiceActiveConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcsExpressGatewayServiceActiveConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServiceActiveConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // health_check_path - computed: true, optional: false, required: false
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }

  // ingress_paths - computed: true, optional: false, required: false
  private _ingressPaths = new EcsExpressGatewayServiceActiveConfigurationsIngressPathsList(this, "ingress_paths", false);
  public get ingressPaths() {
    return this._ingressPaths;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // primary_container - computed: true, optional: false, required: false
  private _primaryContainer = new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference(this, "primary_container");
  public get primaryContainer() {
    return this._primaryContainer;
  }

  // scaling_target - computed: true, optional: false, required: false
  private _scalingTarget = new EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference(this, "scaling_target");
  public get scalingTarget() {
    return this._scalingTarget;
  }

  // service_revision_arn - computed: true, optional: false, required: false
  public get serviceRevisionArn() {
    return this.getStringAttribute('service_revision_arn');
  }

  // task_definition_arn - computed: true, optional: false, required: false
  public get taskDefinitionArn() {
    return this.getStringAttribute('task_definition_arn');
  }

  // task_role_arn - computed: true, optional: false, required: false
  public get taskRoleArn() {
    return this.getStringAttribute('task_role_arn');
  }
}

export class EcsExpressGatewayServiceActiveConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): EcsExpressGatewayServiceActiveConfigurationsOutputReference {
    return new EcsExpressGatewayServiceActiveConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling {
}

export function ecsExpressGatewayServiceEcsManagedResourceArnsAutoScalingToTerraform(struct?: EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ecsExpressGatewayServiceEcsManagedResourceArnsAutoScalingToHclTerraform(struct?: EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_auto_scaling_policies - computed: true, optional: false, required: false
  public get applicationAutoScalingPolicies() {
    return this.getListAttribute('application_auto_scaling_policies');
  }

  // scalable_target - computed: true, optional: false, required: false
  public get scalableTarget() {
    return this.getStringAttribute('scalable_target');
  }
}
export interface EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath {
}

export function ecsExpressGatewayServiceEcsManagedResourceArnsIngressPathToTerraform(struct?: EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ecsExpressGatewayServiceEcsManagedResourceArnsIngressPathToHclTerraform(struct?: EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // listener_arn - computed: true, optional: false, required: false
  public get listenerArn() {
    return this.getStringAttribute('listener_arn');
  }

  // listener_rule_arn - computed: true, optional: false, required: false
  public get listenerRuleArn() {
    return this.getStringAttribute('listener_rule_arn');
  }

  // load_balancer_arn - computed: true, optional: false, required: false
  public get loadBalancerArn() {
    return this.getStringAttribute('load_balancer_arn');
  }

  // load_balancer_security_groups - computed: true, optional: false, required: false
  public get loadBalancerSecurityGroups() {
    return this.getListAttribute('load_balancer_security_groups');
  }

  // target_group_arns - computed: true, optional: false, required: false
  public get targetGroupArns() {
    return this.getListAttribute('target_group_arns');
  }
}
export interface EcsExpressGatewayServiceEcsManagedResourceArns {
}

export function ecsExpressGatewayServiceEcsManagedResourceArnsToTerraform(struct?: EcsExpressGatewayServiceEcsManagedResourceArns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ecsExpressGatewayServiceEcsManagedResourceArnsToHclTerraform(struct?: EcsExpressGatewayServiceEcsManagedResourceArns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsExpressGatewayServiceEcsManagedResourceArns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServiceEcsManagedResourceArns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_scaling - computed: true, optional: false, required: false
  private _autoScaling = new EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference(this, "auto_scaling");
  public get autoScaling() {
    return this._autoScaling;
  }

  // ingress_path - computed: true, optional: false, required: false
  private _ingressPath = new EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference(this, "ingress_path");
  public get ingressPath() {
    return this._ingressPath;
  }

  // log_groups - computed: true, optional: false, required: false
  public get logGroups() {
    return this.getListAttribute('log_groups');
  }

  // metric_alarms - computed: true, optional: false, required: false
  public get metricAlarms() {
    return this.getListAttribute('metric_alarms');
  }

  // service_security_groups - computed: true, optional: false, required: false
  public get serviceSecurityGroups() {
    return this.getListAttribute('service_security_groups');
  }
}
export interface EcsExpressGatewayServiceNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#security_groups EcsExpressGatewayService#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#subnets EcsExpressGatewayService#subnets}
  */
  readonly subnets?: string[];
}

export function ecsExpressGatewayServiceNetworkConfigurationToTerraform(struct?: EcsExpressGatewayServiceNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function ecsExpressGatewayServiceNetworkConfigurationToHclTerraform(struct?: EcsExpressGatewayServiceNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsExpressGatewayServiceNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsExpressGatewayServiceNetworkConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServiceNetworkConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[];
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnets - computed: true, optional: true, required: false
  private _subnets?: string[];
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#log_group EcsExpressGatewayService#log_group}
  */
  readonly logGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#log_stream_prefix EcsExpressGatewayService#log_stream_prefix}
  */
  readonly logStreamPrefix?: string;
}

export function ecsExpressGatewayServicePrimaryContainerAwsLogsConfigurationToTerraform(struct?: EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_group: cdktn.stringToTerraform(struct!.logGroup),
    log_stream_prefix: cdktn.stringToTerraform(struct!.logStreamPrefix),
  }
}


export function ecsExpressGatewayServicePrimaryContainerAwsLogsConfigurationToHclTerraform(struct?: EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_group: {
      value: cdktn.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream_prefix: {
      value: cdktn.stringToHclTerraform(struct!.logStreamPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    if (this._logStreamPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamPrefix = this._logStreamPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroup = undefined;
      this._logStreamPrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroup = value.logGroup;
      this._logStreamPrefix = value.logStreamPrefix;
    }
  }

  // log_group - computed: true, optional: true, required: false
  private _logGroup?: string;
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  public resetLogGroup() {
    this._logGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }

  // log_stream_prefix - computed: true, optional: true, required: false
  private _logStreamPrefix?: string;
  public get logStreamPrefix() {
    return this.getStringAttribute('log_stream_prefix');
  }
  public set logStreamPrefix(value: string) {
    this._logStreamPrefix = value;
  }
  public resetLogStreamPrefix() {
    this._logStreamPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamPrefixInput() {
    return this._logStreamPrefix;
  }
}
export interface EcsExpressGatewayServicePrimaryContainerEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#value EcsExpressGatewayService#value}
  */
  readonly value?: string;
}

export function ecsExpressGatewayServicePrimaryContainerEnvironmentToTerraform(struct?: EcsExpressGatewayServicePrimaryContainerEnvironment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ecsExpressGatewayServicePrimaryContainerEnvironmentToHclTerraform(struct?: EcsExpressGatewayServicePrimaryContainerEnvironment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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

export class EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcsExpressGatewayServicePrimaryContainerEnvironment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServicePrimaryContainerEnvironment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class EcsExpressGatewayServicePrimaryContainerEnvironmentList extends cdktn.ComplexList {
  public internalValue? : EcsExpressGatewayServicePrimaryContainerEnvironment[] | cdktn.IResolvable

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
  public get(index: number): EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference {
    return new EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsExpressGatewayServicePrimaryContainerRepositoryCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#credentials_parameter EcsExpressGatewayService#credentials_parameter}
  */
  readonly credentialsParameter?: string;
}

export function ecsExpressGatewayServicePrimaryContainerRepositoryCredentialsToTerraform(struct?: EcsExpressGatewayServicePrimaryContainerRepositoryCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credentials_parameter: cdktn.stringToTerraform(struct!.credentialsParameter),
  }
}


export function ecsExpressGatewayServicePrimaryContainerRepositoryCredentialsToHclTerraform(struct?: EcsExpressGatewayServicePrimaryContainerRepositoryCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credentials_parameter: {
      value: cdktn.stringToHclTerraform(struct!.credentialsParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsExpressGatewayServicePrimaryContainerRepositoryCredentials | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsParameter = this._credentialsParameter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServicePrimaryContainerRepositoryCredentials | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsParameter = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsParameter = value.credentialsParameter;
    }
  }

  // credentials_parameter - computed: true, optional: true, required: false
  private _credentialsParameter?: string;
  public get credentialsParameter() {
    return this.getStringAttribute('credentials_parameter');
  }
  public set credentialsParameter(value: string) {
    this._credentialsParameter = value;
  }
  public resetCredentialsParameter() {
    this._credentialsParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsParameterInput() {
    return this._credentialsParameter;
  }
}
export interface EcsExpressGatewayServicePrimaryContainerSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#value_from EcsExpressGatewayService#value_from}
  */
  readonly valueFrom?: string;
}

export function ecsExpressGatewayServicePrimaryContainerSecretsToTerraform(struct?: EcsExpressGatewayServicePrimaryContainerSecrets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value_from: cdktn.stringToTerraform(struct!.valueFrom),
  }
}


export function ecsExpressGatewayServicePrimaryContainerSecretsToHclTerraform(struct?: EcsExpressGatewayServicePrimaryContainerSecrets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: cdktn.stringToHclTerraform(struct!.valueFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsExpressGatewayServicePrimaryContainerSecretsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcsExpressGatewayServicePrimaryContainerSecrets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServicePrimaryContainerSecrets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueFrom = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueFrom = value.valueFrom;
    }
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

  // value_from - computed: true, optional: true, required: false
  private _valueFrom?: string;
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
  public set valueFrom(value: string) {
    this._valueFrom = value;
  }
  public resetValueFrom() {
    this._valueFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom;
  }
}

export class EcsExpressGatewayServicePrimaryContainerSecretsList extends cdktn.ComplexList {
  public internalValue? : EcsExpressGatewayServicePrimaryContainerSecrets[] | cdktn.IResolvable

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
  public get(index: number): EcsExpressGatewayServicePrimaryContainerSecretsOutputReference {
    return new EcsExpressGatewayServicePrimaryContainerSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsExpressGatewayServicePrimaryContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#aws_logs_configuration EcsExpressGatewayService#aws_logs_configuration}
  */
  readonly awsLogsConfiguration?: EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#command EcsExpressGatewayService#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#container_port EcsExpressGatewayService#container_port}
  */
  readonly containerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#environment EcsExpressGatewayService#environment}
  */
  readonly environment?: EcsExpressGatewayServicePrimaryContainerEnvironment[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#image EcsExpressGatewayService#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#repository_credentials EcsExpressGatewayService#repository_credentials}
  */
  readonly repositoryCredentials?: EcsExpressGatewayServicePrimaryContainerRepositoryCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#secrets EcsExpressGatewayService#secrets}
  */
  readonly secrets?: EcsExpressGatewayServicePrimaryContainerSecrets[] | cdktn.IResolvable;
}

export function ecsExpressGatewayServicePrimaryContainerToTerraform(struct?: EcsExpressGatewayServicePrimaryContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_logs_configuration: ecsExpressGatewayServicePrimaryContainerAwsLogsConfigurationToTerraform(struct!.awsLogsConfiguration),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    container_port: cdktn.numberToTerraform(struct!.containerPort),
    environment: cdktn.listMapper(ecsExpressGatewayServicePrimaryContainerEnvironmentToTerraform, false)(struct!.environment),
    image: cdktn.stringToTerraform(struct!.image),
    repository_credentials: ecsExpressGatewayServicePrimaryContainerRepositoryCredentialsToTerraform(struct!.repositoryCredentials),
    secrets: cdktn.listMapper(ecsExpressGatewayServicePrimaryContainerSecretsToTerraform, false)(struct!.secrets),
  }
}


export function ecsExpressGatewayServicePrimaryContainerToHclTerraform(struct?: EcsExpressGatewayServicePrimaryContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_logs_configuration: {
      value: ecsExpressGatewayServicePrimaryContainerAwsLogsConfigurationToHclTerraform(struct!.awsLogsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_port: {
      value: cdktn.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    environment: {
      value: cdktn.listMapperHcl(ecsExpressGatewayServicePrimaryContainerEnvironmentToHclTerraform, false)(struct!.environment),
      isBlock: true,
      type: "list",
      storageClassType: "EcsExpressGatewayServicePrimaryContainerEnvironmentList",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_credentials: {
      value: ecsExpressGatewayServicePrimaryContainerRepositoryCredentialsToHclTerraform(struct!.repositoryCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "EcsExpressGatewayServicePrimaryContainerRepositoryCredentials",
    },
    secrets: {
      value: cdktn.listMapperHcl(ecsExpressGatewayServicePrimaryContainerSecretsToHclTerraform, false)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "EcsExpressGatewayServicePrimaryContainerSecretsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsExpressGatewayServicePrimaryContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsExpressGatewayServicePrimaryContainer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsLogsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsLogsConfiguration = this._awsLogsConfiguration?.internalValue;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._repositoryCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryCredentials = this._repositoryCredentials?.internalValue;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServicePrimaryContainer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsLogsConfiguration.internalValue = undefined;
      this._command = undefined;
      this._containerPort = undefined;
      this._environment.internalValue = undefined;
      this._image = undefined;
      this._repositoryCredentials.internalValue = undefined;
      this._secrets.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsLogsConfiguration.internalValue = value.awsLogsConfiguration;
      this._command = value.command;
      this._containerPort = value.containerPort;
      this._environment.internalValue = value.environment;
      this._image = value.image;
      this._repositoryCredentials.internalValue = value.repositoryCredentials;
      this._secrets.internalValue = value.secrets;
    }
  }

  // aws_logs_configuration - computed: true, optional: true, required: false
  private _awsLogsConfiguration = new EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference(this, "aws_logs_configuration");
  public get awsLogsConfiguration() {
    return this._awsLogsConfiguration;
  }
  public putAwsLogsConfiguration(value: EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration) {
    this._awsLogsConfiguration.internalValue = value;
  }
  public resetAwsLogsConfiguration() {
    this._awsLogsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsLogsConfigurationInput() {
    return this._awsLogsConfiguration.internalValue;
  }

  // command - computed: true, optional: true, required: false
  private _command?: string[];
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // container_port - computed: true, optional: true, required: false
  private _containerPort?: number;
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  public resetContainerPort() {
    this._containerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // environment - computed: true, optional: true, required: false
  private _environment = new EcsExpressGatewayServicePrimaryContainerEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: EcsExpressGatewayServicePrimaryContainerEnvironment[] | cdktn.IResolvable) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string;
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // repository_credentials - computed: true, optional: true, required: false
  private _repositoryCredentials = new EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference(this, "repository_credentials");
  public get repositoryCredentials() {
    return this._repositoryCredentials;
  }
  public putRepositoryCredentials(value: EcsExpressGatewayServicePrimaryContainerRepositoryCredentials) {
    this._repositoryCredentials.internalValue = value;
  }
  public resetRepositoryCredentials() {
    this._repositoryCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCredentialsInput() {
    return this._repositoryCredentials.internalValue;
  }

  // secrets - computed: true, optional: true, required: false
  private _secrets = new EcsExpressGatewayServicePrimaryContainerSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: EcsExpressGatewayServicePrimaryContainerSecrets[] | cdktn.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }
}
export interface EcsExpressGatewayServiceScalingTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#auto_scaling_metric EcsExpressGatewayService#auto_scaling_metric}
  */
  readonly autoScalingMetric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#auto_scaling_target_value EcsExpressGatewayService#auto_scaling_target_value}
  */
  readonly autoScalingTargetValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#max_task_count EcsExpressGatewayService#max_task_count}
  */
  readonly maxTaskCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#min_task_count EcsExpressGatewayService#min_task_count}
  */
  readonly minTaskCount?: number;
}

export function ecsExpressGatewayServiceScalingTargetToTerraform(struct?: EcsExpressGatewayServiceScalingTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_scaling_metric: cdktn.stringToTerraform(struct!.autoScalingMetric),
    auto_scaling_target_value: cdktn.numberToTerraform(struct!.autoScalingTargetValue),
    max_task_count: cdktn.numberToTerraform(struct!.maxTaskCount),
    min_task_count: cdktn.numberToTerraform(struct!.minTaskCount),
  }
}


export function ecsExpressGatewayServiceScalingTargetToHclTerraform(struct?: EcsExpressGatewayServiceScalingTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_scaling_metric: {
      value: cdktn.stringToHclTerraform(struct!.autoScalingMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_scaling_target_value: {
      value: cdktn.numberToHclTerraform(struct!.autoScalingTargetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_task_count: {
      value: cdktn.numberToHclTerraform(struct!.maxTaskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_task_count: {
      value: cdktn.numberToHclTerraform(struct!.minTaskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsExpressGatewayServiceScalingTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsExpressGatewayServiceScalingTarget | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScalingMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingMetric = this._autoScalingMetric;
    }
    if (this._autoScalingTargetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingTargetValue = this._autoScalingTargetValue;
    }
    if (this._maxTaskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTaskCount = this._maxTaskCount;
    }
    if (this._minTaskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTaskCount = this._minTaskCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServiceScalingTarget | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoScalingMetric = undefined;
      this._autoScalingTargetValue = undefined;
      this._maxTaskCount = undefined;
      this._minTaskCount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoScalingMetric = value.autoScalingMetric;
      this._autoScalingTargetValue = value.autoScalingTargetValue;
      this._maxTaskCount = value.maxTaskCount;
      this._minTaskCount = value.minTaskCount;
    }
  }

  // auto_scaling_metric - computed: true, optional: true, required: false
  private _autoScalingMetric?: string;
  public get autoScalingMetric() {
    return this.getStringAttribute('auto_scaling_metric');
  }
  public set autoScalingMetric(value: string) {
    this._autoScalingMetric = value;
  }
  public resetAutoScalingMetric() {
    this._autoScalingMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingMetricInput() {
    return this._autoScalingMetric;
  }

  // auto_scaling_target_value - computed: true, optional: true, required: false
  private _autoScalingTargetValue?: number;
  public get autoScalingTargetValue() {
    return this.getNumberAttribute('auto_scaling_target_value');
  }
  public set autoScalingTargetValue(value: number) {
    this._autoScalingTargetValue = value;
  }
  public resetAutoScalingTargetValue() {
    this._autoScalingTargetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingTargetValueInput() {
    return this._autoScalingTargetValue;
  }

  // max_task_count - computed: true, optional: true, required: false
  private _maxTaskCount?: number;
  public get maxTaskCount() {
    return this.getNumberAttribute('max_task_count');
  }
  public set maxTaskCount(value: number) {
    this._maxTaskCount = value;
  }
  public resetMaxTaskCount() {
    this._maxTaskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskCountInput() {
    return this._maxTaskCount;
  }

  // min_task_count - computed: true, optional: true, required: false
  private _minTaskCount?: number;
  public get minTaskCount() {
    return this.getNumberAttribute('min_task_count');
  }
  public set minTaskCount(value: number) {
    this._minTaskCount = value;
  }
  public resetMinTaskCount() {
    this._minTaskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTaskCountInput() {
    return this._minTaskCount;
  }
}
export interface EcsExpressGatewayServiceStatus {
}

export function ecsExpressGatewayServiceStatusToTerraform(struct?: EcsExpressGatewayServiceStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ecsExpressGatewayServiceStatusToHclTerraform(struct?: EcsExpressGatewayServiceStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EcsExpressGatewayServiceStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsExpressGatewayServiceStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsExpressGatewayServiceStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}
export interface EcsExpressGatewayServiceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#key EcsExpressGatewayService#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#value EcsExpressGatewayService#value}
  */
  readonly value?: string;
}

export function ecsExpressGatewayServiceTagsToTerraform(struct?: EcsExpressGatewayServiceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ecsExpressGatewayServiceTagsToHclTerraform(struct?: EcsExpressGatewayServiceTags | cdktn.IResolvable): any {
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

export class EcsExpressGatewayServiceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcsExpressGatewayServiceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EcsExpressGatewayServiceTags | cdktn.IResolvable | undefined) {
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

export class EcsExpressGatewayServiceTagsList extends cdktn.ComplexList {
  public internalValue? : EcsExpressGatewayServiceTags[] | cdktn.IResolvable

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
  public get(index: number): EcsExpressGatewayServiceTagsOutputReference {
    return new EcsExpressGatewayServiceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service awscc_ecs_express_gateway_service}
*/
export class EcsExpressGatewayService extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ecs_express_gateway_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EcsExpressGatewayService resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsExpressGatewayService to import
  * @param importFromId The id of the existing EcsExpressGatewayService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsExpressGatewayService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecs_express_gateway_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_express_gateway_service awscc_ecs_express_gateway_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsExpressGatewayServiceConfig
  */
  public constructor(scope: Construct, id: string, config: EcsExpressGatewayServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecs_express_gateway_service',
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
    this._cluster = config.cluster;
    this._cpu = config.cpu;
    this._executionRoleArn = config.executionRoleArn;
    this._healthCheckPath = config.healthCheckPath;
    this._infrastructureRoleArn = config.infrastructureRoleArn;
    this._memory = config.memory;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._primaryContainer.internalValue = config.primaryContainer;
    this._scalingTarget.internalValue = config.scalingTarget;
    this._serviceName = config.serviceName;
    this._tags.internalValue = config.tags;
    this._taskDefinitionArn = config.taskDefinitionArn;
    this._taskRoleArn = config.taskRoleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_configurations - computed: true, optional: false, required: false
  private _activeConfigurations = new EcsExpressGatewayServiceActiveConfigurationsList(this, "active_configurations", false);
  public get activeConfigurations() {
    return this._activeConfigurations;
  }

  // cluster - computed: true, optional: true, required: false
  private _cluster?: string;
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: string;
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // ecs_managed_resource_arns - computed: true, optional: false, required: false
  private _ecsManagedResourceArns = new EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference(this, "ecs_managed_resource_arns");
  public get ecsManagedResourceArns() {
    return this._ecsManagedResourceArns;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // execution_role_arn - computed: true, optional: true, required: false
  private _executionRoleArn?: string;
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // health_check_path - computed: true, optional: true, required: false
  private _healthCheckPath?: string;
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }
  public set healthCheckPath(value: string) {
    this._healthCheckPath = value;
  }
  public resetHealthCheckPath() {
    this._healthCheckPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPathInput() {
    return this._healthCheckPath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // infrastructure_role_arn - computed: false, optional: false, required: true
  private _infrastructureRoleArn?: string;
  public get infrastructureRoleArn() {
    return this.getStringAttribute('infrastructure_role_arn');
  }
  public set infrastructureRoleArn(value: string) {
    this._infrastructureRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureRoleArnInput() {
    return this._infrastructureRoleArn;
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: string;
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // network_configuration - computed: true, optional: true, required: false
  private _networkConfiguration = new EcsExpressGatewayServiceNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: EcsExpressGatewayServiceNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // primary_container - computed: true, optional: true, required: false
  private _primaryContainer = new EcsExpressGatewayServicePrimaryContainerOutputReference(this, "primary_container");
  public get primaryContainer() {
    return this._primaryContainer;
  }
  public putPrimaryContainer(value: EcsExpressGatewayServicePrimaryContainer) {
    this._primaryContainer.internalValue = value;
  }
  public resetPrimaryContainer() {
    this._primaryContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryContainerInput() {
    return this._primaryContainer.internalValue;
  }

  // scaling_target - computed: true, optional: true, required: false
  private _scalingTarget = new EcsExpressGatewayServiceScalingTargetOutputReference(this, "scaling_target");
  public get scalingTarget() {
    return this._scalingTarget;
  }
  public putScalingTarget(value: EcsExpressGatewayServiceScalingTarget) {
    this._scalingTarget.internalValue = value;
  }
  public resetScalingTarget() {
    this._scalingTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTargetInput() {
    return this._scalingTarget.internalValue;
  }

  // service_arn - computed: true, optional: false, required: false
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string;
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // status - computed: true, optional: false, required: false
  private _status = new EcsExpressGatewayServiceStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new EcsExpressGatewayServiceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: EcsExpressGatewayServiceTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // task_definition_arn - computed: true, optional: true, required: false
  private _taskDefinitionArn?: string;
  public get taskDefinitionArn() {
    return this.getStringAttribute('task_definition_arn');
  }
  public set taskDefinitionArn(value: string) {
    this._taskDefinitionArn = value;
  }
  public resetTaskDefinitionArn() {
    this._taskDefinitionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDefinitionArnInput() {
    return this._taskDefinitionArn;
  }

  // task_role_arn - computed: true, optional: true, required: false
  private _taskRoleArn?: string;
  public get taskRoleArn() {
    return this.getStringAttribute('task_role_arn');
  }
  public set taskRoleArn(value: string) {
    this._taskRoleArn = value;
  }
  public resetTaskRoleArn() {
    this._taskRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskRoleArnInput() {
    return this._taskRoleArn;
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
      cluster: cdktn.stringToTerraform(this._cluster),
      cpu: cdktn.stringToTerraform(this._cpu),
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      health_check_path: cdktn.stringToTerraform(this._healthCheckPath),
      infrastructure_role_arn: cdktn.stringToTerraform(this._infrastructureRoleArn),
      memory: cdktn.stringToTerraform(this._memory),
      network_configuration: ecsExpressGatewayServiceNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      primary_container: ecsExpressGatewayServicePrimaryContainerToTerraform(this._primaryContainer.internalValue),
      scaling_target: ecsExpressGatewayServiceScalingTargetToTerraform(this._scalingTarget.internalValue),
      service_name: cdktn.stringToTerraform(this._serviceName),
      tags: cdktn.listMapper(ecsExpressGatewayServiceTagsToTerraform, false)(this._tags.internalValue),
      task_definition_arn: cdktn.stringToTerraform(this._taskDefinitionArn),
      task_role_arn: cdktn.stringToTerraform(this._taskRoleArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktn.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu: {
        value: cdktn.stringToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._executionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_path: {
        value: cdktn.stringToHclTerraform(this._healthCheckPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      infrastructure_role_arn: {
        value: cdktn.stringToHclTerraform(this._infrastructureRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktn.stringToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_configuration: {
        value: ecsExpressGatewayServiceNetworkConfigurationToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcsExpressGatewayServiceNetworkConfiguration",
      },
      primary_container: {
        value: ecsExpressGatewayServicePrimaryContainerToHclTerraform(this._primaryContainer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcsExpressGatewayServicePrimaryContainer",
      },
      scaling_target: {
        value: ecsExpressGatewayServiceScalingTargetToHclTerraform(this._scalingTarget.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcsExpressGatewayServiceScalingTarget",
      },
      service_name: {
        value: cdktn.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(ecsExpressGatewayServiceTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsExpressGatewayServiceTagsList",
      },
      task_definition_arn: {
        value: cdktn.stringToHclTerraform(this._taskDefinitionArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_role_arn: {
        value: cdktn.stringToHclTerraform(this._taskRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
