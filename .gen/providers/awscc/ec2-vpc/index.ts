// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2VpcConfig extends cdktn.TerraformMetaArguments {
  /**
  * The IPv4 network range for the VPC, in CIDR notation. For example, ``10.0.0.0/16``. We modify the specified CIDR block to its canonical form; for example, if you specify ``100.68.0.18/18``, we modify it to ``100.68.0.0/18``.
  *  You must specify either``CidrBlock`` or ``Ipv4IpamPoolId``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_vpc#cidr_block Ec2Vpc#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Indicates whether the instances launched in the VPC get DNS hostnames. If enabled, instances in the VPC get DNS hostnames; otherwise, they do not. Disabled by default for nondefault VPCs. For more information, see [DNS attributes in your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html#vpc-dns-support).
  *  You can only enable DNS hostnames if you've enabled DNS support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_vpc#enable_dns_hostnames Ec2Vpc#enable_dns_hostnames}
  */
  readonly enableDnsHostnames?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether the DNS resolution is supported for the VPC. If enabled, queries to the Amazon provided DNS server at the 169.254.169.253 IP address, or the reserved IP address at the base of the VPC network range "plus two" succeed. If disabled, the Amazon provided DNS service in the VPC that resolves public DNS hostnames to IP addresses is not enabled. Enabled by default. For more information, see [DNS attributes in your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html#vpc-dns-support).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_vpc#enable_dns_support Ec2Vpc#enable_dns_support}
  */
  readonly enableDnsSupport?: boolean | cdktn.IResolvable;
  /**
  * The allowed tenancy of instances launched into the VPC.
  *   +  ``default``: An instance launched into the VPC runs on shared hardware by default, unless you explicitly specify a different tenancy during instance launch.
  *   +  ``dedicated``: An instance launched into the VPC runs on dedicated hardware by default, unless you explicitly specify a tenancy of ``host`` during instance launch. You cannot specify a tenancy of ``default`` during instance launch.
  *   
  *  Updating ``InstanceTenancy`` requires no replacement only if you are updating its value from ``dedicated`` to ``default``. Updating ``InstanceTenancy`` from ``default`` to ``dedicated`` requires replacement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_vpc#instance_tenancy Ec2Vpc#instance_tenancy}
  */
  readonly instanceTenancy?: string;
  /**
  * The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. For more information, see [What is IPAM?](https://docs.aws.amazon.com//vpc/latest/ipam/what-is-it-ipam.html) in the *Amazon VPC IPAM User Guide*.
  *  You must specify either``CidrBlock`` or ``Ipv4IpamPoolId``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_vpc#ipv_4_ipam_pool_id Ec2Vpc#ipv_4_ipam_pool_id}
  */
  readonly ipv4IpamPoolId?: string;
  /**
  * The netmask length of the IPv4 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. For more information about IPAM, see [What is IPAM?](https://docs.aws.amazon.com//vpc/latest/ipam/what-is-it-ipam.html) in the *Amazon VPC IPAM User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_vpc#ipv_4_netmask_length Ec2Vpc#ipv_4_netmask_length}
  */
  readonly ipv4NetmaskLength?: number;
  /**
  * The tags for the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_vpc#tags Ec2Vpc#tags}
  */
  readonly tags?: Ec2VpcTags[] | cdktn.IResolvable;
}
export interface Ec2VpcTags {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_vpc#key Ec2Vpc#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_vpc#value Ec2Vpc#value}
  */
  readonly value?: string;
}

export function ec2VpcTagsToTerraform(struct?: Ec2VpcTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ec2VpcTagsToHclTerraform(struct?: Ec2VpcTags | cdktn.IResolvable): any {
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

export class Ec2VpcTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2VpcTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ec2VpcTags | cdktn.IResolvable | undefined) {
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

export class Ec2VpcTagsList extends cdktn.ComplexList {
  public internalValue? : Ec2VpcTags[] | cdktn.IResolvable

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
  public get(index: number): Ec2VpcTagsOutputReference {
    return new Ec2VpcTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_vpc awscc_ec2_vpc}
*/
export class Ec2Vpc extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_vpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2Vpc resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2Vpc to import
  * @param importFromId The id of the existing Ec2Vpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_vpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2Vpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_vpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_vpc awscc_ec2_vpc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2VpcConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ec2VpcConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_vpc',
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
    this._cidrBlock = config.cidrBlock;
    this._enableDnsHostnames = config.enableDnsHostnames;
    this._enableDnsSupport = config.enableDnsSupport;
    this._instanceTenancy = config.instanceTenancy;
    this._ipv4IpamPoolId = config.ipv4IpamPoolId;
    this._ipv4NetmaskLength = config.ipv4NetmaskLength;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // cidr_block_associations - computed: true, optional: false, required: false
  public get cidrBlockAssociations() {
    return this.getListAttribute('cidr_block_associations');
  }

  // default_network_acl - computed: true, optional: false, required: false
  public get defaultNetworkAcl() {
    return this.getStringAttribute('default_network_acl');
  }

  // default_security_group - computed: true, optional: false, required: false
  public get defaultSecurityGroup() {
    return this.getStringAttribute('default_security_group');
  }

  // enable_dns_hostnames - computed: true, optional: true, required: false
  private _enableDnsHostnames?: boolean | cdktn.IResolvable; 
  public get enableDnsHostnames() {
    return this.getBooleanAttribute('enable_dns_hostnames');
  }
  public set enableDnsHostnames(value: boolean | cdktn.IResolvable) {
    this._enableDnsHostnames = value;
  }
  public resetEnableDnsHostnames() {
    this._enableDnsHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDnsHostnamesInput() {
    return this._enableDnsHostnames;
  }

  // enable_dns_support - computed: true, optional: true, required: false
  private _enableDnsSupport?: boolean | cdktn.IResolvable; 
  public get enableDnsSupport() {
    return this.getBooleanAttribute('enable_dns_support');
  }
  public set enableDnsSupport(value: boolean | cdktn.IResolvable) {
    this._enableDnsSupport = value;
  }
  public resetEnableDnsSupport() {
    this._enableDnsSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDnsSupportInput() {
    return this._enableDnsSupport;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_tenancy - computed: true, optional: true, required: false
  private _instanceTenancy?: string; 
  public get instanceTenancy() {
    return this.getStringAttribute('instance_tenancy');
  }
  public set instanceTenancy(value: string) {
    this._instanceTenancy = value;
  }
  public resetInstanceTenancy() {
    this._instanceTenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTenancyInput() {
    return this._instanceTenancy;
  }

  // ipv_4_ipam_pool_id - computed: true, optional: true, required: false
  private _ipv4IpamPoolId?: string; 
  public get ipv4IpamPoolId() {
    return this.getStringAttribute('ipv_4_ipam_pool_id');
  }
  public set ipv4IpamPoolId(value: string) {
    this._ipv4IpamPoolId = value;
  }
  public resetIpv4IpamPoolId() {
    this._ipv4IpamPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4IpamPoolIdInput() {
    return this._ipv4IpamPoolId;
  }

  // ipv_4_netmask_length - computed: true, optional: true, required: false
  private _ipv4NetmaskLength?: number; 
  public get ipv4NetmaskLength() {
    return this.getNumberAttribute('ipv_4_netmask_length');
  }
  public set ipv4NetmaskLength(value: number) {
    this._ipv4NetmaskLength = value;
  }
  public resetIpv4NetmaskLength() {
    this._ipv4NetmaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetmaskLengthInput() {
    return this._ipv4NetmaskLength;
  }

  // ipv_6_cidr_blocks - computed: true, optional: false, required: false
  public get ipv6CidrBlocks() {
    return this.getListAttribute('ipv_6_cidr_blocks');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Ec2VpcTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Ec2VpcTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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
      cidr_block: cdktn.stringToTerraform(this._cidrBlock),
      enable_dns_hostnames: cdktn.booleanToTerraform(this._enableDnsHostnames),
      enable_dns_support: cdktn.booleanToTerraform(this._enableDnsSupport),
      instance_tenancy: cdktn.stringToTerraform(this._instanceTenancy),
      ipv_4_ipam_pool_id: cdktn.stringToTerraform(this._ipv4IpamPoolId),
      ipv_4_netmask_length: cdktn.numberToTerraform(this._ipv4NetmaskLength),
      tags: cdktn.listMapper(ec2VpcTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr_block: {
        value: cdktn.stringToHclTerraform(this._cidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_dns_hostnames: {
        value: cdktn.booleanToHclTerraform(this._enableDnsHostnames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_dns_support: {
        value: cdktn.booleanToHclTerraform(this._enableDnsSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_tenancy: {
        value: cdktn.stringToHclTerraform(this._instanceTenancy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv_4_ipam_pool_id: {
        value: cdktn.stringToHclTerraform(this._ipv4IpamPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv_4_netmask_length: {
        value: cdktn.numberToHclTerraform(this._ipv4NetmaskLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktn.listMapperHcl(ec2VpcTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2VpcTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
