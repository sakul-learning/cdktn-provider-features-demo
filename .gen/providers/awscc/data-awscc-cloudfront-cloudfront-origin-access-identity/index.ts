// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudfront_cloudfront_origin_access_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudfront_cloudfront_origin_access_identity#id DataAwsccCloudfrontCloudfrontOriginAccessIdentity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig {
}

export function dataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigToTerraform(struct?: DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigToHclTerraform(struct?: DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudfront_cloudfront_origin_access_identity awscc_cloudfront_cloudfront_origin_access_identity}
*/
export class DataAwsccCloudfrontCloudfrontOriginAccessIdentity extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudfront_cloudfront_origin_access_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCloudfrontCloudfrontOriginAccessIdentity resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCloudfrontCloudfrontOriginAccessIdentity to import
  * @param importFromId The id of the existing DataAwsccCloudfrontCloudfrontOriginAccessIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudfront_cloudfront_origin_access_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCloudfrontCloudfrontOriginAccessIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_cloudfront_origin_access_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudfront_cloudfront_origin_access_identity awscc_cloudfront_cloudfront_origin_access_identity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudfrontCloudfrontOriginAccessIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudfront_cloudfront_origin_access_identity',
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

  // cloudfront_origin_access_identity_config - computed: true, optional: false, required: false
  private _cloudfrontOriginAccessIdentityConfig = new DataAwsccCloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference(this, "cloudfront_origin_access_identity_config");
  public get cloudfrontOriginAccessIdentityConfig() {
    return this._cloudfrontOriginAccessIdentityConfig;
  }

  // cloudfront_origin_access_identity_id - computed: true, optional: false, required: false
  public get cloudfrontOriginAccessIdentityId() {
    return this.getStringAttribute('cloudfront_origin_access_identity_id');
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

  // s3_canonical_user_id - computed: true, optional: false, required: false
  public get s3CanonicalUserId() {
    return this.getStringAttribute('s3_canonical_user_id');
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
