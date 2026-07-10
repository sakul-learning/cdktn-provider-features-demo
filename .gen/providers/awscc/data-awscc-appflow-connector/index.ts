// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/appflow_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccAppflowConnectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/appflow_connector#id DataAwsccAppflowConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccAppflowConnectorConnectorProvisioningConfigLambda {
}

export function dataAwsccAppflowConnectorConnectorProvisioningConfigLambdaToTerraform(struct?: DataAwsccAppflowConnectorConnectorProvisioningConfigLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorConnectorProvisioningConfigLambdaToHclTerraform(struct?: DataAwsccAppflowConnectorConnectorProvisioningConfigLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorConnectorProvisioningConfigLambda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorConnectorProvisioningConfigLambda | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lambda_arn - computed: true, optional: false, required: false
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
}
export interface DataAwsccAppflowConnectorConnectorProvisioningConfig {
}

export function dataAwsccAppflowConnectorConnectorProvisioningConfigToTerraform(struct?: DataAwsccAppflowConnectorConnectorProvisioningConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorConnectorProvisioningConfigToHclTerraform(struct?: DataAwsccAppflowConnectorConnectorProvisioningConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorConnectorProvisioningConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorConnectorProvisioningConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lambda - computed: true, optional: false, required: false
  private _lambda = new DataAwsccAppflowConnectorConnectorProvisioningConfigLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/appflow_connector awscc_appflow_connector}
*/
export class DataAwsccAppflowConnector extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_appflow_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccAppflowConnector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccAppflowConnector to import
  * @param importFromId The id of the existing DataAwsccAppflowConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/appflow_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccAppflowConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appflow_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/appflow_connector awscc_appflow_connector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAppflowConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAppflowConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_appflow_connector',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector_arn - computed: true, optional: false, required: false
  public get connectorArn() {
    return this.getStringAttribute('connector_arn');
  }

  // connector_label - computed: true, optional: false, required: false
  public get connectorLabel() {
    return this.getStringAttribute('connector_label');
  }

  // connector_provisioning_config - computed: true, optional: false, required: false
  private _connectorProvisioningConfig = new DataAwsccAppflowConnectorConnectorProvisioningConfigOutputReference(this, "connector_provisioning_config");
  public get connectorProvisioningConfig() {
    return this._connectorProvisioningConfig;
  }

  // connector_provisioning_type - computed: true, optional: false, required: false
  public get connectorProvisioningType() {
    return this.getStringAttribute('connector_provisioning_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
