// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_multi_region_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SesMultiRegionEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Contains details of a multi-region endpoint (global-endpoint) being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_multi_region_endpoint#details SesMultiRegionEndpoint#details}
  */
  readonly details: SesMultiRegionEndpointDetails;
  /**
  * The name of the multi-region endpoint (global-endpoint).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_multi_region_endpoint#endpoint_name SesMultiRegionEndpoint#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * An Array of objects that define the tags (keys and values) to associate with the multi-region endpoint (global-endpoint).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_multi_region_endpoint#tags SesMultiRegionEndpoint#tags}
  */
  readonly tags?: SesMultiRegionEndpointTags[] | cdktn.IResolvable;
}
export interface SesMultiRegionEndpointDetailsRouteDetails {
  /**
  * The name of an AWS-Region to be a secondary region for the multi-region endpoint (global-endpoint)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_multi_region_endpoint#region SesMultiRegionEndpoint#region}
  */
  readonly region: string;
}

export function sesMultiRegionEndpointDetailsRouteDetailsToTerraform(struct?: SesMultiRegionEndpointDetailsRouteDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function sesMultiRegionEndpointDetailsRouteDetailsToHclTerraform(struct?: SesMultiRegionEndpointDetailsRouteDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMultiRegionEndpointDetailsRouteDetailsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SesMultiRegionEndpointDetailsRouteDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMultiRegionEndpointDetailsRouteDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
    }
  }

  // region - computed: false, optional: false, required: true
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class SesMultiRegionEndpointDetailsRouteDetailsList extends cdktn.ComplexList {
  public internalValue? : SesMultiRegionEndpointDetailsRouteDetails[] | cdktn.IResolvable

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
  public get(index: number): SesMultiRegionEndpointDetailsRouteDetailsOutputReference {
    return new SesMultiRegionEndpointDetailsRouteDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SesMultiRegionEndpointDetails {
  /**
  * A list of route configuration details. Must contain exactly one route configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_multi_region_endpoint#route_details SesMultiRegionEndpoint#route_details}
  */
  readonly routeDetails: SesMultiRegionEndpointDetailsRouteDetails[] | cdktn.IResolvable;
}

export function sesMultiRegionEndpointDetailsToTerraform(struct?: SesMultiRegionEndpointDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    route_details: cdktn.listMapper(sesMultiRegionEndpointDetailsRouteDetailsToTerraform, false)(struct!.routeDetails),
  }
}


export function sesMultiRegionEndpointDetailsToHclTerraform(struct?: SesMultiRegionEndpointDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    route_details: {
      value: cdktn.listMapperHcl(sesMultiRegionEndpointDetailsRouteDetailsToHclTerraform, false)(struct!.routeDetails),
      isBlock: true,
      type: "set",
      storageClassType: "SesMultiRegionEndpointDetailsRouteDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMultiRegionEndpointDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMultiRegionEndpointDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeDetails = this._routeDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMultiRegionEndpointDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeDetails.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeDetails.internalValue = value.routeDetails;
    }
  }

  // route_details - computed: false, optional: false, required: true
  private _routeDetails = new SesMultiRegionEndpointDetailsRouteDetailsList(this, "route_details", true);
  public get routeDetails() {
    return this._routeDetails;
  }
  public putRouteDetails(value: SesMultiRegionEndpointDetailsRouteDetails[] | cdktn.IResolvable) {
    this._routeDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDetailsInput() {
    return this._routeDetails.internalValue;
  }
}
export interface SesMultiRegionEndpointTags {
  /**
  * One part of a key-value pair that defines a tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_multi_region_endpoint#key SesMultiRegionEndpoint#key}
  */
  readonly key?: string;
  /**
  * The optional part of a key-value pair that defines a tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_multi_region_endpoint#value SesMultiRegionEndpoint#value}
  */
  readonly value?: string;
}

export function sesMultiRegionEndpointTagsToTerraform(struct?: SesMultiRegionEndpointTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sesMultiRegionEndpointTagsToHclTerraform(struct?: SesMultiRegionEndpointTags | cdktn.IResolvable): any {
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

export class SesMultiRegionEndpointTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SesMultiRegionEndpointTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SesMultiRegionEndpointTags | cdktn.IResolvable | undefined) {
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

export class SesMultiRegionEndpointTagsList extends cdktn.ComplexList {
  public internalValue? : SesMultiRegionEndpointTags[] | cdktn.IResolvable

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
  public get(index: number): SesMultiRegionEndpointTagsOutputReference {
    return new SesMultiRegionEndpointTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_multi_region_endpoint awscc_ses_multi_region_endpoint}
*/
export class SesMultiRegionEndpoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ses_multi_region_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SesMultiRegionEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SesMultiRegionEndpoint to import
  * @param importFromId The id of the existing SesMultiRegionEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_multi_region_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SesMultiRegionEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_multi_region_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_multi_region_endpoint awscc_ses_multi_region_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesMultiRegionEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: SesMultiRegionEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ses_multi_region_endpoint',
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
    this._details.internalValue = config.details;
    this._endpointName = config.endpointName;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // details - computed: false, optional: false, required: true
  private _details = new SesMultiRegionEndpointDetailsOutputReference(this, "details");
  public get details() {
    return this._details;
  }
  public putDetails(value: SesMultiRegionEndpointDetails) {
    this._details.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details.internalValue;
  }

  // endpoint_name - computed: false, optional: false, required: true
  private _endpointName?: string;
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SesMultiRegionEndpointTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SesMultiRegionEndpointTags[] | cdktn.IResolvable) {
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
      details: sesMultiRegionEndpointDetailsToTerraform(this._details.internalValue),
      endpoint_name: cdktn.stringToTerraform(this._endpointName),
      tags: cdktn.listMapper(sesMultiRegionEndpointTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      details: {
        value: sesMultiRegionEndpointDetailsToHclTerraform(this._details.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SesMultiRegionEndpointDetails",
      },
      endpoint_name: {
        value: cdktn.stringToHclTerraform(this._endpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(sesMultiRegionEndpointTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SesMultiRegionEndpointTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
