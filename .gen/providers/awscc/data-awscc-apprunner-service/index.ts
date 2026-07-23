// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/apprunner_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccApprunnerServiceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/apprunner_service#id DataAwsccApprunnerService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccApprunnerServiceEncryptionConfiguration {
}

export function dataAwsccApprunnerServiceEncryptionConfigurationToTerraform(struct?: DataAwsccApprunnerServiceEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceEncryptionConfigurationToHclTerraform(struct?: DataAwsccApprunnerServiceEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApprunnerServiceEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
}
export interface DataAwsccApprunnerServiceHealthCheckConfiguration {
}

export function dataAwsccApprunnerServiceHealthCheckConfigurationToTerraform(struct?: DataAwsccApprunnerServiceHealthCheckConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceHealthCheckConfigurationToHclTerraform(struct?: DataAwsccApprunnerServiceHealthCheckConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceHealthCheckConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApprunnerServiceHealthCheckConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceHealthCheckConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // healthy_threshold - computed: true, optional: false, required: false
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // unhealthy_threshold - computed: true, optional: false, required: false
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
}
export interface DataAwsccApprunnerServiceInstanceConfiguration {
}

export function dataAwsccApprunnerServiceInstanceConfigurationToTerraform(struct?: DataAwsccApprunnerServiceInstanceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceInstanceConfigurationToHclTerraform(struct?: DataAwsccApprunnerServiceInstanceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceInstanceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApprunnerServiceInstanceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceInstanceConfiguration | undefined) {
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

  // instance_role_arn - computed: true, optional: false, required: false
  public get instanceRoleArn() {
    return this.getStringAttribute('instance_role_arn');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }
}
export interface DataAwsccApprunnerServiceNetworkConfigurationEgressConfiguration {
}

export function dataAwsccApprunnerServiceNetworkConfigurationEgressConfigurationToTerraform(struct?: DataAwsccApprunnerServiceNetworkConfigurationEgressConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceNetworkConfigurationEgressConfigurationToHclTerraform(struct?: DataAwsccApprunnerServiceNetworkConfigurationEgressConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApprunnerServiceNetworkConfigurationEgressConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceNetworkConfigurationEgressConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // egress_type - computed: true, optional: false, required: false
  public get egressType() {
    return this.getStringAttribute('egress_type');
  }

  // vpc_connector_arn - computed: true, optional: false, required: false
  public get vpcConnectorArn() {
    return this.getStringAttribute('vpc_connector_arn');
  }
}
export interface DataAwsccApprunnerServiceNetworkConfigurationIngressConfiguration {
}

export function dataAwsccApprunnerServiceNetworkConfigurationIngressConfigurationToTerraform(struct?: DataAwsccApprunnerServiceNetworkConfigurationIngressConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceNetworkConfigurationIngressConfigurationToHclTerraform(struct?: DataAwsccApprunnerServiceNetworkConfigurationIngressConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApprunnerServiceNetworkConfigurationIngressConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceNetworkConfigurationIngressConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_publicly_accessible - computed: true, optional: false, required: false
  public get isPubliclyAccessible() {
    return this.getBooleanAttribute('is_publicly_accessible');
  }
}
export interface DataAwsccApprunnerServiceNetworkConfiguration {
}

export function dataAwsccApprunnerServiceNetworkConfigurationToTerraform(struct?: DataAwsccApprunnerServiceNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceNetworkConfigurationToHclTerraform(struct?: DataAwsccApprunnerServiceNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApprunnerServiceNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // egress_configuration - computed: true, optional: false, required: false
  private _egressConfiguration = new DataAwsccApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference(this, "egress_configuration");
  public get egressConfiguration() {
    return this._egressConfiguration;
  }

  // ingress_configuration - computed: true, optional: false, required: false
  private _ingressConfiguration = new DataAwsccApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference(this, "ingress_configuration");
  public get ingressConfiguration() {
    return this._ingressConfiguration;
  }

  // ip_address_type - computed: true, optional: false, required: false
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
}
export interface DataAwsccApprunnerServiceObservabilityConfiguration {
}

export function dataAwsccApprunnerServiceObservabilityConfigurationToTerraform(struct?: DataAwsccApprunnerServiceObservabilityConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceObservabilityConfigurationToHclTerraform(struct?: DataAwsccApprunnerServiceObservabilityConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceObservabilityConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApprunnerServiceObservabilityConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceObservabilityConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // observability_configuration_arn - computed: true, optional: false, required: false
  public get observabilityConfigurationArn() {
    return this.getStringAttribute('observability_configuration_arn');
  }

  // observability_enabled - computed: true, optional: false, required: false
  public get observabilityEnabled() {
    return this.getBooleanAttribute('observability_enabled');
  }
}
export interface DataAwsccApprunnerServiceSourceConfigurationAuthenticationConfiguration {
}

export function dataAwsccApprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationAuthenticationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceSourceConfigurationAuthenticationConfigurationToHclTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationAuthenticationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApprunnerServiceSourceConfigurationAuthenticationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceSourceConfigurationAuthenticationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_role_arn - computed: true, optional: false, required: false
  public get accessRoleArn() {
    return this.getStringAttribute('access_role_arn');
  }

  // connection_arn - computed: true, optional: false, required: false
  public get connectionArn() {
    return this.getStringAttribute('connection_arn');
  }
}
export interface DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets {
}

export function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsToHclTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets | undefined) {
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

export class DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference {
    return new DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables {
}

export function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesToHclTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables | undefined) {
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

export class DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference {
    return new DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {
}

export function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToHclTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build_command - computed: true, optional: false, required: false
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // runtime_environment_secrets - computed: true, optional: false, required: false
  private _runtimeEnvironmentSecrets = new DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList(this, "runtime_environment_secrets", false);
  public get runtimeEnvironmentSecrets() {
    return this._runtimeEnvironmentSecrets;
  }

  // runtime_environment_variables - computed: true, optional: false, required: false
  private _runtimeEnvironmentVariables = new DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList(this, "runtime_environment_variables", false);
  public get runtimeEnvironmentVariables() {
    return this._runtimeEnvironmentVariables;
  }

  // start_command - computed: true, optional: false, required: false
  public get startCommand() {
    return this.getStringAttribute('start_command');
  }
}
export interface DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration {
}

export function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToHclTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code_configuration_values - computed: true, optional: false, required: false
  private _codeConfigurationValues = new DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference(this, "code_configuration_values");
  public get codeConfigurationValues() {
    return this._codeConfigurationValues;
  }

  // configuration_source - computed: true, optional: false, required: false
  public get configurationSource() {
    return this.getStringAttribute('configuration_source');
  }
}
export interface DataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion {
}

export function dataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToHclTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion | undefined) {
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
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccApprunnerServiceSourceConfigurationCodeRepository {
}

export function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceSourceConfigurationCodeRepositoryToHclTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationCodeRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApprunnerServiceSourceConfigurationCodeRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceSourceConfigurationCodeRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code_configuration - computed: true, optional: false, required: false
  private _codeConfiguration = new DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference(this, "code_configuration");
  public get codeConfiguration() {
    return this._codeConfiguration;
  }

  // repository_url - computed: true, optional: false, required: false
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }

  // source_code_version - computed: true, optional: false, required: false
  private _sourceCodeVersion = new DataAwsccApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference(this, "source_code_version");
  public get sourceCodeVersion() {
    return this._sourceCodeVersion;
  }

  // source_directory - computed: true, optional: false, required: false
  public get sourceDirectory() {
    return this.getStringAttribute('source_directory');
  }
}
export interface DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets {
}

export function dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsToHclTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets | undefined) {
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

export class DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference {
    return new DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables {
}

export function dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesToHclTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables | undefined) {
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

export class DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference {
    return new DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration {
}

export function dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToHclTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // runtime_environment_secrets - computed: true, optional: false, required: false
  private _runtimeEnvironmentSecrets = new DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList(this, "runtime_environment_secrets", false);
  public get runtimeEnvironmentSecrets() {
    return this._runtimeEnvironmentSecrets;
  }

  // runtime_environment_variables - computed: true, optional: false, required: false
  private _runtimeEnvironmentVariables = new DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList(this, "runtime_environment_variables", false);
  public get runtimeEnvironmentVariables() {
    return this._runtimeEnvironmentVariables;
  }

  // start_command - computed: true, optional: false, required: false
  public get startCommand() {
    return this.getStringAttribute('start_command');
  }
}
export interface DataAwsccApprunnerServiceSourceConfigurationImageRepository {
}

export function dataAwsccApprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationImageRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceSourceConfigurationImageRepositoryToHclTerraform(struct?: DataAwsccApprunnerServiceSourceConfigurationImageRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceSourceConfigurationImageRepositoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApprunnerServiceSourceConfigurationImageRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceSourceConfigurationImageRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_configuration - computed: true, optional: false, required: false
  private _imageConfiguration = new DataAwsccApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference(this, "image_configuration");
  public get imageConfiguration() {
    return this._imageConfiguration;
  }

  // image_identifier - computed: true, optional: false, required: false
  public get imageIdentifier() {
    return this.getStringAttribute('image_identifier');
  }

  // image_repository_type - computed: true, optional: false, required: false
  public get imageRepositoryType() {
    return this.getStringAttribute('image_repository_type');
  }
}
export interface DataAwsccApprunnerServiceSourceConfiguration {
}

export function dataAwsccApprunnerServiceSourceConfigurationToTerraform(struct?: DataAwsccApprunnerServiceSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceSourceConfigurationToHclTerraform(struct?: DataAwsccApprunnerServiceSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApprunnerServiceSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_configuration - computed: true, optional: false, required: false
  private _authenticationConfiguration = new DataAwsccApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference(this, "authentication_configuration");
  public get authenticationConfiguration() {
    return this._authenticationConfiguration;
  }

  // auto_deployments_enabled - computed: true, optional: false, required: false
  public get autoDeploymentsEnabled() {
    return this.getBooleanAttribute('auto_deployments_enabled');
  }

  // code_repository - computed: true, optional: false, required: false
  private _codeRepository = new DataAwsccApprunnerServiceSourceConfigurationCodeRepositoryOutputReference(this, "code_repository");
  public get codeRepository() {
    return this._codeRepository;
  }

  // image_repository - computed: true, optional: false, required: false
  private _imageRepository = new DataAwsccApprunnerServiceSourceConfigurationImageRepositoryOutputReference(this, "image_repository");
  public get imageRepository() {
    return this._imageRepository;
  }
}
export interface DataAwsccApprunnerServiceTags {
}

export function dataAwsccApprunnerServiceTagsToTerraform(struct?: DataAwsccApprunnerServiceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApprunnerServiceTagsToHclTerraform(struct?: DataAwsccApprunnerServiceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApprunnerServiceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApprunnerServiceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApprunnerServiceTags | undefined) {
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

export class DataAwsccApprunnerServiceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApprunnerServiceTagsOutputReference {
    return new DataAwsccApprunnerServiceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/apprunner_service awscc_apprunner_service}
*/
export class DataAwsccApprunnerService extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apprunner_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccApprunnerService resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccApprunnerService to import
  * @param importFromId The id of the existing DataAwsccApprunnerService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/apprunner_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccApprunnerService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apprunner_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/apprunner_service awscc_apprunner_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApprunnerServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApprunnerServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apprunner_service',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_configuration_arn - computed: true, optional: false, required: false
  public get autoScalingConfigurationArn() {
    return this.getStringAttribute('auto_scaling_configuration_arn');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccApprunnerServiceEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // health_check_configuration - computed: true, optional: false, required: false
  private _healthCheckConfiguration = new DataAwsccApprunnerServiceHealthCheckConfigurationOutputReference(this, "health_check_configuration");
  public get healthCheckConfiguration() {
    return this._healthCheckConfiguration;
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

  // instance_configuration - computed: true, optional: false, required: false
  private _instanceConfiguration = new DataAwsccApprunnerServiceInstanceConfigurationOutputReference(this, "instance_configuration");
  public get instanceConfiguration() {
    return this._instanceConfiguration;
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataAwsccApprunnerServiceNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // observability_configuration - computed: true, optional: false, required: false
  private _observabilityConfiguration = new DataAwsccApprunnerServiceObservabilityConfigurationOutputReference(this, "observability_configuration");
  public get observabilityConfiguration() {
    return this._observabilityConfiguration;
  }

  // service_arn - computed: true, optional: false, required: false
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_url - computed: true, optional: false, required: false
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }

  // source_configuration - computed: true, optional: false, required: false
  private _sourceConfiguration = new DataAwsccApprunnerServiceSourceConfigurationOutputReference(this, "source_configuration");
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccApprunnerServiceTagsList(this, "tags", false);
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
