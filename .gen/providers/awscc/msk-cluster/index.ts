// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MskClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#broker_node_group_info MskCluster#broker_node_group_info}
  */
  readonly brokerNodeGroupInfo: MskClusterBrokerNodeGroupInfo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#client_authentication MskCluster#client_authentication}
  */
  readonly clientAuthentication?: MskClusterClientAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#cluster_name MskCluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#configuration_info MskCluster#configuration_info}
  */
  readonly configurationInfo?: MskClusterConfigurationInfo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#encryption_info MskCluster#encryption_info}
  */
  readonly encryptionInfo?: MskClusterEncryptionInfo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#enhanced_monitoring MskCluster#enhanced_monitoring}
  */
  readonly enhancedMonitoring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#kafka_version MskCluster#kafka_version}
  */
  readonly kafkaVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#logging_info MskCluster#logging_info}
  */
  readonly loggingInfo?: MskClusterLoggingInfo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#number_of_broker_nodes MskCluster#number_of_broker_nodes}
  */
  readonly numberOfBrokerNodes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#open_monitoring MskCluster#open_monitoring}
  */
  readonly openMonitoring?: MskClusterOpenMonitoring;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#rebalancing MskCluster#rebalancing}
  */
  readonly rebalancing?: MskClusterRebalancing;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#storage_mode MskCluster#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * A key-value pair to associate with a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#tags MskCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#zookeeper_access MskCluster#zookeeper_access}
  */
  readonly zookeeperAccess?: MskClusterZookeeperAccess;
}
export interface MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#type MskCluster#type}
  */
  readonly type?: string;
}

export function mskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessToTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function mskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#enabled MskCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamToTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#enabled MskCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramToTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#iam MskCluster#iam}
  */
  readonly iam?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#scram MskCluster#scram}
  */
  readonly scram?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram;
}

export function mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslToTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iam: mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamToTerraform(struct!.iam),
    scram: mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramToTerraform(struct!.scram),
  }
}


export function mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iam: {
      value: mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamToHclTerraform(struct!.iam),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam",
    },
    scram: {
      value: mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramToHclTerraform(struct!.scram),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iam = this._iam?.internalValue;
    }
    if (this._scram?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scram = this._scram?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iam.internalValue = undefined;
      this._scram.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iam.internalValue = value.iam;
      this._scram.internalValue = value.scram;
    }
  }

  // iam - computed: true, optional: true, required: false
  private _iam = new MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference(this, "iam");
  public get iam() {
    return this._iam;
  }
  public putIam(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam) {
    this._iam.internalValue = value;
  }
  public resetIam() {
    this._iam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInput() {
    return this._iam.internalValue;
  }

  // scram - computed: true, optional: true, required: false
  private _scram = new MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference(this, "scram");
  public get scram() {
    return this._scram;
  }
  public putScram(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram) {
    this._scram.internalValue = value;
  }
  public resetScram() {
    this._scram.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scramInput() {
    return this._scram.internalValue;
  }
}
export interface MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#enabled MskCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsToTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#sasl MskCluster#sasl}
  */
  readonly sasl?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#tls MskCluster#tls}
  */
  readonly tls?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls;
}

export function mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationToTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sasl: mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslToTerraform(struct!.sasl),
    tls: mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsToTerraform(struct!.tls),
  }
}


export function mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sasl: {
      value: mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslToHclTerraform(struct!.sasl),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl",
    },
    tls: {
      value: mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sasl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasl = this._sasl?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sasl.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sasl.internalValue = value.sasl;
      this._tls.internalValue = value.tls;
    }
  }

  // sasl - computed: true, optional: true, required: false
  private _sasl = new MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference(this, "sasl");
  public get sasl() {
    return this._sasl;
  }
  public putSasl(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl) {
    this._sasl.internalValue = value;
  }
  public resetSasl() {
    this._sasl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslInput() {
    return this._sasl.internalValue;
  }

  // tls - computed: true, optional: true, required: false
  private _tls = new MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#client_authentication MskCluster#client_authentication}
  */
  readonly clientAuthentication?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication;
}

export function mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityToTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_authentication: mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationToTerraform(struct!.clientAuthentication),
  }
}


export function mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_authentication: {
      value: mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationToHclTerraform(struct!.clientAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthentication = this._clientAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientAuthentication.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientAuthentication.internalValue = value.clientAuthentication;
    }
  }

  // client_authentication - computed: true, optional: true, required: false
  private _clientAuthentication = new MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference(this, "client_authentication");
  public get clientAuthentication() {
    return this._clientAuthentication;
  }
  public putClientAuthentication(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication) {
    this._clientAuthentication.internalValue = value;
  }
  public resetClientAuthentication() {
    this._clientAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticationInput() {
    return this._clientAuthentication.internalValue;
  }
}
export interface MskClusterBrokerNodeGroupInfoConnectivityInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#network_type MskCluster#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#public_access MskCluster#public_access}
  */
  readonly publicAccess?: MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#vpc_connectivity MskCluster#vpc_connectivity}
  */
  readonly vpcConnectivity?: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity;
}

export function mskClusterBrokerNodeGroupInfoConnectivityInfoToTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_type: cdktn.stringToTerraform(struct!.networkType),
    public_access: mskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessToTerraform(struct!.publicAccess),
    vpc_connectivity: mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityToTerraform(struct!.vpcConnectivity),
  }
}


export function mskClusterBrokerNodeGroupInfoConnectivityInfoToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoConnectivityInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_type: {
      value: cdktn.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_access: {
      value: mskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess",
    },
    vpc_connectivity: {
      value: mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityToHclTerraform(struct!.vpcConnectivity),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterBrokerNodeGroupInfoConnectivityInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._publicAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess?.internalValue;
    }
    if (this._vpcConnectivity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConnectivity = this._vpcConnectivity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterBrokerNodeGroupInfoConnectivityInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkType = undefined;
      this._publicAccess.internalValue = undefined;
      this._vpcConnectivity.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkType = value.networkType;
      this._publicAccess.internalValue = value.publicAccess;
      this._vpcConnectivity.internalValue = value.vpcConnectivity;
    }
  }

  // network_type - computed: true, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // public_access - computed: true, optional: true, required: false
  private _publicAccess = new MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess) {
    this._publicAccess.internalValue = value;
  }
  public resetPublicAccess() {
    this._publicAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess.internalValue;
  }

  // vpc_connectivity - computed: true, optional: true, required: false
  private _vpcConnectivity = new MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference(this, "vpc_connectivity");
  public get vpcConnectivity() {
    return this._vpcConnectivity;
  }
  public putVpcConnectivity(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity) {
    this._vpcConnectivity.internalValue = value;
  }
  public resetVpcConnectivity() {
    this._vpcConnectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectivityInput() {
    return this._vpcConnectivity.internalValue;
  }
}
export interface MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#enabled MskCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#volume_throughput MskCluster#volume_throughput}
  */
  readonly volumeThroughput?: number;
}

export function mskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputToTerraform(struct?: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    volume_throughput: cdktn.numberToTerraform(struct!.volumeThroughput),
  }
}


export function mskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_throughput: {
      value: cdktn.numberToHclTerraform(struct!.volumeThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._volumeThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeThroughput = this._volumeThroughput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._volumeThroughput = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._volumeThroughput = value.volumeThroughput;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // volume_throughput - computed: true, optional: true, required: false
  private _volumeThroughput?: number; 
  public get volumeThroughput() {
    return this.getNumberAttribute('volume_throughput');
  }
  public set volumeThroughput(value: number) {
    this._volumeThroughput = value;
  }
  public resetVolumeThroughput() {
    this._volumeThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeThroughputInput() {
    return this._volumeThroughput;
  }
}
export interface MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#provisioned_throughput MskCluster#provisioned_throughput}
  */
  readonly provisionedThroughput?: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#volume_size MskCluster#volume_size}
  */
  readonly volumeSize?: number;
}

export function mskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoToTerraform(struct?: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    provisioned_throughput: mskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputToTerraform(struct!.provisionedThroughput),
    volume_size: cdktn.numberToTerraform(struct!.volumeSize),
  }
}


export function mskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    provisioned_throughput: {
      value: mskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputToHclTerraform(struct!.provisionedThroughput),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput",
    },
    volume_size: {
      value: cdktn.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provisionedThroughput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedThroughput = this._provisionedThroughput?.internalValue;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provisionedThroughput.internalValue = undefined;
      this._volumeSize = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provisionedThroughput.internalValue = value.provisionedThroughput;
      this._volumeSize = value.volumeSize;
    }
  }

  // provisioned_throughput - computed: true, optional: true, required: false
  private _provisionedThroughput = new MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference(this, "provisioned_throughput");
  public get provisionedThroughput() {
    return this._provisionedThroughput;
  }
  public putProvisionedThroughput(value: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput) {
    this._provisionedThroughput.internalValue = value;
  }
  public resetProvisionedThroughput() {
    this._provisionedThroughput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputInput() {
    return this._provisionedThroughput.internalValue;
  }

  // volume_size - computed: true, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }
}
export interface MskClusterBrokerNodeGroupInfoStorageInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#ebs_storage_info MskCluster#ebs_storage_info}
  */
  readonly ebsStorageInfo?: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo;
}

export function mskClusterBrokerNodeGroupInfoStorageInfoToTerraform(struct?: MskClusterBrokerNodeGroupInfoStorageInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ebs_storage_info: mskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoToTerraform(struct!.ebsStorageInfo),
  }
}


export function mskClusterBrokerNodeGroupInfoStorageInfoToHclTerraform(struct?: MskClusterBrokerNodeGroupInfoStorageInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ebs_storage_info: {
      value: mskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoToHclTerraform(struct!.ebsStorageInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterBrokerNodeGroupInfoStorageInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterBrokerNodeGroupInfoStorageInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ebsStorageInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsStorageInfo = this._ebsStorageInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterBrokerNodeGroupInfoStorageInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ebsStorageInfo.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ebsStorageInfo.internalValue = value.ebsStorageInfo;
    }
  }

  // ebs_storage_info - computed: true, optional: true, required: false
  private _ebsStorageInfo = new MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference(this, "ebs_storage_info");
  public get ebsStorageInfo() {
    return this._ebsStorageInfo;
  }
  public putEbsStorageInfo(value: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo) {
    this._ebsStorageInfo.internalValue = value;
  }
  public resetEbsStorageInfo() {
    this._ebsStorageInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsStorageInfoInput() {
    return this._ebsStorageInfo.internalValue;
  }
}
export interface MskClusterBrokerNodeGroupInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#broker_az_distribution MskCluster#broker_az_distribution}
  */
  readonly brokerAzDistribution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#client_subnets MskCluster#client_subnets}
  */
  readonly clientSubnets: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#connectivity_info MskCluster#connectivity_info}
  */
  readonly connectivityInfo?: MskClusterBrokerNodeGroupInfoConnectivityInfo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#instance_type MskCluster#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#security_groups MskCluster#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#storage_info MskCluster#storage_info}
  */
  readonly storageInfo?: MskClusterBrokerNodeGroupInfoStorageInfo;
}

export function mskClusterBrokerNodeGroupInfoToTerraform(struct?: MskClusterBrokerNodeGroupInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    broker_az_distribution: cdktn.stringToTerraform(struct!.brokerAzDistribution),
    client_subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.clientSubnets),
    connectivity_info: mskClusterBrokerNodeGroupInfoConnectivityInfoToTerraform(struct!.connectivityInfo),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    storage_info: mskClusterBrokerNodeGroupInfoStorageInfoToTerraform(struct!.storageInfo),
  }
}


export function mskClusterBrokerNodeGroupInfoToHclTerraform(struct?: MskClusterBrokerNodeGroupInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    broker_az_distribution: {
      value: cdktn.stringToHclTerraform(struct!.brokerAzDistribution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.clientSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    connectivity_info: {
      value: mskClusterBrokerNodeGroupInfoConnectivityInfoToHclTerraform(struct!.connectivityInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterBrokerNodeGroupInfoConnectivityInfo",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    storage_info: {
      value: mskClusterBrokerNodeGroupInfoStorageInfoToHclTerraform(struct!.storageInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterBrokerNodeGroupInfoStorageInfo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterBrokerNodeGroupInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterBrokerNodeGroupInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokerAzDistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerAzDistribution = this._brokerAzDistribution;
    }
    if (this._clientSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSubnets = this._clientSubnets;
    }
    if (this._connectivityInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivityInfo = this._connectivityInfo?.internalValue;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._storageInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageInfo = this._storageInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterBrokerNodeGroupInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._brokerAzDistribution = undefined;
      this._clientSubnets = undefined;
      this._connectivityInfo.internalValue = undefined;
      this._instanceType = undefined;
      this._securityGroups = undefined;
      this._storageInfo.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._brokerAzDistribution = value.brokerAzDistribution;
      this._clientSubnets = value.clientSubnets;
      this._connectivityInfo.internalValue = value.connectivityInfo;
      this._instanceType = value.instanceType;
      this._securityGroups = value.securityGroups;
      this._storageInfo.internalValue = value.storageInfo;
    }
  }

  // broker_az_distribution - computed: true, optional: true, required: false
  private _brokerAzDistribution?: string; 
  public get brokerAzDistribution() {
    return this.getStringAttribute('broker_az_distribution');
  }
  public set brokerAzDistribution(value: string) {
    this._brokerAzDistribution = value;
  }
  public resetBrokerAzDistribution() {
    this._brokerAzDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerAzDistributionInput() {
    return this._brokerAzDistribution;
  }

  // client_subnets - computed: false, optional: false, required: true
  private _clientSubnets?: string[]; 
  public get clientSubnets() {
    return this.getListAttribute('client_subnets');
  }
  public set clientSubnets(value: string[]) {
    this._clientSubnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetsInput() {
    return this._clientSubnets;
  }

  // connectivity_info - computed: true, optional: true, required: false
  private _connectivityInfo = new MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference(this, "connectivity_info");
  public get connectivityInfo() {
    return this._connectivityInfo;
  }
  public putConnectivityInfo(value: MskClusterBrokerNodeGroupInfoConnectivityInfo) {
    this._connectivityInfo.internalValue = value;
  }
  public resetConnectivityInfo() {
    this._connectivityInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityInfoInput() {
    return this._connectivityInfo.internalValue;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
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

  // storage_info - computed: true, optional: true, required: false
  private _storageInfo = new MskClusterBrokerNodeGroupInfoStorageInfoOutputReference(this, "storage_info");
  public get storageInfo() {
    return this._storageInfo;
  }
  public putStorageInfo(value: MskClusterBrokerNodeGroupInfoStorageInfo) {
    this._storageInfo.internalValue = value;
  }
  public resetStorageInfo() {
    this._storageInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInfoInput() {
    return this._storageInfo.internalValue;
  }
}
export interface MskClusterClientAuthenticationSaslIam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#enabled MskCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function mskClusterClientAuthenticationSaslIamToTerraform(struct?: MskClusterClientAuthenticationSaslIam | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function mskClusterClientAuthenticationSaslIamToHclTerraform(struct?: MskClusterClientAuthenticationSaslIam | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterClientAuthenticationSaslIamOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterClientAuthenticationSaslIam | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterClientAuthenticationSaslIam | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface MskClusterClientAuthenticationSaslScram {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#enabled MskCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function mskClusterClientAuthenticationSaslScramToTerraform(struct?: MskClusterClientAuthenticationSaslScram | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function mskClusterClientAuthenticationSaslScramToHclTerraform(struct?: MskClusterClientAuthenticationSaslScram | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterClientAuthenticationSaslScramOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterClientAuthenticationSaslScram | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterClientAuthenticationSaslScram | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface MskClusterClientAuthenticationSasl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#iam MskCluster#iam}
  */
  readonly iam?: MskClusterClientAuthenticationSaslIam;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#scram MskCluster#scram}
  */
  readonly scram?: MskClusterClientAuthenticationSaslScram;
}

export function mskClusterClientAuthenticationSaslToTerraform(struct?: MskClusterClientAuthenticationSasl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iam: mskClusterClientAuthenticationSaslIamToTerraform(struct!.iam),
    scram: mskClusterClientAuthenticationSaslScramToTerraform(struct!.scram),
  }
}


export function mskClusterClientAuthenticationSaslToHclTerraform(struct?: MskClusterClientAuthenticationSasl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iam: {
      value: mskClusterClientAuthenticationSaslIamToHclTerraform(struct!.iam),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterClientAuthenticationSaslIam",
    },
    scram: {
      value: mskClusterClientAuthenticationSaslScramToHclTerraform(struct!.scram),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterClientAuthenticationSaslScram",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterClientAuthenticationSaslOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterClientAuthenticationSasl | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iam = this._iam?.internalValue;
    }
    if (this._scram?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scram = this._scram?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterClientAuthenticationSasl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iam.internalValue = undefined;
      this._scram.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iam.internalValue = value.iam;
      this._scram.internalValue = value.scram;
    }
  }

  // iam - computed: true, optional: true, required: false
  private _iam = new MskClusterClientAuthenticationSaslIamOutputReference(this, "iam");
  public get iam() {
    return this._iam;
  }
  public putIam(value: MskClusterClientAuthenticationSaslIam) {
    this._iam.internalValue = value;
  }
  public resetIam() {
    this._iam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInput() {
    return this._iam.internalValue;
  }

  // scram - computed: true, optional: true, required: false
  private _scram = new MskClusterClientAuthenticationSaslScramOutputReference(this, "scram");
  public get scram() {
    return this._scram;
  }
  public putScram(value: MskClusterClientAuthenticationSaslScram) {
    this._scram.internalValue = value;
  }
  public resetScram() {
    this._scram.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scramInput() {
    return this._scram.internalValue;
  }
}
export interface MskClusterClientAuthenticationTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#certificate_authority_arn_list MskCluster#certificate_authority_arn_list}
  */
  readonly certificateAuthorityArnList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#enabled MskCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function mskClusterClientAuthenticationTlsToTerraform(struct?: MskClusterClientAuthenticationTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_authority_arn_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.certificateAuthorityArnList),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function mskClusterClientAuthenticationTlsToHclTerraform(struct?: MskClusterClientAuthenticationTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_authority_arn_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.certificateAuthorityArnList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterClientAuthenticationTlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterClientAuthenticationTls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAuthorityArnList !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityArnList = this._certificateAuthorityArnList;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterClientAuthenticationTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateAuthorityArnList = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateAuthorityArnList = value.certificateAuthorityArnList;
      this._enabled = value.enabled;
    }
  }

  // certificate_authority_arn_list - computed: true, optional: true, required: false
  private _certificateAuthorityArnList?: string[]; 
  public get certificateAuthorityArnList() {
    return this.getListAttribute('certificate_authority_arn_list');
  }
  public set certificateAuthorityArnList(value: string[]) {
    this._certificateAuthorityArnList = value;
  }
  public resetCertificateAuthorityArnList() {
    this._certificateAuthorityArnList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnListInput() {
    return this._certificateAuthorityArnList;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface MskClusterClientAuthenticationUnauthenticated {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#enabled MskCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function mskClusterClientAuthenticationUnauthenticatedToTerraform(struct?: MskClusterClientAuthenticationUnauthenticated | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function mskClusterClientAuthenticationUnauthenticatedToHclTerraform(struct?: MskClusterClientAuthenticationUnauthenticated | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterClientAuthenticationUnauthenticatedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterClientAuthenticationUnauthenticated | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterClientAuthenticationUnauthenticated | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface MskClusterClientAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#sasl MskCluster#sasl}
  */
  readonly sasl?: MskClusterClientAuthenticationSasl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#tls MskCluster#tls}
  */
  readonly tls?: MskClusterClientAuthenticationTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#unauthenticated MskCluster#unauthenticated}
  */
  readonly unauthenticated?: MskClusterClientAuthenticationUnauthenticated;
}

export function mskClusterClientAuthenticationToTerraform(struct?: MskClusterClientAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sasl: mskClusterClientAuthenticationSaslToTerraform(struct!.sasl),
    tls: mskClusterClientAuthenticationTlsToTerraform(struct!.tls),
    unauthenticated: mskClusterClientAuthenticationUnauthenticatedToTerraform(struct!.unauthenticated),
  }
}


export function mskClusterClientAuthenticationToHclTerraform(struct?: MskClusterClientAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sasl: {
      value: mskClusterClientAuthenticationSaslToHclTerraform(struct!.sasl),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterClientAuthenticationSasl",
    },
    tls: {
      value: mskClusterClientAuthenticationTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterClientAuthenticationTls",
    },
    unauthenticated: {
      value: mskClusterClientAuthenticationUnauthenticatedToHclTerraform(struct!.unauthenticated),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterClientAuthenticationUnauthenticated",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterClientAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterClientAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sasl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasl = this._sasl?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._unauthenticated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthenticated = this._unauthenticated?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterClientAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sasl.internalValue = undefined;
      this._tls.internalValue = undefined;
      this._unauthenticated.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sasl.internalValue = value.sasl;
      this._tls.internalValue = value.tls;
      this._unauthenticated.internalValue = value.unauthenticated;
    }
  }

  // sasl - computed: true, optional: true, required: false
  private _sasl = new MskClusterClientAuthenticationSaslOutputReference(this, "sasl");
  public get sasl() {
    return this._sasl;
  }
  public putSasl(value: MskClusterClientAuthenticationSasl) {
    this._sasl.internalValue = value;
  }
  public resetSasl() {
    this._sasl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslInput() {
    return this._sasl.internalValue;
  }

  // tls - computed: true, optional: true, required: false
  private _tls = new MskClusterClientAuthenticationTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: MskClusterClientAuthenticationTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // unauthenticated - computed: true, optional: true, required: false
  private _unauthenticated = new MskClusterClientAuthenticationUnauthenticatedOutputReference(this, "unauthenticated");
  public get unauthenticated() {
    return this._unauthenticated;
  }
  public putUnauthenticated(value: MskClusterClientAuthenticationUnauthenticated) {
    this._unauthenticated.internalValue = value;
  }
  public resetUnauthenticated() {
    this._unauthenticated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthenticatedInput() {
    return this._unauthenticated.internalValue;
  }
}
export interface MskClusterConfigurationInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#arn MskCluster#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#revision MskCluster#revision}
  */
  readonly revision?: number;
}

export function mskClusterConfigurationInfoToTerraform(struct?: MskClusterConfigurationInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    revision: cdktn.numberToTerraform(struct!.revision),
  }
}


export function mskClusterConfigurationInfoToHclTerraform(struct?: MskClusterConfigurationInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktn.numberToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterConfigurationInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterConfigurationInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterConfigurationInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._revision = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._revision = value.revision;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // revision - computed: true, optional: true, required: false
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
export interface MskClusterEncryptionInfoEncryptionAtRest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#data_volume_kms_key_id MskCluster#data_volume_kms_key_id}
  */
  readonly dataVolumeKmsKeyId?: string;
}

export function mskClusterEncryptionInfoEncryptionAtRestToTerraform(struct?: MskClusterEncryptionInfoEncryptionAtRest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_volume_kms_key_id: cdktn.stringToTerraform(struct!.dataVolumeKmsKeyId),
  }
}


export function mskClusterEncryptionInfoEncryptionAtRestToHclTerraform(struct?: MskClusterEncryptionInfoEncryptionAtRest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_volume_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.dataVolumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterEncryptionInfoEncryptionAtRestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterEncryptionInfoEncryptionAtRest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataVolumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeKmsKeyId = this._dataVolumeKmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterEncryptionInfoEncryptionAtRest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataVolumeKmsKeyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataVolumeKmsKeyId = value.dataVolumeKmsKeyId;
    }
  }

  // data_volume_kms_key_id - computed: true, optional: true, required: false
  private _dataVolumeKmsKeyId?: string; 
  public get dataVolumeKmsKeyId() {
    return this.getStringAttribute('data_volume_kms_key_id');
  }
  public set dataVolumeKmsKeyId(value: string) {
    this._dataVolumeKmsKeyId = value;
  }
  public resetDataVolumeKmsKeyId() {
    this._dataVolumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeKmsKeyIdInput() {
    return this._dataVolumeKmsKeyId;
  }
}
export interface MskClusterEncryptionInfoEncryptionInTransit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#client_broker MskCluster#client_broker}
  */
  readonly clientBroker?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#in_cluster MskCluster#in_cluster}
  */
  readonly inCluster?: boolean | cdktn.IResolvable;
}

export function mskClusterEncryptionInfoEncryptionInTransitToTerraform(struct?: MskClusterEncryptionInfoEncryptionInTransit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_broker: cdktn.stringToTerraform(struct!.clientBroker),
    in_cluster: cdktn.booleanToTerraform(struct!.inCluster),
  }
}


export function mskClusterEncryptionInfoEncryptionInTransitToHclTerraform(struct?: MskClusterEncryptionInfoEncryptionInTransit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_broker: {
      value: cdktn.stringToHclTerraform(struct!.clientBroker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_cluster: {
      value: cdktn.booleanToHclTerraform(struct!.inCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterEncryptionInfoEncryptionInTransitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterEncryptionInfoEncryptionInTransit | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientBroker !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientBroker = this._clientBroker;
    }
    if (this._inCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.inCluster = this._inCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterEncryptionInfoEncryptionInTransit | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientBroker = undefined;
      this._inCluster = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientBroker = value.clientBroker;
      this._inCluster = value.inCluster;
    }
  }

  // client_broker - computed: true, optional: true, required: false
  private _clientBroker?: string; 
  public get clientBroker() {
    return this.getStringAttribute('client_broker');
  }
  public set clientBroker(value: string) {
    this._clientBroker = value;
  }
  public resetClientBroker() {
    this._clientBroker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientBrokerInput() {
    return this._clientBroker;
  }

  // in_cluster - computed: true, optional: true, required: false
  private _inCluster?: boolean | cdktn.IResolvable; 
  public get inCluster() {
    return this.getBooleanAttribute('in_cluster');
  }
  public set inCluster(value: boolean | cdktn.IResolvable) {
    this._inCluster = value;
  }
  public resetInCluster() {
    this._inCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inClusterInput() {
    return this._inCluster;
  }
}
export interface MskClusterEncryptionInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#encryption_at_rest MskCluster#encryption_at_rest}
  */
  readonly encryptionAtRest?: MskClusterEncryptionInfoEncryptionAtRest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#encryption_in_transit MskCluster#encryption_in_transit}
  */
  readonly encryptionInTransit?: MskClusterEncryptionInfoEncryptionInTransit;
}

export function mskClusterEncryptionInfoToTerraform(struct?: MskClusterEncryptionInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_at_rest: mskClusterEncryptionInfoEncryptionAtRestToTerraform(struct!.encryptionAtRest),
    encryption_in_transit: mskClusterEncryptionInfoEncryptionInTransitToTerraform(struct!.encryptionInTransit),
  }
}


export function mskClusterEncryptionInfoToHclTerraform(struct?: MskClusterEncryptionInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_at_rest: {
      value: mskClusterEncryptionInfoEncryptionAtRestToHclTerraform(struct!.encryptionAtRest),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterEncryptionInfoEncryptionAtRest",
    },
    encryption_in_transit: {
      value: mskClusterEncryptionInfoEncryptionInTransitToHclTerraform(struct!.encryptionInTransit),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterEncryptionInfoEncryptionInTransit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterEncryptionInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterEncryptionInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionAtRest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAtRest = this._encryptionAtRest?.internalValue;
    }
    if (this._encryptionInTransit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionInTransit = this._encryptionInTransit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterEncryptionInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionAtRest.internalValue = undefined;
      this._encryptionInTransit.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionAtRest.internalValue = value.encryptionAtRest;
      this._encryptionInTransit.internalValue = value.encryptionInTransit;
    }
  }

  // encryption_at_rest - computed: true, optional: true, required: false
  private _encryptionAtRest = new MskClusterEncryptionInfoEncryptionAtRestOutputReference(this, "encryption_at_rest");
  public get encryptionAtRest() {
    return this._encryptionAtRest;
  }
  public putEncryptionAtRest(value: MskClusterEncryptionInfoEncryptionAtRest) {
    this._encryptionAtRest.internalValue = value;
  }
  public resetEncryptionAtRest() {
    this._encryptionAtRest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtRestInput() {
    return this._encryptionAtRest.internalValue;
  }

  // encryption_in_transit - computed: true, optional: true, required: false
  private _encryptionInTransit = new MskClusterEncryptionInfoEncryptionInTransitOutputReference(this, "encryption_in_transit");
  public get encryptionInTransit() {
    return this._encryptionInTransit;
  }
  public putEncryptionInTransit(value: MskClusterEncryptionInfoEncryptionInTransit) {
    this._encryptionInTransit.internalValue = value;
  }
  public resetEncryptionInTransit() {
    this._encryptionInTransit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInTransitInput() {
    return this._encryptionInTransit.internalValue;
  }
}
export interface MskClusterLoggingInfoBrokerLogsCloudwatchLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#enabled MskCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#log_group MskCluster#log_group}
  */
  readonly logGroup?: string;
}

export function mskClusterLoggingInfoBrokerLogsCloudwatchLogsToTerraform(struct?: MskClusterLoggingInfoBrokerLogsCloudwatchLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    log_group: cdktn.stringToTerraform(struct!.logGroup),
  }
}


export function mskClusterLoggingInfoBrokerLogsCloudwatchLogsToHclTerraform(struct?: MskClusterLoggingInfoBrokerLogsCloudwatchLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group: {
      value: cdktn.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterLoggingInfoBrokerLogsCloudwatchLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterLoggingInfoBrokerLogsCloudwatchLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._logGroup = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._logGroup = value.logGroup;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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
}
export interface MskClusterLoggingInfoBrokerLogsFirehose {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#delivery_stream MskCluster#delivery_stream}
  */
  readonly deliveryStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#enabled MskCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function mskClusterLoggingInfoBrokerLogsFirehoseToTerraform(struct?: MskClusterLoggingInfoBrokerLogsFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delivery_stream: cdktn.stringToTerraform(struct!.deliveryStream),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function mskClusterLoggingInfoBrokerLogsFirehoseToHclTerraform(struct?: MskClusterLoggingInfoBrokerLogsFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delivery_stream: {
      value: cdktn.stringToHclTerraform(struct!.deliveryStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterLoggingInfoBrokerLogsFirehoseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterLoggingInfoBrokerLogsFirehose | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStream = this._deliveryStream;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterLoggingInfoBrokerLogsFirehose | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deliveryStream = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deliveryStream = value.deliveryStream;
      this._enabled = value.enabled;
    }
  }

  // delivery_stream - computed: true, optional: true, required: false
  private _deliveryStream?: string; 
  public get deliveryStream() {
    return this.getStringAttribute('delivery_stream');
  }
  public set deliveryStream(value: string) {
    this._deliveryStream = value;
  }
  public resetDeliveryStream() {
    this._deliveryStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamInput() {
    return this._deliveryStream;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface MskClusterLoggingInfoBrokerLogsS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#bucket MskCluster#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#enabled MskCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#prefix MskCluster#prefix}
  */
  readonly prefix?: string;
}

export function mskClusterLoggingInfoBrokerLogsS3ToTerraform(struct?: MskClusterLoggingInfoBrokerLogsS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function mskClusterLoggingInfoBrokerLogsS3ToHclTerraform(struct?: MskClusterLoggingInfoBrokerLogsS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterLoggingInfoBrokerLogsS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterLoggingInfoBrokerLogsS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterLoggingInfoBrokerLogsS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._enabled = undefined;
      this._prefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._enabled = value.enabled;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface MskClusterLoggingInfoBrokerLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#cloudwatch_logs MskCluster#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: MskClusterLoggingInfoBrokerLogsCloudwatchLogs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#firehose MskCluster#firehose}
  */
  readonly firehose?: MskClusterLoggingInfoBrokerLogsFirehose;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#s3 MskCluster#s3}
  */
  readonly s3?: MskClusterLoggingInfoBrokerLogsS3;
}

export function mskClusterLoggingInfoBrokerLogsToTerraform(struct?: MskClusterLoggingInfoBrokerLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_logs: mskClusterLoggingInfoBrokerLogsCloudwatchLogsToTerraform(struct!.cloudwatchLogs),
    firehose: mskClusterLoggingInfoBrokerLogsFirehoseToTerraform(struct!.firehose),
    s3: mskClusterLoggingInfoBrokerLogsS3ToTerraform(struct!.s3),
  }
}


export function mskClusterLoggingInfoBrokerLogsToHclTerraform(struct?: MskClusterLoggingInfoBrokerLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_logs: {
      value: mskClusterLoggingInfoBrokerLogsCloudwatchLogsToHclTerraform(struct!.cloudwatchLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterLoggingInfoBrokerLogsCloudwatchLogs",
    },
    firehose: {
      value: mskClusterLoggingInfoBrokerLogsFirehoseToHclTerraform(struct!.firehose),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterLoggingInfoBrokerLogsFirehose",
    },
    s3: {
      value: mskClusterLoggingInfoBrokerLogsS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterLoggingInfoBrokerLogsS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterLoggingInfoBrokerLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterLoggingInfoBrokerLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
    }
    if (this._firehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehose = this._firehose?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterLoggingInfoBrokerLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchLogs.internalValue = undefined;
      this._firehose.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
      this._firehose.internalValue = value.firehose;
      this._s3.internalValue = value.s3;
    }
  }

  // cloudwatch_logs - computed: true, optional: true, required: false
  private _cloudwatchLogs = new MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: MskClusterLoggingInfoBrokerLogsCloudwatchLogs) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }

  // firehose - computed: true, optional: true, required: false
  private _firehose = new MskClusterLoggingInfoBrokerLogsFirehoseOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }
  public putFirehose(value: MskClusterLoggingInfoBrokerLogsFirehose) {
    this._firehose.internalValue = value;
  }
  public resetFirehose() {
    this._firehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose.internalValue;
  }

  // s3 - computed: true, optional: true, required: false
  private _s3 = new MskClusterLoggingInfoBrokerLogsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: MskClusterLoggingInfoBrokerLogsS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface MskClusterLoggingInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#broker_logs MskCluster#broker_logs}
  */
  readonly brokerLogs?: MskClusterLoggingInfoBrokerLogs;
}

export function mskClusterLoggingInfoToTerraform(struct?: MskClusterLoggingInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    broker_logs: mskClusterLoggingInfoBrokerLogsToTerraform(struct!.brokerLogs),
  }
}


export function mskClusterLoggingInfoToHclTerraform(struct?: MskClusterLoggingInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    broker_logs: {
      value: mskClusterLoggingInfoBrokerLogsToHclTerraform(struct!.brokerLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterLoggingInfoBrokerLogs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterLoggingInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterLoggingInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokerLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerLogs = this._brokerLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterLoggingInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._brokerLogs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._brokerLogs.internalValue = value.brokerLogs;
    }
  }

  // broker_logs - computed: true, optional: true, required: false
  private _brokerLogs = new MskClusterLoggingInfoBrokerLogsOutputReference(this, "broker_logs");
  public get brokerLogs() {
    return this._brokerLogs;
  }
  public putBrokerLogs(value: MskClusterLoggingInfoBrokerLogs) {
    this._brokerLogs.internalValue = value;
  }
  public resetBrokerLogs() {
    this._brokerLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerLogsInput() {
    return this._brokerLogs.internalValue;
  }
}
export interface MskClusterOpenMonitoringPrometheusJmxExporter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}
  */
  readonly enabledInBroker?: boolean | cdktn.IResolvable;
}

export function mskClusterOpenMonitoringPrometheusJmxExporterToTerraform(struct?: MskClusterOpenMonitoringPrometheusJmxExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled_in_broker: cdktn.booleanToTerraform(struct!.enabledInBroker),
  }
}


export function mskClusterOpenMonitoringPrometheusJmxExporterToHclTerraform(struct?: MskClusterOpenMonitoringPrometheusJmxExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled_in_broker: {
      value: cdktn.booleanToHclTerraform(struct!.enabledInBroker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterOpenMonitoringPrometheusJmxExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterOpenMonitoringPrometheusJmxExporter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledInBroker !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledInBroker = this._enabledInBroker;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterOpenMonitoringPrometheusJmxExporter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabledInBroker = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabledInBroker = value.enabledInBroker;
    }
  }

  // enabled_in_broker - computed: true, optional: true, required: false
  private _enabledInBroker?: boolean | cdktn.IResolvable; 
  public get enabledInBroker() {
    return this.getBooleanAttribute('enabled_in_broker');
  }
  public set enabledInBroker(value: boolean | cdktn.IResolvable) {
    this._enabledInBroker = value;
  }
  public resetEnabledInBroker() {
    this._enabledInBroker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInBrokerInput() {
    return this._enabledInBroker;
  }
}
export interface MskClusterOpenMonitoringPrometheusNodeExporter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}
  */
  readonly enabledInBroker?: boolean | cdktn.IResolvable;
}

export function mskClusterOpenMonitoringPrometheusNodeExporterToTerraform(struct?: MskClusterOpenMonitoringPrometheusNodeExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled_in_broker: cdktn.booleanToTerraform(struct!.enabledInBroker),
  }
}


export function mskClusterOpenMonitoringPrometheusNodeExporterToHclTerraform(struct?: MskClusterOpenMonitoringPrometheusNodeExporter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled_in_broker: {
      value: cdktn.booleanToHclTerraform(struct!.enabledInBroker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterOpenMonitoringPrometheusNodeExporterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterOpenMonitoringPrometheusNodeExporter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledInBroker !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledInBroker = this._enabledInBroker;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterOpenMonitoringPrometheusNodeExporter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabledInBroker = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabledInBroker = value.enabledInBroker;
    }
  }

  // enabled_in_broker - computed: true, optional: true, required: false
  private _enabledInBroker?: boolean | cdktn.IResolvable; 
  public get enabledInBroker() {
    return this.getBooleanAttribute('enabled_in_broker');
  }
  public set enabledInBroker(value: boolean | cdktn.IResolvable) {
    this._enabledInBroker = value;
  }
  public resetEnabledInBroker() {
    this._enabledInBroker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInBrokerInput() {
    return this._enabledInBroker;
  }
}
export interface MskClusterOpenMonitoringPrometheus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#jmx_exporter MskCluster#jmx_exporter}
  */
  readonly jmxExporter?: MskClusterOpenMonitoringPrometheusJmxExporter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#node_exporter MskCluster#node_exporter}
  */
  readonly nodeExporter?: MskClusterOpenMonitoringPrometheusNodeExporter;
}

export function mskClusterOpenMonitoringPrometheusToTerraform(struct?: MskClusterOpenMonitoringPrometheus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    jmx_exporter: mskClusterOpenMonitoringPrometheusJmxExporterToTerraform(struct!.jmxExporter),
    node_exporter: mskClusterOpenMonitoringPrometheusNodeExporterToTerraform(struct!.nodeExporter),
  }
}


export function mskClusterOpenMonitoringPrometheusToHclTerraform(struct?: MskClusterOpenMonitoringPrometheus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    jmx_exporter: {
      value: mskClusterOpenMonitoringPrometheusJmxExporterToHclTerraform(struct!.jmxExporter),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterOpenMonitoringPrometheusJmxExporter",
    },
    node_exporter: {
      value: mskClusterOpenMonitoringPrometheusNodeExporterToHclTerraform(struct!.nodeExporter),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterOpenMonitoringPrometheusNodeExporter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterOpenMonitoringPrometheusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterOpenMonitoringPrometheus | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jmxExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jmxExporter = this._jmxExporter?.internalValue;
    }
    if (this._nodeExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeExporter = this._nodeExporter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterOpenMonitoringPrometheus | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jmxExporter.internalValue = undefined;
      this._nodeExporter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jmxExporter.internalValue = value.jmxExporter;
      this._nodeExporter.internalValue = value.nodeExporter;
    }
  }

  // jmx_exporter - computed: true, optional: true, required: false
  private _jmxExporter = new MskClusterOpenMonitoringPrometheusJmxExporterOutputReference(this, "jmx_exporter");
  public get jmxExporter() {
    return this._jmxExporter;
  }
  public putJmxExporter(value: MskClusterOpenMonitoringPrometheusJmxExporter) {
    this._jmxExporter.internalValue = value;
  }
  public resetJmxExporter() {
    this._jmxExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmxExporterInput() {
    return this._jmxExporter.internalValue;
  }

  // node_exporter - computed: true, optional: true, required: false
  private _nodeExporter = new MskClusterOpenMonitoringPrometheusNodeExporterOutputReference(this, "node_exporter");
  public get nodeExporter() {
    return this._nodeExporter;
  }
  public putNodeExporter(value: MskClusterOpenMonitoringPrometheusNodeExporter) {
    this._nodeExporter.internalValue = value;
  }
  public resetNodeExporter() {
    this._nodeExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeExporterInput() {
    return this._nodeExporter.internalValue;
  }
}
export interface MskClusterOpenMonitoring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#prometheus MskCluster#prometheus}
  */
  readonly prometheus?: MskClusterOpenMonitoringPrometheus;
}

export function mskClusterOpenMonitoringToTerraform(struct?: MskClusterOpenMonitoring | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prometheus: mskClusterOpenMonitoringPrometheusToTerraform(struct!.prometheus),
  }
}


export function mskClusterOpenMonitoringToHclTerraform(struct?: MskClusterOpenMonitoring | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prometheus: {
      value: mskClusterOpenMonitoringPrometheusToHclTerraform(struct!.prometheus),
      isBlock: true,
      type: "struct",
      storageClassType: "MskClusterOpenMonitoringPrometheus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterOpenMonitoringOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterOpenMonitoring | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterOpenMonitoring | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prometheus.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prometheus.internalValue = value.prometheus;
    }
  }

  // prometheus - computed: true, optional: true, required: false
  private _prometheus = new MskClusterOpenMonitoringPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: MskClusterOpenMonitoringPrometheus) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }
}
export interface MskClusterRebalancing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#status MskCluster#status}
  */
  readonly status?: string;
}

export function mskClusterRebalancingToTerraform(struct?: MskClusterRebalancing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function mskClusterRebalancingToHclTerraform(struct?: MskClusterRebalancing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterRebalancingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterRebalancing | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterRebalancing | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface MskClusterZookeeperAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#enabled MskCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function mskClusterZookeeperAccessToTerraform(struct?: MskClusterZookeeperAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function mskClusterZookeeperAccessToHclTerraform(struct?: MskClusterZookeeperAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MskClusterZookeeperAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskClusterZookeeperAccess | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskClusterZookeeperAccess | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster awscc_msk_cluster}
*/
export class MskCluster extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_msk_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MskCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MskCluster to import
  * @param importFromId The id of the existing MskCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MskCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_msk_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/msk_cluster awscc_msk_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MskClusterConfig
  */
  public constructor(scope: Construct, id: string, config: MskClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_msk_cluster',
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
    this._brokerNodeGroupInfo.internalValue = config.brokerNodeGroupInfo;
    this._clientAuthentication.internalValue = config.clientAuthentication;
    this._clusterName = config.clusterName;
    this._configurationInfo.internalValue = config.configurationInfo;
    this._encryptionInfo.internalValue = config.encryptionInfo;
    this._enhancedMonitoring = config.enhancedMonitoring;
    this._kafkaVersion = config.kafkaVersion;
    this._loggingInfo.internalValue = config.loggingInfo;
    this._numberOfBrokerNodes = config.numberOfBrokerNodes;
    this._openMonitoring.internalValue = config.openMonitoring;
    this._rebalancing.internalValue = config.rebalancing;
    this._storageMode = config.storageMode;
    this._tags = config.tags;
    this._zookeeperAccess.internalValue = config.zookeeperAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // broker_node_group_info - computed: false, optional: false, required: true
  private _brokerNodeGroupInfo = new MskClusterBrokerNodeGroupInfoOutputReference(this, "broker_node_group_info");
  public get brokerNodeGroupInfo() {
    return this._brokerNodeGroupInfo;
  }
  public putBrokerNodeGroupInfo(value: MskClusterBrokerNodeGroupInfo) {
    this._brokerNodeGroupInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerNodeGroupInfoInput() {
    return this._brokerNodeGroupInfo.internalValue;
  }

  // client_authentication - computed: true, optional: true, required: false
  private _clientAuthentication = new MskClusterClientAuthenticationOutputReference(this, "client_authentication");
  public get clientAuthentication() {
    return this._clientAuthentication;
  }
  public putClientAuthentication(value: MskClusterClientAuthentication) {
    this._clientAuthentication.internalValue = value;
  }
  public resetClientAuthentication() {
    this._clientAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticationInput() {
    return this._clientAuthentication.internalValue;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // configuration_info - computed: true, optional: true, required: false
  private _configurationInfo = new MskClusterConfigurationInfoOutputReference(this, "configuration_info");
  public get configurationInfo() {
    return this._configurationInfo;
  }
  public putConfigurationInfo(value: MskClusterConfigurationInfo) {
    this._configurationInfo.internalValue = value;
  }
  public resetConfigurationInfo() {
    this._configurationInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInfoInput() {
    return this._configurationInfo.internalValue;
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // encryption_info - computed: true, optional: true, required: false
  private _encryptionInfo = new MskClusterEncryptionInfoOutputReference(this, "encryption_info");
  public get encryptionInfo() {
    return this._encryptionInfo;
  }
  public putEncryptionInfo(value: MskClusterEncryptionInfo) {
    this._encryptionInfo.internalValue = value;
  }
  public resetEncryptionInfo() {
    this._encryptionInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInfoInput() {
    return this._encryptionInfo.internalValue;
  }

  // enhanced_monitoring - computed: true, optional: true, required: false
  private _enhancedMonitoring?: string; 
  public get enhancedMonitoring() {
    return this.getStringAttribute('enhanced_monitoring');
  }
  public set enhancedMonitoring(value: string) {
    this._enhancedMonitoring = value;
  }
  public resetEnhancedMonitoring() {
    this._enhancedMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedMonitoringInput() {
    return this._enhancedMonitoring;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kafka_version - computed: false, optional: false, required: true
  private _kafkaVersion?: string; 
  public get kafkaVersion() {
    return this.getStringAttribute('kafka_version');
  }
  public set kafkaVersion(value: string) {
    this._kafkaVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaVersionInput() {
    return this._kafkaVersion;
  }

  // logging_info - computed: true, optional: true, required: false
  private _loggingInfo = new MskClusterLoggingInfoOutputReference(this, "logging_info");
  public get loggingInfo() {
    return this._loggingInfo;
  }
  public putLoggingInfo(value: MskClusterLoggingInfo) {
    this._loggingInfo.internalValue = value;
  }
  public resetLoggingInfo() {
    this._loggingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInfoInput() {
    return this._loggingInfo.internalValue;
  }

  // number_of_broker_nodes - computed: false, optional: false, required: true
  private _numberOfBrokerNodes?: number; 
  public get numberOfBrokerNodes() {
    return this.getNumberAttribute('number_of_broker_nodes');
  }
  public set numberOfBrokerNodes(value: number) {
    this._numberOfBrokerNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfBrokerNodesInput() {
    return this._numberOfBrokerNodes;
  }

  // open_monitoring - computed: true, optional: true, required: false
  private _openMonitoring = new MskClusterOpenMonitoringOutputReference(this, "open_monitoring");
  public get openMonitoring() {
    return this._openMonitoring;
  }
  public putOpenMonitoring(value: MskClusterOpenMonitoring) {
    this._openMonitoring.internalValue = value;
  }
  public resetOpenMonitoring() {
    this._openMonitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openMonitoringInput() {
    return this._openMonitoring.internalValue;
  }

  // rebalancing - computed: true, optional: true, required: false
  private _rebalancing = new MskClusterRebalancingOutputReference(this, "rebalancing");
  public get rebalancing() {
    return this._rebalancing;
  }
  public putRebalancing(value: MskClusterRebalancing) {
    this._rebalancing.internalValue = value;
  }
  public resetRebalancing() {
    this._rebalancing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalancingInput() {
    return this._rebalancing.internalValue;
  }

  // storage_mode - computed: true, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zookeeper_access - computed: true, optional: true, required: false
  private _zookeeperAccess = new MskClusterZookeeperAccessOutputReference(this, "zookeeper_access");
  public get zookeeperAccess() {
    return this._zookeeperAccess;
  }
  public putZookeeperAccess(value: MskClusterZookeeperAccess) {
    this._zookeeperAccess.internalValue = value;
  }
  public resetZookeeperAccess() {
    this._zookeeperAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperAccessInput() {
    return this._zookeeperAccess.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      broker_node_group_info: mskClusterBrokerNodeGroupInfoToTerraform(this._brokerNodeGroupInfo.internalValue),
      client_authentication: mskClusterClientAuthenticationToTerraform(this._clientAuthentication.internalValue),
      cluster_name: cdktn.stringToTerraform(this._clusterName),
      configuration_info: mskClusterConfigurationInfoToTerraform(this._configurationInfo.internalValue),
      encryption_info: mskClusterEncryptionInfoToTerraform(this._encryptionInfo.internalValue),
      enhanced_monitoring: cdktn.stringToTerraform(this._enhancedMonitoring),
      kafka_version: cdktn.stringToTerraform(this._kafkaVersion),
      logging_info: mskClusterLoggingInfoToTerraform(this._loggingInfo.internalValue),
      number_of_broker_nodes: cdktn.numberToTerraform(this._numberOfBrokerNodes),
      open_monitoring: mskClusterOpenMonitoringToTerraform(this._openMonitoring.internalValue),
      rebalancing: mskClusterRebalancingToTerraform(this._rebalancing.internalValue),
      storage_mode: cdktn.stringToTerraform(this._storageMode),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      zookeeper_access: mskClusterZookeeperAccessToTerraform(this._zookeeperAccess.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      broker_node_group_info: {
        value: mskClusterBrokerNodeGroupInfoToHclTerraform(this._brokerNodeGroupInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MskClusterBrokerNodeGroupInfo",
      },
      client_authentication: {
        value: mskClusterClientAuthenticationToHclTerraform(this._clientAuthentication.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MskClusterClientAuthentication",
      },
      cluster_name: {
        value: cdktn.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_info: {
        value: mskClusterConfigurationInfoToHclTerraform(this._configurationInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MskClusterConfigurationInfo",
      },
      encryption_info: {
        value: mskClusterEncryptionInfoToHclTerraform(this._encryptionInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MskClusterEncryptionInfo",
      },
      enhanced_monitoring: {
        value: cdktn.stringToHclTerraform(this._enhancedMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kafka_version: {
        value: cdktn.stringToHclTerraform(this._kafkaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_info: {
        value: mskClusterLoggingInfoToHclTerraform(this._loggingInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MskClusterLoggingInfo",
      },
      number_of_broker_nodes: {
        value: cdktn.numberToHclTerraform(this._numberOfBrokerNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      open_monitoring: {
        value: mskClusterOpenMonitoringToHclTerraform(this._openMonitoring.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MskClusterOpenMonitoring",
      },
      rebalancing: {
        value: mskClusterRebalancingToHclTerraform(this._rebalancing.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MskClusterRebalancing",
      },
      storage_mode: {
        value: cdktn.stringToHclTerraform(this._storageMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      zookeeper_access: {
        value: mskClusterZookeeperAccessToHclTerraform(this._zookeeperAccess.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MskClusterZookeeperAccess",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
