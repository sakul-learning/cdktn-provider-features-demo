// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/certificatemanager_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CertificatemanagerAccountConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/certificatemanager_account#expiry_events_configuration CertificatemanagerAccount#expiry_events_configuration}
  */
  readonly expiryEventsConfiguration: CertificatemanagerAccountExpiryEventsConfiguration;
}
export interface CertificatemanagerAccountExpiryEventsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/certificatemanager_account#days_before_expiry CertificatemanagerAccount#days_before_expiry}
  */
  readonly daysBeforeExpiry?: number;
}

export function certificatemanagerAccountExpiryEventsConfigurationToTerraform(struct?: CertificatemanagerAccountExpiryEventsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    days_before_expiry: cdktn.numberToTerraform(struct!.daysBeforeExpiry),
  }
}


export function certificatemanagerAccountExpiryEventsConfigurationToHclTerraform(struct?: CertificatemanagerAccountExpiryEventsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    days_before_expiry: {
      value: cdktn.numberToHclTerraform(struct!.daysBeforeExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificatemanagerAccountExpiryEventsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificatemanagerAccountExpiryEventsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysBeforeExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysBeforeExpiry = this._daysBeforeExpiry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatemanagerAccountExpiryEventsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysBeforeExpiry = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysBeforeExpiry = value.daysBeforeExpiry;
    }
  }

  // days_before_expiry - computed: true, optional: true, required: false
  private _daysBeforeExpiry?: number; 
  public get daysBeforeExpiry() {
    return this.getNumberAttribute('days_before_expiry');
  }
  public set daysBeforeExpiry(value: number) {
    this._daysBeforeExpiry = value;
  }
  public resetDaysBeforeExpiry() {
    this._daysBeforeExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysBeforeExpiryInput() {
    return this._daysBeforeExpiry;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/certificatemanager_account awscc_certificatemanager_account}
*/
export class CertificatemanagerAccount extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_certificatemanager_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CertificatemanagerAccount resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificatemanagerAccount to import
  * @param importFromId The id of the existing CertificatemanagerAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/certificatemanager_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificatemanagerAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_certificatemanager_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/certificatemanager_account awscc_certificatemanager_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificatemanagerAccountConfig
  */
  public constructor(scope: Construct, id: string, config: CertificatemanagerAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_certificatemanager_account',
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
    this._expiryEventsConfiguration.internalValue = config.expiryEventsConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // expiry_events_configuration - computed: false, optional: false, required: true
  private _expiryEventsConfiguration = new CertificatemanagerAccountExpiryEventsConfigurationOutputReference(this, "expiry_events_configuration");
  public get expiryEventsConfiguration() {
    return this._expiryEventsConfiguration;
  }
  public putExpiryEventsConfiguration(value: CertificatemanagerAccountExpiryEventsConfiguration) {
    this._expiryEventsConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryEventsConfigurationInput() {
    return this._expiryEventsConfiguration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expiry_events_configuration: certificatemanagerAccountExpiryEventsConfigurationToTerraform(this._expiryEventsConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expiry_events_configuration: {
        value: certificatemanagerAccountExpiryEventsConfigurationToHclTerraform(this._expiryEventsConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificatemanagerAccountExpiryEventsConfiguration",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
