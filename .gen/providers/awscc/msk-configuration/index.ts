// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/msk_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MskConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/msk_configuration#description MskConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/msk_configuration#kafka_versions_list MskConfiguration#kafka_versions_list}
  */
  readonly kafkaVersionsList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/msk_configuration#latest_revision MskConfiguration#latest_revision}
  */
  readonly latestRevision?: MskConfigurationLatestRevision;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/msk_configuration#name MskConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/msk_configuration#server_properties MskConfiguration#server_properties}
  */
  readonly serverProperties: string;
}
export interface MskConfigurationLatestRevision {
}

export function mskConfigurationLatestRevisionToTerraform(struct?: MskConfigurationLatestRevision | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function mskConfigurationLatestRevisionToHclTerraform(struct?: MskConfigurationLatestRevision | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MskConfigurationLatestRevisionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MskConfigurationLatestRevision | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MskConfigurationLatestRevision | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/msk_configuration awscc_msk_configuration}
*/
export class MskConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_msk_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MskConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MskConfiguration to import
  * @param importFromId The id of the existing MskConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/msk_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MskConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_msk_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/msk_configuration awscc_msk_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MskConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: MskConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_msk_configuration',
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
    this._description = config.description;
    this._kafkaVersionsList = config.kafkaVersionsList;
    this._latestRevision.internalValue = config.latestRevision;
    this._name = config.name;
    this._serverProperties = config.serverProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kafka_versions_list - computed: true, optional: true, required: false
  private _kafkaVersionsList?: string[]; 
  public get kafkaVersionsList() {
    return this.getListAttribute('kafka_versions_list');
  }
  public set kafkaVersionsList(value: string[]) {
    this._kafkaVersionsList = value;
  }
  public resetKafkaVersionsList() {
    this._kafkaVersionsList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaVersionsListInput() {
    return this._kafkaVersionsList;
  }

  // latest_revision - computed: true, optional: true, required: false
  private _latestRevision = new MskConfigurationLatestRevisionOutputReference(this, "latest_revision");
  public get latestRevision() {
    return this._latestRevision;
  }
  public putLatestRevision(value: MskConfigurationLatestRevision) {
    this._latestRevision.internalValue = value;
  }
  public resetLatestRevision() {
    this._latestRevision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestRevisionInput() {
    return this._latestRevision.internalValue;
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

  // server_properties - computed: false, optional: false, required: true
  private _serverProperties?: string; 
  public get serverProperties() {
    return this.getStringAttribute('server_properties');
  }
  public set serverProperties(value: string) {
    this._serverProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPropertiesInput() {
    return this._serverProperties;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      kafka_versions_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._kafkaVersionsList),
      latest_revision: mskConfigurationLatestRevisionToTerraform(this._latestRevision.internalValue),
      name: cdktn.stringToTerraform(this._name),
      server_properties: cdktn.stringToTerraform(this._serverProperties),
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
      kafka_versions_list: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._kafkaVersionsList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      latest_revision: {
        value: mskConfigurationLatestRevisionToHclTerraform(this._latestRevision.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MskConfigurationLatestRevision",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_properties: {
        value: cdktn.stringToHclTerraform(this._serverProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
