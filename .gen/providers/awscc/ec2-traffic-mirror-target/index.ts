// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_traffic_mirror_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2TrafficMirrorTargetConfig extends cdktn.TerraformMetaArguments {
  /**
  * The description of the Traffic Mirror target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_traffic_mirror_target#description Ec2TrafficMirrorTarget#description}
  */
  readonly description?: string;
  /**
  * The ID of the Gateway Load Balancer endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_traffic_mirror_target#gateway_load_balancer_endpoint_id Ec2TrafficMirrorTarget#gateway_load_balancer_endpoint_id}
  */
  readonly gatewayLoadBalancerEndpointId?: string;
  /**
  * The network interface ID that is associated with the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_traffic_mirror_target#network_interface_id Ec2TrafficMirrorTarget#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_traffic_mirror_target#network_load_balancer_arn Ec2TrafficMirrorTarget#network_load_balancer_arn}
  */
  readonly networkLoadBalancerArn?: string;
  /**
  *  The tags to assign to the Traffic Mirror target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_traffic_mirror_target#tags Ec2TrafficMirrorTarget#tags}
  */
  readonly tags?: Ec2TrafficMirrorTargetTags[] | cdktn.IResolvable;
}
export interface Ec2TrafficMirrorTargetTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_traffic_mirror_target#key Ec2TrafficMirrorTarget#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_traffic_mirror_target#value Ec2TrafficMirrorTarget#value}
  */
  readonly value?: string;
}

export function ec2TrafficMirrorTargetTagsToTerraform(struct?: Ec2TrafficMirrorTargetTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ec2TrafficMirrorTargetTagsToHclTerraform(struct?: Ec2TrafficMirrorTargetTags | cdktn.IResolvable): any {
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

export class Ec2TrafficMirrorTargetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2TrafficMirrorTargetTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ec2TrafficMirrorTargetTags | cdktn.IResolvable | undefined) {
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

export class Ec2TrafficMirrorTargetTagsList extends cdktn.ComplexList {
  public internalValue? : Ec2TrafficMirrorTargetTags[] | cdktn.IResolvable

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
  public get(index: number): Ec2TrafficMirrorTargetTagsOutputReference {
    return new Ec2TrafficMirrorTargetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_traffic_mirror_target awscc_ec2_traffic_mirror_target}
*/
export class Ec2TrafficMirrorTarget extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_traffic_mirror_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2TrafficMirrorTarget resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2TrafficMirrorTarget to import
  * @param importFromId The id of the existing Ec2TrafficMirrorTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_traffic_mirror_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2TrafficMirrorTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_traffic_mirror_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ec2_traffic_mirror_target awscc_ec2_traffic_mirror_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TrafficMirrorTargetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ec2TrafficMirrorTargetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_traffic_mirror_target',
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
    this._description = config.description;
    this._gatewayLoadBalancerEndpointId = config.gatewayLoadBalancerEndpointId;
    this._networkInterfaceId = config.networkInterfaceId;
    this._networkLoadBalancerArn = config.networkLoadBalancerArn;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // gateway_load_balancer_endpoint_id - computed: true, optional: true, required: false
  private _gatewayLoadBalancerEndpointId?: string; 
  public get gatewayLoadBalancerEndpointId() {
    return this.getStringAttribute('gateway_load_balancer_endpoint_id');
  }
  public set gatewayLoadBalancerEndpointId(value: string) {
    this._gatewayLoadBalancerEndpointId = value;
  }
  public resetGatewayLoadBalancerEndpointId() {
    this._gatewayLoadBalancerEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayLoadBalancerEndpointIdInput() {
    return this._gatewayLoadBalancerEndpointId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_interface_id - computed: true, optional: true, required: false
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  public resetNetworkInterfaceId() {
    this._networkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // network_load_balancer_arn - computed: true, optional: true, required: false
  private _networkLoadBalancerArn?: string; 
  public get networkLoadBalancerArn() {
    return this.getStringAttribute('network_load_balancer_arn');
  }
  public set networkLoadBalancerArn(value: string) {
    this._networkLoadBalancerArn = value;
  }
  public resetNetworkLoadBalancerArn() {
    this._networkLoadBalancerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkLoadBalancerArnInput() {
    return this._networkLoadBalancerArn;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Ec2TrafficMirrorTargetTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Ec2TrafficMirrorTargetTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // traffic_mirror_target_id - computed: true, optional: false, required: false
  public get trafficMirrorTargetId() {
    return this.getStringAttribute('traffic_mirror_target_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      gateway_load_balancer_endpoint_id: cdktn.stringToTerraform(this._gatewayLoadBalancerEndpointId),
      network_interface_id: cdktn.stringToTerraform(this._networkInterfaceId),
      network_load_balancer_arn: cdktn.stringToTerraform(this._networkLoadBalancerArn),
      tags: cdktn.listMapper(ec2TrafficMirrorTargetTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_load_balancer_endpoint_id: {
        value: cdktn.stringToHclTerraform(this._gatewayLoadBalancerEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_interface_id: {
        value: cdktn.stringToHclTerraform(this._networkInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_load_balancer_arn: {
        value: cdktn.stringToHclTerraform(this._networkLoadBalancerArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(ec2TrafficMirrorTargetTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2TrafficMirrorTargetTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
