// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityhubConnectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * A description of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_connector#description SecurityhubConnector#description}
  */
  readonly description?: string;
  /**
  * The name of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_connector#name SecurityhubConnector#name}
  */
  readonly name: string;
  /**
  * The CSPM provider configuration for the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_connector#provider_name SecurityhubConnector#provider_name}
  */
  readonly providerName: SecurityhubConnectorProviderName;
  /**
  * A key-value pair to associate with a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_connector#tags SecurityhubConnector#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface SecurityhubConnectorIssues {
}

export function securityhubConnectorIssuesToTerraform(struct?: SecurityhubConnectorIssues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function securityhubConnectorIssuesToHclTerraform(struct?: SecurityhubConnectorIssues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SecurityhubConnectorIssuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubConnectorIssues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubConnectorIssues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class SecurityhubConnectorIssuesList extends cdktn.ComplexList {

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
  public get(index: number): SecurityhubConnectorIssuesOutputReference {
    return new SecurityhubConnectorIssuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubConnectorProviderNameAzureScopeConfiguration {
  /**
  * The scope type for the Azure connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_connector#scope_type SecurityhubConnector#scope_type}
  */
  readonly scopeType: string;
  /**
  * The list of scope values for the Azure connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_connector#scope_values SecurityhubConnector#scope_values}
  */
  readonly scopeValues?: string[];
}

export function securityhubConnectorProviderNameAzureScopeConfigurationToTerraform(struct?: SecurityhubConnectorProviderNameAzureScopeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    scope_type: cdktn.stringToTerraform(struct!.scopeType),
    scope_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopeValues),
  }
}


export function securityhubConnectorProviderNameAzureScopeConfigurationToHclTerraform(struct?: SecurityhubConnectorProviderNameAzureScopeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    scope_type: {
      value: cdktn.stringToHclTerraform(struct!.scopeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopeValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubConnectorProviderNameAzureScopeConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeType = this._scopeType;
    }
    if (this._scopeValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeValues = this._scopeValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubConnectorProviderNameAzureScopeConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeType = undefined;
      this._scopeValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeType = value.scopeType;
      this._scopeValues = value.scopeValues;
    }
  }

  // scope_type - computed: false, optional: false, required: true
  private _scopeType?: string; 
  public get scopeType() {
    return this.getStringAttribute('scope_type');
  }
  public set scopeType(value: string) {
    this._scopeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeTypeInput() {
    return this._scopeType;
  }

  // scope_values - computed: true, optional: true, required: false
  private _scopeValues?: string[]; 
  public get scopeValues() {
    return cdktn.Fn.tolist(this.getListAttribute('scope_values'));
  }
  public set scopeValues(value: string[]) {
    this._scopeValues = value;
  }
  public resetScopeValues() {
    this._scopeValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeValuesInput() {
    return this._scopeValues;
  }
}
export interface SecurityhubConnectorProviderNameAzure {
  /**
  * The ARN of the AWS Config connector used for the Azure integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_connector#aws_config_connector_arn SecurityhubConnector#aws_config_connector_arn}
  */
  readonly awsConfigConnectorArn: string;
  /**
  * The list of Azure regions to include in the connector scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_connector#azure_regions SecurityhubConnector#azure_regions}
  */
  readonly azureRegions: string[];
  /**
  * The scope configuration for an Azure connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_connector#scope_configuration SecurityhubConnector#scope_configuration}
  */
  readonly scopeConfiguration: SecurityhubConnectorProviderNameAzureScopeConfiguration;
}

export function securityhubConnectorProviderNameAzureToTerraform(struct?: SecurityhubConnectorProviderNameAzure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_config_connector_arn: cdktn.stringToTerraform(struct!.awsConfigConnectorArn),
    azure_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.azureRegions),
    scope_configuration: securityhubConnectorProviderNameAzureScopeConfigurationToTerraform(struct!.scopeConfiguration),
  }
}


export function securityhubConnectorProviderNameAzureToHclTerraform(struct?: SecurityhubConnectorProviderNameAzure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_config_connector_arn: {
      value: cdktn.stringToHclTerraform(struct!.awsConfigConnectorArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.azureRegions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    scope_configuration: {
      value: securityhubConnectorProviderNameAzureScopeConfigurationToHclTerraform(struct!.scopeConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityhubConnectorProviderNameAzureScopeConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubConnectorProviderNameAzureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubConnectorProviderNameAzure | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsConfigConnectorArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsConfigConnectorArn = this._awsConfigConnectorArn;
    }
    if (this._azureRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureRegions = this._azureRegions;
    }
    if (this._scopeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeConfiguration = this._scopeConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubConnectorProviderNameAzure | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsConfigConnectorArn = undefined;
      this._azureRegions = undefined;
      this._scopeConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsConfigConnectorArn = value.awsConfigConnectorArn;
      this._azureRegions = value.azureRegions;
      this._scopeConfiguration.internalValue = value.scopeConfiguration;
    }
  }

  // aws_config_connector_arn - computed: false, optional: false, required: true
  private _awsConfigConnectorArn?: string; 
  public get awsConfigConnectorArn() {
    return this.getStringAttribute('aws_config_connector_arn');
  }
  public set awsConfigConnectorArn(value: string) {
    this._awsConfigConnectorArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsConfigConnectorArnInput() {
    return this._awsConfigConnectorArn;
  }

  // azure_regions - computed: false, optional: false, required: true
  private _azureRegions?: string[]; 
  public get azureRegions() {
    return cdktn.Fn.tolist(this.getListAttribute('azure_regions'));
  }
  public set azureRegions(value: string[]) {
    this._azureRegions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureRegionsInput() {
    return this._azureRegions;
  }

  // scope_configuration - computed: false, optional: false, required: true
  private _scopeConfiguration = new SecurityhubConnectorProviderNameAzureScopeConfigurationOutputReference(this, "scope_configuration");
  public get scopeConfiguration() {
    return this._scopeConfiguration;
  }
  public putScopeConfiguration(value: SecurityhubConnectorProviderNameAzureScopeConfiguration) {
    this._scopeConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeConfigurationInput() {
    return this._scopeConfiguration.internalValue;
  }
}
export interface SecurityhubConnectorProviderName {
  /**
  * The configuration settings for an Azure CSPM provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_connector#azure SecurityhubConnector#azure}
  */
  readonly azure: SecurityhubConnectorProviderNameAzure;
}

export function securityhubConnectorProviderNameToTerraform(struct?: SecurityhubConnectorProviderName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    azure: securityhubConnectorProviderNameAzureToTerraform(struct!.azure),
  }
}


export function securityhubConnectorProviderNameToHclTerraform(struct?: SecurityhubConnectorProviderName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    azure: {
      value: securityhubConnectorProviderNameAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityhubConnectorProviderNameAzure",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubConnectorProviderNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubConnectorProviderName | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityhubConnectorProviderName | cdktn.IResolvable | undefined) {
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

  // azure - computed: false, optional: false, required: true
  private _azure = new SecurityhubConnectorProviderNameAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: SecurityhubConnectorProviderNameAzure) {
    this._azure.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_connector awscc_securityhub_connector}
*/
export class SecurityhubConnector extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_securityhub_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityhubConnector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubConnector to import
  * @param importFromId The id of the existing SecurityhubConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_connector awscc_securityhub_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityhubConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_securityhub_connector',
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
    this._description = config.description;
    this._name = config.name;
    this._providerName.internalValue = config.providerName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector_arn - computed: true, optional: false, required: false
  public get connectorArn() {
    return this.getStringAttribute('connector_arn');
  }

  // connector_id - computed: true, optional: false, required: false
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }

  // connector_status - computed: true, optional: false, required: false
  public get connectorStatus() {
    return this.getStringAttribute('connector_status');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enablement_status - computed: true, optional: false, required: false
  public get enablementStatus() {
    return this.getStringAttribute('enablement_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issues - computed: true, optional: false, required: false
  private _issues = new SecurityhubConnectorIssuesList(this, "issues", false);
  public get issues() {
    return this._issues;
  }

  // last_checked_at - computed: true, optional: false, required: false
  public get lastCheckedAt() {
    return this.getStringAttribute('last_checked_at');
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
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

  // provider_name - computed: false, optional: false, required: true
  private _providerName = new SecurityhubConnectorProviderNameOutputReference(this, "provider_name");
  public get providerName() {
    return this._providerName;
  }
  public putProviderName(value: SecurityhubConnectorProviderName) {
    this._providerName.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      provider_name: securityhubConnectorProviderNameToTerraform(this._providerName.internalValue),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_name: {
        value: securityhubConnectorProviderNameToHclTerraform(this._providerName.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityhubConnectorProviderName",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
