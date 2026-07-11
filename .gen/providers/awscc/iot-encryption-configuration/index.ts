// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_encryption_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotEncryptionConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_encryption_configuration#encryption_type IotEncryptionConfiguration#encryption_type}
  */
  readonly encryptionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_encryption_configuration#kms_access_role_arn IotEncryptionConfiguration#kms_access_role_arn}
  */
  readonly kmsAccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_encryption_configuration#kms_key_arn IotEncryptionConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}
export interface IotEncryptionConfigurationConfigurationDetails {
}

export function iotEncryptionConfigurationConfigurationDetailsToTerraform(struct?: IotEncryptionConfigurationConfigurationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function iotEncryptionConfigurationConfigurationDetailsToHclTerraform(struct?: IotEncryptionConfigurationConfigurationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IotEncryptionConfigurationConfigurationDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotEncryptionConfigurationConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotEncryptionConfigurationConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration_status - computed: true, optional: false, required: false
  public get configurationStatus() {
    return this.getStringAttribute('configuration_status');
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_encryption_configuration awscc_iot_encryption_configuration}
*/
export class IotEncryptionConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iot_encryption_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotEncryptionConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotEncryptionConfiguration to import
  * @param importFromId The id of the existing IotEncryptionConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_encryption_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotEncryptionConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_encryption_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_encryption_configuration awscc_iot_encryption_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotEncryptionConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: IotEncryptionConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_encryption_configuration',
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
    this._encryptionType = config.encryptionType;
    this._kmsAccessRoleArn = config.kmsAccessRoleArn;
    this._kmsKeyArn = config.kmsKeyArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // configuration_details - computed: true, optional: false, required: false
  private _configurationDetails = new IotEncryptionConfigurationConfigurationDetailsOutputReference(this, "configuration_details");
  public get configurationDetails() {
    return this._configurationDetails;
  }

  // encryption_type - computed: false, optional: false, required: true
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_access_role_arn - computed: true, optional: true, required: false
  private _kmsAccessRoleArn?: string; 
  public get kmsAccessRoleArn() {
    return this.getStringAttribute('kms_access_role_arn');
  }
  public set kmsAccessRoleArn(value: string) {
    this._kmsAccessRoleArn = value;
  }
  public resetKmsAccessRoleArn() {
    this._kmsAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsAccessRoleArnInput() {
    return this._kmsAccessRoleArn;
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

  // last_modified_date - computed: true, optional: false, required: false
  public get lastModifiedDate() {
    return this.getStringAttribute('last_modified_date');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encryption_type: cdktn.stringToTerraform(this._encryptionType),
      kms_access_role_arn: cdktn.stringToTerraform(this._kmsAccessRoleArn),
      kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encryption_type: {
        value: cdktn.stringToHclTerraform(this._encryptionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_access_role_arn: {
        value: cdktn.stringToHclTerraform(this._kmsAccessRoleArn),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
