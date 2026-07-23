// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/mediaconnect_router_output
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMediaconnectRouterOutputConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/mediaconnect_router_output#id DataAwsccMediaconnectRouterOutput#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager {
}

export function dataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerToTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager | undefined) {
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
export interface DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration {
}

export function dataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationToTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration | undefined) {
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
  private _secretsManager = new DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(this, "secrets_manager");
  public get secretsManager() {
    return this._secretsManager;
  }
}
export interface DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption {
}

export function dataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionToTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_key_configuration - computed: true, optional: false, required: false
  private _encryptionKeyConfiguration = new DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference(this, "encryption_key_configuration");
  public get encryptionKeyConfiguration() {
    return this._encryptionKeyConfiguration;
  }

  // encryption_key_type - computed: true, optional: false, required: false
  public get encryptionKeyType() {
    return this.getStringAttribute('encryption_key_type');
  }
}
export interface DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow {
}

export function dataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowToTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_transit_encryption - computed: true, optional: false, required: false
  private _destinationTransitEncryption = new DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference(this, "destination_transit_encryption");
  public get destinationTransitEncryption() {
    return this._destinationTransitEncryption;
  }

  // flow_arn - computed: true, optional: false, required: false
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }

  // flow_source_arn - computed: true, optional: false, required: false
  public get flowSourceArn() {
    return this.getStringAttribute('flow_source_arn');
  }
}
export interface DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager {
}

export function dataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerToTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager | undefined) {
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
export interface DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration {
}

export function dataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationToTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration | undefined) {
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
  private _secretsManager = new DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(this, "secrets_manager");
  public get secretsManager() {
    return this._secretsManager;
  }
}
export interface DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption {
}

export function dataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionToTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_key_configuration - computed: true, optional: false, required: false
  private _encryptionKeyConfiguration = new DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference(this, "encryption_key_configuration");
  public get encryptionKeyConfiguration() {
    return this._encryptionKeyConfiguration;
  }

  // encryption_key_type - computed: true, optional: false, required: false
  public get encryptionKeyType() {
    return this.getStringAttribute('encryption_key_type');
  }
}
export interface DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput {
}

export function dataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputToTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_transit_encryption - computed: true, optional: false, required: false
  private _destinationTransitEncryption = new DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference(this, "destination_transit_encryption");
  public get destinationTransitEncryption() {
    return this._destinationTransitEncryption;
  }

  // media_live_input_arn - computed: true, optional: false, required: false
  public get mediaLiveInputArn() {
    return this.getStringAttribute('media_live_input_arn');
  }

  // media_live_pipeline_id - computed: true, optional: false, required: false
  public get mediaLivePipelineId() {
    return this.getStringAttribute('media_live_pipeline_id');
  }
}
export interface DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist {
}

export function dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistToTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_address - computed: true, optional: false, required: false
  public get destinationAddress() {
    return this.getStringAttribute('destination_address');
  }

  // destination_port - computed: true, optional: false, required: false
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }
}
export interface DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp {
}

export function dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpToTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_address - computed: true, optional: false, required: false
  public get destinationAddress() {
    return this.getStringAttribute('destination_address');
  }

  // destination_port - computed: true, optional: false, required: false
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }

  // forward_error_correction - computed: true, optional: false, required: false
  public get forwardErrorCorrection() {
    return this.getStringAttribute('forward_error_correction');
  }
}
export interface DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey {
}

export function dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyToTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey | undefined) {
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
export interface DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration {
}

export function dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationToTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_key - computed: true, optional: false, required: false
  private _encryptionKey = new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
}
export interface DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller {
}

export function dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerToTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_address - computed: true, optional: false, required: false
  public get destinationAddress() {
    return this.getStringAttribute('destination_address');
  }

  // destination_port - computed: true, optional: false, required: false
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // minimum_latency_milliseconds - computed: true, optional: false, required: false
  public get minimumLatencyMilliseconds() {
    return this.getNumberAttribute('minimum_latency_milliseconds');
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
}
export interface DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey {
}

export function dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyToTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey | undefined) {
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
export interface DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration {
}

export function dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationToTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_key - computed: true, optional: false, required: false
  private _encryptionKey = new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
}
export interface DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener {
}

export function dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerToTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // minimum_latency_milliseconds - computed: true, optional: false, required: false
  public get minimumLatencyMilliseconds() {
    return this.getNumberAttribute('minimum_latency_milliseconds');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration {
}

export function dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationToTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rist - computed: true, optional: false, required: false
  private _rist = new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference(this, "rist");
  public get rist() {
    return this._rist;
  }

  // rtp - computed: true, optional: false, required: false
  private _rtp = new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference(this, "rtp");
  public get rtp() {
    return this._rtp;
  }

  // srt_caller - computed: true, optional: false, required: false
  private _srtCaller = new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference(this, "srt_caller");
  public get srtCaller() {
    return this._srtCaller;
  }

  // srt_listener - computed: true, optional: false, required: false
  private _srtListener = new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference(this, "srt_listener");
  public get srtListener() {
    return this._srtListener;
  }
}
export interface DataAwsccMediaconnectRouterOutputConfigurationStandard {
}

export function dataAwsccMediaconnectRouterOutputConfigurationStandardToTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputConfigurationStandardToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputConfigurationStandard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputConfigurationStandard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputConfigurationStandard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_interface_arn - computed: true, optional: false, required: false
  public get networkInterfaceArn() {
    return this.getStringAttribute('network_interface_arn');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_configuration - computed: true, optional: false, required: false
  private _protocolConfiguration = new DataAwsccMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference(this, "protocol_configuration");
  public get protocolConfiguration() {
    return this._protocolConfiguration;
  }
}
export interface DataAwsccMediaconnectRouterOutputConfiguration {
}

export function dataAwsccMediaconnectRouterOutputConfigurationToTerraform(struct?: DataAwsccMediaconnectRouterOutputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputConfigurationToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // media_connect_flow - computed: true, optional: false, required: false
  private _mediaConnectFlow = new DataAwsccMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference(this, "media_connect_flow");
  public get mediaConnectFlow() {
    return this._mediaConnectFlow;
  }

  // media_live_input - computed: true, optional: false, required: false
  private _mediaLiveInput = new DataAwsccMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference(this, "media_live_input");
  public get mediaLiveInput() {
    return this._mediaLiveInput;
  }

  // standard - computed: true, optional: false, required: false
  private _standard = new DataAwsccMediaconnectRouterOutputConfigurationStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
}
export interface DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime {
}

export function dataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeToTerraform(struct?: DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}
export interface DataAwsccMediaconnectRouterOutputMaintenanceConfiguration {
}

export function dataAwsccMediaconnectRouterOutputMaintenanceConfigurationToTerraform(struct?: DataAwsccMediaconnectRouterOutputMaintenanceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputMaintenanceConfigurationToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputMaintenanceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectRouterOutputMaintenanceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputMaintenanceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // preferred_day_time - computed: true, optional: false, required: false
  private _preferredDayTime = new DataAwsccMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference(this, "preferred_day_time");
  public get preferredDayTime() {
    return this._preferredDayTime;
  }
}
export interface DataAwsccMediaconnectRouterOutputTags {
}

export function dataAwsccMediaconnectRouterOutputTagsToTerraform(struct?: DataAwsccMediaconnectRouterOutputTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectRouterOutputTagsToHclTerraform(struct?: DataAwsccMediaconnectRouterOutputTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectRouterOutputTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediaconnectRouterOutputTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectRouterOutputTags | undefined) {
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

export class DataAwsccMediaconnectRouterOutputTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediaconnectRouterOutputTagsOutputReference {
    return new DataAwsccMediaconnectRouterOutputTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/mediaconnect_router_output awscc_mediaconnect_router_output}
*/
export class DataAwsccMediaconnectRouterOutput extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediaconnect_router_output";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMediaconnectRouterOutput resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMediaconnectRouterOutput to import
  * @param importFromId The id of the existing DataAwsccMediaconnectRouterOutput that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/mediaconnect_router_output#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMediaconnectRouterOutput to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_router_output", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/mediaconnect_router_output awscc_mediaconnect_router_output} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediaconnectRouterOutputConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediaconnectRouterOutputConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconnect_router_output',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccMediaconnectRouterOutputConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // maintenance_configuration - computed: true, optional: false, required: false
  private _maintenanceConfiguration = new DataAwsccMediaconnectRouterOutputMaintenanceConfigurationOutputReference(this, "maintenance_configuration");
  public get maintenanceConfiguration() {
    return this._maintenanceConfiguration;
  }

  // maintenance_type - computed: true, optional: false, required: false
  public get maintenanceType() {
    return this.getStringAttribute('maintenance_type');
  }

  // maximum_bitrate - computed: true, optional: false, required: false
  public get maximumBitrate() {
    return this.getNumberAttribute('maximum_bitrate');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // output_type - computed: true, optional: false, required: false
  public get outputType() {
    return this.getStringAttribute('output_type');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }

  // routed_state - computed: true, optional: false, required: false
  public get routedState() {
    return this.getStringAttribute('routed_state');
  }

  // router_output_id - computed: true, optional: false, required: false
  public get routerOutputId() {
    return this.getStringAttribute('router_output_id');
  }

  // routing_scope - computed: true, optional: false, required: false
  public get routingScope() {
    return this.getStringAttribute('routing_scope');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccMediaconnectRouterOutputTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
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
