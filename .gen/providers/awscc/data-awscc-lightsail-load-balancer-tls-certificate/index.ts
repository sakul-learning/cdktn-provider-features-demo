// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/lightsail_load_balancer_tls_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccLightsailLoadBalancerTlsCertificateConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/lightsail_load_balancer_tls_certificate#id DataAwsccLightsailLoadBalancerTlsCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/lightsail_load_balancer_tls_certificate awscc_lightsail_load_balancer_tls_certificate}
*/
export class DataAwsccLightsailLoadBalancerTlsCertificate extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lightsail_load_balancer_tls_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccLightsailLoadBalancerTlsCertificate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccLightsailLoadBalancerTlsCertificate to import
  * @param importFromId The id of the existing DataAwsccLightsailLoadBalancerTlsCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/lightsail_load_balancer_tls_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccLightsailLoadBalancerTlsCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lightsail_load_balancer_tls_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/lightsail_load_balancer_tls_certificate awscc_lightsail_load_balancer_tls_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLightsailLoadBalancerTlsCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLightsailLoadBalancerTlsCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lightsail_load_balancer_tls_certificate',
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

  // certificate_alternative_names - computed: true, optional: false, required: false
  public get certificateAlternativeNames() {
    return cdktn.Fn.tolist(this.getListAttribute('certificate_alternative_names'));
  }

  // certificate_domain_name - computed: true, optional: false, required: false
  public get certificateDomainName() {
    return this.getStringAttribute('certificate_domain_name');
  }

  // certificate_name - computed: true, optional: false, required: false
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // https_redirection_enabled - computed: true, optional: false, required: false
  public get httpsRedirectionEnabled() {
    return this.getBooleanAttribute('https_redirection_enabled');
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

  // is_attached - computed: true, optional: false, required: false
  public get isAttached() {
    return this.getBooleanAttribute('is_attached');
  }

  // load_balancer_name - computed: true, optional: false, required: false
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }

  // load_balancer_tls_certificate_arn - computed: true, optional: false, required: false
  public get loadBalancerTlsCertificateArn() {
    return this.getStringAttribute('load_balancer_tls_certificate_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
