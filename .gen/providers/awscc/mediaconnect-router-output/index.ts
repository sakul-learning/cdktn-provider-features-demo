// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MediaconnectRouterOutputConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Availability Zone where you want to create the router output. This must be a valid Availability Zone for the region specified by regionName, or the current region if no regionName is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#availability_zone MediaconnectRouterOutput#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The configuration settings for a router output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#configuration MediaconnectRouterOutput#configuration}
  */
  readonly configuration: MediaconnectRouterOutputConfiguration;
  /**
  * The configuration settings for maintenance operations, including preferred maintenance windows and schedules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#maintenance_configuration MediaconnectRouterOutput#maintenance_configuration}
  */
  readonly maintenanceConfiguration?: MediaconnectRouterOutputMaintenanceConfiguration;
  /**
  * The maximum bitrate for the router output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#maximum_bitrate MediaconnectRouterOutput#maximum_bitrate}
  */
  readonly maximumBitrate: number;
  /**
  * The name of the router output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#name MediaconnectRouterOutput#name}
  */
  readonly name: string;
  /**
  * The Amazon Web Services Region for the router output. Defaults to the current region if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#region_name MediaconnectRouterOutput#region_name}
  */
  readonly regionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#routing_scope MediaconnectRouterOutput#routing_scope}
  */
  readonly routingScope: string;
  /**
  * Key-value pairs that can be used to tag this router output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#tags MediaconnectRouterOutput#tags}
  */
  readonly tags?: MediaconnectRouterOutputTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#tier MediaconnectRouterOutput#tier}
  */
  readonly tier: string;
}
export interface MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager {
  /**
  * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#role_arn MediaconnectRouterOutput#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The ARN of the Secrets Manager secret used for transit encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#secret_arn MediaconnectRouterOutput#secret_arn}
  */
  readonly secretArn?: string;
}

export function mediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerToTerraform(struct?: MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function mediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerToHclTerraform(struct?: MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable): any {
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

export class MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable | undefined) {
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
export interface MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration {
  /**
  * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#automatic MediaconnectRouterOutput#automatic}
  */
  readonly automatic?: string;
  /**
  * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#secrets_manager MediaconnectRouterOutput#secrets_manager}
  */
  readonly secretsManager?: MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager;
}

export function mediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationToTerraform(struct?: MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    automatic: cdktn.stringToTerraform(struct!.automatic),
    secrets_manager: mediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerToTerraform(struct!.secretsManager),
  }
}


export function mediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationToHclTerraform(struct?: MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration | cdktn.IResolvable): any {
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
      value: mediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerToHclTerraform(struct!.secretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration | cdktn.IResolvable | undefined) {
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
  private _secretsManager = new MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(this, "secrets_manager");
  public get secretsManager() {
    return this._secretsManager;
  }
  public putSecretsManager(value: MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager) {
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
export interface MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption {
  /**
  * Configuration settings for flow transit encryption keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#encryption_key_configuration MediaconnectRouterOutput#encryption_key_configuration}
  */
  readonly encryptionKeyConfiguration?: MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#encryption_key_type MediaconnectRouterOutput#encryption_key_type}
  */
  readonly encryptionKeyType?: string;
}

export function mediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionToTerraform(struct?: MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_key_configuration: mediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationToTerraform(struct!.encryptionKeyConfiguration),
    encryption_key_type: cdktn.stringToTerraform(struct!.encryptionKeyType),
  }
}


export function mediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionToHclTerraform(struct?: MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_key_configuration: {
      value: mediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationToHclTerraform(struct!.encryptionKeyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration",
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

export class MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption | cdktn.IResolvable | undefined) {
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
  private _encryptionKeyConfiguration = new MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference(this, "encryption_key_configuration");
  public get encryptionKeyConfiguration() {
    return this._encryptionKeyConfiguration;
  }
  public putEncryptionKeyConfiguration(value: MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration) {
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
export interface MediaconnectRouterOutputConfigurationMediaConnectFlow {
  /**
  * The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#destination_transit_encryption MediaconnectRouterOutput#destination_transit_encryption}
  */
  readonly destinationTransitEncryption?: MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption;
  /**
  * The ARN of the flow to connect to this router output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#flow_arn MediaconnectRouterOutput#flow_arn}
  */
  readonly flowArn?: string;
  /**
  * The ARN of the flow source to connect to this router output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#flow_source_arn MediaconnectRouterOutput#flow_source_arn}
  */
  readonly flowSourceArn?: string;
}

export function mediaconnectRouterOutputConfigurationMediaConnectFlowToTerraform(struct?: MediaconnectRouterOutputConfigurationMediaConnectFlow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_transit_encryption: mediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionToTerraform(struct!.destinationTransitEncryption),
    flow_arn: cdktn.stringToTerraform(struct!.flowArn),
    flow_source_arn: cdktn.stringToTerraform(struct!.flowSourceArn),
  }
}


export function mediaconnectRouterOutputConfigurationMediaConnectFlowToHclTerraform(struct?: MediaconnectRouterOutputConfigurationMediaConnectFlow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_transit_encryption: {
      value: mediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionToHclTerraform(struct!.destinationTransitEncryption),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption",
    },
    flow_arn: {
      value: cdktn.stringToHclTerraform(struct!.flowArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_source_arn: {
      value: cdktn.stringToHclTerraform(struct!.flowSourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputConfigurationMediaConnectFlow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationTransitEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTransitEncryption = this._destinationTransitEncryption?.internalValue;
    }
    if (this._flowArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowArn = this._flowArn;
    }
    if (this._flowSourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowSourceArn = this._flowSourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterOutputConfigurationMediaConnectFlow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationTransitEncryption.internalValue = undefined;
      this._flowArn = undefined;
      this._flowSourceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationTransitEncryption.internalValue = value.destinationTransitEncryption;
      this._flowArn = value.flowArn;
      this._flowSourceArn = value.flowSourceArn;
    }
  }

  // destination_transit_encryption - computed: true, optional: true, required: false
  private _destinationTransitEncryption = new MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference(this, "destination_transit_encryption");
  public get destinationTransitEncryption() {
    return this._destinationTransitEncryption;
  }
  public putDestinationTransitEncryption(value: MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption) {
    this._destinationTransitEncryption.internalValue = value;
  }
  public resetDestinationTransitEncryption() {
    this._destinationTransitEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTransitEncryptionInput() {
    return this._destinationTransitEncryption.internalValue;
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

  // flow_source_arn - computed: true, optional: true, required: false
  private _flowSourceArn?: string; 
  public get flowSourceArn() {
    return this.getStringAttribute('flow_source_arn');
  }
  public set flowSourceArn(value: string) {
    this._flowSourceArn = value;
  }
  public resetFlowSourceArn() {
    this._flowSourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowSourceArnInput() {
    return this._flowSourceArn;
  }
}
export interface MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager {
  /**
  * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#role_arn MediaconnectRouterOutput#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The ARN of the Secrets Manager secret used for transit encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#secret_arn MediaconnectRouterOutput#secret_arn}
  */
  readonly secretArn?: string;
}

export function mediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerToTerraform(struct?: MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function mediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerToHclTerraform(struct?: MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable): any {
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

export class MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager | cdktn.IResolvable | undefined) {
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
export interface MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration {
  /**
  * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#automatic MediaconnectRouterOutput#automatic}
  */
  readonly automatic?: string;
  /**
  * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#secrets_manager MediaconnectRouterOutput#secrets_manager}
  */
  readonly secretsManager?: MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager;
}

export function mediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationToTerraform(struct?: MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    automatic: cdktn.stringToTerraform(struct!.automatic),
    secrets_manager: mediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerToTerraform(struct!.secretsManager),
  }
}


export function mediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationToHclTerraform(struct?: MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration | cdktn.IResolvable): any {
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
      value: mediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerToHclTerraform(struct!.secretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration | cdktn.IResolvable | undefined) {
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
  private _secretsManager = new MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(this, "secrets_manager");
  public get secretsManager() {
    return this._secretsManager;
  }
  public putSecretsManager(value: MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager) {
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
export interface MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption {
  /**
  * Configuration settings for the MediaLive transit encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#encryption_key_configuration MediaconnectRouterOutput#encryption_key_configuration}
  */
  readonly encryptionKeyConfiguration?: MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#encryption_key_type MediaconnectRouterOutput#encryption_key_type}
  */
  readonly encryptionKeyType?: string;
}

export function mediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionToTerraform(struct?: MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_key_configuration: mediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationToTerraform(struct!.encryptionKeyConfiguration),
    encryption_key_type: cdktn.stringToTerraform(struct!.encryptionKeyType),
  }
}


export function mediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionToHclTerraform(struct?: MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_key_configuration: {
      value: mediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationToHclTerraform(struct!.encryptionKeyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration",
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

export class MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption | cdktn.IResolvable | undefined) {
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
  private _encryptionKeyConfiguration = new MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference(this, "encryption_key_configuration");
  public get encryptionKeyConfiguration() {
    return this._encryptionKeyConfiguration;
  }
  public putEncryptionKeyConfiguration(value: MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration) {
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
export interface MediaconnectRouterOutputConfigurationMediaLiveInput {
  /**
  * The encryption configuration that defines how content is encrypted during transit between MediaConnect Router and MediaLive. This configuration determines whether encryption keys are automatically managed by the service or manually managed through Secrets Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#destination_transit_encryption MediaconnectRouterOutput#destination_transit_encryption}
  */
  readonly destinationTransitEncryption?: MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption;
  /**
  * The ARN of the MediaLive input to connect to this router output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#media_live_input_arn MediaconnectRouterOutput#media_live_input_arn}
  */
  readonly mediaLiveInputArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#media_live_pipeline_id MediaconnectRouterOutput#media_live_pipeline_id}
  */
  readonly mediaLivePipelineId?: string;
}

export function mediaconnectRouterOutputConfigurationMediaLiveInputToTerraform(struct?: MediaconnectRouterOutputConfigurationMediaLiveInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_transit_encryption: mediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionToTerraform(struct!.destinationTransitEncryption),
    media_live_input_arn: cdktn.stringToTerraform(struct!.mediaLiveInputArn),
    media_live_pipeline_id: cdktn.stringToTerraform(struct!.mediaLivePipelineId),
  }
}


export function mediaconnectRouterOutputConfigurationMediaLiveInputToHclTerraform(struct?: MediaconnectRouterOutputConfigurationMediaLiveInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_transit_encryption: {
      value: mediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionToHclTerraform(struct!.destinationTransitEncryption),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption",
    },
    media_live_input_arn: {
      value: cdktn.stringToHclTerraform(struct!.mediaLiveInputArn),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputConfigurationMediaLiveInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationTransitEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTransitEncryption = this._destinationTransitEncryption?.internalValue;
    }
    if (this._mediaLiveInputArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaLiveInputArn = this._mediaLiveInputArn;
    }
    if (this._mediaLivePipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaLivePipelineId = this._mediaLivePipelineId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterOutputConfigurationMediaLiveInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationTransitEncryption.internalValue = undefined;
      this._mediaLiveInputArn = undefined;
      this._mediaLivePipelineId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationTransitEncryption.internalValue = value.destinationTransitEncryption;
      this._mediaLiveInputArn = value.mediaLiveInputArn;
      this._mediaLivePipelineId = value.mediaLivePipelineId;
    }
  }

  // destination_transit_encryption - computed: true, optional: true, required: false
  private _destinationTransitEncryption = new MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference(this, "destination_transit_encryption");
  public get destinationTransitEncryption() {
    return this._destinationTransitEncryption;
  }
  public putDestinationTransitEncryption(value: MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption) {
    this._destinationTransitEncryption.internalValue = value;
  }
  public resetDestinationTransitEncryption() {
    this._destinationTransitEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTransitEncryptionInput() {
    return this._destinationTransitEncryption.internalValue;
  }

  // media_live_input_arn - computed: true, optional: true, required: false
  private _mediaLiveInputArn?: string; 
  public get mediaLiveInputArn() {
    return this.getStringAttribute('media_live_input_arn');
  }
  public set mediaLiveInputArn(value: string) {
    this._mediaLiveInputArn = value;
  }
  public resetMediaLiveInputArn() {
    this._mediaLiveInputArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaLiveInputArnInput() {
    return this._mediaLiveInputArn;
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
}
export interface MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist {
  /**
  * The destination IP address for the RIST protocol in the router output configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#destination_address MediaconnectRouterOutput#destination_address}
  */
  readonly destinationAddress?: string;
  /**
  * The destination port number for the RIST protocol in the router output configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#destination_port MediaconnectRouterOutput#destination_port}
  */
  readonly destinationPort?: number;
}

export function mediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistToTerraform(struct?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_address: cdktn.stringToTerraform(struct!.destinationAddress),
    destination_port: cdktn.numberToTerraform(struct!.destinationPort),
  }
}


export function mediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistToHclTerraform(struct?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_address: {
      value: cdktn.stringToHclTerraform(struct!.destinationAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktn.numberToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddress = this._destinationAddress;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddress = undefined;
      this._destinationPort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddress = value.destinationAddress;
      this._destinationPort = value.destinationPort;
    }
  }

  // destination_address - computed: true, optional: true, required: false
  private _destinationAddress?: string; 
  public get destinationAddress() {
    return this.getStringAttribute('destination_address');
  }
  public set destinationAddress(value: string) {
    this._destinationAddress = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // destination_port - computed: true, optional: true, required: false
  private _destinationPort?: number; 
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }
  public set destinationPort(value: number) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }
}
export interface MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp {
  /**
  * The destination IP address for the RTP protocol in the router output configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#destination_address MediaconnectRouterOutput#destination_address}
  */
  readonly destinationAddress?: string;
  /**
  * The destination port number for the RTP protocol in the router output configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#destination_port MediaconnectRouterOutput#destination_port}
  */
  readonly destinationPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#forward_error_correction MediaconnectRouterOutput#forward_error_correction}
  */
  readonly forwardErrorCorrection?: string;
}

export function mediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpToTerraform(struct?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_address: cdktn.stringToTerraform(struct!.destinationAddress),
    destination_port: cdktn.numberToTerraform(struct!.destinationPort),
    forward_error_correction: cdktn.stringToTerraform(struct!.forwardErrorCorrection),
  }
}


export function mediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpToHclTerraform(struct?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_address: {
      value: cdktn.stringToHclTerraform(struct!.destinationAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktn.numberToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_error_correction: {
      value: cdktn.stringToHclTerraform(struct!.forwardErrorCorrection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddress = this._destinationAddress;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._forwardErrorCorrection !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardErrorCorrection = this._forwardErrorCorrection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddress = undefined;
      this._destinationPort = undefined;
      this._forwardErrorCorrection = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddress = value.destinationAddress;
      this._destinationPort = value.destinationPort;
      this._forwardErrorCorrection = value.forwardErrorCorrection;
    }
  }

  // destination_address - computed: true, optional: true, required: false
  private _destinationAddress?: string; 
  public get destinationAddress() {
    return this.getStringAttribute('destination_address');
  }
  public set destinationAddress(value: string) {
    this._destinationAddress = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // destination_port - computed: true, optional: true, required: false
  private _destinationPort?: number; 
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }
  public set destinationPort(value: number) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
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
}
export interface MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey {
  /**
  * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#role_arn MediaconnectRouterOutput#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The ARN of the Secrets Manager secret used for transit encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#secret_arn MediaconnectRouterOutput#secret_arn}
  */
  readonly secretArn?: string;
}

export function mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyToTerraform(struct?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyToHclTerraform(struct?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey | cdktn.IResolvable): any {
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

export class MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey | cdktn.IResolvable | undefined) {
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
export interface MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration {
  /**
  * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#encryption_key MediaconnectRouterOutput#encryption_key}
  */
  readonly encryptionKey?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey;
}

export function mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationToTerraform(struct?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_key: mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyToTerraform(struct!.encryptionKey),
  }
}


export function mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationToHclTerraform(struct?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_key: {
      value: mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyToHclTerraform(struct!.encryptionKey),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration | cdktn.IResolvable | undefined) {
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
  private _encryptionKey = new MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
  public putEncryptionKey(value: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey) {
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
export interface MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller {
  /**
  * The destination IP address for the SRT protocol in caller mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#destination_address MediaconnectRouterOutput#destination_address}
  */
  readonly destinationAddress?: string;
  /**
  * The destination port number for the SRT protocol in caller mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#destination_port MediaconnectRouterOutput#destination_port}
  */
  readonly destinationPort?: number;
  /**
  * Contains the configuration settings for encrypting SRT streams, including the encryption key details and encryption parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#encryption_configuration MediaconnectRouterOutput#encryption_configuration}
  */
  readonly encryptionConfiguration?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration;
  /**
  * The minimum latency in milliseconds for the SRT protocol in caller mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#minimum_latency_milliseconds MediaconnectRouterOutput#minimum_latency_milliseconds}
  */
  readonly minimumLatencyMilliseconds?: number;
  /**
  * The stream ID for the SRT protocol in caller mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#stream_id MediaconnectRouterOutput#stream_id}
  */
  readonly streamId?: string;
}

export function mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerToTerraform(struct?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_address: cdktn.stringToTerraform(struct!.destinationAddress),
    destination_port: cdktn.numberToTerraform(struct!.destinationPort),
    encryption_configuration: mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    minimum_latency_milliseconds: cdktn.numberToTerraform(struct!.minimumLatencyMilliseconds),
    stream_id: cdktn.stringToTerraform(struct!.streamId),
  }
}


export function mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerToHclTerraform(struct?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_address: {
      value: cdktn.stringToHclTerraform(struct!.destinationAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktn.numberToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encryption_configuration: {
      value: mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationToHclTerraform(struct!.encryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration",
    },
    minimum_latency_milliseconds: {
      value: cdktn.numberToHclTerraform(struct!.minimumLatencyMilliseconds),
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

export class MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddress = this._destinationAddress;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    if (this._minimumLatencyMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumLatencyMilliseconds = this._minimumLatencyMilliseconds;
    }
    if (this._streamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamId = this._streamId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddress = undefined;
      this._destinationPort = undefined;
      this._encryptionConfiguration.internalValue = undefined;
      this._minimumLatencyMilliseconds = undefined;
      this._streamId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddress = value.destinationAddress;
      this._destinationPort = value.destinationPort;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
      this._minimumLatencyMilliseconds = value.minimumLatencyMilliseconds;
      this._streamId = value.streamId;
    }
  }

  // destination_address - computed: true, optional: true, required: false
  private _destinationAddress?: string; 
  public get destinationAddress() {
    return this.getStringAttribute('destination_address');
  }
  public set destinationAddress(value: string) {
    this._destinationAddress = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // destination_port - computed: true, optional: true, required: false
  private _destinationPort?: number; 
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }
  public set destinationPort(value: number) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // encryption_configuration - computed: true, optional: true, required: false
  private _encryptionConfiguration = new MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
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
export interface MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey {
  /**
  * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#role_arn MediaconnectRouterOutput#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The ARN of the Secrets Manager secret used for transit encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#secret_arn MediaconnectRouterOutput#secret_arn}
  */
  readonly secretArn?: string;
}

export function mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyToTerraform(struct?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyToHclTerraform(struct?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey | cdktn.IResolvable): any {
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

export class MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey | cdktn.IResolvable | undefined) {
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
export interface MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration {
  /**
  * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#encryption_key MediaconnectRouterOutput#encryption_key}
  */
  readonly encryptionKey?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey;
}

export function mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationToTerraform(struct?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_key: mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyToTerraform(struct!.encryptionKey),
  }
}


export function mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationToHclTerraform(struct?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_key: {
      value: mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyToHclTerraform(struct!.encryptionKey),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration | cdktn.IResolvable | undefined) {
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
  private _encryptionKey = new MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
  public putEncryptionKey(value: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey) {
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
export interface MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener {
  /**
  * Contains the configuration settings for encrypting SRT streams, including the encryption key details and encryption parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#encryption_configuration MediaconnectRouterOutput#encryption_configuration}
  */
  readonly encryptionConfiguration?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration;
  /**
  * The minimum latency in milliseconds for the SRT protocol in listener mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#minimum_latency_milliseconds MediaconnectRouterOutput#minimum_latency_milliseconds}
  */
  readonly minimumLatencyMilliseconds?: number;
  /**
  * The port number for the SRT protocol in listener mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#port MediaconnectRouterOutput#port}
  */
  readonly port?: number;
}

export function mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerToTerraform(struct?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_configuration: mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    minimum_latency_milliseconds: cdktn.numberToTerraform(struct!.minimumLatencyMilliseconds),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerToHclTerraform(struct?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_configuration: {
      value: mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationToHclTerraform(struct!.encryptionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration",
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

export class MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
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

  public set internalValue(value: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionConfiguration.internalValue = undefined;
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
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
      this._minimumLatencyMilliseconds = value.minimumLatencyMilliseconds;
      this._port = value.port;
    }
  }

  // encryption_configuration - computed: true, optional: true, required: false
  private _encryptionConfiguration = new MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
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
export interface MediaconnectRouterOutputConfigurationStandardProtocolConfiguration {
  /**
  * The configuration settings for a router output using the RIST (Reliable Internet Stream Transport) protocol, including the destination address and port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#rist MediaconnectRouterOutput#rist}
  */
  readonly rist?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist;
  /**
  * The configuration settings for a router output using the RTP (Real-Time Transport Protocol) protocol, including the destination address and port, and forward error correction state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#rtp MediaconnectRouterOutput#rtp}
  */
  readonly rtp?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp;
  /**
  * The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in caller mode, including the destination address and port, minimum latency, stream ID, and encryption key configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#srt_caller MediaconnectRouterOutput#srt_caller}
  */
  readonly srtCaller?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller;
  /**
  * The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and encryption key configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#srt_listener MediaconnectRouterOutput#srt_listener}
  */
  readonly srtListener?: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener;
}

export function mediaconnectRouterOutputConfigurationStandardProtocolConfigurationToTerraform(struct?: MediaconnectRouterOutputConfigurationStandardProtocolConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rist: mediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistToTerraform(struct!.rist),
    rtp: mediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpToTerraform(struct!.rtp),
    srt_caller: mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerToTerraform(struct!.srtCaller),
    srt_listener: mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerToTerraform(struct!.srtListener),
  }
}


export function mediaconnectRouterOutputConfigurationStandardProtocolConfigurationToHclTerraform(struct?: MediaconnectRouterOutputConfigurationStandardProtocolConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rist: {
      value: mediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistToHclTerraform(struct!.rist),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist",
    },
    rtp: {
      value: mediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpToHclTerraform(struct!.rtp),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp",
    },
    srt_caller: {
      value: mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerToHclTerraform(struct!.srtCaller),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller",
    },
    srt_listener: {
      value: mediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerToHclTerraform(struct!.srtListener),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputConfigurationStandardProtocolConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectRouterOutputConfigurationStandardProtocolConfiguration | cdktn.IResolvable | undefined) {
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
  private _rist = new MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference(this, "rist");
  public get rist() {
    return this._rist;
  }
  public putRist(value: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist) {
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
  private _rtp = new MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference(this, "rtp");
  public get rtp() {
    return this._rtp;
  }
  public putRtp(value: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp) {
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
  private _srtCaller = new MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference(this, "srt_caller");
  public get srtCaller() {
    return this._srtCaller;
  }
  public putSrtCaller(value: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller) {
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
  private _srtListener = new MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference(this, "srt_listener");
  public get srtListener() {
    return this._srtListener;
  }
  public putSrtListener(value: MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener) {
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
export interface MediaconnectRouterOutputConfigurationStandard {
  /**
  * The Amazon Resource Name (ARN) of the network interface associated with the standard router output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#network_interface_arn MediaconnectRouterOutput#network_interface_arn}
  */
  readonly networkInterfaceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#protocol MediaconnectRouterOutput#protocol}
  */
  readonly protocol?: string;
  /**
  * The protocol configuration settings for a router output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#protocol_configuration MediaconnectRouterOutput#protocol_configuration}
  */
  readonly protocolConfiguration?: MediaconnectRouterOutputConfigurationStandardProtocolConfiguration;
}

export function mediaconnectRouterOutputConfigurationStandardToTerraform(struct?: MediaconnectRouterOutputConfigurationStandard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_interface_arn: cdktn.stringToTerraform(struct!.networkInterfaceArn),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    protocol_configuration: mediaconnectRouterOutputConfigurationStandardProtocolConfigurationToTerraform(struct!.protocolConfiguration),
  }
}


export function mediaconnectRouterOutputConfigurationStandardToHclTerraform(struct?: MediaconnectRouterOutputConfigurationStandard | cdktn.IResolvable): any {
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
      value: mediaconnectRouterOutputConfigurationStandardProtocolConfigurationToHclTerraform(struct!.protocolConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterOutputConfigurationStandardProtocolConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterOutputConfigurationStandardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputConfigurationStandard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectRouterOutputConfigurationStandard | cdktn.IResolvable | undefined) {
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
  private _protocolConfiguration = new MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference(this, "protocol_configuration");
  public get protocolConfiguration() {
    return this._protocolConfiguration;
  }
  public putProtocolConfiguration(value: MediaconnectRouterOutputConfigurationStandardProtocolConfiguration) {
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
export interface MediaconnectRouterOutputConfiguration {
  /**
  * Configuration settings for connecting a router output to a MediaConnect flow source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#media_connect_flow MediaconnectRouterOutput#media_connect_flow}
  */
  readonly mediaConnectFlow?: MediaconnectRouterOutputConfigurationMediaConnectFlow;
  /**
  * Configuration settings for connecting a router output to a MediaLive input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#media_live_input MediaconnectRouterOutput#media_live_input}
  */
  readonly mediaLiveInput?: MediaconnectRouterOutputConfigurationMediaLiveInput;
  /**
  * The configuration settings for a standard router output, including the protocol, protocol-specific configuration, network interface, and availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#standard MediaconnectRouterOutput#standard}
  */
  readonly standard?: MediaconnectRouterOutputConfigurationStandard;
}

export function mediaconnectRouterOutputConfigurationToTerraform(struct?: MediaconnectRouterOutputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    media_connect_flow: mediaconnectRouterOutputConfigurationMediaConnectFlowToTerraform(struct!.mediaConnectFlow),
    media_live_input: mediaconnectRouterOutputConfigurationMediaLiveInputToTerraform(struct!.mediaLiveInput),
    standard: mediaconnectRouterOutputConfigurationStandardToTerraform(struct!.standard),
  }
}


export function mediaconnectRouterOutputConfigurationToHclTerraform(struct?: MediaconnectRouterOutputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    media_connect_flow: {
      value: mediaconnectRouterOutputConfigurationMediaConnectFlowToHclTerraform(struct!.mediaConnectFlow),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterOutputConfigurationMediaConnectFlow",
    },
    media_live_input: {
      value: mediaconnectRouterOutputConfigurationMediaLiveInputToHclTerraform(struct!.mediaLiveInput),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterOutputConfigurationMediaLiveInput",
    },
    standard: {
      value: mediaconnectRouterOutputConfigurationStandardToHclTerraform(struct!.standard),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterOutputConfigurationStandard",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterOutputConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mediaConnectFlow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaConnectFlow = this._mediaConnectFlow?.internalValue;
    }
    if (this._mediaLiveInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaLiveInput = this._mediaLiveInput?.internalValue;
    }
    if (this._standard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standard = this._standard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterOutputConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mediaConnectFlow.internalValue = undefined;
      this._mediaLiveInput.internalValue = undefined;
      this._standard.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mediaConnectFlow.internalValue = value.mediaConnectFlow;
      this._mediaLiveInput.internalValue = value.mediaLiveInput;
      this._standard.internalValue = value.standard;
    }
  }

  // media_connect_flow - computed: true, optional: true, required: false
  private _mediaConnectFlow = new MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference(this, "media_connect_flow");
  public get mediaConnectFlow() {
    return this._mediaConnectFlow;
  }
  public putMediaConnectFlow(value: MediaconnectRouterOutputConfigurationMediaConnectFlow) {
    this._mediaConnectFlow.internalValue = value;
  }
  public resetMediaConnectFlow() {
    this._mediaConnectFlow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaConnectFlowInput() {
    return this._mediaConnectFlow.internalValue;
  }

  // media_live_input - computed: true, optional: true, required: false
  private _mediaLiveInput = new MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference(this, "media_live_input");
  public get mediaLiveInput() {
    return this._mediaLiveInput;
  }
  public putMediaLiveInput(value: MediaconnectRouterOutputConfigurationMediaLiveInput) {
    this._mediaLiveInput.internalValue = value;
  }
  public resetMediaLiveInput() {
    this._mediaLiveInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaLiveInputInput() {
    return this._mediaLiveInput.internalValue;
  }

  // standard - computed: true, optional: true, required: false
  private _standard = new MediaconnectRouterOutputConfigurationStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
  public putStandard(value: MediaconnectRouterOutputConfigurationStandard) {
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
export interface MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#day MediaconnectRouterOutput#day}
  */
  readonly day?: string;
  /**
  * The preferred time for maintenance operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#time MediaconnectRouterOutput#time}
  */
  readonly time?: string;
}

export function mediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeToTerraform(struct?: MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day: cdktn.stringToTerraform(struct!.day),
    time: cdktn.stringToTerraform(struct!.time),
  }
}


export function mediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeToHclTerraform(struct?: MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime | cdktn.IResolvable): any {
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

export class MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime | cdktn.IResolvable | undefined) {
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
export interface MediaconnectRouterOutputMaintenanceConfiguration {
  /**
  * Configuration settings for default maintenance scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#default MediaconnectRouterOutput#default}
  */
  readonly default?: string;
  /**
  * Configuration for preferred day and time maintenance settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#preferred_day_time MediaconnectRouterOutput#preferred_day_time}
  */
  readonly preferredDayTime?: MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime;
}

export function mediaconnectRouterOutputMaintenanceConfigurationToTerraform(struct?: MediaconnectRouterOutputMaintenanceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default: cdktn.stringToTerraform(struct!.default),
    preferred_day_time: mediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeToTerraform(struct!.preferredDayTime),
  }
}


export function mediaconnectRouterOutputMaintenanceConfigurationToHclTerraform(struct?: MediaconnectRouterOutputMaintenanceConfiguration | cdktn.IResolvable): any {
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
      value: mediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeToHclTerraform(struct!.preferredDayTime),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterOutputMaintenanceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterOutputMaintenanceConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectRouterOutputMaintenanceConfiguration | cdktn.IResolvable | undefined) {
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
  private _preferredDayTime = new MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference(this, "preferred_day_time");
  public get preferredDayTime() {
    return this._preferredDayTime;
  }
  public putPreferredDayTime(value: MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime) {
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
export interface MediaconnectRouterOutputTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#key MediaconnectRouterOutput#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#value MediaconnectRouterOutput#value}
  */
  readonly value?: string;
}

export function mediaconnectRouterOutputTagsToTerraform(struct?: MediaconnectRouterOutputTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function mediaconnectRouterOutputTagsToHclTerraform(struct?: MediaconnectRouterOutputTags | cdktn.IResolvable): any {
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

export class MediaconnectRouterOutputTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectRouterOutputTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectRouterOutputTags | cdktn.IResolvable | undefined) {
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

export class MediaconnectRouterOutputTagsList extends cdktn.ComplexList {
  public internalValue? : MediaconnectRouterOutputTags[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectRouterOutputTagsOutputReference {
    return new MediaconnectRouterOutputTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output awscc_mediaconnect_router_output}
*/
export class MediaconnectRouterOutput extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediaconnect_router_output";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MediaconnectRouterOutput resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediaconnectRouterOutput to import
  * @param importFromId The id of the existing MediaconnectRouterOutput that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediaconnectRouterOutput to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_router_output", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_router_output awscc_mediaconnect_router_output} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaconnectRouterOutputConfig
  */
  public constructor(scope: Construct, id: string, config: MediaconnectRouterOutputConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconnect_router_output',
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
    this._availabilityZone = config.availabilityZone;
    this._configuration.internalValue = config.configuration;
    this._maintenanceConfiguration.internalValue = config.maintenanceConfiguration;
    this._maximumBitrate = config.maximumBitrate;
    this._name = config.name;
    this._regionName = config.regionName;
    this._routingScope = config.routingScope;
    this._tags.internalValue = config.tags;
    this._tier = config.tier;
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
  private _configuration = new MediaconnectRouterOutputConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: MediaconnectRouterOutputConfiguration) {
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // maintenance_configuration - computed: true, optional: true, required: false
  private _maintenanceConfiguration = new MediaconnectRouterOutputMaintenanceConfigurationOutputReference(this, "maintenance_configuration");
  public get maintenanceConfiguration() {
    return this._maintenanceConfiguration;
  }
  public putMaintenanceConfiguration(value: MediaconnectRouterOutputMaintenanceConfiguration) {
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

  // output_type - computed: true, optional: false, required: false
  public get outputType() {
    return this.getStringAttribute('output_type');
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

  // routed_state - computed: true, optional: false, required: false
  public get routedState() {
    return this.getStringAttribute('routed_state');
  }

  // router_output_id - computed: true, optional: false, required: false
  public get routerOutputId() {
    return this.getStringAttribute('router_output_id');
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
  private _tags = new MediaconnectRouterOutputTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MediaconnectRouterOutputTags[] | cdktn.IResolvable) {
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
      configuration: mediaconnectRouterOutputConfigurationToTerraform(this._configuration.internalValue),
      maintenance_configuration: mediaconnectRouterOutputMaintenanceConfigurationToTerraform(this._maintenanceConfiguration.internalValue),
      maximum_bitrate: cdktn.numberToTerraform(this._maximumBitrate),
      name: cdktn.stringToTerraform(this._name),
      region_name: cdktn.stringToTerraform(this._regionName),
      routing_scope: cdktn.stringToTerraform(this._routingScope),
      tags: cdktn.listMapper(mediaconnectRouterOutputTagsToTerraform, false)(this._tags.internalValue),
      tier: cdktn.stringToTerraform(this._tier),
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
        value: mediaconnectRouterOutputConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaconnectRouterOutputConfiguration",
      },
      maintenance_configuration: {
        value: mediaconnectRouterOutputMaintenanceConfigurationToHclTerraform(this._maintenanceConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaconnectRouterOutputMaintenanceConfiguration",
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
        value: cdktn.listMapperHcl(mediaconnectRouterOutputTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediaconnectRouterOutputTagsList",
      },
      tier: {
        value: cdktn.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
