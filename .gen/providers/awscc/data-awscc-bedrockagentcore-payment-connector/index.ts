// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrockagentcore_payment_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBedrockagentcorePaymentConnectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrockagentcore_payment_connector#id DataAwsccBedrockagentcorePaymentConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp {
}

export function dataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpToTerraform(struct?: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpToHclTerraform(struct?: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credential_provider_arn - computed: true, optional: false, required: false
  public get credentialProviderArn() {
    return this.getStringAttribute('credential_provider_arn');
  }
}
export interface DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy {
}

export function dataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyToTerraform(struct?: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyToHclTerraform(struct?: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credential_provider_arn - computed: true, optional: false, required: false
  public get credentialProviderArn() {
    return this.getStringAttribute('credential_provider_arn');
  }
}
export interface DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations {
}

export function dataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsToTerraform(struct?: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsToHclTerraform(struct?: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // coinbase_cdp - computed: true, optional: false, required: false
  private _coinbaseCdp = new DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference(this, "coinbase_cdp");
  public get coinbaseCdp() {
    return this._coinbaseCdp;
  }

  // stripe_privy - computed: true, optional: false, required: false
  private _stripePrivy = new DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference(this, "stripe_privy");
  public get stripePrivy() {
    return this._stripePrivy;
  }
}

export class DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference {
    return new DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrockagentcore_payment_connector awscc_bedrockagentcore_payment_connector}
*/
export class DataAwsccBedrockagentcorePaymentConnector extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrockagentcore_payment_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBedrockagentcorePaymentConnector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBedrockagentcorePaymentConnector to import
  * @param importFromId The id of the existing DataAwsccBedrockagentcorePaymentConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrockagentcore_payment_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBedrockagentcorePaymentConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_payment_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrockagentcore_payment_connector awscc_bedrockagentcore_payment_connector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBedrockagentcorePaymentConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBedrockagentcorePaymentConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrockagentcore_payment_connector',
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

  // connector_created_at - computed: true, optional: false, required: false
  public get connectorCreatedAt() {
    return this.getStringAttribute('connector_created_at');
  }

  // connector_last_updated_at - computed: true, optional: false, required: false
  public get connectorLastUpdatedAt() {
    return this.getStringAttribute('connector_last_updated_at');
  }

  // connector_name - computed: true, optional: false, required: false
  public get connectorName() {
    return this.getStringAttribute('connector_name');
  }

  // connector_status - computed: true, optional: false, required: false
  public get connectorStatus() {
    return this.getStringAttribute('connector_status');
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // credential_provider_configurations - computed: true, optional: false, required: false
  private _credentialProviderConfigurations = new DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList(this, "credential_provider_configurations", false);
  public get credentialProviderConfigurations() {
    return this._credentialProviderConfigurations;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // payment_connector_arn - computed: true, optional: false, required: false
  public get paymentConnectorArn() {
    return this.getStringAttribute('payment_connector_arn');
  }

  // payment_connector_id - computed: true, optional: false, required: false
  public get paymentConnectorId() {
    return this.getStringAttribute('payment_connector_id');
  }

  // payment_manager_id - computed: true, optional: false, required: false
  public get paymentManagerId() {
    return this.getStringAttribute('payment_manager_id');
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
