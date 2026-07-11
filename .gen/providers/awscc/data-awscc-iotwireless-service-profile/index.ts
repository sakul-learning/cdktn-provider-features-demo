// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotwireless_service_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotwirelessServiceProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotwireless_service_profile#id DataAwsccIotwirelessServiceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotwirelessServiceProfileLoRaWan {
}

export function dataAwsccIotwirelessServiceProfileLoRaWanToTerraform(struct?: DataAwsccIotwirelessServiceProfileLoRaWan): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessServiceProfileLoRaWanToHclTerraform(struct?: DataAwsccIotwirelessServiceProfileLoRaWan): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessServiceProfileLoRaWanOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotwirelessServiceProfileLoRaWan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessServiceProfileLoRaWan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_gw_metadata - computed: true, optional: false, required: false
  public get addGwMetadata() {
    return this.getBooleanAttribute('add_gw_metadata');
  }

  // channel_mask - computed: true, optional: false, required: false
  public get channelMask() {
    return this.getStringAttribute('channel_mask');
  }

  // dev_status_req_freq - computed: true, optional: false, required: false
  public get devStatusReqFreq() {
    return this.getNumberAttribute('dev_status_req_freq');
  }

  // dl_bucket_size - computed: true, optional: false, required: false
  public get dlBucketSize() {
    return this.getNumberAttribute('dl_bucket_size');
  }

  // dl_rate - computed: true, optional: false, required: false
  public get dlRate() {
    return this.getNumberAttribute('dl_rate');
  }

  // dl_rate_policy - computed: true, optional: false, required: false
  public get dlRatePolicy() {
    return this.getStringAttribute('dl_rate_policy');
  }

  // dr_max - computed: true, optional: false, required: false
  public get drMax() {
    return this.getNumberAttribute('dr_max');
  }

  // dr_min - computed: true, optional: false, required: false
  public get drMin() {
    return this.getNumberAttribute('dr_min');
  }

  // hr_allowed - computed: true, optional: false, required: false
  public get hrAllowed() {
    return this.getBooleanAttribute('hr_allowed');
  }

  // min_gw_diversity - computed: true, optional: false, required: false
  public get minGwDiversity() {
    return this.getNumberAttribute('min_gw_diversity');
  }

  // nwk_geo_loc - computed: true, optional: false, required: false
  public get nwkGeoLoc() {
    return this.getBooleanAttribute('nwk_geo_loc');
  }

  // pr_allowed - computed: true, optional: false, required: false
  public get prAllowed() {
    return this.getBooleanAttribute('pr_allowed');
  }

  // ra_allowed - computed: true, optional: false, required: false
  public get raAllowed() {
    return this.getBooleanAttribute('ra_allowed');
  }

  // report_dev_status_battery - computed: true, optional: false, required: false
  public get reportDevStatusBattery() {
    return this.getBooleanAttribute('report_dev_status_battery');
  }

  // report_dev_status_margin - computed: true, optional: false, required: false
  public get reportDevStatusMargin() {
    return this.getBooleanAttribute('report_dev_status_margin');
  }

  // target_per - computed: true, optional: false, required: false
  public get targetPer() {
    return this.getNumberAttribute('target_per');
  }

  // ul_bucket_size - computed: true, optional: false, required: false
  public get ulBucketSize() {
    return this.getNumberAttribute('ul_bucket_size');
  }

  // ul_rate - computed: true, optional: false, required: false
  public get ulRate() {
    return this.getNumberAttribute('ul_rate');
  }

  // ul_rate_policy - computed: true, optional: false, required: false
  public get ulRatePolicy() {
    return this.getStringAttribute('ul_rate_policy');
  }
}
export interface DataAwsccIotwirelessServiceProfileTags {
}

export function dataAwsccIotwirelessServiceProfileTagsToTerraform(struct?: DataAwsccIotwirelessServiceProfileTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessServiceProfileTagsToHclTerraform(struct?: DataAwsccIotwirelessServiceProfileTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessServiceProfileTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotwirelessServiceProfileTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessServiceProfileTags | undefined) {
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

export class DataAwsccIotwirelessServiceProfileTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotwirelessServiceProfileTagsOutputReference {
    return new DataAwsccIotwirelessServiceProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotwireless_service_profile awscc_iotwireless_service_profile}
*/
export class DataAwsccIotwirelessServiceProfile extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotwireless_service_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotwirelessServiceProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotwirelessServiceProfile to import
  * @param importFromId The id of the existing DataAwsccIotwirelessServiceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotwireless_service_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotwirelessServiceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotwireless_service_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotwireless_service_profile awscc_iotwireless_service_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotwirelessServiceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotwirelessServiceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotwireless_service_profile',
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

  // lo_ra_wan - computed: true, optional: false, required: false
  private _loRaWan = new DataAwsccIotwirelessServiceProfileLoRaWanOutputReference(this, "lo_ra_wan");
  public get loRaWan() {
    return this._loRaWan;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // service_profile_id - computed: true, optional: false, required: false
  public get serviceProfileId() {
    return this.getStringAttribute('service_profile_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotwirelessServiceProfileTagsList(this, "tags", true);
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
