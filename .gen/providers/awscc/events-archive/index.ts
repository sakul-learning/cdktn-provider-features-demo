// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/events_archive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EventsArchiveConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/events_archive#archive_name EventsArchive#archive_name}
  */
  readonly archiveName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/events_archive#description EventsArchive#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/events_archive#event_pattern EventsArchive#event_pattern}
  */
  readonly eventPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/events_archive#kms_key_identifier EventsArchive#kms_key_identifier}
  */
  readonly kmsKeyIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/events_archive#retention_days EventsArchive#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/events_archive#source_arn EventsArchive#source_arn}
  */
  readonly sourceArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/events_archive awscc_events_archive}
*/
export class EventsArchive extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_events_archive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EventsArchive resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventsArchive to import
  * @param importFromId The id of the existing EventsArchive that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/events_archive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventsArchive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_events_archive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/events_archive awscc_events_archive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventsArchiveConfig
  */
  public constructor(scope: Construct, id: string, config: EventsArchiveConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_events_archive',
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
    this._archiveName = config.archiveName;
    this._description = config.description;
    this._eventPattern = config.eventPattern;
    this._kmsKeyIdentifier = config.kmsKeyIdentifier;
    this._retentionDays = config.retentionDays;
    this._sourceArn = config.sourceArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_name - computed: true, optional: true, required: false
  private _archiveName?: string; 
  public get archiveName() {
    return this.getStringAttribute('archive_name');
  }
  public set archiveName(value: string) {
    this._archiveName = value;
  }
  public resetArchiveName() {
    this._archiveName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveNameInput() {
    return this._archiveName;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // event_pattern - computed: true, optional: true, required: false
  private _eventPattern?: string; 
  public get eventPattern() {
    return this.getStringAttribute('event_pattern');
  }
  public set eventPattern(value: string) {
    this._eventPattern = value;
  }
  public resetEventPattern() {
    this._eventPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPatternInput() {
    return this._eventPattern;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_identifier - computed: true, optional: true, required: false
  private _kmsKeyIdentifier?: string; 
  public get kmsKeyIdentifier() {
    return this.getStringAttribute('kms_key_identifier');
  }
  public set kmsKeyIdentifier(value: string) {
    this._kmsKeyIdentifier = value;
  }
  public resetKmsKeyIdentifier() {
    this._kmsKeyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdentifierInput() {
    return this._kmsKeyIdentifier;
  }

  // retention_days - computed: true, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // source_arn - computed: false, optional: false, required: true
  private _sourceArn?: string; 
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
  public set sourceArn(value: string) {
    this._sourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArnInput() {
    return this._sourceArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archive_name: cdktn.stringToTerraform(this._archiveName),
      description: cdktn.stringToTerraform(this._description),
      event_pattern: cdktn.stringToTerraform(this._eventPattern),
      kms_key_identifier: cdktn.stringToTerraform(this._kmsKeyIdentifier),
      retention_days: cdktn.numberToTerraform(this._retentionDays),
      source_arn: cdktn.stringToTerraform(this._sourceArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archive_name: {
        value: cdktn.stringToHclTerraform(this._archiveName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_pattern: {
        value: cdktn.stringToHclTerraform(this._eventPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_identifier: {
        value: cdktn.stringToHclTerraform(this._kmsKeyIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_days: {
        value: cdktn.numberToHclTerraform(this._retentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_arn: {
        value: cdktn.stringToHclTerraform(this._sourceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
