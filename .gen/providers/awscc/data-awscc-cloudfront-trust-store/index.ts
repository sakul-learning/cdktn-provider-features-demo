// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudfront_trust_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCloudfrontTrustStoreConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudfront_trust_store#id DataAwsccCloudfrontTrustStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location {
}

export function dataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationToTerraform(struct?: DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationToHclTerraform(struct?: DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataAwsccCloudfrontTrustStoreCaCertificatesBundleSource {
}

export function dataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceToTerraform(struct?: DataAwsccCloudfrontTrustStoreCaCertificatesBundleSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceToHclTerraform(struct?: DataAwsccCloudfrontTrustStoreCaCertificatesBundleSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontTrustStoreCaCertificatesBundleSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontTrustStoreCaCertificatesBundleSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certificates_bundle_s3_location - computed: true, optional: false, required: false
  private _caCertificatesBundleS3Location = new DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference(this, "ca_certificates_bundle_s3_location");
  public get caCertificatesBundleS3Location() {
    return this._caCertificatesBundleS3Location;
  }
}
export interface DataAwsccCloudfrontTrustStoreTags {
}

export function dataAwsccCloudfrontTrustStoreTagsToTerraform(struct?: DataAwsccCloudfrontTrustStoreTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontTrustStoreTagsToHclTerraform(struct?: DataAwsccCloudfrontTrustStoreTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontTrustStoreTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudfrontTrustStoreTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontTrustStoreTags | undefined) {
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

export class DataAwsccCloudfrontTrustStoreTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudfrontTrustStoreTagsOutputReference {
    return new DataAwsccCloudfrontTrustStoreTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudfront_trust_store awscc_cloudfront_trust_store}
*/
export class DataAwsccCloudfrontTrustStore extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudfront_trust_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCloudfrontTrustStore resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCloudfrontTrustStore to import
  * @param importFromId The id of the existing DataAwsccCloudfrontTrustStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudfront_trust_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCloudfrontTrustStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_trust_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudfront_trust_store awscc_cloudfront_trust_store} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudfrontTrustStoreConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudfrontTrustStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudfront_trust_store',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // ca_certificates_bundle_source - computed: true, optional: false, required: false
  private _caCertificatesBundleSource = new DataAwsccCloudfrontTrustStoreCaCertificatesBundleSourceOutputReference(this, "ca_certificates_bundle_source");
  public get caCertificatesBundleSource() {
    return this._caCertificatesBundleSource;
  }

  // e_tag - computed: true, optional: false, required: false
  public get eTag() {
    return this.getStringAttribute('e_tag');
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

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // number_of_ca_certificates - computed: true, optional: false, required: false
  public get numberOfCaCertificates() {
    return this.getNumberAttribute('number_of_ca_certificates');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCloudfrontTrustStoreTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // trust_store_id - computed: true, optional: false, required: false
  public get trustStoreId() {
    return this.getStringAttribute('trust_store_id');
  }

  // use_client_certificate_ocsp_endpoint - computed: true, optional: false, required: false
  public get useClientCertificateOcspEndpoint() {
    return this.getBooleanAttribute('use_client_certificate_ocsp_endpoint');
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
