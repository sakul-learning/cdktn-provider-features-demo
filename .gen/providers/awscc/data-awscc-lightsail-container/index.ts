// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lightsail_container
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccLightsailContainerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lightsail_container#id DataAwsccLightsailContainer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment {
}

export function dataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentToTerraform(struct?: DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentToHclTerraform(struct?: DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // variable - computed: true, optional: false, required: false
  public get variable() {
    return this.getStringAttribute('variable');
  }
}

export class DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference {
    return new DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts {
}

export function dataAwsccLightsailContainerContainerServiceDeploymentContainersPortsToTerraform(struct?: DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailContainerContainerServiceDeploymentContainersPortsToHclTerraform(struct?: DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts | undefined) {
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

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference {
    return new DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLightsailContainerContainerServiceDeploymentContainers {
}

export function dataAwsccLightsailContainerContainerServiceDeploymentContainersToTerraform(struct?: DataAwsccLightsailContainerContainerServiceDeploymentContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailContainerContainerServiceDeploymentContainersToHclTerraform(struct?: DataAwsccLightsailContainerContainerServiceDeploymentContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLightsailContainerContainerServiceDeploymentContainers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailContainerContainerServiceDeploymentContainers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return cdktn.Fn.tolist(this.getListAttribute('command'));
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList(this, "environment", true);
  public get environment() {
    return this._environment;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList(this, "ports", true);
  public get ports() {
    return this._ports;
  }
}

export class DataAwsccLightsailContainerContainerServiceDeploymentContainersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference {
    return new DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig {
}

export function dataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigToTerraform(struct?: DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigToHclTerraform(struct?: DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig | undefined) {
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

  // interval_seconds - computed: true, optional: false, required: false
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // success_codes - computed: true, optional: false, required: false
  public get successCodes() {
    return this.getStringAttribute('success_codes');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }

  // unhealthy_threshold - computed: true, optional: false, required: false
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
}
export interface DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint {
}

export function dataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointToTerraform(struct?: DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointToHclTerraform(struct?: DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // container_port - computed: true, optional: false, required: false
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }

  // health_check_config - computed: true, optional: false, required: false
  private _healthCheckConfig = new DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference(this, "health_check_config");
  public get healthCheckConfig() {
    return this._healthCheckConfig;
  }
}
export interface DataAwsccLightsailContainerContainerServiceDeployment {
}

export function dataAwsccLightsailContainerContainerServiceDeploymentToTerraform(struct?: DataAwsccLightsailContainerContainerServiceDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailContainerContainerServiceDeploymentToHclTerraform(struct?: DataAwsccLightsailContainerContainerServiceDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailContainerContainerServiceDeploymentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLightsailContainerContainerServiceDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailContainerContainerServiceDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // containers - computed: true, optional: false, required: false
  private _containers = new DataAwsccLightsailContainerContainerServiceDeploymentContainersList(this, "containers", true);
  public get containers() {
    return this._containers;
  }

  // public_endpoint - computed: true, optional: false, required: false
  private _publicEndpoint = new DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference(this, "public_endpoint");
  public get publicEndpoint() {
    return this._publicEndpoint;
  }
}
export interface DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole {
}

export function dataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleToTerraform(struct?: DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleToHclTerraform(struct?: DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // principal_arn - computed: true, optional: false, required: false
  public get principalArn() {
    return this.getStringAttribute('principal_arn');
  }
}
export interface DataAwsccLightsailContainerPrivateRegistryAccess {
}

export function dataAwsccLightsailContainerPrivateRegistryAccessToTerraform(struct?: DataAwsccLightsailContainerPrivateRegistryAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailContainerPrivateRegistryAccessToHclTerraform(struct?: DataAwsccLightsailContainerPrivateRegistryAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailContainerPrivateRegistryAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLightsailContainerPrivateRegistryAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailContainerPrivateRegistryAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ecr_image_puller_role - computed: true, optional: false, required: false
  private _ecrImagePullerRole = new DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference(this, "ecr_image_puller_role");
  public get ecrImagePullerRole() {
    return this._ecrImagePullerRole;
  }
}
export interface DataAwsccLightsailContainerPublicDomainNames {
}

export function dataAwsccLightsailContainerPublicDomainNamesToTerraform(struct?: DataAwsccLightsailContainerPublicDomainNames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailContainerPublicDomainNamesToHclTerraform(struct?: DataAwsccLightsailContainerPublicDomainNames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailContainerPublicDomainNamesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLightsailContainerPublicDomainNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailContainerPublicDomainNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_name - computed: true, optional: false, required: false
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // domain_names - computed: true, optional: false, required: false
  public get domainNames() {
    return cdktn.Fn.tolist(this.getListAttribute('domain_names'));
  }
}

export class DataAwsccLightsailContainerPublicDomainNamesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLightsailContainerPublicDomainNamesOutputReference {
    return new DataAwsccLightsailContainerPublicDomainNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLightsailContainerTags {
}

export function dataAwsccLightsailContainerTagsToTerraform(struct?: DataAwsccLightsailContainerTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailContainerTagsToHclTerraform(struct?: DataAwsccLightsailContainerTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailContainerTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLightsailContainerTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailContainerTags | undefined) {
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

export class DataAwsccLightsailContainerTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLightsailContainerTagsOutputReference {
    return new DataAwsccLightsailContainerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lightsail_container awscc_lightsail_container}
*/
export class DataAwsccLightsailContainer extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lightsail_container";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccLightsailContainer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccLightsailContainer to import
  * @param importFromId The id of the existing DataAwsccLightsailContainer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lightsail_container#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccLightsailContainer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lightsail_container", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lightsail_container awscc_lightsail_container} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLightsailContainerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLightsailContainerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lightsail_container',
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

  // container_arn - computed: true, optional: false, required: false
  public get containerArn() {
    return this.getStringAttribute('container_arn');
  }

  // container_service_deployment - computed: true, optional: false, required: false
  private _containerServiceDeployment = new DataAwsccLightsailContainerContainerServiceDeploymentOutputReference(this, "container_service_deployment");
  public get containerServiceDeployment() {
    return this._containerServiceDeployment;
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

  // is_disabled - computed: true, optional: false, required: false
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }

  // power - computed: true, optional: false, required: false
  public get power() {
    return this.getStringAttribute('power');
  }

  // principal_arn - computed: true, optional: false, required: false
  public get principalArn() {
    return this.getStringAttribute('principal_arn');
  }

  // private_registry_access - computed: true, optional: false, required: false
  private _privateRegistryAccess = new DataAwsccLightsailContainerPrivateRegistryAccessOutputReference(this, "private_registry_access");
  public get privateRegistryAccess() {
    return this._privateRegistryAccess;
  }

  // public_domain_names - computed: true, optional: false, required: false
  private _publicDomainNames = new DataAwsccLightsailContainerPublicDomainNamesList(this, "public_domain_names", true);
  public get publicDomainNames() {
    return this._publicDomainNames;
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccLightsailContainerTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
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
