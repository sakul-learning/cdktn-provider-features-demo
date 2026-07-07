// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_metering_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2TransitGatewayMeteringPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Middle box attachment Ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_metering_policy#middlebox_attachment_ids Ec2TransitGatewayMeteringPolicy#middlebox_attachment_ids}
  */
  readonly middleboxAttachmentIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_metering_policy#tags Ec2TransitGatewayMeteringPolicy#tags}
  */
  readonly tags?: Ec2TransitGatewayMeteringPolicyTags[] | cdktn.IResolvable;
  /**
  * The Id of transit gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_metering_policy#transit_gateway_id Ec2TransitGatewayMeteringPolicy#transit_gateway_id}
  */
  readonly transitGatewayId: string;
}
export interface Ec2TransitGatewayMeteringPolicyTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_metering_policy#key Ec2TransitGatewayMeteringPolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_metering_policy#value Ec2TransitGatewayMeteringPolicy#value}
  */
  readonly value?: string;
}

export function ec2TransitGatewayMeteringPolicyTagsToTerraform(struct?: Ec2TransitGatewayMeteringPolicyTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ec2TransitGatewayMeteringPolicyTagsToHclTerraform(struct?: Ec2TransitGatewayMeteringPolicyTags | cdktn.IResolvable): any {
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

export class Ec2TransitGatewayMeteringPolicyTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2TransitGatewayMeteringPolicyTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ec2TransitGatewayMeteringPolicyTags | cdktn.IResolvable | undefined) {
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

export class Ec2TransitGatewayMeteringPolicyTagsList extends cdktn.ComplexList {
  public internalValue? : Ec2TransitGatewayMeteringPolicyTags[] | cdktn.IResolvable

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
  public get(index: number): Ec2TransitGatewayMeteringPolicyTagsOutputReference {
    return new Ec2TransitGatewayMeteringPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_metering_policy awscc_ec2_transit_gateway_metering_policy}
*/
export class Ec2TransitGatewayMeteringPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_transit_gateway_metering_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2TransitGatewayMeteringPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2TransitGatewayMeteringPolicy to import
  * @param importFromId The id of the existing Ec2TransitGatewayMeteringPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_metering_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2TransitGatewayMeteringPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_transit_gateway_metering_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_metering_policy awscc_ec2_transit_gateway_metering_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayMeteringPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayMeteringPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_transit_gateway_metering_policy',
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
    this._middleboxAttachmentIds = config.middleboxAttachmentIds;
    this._tags.internalValue = config.tags;
    this._transitGatewayId = config.transitGatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // middlebox_attachment_ids - computed: true, optional: true, required: false
  private _middleboxAttachmentIds?: string[]; 
  public get middleboxAttachmentIds() {
    return this.getListAttribute('middlebox_attachment_ids');
  }
  public set middleboxAttachmentIds(value: string[]) {
    this._middleboxAttachmentIds = value;
  }
  public resetMiddleboxAttachmentIds() {
    this._middleboxAttachmentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middleboxAttachmentIdsInput() {
    return this._middleboxAttachmentIds;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Ec2TransitGatewayMeteringPolicyTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Ec2TransitGatewayMeteringPolicyTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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

  // transit_gateway_metering_policy_id - computed: true, optional: false, required: false
  public get transitGatewayMeteringPolicyId() {
    return this.getStringAttribute('transit_gateway_metering_policy_id');
  }

  // update_effective_at - computed: true, optional: false, required: false
  public get updateEffectiveAt() {
    return this.getStringAttribute('update_effective_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      middlebox_attachment_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._middleboxAttachmentIds),
      tags: cdktn.listMapper(ec2TransitGatewayMeteringPolicyTagsToTerraform, false)(this._tags.internalValue),
      transit_gateway_id: cdktn.stringToTerraform(this._transitGatewayId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      middlebox_attachment_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._middleboxAttachmentIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktn.listMapperHcl(ec2TransitGatewayMeteringPolicyTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2TransitGatewayMeteringPolicyTagsList",
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
