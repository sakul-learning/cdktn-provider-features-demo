// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_lag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DirectconnectLagConfig extends cdktn.TerraformMetaArguments {
  /**
  * The bandwidth of the individual physical dedicated connections bundled by the LAG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_lag#connections_bandwidth DirectconnectLag#connections_bandwidth}
  */
  readonly connectionsBandwidth: string;
  /**
  * The name of the LAG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_lag#lag_name DirectconnectLag#lag_name}
  */
  readonly lagName: string;
  /**
  * The location for the LAG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_lag#location DirectconnectLag#location}
  */
  readonly location: string;
  /**
  * The minimum number of physical dedicated connections that must be operational for the LAG itself to be operational.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_lag#minimum_links DirectconnectLag#minimum_links}
  */
  readonly minimumLinks?: number;
  /**
  * The name of the service provider associated with the requested LAG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_lag#provider_name DirectconnectLag#provider_name}
  */
  readonly providerName?: string;
  /**
  * Indicates whether you want the LAG to support MAC Security (MACsec).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_lag#request_mac_sec DirectconnectLag#request_mac_sec}
  */
  readonly requestMacSec?: boolean | cdktn.IResolvable;
  /**
  * The tags associated with the LAG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_lag#tags DirectconnectLag#tags}
  */
  readonly tags?: DirectconnectLagTags[] | cdktn.IResolvable;
}
export interface DirectconnectLagTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_lag#key DirectconnectLag#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_lag#value DirectconnectLag#value}
  */
  readonly value?: string;
}

export function directconnectLagTagsToTerraform(struct?: DirectconnectLagTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function directconnectLagTagsToHclTerraform(struct?: DirectconnectLagTags | cdktn.IResolvable): any {
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

export class DirectconnectLagTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DirectconnectLagTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DirectconnectLagTags | cdktn.IResolvable | undefined) {
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

export class DirectconnectLagTagsList extends cdktn.ComplexList {
  public internalValue? : DirectconnectLagTags[] | cdktn.IResolvable

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
  public get(index: number): DirectconnectLagTagsOutputReference {
    return new DirectconnectLagTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_lag awscc_directconnect_lag}
*/
export class DirectconnectLag extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_directconnect_lag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DirectconnectLag resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DirectconnectLag to import
  * @param importFromId The id of the existing DirectconnectLag that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_lag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DirectconnectLag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_directconnect_lag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_lag awscc_directconnect_lag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectconnectLagConfig
  */
  public constructor(scope: Construct, id: string, config: DirectconnectLagConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_directconnect_lag',
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
    this._connectionsBandwidth = config.connectionsBandwidth;
    this._lagName = config.lagName;
    this._location = config.location;
    this._minimumLinks = config.minimumLinks;
    this._providerName = config.providerName;
    this._requestMacSec = config.requestMacSec;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connections_bandwidth - computed: false, optional: false, required: true
  private _connectionsBandwidth?: string; 
  public get connectionsBandwidth() {
    return this.getStringAttribute('connections_bandwidth');
  }
  public set connectionsBandwidth(value: string) {
    this._connectionsBandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsBandwidthInput() {
    return this._connectionsBandwidth;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lag_arn - computed: true, optional: false, required: false
  public get lagArn() {
    return this.getStringAttribute('lag_arn');
  }

  // lag_id - computed: true, optional: false, required: false
  public get lagId() {
    return this.getStringAttribute('lag_id');
  }

  // lag_name - computed: false, optional: false, required: true
  private _lagName?: string; 
  public get lagName() {
    return this.getStringAttribute('lag_name');
  }
  public set lagName(value: string) {
    this._lagName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lagNameInput() {
    return this._lagName;
  }

  // lag_state - computed: true, optional: false, required: false
  public get lagState() {
    return this.getStringAttribute('lag_state');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // minimum_links - computed: true, optional: true, required: false
  private _minimumLinks?: number; 
  public get minimumLinks() {
    return this.getNumberAttribute('minimum_links');
  }
  public set minimumLinks(value: number) {
    this._minimumLinks = value;
  }
  public resetMinimumLinks() {
    this._minimumLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLinksInput() {
    return this._minimumLinks;
  }

  // provider_name - computed: true, optional: true, required: false
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  public resetProviderName() {
    this._providerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // request_mac_sec - computed: true, optional: true, required: false
  private _requestMacSec?: boolean | cdktn.IResolvable; 
  public get requestMacSec() {
    return this.getBooleanAttribute('request_mac_sec');
  }
  public set requestMacSec(value: boolean | cdktn.IResolvable) {
    this._requestMacSec = value;
  }
  public resetRequestMacSec() {
    this._requestMacSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMacSecInput() {
    return this._requestMacSec;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DirectconnectLagTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DirectconnectLagTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connections_bandwidth: cdktn.stringToTerraform(this._connectionsBandwidth),
      lag_name: cdktn.stringToTerraform(this._lagName),
      location: cdktn.stringToTerraform(this._location),
      minimum_links: cdktn.numberToTerraform(this._minimumLinks),
      provider_name: cdktn.stringToTerraform(this._providerName),
      request_mac_sec: cdktn.booleanToTerraform(this._requestMacSec),
      tags: cdktn.listMapper(directconnectLagTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connections_bandwidth: {
        value: cdktn.stringToHclTerraform(this._connectionsBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lag_name: {
        value: cdktn.stringToHclTerraform(this._lagName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_links: {
        value: cdktn.numberToHclTerraform(this._minimumLinks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider_name: {
        value: cdktn.stringToHclTerraform(this._providerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_mac_sec: {
        value: cdktn.booleanToHclTerraform(this._requestMacSec),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktn.listMapperHcl(directconnectLagTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DirectconnectLagTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
