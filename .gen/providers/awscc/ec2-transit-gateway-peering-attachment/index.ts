// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_transit_gateway_peering_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2TransitGatewayPeeringAttachmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the peer account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_account_id Ec2TransitGatewayPeeringAttachment#peer_account_id}
  */
  readonly peerAccountId: string;
  /**
  * Peer Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_region Ec2TransitGatewayPeeringAttachment#peer_region}
  */
  readonly peerRegion: string;
  /**
  * The ID of the peer transit gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_transit_gateway_id Ec2TransitGatewayPeeringAttachment#peer_transit_gateway_id}
  */
  readonly peerTransitGatewayId: string;
  /**
  * The tags for the transit gateway peering attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_transit_gateway_peering_attachment#tags Ec2TransitGatewayPeeringAttachment#tags}
  */
  readonly tags?: Ec2TransitGatewayPeeringAttachmentTags[] | cdktn.IResolvable;
  /**
  * The ID of the transit gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_transit_gateway_peering_attachment#transit_gateway_id Ec2TransitGatewayPeeringAttachment#transit_gateway_id}
  */
  readonly transitGatewayId: string;
}
export interface Ec2TransitGatewayPeeringAttachmentStatus {
}

export function ec2TransitGatewayPeeringAttachmentStatusToTerraform(struct?: Ec2TransitGatewayPeeringAttachmentStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ec2TransitGatewayPeeringAttachmentStatusToHclTerraform(struct?: Ec2TransitGatewayPeeringAttachmentStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Ec2TransitGatewayPeeringAttachmentStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2TransitGatewayPeeringAttachmentStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2TransitGatewayPeeringAttachmentStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}
export interface Ec2TransitGatewayPeeringAttachmentTags {
  /**
  * The key of the tag. Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with aws:.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_transit_gateway_peering_attachment#key Ec2TransitGatewayPeeringAttachment#key}
  */
  readonly key?: string;
  /**
  * The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_transit_gateway_peering_attachment#value Ec2TransitGatewayPeeringAttachment#value}
  */
  readonly value?: string;
}

export function ec2TransitGatewayPeeringAttachmentTagsToTerraform(struct?: Ec2TransitGatewayPeeringAttachmentTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ec2TransitGatewayPeeringAttachmentTagsToHclTerraform(struct?: Ec2TransitGatewayPeeringAttachmentTags | cdktn.IResolvable): any {
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

export class Ec2TransitGatewayPeeringAttachmentTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2TransitGatewayPeeringAttachmentTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ec2TransitGatewayPeeringAttachmentTags | cdktn.IResolvable | undefined) {
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

export class Ec2TransitGatewayPeeringAttachmentTagsList extends cdktn.ComplexList {
  public internalValue? : Ec2TransitGatewayPeeringAttachmentTags[] | cdktn.IResolvable

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
  public get(index: number): Ec2TransitGatewayPeeringAttachmentTagsOutputReference {
    return new Ec2TransitGatewayPeeringAttachmentTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_transit_gateway_peering_attachment awscc_ec2_transit_gateway_peering_attachment}
*/
export class Ec2TransitGatewayPeeringAttachment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_transit_gateway_peering_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2TransitGatewayPeeringAttachment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2TransitGatewayPeeringAttachment to import
  * @param importFromId The id of the existing Ec2TransitGatewayPeeringAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_transit_gateway_peering_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2TransitGatewayPeeringAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_transit_gateway_peering_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ec2_transit_gateway_peering_attachment awscc_ec2_transit_gateway_peering_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayPeeringAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayPeeringAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_transit_gateway_peering_attachment',
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
    this._peerAccountId = config.peerAccountId;
    this._peerRegion = config.peerRegion;
    this._peerTransitGatewayId = config.peerTransitGatewayId;
    this._tags.internalValue = config.tags;
    this._transitGatewayId = config.transitGatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // peer_account_id - computed: false, optional: false, required: true
  private _peerAccountId?: string; 
  public get peerAccountId() {
    return this.getStringAttribute('peer_account_id');
  }
  public set peerAccountId(value: string) {
    this._peerAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAccountIdInput() {
    return this._peerAccountId;
  }

  // peer_region - computed: false, optional: false, required: true
  private _peerRegion?: string; 
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }
  public set peerRegion(value: string) {
    this._peerRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerRegionInput() {
    return this._peerRegion;
  }

  // peer_transit_gateway_id - computed: false, optional: false, required: true
  private _peerTransitGatewayId?: string; 
  public get peerTransitGatewayId() {
    return this.getStringAttribute('peer_transit_gateway_id');
  }
  public set peerTransitGatewayId(value: string) {
    this._peerTransitGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerTransitGatewayIdInput() {
    return this._peerTransitGatewayId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  private _status = new Ec2TransitGatewayPeeringAttachmentStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Ec2TransitGatewayPeeringAttachmentTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Ec2TransitGatewayPeeringAttachmentTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // transit_gateway_attachment_id - computed: true, optional: false, required: false
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }

  // transit_gateway_id - computed: false, optional: false, required: true
  private _transitGatewayId?: string; 
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      peer_account_id: cdktn.stringToTerraform(this._peerAccountId),
      peer_region: cdktn.stringToTerraform(this._peerRegion),
      peer_transit_gateway_id: cdktn.stringToTerraform(this._peerTransitGatewayId),
      tags: cdktn.listMapper(ec2TransitGatewayPeeringAttachmentTagsToTerraform, false)(this._tags.internalValue),
      transit_gateway_id: cdktn.stringToTerraform(this._transitGatewayId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      peer_account_id: {
        value: cdktn.stringToHclTerraform(this._peerAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_region: {
        value: cdktn.stringToHclTerraform(this._peerRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_transit_gateway_id: {
        value: cdktn.stringToHclTerraform(this._peerTransitGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(ec2TransitGatewayPeeringAttachmentTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2TransitGatewayPeeringAttachmentTagsList",
      },
      transit_gateway_id: {
        value: cdktn.stringToHclTerraform(this._transitGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
