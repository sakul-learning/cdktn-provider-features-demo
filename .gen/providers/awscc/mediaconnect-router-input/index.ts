// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MediaconnectRouterInputConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Availability Zone where you want to create the router input. This must be a valid Availability Zone for the region specified by regionName, or the current region if no regionName is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#availability_zone MediaconnectRouterInput#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The configuration settings for a router input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#configuration MediaconnectRouterInput#configuration}
  */
  readonly configuration: MediaconnectRouterInputConfiguration;
  /**
  * The configuration settings for maintenance operations, including preferred maintenance windows and schedules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#maintenance_configuration MediaconnectRouterInput#maintenance_configuration}
  */
  readonly maintenanceConfiguration?: MediaconnectRouterInputMaintenanceConfiguration;
  /**
  * The maximum bitrate for the router input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#maximum_bitrate MediaconnectRouterInput#maximum_bitrate}
  */
  readonly maximumBitrate: number;
  /**
  * The name of the router input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#name MediaconnectRouterInput#name}
  */
  readonly name: string;
  /**
  * The Amazon Web Services Region for the router input. Defaults to the current region if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#region_name MediaconnectRouterInput#region_name}
  */
  readonly regionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#routing_scope MediaconnectRouterInput#routing_scope}
  */
  readonly routingScope: string;
  /**
  * Key-value pairs that can be used to tag and organize this router input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#tags MediaconnectRouterInput#tags}
  */
  readonly tags?: MediaconnectRouterInputTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#tier MediaconnectRouterInput#tier}
  */
  readonly tier: string;
  /**
  * The transit encryption settings for a router input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#transit_encryption MediaconnectRouterInput#transit_encryption}
  */
  readonly transitEncryption?: MediaconnectRouterInputTransitEncryption;
}
export interface MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist {
  /**
  * The port number used for the RIST protocol in the router input configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#port MediaconnectRouterInput#port}
  */
  readonly port?: number;
  /**
  * The recovery latency in milliseconds for the RIST protocol in the router input configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#recovery_latency_milliseconds MediaconnectRouterInput#recovery_latency_milliseconds}
  */
  readonly recoveryLatencyMilliseconds?: number;
}

export function mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistToTerraform(struct?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: cdktn.numberToTerraform(struct!.port),
    recovery_latency_milliseconds: cdktn.numberToTerraform(struct!.recoveryLatencyMilliseconds),
  }
}


export function mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistToHclTerraform(struct?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recovery_latency_milliseconds: {
      value: cdktn.numberToHclTerraform(struct!.recoveryLatencyMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._recoveryLatencyMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryLatencyMilliseconds = this._recoveryLatencyMilliseconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._recoveryLatencyMilliseconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._recoveryLatencyMilliseconds = value.recoveryLatencyMilliseconds;
    }
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // recovery_latency_milliseconds - computed: true, optional: true, required: false
  private _recoveryLatencyMilliseconds?: number; 
  public get recoveryLatencyMilliseconds() {
    return this.getNumberAttribute('recovery_latency_milliseconds');
  }
  public set recoveryLatencyMilliseconds(value: number) {
    this._recoveryLatencyMilliseconds = value;
  }
  public resetRecoveryLatencyMilliseconds() {
    this._recoveryLatencyMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryLatencyMillisecondsInput() {
    return this._recoveryLatencyMilliseconds;
  }
}
export interface MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#forward_error_correction MediaconnectRouterInput#forward_error_correction}
  */
  readonly forwardErrorCorrection?: string;
  /**
  * The port number used for the RTP protocol in the router input configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#port MediaconnectRouterInput#port}
  */
  readonly port?: number;
}

export function mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpToTerraform(struct?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    forward_error_correction: cdktn.stringToTerraform(struct!.forwardErrorCorrection),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpToHclTerraform(struct?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    forward_error_correction: {
      value: cdktn.stringToHclTerraform(struct!.forwardErrorCorrection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardErrorCorrection !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardErrorCorrection = this._forwardErrorCorrection;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forwardErrorCorrection = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forwardErrorCorrection = value.forwardErrorCorrection;
      this._port = value.port;
    }
  }

  // forward_error_correction - computed: true, optional: true, required: false
  private _forwardErrorCorrection?: string; 
  public get forwardErrorCorrection() {
    return this.getStringAttribute('forward_error_correction');
  }
  public set forwardErrorCorrection(value: string) {
    this._forwardErrorCorrection = value;
  }
  public resetForwardErrorCorrection() {
    this._forwardErrorCorrection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardErrorCorrectionInput() {
    return this._forwardErrorCorrection;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey {
  /**
  * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#role_arn MediaconnectRouterInput#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The ARN of the Secrets Manager secret used for transit encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#secret_arn MediaconnectRouterInput#secret_arn}
  */
  readonly secretArn?: string;
}

export function mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyToTerraform(struct?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyToHclTerraform(struct?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._secretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._secretArn = value.secretArn;
    }
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

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration {
  /**
  * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#encryption_key MediaconnectRouterInput#encryption_key}
  */
  readonly encryptionKey?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey;
}

export function mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationToTerraform(struct?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_key: mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyToTerraform(struct!.encryptionKey),
  }
}


export function mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationToHclTerraform(struct?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_key: {
      value: mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyToHclTerraform(struct!.encryptionKey),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionKey.internalValue = value.encryptionKey;
    }
  }

  // encryption_key - computed: true, optional: true, required: false
  private _encryptionKey = new MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
  public putEncryptionKey(value: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey) {
    this._encryptionKey.internalValue = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey.internalValue;
  }
}
export interface MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller {
  /**
  * Contains the configuration settings for decrypting SRT streams, including the encryption key details and decryption parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#decryption_configuration MediaconnectRouterInput#decryption_configuration}
  */
  readonly decryptionConfiguration?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration;
  /**
  * The minimum latency in milliseconds for the SRT protocol in caller mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#minimum_latency_milliseconds MediaconnectRouterInput#minimum_latency_milliseconds}
  */
  readonly minimumLatencyMilliseconds?: number;
  /**
  * The source IP address for the SRT protocol in caller mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#source_address MediaconnectRouterInput#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * The source port number for the SRT protocol in caller mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#source_port MediaconnectRouterInput#source_port}
  */
  readonly sourcePort?: number;
  /**
  * The stream ID for the SRT protocol in caller mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#stream_id MediaconnectRouterInput#stream_id}
  */
  readonly streamId?: string;
}

export function mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerToTerraform(struct?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    decryption_configuration: mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationToTerraform(struct!.decryptionConfiguration),
    minimum_latency_milliseconds: cdktn.numberToTerraform(struct!.minimumLatencyMilliseconds),
    source_address: cdktn.stringToTerraform(struct!.sourceAddress),
    source_port: cdktn.numberToTerraform(struct!.sourcePort),
    stream_id: cdktn.stringToTerraform(struct!.streamId),
  }
}


export function mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerToHclTerraform(struct?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    decryption_configuration: {
      value: mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationToHclTerraform(struct!.decryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration",
    },
    minimum_latency_milliseconds: {
      value: cdktn.numberToHclTerraform(struct!.minimumLatencyMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_address: {
      value: cdktn.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktn.numberToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_id: {
      value: cdktn.stringToHclTerraform(struct!.streamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionConfiguration = this._decryptionConfiguration?.internalValue;
    }
    if (this._minimumLatencyMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumLatencyMilliseconds = this._minimumLatencyMilliseconds;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._streamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamId = this._streamId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decryptionConfiguration.internalValue = undefined;
      this._minimumLatencyMilliseconds = undefined;
      this._sourceAddress = undefined;
      this._sourcePort = undefined;
      this._streamId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decryptionConfiguration.internalValue = value.decryptionConfiguration;
      this._minimumLatencyMilliseconds = value.minimumLatencyMilliseconds;
      this._sourceAddress = value.sourceAddress;
      this._sourcePort = value.sourcePort;
      this._streamId = value.streamId;
    }
  }

  // decryption_configuration - computed: true, optional: true, required: false
  private _decryptionConfiguration = new MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference(this, "decryption_configuration");
  public get decryptionConfiguration() {
    return this._decryptionConfiguration;
  }
  public putDecryptionConfiguration(value: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration) {
    this._decryptionConfiguration.internalValue = value;
  }
  public resetDecryptionConfiguration() {
    this._decryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionConfigurationInput() {
    return this._decryptionConfiguration.internalValue;
  }

  // minimum_latency_milliseconds - computed: true, optional: true, required: false
  private _minimumLatencyMilliseconds?: number; 
  public get minimumLatencyMilliseconds() {
    return this.getNumberAttribute('minimum_latency_milliseconds');
  }
  public set minimumLatencyMilliseconds(value: number) {
    this._minimumLatencyMilliseconds = value;
  }
  public resetMinimumLatencyMilliseconds() {
    this._minimumLatencyMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLatencyMillisecondsInput() {
    return this._minimumLatencyMilliseconds;
  }

  // source_address - computed: true, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // source_port - computed: true, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // stream_id - computed: true, optional: true, required: false
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  public resetStreamId() {
    this._streamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }
}
export interface MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey {
  /**
  * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#role_arn MediaconnectRouterInput#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The ARN of the Secrets Manager secret used for transit encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#secret_arn MediaconnectRouterInput#secret_arn}
  */
  readonly secretArn?: string;
}

export function mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyToTerraform(struct?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyToHclTerraform(struct?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._secretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._secretArn = value.secretArn;
    }
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

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration {
  /**
  * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#encryption_key MediaconnectRouterInput#encryption_key}
  */
  readonly encryptionKey?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey;
}

export function mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationToTerraform(struct?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_key: mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyToTerraform(struct!.encryptionKey),
  }
}


export function mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationToHclTerraform(struct?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_key: {
      value: mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyToHclTerraform(struct!.encryptionKey),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionKey.internalValue = value.encryptionKey;
    }
  }

  // encryption_key - computed: true, optional: true, required: false
  private _encryptionKey = new MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
  public putEncryptionKey(value: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey) {
    this._encryptionKey.internalValue = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey.internalValue;
  }
}
export interface MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener {
  /**
  * Contains the configuration settings for decrypting SRT streams, including the encryption key details and decryption parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#decryption_configuration MediaconnectRouterInput#decryption_configuration}
  */
  readonly decryptionConfiguration?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration;
  /**
  * The minimum latency in milliseconds for the SRT protocol in listener mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#minimum_latency_milliseconds MediaconnectRouterInput#minimum_latency_milliseconds}
  */
  readonly minimumLatencyMilliseconds?: number;
  /**
  * The port number for the SRT protocol in listener mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#port MediaconnectRouterInput#port}
  */
  readonly port?: number;
}

export function mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerToTerraform(struct?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    decryption_configuration: mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationToTerraform(struct!.decryptionConfiguration),
    minimum_latency_milliseconds: cdktn.numberToTerraform(struct!.minimumLatencyMilliseconds),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerToHclTerraform(struct?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    decryption_configuration: {
      value: mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationToHclTerraform(struct!.decryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration",
    },
    minimum_latency_milliseconds: {
      value: cdktn.numberToHclTerraform(struct!.minimumLatencyMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionConfiguration = this._decryptionConfiguration?.internalValue;
    }
    if (this._minimumLatencyMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumLatencyMilliseconds = this._minimumLatencyMilliseconds;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decryptionConfiguration.internalValue = undefined;
      this._minimumLatencyMilliseconds = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decryptionConfiguration.internalValue = value.decryptionConfiguration;
      this._minimumLatencyMilliseconds = value.minimumLatencyMilliseconds;
      this._port = value.port;
    }
  }

  // decryption_configuration - computed: true, optional: true, required: false
  private _decryptionConfiguration = new MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference(this, "decryption_configuration");
  public get decryptionConfiguration() {
    return this._decryptionConfiguration;
  }
  public putDecryptionConfiguration(value: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration) {
    this._decryptionConfiguration.internalValue = value;
  }
  public resetDecryptionConfiguration() {
    this._decryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionConfigurationInput() {
    return this._decryptionConfiguration.internalValue;
  }

  // minimum_latency_milliseconds - computed: true, optional: true, required: false
  private _minimumLatencyMilliseconds?: number; 
  public get minimumLatencyMilliseconds() {
    return this.getNumberAttribute('minimum_latency_milliseconds');
  }
  public set minimumLatencyMilliseconds(value: number) {
    this._minimumLatencyMilliseconds = value;
  }
  public resetMinimumLatencyMilliseconds() {
    this._minimumLatencyMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLatencyMillisecondsInput() {
    return this._minimumLatencyMilliseconds;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface MediaconnectRouterInputConfigurationFailoverProtocolConfigurations {
  /**
  * The configuration settings for a router input using the RIST (Reliable Internet Stream Transport) protocol, including the port and recovery latency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#rist MediaconnectRouterInput#rist}
  */
  readonly rist?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist;
  /**
  * The configuration settings for a Router Input using the RTP (Real-Time Transport Protocol) protocol, including the port and forward error correction state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#rtp MediaconnectRouterInput#rtp}
  */
  readonly rtp?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp;
  /**
  * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in caller mode, including the source address and port, minimum latency, stream ID, and decryption key configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#srt_caller MediaconnectRouterInput#srt_caller}
  */
  readonly srtCaller?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller;
  /**
  * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and decryption key configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#srt_listener MediaconnectRouterInput#srt_listener}
  */
  readonly srtListener?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener;
}

export function mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsToTerraform(struct?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rist: mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistToTerraform(struct!.rist),
    rtp: mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpToTerraform(struct!.rtp),
    srt_caller: mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerToTerraform(struct!.srtCaller),
    srt_listener: mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerToTerraform(struct!.srtListener),
  }
}


export function mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsToHclTerraform(struct?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rist: {
      value: mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistToHclTerraform(struct!.rist),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist",
    },
    rtp: {
      value: mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpToHclTerraform(struct!.rtp),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp",
    },
    srt_caller: {
      value: mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerToHclTerraform(struct!.srtCaller),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller",
    },
    srt_listener: {
      value: mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerToHclTerraform(struct!.srtListener),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectRouterInputConfigurationFailoverProtocolConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rist = this._rist?.internalValue;
    }
    if (this._rtp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtp = this._rtp?.internalValue;
    }
    if (this._srtCaller?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srtCaller = this._srtCaller?.internalValue;
    }
    if (this._srtListener?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srtListener = this._srtListener?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationFailoverProtocolConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rist.internalValue = undefined;
      this._rtp.internalValue = undefined;
      this._srtCaller.internalValue = undefined;
      this._srtListener.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rist.internalValue = value.rist;
      this._rtp.internalValue = value.rtp;
      this._srtCaller.internalValue = value.srtCaller;
      this._srtListener.internalValue = value.srtListener;
    }
  }

  // rist - computed: true, optional: true, required: false
  private _rist = new MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference(this, "rist");
  public get rist() {
    return this._rist;
  }
  public putRist(value: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist) {
    this._rist.internalValue = value;
  }
  public resetRist() {
    this._rist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ristInput() {
    return this._rist.internalValue;
  }

  // rtp - computed: true, optional: true, required: false
  private _rtp = new MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference(this, "rtp");
  public get rtp() {
    return this._rtp;
  }
  public putRtp(value: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp) {
    this._rtp.internalValue = value;
  }
  public resetRtp() {
    this._rtp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtpInput() {
    return this._rtp.internalValue;
  }

  // srt_caller - computed: true, optional: true, required: false
  private _srtCaller = new MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference(this, "srt_caller");
  public get srtCaller() {
    return this._srtCaller;
  }
  public putSrtCaller(value: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller) {
    this._srtCaller.internalValue = value;
  }
  public resetSrtCaller() {
    this._srtCaller.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srtCallerInput() {
    return this._srtCaller.internalValue;
  }

  // srt_listener - computed: true, optional: true, required: false
  private _srtListener = new MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference(this, "srt_listener");
  public get srtListener() {
    return this._srtListener;
  }
  public putSrtListener(value: MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener) {
    this._srtListener.internalValue = value;
  }
  public resetSrtListener() {
    this._srtListener.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srtListenerInput() {
    return this._srtListener.internalValue;
  }
}

export class MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList extends cdktn.ComplexList {
  public internalValue? : MediaconnectRouterInputConfigurationFailoverProtocolConfigurations[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference {
    return new MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaconnectRouterInputConfigurationFailover {
  /**
  * The ARN of the network interface to use for this failover router input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#network_interface_arn MediaconnectRouterInput#network_interface_arn}
  */
  readonly networkInterfaceArn?: string;
  /**
  * The index (0 or 1) that specifies which source in the protocol configurations list is currently active. Used to control which of the two failover sources is currently selected. This field is ignored when sourcePriorityMode is set to NO_PRIORITY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#primary_source_index MediaconnectRouterInput#primary_source_index}
  */
  readonly primarySourceIndex?: number;
  /**
  * A list of exactly two protocol configurations for the failover input sources. Both must use the same protocol type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#protocol_configurations MediaconnectRouterInput#protocol_configurations}
  */
  readonly protocolConfigurations?: MediaconnectRouterInputConfigurationFailoverProtocolConfigurations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#source_priority_mode MediaconnectRouterInput#source_priority_mode}
  */
  readonly sourcePriorityMode?: string;
}

export function mediaconnectRouterInputConfigurationFailoverToTerraform(struct?: MediaconnectRouterInputConfigurationFailover | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_interface_arn: cdktn.stringToTerraform(struct!.networkInterfaceArn),
    primary_source_index: cdktn.numberToTerraform(struct!.primarySourceIndex),
    protocol_configurations: cdktn.listMapper(mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsToTerraform, false)(struct!.protocolConfigurations),
    source_priority_mode: cdktn.stringToTerraform(struct!.sourcePriorityMode),
  }
}


export function mediaconnectRouterInputConfigurationFailoverToHclTerraform(struct?: MediaconnectRouterInputConfigurationFailover | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_interface_arn: {
      value: cdktn.stringToHclTerraform(struct!.networkInterfaceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_source_index: {
      value: cdktn.numberToHclTerraform(struct!.primarySourceIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol_configurations: {
      value: cdktn.listMapperHcl(mediaconnectRouterInputConfigurationFailoverProtocolConfigurationsToHclTerraform, false)(struct!.protocolConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList",
    },
    source_priority_mode: {
      value: cdktn.stringToHclTerraform(struct!.sourcePriorityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationFailoverOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationFailover | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkInterfaceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceArn = this._networkInterfaceArn;
    }
    if (this._primarySourceIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.primarySourceIndex = this._primarySourceIndex;
    }
    if (this._protocolConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolConfigurations = this._protocolConfigurations?.internalValue;
    }
    if (this._sourcePriorityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePriorityMode = this._sourcePriorityMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationFailover | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkInterfaceArn = undefined;
      this._primarySourceIndex = undefined;
      this._protocolConfigurations.internalValue = undefined;
      this._sourcePriorityMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkInterfaceArn = value.networkInterfaceArn;
      this._primarySourceIndex = value.primarySourceIndex;
      this._protocolConfigurations.internalValue = value.protocolConfigurations;
      this._sourcePriorityMode = value.sourcePriorityMode;
    }
  }

  // network_interface_arn - computed: true, optional: true, required: false
  private _networkInterfaceArn?: string; 
  public get networkInterfaceArn() {
    return this.getStringAttribute('network_interface_arn');
  }
  public set networkInterfaceArn(value: string) {
    this._networkInterfaceArn = value;
  }
  public resetNetworkInterfaceArn() {
    this._networkInterfaceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceArnInput() {
    return this._networkInterfaceArn;
  }

  // primary_source_index - computed: true, optional: true, required: false
  private _primarySourceIndex?: number; 
  public get primarySourceIndex() {
    return this.getNumberAttribute('primary_source_index');
  }
  public set primarySourceIndex(value: number) {
    this._primarySourceIndex = value;
  }
  public resetPrimarySourceIndex() {
    this._primarySourceIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySourceIndexInput() {
    return this._primarySourceIndex;
  }

  // protocol_configurations - computed: true, optional: true, required: false
  private _protocolConfigurations = new MediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList(this, "protocol_configurations", false);
  public get protocolConfigurations() {
    return this._protocolConfigurations;
  }
  public putProtocolConfigurations(value: MediaconnectRouterInputConfigurationFailoverProtocolConfigurations[] | cdktn.IResolvable) {
    this._protocolConfigurations.internalValue = value;
  }
  public resetProtocolConfigurations() {
    this._protocolConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolConfigurationsInput() {
    return this._protocolConfigurations.internalValue;
  }

  // source_priority_mode - computed: true, optional: true, required: false
  private _sourcePriorityMode?: string; 
  public get sourcePriorityMode() {
    return this.getStringAttribute('source_priority_mode');
  }
  public set sourcePriorityMode(value: string) {
    this._sourcePriorityMode = value;
  }
  public resetSourcePriorityMode() {
    this._sourcePriorityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePriorityModeInput() {
    return this._sourcePriorityMode;
  }
}
export interface MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager {
  /**
  * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#role_arn MediaconnectRouterInput#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The ARN of the Secrets Manager secret used for transit encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#secret_arn MediaconnectRouterInput#secret_arn}
  */
  readonly secretArn?: string;
}

export function mediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerToTerraform(struct?: MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function mediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerToHclTerraform(struct?: MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._secretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._secretArn = value.secretArn;
    }
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

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration {
  /**
  * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#automatic MediaconnectRouterInput#automatic}
  */
  readonly automatic?: string;
  /**
  * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#secrets_manager MediaconnectRouterInput#secrets_manager}
  */
  readonly secretsManager?: MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager;
}

export function mediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationToTerraform(struct?: MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    automatic: cdktn.stringToTerraform(struct!.automatic),
    secrets_manager: mediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerToTerraform(struct!.secretsManager),
  }
}


export function mediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationToHclTerraform(struct?: MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    automatic: {
      value: cdktn.stringToHclTerraform(struct!.automatic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager: {
      value: mediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerToHclTerraform(struct!.secretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatic = this._automatic;
    }
    if (this._secretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManager = this._secretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automatic = undefined;
      this._secretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automatic = value.automatic;
      this._secretsManager.internalValue = value.secretsManager;
    }
  }

  // automatic - computed: true, optional: true, required: false
  private _automatic?: string; 
  public get automatic() {
    return this.getStringAttribute('automatic');
  }
  public set automatic(value: string) {
    this._automatic = value;
  }
  public resetAutomatic() {
    this._automatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInput() {
    return this._automatic;
  }

  // secrets_manager - computed: true, optional: true, required: false
  private _secretsManager = new MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference(this, "secrets_manager");
  public get secretsManager() {
    return this._secretsManager;
  }
  public putSecretsManager(value: MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager) {
    this._secretsManager.internalValue = value;
  }
  public resetSecretsManager() {
    this._secretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerInput() {
    return this._secretsManager.internalValue;
  }
}
export interface MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption {
  /**
  * Configuration settings for flow transit encryption keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#encryption_key_configuration MediaconnectRouterInput#encryption_key_configuration}
  */
  readonly encryptionKeyConfiguration?: MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#encryption_key_type MediaconnectRouterInput#encryption_key_type}
  */
  readonly encryptionKeyType?: string;
}

export function mediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionToTerraform(struct?: MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_key_configuration: mediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationToTerraform(struct!.encryptionKeyConfiguration),
    encryption_key_type: cdktn.stringToTerraform(struct!.encryptionKeyType),
  }
}


export function mediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionToHclTerraform(struct?: MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_key_configuration: {
      value: mediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationToHclTerraform(struct!.encryptionKeyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration",
    },
    encryption_key_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKeyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyConfiguration = this._encryptionKeyConfiguration?.internalValue;
    }
    if (this._encryptionKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyType = this._encryptionKeyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionKeyConfiguration.internalValue = undefined;
      this._encryptionKeyType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionKeyConfiguration.internalValue = value.encryptionKeyConfiguration;
      this._encryptionKeyType = value.encryptionKeyType;
    }
  }

  // encryption_key_configuration - computed: true, optional: true, required: false
  private _encryptionKeyConfiguration = new MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference(this, "encryption_key_configuration");
  public get encryptionKeyConfiguration() {
    return this._encryptionKeyConfiguration;
  }
  public putEncryptionKeyConfiguration(value: MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration) {
    this._encryptionKeyConfiguration.internalValue = value;
  }
  public resetEncryptionKeyConfiguration() {
    this._encryptionKeyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyConfigurationInput() {
    return this._encryptionKeyConfiguration.internalValue;
  }

  // encryption_key_type - computed: true, optional: true, required: false
  private _encryptionKeyType?: string; 
  public get encryptionKeyType() {
    return this.getStringAttribute('encryption_key_type');
  }
  public set encryptionKeyType(value: string) {
    this._encryptionKeyType = value;
  }
  public resetEncryptionKeyType() {
    this._encryptionKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyTypeInput() {
    return this._encryptionKeyType;
  }
}
export interface MediaconnectRouterInputConfigurationMediaConnectFlow {
  /**
  * The ARN of the flow to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#flow_arn MediaconnectRouterInput#flow_arn}
  */
  readonly flowArn?: string;
  /**
  * The ARN of the flow output to connect to this router input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#flow_output_arn MediaconnectRouterInput#flow_output_arn}
  */
  readonly flowOutputArn?: string;
  /**
  * The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#source_transit_decryption MediaconnectRouterInput#source_transit_decryption}
  */
  readonly sourceTransitDecryption?: MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption;
}

export function mediaconnectRouterInputConfigurationMediaConnectFlowToTerraform(struct?: MediaconnectRouterInputConfigurationMediaConnectFlow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    flow_arn: cdktn.stringToTerraform(struct!.flowArn),
    flow_output_arn: cdktn.stringToTerraform(struct!.flowOutputArn),
    source_transit_decryption: mediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionToTerraform(struct!.sourceTransitDecryption),
  }
}


export function mediaconnectRouterInputConfigurationMediaConnectFlowToHclTerraform(struct?: MediaconnectRouterInputConfigurationMediaConnectFlow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    flow_arn: {
      value: cdktn.stringToHclTerraform(struct!.flowArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_output_arn: {
      value: cdktn.stringToHclTerraform(struct!.flowOutputArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_transit_decryption: {
      value: mediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionToHclTerraform(struct!.sourceTransitDecryption),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationMediaConnectFlowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationMediaConnectFlow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowArn = this._flowArn;
    }
    if (this._flowOutputArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowOutputArn = this._flowOutputArn;
    }
    if (this._sourceTransitDecryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTransitDecryption = this._sourceTransitDecryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationMediaConnectFlow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flowArn = undefined;
      this._flowOutputArn = undefined;
      this._sourceTransitDecryption.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flowArn = value.flowArn;
      this._flowOutputArn = value.flowOutputArn;
      this._sourceTransitDecryption.internalValue = value.sourceTransitDecryption;
    }
  }

  // flow_arn - computed: true, optional: true, required: false
  private _flowArn?: string; 
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }
  public set flowArn(value: string) {
    this._flowArn = value;
  }
  public resetFlowArn() {
    this._flowArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowArnInput() {
    return this._flowArn;
  }

  // flow_output_arn - computed: true, optional: true, required: false
  private _flowOutputArn?: string; 
  public get flowOutputArn() {
    return this.getStringAttribute('flow_output_arn');
  }
  public set flowOutputArn(value: string) {
    this._flowOutputArn = value;
  }
  public resetFlowOutputArn() {
    this._flowOutputArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowOutputArnInput() {
    return this._flowOutputArn;
  }

  // source_transit_decryption - computed: true, optional: true, required: false
  private _sourceTransitDecryption = new MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference(this, "source_transit_decryption");
  public get sourceTransitDecryption() {
    return this._sourceTransitDecryption;
  }
  public putSourceTransitDecryption(value: MediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption) {
    this._sourceTransitDecryption.internalValue = value;
  }
  public resetSourceTransitDecryption() {
    this._sourceTransitDecryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTransitDecryptionInput() {
    return this._sourceTransitDecryption.internalValue;
  }
}
export interface MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager {
  /**
  * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#role_arn MediaconnectRouterInput#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The ARN of the Secrets Manager secret used for transit encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#secret_arn MediaconnectRouterInput#secret_arn}
  */
  readonly secretArn?: string;
}

export function mediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerToTerraform(struct?: MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function mediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerToHclTerraform(struct?: MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._secretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._secretArn = value.secretArn;
    }
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

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration {
  /**
  * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#automatic MediaconnectRouterInput#automatic}
  */
  readonly automatic?: string;
  /**
  * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#secrets_manager MediaconnectRouterInput#secrets_manager}
  */
  readonly secretsManager?: MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager;
}

export function mediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationToTerraform(struct?: MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    automatic: cdktn.stringToTerraform(struct!.automatic),
    secrets_manager: mediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerToTerraform(struct!.secretsManager),
  }
}


export function mediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationToHclTerraform(struct?: MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    automatic: {
      value: cdktn.stringToHclTerraform(struct!.automatic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager: {
      value: mediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerToHclTerraform(struct!.secretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatic = this._automatic;
    }
    if (this._secretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManager = this._secretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automatic = undefined;
      this._secretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automatic = value.automatic;
      this._secretsManager.internalValue = value.secretsManager;
    }
  }

  // automatic - computed: true, optional: true, required: false
  private _automatic?: string; 
  public get automatic() {
    return this.getStringAttribute('automatic');
  }
  public set automatic(value: string) {
    this._automatic = value;
  }
  public resetAutomatic() {
    this._automatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInput() {
    return this._automatic;
  }

  // secrets_manager - computed: true, optional: true, required: false
  private _secretsManager = new MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference(this, "secrets_manager");
  public get secretsManager() {
    return this._secretsManager;
  }
  public putSecretsManager(value: MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager) {
    this._secretsManager.internalValue = value;
  }
  public resetSecretsManager() {
    this._secretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerInput() {
    return this._secretsManager.internalValue;
  }
}
export interface MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption {
  /**
  * Configuration settings for the MediaLive transit encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#encryption_key_configuration MediaconnectRouterInput#encryption_key_configuration}
  */
  readonly encryptionKeyConfiguration?: MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#encryption_key_type MediaconnectRouterInput#encryption_key_type}
  */
  readonly encryptionKeyType?: string;
}

export function mediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionToTerraform(struct?: MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_key_configuration: mediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationToTerraform(struct!.encryptionKeyConfiguration),
    encryption_key_type: cdktn.stringToTerraform(struct!.encryptionKeyType),
  }
}


export function mediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionToHclTerraform(struct?: MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_key_configuration: {
      value: mediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationToHclTerraform(struct!.encryptionKeyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration",
    },
    encryption_key_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKeyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyConfiguration = this._encryptionKeyConfiguration?.internalValue;
    }
    if (this._encryptionKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyType = this._encryptionKeyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionKeyConfiguration.internalValue = undefined;
      this._encryptionKeyType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionKeyConfiguration.internalValue = value.encryptionKeyConfiguration;
      this._encryptionKeyType = value.encryptionKeyType;
    }
  }

  // encryption_key_configuration - computed: true, optional: true, required: false
  private _encryptionKeyConfiguration = new MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference(this, "encryption_key_configuration");
  public get encryptionKeyConfiguration() {
    return this._encryptionKeyConfiguration;
  }
  public putEncryptionKeyConfiguration(value: MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration) {
    this._encryptionKeyConfiguration.internalValue = value;
  }
  public resetEncryptionKeyConfiguration() {
    this._encryptionKeyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyConfigurationInput() {
    return this._encryptionKeyConfiguration.internalValue;
  }

  // encryption_key_type - computed: true, optional: true, required: false
  private _encryptionKeyType?: string; 
  public get encryptionKeyType() {
    return this.getStringAttribute('encryption_key_type');
  }
  public set encryptionKeyType(value: string) {
    this._encryptionKeyType = value;
  }
  public resetEncryptionKeyType() {
    this._encryptionKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyTypeInput() {
    return this._encryptionKeyType;
  }
}
export interface MediaconnectRouterInputConfigurationMediaLiveChannel {
  /**
  * The ARN of the MediaLive channel to connect to this router input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#media_live_channel_arn MediaconnectRouterInput#media_live_channel_arn}
  */
  readonly mediaLiveChannelArn?: string;
  /**
  * The name of the MediaLive channel output to connect to this router input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#media_live_channel_output_name MediaconnectRouterInput#media_live_channel_output_name}
  */
  readonly mediaLiveChannelOutputName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#media_live_pipeline_id MediaconnectRouterInput#media_live_pipeline_id}
  */
  readonly mediaLivePipelineId?: string;
  /**
  * The encryption configuration that defines how content is encrypted during transit between MediaConnect Router and MediaLive. This configuration determines whether encryption keys are automatically managed by the service or manually managed through Secrets Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#source_transit_decryption MediaconnectRouterInput#source_transit_decryption}
  */
  readonly sourceTransitDecryption?: MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption;
}

export function mediaconnectRouterInputConfigurationMediaLiveChannelToTerraform(struct?: MediaconnectRouterInputConfigurationMediaLiveChannel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    media_live_channel_arn: cdktn.stringToTerraform(struct!.mediaLiveChannelArn),
    media_live_channel_output_name: cdktn.stringToTerraform(struct!.mediaLiveChannelOutputName),
    media_live_pipeline_id: cdktn.stringToTerraform(struct!.mediaLivePipelineId),
    source_transit_decryption: mediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionToTerraform(struct!.sourceTransitDecryption),
  }
}


export function mediaconnectRouterInputConfigurationMediaLiveChannelToHclTerraform(struct?: MediaconnectRouterInputConfigurationMediaLiveChannel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    media_live_channel_arn: {
      value: cdktn.stringToHclTerraform(struct!.mediaLiveChannelArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    media_live_channel_output_name: {
      value: cdktn.stringToHclTerraform(struct!.mediaLiveChannelOutputName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    media_live_pipeline_id: {
      value: cdktn.stringToHclTerraform(struct!.mediaLivePipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_transit_decryption: {
      value: mediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionToHclTerraform(struct!.sourceTransitDecryption),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationMediaLiveChannelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationMediaLiveChannel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mediaLiveChannelArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaLiveChannelArn = this._mediaLiveChannelArn;
    }
    if (this._mediaLiveChannelOutputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaLiveChannelOutputName = this._mediaLiveChannelOutputName;
    }
    if (this._mediaLivePipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaLivePipelineId = this._mediaLivePipelineId;
    }
    if (this._sourceTransitDecryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTransitDecryption = this._sourceTransitDecryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationMediaLiveChannel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mediaLiveChannelArn = undefined;
      this._mediaLiveChannelOutputName = undefined;
      this._mediaLivePipelineId = undefined;
      this._sourceTransitDecryption.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mediaLiveChannelArn = value.mediaLiveChannelArn;
      this._mediaLiveChannelOutputName = value.mediaLiveChannelOutputName;
      this._mediaLivePipelineId = value.mediaLivePipelineId;
      this._sourceTransitDecryption.internalValue = value.sourceTransitDecryption;
    }
  }

  // media_live_channel_arn - computed: true, optional: true, required: false
  private _mediaLiveChannelArn?: string; 
  public get mediaLiveChannelArn() {
    return this.getStringAttribute('media_live_channel_arn');
  }
  public set mediaLiveChannelArn(value: string) {
    this._mediaLiveChannelArn = value;
  }
  public resetMediaLiveChannelArn() {
    this._mediaLiveChannelArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaLiveChannelArnInput() {
    return this._mediaLiveChannelArn;
  }

  // media_live_channel_output_name - computed: true, optional: true, required: false
  private _mediaLiveChannelOutputName?: string; 
  public get mediaLiveChannelOutputName() {
    return this.getStringAttribute('media_live_channel_output_name');
  }
  public set mediaLiveChannelOutputName(value: string) {
    this._mediaLiveChannelOutputName = value;
  }
  public resetMediaLiveChannelOutputName() {
    this._mediaLiveChannelOutputName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaLiveChannelOutputNameInput() {
    return this._mediaLiveChannelOutputName;
  }

  // media_live_pipeline_id - computed: true, optional: true, required: false
  private _mediaLivePipelineId?: string; 
  public get mediaLivePipelineId() {
    return this.getStringAttribute('media_live_pipeline_id');
  }
  public set mediaLivePipelineId(value: string) {
    this._mediaLivePipelineId = value;
  }
  public resetMediaLivePipelineId() {
    this._mediaLivePipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaLivePipelineIdInput() {
    return this._mediaLivePipelineId;
  }

  // source_transit_decryption - computed: true, optional: true, required: false
  private _sourceTransitDecryption = new MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference(this, "source_transit_decryption");
  public get sourceTransitDecryption() {
    return this._sourceTransitDecryption;
  }
  public putSourceTransitDecryption(value: MediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption) {
    this._sourceTransitDecryption.internalValue = value;
  }
  public resetSourceTransitDecryption() {
    this._sourceTransitDecryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTransitDecryptionInput() {
    return this._sourceTransitDecryption.internalValue;
  }
}
export interface MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist {
  /**
  * The port number used for the RIST protocol in the router input configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#port MediaconnectRouterInput#port}
  */
  readonly port?: number;
  /**
  * The recovery latency in milliseconds for the RIST protocol in the router input configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#recovery_latency_milliseconds MediaconnectRouterInput#recovery_latency_milliseconds}
  */
  readonly recoveryLatencyMilliseconds?: number;
}

export function mediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistToTerraform(struct?: MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: cdktn.numberToTerraform(struct!.port),
    recovery_latency_milliseconds: cdktn.numberToTerraform(struct!.recoveryLatencyMilliseconds),
  }
}


export function mediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistToHclTerraform(struct?: MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recovery_latency_milliseconds: {
      value: cdktn.numberToHclTerraform(struct!.recoveryLatencyMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._recoveryLatencyMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryLatencyMilliseconds = this._recoveryLatencyMilliseconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._recoveryLatencyMilliseconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._recoveryLatencyMilliseconds = value.recoveryLatencyMilliseconds;
    }
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // recovery_latency_milliseconds - computed: true, optional: true, required: false
  private _recoveryLatencyMilliseconds?: number; 
  public get recoveryLatencyMilliseconds() {
    return this.getNumberAttribute('recovery_latency_milliseconds');
  }
  public set recoveryLatencyMilliseconds(value: number) {
    this._recoveryLatencyMilliseconds = value;
  }
  public resetRecoveryLatencyMilliseconds() {
    this._recoveryLatencyMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryLatencyMillisecondsInput() {
    return this._recoveryLatencyMilliseconds;
  }
}
export interface MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#forward_error_correction MediaconnectRouterInput#forward_error_correction}
  */
  readonly forwardErrorCorrection?: string;
  /**
  * The port number used for the RTP protocol in the router input configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#port MediaconnectRouterInput#port}
  */
  readonly port?: number;
}

export function mediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpToTerraform(struct?: MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    forward_error_correction: cdktn.stringToTerraform(struct!.forwardErrorCorrection),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function mediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpToHclTerraform(struct?: MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    forward_error_correction: {
      value: cdktn.stringToHclTerraform(struct!.forwardErrorCorrection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardErrorCorrection !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardErrorCorrection = this._forwardErrorCorrection;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forwardErrorCorrection = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forwardErrorCorrection = value.forwardErrorCorrection;
      this._port = value.port;
    }
  }

  // forward_error_correction - computed: true, optional: true, required: false
  private _forwardErrorCorrection?: string; 
  public get forwardErrorCorrection() {
    return this.getStringAttribute('forward_error_correction');
  }
  public set forwardErrorCorrection(value: string) {
    this._forwardErrorCorrection = value;
  }
  public resetForwardErrorCorrection() {
    this._forwardErrorCorrection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardErrorCorrectionInput() {
    return this._forwardErrorCorrection;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface MediaconnectRouterInputConfigurationMergeProtocolConfigurations {
  /**
  * The configuration settings for a router input using the RIST (Reliable Internet Stream Transport) protocol, including the port and recovery latency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#rist MediaconnectRouterInput#rist}
  */
  readonly rist?: MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist;
  /**
  * The configuration settings for a Router Input using the RTP (Real-Time Transport Protocol) protocol, including the port and forward error correction state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#rtp MediaconnectRouterInput#rtp}
  */
  readonly rtp?: MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp;
}

export function mediaconnectRouterInputConfigurationMergeProtocolConfigurationsToTerraform(struct?: MediaconnectRouterInputConfigurationMergeProtocolConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rist: mediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistToTerraform(struct!.rist),
    rtp: mediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpToTerraform(struct!.rtp),
  }
}


export function mediaconnectRouterInputConfigurationMergeProtocolConfigurationsToHclTerraform(struct?: MediaconnectRouterInputConfigurationMergeProtocolConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rist: {
      value: mediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistToHclTerraform(struct!.rist),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist",
    },
    rtp: {
      value: mediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpToHclTerraform(struct!.rtp),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectRouterInputConfigurationMergeProtocolConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rist = this._rist?.internalValue;
    }
    if (this._rtp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtp = this._rtp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationMergeProtocolConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rist.internalValue = undefined;
      this._rtp.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rist.internalValue = value.rist;
      this._rtp.internalValue = value.rtp;
    }
  }

  // rist - computed: true, optional: true, required: false
  private _rist = new MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference(this, "rist");
  public get rist() {
    return this._rist;
  }
  public putRist(value: MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist) {
    this._rist.internalValue = value;
  }
  public resetRist() {
    this._rist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ristInput() {
    return this._rist.internalValue;
  }

  // rtp - computed: true, optional: true, required: false
  private _rtp = new MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference(this, "rtp");
  public get rtp() {
    return this._rtp;
  }
  public putRtp(value: MediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp) {
    this._rtp.internalValue = value;
  }
  public resetRtp() {
    this._rtp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtpInput() {
    return this._rtp.internalValue;
  }
}

export class MediaconnectRouterInputConfigurationMergeProtocolConfigurationsList extends cdktn.ComplexList {
  public internalValue? : MediaconnectRouterInputConfigurationMergeProtocolConfigurations[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference {
    return new MediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaconnectRouterInputConfigurationMerge {
  /**
  * The time window in milliseconds for merging the two input sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#merge_recovery_window_milliseconds MediaconnectRouterInput#merge_recovery_window_milliseconds}
  */
  readonly mergeRecoveryWindowMilliseconds?: number;
  /**
  * The ARN of the network interface to use for this merge router input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#network_interface_arn MediaconnectRouterInput#network_interface_arn}
  */
  readonly networkInterfaceArn?: string;
  /**
  * A list of exactly two protocol configurations for the merge input sources. Both must use the same protocol type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#protocol_configurations MediaconnectRouterInput#protocol_configurations}
  */
  readonly protocolConfigurations?: MediaconnectRouterInputConfigurationMergeProtocolConfigurations[] | cdktn.IResolvable;
}

export function mediaconnectRouterInputConfigurationMergeToTerraform(struct?: MediaconnectRouterInputConfigurationMerge | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    merge_recovery_window_milliseconds: cdktn.numberToTerraform(struct!.mergeRecoveryWindowMilliseconds),
    network_interface_arn: cdktn.stringToTerraform(struct!.networkInterfaceArn),
    protocol_configurations: cdktn.listMapper(mediaconnectRouterInputConfigurationMergeProtocolConfigurationsToTerraform, false)(struct!.protocolConfigurations),
  }
}


export function mediaconnectRouterInputConfigurationMergeToHclTerraform(struct?: MediaconnectRouterInputConfigurationMerge | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    merge_recovery_window_milliseconds: {
      value: cdktn.numberToHclTerraform(struct!.mergeRecoveryWindowMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_interface_arn: {
      value: cdktn.stringToHclTerraform(struct!.networkInterfaceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_configurations: {
      value: cdktn.listMapperHcl(mediaconnectRouterInputConfigurationMergeProtocolConfigurationsToHclTerraform, false)(struct!.protocolConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "MediaconnectRouterInputConfigurationMergeProtocolConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationMergeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationMerge | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mergeRecoveryWindowMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeRecoveryWindowMilliseconds = this._mergeRecoveryWindowMilliseconds;
    }
    if (this._networkInterfaceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceArn = this._networkInterfaceArn;
    }
    if (this._protocolConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolConfigurations = this._protocolConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationMerge | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mergeRecoveryWindowMilliseconds = undefined;
      this._networkInterfaceArn = undefined;
      this._protocolConfigurations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mergeRecoveryWindowMilliseconds = value.mergeRecoveryWindowMilliseconds;
      this._networkInterfaceArn = value.networkInterfaceArn;
      this._protocolConfigurations.internalValue = value.protocolConfigurations;
    }
  }

  // merge_recovery_window_milliseconds - computed: true, optional: true, required: false
  private _mergeRecoveryWindowMilliseconds?: number; 
  public get mergeRecoveryWindowMilliseconds() {
    return this.getNumberAttribute('merge_recovery_window_milliseconds');
  }
  public set mergeRecoveryWindowMilliseconds(value: number) {
    this._mergeRecoveryWindowMilliseconds = value;
  }
  public resetMergeRecoveryWindowMilliseconds() {
    this._mergeRecoveryWindowMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeRecoveryWindowMillisecondsInput() {
    return this._mergeRecoveryWindowMilliseconds;
  }

  // network_interface_arn - computed: true, optional: true, required: false
  private _networkInterfaceArn?: string; 
  public get networkInterfaceArn() {
    return this.getStringAttribute('network_interface_arn');
  }
  public set networkInterfaceArn(value: string) {
    this._networkInterfaceArn = value;
  }
  public resetNetworkInterfaceArn() {
    this._networkInterfaceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceArnInput() {
    return this._networkInterfaceArn;
  }

  // protocol_configurations - computed: true, optional: true, required: false
  private _protocolConfigurations = new MediaconnectRouterInputConfigurationMergeProtocolConfigurationsList(this, "protocol_configurations", false);
  public get protocolConfigurations() {
    return this._protocolConfigurations;
  }
  public putProtocolConfigurations(value: MediaconnectRouterInputConfigurationMergeProtocolConfigurations[] | cdktn.IResolvable) {
    this._protocolConfigurations.internalValue = value;
  }
  public resetProtocolConfigurations() {
    this._protocolConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolConfigurationsInput() {
    return this._protocolConfigurations.internalValue;
  }
}
export interface MediaconnectRouterInputConfigurationStandardProtocolConfigurationRist {
  /**
  * The port number used for the RIST protocol in the router input configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#port MediaconnectRouterInput#port}
  */
  readonly port?: number;
  /**
  * The recovery latency in milliseconds for the RIST protocol in the router input configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#recovery_latency_milliseconds MediaconnectRouterInput#recovery_latency_milliseconds}
  */
  readonly recoveryLatencyMilliseconds?: number;
}

export function mediaconnectRouterInputConfigurationStandardProtocolConfigurationRistToTerraform(struct?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationRist | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: cdktn.numberToTerraform(struct!.port),
    recovery_latency_milliseconds: cdktn.numberToTerraform(struct!.recoveryLatencyMilliseconds),
  }
}


export function mediaconnectRouterInputConfigurationStandardProtocolConfigurationRistToHclTerraform(struct?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationRist | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recovery_latency_milliseconds: {
      value: cdktn.numberToHclTerraform(struct!.recoveryLatencyMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationStandardProtocolConfigurationRist | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._recoveryLatencyMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryLatencyMilliseconds = this._recoveryLatencyMilliseconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationStandardProtocolConfigurationRist | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._recoveryLatencyMilliseconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._recoveryLatencyMilliseconds = value.recoveryLatencyMilliseconds;
    }
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // recovery_latency_milliseconds - computed: true, optional: true, required: false
  private _recoveryLatencyMilliseconds?: number; 
  public get recoveryLatencyMilliseconds() {
    return this.getNumberAttribute('recovery_latency_milliseconds');
  }
  public set recoveryLatencyMilliseconds(value: number) {
    this._recoveryLatencyMilliseconds = value;
  }
  public resetRecoveryLatencyMilliseconds() {
    this._recoveryLatencyMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryLatencyMillisecondsInput() {
    return this._recoveryLatencyMilliseconds;
  }
}
export interface MediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#forward_error_correction MediaconnectRouterInput#forward_error_correction}
  */
  readonly forwardErrorCorrection?: string;
  /**
  * The port number used for the RTP protocol in the router input configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#port MediaconnectRouterInput#port}
  */
  readonly port?: number;
}

export function mediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpToTerraform(struct?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    forward_error_correction: cdktn.stringToTerraform(struct!.forwardErrorCorrection),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function mediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpToHclTerraform(struct?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    forward_error_correction: {
      value: cdktn.stringToHclTerraform(struct!.forwardErrorCorrection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardErrorCorrection !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardErrorCorrection = this._forwardErrorCorrection;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forwardErrorCorrection = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forwardErrorCorrection = value.forwardErrorCorrection;
      this._port = value.port;
    }
  }

  // forward_error_correction - computed: true, optional: true, required: false
  private _forwardErrorCorrection?: string; 
  public get forwardErrorCorrection() {
    return this.getStringAttribute('forward_error_correction');
  }
  public set forwardErrorCorrection(value: string) {
    this._forwardErrorCorrection = value;
  }
  public resetForwardErrorCorrection() {
    this._forwardErrorCorrection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardErrorCorrectionInput() {
    return this._forwardErrorCorrection;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey {
  /**
  * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#role_arn MediaconnectRouterInput#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The ARN of the Secrets Manager secret used for transit encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#secret_arn MediaconnectRouterInput#secret_arn}
  */
  readonly secretArn?: string;
}

export function mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyToTerraform(struct?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyToHclTerraform(struct?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._secretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._secretArn = value.secretArn;
    }
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

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration {
  /**
  * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#encryption_key MediaconnectRouterInput#encryption_key}
  */
  readonly encryptionKey?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey;
}

export function mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationToTerraform(struct?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_key: mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyToTerraform(struct!.encryptionKey),
  }
}


export function mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationToHclTerraform(struct?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_key: {
      value: mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyToHclTerraform(struct!.encryptionKey),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionKey.internalValue = value.encryptionKey;
    }
  }

  // encryption_key - computed: true, optional: true, required: false
  private _encryptionKey = new MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
  public putEncryptionKey(value: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey) {
    this._encryptionKey.internalValue = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey.internalValue;
  }
}
export interface MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller {
  /**
  * Contains the configuration settings for decrypting SRT streams, including the encryption key details and decryption parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#decryption_configuration MediaconnectRouterInput#decryption_configuration}
  */
  readonly decryptionConfiguration?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration;
  /**
  * The minimum latency in milliseconds for the SRT protocol in caller mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#minimum_latency_milliseconds MediaconnectRouterInput#minimum_latency_milliseconds}
  */
  readonly minimumLatencyMilliseconds?: number;
  /**
  * The source IP address for the SRT protocol in caller mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#source_address MediaconnectRouterInput#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * The source port number for the SRT protocol in caller mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#source_port MediaconnectRouterInput#source_port}
  */
  readonly sourcePort?: number;
  /**
  * The stream ID for the SRT protocol in caller mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#stream_id MediaconnectRouterInput#stream_id}
  */
  readonly streamId?: string;
}

export function mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerToTerraform(struct?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    decryption_configuration: mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationToTerraform(struct!.decryptionConfiguration),
    minimum_latency_milliseconds: cdktn.numberToTerraform(struct!.minimumLatencyMilliseconds),
    source_address: cdktn.stringToTerraform(struct!.sourceAddress),
    source_port: cdktn.numberToTerraform(struct!.sourcePort),
    stream_id: cdktn.stringToTerraform(struct!.streamId),
  }
}


export function mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerToHclTerraform(struct?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    decryption_configuration: {
      value: mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationToHclTerraform(struct!.decryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration",
    },
    minimum_latency_milliseconds: {
      value: cdktn.numberToHclTerraform(struct!.minimumLatencyMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_address: {
      value: cdktn.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktn.numberToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_id: {
      value: cdktn.stringToHclTerraform(struct!.streamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionConfiguration = this._decryptionConfiguration?.internalValue;
    }
    if (this._minimumLatencyMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumLatencyMilliseconds = this._minimumLatencyMilliseconds;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._streamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamId = this._streamId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decryptionConfiguration.internalValue = undefined;
      this._minimumLatencyMilliseconds = undefined;
      this._sourceAddress = undefined;
      this._sourcePort = undefined;
      this._streamId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decryptionConfiguration.internalValue = value.decryptionConfiguration;
      this._minimumLatencyMilliseconds = value.minimumLatencyMilliseconds;
      this._sourceAddress = value.sourceAddress;
      this._sourcePort = value.sourcePort;
      this._streamId = value.streamId;
    }
  }

  // decryption_configuration - computed: true, optional: true, required: false
  private _decryptionConfiguration = new MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference(this, "decryption_configuration");
  public get decryptionConfiguration() {
    return this._decryptionConfiguration;
  }
  public putDecryptionConfiguration(value: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration) {
    this._decryptionConfiguration.internalValue = value;
  }
  public resetDecryptionConfiguration() {
    this._decryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionConfigurationInput() {
    return this._decryptionConfiguration.internalValue;
  }

  // minimum_latency_milliseconds - computed: true, optional: true, required: false
  private _minimumLatencyMilliseconds?: number; 
  public get minimumLatencyMilliseconds() {
    return this.getNumberAttribute('minimum_latency_milliseconds');
  }
  public set minimumLatencyMilliseconds(value: number) {
    this._minimumLatencyMilliseconds = value;
  }
  public resetMinimumLatencyMilliseconds() {
    this._minimumLatencyMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLatencyMillisecondsInput() {
    return this._minimumLatencyMilliseconds;
  }

  // source_address - computed: true, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // source_port - computed: true, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // stream_id - computed: true, optional: true, required: false
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  public resetStreamId() {
    this._streamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }
}
export interface MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey {
  /**
  * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#role_arn MediaconnectRouterInput#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The ARN of the Secrets Manager secret used for transit encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#secret_arn MediaconnectRouterInput#secret_arn}
  */
  readonly secretArn?: string;
}

export function mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyToTerraform(struct?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyToHclTerraform(struct?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._secretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._secretArn = value.secretArn;
    }
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

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration {
  /**
  * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#encryption_key MediaconnectRouterInput#encryption_key}
  */
  readonly encryptionKey?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey;
}

export function mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationToTerraform(struct?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_key: mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyToTerraform(struct!.encryptionKey),
  }
}


export function mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationToHclTerraform(struct?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_key: {
      value: mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyToHclTerraform(struct!.encryptionKey),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionKey.internalValue = value.encryptionKey;
    }
  }

  // encryption_key - computed: true, optional: true, required: false
  private _encryptionKey = new MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
  public putEncryptionKey(value: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey) {
    this._encryptionKey.internalValue = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey.internalValue;
  }
}
export interface MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener {
  /**
  * Contains the configuration settings for decrypting SRT streams, including the encryption key details and decryption parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#decryption_configuration MediaconnectRouterInput#decryption_configuration}
  */
  readonly decryptionConfiguration?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration;
  /**
  * The minimum latency in milliseconds for the SRT protocol in listener mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#minimum_latency_milliseconds MediaconnectRouterInput#minimum_latency_milliseconds}
  */
  readonly minimumLatencyMilliseconds?: number;
  /**
  * The port number for the SRT protocol in listener mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#port MediaconnectRouterInput#port}
  */
  readonly port?: number;
}

export function mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerToTerraform(struct?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    decryption_configuration: mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationToTerraform(struct!.decryptionConfiguration),
    minimum_latency_milliseconds: cdktn.numberToTerraform(struct!.minimumLatencyMilliseconds),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerToHclTerraform(struct?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    decryption_configuration: {
      value: mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationToHclTerraform(struct!.decryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration",
    },
    minimum_latency_milliseconds: {
      value: cdktn.numberToHclTerraform(struct!.minimumLatencyMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionConfiguration = this._decryptionConfiguration?.internalValue;
    }
    if (this._minimumLatencyMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumLatencyMilliseconds = this._minimumLatencyMilliseconds;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decryptionConfiguration.internalValue = undefined;
      this._minimumLatencyMilliseconds = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decryptionConfiguration.internalValue = value.decryptionConfiguration;
      this._minimumLatencyMilliseconds = value.minimumLatencyMilliseconds;
      this._port = value.port;
    }
  }

  // decryption_configuration - computed: true, optional: true, required: false
  private _decryptionConfiguration = new MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference(this, "decryption_configuration");
  public get decryptionConfiguration() {
    return this._decryptionConfiguration;
  }
  public putDecryptionConfiguration(value: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration) {
    this._decryptionConfiguration.internalValue = value;
  }
  public resetDecryptionConfiguration() {
    this._decryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionConfigurationInput() {
    return this._decryptionConfiguration.internalValue;
  }

  // minimum_latency_milliseconds - computed: true, optional: true, required: false
  private _minimumLatencyMilliseconds?: number; 
  public get minimumLatencyMilliseconds() {
    return this.getNumberAttribute('minimum_latency_milliseconds');
  }
  public set minimumLatencyMilliseconds(value: number) {
    this._minimumLatencyMilliseconds = value;
  }
  public resetMinimumLatencyMilliseconds() {
    this._minimumLatencyMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLatencyMillisecondsInput() {
    return this._minimumLatencyMilliseconds;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface MediaconnectRouterInputConfigurationStandardProtocolConfiguration {
  /**
  * The configuration settings for a router input using the RIST (Reliable Internet Stream Transport) protocol, including the port and recovery latency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#rist MediaconnectRouterInput#rist}
  */
  readonly rist?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationRist;
  /**
  * The configuration settings for a Router Input using the RTP (Real-Time Transport Protocol) protocol, including the port and forward error correction state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#rtp MediaconnectRouterInput#rtp}
  */
  readonly rtp?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp;
  /**
  * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in caller mode, including the source address and port, minimum latency, stream ID, and decryption key configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#srt_caller MediaconnectRouterInput#srt_caller}
  */
  readonly srtCaller?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller;
  /**
  * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and decryption key configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#srt_listener MediaconnectRouterInput#srt_listener}
  */
  readonly srtListener?: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener;
}

export function mediaconnectRouterInputConfigurationStandardProtocolConfigurationToTerraform(struct?: MediaconnectRouterInputConfigurationStandardProtocolConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rist: mediaconnectRouterInputConfigurationStandardProtocolConfigurationRistToTerraform(struct!.rist),
    rtp: mediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpToTerraform(struct!.rtp),
    srt_caller: mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerToTerraform(struct!.srtCaller),
    srt_listener: mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerToTerraform(struct!.srtListener),
  }
}


export function mediaconnectRouterInputConfigurationStandardProtocolConfigurationToHclTerraform(struct?: MediaconnectRouterInputConfigurationStandardProtocolConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rist: {
      value: mediaconnectRouterInputConfigurationStandardProtocolConfigurationRistToHclTerraform(struct!.rist),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationStandardProtocolConfigurationRist",
    },
    rtp: {
      value: mediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpToHclTerraform(struct!.rtp),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp",
    },
    srt_caller: {
      value: mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerToHclTerraform(struct!.srtCaller),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller",
    },
    srt_listener: {
      value: mediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerToHclTerraform(struct!.srtListener),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationStandardProtocolConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rist = this._rist?.internalValue;
    }
    if (this._rtp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtp = this._rtp?.internalValue;
    }
    if (this._srtCaller?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srtCaller = this._srtCaller?.internalValue;
    }
    if (this._srtListener?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srtListener = this._srtListener?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationStandardProtocolConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rist.internalValue = undefined;
      this._rtp.internalValue = undefined;
      this._srtCaller.internalValue = undefined;
      this._srtListener.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rist.internalValue = value.rist;
      this._rtp.internalValue = value.rtp;
      this._srtCaller.internalValue = value.srtCaller;
      this._srtListener.internalValue = value.srtListener;
    }
  }

  // rist - computed: true, optional: true, required: false
  private _rist = new MediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference(this, "rist");
  public get rist() {
    return this._rist;
  }
  public putRist(value: MediaconnectRouterInputConfigurationStandardProtocolConfigurationRist) {
    this._rist.internalValue = value;
  }
  public resetRist() {
    this._rist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ristInput() {
    return this._rist.internalValue;
  }

  // rtp - computed: true, optional: true, required: false
  private _rtp = new MediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference(this, "rtp");
  public get rtp() {
    return this._rtp;
  }
  public putRtp(value: MediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp) {
    this._rtp.internalValue = value;
  }
  public resetRtp() {
    this._rtp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtpInput() {
    return this._rtp.internalValue;
  }

  // srt_caller - computed: true, optional: true, required: false
  private _srtCaller = new MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference(this, "srt_caller");
  public get srtCaller() {
    return this._srtCaller;
  }
  public putSrtCaller(value: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller) {
    this._srtCaller.internalValue = value;
  }
  public resetSrtCaller() {
    this._srtCaller.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srtCallerInput() {
    return this._srtCaller.internalValue;
  }

  // srt_listener - computed: true, optional: true, required: false
  private _srtListener = new MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference(this, "srt_listener");
  public get srtListener() {
    return this._srtListener;
  }
  public putSrtListener(value: MediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener) {
    this._srtListener.internalValue = value;
  }
  public resetSrtListener() {
    this._srtListener.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srtListenerInput() {
    return this._srtListener.internalValue;
  }
}
export interface MediaconnectRouterInputConfigurationStandard {
  /**
  * The Amazon Resource Name (ARN) of the network interface associated with the standard router input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#network_interface_arn MediaconnectRouterInput#network_interface_arn}
  */
  readonly networkInterfaceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#protocol MediaconnectRouterInput#protocol}
  */
  readonly protocol?: string;
  /**
  * The protocol configuration settings for a router input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#protocol_configuration MediaconnectRouterInput#protocol_configuration}
  */
  readonly protocolConfiguration?: MediaconnectRouterInputConfigurationStandardProtocolConfiguration;
}

export function mediaconnectRouterInputConfigurationStandardToTerraform(struct?: MediaconnectRouterInputConfigurationStandard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_interface_arn: cdktn.stringToTerraform(struct!.networkInterfaceArn),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    protocol_configuration: mediaconnectRouterInputConfigurationStandardProtocolConfigurationToTerraform(struct!.protocolConfiguration),
  }
}


export function mediaconnectRouterInputConfigurationStandardToHclTerraform(struct?: MediaconnectRouterInputConfigurationStandard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_interface_arn: {
      value: cdktn.stringToHclTerraform(struct!.networkInterfaceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_configuration: {
      value: mediaconnectRouterInputConfigurationStandardProtocolConfigurationToHclTerraform(struct!.protocolConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationStandardProtocolConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationStandardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfigurationStandard | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkInterfaceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceArn = this._networkInterfaceArn;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolConfiguration = this._protocolConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfigurationStandard | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkInterfaceArn = undefined;
      this._protocol = undefined;
      this._protocolConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkInterfaceArn = value.networkInterfaceArn;
      this._protocol = value.protocol;
      this._protocolConfiguration.internalValue = value.protocolConfiguration;
    }
  }

  // network_interface_arn - computed: true, optional: true, required: false
  private _networkInterfaceArn?: string; 
  public get networkInterfaceArn() {
    return this.getStringAttribute('network_interface_arn');
  }
  public set networkInterfaceArn(value: string) {
    this._networkInterfaceArn = value;
  }
  public resetNetworkInterfaceArn() {
    this._networkInterfaceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceArnInput() {
    return this._networkInterfaceArn;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_configuration - computed: true, optional: true, required: false
  private _protocolConfiguration = new MediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference(this, "protocol_configuration");
  public get protocolConfiguration() {
    return this._protocolConfiguration;
  }
  public putProtocolConfiguration(value: MediaconnectRouterInputConfigurationStandardProtocolConfiguration) {
    this._protocolConfiguration.internalValue = value;
  }
  public resetProtocolConfiguration() {
    this._protocolConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolConfigurationInput() {
    return this._protocolConfiguration.internalValue;
  }
}
export interface MediaconnectRouterInputConfiguration {
  /**
  * Configuration settings for a failover router input that allows switching between two input sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#failover MediaconnectRouterInput#failover}
  */
  readonly failover?: MediaconnectRouterInputConfigurationFailover;
  /**
  * Configuration settings for connecting a router input to a flow output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#media_connect_flow MediaconnectRouterInput#media_connect_flow}
  */
  readonly mediaConnectFlow?: MediaconnectRouterInputConfigurationMediaConnectFlow;
  /**
  * Configuration settings for connecting a router input to a MediaLive channel output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#media_live_channel MediaconnectRouterInput#media_live_channel}
  */
  readonly mediaLiveChannel?: MediaconnectRouterInputConfigurationMediaLiveChannel;
  /**
  * Configuration settings for a merge router input that combines two input sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#merge MediaconnectRouterInput#merge}
  */
  readonly merge?: MediaconnectRouterInputConfigurationMerge;
  /**
  * The configuration settings for a standard router input, including the protocol, protocol-specific configuration, network interface, and availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#standard MediaconnectRouterInput#standard}
  */
  readonly standard?: MediaconnectRouterInputConfigurationStandard;
}

export function mediaconnectRouterInputConfigurationToTerraform(struct?: MediaconnectRouterInputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failover: mediaconnectRouterInputConfigurationFailoverToTerraform(struct!.failover),
    media_connect_flow: mediaconnectRouterInputConfigurationMediaConnectFlowToTerraform(struct!.mediaConnectFlow),
    media_live_channel: mediaconnectRouterInputConfigurationMediaLiveChannelToTerraform(struct!.mediaLiveChannel),
    merge: mediaconnectRouterInputConfigurationMergeToTerraform(struct!.merge),
    standard: mediaconnectRouterInputConfigurationStandardToTerraform(struct!.standard),
  }
}


export function mediaconnectRouterInputConfigurationToHclTerraform(struct?: MediaconnectRouterInputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failover: {
      value: mediaconnectRouterInputConfigurationFailoverToHclTerraform(struct!.failover),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationFailover",
    },
    media_connect_flow: {
      value: mediaconnectRouterInputConfigurationMediaConnectFlowToHclTerraform(struct!.mediaConnectFlow),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationMediaConnectFlow",
    },
    media_live_channel: {
      value: mediaconnectRouterInputConfigurationMediaLiveChannelToHclTerraform(struct!.mediaLiveChannel),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationMediaLiveChannel",
    },
    merge: {
      value: mediaconnectRouterInputConfigurationMergeToHclTerraform(struct!.merge),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationMerge",
    },
    standard: {
      value: mediaconnectRouterInputConfigurationStandardToHclTerraform(struct!.standard),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputConfigurationStandard",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failover?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failover = this._failover?.internalValue;
    }
    if (this._mediaConnectFlow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaConnectFlow = this._mediaConnectFlow?.internalValue;
    }
    if (this._mediaLiveChannel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaLiveChannel = this._mediaLiveChannel?.internalValue;
    }
    if (this._merge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.merge = this._merge?.internalValue;
    }
    if (this._standard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standard = this._standard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failover.internalValue = undefined;
      this._mediaConnectFlow.internalValue = undefined;
      this._mediaLiveChannel.internalValue = undefined;
      this._merge.internalValue = undefined;
      this._standard.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failover.internalValue = value.failover;
      this._mediaConnectFlow.internalValue = value.mediaConnectFlow;
      this._mediaLiveChannel.internalValue = value.mediaLiveChannel;
      this._merge.internalValue = value.merge;
      this._standard.internalValue = value.standard;
    }
  }

  // failover - computed: true, optional: true, required: false
  private _failover = new MediaconnectRouterInputConfigurationFailoverOutputReference(this, "failover");
  public get failover() {
    return this._failover;
  }
  public putFailover(value: MediaconnectRouterInputConfigurationFailover) {
    this._failover.internalValue = value;
  }
  public resetFailover() {
    this._failover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover.internalValue;
  }

  // media_connect_flow - computed: true, optional: true, required: false
  private _mediaConnectFlow = new MediaconnectRouterInputConfigurationMediaConnectFlowOutputReference(this, "media_connect_flow");
  public get mediaConnectFlow() {
    return this._mediaConnectFlow;
  }
  public putMediaConnectFlow(value: MediaconnectRouterInputConfigurationMediaConnectFlow) {
    this._mediaConnectFlow.internalValue = value;
  }
  public resetMediaConnectFlow() {
    this._mediaConnectFlow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaConnectFlowInput() {
    return this._mediaConnectFlow.internalValue;
  }

  // media_live_channel - computed: true, optional: true, required: false
  private _mediaLiveChannel = new MediaconnectRouterInputConfigurationMediaLiveChannelOutputReference(this, "media_live_channel");
  public get mediaLiveChannel() {
    return this._mediaLiveChannel;
  }
  public putMediaLiveChannel(value: MediaconnectRouterInputConfigurationMediaLiveChannel) {
    this._mediaLiveChannel.internalValue = value;
  }
  public resetMediaLiveChannel() {
    this._mediaLiveChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaLiveChannelInput() {
    return this._mediaLiveChannel.internalValue;
  }

  // merge - computed: true, optional: true, required: false
  private _merge = new MediaconnectRouterInputConfigurationMergeOutputReference(this, "merge");
  public get merge() {
    return this._merge;
  }
  public putMerge(value: MediaconnectRouterInputConfigurationMerge) {
    this._merge.internalValue = value;
  }
  public resetMerge() {
    this._merge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeInput() {
    return this._merge.internalValue;
  }

  // standard - computed: true, optional: true, required: false
  private _standard = new MediaconnectRouterInputConfigurationStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
  public putStandard(value: MediaconnectRouterInputConfigurationStandard) {
    this._standard.internalValue = value;
  }
  public resetStandard() {
    this._standard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardInput() {
    return this._standard.internalValue;
  }
}
export interface MediaconnectRouterInputMaintenanceConfigurationPreferredDayTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#day MediaconnectRouterInput#day}
  */
  readonly day?: string;
  /**
  * The preferred time for maintenance operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#time MediaconnectRouterInput#time}
  */
  readonly time?: string;
}

export function mediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeToTerraform(struct?: MediaconnectRouterInputMaintenanceConfigurationPreferredDayTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day: cdktn.stringToTerraform(struct!.day),
    time: cdktn.stringToTerraform(struct!.time),
  }
}


export function mediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeToHclTerraform(struct?: MediaconnectRouterInputMaintenanceConfigurationPreferredDayTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day: {
      value: cdktn.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktn.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputMaintenanceConfigurationPreferredDayTime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputMaintenanceConfigurationPreferredDayTime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._time = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._time = value.time;
    }
  }

  // day - computed: true, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // time - computed: true, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface MediaconnectRouterInputMaintenanceConfiguration {
  /**
  * Configuration settings for default maintenance scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#default MediaconnectRouterInput#default}
  */
  readonly default?: string;
  /**
  * Configuration for preferred day and time maintenance settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#preferred_day_time MediaconnectRouterInput#preferred_day_time}
  */
  readonly preferredDayTime?: MediaconnectRouterInputMaintenanceConfigurationPreferredDayTime;
}

export function mediaconnectRouterInputMaintenanceConfigurationToTerraform(struct?: MediaconnectRouterInputMaintenanceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default: cdktn.stringToTerraform(struct!.default),
    preferred_day_time: mediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeToTerraform(struct!.preferredDayTime),
  }
}


export function mediaconnectRouterInputMaintenanceConfigurationToHclTerraform(struct?: MediaconnectRouterInputMaintenanceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default: {
      value: cdktn.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_day_time: {
      value: mediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeToHclTerraform(struct!.preferredDayTime),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputMaintenanceConfigurationPreferredDayTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputMaintenanceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputMaintenanceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._preferredDayTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDayTime = this._preferredDayTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputMaintenanceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._preferredDayTime.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._preferredDayTime.internalValue = value.preferredDayTime;
    }
  }

  // default - computed: true, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // preferred_day_time - computed: true, optional: true, required: false
  private _preferredDayTime = new MediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference(this, "preferred_day_time");
  public get preferredDayTime() {
    return this._preferredDayTime;
  }
  public putPreferredDayTime(value: MediaconnectRouterInputMaintenanceConfigurationPreferredDayTime) {
    this._preferredDayTime.internalValue = value;
  }
  public resetPreferredDayTime() {
    this._preferredDayTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDayTimeInput() {
    return this._preferredDayTime.internalValue;
  }
}
export interface MediaconnectRouterInputTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#key MediaconnectRouterInput#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#value MediaconnectRouterInput#value}
  */
  readonly value?: string;
}

export function mediaconnectRouterInputTagsToTerraform(struct?: MediaconnectRouterInputTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function mediaconnectRouterInputTagsToHclTerraform(struct?: MediaconnectRouterInputTags | cdktn.IResolvable): any {
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

export class MediaconnectRouterInputTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectRouterInputTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectRouterInputTags | cdktn.IResolvable | undefined) {
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

export class MediaconnectRouterInputTagsList extends cdktn.ComplexList {
  public internalValue? : MediaconnectRouterInputTags[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectRouterInputTagsOutputReference {
    return new MediaconnectRouterInputTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager {
  /**
  * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#role_arn MediaconnectRouterInput#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The ARN of the Secrets Manager secret used for transit encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#secret_arn MediaconnectRouterInput#secret_arn}
  */
  readonly secretArn?: string;
}

export function mediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerToTerraform(struct?: MediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function mediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerToHclTerraform(struct?: MediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._secretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._secretArn = value.secretArn;
    }
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

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface MediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration {
  /**
  * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#automatic MediaconnectRouterInput#automatic}
  */
  readonly automatic?: string;
  /**
  * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#secrets_manager MediaconnectRouterInput#secrets_manager}
  */
  readonly secretsManager?: MediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager;
}

export function mediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationToTerraform(struct?: MediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    automatic: cdktn.stringToTerraform(struct!.automatic),
    secrets_manager: mediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerToTerraform(struct!.secretsManager),
  }
}


export function mediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationToHclTerraform(struct?: MediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    automatic: {
      value: cdktn.stringToHclTerraform(struct!.automatic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager: {
      value: mediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerToHclTerraform(struct!.secretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatic = this._automatic;
    }
    if (this._secretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManager = this._secretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automatic = undefined;
      this._secretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automatic = value.automatic;
      this._secretsManager.internalValue = value.secretsManager;
    }
  }

  // automatic - computed: true, optional: true, required: false
  private _automatic?: string; 
  public get automatic() {
    return this.getStringAttribute('automatic');
  }
  public set automatic(value: string) {
    this._automatic = value;
  }
  public resetAutomatic() {
    this._automatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInput() {
    return this._automatic;
  }

  // secrets_manager - computed: true, optional: true, required: false
  private _secretsManager = new MediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(this, "secrets_manager");
  public get secretsManager() {
    return this._secretsManager;
  }
  public putSecretsManager(value: MediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager) {
    this._secretsManager.internalValue = value;
  }
  public resetSecretsManager() {
    this._secretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerInput() {
    return this._secretsManager.internalValue;
  }
}
export interface MediaconnectRouterInputTransitEncryption {
  /**
  * Defines the configuration settings for transit encryption keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#encryption_key_configuration MediaconnectRouterInput#encryption_key_configuration}
  */
  readonly encryptionKeyConfiguration?: MediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#encryption_key_type MediaconnectRouterInput#encryption_key_type}
  */
  readonly encryptionKeyType?: string;
}

export function mediaconnectRouterInputTransitEncryptionToTerraform(struct?: MediaconnectRouterInputTransitEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_key_configuration: mediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationToTerraform(struct!.encryptionKeyConfiguration),
    encryption_key_type: cdktn.stringToTerraform(struct!.encryptionKeyType),
  }
}


export function mediaconnectRouterInputTransitEncryptionToHclTerraform(struct?: MediaconnectRouterInputTransitEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_key_configuration: {
      value: mediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationToHclTerraform(struct!.encryptionKeyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration",
    },
    encryption_key_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterInputTransitEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterInputTransitEncryption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKeyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyConfiguration = this._encryptionKeyConfiguration?.internalValue;
    }
    if (this._encryptionKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyType = this._encryptionKeyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterInputTransitEncryption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionKeyConfiguration.internalValue = undefined;
      this._encryptionKeyType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionKeyConfiguration.internalValue = value.encryptionKeyConfiguration;
      this._encryptionKeyType = value.encryptionKeyType;
    }
  }

  // encryption_key_configuration - computed: true, optional: true, required: false
  private _encryptionKeyConfiguration = new MediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference(this, "encryption_key_configuration");
  public get encryptionKeyConfiguration() {
    return this._encryptionKeyConfiguration;
  }
  public putEncryptionKeyConfiguration(value: MediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration) {
    this._encryptionKeyConfiguration.internalValue = value;
  }
  public resetEncryptionKeyConfiguration() {
    this._encryptionKeyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyConfigurationInput() {
    return this._encryptionKeyConfiguration.internalValue;
  }

  // encryption_key_type - computed: true, optional: true, required: false
  private _encryptionKeyType?: string; 
  public get encryptionKeyType() {
    return this.getStringAttribute('encryption_key_type');
  }
  public set encryptionKeyType(value: string) {
    this._encryptionKeyType = value;
  }
  public resetEncryptionKeyType() {
    this._encryptionKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyTypeInput() {
    return this._encryptionKeyType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input awscc_mediaconnect_router_input}
*/
export class MediaconnectRouterInput extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediaconnect_router_input";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MediaconnectRouterInput resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediaconnectRouterInput to import
  * @param importFromId The id of the existing MediaconnectRouterInput that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediaconnectRouterInput to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_router_input", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/mediaconnect_router_input awscc_mediaconnect_router_input} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaconnectRouterInputConfig
  */
  public constructor(scope: Construct, id: string, config: MediaconnectRouterInputConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconnect_router_input',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.91.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._configuration.internalValue = config.configuration;
    this._maintenanceConfiguration.internalValue = config.maintenanceConfiguration;
    this._maximumBitrate = config.maximumBitrate;
    this._name = config.name;
    this._regionName = config.regionName;
    this._routingScope = config.routingScope;
    this._tags.internalValue = config.tags;
    this._tier = config.tier;
    this._transitEncryption.internalValue = config.transitEncryption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new MediaconnectRouterInputConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: MediaconnectRouterInputConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_type - computed: true, optional: false, required: false
  public get inputType() {
    return this.getStringAttribute('input_type');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // maintenance_configuration - computed: true, optional: true, required: false
  private _maintenanceConfiguration = new MediaconnectRouterInputMaintenanceConfigurationOutputReference(this, "maintenance_configuration");
  public get maintenanceConfiguration() {
    return this._maintenanceConfiguration;
  }
  public putMaintenanceConfiguration(value: MediaconnectRouterInputMaintenanceConfiguration) {
    this._maintenanceConfiguration.internalValue = value;
  }
  public resetMaintenanceConfiguration() {
    this._maintenanceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceConfigurationInput() {
    return this._maintenanceConfiguration.internalValue;
  }

  // maintenance_type - computed: true, optional: false, required: false
  public get maintenanceType() {
    return this.getStringAttribute('maintenance_type');
  }

  // maximum_bitrate - computed: false, optional: false, required: true
  private _maximumBitrate?: number; 
  public get maximumBitrate() {
    return this.getNumberAttribute('maximum_bitrate');
  }
  public set maximumBitrate(value: number) {
    this._maximumBitrate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBitrateInput() {
    return this._maximumBitrate;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region_name - computed: true, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // routed_outputs - computed: true, optional: false, required: false
  public get routedOutputs() {
    return this.getNumberAttribute('routed_outputs');
  }

  // router_input_id - computed: true, optional: false, required: false
  public get routerInputId() {
    return this.getStringAttribute('router_input_id');
  }

  // routing_scope - computed: false, optional: false, required: true
  private _routingScope?: string; 
  public get routingScope() {
    return this.getStringAttribute('routing_scope');
  }
  public set routingScope(value: string) {
    this._routingScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingScopeInput() {
    return this._routingScope;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new MediaconnectRouterInputTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MediaconnectRouterInputTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // transit_encryption - computed: true, optional: true, required: false
  private _transitEncryption = new MediaconnectRouterInputTransitEncryptionOutputReference(this, "transit_encryption");
  public get transitEncryption() {
    return this._transitEncryption;
  }
  public putTransitEncryption(value: MediaconnectRouterInputTransitEncryption) {
    this._transitEncryption.internalValue = value;
  }
  public resetTransitEncryption() {
    this._transitEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitEncryptionInput() {
    return this._transitEncryption.internalValue;
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
      availability_zone: cdktn.stringToTerraform(this._availabilityZone),
      configuration: mediaconnectRouterInputConfigurationToTerraform(this._configuration.internalValue),
      maintenance_configuration: mediaconnectRouterInputMaintenanceConfigurationToTerraform(this._maintenanceConfiguration.internalValue),
      maximum_bitrate: cdktn.numberToTerraform(this._maximumBitrate),
      name: cdktn.stringToTerraform(this._name),
      region_name: cdktn.stringToTerraform(this._regionName),
      routing_scope: cdktn.stringToTerraform(this._routingScope),
      tags: cdktn.listMapper(mediaconnectRouterInputTagsToTerraform, false)(this._tags.internalValue),
      tier: cdktn.stringToTerraform(this._tier),
      transit_encryption: mediaconnectRouterInputTransitEncryptionToTerraform(this._transitEncryption.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktn.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: mediaconnectRouterInputConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaconnectRouterInputConfiguration",
      },
      maintenance_configuration: {
        value: mediaconnectRouterInputMaintenanceConfigurationToHclTerraform(this._maintenanceConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaconnectRouterInputMaintenanceConfiguration",
      },
      maximum_bitrate: {
        value: cdktn.numberToHclTerraform(this._maximumBitrate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_name: {
        value: cdktn.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_scope: {
        value: cdktn.stringToHclTerraform(this._routingScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(mediaconnectRouterInputTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediaconnectRouterInputTagsList",
      },
      tier: {
        value: cdktn.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_encryption: {
        value: mediaconnectRouterInputTransitEncryptionToHclTerraform(this._transitEncryption.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaconnectRouterInputTransitEncryption",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
