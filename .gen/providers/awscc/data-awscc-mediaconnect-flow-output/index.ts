// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/mediaconnect_flow_output
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMediaconnectFlowOutputConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/mediaconnect_flow_output#id DataAwsccMediaconnectFlowOutput#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMediaconnectFlowOutputEncryption {
}

export function dataAwsccMediaconnectFlowOutputEncryptionToTerraform(struct?: DataAwsccMediaconnectFlowOutputEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowOutputEncryptionToHclTerraform(struct?: DataAwsccMediaconnectFlowOutputEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowOutputEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowOutputEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowOutputEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface {
}

export function dataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceToTerraform(struct?: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceToHclTerraform(struct?: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface | undefined) {
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
}
export interface DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations {
}

export function dataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsToTerraform(struct?: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsToHclTerraform(struct?: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_ip - computed: true, optional: false, required: false
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }

  // destination_port - computed: true, optional: false, required: false
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }

  // interface - computed: true, optional: false, required: false
  private _interface = new DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
}

export class DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference {
    return new DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters {
}

export function dataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersToTerraform(struct?: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersToHclTerraform(struct?: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression_factor - computed: true, optional: false, required: false
  public get compressionFactor() {
    return this.getNumberAttribute('compression_factor');
  }

  // encoder_profile - computed: true, optional: false, required: false
  public get encoderProfile() {
    return this.getStringAttribute('encoder_profile');
  }
}
export interface DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations {
}

export function dataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsToTerraform(struct?: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsToHclTerraform(struct?: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_configurations - computed: true, optional: false, required: false
  private _destinationConfigurations = new DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList(this, "destination_configurations", false);
  public get destinationConfigurations() {
    return this._destinationConfigurations;
  }

  // encoding_name - computed: true, optional: false, required: false
  public get encodingName() {
    return this.getStringAttribute('encoding_name');
  }

  // encoding_parameters - computed: true, optional: false, required: false
  private _encodingParameters = new DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference(this, "encoding_parameters");
  public get encodingParameters() {
    return this._encodingParameters;
  }

  // media_stream_name - computed: true, optional: false, required: false
  public get mediaStreamName() {
    return this.getStringAttribute('media_stream_name');
  }
}

export class DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference {
    return new DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager {
}

export function dataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerToTerraform(struct?: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerToHclTerraform(struct?: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration {
}

export function dataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationToTerraform(struct?: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationToHclTerraform(struct?: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automatic - computed: true, optional: false, required: false
  public get automatic() {
    return this.getStringAttribute('automatic');
  }

  // secrets_manager - computed: true, optional: false, required: false
  private _secretsManager = new DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(this, "secrets_manager");
  public get secretsManager() {
    return this._secretsManager;
  }
}
export interface DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption {
}

export function dataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionToTerraform(struct?: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionToHclTerraform(struct?: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_key_configuration - computed: true, optional: false, required: false
  private _encryptionKeyConfiguration = new DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference(this, "encryption_key_configuration");
  public get encryptionKeyConfiguration() {
    return this._encryptionKeyConfiguration;
  }

  // encryption_key_type - computed: true, optional: false, required: false
  public get encryptionKeyType() {
    return this.getStringAttribute('encryption_key_type');
  }
}
export interface DataAwsccMediaconnectFlowOutputTags {
}

export function dataAwsccMediaconnectFlowOutputTagsToTerraform(struct?: DataAwsccMediaconnectFlowOutputTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowOutputTagsToHclTerraform(struct?: DataAwsccMediaconnectFlowOutputTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowOutputTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediaconnectFlowOutputTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowOutputTags | undefined) {
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

export class DataAwsccMediaconnectFlowOutputTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediaconnectFlowOutputTagsOutputReference {
    return new DataAwsccMediaconnectFlowOutputTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment {
}

export function dataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentToTerraform(struct?: DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentToHclTerraform(struct?: DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpc_interface_name - computed: true, optional: false, required: false
  public get vpcInterfaceName() {
    return this.getStringAttribute('vpc_interface_name');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/mediaconnect_flow_output awscc_mediaconnect_flow_output}
*/
export class DataAwsccMediaconnectFlowOutput extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediaconnect_flow_output";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMediaconnectFlowOutput resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMediaconnectFlowOutput to import
  * @param importFromId The id of the existing DataAwsccMediaconnectFlowOutput that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/mediaconnect_flow_output#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMediaconnectFlowOutput to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_flow_output", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/mediaconnect_flow_output awscc_mediaconnect_flow_output} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediaconnectFlowOutputConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediaconnectFlowOutputConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconnect_flow_output',
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

  // cidr_allow_list - computed: true, optional: false, required: false
  public get cidrAllowList() {
    return this.getListAttribute('cidr_allow_list');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // encryption - computed: true, optional: false, required: false
  private _encryption = new DataAwsccMediaconnectFlowOutputEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }

  // flow_arn - computed: true, optional: false, required: false
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
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

  // max_latency - computed: true, optional: false, required: false
  public get maxLatency() {
    return this.getNumberAttribute('max_latency');
  }

  // media_stream_output_configurations - computed: true, optional: false, required: false
  private _mediaStreamOutputConfigurations = new DataAwsccMediaconnectFlowOutputMediaStreamOutputConfigurationsList(this, "media_stream_output_configurations", false);
  public get mediaStreamOutputConfigurations() {
    return this._mediaStreamOutputConfigurations;
  }

  // min_latency - computed: true, optional: false, required: false
  public get minLatency() {
    return this.getNumberAttribute('min_latency');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ndi_output_timecode_source - computed: true, optional: false, required: false
  public get ndiOutputTimecodeSource() {
    return this.getStringAttribute('ndi_output_timecode_source');
  }

  // ndi_program_name - computed: true, optional: false, required: false
  public get ndiProgramName() {
    return this.getStringAttribute('ndi_program_name');
  }

  // ndi_speed_hq_quality - computed: true, optional: false, required: false
  public get ndiSpeedHqQuality() {
    return this.getNumberAttribute('ndi_speed_hq_quality');
  }

  // output_arn - computed: true, optional: false, required: false
  public get outputArn() {
    return this.getStringAttribute('output_arn');
  }

  // output_status - computed: true, optional: false, required: false
  public get outputStatus() {
    return this.getStringAttribute('output_status');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // remote_id - computed: true, optional: false, required: false
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }

  // router_integration_state - computed: true, optional: false, required: false
  public get routerIntegrationState() {
    return this.getStringAttribute('router_integration_state');
  }

  // router_integration_transit_encryption - computed: true, optional: false, required: false
  private _routerIntegrationTransitEncryption = new DataAwsccMediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference(this, "router_integration_transit_encryption");
  public get routerIntegrationTransitEncryption() {
    return this._routerIntegrationTransitEncryption;
  }

  // smoothing_latency - computed: true, optional: false, required: false
  public get smoothingLatency() {
    return this.getNumberAttribute('smoothing_latency');
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccMediaconnectFlowOutputTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // vpc_interface_attachment - computed: true, optional: false, required: false
  private _vpcInterfaceAttachment = new DataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentOutputReference(this, "vpc_interface_attachment");
  public get vpcInterfaceAttachment() {
    return this._vpcInterfaceAttachment;
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
