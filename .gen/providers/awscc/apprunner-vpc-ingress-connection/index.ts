// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/apprunner_vpc_ingress_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApprunnerVpcIngressConnectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * The configuration of customer?s VPC and related VPC endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/apprunner_vpc_ingress_connection#ingress_vpc_configuration ApprunnerVpcIngressConnection#ingress_vpc_configuration}
  */
  readonly ingressVpcConfiguration: ApprunnerVpcIngressConnectionIngressVpcConfiguration;
  /**
  * The Amazon Resource Name (ARN) of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/apprunner_vpc_ingress_connection#service_arn ApprunnerVpcIngressConnection#service_arn}
  */
  readonly serviceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/apprunner_vpc_ingress_connection#tags ApprunnerVpcIngressConnection#tags}
  */
  readonly tags?: ApprunnerVpcIngressConnectionTags[] | cdktn.IResolvable;
  /**
  * The customer-provided Vpc Ingress Connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/apprunner_vpc_ingress_connection#vpc_ingress_connection_name ApprunnerVpcIngressConnection#vpc_ingress_connection_name}
  */
  readonly vpcIngressConnectionName?: string;
}
export interface ApprunnerVpcIngressConnectionIngressVpcConfiguration {
  /**
  * The ID of the VPC endpoint that your App Runner service connects to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/apprunner_vpc_ingress_connection#vpc_endpoint_id ApprunnerVpcIngressConnection#vpc_endpoint_id}
  */
  readonly vpcEndpointId: string;
  /**
  * The ID of the VPC that the VPC endpoint is used in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/apprunner_vpc_ingress_connection#vpc_id ApprunnerVpcIngressConnection#vpc_id}
  */
  readonly vpcId: string;
}

export function apprunnerVpcIngressConnectionIngressVpcConfigurationToTerraform(struct?: ApprunnerVpcIngressConnectionIngressVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc_endpoint_id: cdktn.stringToTerraform(struct!.vpcEndpointId),
    vpc_id: cdktn.stringToTerraform(struct!.vpcId),
  }
}


export function apprunnerVpcIngressConnectionIngressVpcConfigurationToHclTerraform(struct?: ApprunnerVpcIngressConnectionIngressVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc_endpoint_id: {
      value: cdktn.stringToHclTerraform(struct!.vpcEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktn.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApprunnerVpcIngressConnectionIngressVpcConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcEndpointId = this._vpcEndpointId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprunnerVpcIngressConnectionIngressVpcConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcEndpointId = undefined;
      this._vpcId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcEndpointId = value.vpcEndpointId;
      this._vpcId = value.vpcId;
    }
  }

  // vpc_endpoint_id - computed: false, optional: false, required: true
  private _vpcEndpointId?: string;
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface ApprunnerVpcIngressConnectionTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/apprunner_vpc_ingress_connection#key ApprunnerVpcIngressConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/apprunner_vpc_ingress_connection#value ApprunnerVpcIngressConnection#value}
  */
  readonly value?: string;
}

export function apprunnerVpcIngressConnectionTagsToTerraform(struct?: ApprunnerVpcIngressConnectionTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function apprunnerVpcIngressConnectionTagsToHclTerraform(struct?: ApprunnerVpcIngressConnectionTags | cdktn.IResolvable): any {
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

export class ApprunnerVpcIngressConnectionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApprunnerVpcIngressConnectionTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApprunnerVpcIngressConnectionTags | cdktn.IResolvable | undefined) {
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

export class ApprunnerVpcIngressConnectionTagsList extends cdktn.ComplexList {
  public internalValue? : ApprunnerVpcIngressConnectionTags[] | cdktn.IResolvable

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
  public get(index: number): ApprunnerVpcIngressConnectionTagsOutputReference {
    return new ApprunnerVpcIngressConnectionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/apprunner_vpc_ingress_connection awscc_apprunner_vpc_ingress_connection}
*/
export class ApprunnerVpcIngressConnection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apprunner_vpc_ingress_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApprunnerVpcIngressConnection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApprunnerVpcIngressConnection to import
  * @param importFromId The id of the existing ApprunnerVpcIngressConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/apprunner_vpc_ingress_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApprunnerVpcIngressConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apprunner_vpc_ingress_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/apprunner_vpc_ingress_connection awscc_apprunner_vpc_ingress_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApprunnerVpcIngressConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ApprunnerVpcIngressConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apprunner_vpc_ingress_connection',
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
    this._ingressVpcConfiguration.internalValue = config.ingressVpcConfiguration;
    this._serviceArn = config.serviceArn;
    this._tags.internalValue = config.tags;
    this._vpcIngressConnectionName = config.vpcIngressConnectionName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress_vpc_configuration - computed: false, optional: false, required: true
  private _ingressVpcConfiguration = new ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference(this, "ingress_vpc_configuration");
  public get ingressVpcConfiguration() {
    return this._ingressVpcConfiguration;
  }
  public putIngressVpcConfiguration(value: ApprunnerVpcIngressConnectionIngressVpcConfiguration) {
    this._ingressVpcConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressVpcConfigurationInput() {
    return this._ingressVpcConfiguration.internalValue;
  }

  // service_arn - computed: false, optional: false, required: true
  private _serviceArn?: string;
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }
  public set serviceArn(value: string) {
    this._serviceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceArnInput() {
    return this._serviceArn;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApprunnerVpcIngressConnectionTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApprunnerVpcIngressConnectionTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_ingress_connection_arn - computed: true, optional: false, required: false
  public get vpcIngressConnectionArn() {
    return this.getStringAttribute('vpc_ingress_connection_arn');
  }

  // vpc_ingress_connection_name - computed: true, optional: true, required: false
  private _vpcIngressConnectionName?: string;
  public get vpcIngressConnectionName() {
    return this.getStringAttribute('vpc_ingress_connection_name');
  }
  public set vpcIngressConnectionName(value: string) {
    this._vpcIngressConnectionName = value;
  }
  public resetVpcIngressConnectionName() {
    this._vpcIngressConnectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIngressConnectionNameInput() {
    return this._vpcIngressConnectionName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ingress_vpc_configuration: apprunnerVpcIngressConnectionIngressVpcConfigurationToTerraform(this._ingressVpcConfiguration.internalValue),
      service_arn: cdktn.stringToTerraform(this._serviceArn),
      tags: cdktn.listMapper(apprunnerVpcIngressConnectionTagsToTerraform, false)(this._tags.internalValue),
      vpc_ingress_connection_name: cdktn.stringToTerraform(this._vpcIngressConnectionName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ingress_vpc_configuration: {
        value: apprunnerVpcIngressConnectionIngressVpcConfigurationToHclTerraform(this._ingressVpcConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApprunnerVpcIngressConnectionIngressVpcConfiguration",
      },
      service_arn: {
        value: cdktn.stringToHclTerraform(this._serviceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(apprunnerVpcIngressConnectionTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApprunnerVpcIngressConnectionTagsList",
      },
      vpc_ingress_connection_name: {
        value: cdktn.stringToHclTerraform(this._vpcIngressConnectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
