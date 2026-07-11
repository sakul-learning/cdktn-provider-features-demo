// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ecs_express_gateway_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEcsExpressGatewayServiceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ecs_express_gateway_service#id DataAwsccEcsExpressGatewayService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths {
}

export function dataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsToTerraform(struct?: DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsToHclTerraform(struct?: DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPaths | undefined) {
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

export class DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference {
    return new DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration {
}

export function dataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationToTerraform(struct?: DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationToHclTerraform(struct?: DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration | undefined) {
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
export interface DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration {
}

export function dataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationToTerraform(struct?: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationToHclTerraform(struct?: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration | undefined) {
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
export interface DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment {
}

export function dataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentToTerraform(struct?: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentToHclTerraform(struct?: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment | undefined) {
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

export class DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference {
    return new DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials {
}

export function dataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsToTerraform(struct?: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsToHclTerraform(struct?: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials | undefined) {
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
export interface DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets {
}

export function dataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsToTerraform(struct?: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsToHclTerraform(struct?: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets | undefined) {
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

export class DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference {
    return new DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer {
}

export function dataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerToTerraform(struct?: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerToHclTerraform(struct?: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_logs_configuration - computed: true, optional: false, required: false
  private _awsLogsConfiguration = new DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference(this, "aws_logs_configuration");
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
  private _environment = new DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // repository_credentials - computed: true, optional: false, required: false
  private _repositoryCredentials = new DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference(this, "repository_credentials");
  public get repositoryCredentials() {
    return this._repositoryCredentials;
  }

  // secrets - computed: true, optional: false, required: false
  private _secrets = new DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
}
export interface DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget {
}

export function dataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetToTerraform(struct?: DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetToHclTerraform(struct?: DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTarget | undefined) {
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
export interface DataAwsccEcsExpressGatewayServiceActiveConfigurations {
}

export function dataAwsccEcsExpressGatewayServiceActiveConfigurationsToTerraform(struct?: DataAwsccEcsExpressGatewayServiceActiveConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServiceActiveConfigurationsToHclTerraform(struct?: DataAwsccEcsExpressGatewayServiceActiveConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsExpressGatewayServiceActiveConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServiceActiveConfigurations | undefined) {
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
  private _ingressPaths = new DataAwsccEcsExpressGatewayServiceActiveConfigurationsIngressPathsList(this, "ingress_paths", false);
  public get ingressPaths() {
    return this._ingressPaths;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataAwsccEcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // primary_container - computed: true, optional: false, required: false
  private _primaryContainer = new DataAwsccEcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference(this, "primary_container");
  public get primaryContainer() {
    return this._primaryContainer;
  }

  // scaling_target - computed: true, optional: false, required: false
  private _scalingTarget = new DataAwsccEcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference(this, "scaling_target");
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

export class DataAwsccEcsExpressGatewayServiceActiveConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference {
    return new DataAwsccEcsExpressGatewayServiceActiveConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling {
}

export function dataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingToTerraform(struct?: DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingToHclTerraform(struct?: DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling | undefined) {
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
export interface DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath {
}

export function dataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathToTerraform(struct?: DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathToHclTerraform(struct?: DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPath | undefined) {
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
export interface DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns {
}

export function dataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsToTerraform(struct?: DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsToHclTerraform(struct?: DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServiceEcsManagedResourceArns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_scaling - computed: true, optional: false, required: false
  private _autoScaling = new DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference(this, "auto_scaling");
  public get autoScaling() {
    return this._autoScaling;
  }

  // ingress_path - computed: true, optional: false, required: false
  private _ingressPath = new DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference(this, "ingress_path");
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
export interface DataAwsccEcsExpressGatewayServiceNetworkConfiguration {
}

export function dataAwsccEcsExpressGatewayServiceNetworkConfigurationToTerraform(struct?: DataAwsccEcsExpressGatewayServiceNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServiceNetworkConfigurationToHclTerraform(struct?: DataAwsccEcsExpressGatewayServiceNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsExpressGatewayServiceNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServiceNetworkConfiguration | undefined) {
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
export interface DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration {
}

export function dataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationToTerraform(struct?: DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationToHclTerraform(struct?: DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration | undefined) {
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
export interface DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment {
}

export function dataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentToTerraform(struct?: DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentToHclTerraform(struct?: DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironment | undefined) {
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

export class DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference {
    return new DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials {
}

export function dataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsToTerraform(struct?: DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsToHclTerraform(struct?: DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentials | undefined) {
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
export interface DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets {
}

export function dataAwsccEcsExpressGatewayServicePrimaryContainerSecretsToTerraform(struct?: DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServicePrimaryContainerSecretsToHclTerraform(struct?: DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServicePrimaryContainerSecrets | undefined) {
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

export class DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference {
    return new DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsExpressGatewayServicePrimaryContainer {
}

export function dataAwsccEcsExpressGatewayServicePrimaryContainerToTerraform(struct?: DataAwsccEcsExpressGatewayServicePrimaryContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServicePrimaryContainerToHclTerraform(struct?: DataAwsccEcsExpressGatewayServicePrimaryContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsExpressGatewayServicePrimaryContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServicePrimaryContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_logs_configuration - computed: true, optional: false, required: false
  private _awsLogsConfiguration = new DataAwsccEcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference(this, "aws_logs_configuration");
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
  private _environment = new DataAwsccEcsExpressGatewayServicePrimaryContainerEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // repository_credentials - computed: true, optional: false, required: false
  private _repositoryCredentials = new DataAwsccEcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference(this, "repository_credentials");
  public get repositoryCredentials() {
    return this._repositoryCredentials;
  }

  // secrets - computed: true, optional: false, required: false
  private _secrets = new DataAwsccEcsExpressGatewayServicePrimaryContainerSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
}
export interface DataAwsccEcsExpressGatewayServiceScalingTarget {
}

export function dataAwsccEcsExpressGatewayServiceScalingTargetToTerraform(struct?: DataAwsccEcsExpressGatewayServiceScalingTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServiceScalingTargetToHclTerraform(struct?: DataAwsccEcsExpressGatewayServiceScalingTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsExpressGatewayServiceScalingTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServiceScalingTarget | undefined) {
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
export interface DataAwsccEcsExpressGatewayServiceStatus {
}

export function dataAwsccEcsExpressGatewayServiceStatusToTerraform(struct?: DataAwsccEcsExpressGatewayServiceStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServiceStatusToHclTerraform(struct?: DataAwsccEcsExpressGatewayServiceStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServiceStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsExpressGatewayServiceStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServiceStatus | undefined) {
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
export interface DataAwsccEcsExpressGatewayServiceTags {
}

export function dataAwsccEcsExpressGatewayServiceTagsToTerraform(struct?: DataAwsccEcsExpressGatewayServiceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsExpressGatewayServiceTagsToHclTerraform(struct?: DataAwsccEcsExpressGatewayServiceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsExpressGatewayServiceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsExpressGatewayServiceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsExpressGatewayServiceTags | undefined) {
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

export class DataAwsccEcsExpressGatewayServiceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsExpressGatewayServiceTagsOutputReference {
    return new DataAwsccEcsExpressGatewayServiceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ecs_express_gateway_service awscc_ecs_express_gateway_service}
*/
export class DataAwsccEcsExpressGatewayService extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ecs_express_gateway_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEcsExpressGatewayService resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEcsExpressGatewayService to import
  * @param importFromId The id of the existing DataAwsccEcsExpressGatewayService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ecs_express_gateway_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEcsExpressGatewayService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecs_express_gateway_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ecs_express_gateway_service awscc_ecs_express_gateway_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEcsExpressGatewayServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEcsExpressGatewayServiceConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_configurations - computed: true, optional: false, required: false
  private _activeConfigurations = new DataAwsccEcsExpressGatewayServiceActiveConfigurationsList(this, "active_configurations", false);
  public get activeConfigurations() {
    return this._activeConfigurations;
  }

  // cluster - computed: true, optional: false, required: false
  public get cluster() {
    return this.getStringAttribute('cluster');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // ecs_managed_resource_arns - computed: true, optional: false, required: false
  private _ecsManagedResourceArns = new DataAwsccEcsExpressGatewayServiceEcsManagedResourceArnsOutputReference(this, "ecs_managed_resource_arns");
  public get ecsManagedResourceArns() {
    return this._ecsManagedResourceArns;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // health_check_path - computed: true, optional: false, required: false
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
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

  // infrastructure_role_arn - computed: true, optional: false, required: false
  public get infrastructureRoleArn() {
    return this.getStringAttribute('infrastructure_role_arn');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataAwsccEcsExpressGatewayServiceNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // primary_container - computed: true, optional: false, required: false
  private _primaryContainer = new DataAwsccEcsExpressGatewayServicePrimaryContainerOutputReference(this, "primary_container");
  public get primaryContainer() {
    return this._primaryContainer;
  }

  // scaling_target - computed: true, optional: false, required: false
  private _scalingTarget = new DataAwsccEcsExpressGatewayServiceScalingTargetOutputReference(this, "scaling_target");
  public get scalingTarget() {
    return this._scalingTarget;
  }

  // service_arn - computed: true, optional: false, required: false
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataAwsccEcsExpressGatewayServiceStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEcsExpressGatewayServiceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // task_definition_arn - computed: true, optional: false, required: false
  public get taskDefinitionArn() {
    return this.getStringAttribute('task_definition_arn');
  }

  // task_role_arn - computed: true, optional: false, required: false
  public get taskRoleArn() {
    return this.getStringAttribute('task_role_arn');
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
