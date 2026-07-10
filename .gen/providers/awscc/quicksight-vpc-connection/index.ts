// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_vpc_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface QuicksightVpcConnectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_vpc_connection#availability_status QuicksightVpcConnection#availability_status}
  */
  readonly availabilityStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_vpc_connection#aws_account_id QuicksightVpcConnection#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_vpc_connection#dns_resolvers QuicksightVpcConnection#dns_resolvers}
  */
  readonly dnsResolvers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_vpc_connection#name QuicksightVpcConnection#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_vpc_connection#role_arn QuicksightVpcConnection#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_vpc_connection#security_group_ids QuicksightVpcConnection#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_vpc_connection#subnet_ids QuicksightVpcConnection#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_vpc_connection#tags QuicksightVpcConnection#tags}
  */
  readonly tags?: QuicksightVpcConnectionTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_vpc_connection#vpc_connection_id QuicksightVpcConnection#vpc_connection_id}
  */
  readonly vpcConnectionId?: string;
}
export interface QuicksightVpcConnectionNetworkInterfaces {
}

export function quicksightVpcConnectionNetworkInterfacesToTerraform(struct?: QuicksightVpcConnectionNetworkInterfaces): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightVpcConnectionNetworkInterfacesToHclTerraform(struct?: QuicksightVpcConnectionNetworkInterfaces): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightVpcConnectionNetworkInterfacesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightVpcConnectionNetworkInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightVpcConnectionNetworkInterfaces | undefined) {
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

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class QuicksightVpcConnectionNetworkInterfacesList extends cdktn.ComplexList {

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
  public get(index: number): QuicksightVpcConnectionNetworkInterfacesOutputReference {
    return new QuicksightVpcConnectionNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightVpcConnectionTags {
  /**
  * <p>Tag key.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_vpc_connection#key QuicksightVpcConnection#key}
  */
  readonly key?: string;
  /**
  * <p>Tag value.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_vpc_connection#value QuicksightVpcConnection#value}
  */
  readonly value?: string;
}

export function quicksightVpcConnectionTagsToTerraform(struct?: QuicksightVpcConnectionTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function quicksightVpcConnectionTagsToHclTerraform(struct?: QuicksightVpcConnectionTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightVpcConnectionTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightVpcConnectionTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightVpcConnectionTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class QuicksightVpcConnectionTagsList extends cdktn.ComplexList {
  public internalValue? : QuicksightVpcConnectionTags[] | cdktn.IResolvable

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
  public get(index: number): QuicksightVpcConnectionTagsOutputReference {
    return new QuicksightVpcConnectionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_vpc_connection awscc_quicksight_vpc_connection}
*/
export class QuicksightVpcConnection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_quicksight_vpc_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a QuicksightVpcConnection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuicksightVpcConnection to import
  * @param importFromId The id of the existing QuicksightVpcConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_vpc_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuicksightVpcConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_vpc_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_vpc_connection awscc_quicksight_vpc_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightVpcConnectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: QuicksightVpcConnectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_vpc_connection',
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
    this._availabilityStatus = config.availabilityStatus;
    this._awsAccountId = config.awsAccountId;
    this._dnsResolvers = config.dnsResolvers;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._securityGroupIds = config.securityGroupIds;
    this._subnetIds = config.subnetIds;
    this._tags.internalValue = config.tags;
    this._vpcConnectionId = config.vpcConnectionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_status - computed: true, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // dns_resolvers - computed: true, optional: true, required: false
  private _dnsResolvers?: string[]; 
  public get dnsResolvers() {
    return this.getListAttribute('dns_resolvers');
  }
  public set dnsResolvers(value: string[]) {
    this._dnsResolvers = value;
  }
  public resetDnsResolvers() {
    this._dnsResolvers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolversInput() {
    return this._dnsResolvers;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_interfaces - computed: true, optional: false, required: false
  private _networkInterfaces = new QuicksightVpcConnectionNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new QuicksightVpcConnectionTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: QuicksightVpcConnectionTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_connection_id - computed: true, optional: true, required: false
  private _vpcConnectionId?: string; 
  public get vpcConnectionId() {
    return this.getStringAttribute('vpc_connection_id');
  }
  public set vpcConnectionId(value: string) {
    this._vpcConnectionId = value;
  }
  public resetVpcConnectionId() {
    this._vpcConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectionIdInput() {
    return this._vpcConnectionId;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_status: cdktn.stringToTerraform(this._availabilityStatus),
      aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
      dns_resolvers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._dnsResolvers),
      name: cdktn.stringToTerraform(this._name),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
      subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
      tags: cdktn.listMapper(quicksightVpcConnectionTagsToTerraform, false)(this._tags.internalValue),
      vpc_connection_id: cdktn.stringToTerraform(this._vpcConnectionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_status: {
        value: cdktn.stringToHclTerraform(this._availabilityStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_account_id: {
        value: cdktn.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_resolvers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._dnsResolvers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subnet_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktn.listMapperHcl(quicksightVpcConnectionTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightVpcConnectionTagsList",
      },
      vpc_connection_id: {
        value: cdktn.stringToHclTerraform(this._vpcConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
