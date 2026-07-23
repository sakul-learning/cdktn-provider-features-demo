// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/backup_backup_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBackupBackupVaultConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/backup_backup_vault#id DataAwsccBackupBackupVault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBackupBackupVaultLockConfiguration {
}

export function dataAwsccBackupBackupVaultLockConfigurationToTerraform(struct?: DataAwsccBackupBackupVaultLockConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupBackupVaultLockConfigurationToHclTerraform(struct?: DataAwsccBackupBackupVaultLockConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupBackupVaultLockConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBackupBackupVaultLockConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupBackupVaultLockConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // changeable_for_days - computed: true, optional: false, required: false
  public get changeableForDays() {
    return this.getNumberAttribute('changeable_for_days');
  }

  // max_retention_days - computed: true, optional: false, required: false
  public get maxRetentionDays() {
    return this.getNumberAttribute('max_retention_days');
  }

  // min_retention_days - computed: true, optional: false, required: false
  public get minRetentionDays() {
    return this.getNumberAttribute('min_retention_days');
  }
}
export interface DataAwsccBackupBackupVaultNotifications {
}

export function dataAwsccBackupBackupVaultNotificationsToTerraform(struct?: DataAwsccBackupBackupVaultNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupBackupVaultNotificationsToHclTerraform(struct?: DataAwsccBackupBackupVaultNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupBackupVaultNotificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBackupBackupVaultNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupBackupVaultNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_vault_events - computed: true, optional: false, required: false
  public get backupVaultEvents() {
    return this.getListAttribute('backup_vault_events');
  }

  // sns_topic_arn - computed: true, optional: false, required: false
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/backup_backup_vault awscc_backup_backup_vault}
*/
export class DataAwsccBackupBackupVault extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_backup_backup_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBackupBackupVault resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBackupBackupVault to import
  * @param importFromId The id of the existing DataAwsccBackupBackupVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/backup_backup_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBackupBackupVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_backup_backup_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/backup_backup_vault awscc_backup_backup_vault} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBackupBackupVaultConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBackupBackupVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_backup_backup_vault',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy - computed: true, optional: false, required: false
  public get accessPolicy() {
    return this.getStringAttribute('access_policy');
  }

  // backup_vault_arn - computed: true, optional: false, required: false
  public get backupVaultArn() {
    return this.getStringAttribute('backup_vault_arn');
  }

  // backup_vault_name - computed: true, optional: false, required: false
  public get backupVaultName() {
    return this.getStringAttribute('backup_vault_name');
  }

  // backup_vault_tags - computed: true, optional: false, required: false
  private _backupVaultTags = new cdktn.StringMap(this, "backup_vault_tags");
  public get backupVaultTags() {
    return this._backupVaultTags;
  }

  // encryption_key_arn - computed: true, optional: false, required: false
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
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

  // lock_configuration - computed: true, optional: false, required: false
  private _lockConfiguration = new DataAwsccBackupBackupVaultLockConfigurationOutputReference(this, "lock_configuration");
  public get lockConfiguration() {
    return this._lockConfiguration;
  }

  // notifications - computed: true, optional: false, required: false
  private _notifications = new DataAwsccBackupBackupVaultNotificationsOutputReference(this, "notifications");
  public get notifications() {
    return this._notifications;
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
