// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_connector_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityhubConnectorV2Config extends cdktn.TerraformMetaArguments {
  /**
  * A description of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}
  */
  readonly description?: string;
  /**
  * The ARN of KMS key used for the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * The name of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}
  */
  readonly name: string;
  /**
  * The third-party provider configuration for the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_connector_v2#provider_name SecurityhubConnectorV2#provider_name}
  */
  readonly providerName: SecurityhubConnectorV2ProviderName;
  /**
  * A key-value pair to associate with a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface SecurityhubConnectorV2ProviderNameJiraCloud {
  /**
  * The project key for a Jira Cloud instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_connector_v2#project_key SecurityhubConnectorV2#project_key}
  */
  readonly projectKey?: string;
}

export function securityhubConnectorV2ProviderNameJiraCloudToTerraform(struct?: SecurityhubConnectorV2ProviderNameJiraCloud | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    project_key: cdktn.stringToTerraform(struct!.projectKey),
  }
}


export function securityhubConnectorV2ProviderNameJiraCloudToHclTerraform(struct?: SecurityhubConnectorV2ProviderNameJiraCloud | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    project_key: {
      value: cdktn.stringToHclTerraform(struct!.projectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubConnectorV2ProviderNameJiraCloudOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubConnectorV2ProviderNameJiraCloud | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectKey = this._projectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubConnectorV2ProviderNameJiraCloud | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectKey = value.projectKey;
    }
  }

  // project_key - computed: true, optional: true, required: false
  private _projectKey?: string;
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  public resetProjectKey() {
    this._projectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }
}
export interface SecurityhubConnectorV2ProviderNameServiceNow {
  /**
  * The instance name of ServiceNow ITSM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_connector_v2#instance_name SecurityhubConnectorV2#instance_name}
  */
  readonly instanceName?: string;
  /**
  * The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the ServiceNow credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_connector_v2#secret_arn SecurityhubConnectorV2#secret_arn}
  */
  readonly secretArn?: string;
}

export function securityhubConnectorV2ProviderNameServiceNowToTerraform(struct?: SecurityhubConnectorV2ProviderNameServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_name: cdktn.stringToTerraform(struct!.instanceName),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function securityhubConnectorV2ProviderNameServiceNowToHclTerraform(struct?: SecurityhubConnectorV2ProviderNameServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_name: {
      value: cdktn.stringToHclTerraform(struct!.instanceName),
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

export class SecurityhubConnectorV2ProviderNameServiceNowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubConnectorV2ProviderNameServiceNow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubConnectorV2ProviderNameServiceNow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceName = undefined;
      this._secretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceName = value.instanceName;
      this._secretArn = value.secretArn;
    }
  }

  // instance_name - computed: true, optional: true, required: false
  private _instanceName?: string;
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
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
export interface SecurityhubConnectorV2ProviderName {
  /**
  * The initial configuration settings required to establish an integration between Security Hub and Jira Cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_connector_v2#jira_cloud SecurityhubConnectorV2#jira_cloud}
  */
  readonly jiraCloud?: SecurityhubConnectorV2ProviderNameJiraCloud;
  /**
  * The initial configuration settings required to establish an integration between Security Hub and ServiceNow ITSM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_connector_v2#service_now SecurityhubConnectorV2#service_now}
  */
  readonly serviceNow?: SecurityhubConnectorV2ProviderNameServiceNow;
}

export function securityhubConnectorV2ProviderNameToTerraform(struct?: SecurityhubConnectorV2ProviderName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    jira_cloud: securityhubConnectorV2ProviderNameJiraCloudToTerraform(struct!.jiraCloud),
    service_now: securityhubConnectorV2ProviderNameServiceNowToTerraform(struct!.serviceNow),
  }
}


export function securityhubConnectorV2ProviderNameToHclTerraform(struct?: SecurityhubConnectorV2ProviderName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    jira_cloud: {
      value: securityhubConnectorV2ProviderNameJiraCloudToHclTerraform(struct!.jiraCloud),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityhubConnectorV2ProviderNameJiraCloud",
    },
    service_now: {
      value: securityhubConnectorV2ProviderNameServiceNowToHclTerraform(struct!.serviceNow),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityhubConnectorV2ProviderNameServiceNow",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubConnectorV2ProviderNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubConnectorV2ProviderName | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jiraCloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jiraCloud = this._jiraCloud?.internalValue;
    }
    if (this._serviceNow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubConnectorV2ProviderName | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jiraCloud.internalValue = undefined;
      this._serviceNow.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jiraCloud.internalValue = value.jiraCloud;
      this._serviceNow.internalValue = value.serviceNow;
    }
  }

  // jira_cloud - computed: true, optional: true, required: false
  private _jiraCloud = new SecurityhubConnectorV2ProviderNameJiraCloudOutputReference(this, "jira_cloud");
  public get jiraCloud() {
    return this._jiraCloud;
  }
  public putJiraCloud(value: SecurityhubConnectorV2ProviderNameJiraCloud) {
    this._jiraCloud.internalValue = value;
  }
  public resetJiraCloud() {
    this._jiraCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraCloudInput() {
    return this._jiraCloud.internalValue;
  }

  // service_now - computed: true, optional: true, required: false
  private _serviceNow = new SecurityhubConnectorV2ProviderNameServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: SecurityhubConnectorV2ProviderNameServiceNow) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_connector_v2 awscc_securityhub_connector_v2}
*/
export class SecurityhubConnectorV2 extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_securityhub_connector_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubConnectorV2 to import
  * @param importFromId The id of the existing SecurityhubConnectorV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_connector_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubConnectorV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_connector_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_connector_v2 awscc_securityhub_connector_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubConnectorV2Config
  */
  public constructor(scope: Construct, id: string, config: SecurityhubConnectorV2Config) {
    super(scope, id, {
      terraformResourceType: 'awscc_securityhub_connector_v2',
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
    this._description = config.description;
    this._kmsKeyArn = config.kmsKeyArn;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string;
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
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
  private _providerName = new SecurityhubConnectorV2ProviderNameOutputReference(this, "provider_name");
  public get providerName() {
    return this._providerName;
  }
  public putProviderName(value: SecurityhubConnectorV2ProviderName) {
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
      kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
      name: cdktn.stringToTerraform(this._name),
      provider_name: securityhubConnectorV2ProviderNameToTerraform(this._providerName.internalValue),
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
      kms_key_arn: {
        value: cdktn.stringToHclTerraform(this._kmsKeyArn),
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
        value: securityhubConnectorV2ProviderNameToHclTerraform(this._providerName.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityhubConnectorV2ProviderName",
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
