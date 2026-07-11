// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/vpclattice_service_network_vpc_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccVpclatticeServiceNetworkVpcAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/vpclattice_service_network_vpc_association#id DataAwsccVpclatticeServiceNetworkVpcAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions {
}

export function dataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsToTerraform(struct?: DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsToHclTerraform(struct?: DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // private_dns_preference - computed: true, optional: false, required: false
  public get privateDnsPreference() {
    return this.getStringAttribute('private_dns_preference');
  }

  // private_dns_specified_domains - computed: true, optional: false, required: false
  public get privateDnsSpecifiedDomains() {
    return cdktn.Fn.tolist(this.getListAttribute('private_dns_specified_domains'));
  }
}
export interface DataAwsccVpclatticeServiceNetworkVpcAssociationTags {
}

export function dataAwsccVpclatticeServiceNetworkVpcAssociationTagsToTerraform(struct?: DataAwsccVpclatticeServiceNetworkVpcAssociationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVpclatticeServiceNetworkVpcAssociationTagsToHclTerraform(struct?: DataAwsccVpclatticeServiceNetworkVpcAssociationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccVpclatticeServiceNetworkVpcAssociationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVpclatticeServiceNetworkVpcAssociationTags | undefined) {
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

export class DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference {
    return new DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/vpclattice_service_network_vpc_association awscc_vpclattice_service_network_vpc_association}
*/
export class DataAwsccVpclatticeServiceNetworkVpcAssociation extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_vpclattice_service_network_vpc_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccVpclatticeServiceNetworkVpcAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccVpclatticeServiceNetworkVpcAssociation to import
  * @param importFromId The id of the existing DataAwsccVpclatticeServiceNetworkVpcAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/vpclattice_service_network_vpc_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccVpclatticeServiceNetworkVpcAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_vpclattice_service_network_vpc_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/vpclattice_service_network_vpc_association awscc_vpclattice_service_network_vpc_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccVpclatticeServiceNetworkVpcAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccVpclatticeServiceNetworkVpcAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_vpclattice_service_network_vpc_association',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dns_options - computed: true, optional: false, required: false
  private _dnsOptions = new DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference(this, "dns_options");
  public get dnsOptions() {
    return this._dnsOptions;
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

  // private_dns_enabled - computed: true, optional: false, required: false
  public get privateDnsEnabled() {
    return this.getBooleanAttribute('private_dns_enabled');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }

  // service_network_arn - computed: true, optional: false, required: false
  public get serviceNetworkArn() {
    return this.getStringAttribute('service_network_arn');
  }

  // service_network_id - computed: true, optional: false, required: false
  public get serviceNetworkId() {
    return this.getStringAttribute('service_network_id');
  }

  // service_network_identifier - computed: true, optional: false, required: false
  public get serviceNetworkIdentifier() {
    return this.getStringAttribute('service_network_identifier');
  }

  // service_network_name - computed: true, optional: false, required: false
  public get serviceNetworkName() {
    return this.getStringAttribute('service_network_name');
  }

  // service_network_vpc_association_id - computed: true, optional: false, required: false
  public get serviceNetworkVpcAssociationId() {
    return this.getStringAttribute('service_network_vpc_association_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_identifier - computed: true, optional: false, required: false
  public get vpcIdentifier() {
    return this.getStringAttribute('vpc_identifier');
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
