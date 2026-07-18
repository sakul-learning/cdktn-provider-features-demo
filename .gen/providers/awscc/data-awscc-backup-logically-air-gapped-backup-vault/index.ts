// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/backup_logically_air_gapped_backup_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBackupLogicallyAirGappedBackupVaultConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/backup_logically_air_gapped_backup_vault#id DataAwsccBackupLogicallyAirGappedBackupVault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBackupLogicallyAirGappedBackupVaultNotifications {
}

export function dataAwsccBackupLogicallyAirGappedBackupVaultNotificationsToTerraform(struct?: DataAwsccBackupLogicallyAirGappedBackupVaultNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBackupLogicallyAirGappedBackupVaultNotificationsToHclTerraform(struct?: DataAwsccBackupLogicallyAirGappedBackupVaultNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBackupLogicallyAirGappedBackupVaultNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBackupLogicallyAirGappedBackupVaultNotifications | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/backup_logically_air_gapped_backup_vault awscc_backup_logically_air_gapped_backup_vault}
*/
export class DataAwsccBackupLogicallyAirGappedBackupVault extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_backup_logically_air_gapped_backup_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBackupLogicallyAirGappedBackupVault resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBackupLogicallyAirGappedBackupVault to import
  * @param importFromId The id of the existing DataAwsccBackupLogicallyAirGappedBackupVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/backup_logically_air_gapped_backup_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBackupLogicallyAirGappedBackupVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_backup_logically_air_gapped_backup_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/backup_logically_air_gapped_backup_vault awscc_backup_logically_air_gapped_backup_vault} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBackupLogicallyAirGappedBackupVaultConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBackupLogicallyAirGappedBackupVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_backup_logically_air_gapped_backup_vault',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
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

  // max_retention_days - computed: true, optional: false, required: false
  public get maxRetentionDays() {
    return this.getNumberAttribute('max_retention_days');
  }

  // min_retention_days - computed: true, optional: false, required: false
  public get minRetentionDays() {
    return this.getNumberAttribute('min_retention_days');
  }

  // mpa_approval_team_arn - computed: true, optional: false, required: false
  public get mpaApprovalTeamArn() {
    return this.getStringAttribute('mpa_approval_team_arn');
  }

  // notifications - computed: true, optional: false, required: false
  private _notifications = new DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference(this, "notifications");
  public get notifications() {
    return this._notifications;
  }

  // vault_state - computed: true, optional: false, required: false
  public get vaultState() {
    return this.getStringAttribute('vault_state');
  }

  // vault_type - computed: true, optional: false, required: false
  public get vaultType() {
    return this.getStringAttribute('vault_type');
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
