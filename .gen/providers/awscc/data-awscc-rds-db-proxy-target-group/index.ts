// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/rds_db_proxy_target_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccRdsDbProxyTargetGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/rds_db_proxy_target_group#id DataAwsccRdsDbProxyTargetGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo {
}

export function dataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoToTerraform(struct?: DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoToHclTerraform(struct?: DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_borrow_timeout - computed: true, optional: false, required: false
  public get connectionBorrowTimeout() {
    return this.getNumberAttribute('connection_borrow_timeout');
  }

  // init_query - computed: true, optional: false, required: false
  public get initQuery() {
    return this.getStringAttribute('init_query');
  }

  // max_connections_percent - computed: true, optional: false, required: false
  public get maxConnectionsPercent() {
    return this.getNumberAttribute('max_connections_percent');
  }

  // max_idle_connections_percent - computed: true, optional: false, required: false
  public get maxIdleConnectionsPercent() {
    return this.getNumberAttribute('max_idle_connections_percent');
  }

  // session_pinning_filters - computed: true, optional: false, required: false
  public get sessionPinningFilters() {
    return this.getListAttribute('session_pinning_filters');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/rds_db_proxy_target_group awscc_rds_db_proxy_target_group}
*/
export class DataAwsccRdsDbProxyTargetGroup extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_rds_db_proxy_target_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccRdsDbProxyTargetGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccRdsDbProxyTargetGroup to import
  * @param importFromId The id of the existing DataAwsccRdsDbProxyTargetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/rds_db_proxy_target_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccRdsDbProxyTargetGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rds_db_proxy_target_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/rds_db_proxy_target_group awscc_rds_db_proxy_target_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRdsDbProxyTargetGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRdsDbProxyTargetGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_rds_db_proxy_target_group',
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

  // connection_pool_configuration_info - computed: true, optional: false, required: false
  private _connectionPoolConfigurationInfo = new DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference(this, "connection_pool_configuration_info");
  public get connectionPoolConfigurationInfo() {
    return this._connectionPoolConfigurationInfo;
  }

  // db_cluster_identifiers - computed: true, optional: false, required: false
  public get dbClusterIdentifiers() {
    return this.getListAttribute('db_cluster_identifiers');
  }

  // db_instance_identifiers - computed: true, optional: false, required: false
  public get dbInstanceIdentifiers() {
    return this.getListAttribute('db_instance_identifiers');
  }

  // db_proxy_name - computed: true, optional: false, required: false
  public get dbProxyName() {
    return this.getStringAttribute('db_proxy_name');
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

  // target_group_arn - computed: true, optional: false, required: false
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }

  // target_group_name - computed: true, optional: false, required: false
  public get targetGroupName() {
    return this.getStringAttribute('target_group_name');
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
