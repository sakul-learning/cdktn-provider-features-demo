// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/config_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConfigConnectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * The configuration for the connector that specifies the third-party cloud provider connection details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/config_connector#connector_configuration ConfigConnector#connector_configuration}
  */
  readonly connectorConfiguration: ConfigConnectorConnectorConfiguration;
  /**
  * The tags for the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/config_connector#tags ConfigConnector#tags}
  */
  readonly tags?: ConfigConnectorTags[] | cdktn.IResolvable;
}
export interface ConfigConnectorConnectorConfigurationAzure {
  /**
  * The Azure client (application) identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/config_connector#client_identifier ConfigConnector#client_identifier}
  */
  readonly clientIdentifier?: string;
  /**
  * The Azure tenant identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/config_connector#tenant_identifier ConfigConnector#tenant_identifier}
  */
  readonly tenantIdentifier?: string;
}

export function configConnectorConnectorConfigurationAzureToTerraform(struct?: ConfigConnectorConnectorConfigurationAzure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_identifier: cdktn.stringToTerraform(struct!.clientIdentifier),
    tenant_identifier: cdktn.stringToTerraform(struct!.tenantIdentifier),
  }
}


export function configConnectorConnectorConfigurationAzureToHclTerraform(struct?: ConfigConnectorConnectorConfigurationAzure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_identifier: {
      value: cdktn.stringToHclTerraform(struct!.clientIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_identifier: {
      value: cdktn.stringToHclTerraform(struct!.tenantIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigConnectorConnectorConfigurationAzureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigConnectorConnectorConfigurationAzure | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdentifier = this._clientIdentifier;
    }
    if (this._tenantIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantIdentifier = this._tenantIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConnectorConnectorConfigurationAzure | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIdentifier = undefined;
      this._tenantIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIdentifier = value.clientIdentifier;
      this._tenantIdentifier = value.tenantIdentifier;
    }
  }

  // client_identifier - computed: true, optional: true, required: false
  private _clientIdentifier?: string; 
  public get clientIdentifier() {
    return this.getStringAttribute('client_identifier');
  }
  public set clientIdentifier(value: string) {
    this._clientIdentifier = value;
  }
  public resetClientIdentifier() {
    this._clientIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdentifierInput() {
    return this._clientIdentifier;
  }

  // tenant_identifier - computed: true, optional: true, required: false
  private _tenantIdentifier?: string; 
  public get tenantIdentifier() {
    return this.getStringAttribute('tenant_identifier');
  }
  public set tenantIdentifier(value: string) {
    this._tenantIdentifier = value;
  }
  public resetTenantIdentifier() {
    this._tenantIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdentifierInput() {
    return this._tenantIdentifier;
  }
}
export interface ConfigConnectorConnectorConfiguration {
  /**
  * The configuration for connecting to Microsoft Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/config_connector#azure ConfigConnector#azure}
  */
  readonly azure?: ConfigConnectorConnectorConfigurationAzure;
}

export function configConnectorConnectorConfigurationToTerraform(struct?: ConfigConnectorConnectorConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    azure: configConnectorConnectorConfigurationAzureToTerraform(struct!.azure),
  }
}


export function configConnectorConnectorConfigurationToHclTerraform(struct?: ConfigConnectorConnectorConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    azure: {
      value: configConnectorConnectorConfigurationAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "ConfigConnectorConnectorConfigurationAzure",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigConnectorConnectorConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigConnectorConnectorConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConnectorConnectorConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azure.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azure.internalValue = value.azure;
    }
  }

  // azure - computed: true, optional: true, required: false
  private _azure = new ConfigConnectorConnectorConfigurationAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: ConfigConnectorConnectorConfigurationAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }
}
export interface ConfigConnectorTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/config_connector#key ConfigConnector#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/config_connector#value ConfigConnector#value}
  */
  readonly value?: string;
}

export function configConnectorTagsToTerraform(struct?: ConfigConnectorTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function configConnectorTagsToHclTerraform(struct?: ConfigConnectorTags | cdktn.IResolvable): any {
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

export class ConfigConnectorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConfigConnectorTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ConfigConnectorTags | cdktn.IResolvable | undefined) {
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

export class ConfigConnectorTagsList extends cdktn.ComplexList {
  public internalValue? : ConfigConnectorTags[] | cdktn.IResolvable

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
  public get(index: number): ConfigConnectorTagsOutputReference {
    return new ConfigConnectorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/config_connector awscc_config_connector}
*/
export class ConfigConnector extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_config_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConfigConnector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigConnector to import
  * @param importFromId The id of the existing ConfigConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/config_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_config_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/config_connector awscc_config_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_config_connector',
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
    this._connectorConfiguration.internalValue = config.connectorConfiguration;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // connector_configuration - computed: false, optional: false, required: true
  private _connectorConfiguration = new ConfigConnectorConnectorConfigurationOutputReference(this, "connector_configuration");
  public get connectorConfiguration() {
    return this._connectorConfiguration;
  }
  public putConnectorConfiguration(value: ConfigConnectorConnectorConfiguration) {
    this._connectorConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorConfigurationInput() {
    return this._connectorConfiguration.internalValue;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ConfigConnectorTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ConfigConnectorTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connector_configuration: configConnectorConnectorConfigurationToTerraform(this._connectorConfiguration.internalValue),
      tags: cdktn.listMapper(configConnectorTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connector_configuration: {
        value: configConnectorConnectorConfigurationToHclTerraform(this._connectorConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigConnectorConnectorConfiguration",
      },
      tags: {
        value: cdktn.listMapperHcl(configConnectorTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConfigConnectorTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
