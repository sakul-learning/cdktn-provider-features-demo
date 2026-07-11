// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3outposts_access_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface S3OutpostsAccessPointConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) of the bucket you want to associate this AccessPoint with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3outposts_access_point#bucket S3OutpostsAccessPoint#bucket}
  */
  readonly bucket: string;
  /**
  * A name for the AccessPoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3outposts_access_point#name S3OutpostsAccessPoint#name}
  */
  readonly name: string;
  /**
  * The access point policy associated with this access point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3outposts_access_point#policy S3OutpostsAccessPoint#policy}
  */
  readonly policy?: string;
  /**
  * Virtual Private Cloud (VPC) from which requests can be made to the AccessPoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3outposts_access_point#vpc_configuration S3OutpostsAccessPoint#vpc_configuration}
  */
  readonly vpcConfiguration: S3OutpostsAccessPointVpcConfiguration;
}
export interface S3OutpostsAccessPointVpcConfiguration {
  /**
  * Virtual Private Cloud (VPC) Id from which AccessPoint will allow requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3outposts_access_point#vpc_id S3OutpostsAccessPoint#vpc_id}
  */
  readonly vpcId?: string;
}

export function s3OutpostsAccessPointVpcConfigurationToTerraform(struct?: S3OutpostsAccessPointVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc_id: cdktn.stringToTerraform(struct!.vpcId),
  }
}


export function s3OutpostsAccessPointVpcConfigurationToHclTerraform(struct?: S3OutpostsAccessPointVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc_id: {
      value: cdktn.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3OutpostsAccessPointVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3OutpostsAccessPointVpcConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3OutpostsAccessPointVpcConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcId = value.vpcId;
    }
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3outposts_access_point awscc_s3outposts_access_point}
*/
export class S3OutpostsAccessPoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_s3outposts_access_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a S3OutpostsAccessPoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3OutpostsAccessPoint to import
  * @param importFromId The id of the existing S3OutpostsAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3outposts_access_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3OutpostsAccessPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3outposts_access_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/s3outposts_access_point awscc_s3outposts_access_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3OutpostsAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: S3OutpostsAccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3outposts_access_point',
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
    this._bucket = config.bucket;
    this._name = config.name;
    this._policy = config.policy;
    this._vpcConfiguration.internalValue = config.vpcConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string;
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // vpc_configuration - computed: false, optional: false, required: true
  private _vpcConfiguration = new S3OutpostsAccessPointVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
  public putVpcConfiguration(value: S3OutpostsAccessPointVpcConfiguration) {
    this._vpcConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktn.stringToTerraform(this._bucket),
      name: cdktn.stringToTerraform(this._name),
      policy: cdktn.stringToTerraform(this._policy),
      vpc_configuration: s3OutpostsAccessPointVpcConfigurationToTerraform(this._vpcConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktn.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktn.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_configuration: {
        value: s3OutpostsAccessPointVpcConfigurationToHclTerraform(this._vpcConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3OutpostsAccessPointVpcConfiguration",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
