// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_trust_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccElasticloadbalancingv2TrustStoreConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_trust_store#id DataAwsccElasticloadbalancingv2TrustStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccElasticloadbalancingv2TrustStoreTags {
}

export function dataAwsccElasticloadbalancingv2TrustStoreTagsToTerraform(struct?: DataAwsccElasticloadbalancingv2TrustStoreTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2TrustStoreTagsToHclTerraform(struct?: DataAwsccElasticloadbalancingv2TrustStoreTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2TrustStoreTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingv2TrustStoreTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2TrustStoreTags | undefined) {
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

export class DataAwsccElasticloadbalancingv2TrustStoreTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingv2TrustStoreTagsOutputReference {
    return new DataAwsccElasticloadbalancingv2TrustStoreTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_trust_store awscc_elasticloadbalancingv2_trust_store}
*/
export class DataAwsccElasticloadbalancingv2TrustStore extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_elasticloadbalancingv2_trust_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2TrustStore resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccElasticloadbalancingv2TrustStore to import
  * @param importFromId The id of the existing DataAwsccElasticloadbalancingv2TrustStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_trust_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccElasticloadbalancingv2TrustStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticloadbalancingv2_trust_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_trust_store awscc_elasticloadbalancingv2_trust_store} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccElasticloadbalancingv2TrustStoreConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccElasticloadbalancingv2TrustStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_elasticloadbalancingv2_trust_store',
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

  // ca_certificates_bundle_s3_bucket - computed: true, optional: false, required: false
  public get caCertificatesBundleS3Bucket() {
    return this.getStringAttribute('ca_certificates_bundle_s3_bucket');
  }

  // ca_certificates_bundle_s3_key - computed: true, optional: false, required: false
  public get caCertificatesBundleS3Key() {
    return this.getStringAttribute('ca_certificates_bundle_s3_key');
  }

  // ca_certificates_bundle_s3_object_version - computed: true, optional: false, required: false
  public get caCertificatesBundleS3ObjectVersion() {
    return this.getStringAttribute('ca_certificates_bundle_s3_object_version');
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

  // number_of_ca_certificates - computed: true, optional: false, required: false
  public get numberOfCaCertificates() {
    return this.getNumberAttribute('number_of_ca_certificates');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccElasticloadbalancingv2TrustStoreTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // trust_store_arn - computed: true, optional: false, required: false
  public get trustStoreArn() {
    return this.getStringAttribute('trust_store_arn');
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
