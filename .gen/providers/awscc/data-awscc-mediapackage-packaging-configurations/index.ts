// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/mediapackage_packaging_configurations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMediapackagePackagingConfigurationsConfig extends cdktn.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/mediapackage_packaging_configurations awscc_mediapackage_packaging_configurations}
*/
export class DataAwsccMediapackagePackagingConfigurations extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediapackage_packaging_configurations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMediapackagePackagingConfigurations resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMediapackagePackagingConfigurations to import
  * @param importFromId The id of the existing DataAwsccMediapackagePackagingConfigurations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/mediapackage_packaging_configurations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMediapackagePackagingConfigurations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediapackage_packaging_configurations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/mediapackage_packaging_configurations awscc_mediapackage_packaging_configurations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediapackagePackagingConfigurationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediapackagePackagingConfigurationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediapackage_packaging_configurations',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.91.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktn.Fn.tolist(this.getListAttribute('ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
