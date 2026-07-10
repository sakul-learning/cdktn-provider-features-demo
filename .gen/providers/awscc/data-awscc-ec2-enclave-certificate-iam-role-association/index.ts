// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_enclave_certificate_iam_role_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_enclave_certificate_iam_role_association#id DataAwsccEc2EnclaveCertificateIamRoleAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_enclave_certificate_iam_role_association awscc_ec2_enclave_certificate_iam_role_association}
*/
export class DataAwsccEc2EnclaveCertificateIamRoleAssociation extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_enclave_certificate_iam_role_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2EnclaveCertificateIamRoleAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2EnclaveCertificateIamRoleAssociation to import
  * @param importFromId The id of the existing DataAwsccEc2EnclaveCertificateIamRoleAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_enclave_certificate_iam_role_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2EnclaveCertificateIamRoleAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_enclave_certificate_iam_role_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_enclave_certificate_iam_role_association awscc_ec2_enclave_certificate_iam_role_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2EnclaveCertificateIamRoleAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_enclave_certificate_iam_role_association',
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

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // certificate_s3_bucket_name - computed: true, optional: false, required: false
  public get certificateS3BucketName() {
    return this.getStringAttribute('certificate_s3_bucket_name');
  }

  // certificate_s3_object_key - computed: true, optional: false, required: false
  public get certificateS3ObjectKey() {
    return this.getStringAttribute('certificate_s3_object_key');
  }

  // encryption_kms_key_id - computed: true, optional: false, required: false
  public get encryptionKmsKeyId() {
    return this.getStringAttribute('encryption_kms_key_id');
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

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
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
