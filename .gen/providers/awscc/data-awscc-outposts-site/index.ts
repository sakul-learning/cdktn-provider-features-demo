// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/outposts_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccOutpostsSiteConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/outposts_site#id DataAwsccOutpostsSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccOutpostsSiteOperatingAddress {
}

export function dataAwsccOutpostsSiteOperatingAddressToTerraform(struct?: DataAwsccOutpostsSiteOperatingAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOutpostsSiteOperatingAddressToHclTerraform(struct?: DataAwsccOutpostsSiteOperatingAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOutpostsSiteOperatingAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOutpostsSiteOperatingAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOutpostsSiteOperatingAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_line_1 - computed: true, optional: false, required: false
  public get addressLine1() {
    return this.getStringAttribute('address_line_1');
  }

  // address_line_2 - computed: true, optional: false, required: false
  public get addressLine2() {
    return this.getStringAttribute('address_line_2');
  }

  // address_line_3 - computed: true, optional: false, required: false
  public get addressLine3() {
    return this.getStringAttribute('address_line_3');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // contact_name - computed: true, optional: false, required: false
  public get contactName() {
    return this.getStringAttribute('contact_name');
  }

  // contact_phone_number - computed: true, optional: false, required: false
  public get contactPhoneNumber() {
    return this.getStringAttribute('contact_phone_number');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // district_or_county - computed: true, optional: false, required: false
  public get districtOrCounty() {
    return this.getStringAttribute('district_or_county');
  }

  // municipality - computed: true, optional: false, required: false
  public get municipality() {
    return this.getStringAttribute('municipality');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }

  // state_or_region - computed: true, optional: false, required: false
  public get stateOrRegion() {
    return this.getStringAttribute('state_or_region');
  }
}
export interface DataAwsccOutpostsSiteRackPhysicalProperties {
}

export function dataAwsccOutpostsSiteRackPhysicalPropertiesToTerraform(struct?: DataAwsccOutpostsSiteRackPhysicalProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOutpostsSiteRackPhysicalPropertiesToHclTerraform(struct?: DataAwsccOutpostsSiteRackPhysicalProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOutpostsSiteRackPhysicalProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOutpostsSiteRackPhysicalProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fiber_optic_cable_type - computed: true, optional: false, required: false
  public get fiberOpticCableType() {
    return this.getStringAttribute('fiber_optic_cable_type');
  }

  // maximum_supported_weight_lbs - computed: true, optional: false, required: false
  public get maximumSupportedWeightLbs() {
    return this.getStringAttribute('maximum_supported_weight_lbs');
  }

  // optical_standard - computed: true, optional: false, required: false
  public get opticalStandard() {
    return this.getStringAttribute('optical_standard');
  }

  // power_connector - computed: true, optional: false, required: false
  public get powerConnector() {
    return this.getStringAttribute('power_connector');
  }

  // power_draw_kva - computed: true, optional: false, required: false
  public get powerDrawKva() {
    return this.getStringAttribute('power_draw_kva');
  }

  // power_feed_drop - computed: true, optional: false, required: false
  public get powerFeedDrop() {
    return this.getStringAttribute('power_feed_drop');
  }

  // power_phase - computed: true, optional: false, required: false
  public get powerPhase() {
    return this.getStringAttribute('power_phase');
  }

  // uplink_count - computed: true, optional: false, required: false
  public get uplinkCount() {
    return this.getStringAttribute('uplink_count');
  }

  // uplink_gbps - computed: true, optional: false, required: false
  public get uplinkGbps() {
    return this.getStringAttribute('uplink_gbps');
  }
}
export interface DataAwsccOutpostsSiteShippingAddress {
}

export function dataAwsccOutpostsSiteShippingAddressToTerraform(struct?: DataAwsccOutpostsSiteShippingAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOutpostsSiteShippingAddressToHclTerraform(struct?: DataAwsccOutpostsSiteShippingAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOutpostsSiteShippingAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOutpostsSiteShippingAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOutpostsSiteShippingAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_line_1 - computed: true, optional: false, required: false
  public get addressLine1() {
    return this.getStringAttribute('address_line_1');
  }

  // address_line_2 - computed: true, optional: false, required: false
  public get addressLine2() {
    return this.getStringAttribute('address_line_2');
  }

  // address_line_3 - computed: true, optional: false, required: false
  public get addressLine3() {
    return this.getStringAttribute('address_line_3');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // contact_name - computed: true, optional: false, required: false
  public get contactName() {
    return this.getStringAttribute('contact_name');
  }

  // contact_phone_number - computed: true, optional: false, required: false
  public get contactPhoneNumber() {
    return this.getStringAttribute('contact_phone_number');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // district_or_county - computed: true, optional: false, required: false
  public get districtOrCounty() {
    return this.getStringAttribute('district_or_county');
  }

  // municipality - computed: true, optional: false, required: false
  public get municipality() {
    return this.getStringAttribute('municipality');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }

  // state_or_region - computed: true, optional: false, required: false
  public get stateOrRegion() {
    return this.getStringAttribute('state_or_region');
  }
}
export interface DataAwsccOutpostsSiteTags {
}

export function dataAwsccOutpostsSiteTagsToTerraform(struct?: DataAwsccOutpostsSiteTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOutpostsSiteTagsToHclTerraform(struct?: DataAwsccOutpostsSiteTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOutpostsSiteTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccOutpostsSiteTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOutpostsSiteTags | undefined) {
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

export class DataAwsccOutpostsSiteTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccOutpostsSiteTagsOutputReference {
    return new DataAwsccOutpostsSiteTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/outposts_site awscc_outposts_site}
*/
export class DataAwsccOutpostsSite extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_outposts_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccOutpostsSite resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccOutpostsSite to import
  * @param importFromId The id of the existing DataAwsccOutpostsSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/outposts_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccOutpostsSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_outposts_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/outposts_site awscc_outposts_site} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccOutpostsSiteConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccOutpostsSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_outposts_site',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // operating_address - computed: true, optional: false, required: false
  private _operatingAddress = new DataAwsccOutpostsSiteOperatingAddressOutputReference(this, "operating_address");
  public get operatingAddress() {
    return this._operatingAddress;
  }

  // rack_physical_properties - computed: true, optional: false, required: false
  private _rackPhysicalProperties = new DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference(this, "rack_physical_properties");
  public get rackPhysicalProperties() {
    return this._rackPhysicalProperties;
  }

  // shipping_address - computed: true, optional: false, required: false
  private _shippingAddress = new DataAwsccOutpostsSiteShippingAddressOutputReference(this, "shipping_address");
  public get shippingAddress() {
    return this._shippingAddress;
  }

  // site_arn - computed: true, optional: false, required: false
  public get siteArn() {
    return this.getStringAttribute('site_arn');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccOutpostsSiteTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
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
