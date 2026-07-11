// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_trust_store_revocation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_trust_store_revocation#id DataAwsccElasticloadbalancingv2TrustStoreRevocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContents {
}

export function dataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsToTerraform(struct?: DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsToHclTerraform(struct?: DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // revocation_type - computed: true, optional: false, required: false
  public get revocationType() {
    return this.getStringAttribute('revocation_type');
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_key - computed: true, optional: false, required: false
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }

  // s3_object_version - computed: true, optional: false, required: false
  public get s3ObjectVersion() {
    return this.getStringAttribute('s3_object_version');
  }
}

export class DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference {
    return new DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations {
}

export function dataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsToTerraform(struct?: DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsToHclTerraform(struct?: DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number_of_revoked_entries - computed: true, optional: false, required: false
  public get numberOfRevokedEntries() {
    return this.getNumberAttribute('number_of_revoked_entries');
  }

  // revocation_id - computed: true, optional: false, required: false
  public get revocationId() {
    return this.getStringAttribute('revocation_id');
  }

  // revocation_type - computed: true, optional: false, required: false
  public get revocationType() {
    return this.getStringAttribute('revocation_type');
  }

  // trust_store_arn - computed: true, optional: false, required: false
  public get trustStoreArn() {
    return this.getStringAttribute('trust_store_arn');
  }
}

export class DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference {
    return new DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_trust_store_revocation awscc_elasticloadbalancingv2_trust_store_revocation}
*/
export class DataAwsccElasticloadbalancingv2TrustStoreRevocation extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_elasticloadbalancingv2_trust_store_revocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2TrustStoreRevocation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccElasticloadbalancingv2TrustStoreRevocation to import
  * @param importFromId The id of the existing DataAwsccElasticloadbalancingv2TrustStoreRevocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_trust_store_revocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccElasticloadbalancingv2TrustStoreRevocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticloadbalancingv2_trust_store_revocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_trust_store_revocation awscc_elasticloadbalancingv2_trust_store_revocation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccElasticloadbalancingv2TrustStoreRevocationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_elasticloadbalancingv2_trust_store_revocation',
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

  // revocation_contents - computed: true, optional: false, required: false
  private _revocationContents = new DataAwsccElasticloadbalancingv2TrustStoreRevocationRevocationContentsList(this, "revocation_contents", true);
  public get revocationContents() {
    return this._revocationContents;
  }

  // revocation_id - computed: true, optional: false, required: false
  public get revocationId() {
    return this.getNumberAttribute('revocation_id');
  }

  // trust_store_arn - computed: true, optional: false, required: false
  public get trustStoreArn() {
    return this.getStringAttribute('trust_store_arn');
  }

  // trust_store_revocations - computed: true, optional: false, required: false
  private _trustStoreRevocations = new DataAwsccElasticloadbalancingv2TrustStoreRevocationTrustStoreRevocationsList(this, "trust_store_revocations", true);
  public get trustStoreRevocations() {
    return this._trustStoreRevocations;
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
