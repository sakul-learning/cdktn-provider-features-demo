// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_enclave_certificate_iam_role_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2EnclaveCertificateIamRoleAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) of the ACM certificate with which to associate the IAM role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_enclave_certificate_iam_role_association#certificate_arn Ec2EnclaveCertificateIamRoleAssociation#certificate_arn}
  */
  readonly certificateArn: string;
  /**
  * The Amazon Resource Name (ARN) of the IAM role to associate with the ACM certificate. You can associate up to 16 IAM roles with an ACM certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_enclave_certificate_iam_role_association#role_arn Ec2EnclaveCertificateIamRoleAssociation#role_arn}
  */
  readonly roleArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_enclave_certificate_iam_role_association awscc_ec2_enclave_certificate_iam_role_association}
*/
export class Ec2EnclaveCertificateIamRoleAssociation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_enclave_certificate_iam_role_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2EnclaveCertificateIamRoleAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2EnclaveCertificateIamRoleAssociation to import
  * @param importFromId The id of the existing Ec2EnclaveCertificateIamRoleAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_enclave_certificate_iam_role_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2EnclaveCertificateIamRoleAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_enclave_certificate_iam_role_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_enclave_certificate_iam_role_association awscc_ec2_enclave_certificate_iam_role_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2EnclaveCertificateIamRoleAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2EnclaveCertificateIamRoleAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_enclave_certificate_iam_role_association',
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
    this._certificateArn = config.certificateArn;
    this._roleArn = config.roleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_arn - computed: false, optional: false, required: true
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_arn: cdktn.stringToTerraform(this._certificateArn),
      role_arn: cdktn.stringToTerraform(this._roleArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_arn: {
        value: cdktn.stringToHclTerraform(this._certificateArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
