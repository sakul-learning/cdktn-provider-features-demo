// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/redshift_endpoint_authorization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccRedshiftEndpointAuthorizationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/redshift_endpoint_authorization#id DataAwsccRedshiftEndpointAuthorization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/redshift_endpoint_authorization awscc_redshift_endpoint_authorization}
*/
export class DataAwsccRedshiftEndpointAuthorization extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_redshift_endpoint_authorization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccRedshiftEndpointAuthorization resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccRedshiftEndpointAuthorization to import
  * @param importFromId The id of the existing DataAwsccRedshiftEndpointAuthorization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/redshift_endpoint_authorization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccRedshiftEndpointAuthorization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_redshift_endpoint_authorization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/redshift_endpoint_authorization awscc_redshift_endpoint_authorization} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRedshiftEndpointAuthorizationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRedshiftEndpointAuthorizationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_redshift_endpoint_authorization',
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

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // allowed_all_vp_cs - computed: true, optional: false, required: false
  public get allowedAllVpCs() {
    return this.getBooleanAttribute('allowed_all_vp_cs');
  }

  // allowed_vp_cs - computed: true, optional: false, required: false
  public get allowedVpCs() {
    return this.getListAttribute('allowed_vp_cs');
  }

  // authorize_time - computed: true, optional: false, required: false
  public get authorizeTime() {
    return this.getStringAttribute('authorize_time');
  }

  // cluster_identifier - computed: true, optional: false, required: false
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }

  // cluster_status - computed: true, optional: false, required: false
  public get clusterStatus() {
    return this.getStringAttribute('cluster_status');
  }

  // endpoint_count - computed: true, optional: false, required: false
  public get endpointCount() {
    return this.getNumberAttribute('endpoint_count');
  }

  // force - computed: true, optional: false, required: false
  public get force() {
    return this.getBooleanAttribute('force');
  }

  // grantee - computed: true, optional: false, required: false
  public get grantee() {
    return this.getStringAttribute('grantee');
  }

  // grantor - computed: true, optional: false, required: false
  public get grantor() {
    return this.getStringAttribute('grantor');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_ids - computed: true, optional: false, required: false
  public get vpcIds() {
    return this.getListAttribute('vpc_ids');
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
