// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/networkmanager_core_network_prefix_list_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkmanagerCoreNetworkPrefixListAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the core network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/networkmanager_core_network_prefix_list_association#core_network_id NetworkmanagerCoreNetworkPrefixListAssociation#core_network_id}
  */
  readonly coreNetworkId: string;
  /**
  * The alias of the prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/networkmanager_core_network_prefix_list_association#prefix_list_alias NetworkmanagerCoreNetworkPrefixListAssociation#prefix_list_alias}
  */
  readonly prefixListAlias: string;
  /**
  * The Amazon Resource Name (ARN) of the prefix list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/networkmanager_core_network_prefix_list_association#prefix_list_arn NetworkmanagerCoreNetworkPrefixListAssociation#prefix_list_arn}
  */
  readonly prefixListArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/networkmanager_core_network_prefix_list_association awscc_networkmanager_core_network_prefix_list_association}
*/
export class NetworkmanagerCoreNetworkPrefixListAssociation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_networkmanager_core_network_prefix_list_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkmanagerCoreNetworkPrefixListAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkmanagerCoreNetworkPrefixListAssociation to import
  * @param importFromId The id of the existing NetworkmanagerCoreNetworkPrefixListAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/networkmanager_core_network_prefix_list_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkmanagerCoreNetworkPrefixListAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkmanager_core_network_prefix_list_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/networkmanager_core_network_prefix_list_association awscc_networkmanager_core_network_prefix_list_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkmanagerCoreNetworkPrefixListAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkmanagerCoreNetworkPrefixListAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkmanager_core_network_prefix_list_association',
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
    this._coreNetworkId = config.coreNetworkId;
    this._prefixListAlias = config.prefixListAlias;
    this._prefixListArn = config.prefixListArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // core_network_id - computed: false, optional: false, required: true
  private _coreNetworkId?: string; 
  public get coreNetworkId() {
    return this.getStringAttribute('core_network_id');
  }
  public set coreNetworkId(value: string) {
    this._coreNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreNetworkIdInput() {
    return this._coreNetworkId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // prefix_list_alias - computed: false, optional: false, required: true
  private _prefixListAlias?: string; 
  public get prefixListAlias() {
    return this.getStringAttribute('prefix_list_alias');
  }
  public set prefixListAlias(value: string) {
    this._prefixListAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListAliasInput() {
    return this._prefixListAlias;
  }

  // prefix_list_arn - computed: false, optional: false, required: true
  private _prefixListArn?: string; 
  public get prefixListArn() {
    return this.getStringAttribute('prefix_list_arn');
  }
  public set prefixListArn(value: string) {
    this._prefixListArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListArnInput() {
    return this._prefixListArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      core_network_id: cdktn.stringToTerraform(this._coreNetworkId),
      prefix_list_alias: cdktn.stringToTerraform(this._prefixListAlias),
      prefix_list_arn: cdktn.stringToTerraform(this._prefixListArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      core_network_id: {
        value: cdktn.stringToHclTerraform(this._coreNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_alias: {
        value: cdktn.stringToHclTerraform(this._prefixListAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_arn: {
        value: cdktn.stringToHclTerraform(this._prefixListArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
