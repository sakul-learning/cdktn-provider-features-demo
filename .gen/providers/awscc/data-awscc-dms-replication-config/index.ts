// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/dms_replication_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDmsReplicationConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/dms_replication_config#id DataAwsccDmsReplicationConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDmsReplicationConfigComputeConfig {
}

export function dataAwsccDmsReplicationConfigComputeConfigToTerraform(struct?: DataAwsccDmsReplicationConfigComputeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsReplicationConfigComputeConfigToHclTerraform(struct?: DataAwsccDmsReplicationConfigComputeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsReplicationConfigComputeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsReplicationConfigComputeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsReplicationConfigComputeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // dns_name_servers - computed: true, optional: false, required: false
  public get dnsNameServers() {
    return this.getStringAttribute('dns_name_servers');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // max_capacity_units - computed: true, optional: false, required: false
  public get maxCapacityUnits() {
    return this.getNumberAttribute('max_capacity_units');
  }

  // min_capacity_units - computed: true, optional: false, required: false
  public get minCapacityUnits() {
    return this.getNumberAttribute('min_capacity_units');
  }

  // multi_az - computed: true, optional: false, required: false
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }

  // preferred_maintenance_window - computed: true, optional: false, required: false
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }

  // replication_subnet_group_id - computed: true, optional: false, required: false
  public get replicationSubnetGroupId() {
    return this.getStringAttribute('replication_subnet_group_id');
  }

  // vpc_security_group_ids - computed: true, optional: false, required: false
  public get vpcSecurityGroupIds() {
    return this.getListAttribute('vpc_security_group_ids');
  }
}
export interface DataAwsccDmsReplicationConfigTags {
}

export function dataAwsccDmsReplicationConfigTagsToTerraform(struct?: DataAwsccDmsReplicationConfigTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsReplicationConfigTagsToHclTerraform(struct?: DataAwsccDmsReplicationConfigTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsReplicationConfigTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccDmsReplicationConfigTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsReplicationConfigTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccDmsReplicationConfigTagsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccDmsReplicationConfigTagsOutputReference {
    return new DataAwsccDmsReplicationConfigTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/dms_replication_config awscc_dms_replication_config}
*/
export class DataAwsccDmsReplicationConfig extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_dms_replication_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDmsReplicationConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDmsReplicationConfig to import
  * @param importFromId The id of the existing DataAwsccDmsReplicationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/dms_replication_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDmsReplicationConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dms_replication_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/dms_replication_config awscc_dms_replication_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDmsReplicationConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDmsReplicationConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_dms_replication_config',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.92.0'
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

  // compute_config - computed: true, optional: false, required: false
  private _computeConfig = new DataAwsccDmsReplicationConfigComputeConfigOutputReference(this, "compute_config");
  public get computeConfig() {
    return this._computeConfig;
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

  // replication_config_arn - computed: true, optional: false, required: false
  public get replicationConfigArn() {
    return this.getStringAttribute('replication_config_arn');
  }

  // replication_config_identifier - computed: true, optional: false, required: false
  public get replicationConfigIdentifier() {
    return this.getStringAttribute('replication_config_identifier');
  }

  // replication_settings - computed: true, optional: false, required: false
  public get replicationSettings() {
    return this.getStringAttribute('replication_settings');
  }

  // replication_type - computed: true, optional: false, required: false
  public get replicationType() {
    return this.getStringAttribute('replication_type');
  }

  // resource_identifier - computed: true, optional: false, required: false
  public get resourceIdentifier() {
    return this.getStringAttribute('resource_identifier');
  }

  // source_endpoint_arn - computed: true, optional: false, required: false
  public get sourceEndpointArn() {
    return this.getStringAttribute('source_endpoint_arn');
  }

  // supplemental_settings - computed: true, optional: false, required: false
  public get supplementalSettings() {
    return this.getStringAttribute('supplemental_settings');
  }

  // table_mappings - computed: true, optional: false, required: false
  public get tableMappings() {
    return this.getStringAttribute('table_mappings');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDmsReplicationConfigTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // target_endpoint_arn - computed: true, optional: false, required: false
  public get targetEndpointArn() {
    return this.getStringAttribute('target_endpoint_arn');
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
