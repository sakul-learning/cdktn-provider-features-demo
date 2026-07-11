// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/licensemanager_license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccLicensemanagerLicenseConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/licensemanager_license#id DataAwsccLicensemanagerLicense#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration {
}

export function dataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationToTerraform(struct?: DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationToHclTerraform(struct?: DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_early_check_in - computed: true, optional: false, required: false
  public get allowEarlyCheckIn() {
    return this.getBooleanAttribute('allow_early_check_in');
  }

  // max_time_to_live_in_minutes - computed: true, optional: false, required: false
  public get maxTimeToLiveInMinutes() {
    return this.getNumberAttribute('max_time_to_live_in_minutes');
  }
}
export interface DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration {
}

export function dataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationToTerraform(struct?: DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationToHclTerraform(struct?: DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_time_to_live_in_minutes - computed: true, optional: false, required: false
  public get maxTimeToLiveInMinutes() {
    return this.getNumberAttribute('max_time_to_live_in_minutes');
  }
}
export interface DataAwsccLicensemanagerLicenseConsumptionConfiguration {
}

export function dataAwsccLicensemanagerLicenseConsumptionConfigurationToTerraform(struct?: DataAwsccLicensemanagerLicenseConsumptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLicensemanagerLicenseConsumptionConfigurationToHclTerraform(struct?: DataAwsccLicensemanagerLicenseConsumptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLicensemanagerLicenseConsumptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLicensemanagerLicenseConsumptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // borrow_configuration - computed: true, optional: false, required: false
  private _borrowConfiguration = new DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference(this, "borrow_configuration");
  public get borrowConfiguration() {
    return this._borrowConfiguration;
  }

  // provisional_configuration - computed: true, optional: false, required: false
  private _provisionalConfiguration = new DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference(this, "provisional_configuration");
  public get provisionalConfiguration() {
    return this._provisionalConfiguration;
  }

  // renew_type - computed: true, optional: false, required: false
  public get renewType() {
    return this.getStringAttribute('renew_type');
  }
}
export interface DataAwsccLicensemanagerLicenseEntitlements {
}

export function dataAwsccLicensemanagerLicenseEntitlementsToTerraform(struct?: DataAwsccLicensemanagerLicenseEntitlements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLicensemanagerLicenseEntitlementsToHclTerraform(struct?: DataAwsccLicensemanagerLicenseEntitlements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLicensemanagerLicenseEntitlementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLicensemanagerLicenseEntitlements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLicensemanagerLicenseEntitlements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_check_in - computed: true, optional: false, required: false
  public get allowCheckIn() {
    return this.getBooleanAttribute('allow_check_in');
  }

  // max_count - computed: true, optional: false, required: false
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // overage - computed: true, optional: false, required: false
  public get overage() {
    return this.getBooleanAttribute('overage');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccLicensemanagerLicenseEntitlementsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLicensemanagerLicenseEntitlementsOutputReference {
    return new DataAwsccLicensemanagerLicenseEntitlementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLicensemanagerLicenseIssuer {
}

export function dataAwsccLicensemanagerLicenseIssuerToTerraform(struct?: DataAwsccLicensemanagerLicenseIssuer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLicensemanagerLicenseIssuerToHclTerraform(struct?: DataAwsccLicensemanagerLicenseIssuer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLicensemanagerLicenseIssuerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLicensemanagerLicenseIssuer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLicensemanagerLicenseIssuer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sign_key - computed: true, optional: false, required: false
  public get signKey() {
    return this.getStringAttribute('sign_key');
  }
}
export interface DataAwsccLicensemanagerLicenseLicenseMetadata {
}

export function dataAwsccLicensemanagerLicenseLicenseMetadataToTerraform(struct?: DataAwsccLicensemanagerLicenseLicenseMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLicensemanagerLicenseLicenseMetadataToHclTerraform(struct?: DataAwsccLicensemanagerLicenseLicenseMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLicensemanagerLicenseLicenseMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLicensemanagerLicenseLicenseMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccLicensemanagerLicenseLicenseMetadataList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference {
    return new DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLicensemanagerLicenseTags {
}

export function dataAwsccLicensemanagerLicenseTagsToTerraform(struct?: DataAwsccLicensemanagerLicenseTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLicensemanagerLicenseTagsToHclTerraform(struct?: DataAwsccLicensemanagerLicenseTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLicensemanagerLicenseTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLicensemanagerLicenseTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLicensemanagerLicenseTags | undefined) {
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

export class DataAwsccLicensemanagerLicenseTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLicensemanagerLicenseTagsOutputReference {
    return new DataAwsccLicensemanagerLicenseTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLicensemanagerLicenseValidity {
}

export function dataAwsccLicensemanagerLicenseValidityToTerraform(struct?: DataAwsccLicensemanagerLicenseValidity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLicensemanagerLicenseValidityToHclTerraform(struct?: DataAwsccLicensemanagerLicenseValidity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLicensemanagerLicenseValidityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLicensemanagerLicenseValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLicensemanagerLicenseValidity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin - computed: true, optional: false, required: false
  public get begin() {
    return this.getStringAttribute('begin');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/licensemanager_license awscc_licensemanager_license}
*/
export class DataAwsccLicensemanagerLicense extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_licensemanager_license";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccLicensemanagerLicense resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccLicensemanagerLicense to import
  * @param importFromId The id of the existing DataAwsccLicensemanagerLicense that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/licensemanager_license#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccLicensemanagerLicense to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_licensemanager_license", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/licensemanager_license awscc_licensemanager_license} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLicensemanagerLicenseConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLicensemanagerLicenseConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_licensemanager_license',
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

  // beneficiary - computed: true, optional: false, required: false
  public get beneficiary() {
    return this.getStringAttribute('beneficiary');
  }

  // consumption_configuration - computed: true, optional: false, required: false
  private _consumptionConfiguration = new DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference(this, "consumption_configuration");
  public get consumptionConfiguration() {
    return this._consumptionConfiguration;
  }

  // entitlements - computed: true, optional: false, required: false
  private _entitlements = new DataAwsccLicensemanagerLicenseEntitlementsList(this, "entitlements", false);
  public get entitlements() {
    return this._entitlements;
  }

  // home_region - computed: true, optional: false, required: false
  public get homeRegion() {
    return this.getStringAttribute('home_region');
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

  // issuer - computed: true, optional: false, required: false
  private _issuer = new DataAwsccLicensemanagerLicenseIssuerOutputReference(this, "issuer");
  public get issuer() {
    return this._issuer;
  }

  // license_arn - computed: true, optional: false, required: false
  public get licenseArn() {
    return this.getStringAttribute('license_arn');
  }

  // license_metadata - computed: true, optional: false, required: false
  private _licenseMetadata = new DataAwsccLicensemanagerLicenseLicenseMetadataList(this, "license_metadata", false);
  public get licenseMetadata() {
    return this._licenseMetadata;
  }

  // license_name - computed: true, optional: false, required: false
  public get licenseName() {
    return this.getStringAttribute('license_name');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // product_sku - computed: true, optional: false, required: false
  public get productSku() {
    return this.getStringAttribute('product_sku');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccLicensemanagerLicenseTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // validity - computed: true, optional: false, required: false
  private _validity = new DataAwsccLicensemanagerLicenseValidityOutputReference(this, "validity");
  public get validity() {
    return this._validity;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
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
