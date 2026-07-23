// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_origin_access_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudfrontOriginAccessControlConfig extends cdktn.TerraformMetaArguments {
  /**
  * The origin access control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_origin_access_control#origin_access_control_config CloudfrontOriginAccessControl#origin_access_control_config}
  */
  readonly originAccessControlConfig: CloudfrontOriginAccessControlOriginAccessControlConfig;
}
export interface CloudfrontOriginAccessControlOriginAccessControlConfig {
  /**
  * A description of the origin access control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_origin_access_control#description CloudfrontOriginAccessControl#description}
  */
  readonly description?: string;
  /**
  * A name to identify the origin access control. You can specify up to 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_origin_access_control#name CloudfrontOriginAccessControl#name}
  */
  readonly name: string;
  /**
  * The type of origin that this origin access control is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_origin_access_control#origin_access_control_origin_type CloudfrontOriginAccessControl#origin_access_control_origin_type}
  */
  readonly originAccessControlOriginType: string;
  /**
  * Specifies which requests CloudFront signs (adds authentication information to). Specify ``always`` for the most common use case. For more information, see [origin access control advanced settings](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#oac-advanced-settings) in the *Amazon CloudFront Developer Guide*.
  *  This field can have one of the following values:
  *   +  ``always`` ? CloudFront signs all origin requests, overwriting the ``Authorization`` header from the viewer request if one exists.
  *   +  ``never`` ? CloudFront doesn't sign any origin requests. This value turns off origin access control for all origins in all distributions that use this origin access control.
  *   +  ``no-override`` ? If the viewer request doesn't contain the ``Authorization`` header, then CloudFront signs the origin request. If the viewer request contains the ``Authorization`` header, then CloudFront doesn't sign the origin request and instead passes along the ``Authorization`` header from the viewer request. *WARNING: To pass along the Authorization header from the viewer request, you must add the Authorization header to a cache policy for all cache behaviors that use origins associated with this origin access control.*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_origin_access_control#signing_behavior CloudfrontOriginAccessControl#signing_behavior}
  */
  readonly signingBehavior: string;
  /**
  * The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests. The only valid value is ``sigv4``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_origin_access_control#signing_protocol CloudfrontOriginAccessControl#signing_protocol}
  */
  readonly signingProtocol: string;
}

export function cloudfrontOriginAccessControlOriginAccessControlConfigToTerraform(struct?: CloudfrontOriginAccessControlOriginAccessControlConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    origin_access_control_origin_type: cdktn.stringToTerraform(struct!.originAccessControlOriginType),
    signing_behavior: cdktn.stringToTerraform(struct!.signingBehavior),
    signing_protocol: cdktn.stringToTerraform(struct!.signingProtocol),
  }
}


export function cloudfrontOriginAccessControlOriginAccessControlConfigToHclTerraform(struct?: CloudfrontOriginAccessControlOriginAccessControlConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_access_control_origin_type: {
      value: cdktn.stringToHclTerraform(struct!.originAccessControlOriginType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_behavior: {
      value: cdktn.stringToHclTerraform(struct!.signingBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_protocol: {
      value: cdktn.stringToHclTerraform(struct!.signingProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontOriginAccessControlOriginAccessControlConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._originAccessControlOriginType !== undefined) {
      hasAnyValues = true;
      internalValueResult.originAccessControlOriginType = this._originAccessControlOriginType;
    }
    if (this._signingBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingBehavior = this._signingBehavior;
    }
    if (this._signingProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingProtocol = this._signingProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontOriginAccessControlOriginAccessControlConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._originAccessControlOriginType = undefined;
      this._signingBehavior = undefined;
      this._signingProtocol = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._originAccessControlOriginType = value.originAccessControlOriginType;
      this._signingBehavior = value.signingBehavior;
      this._signingProtocol = value.signingProtocol;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // origin_access_control_origin_type - computed: false, optional: false, required: true
  private _originAccessControlOriginType?: string; 
  public get originAccessControlOriginType() {
    return this.getStringAttribute('origin_access_control_origin_type');
  }
  public set originAccessControlOriginType(value: string) {
    this._originAccessControlOriginType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originAccessControlOriginTypeInput() {
    return this._originAccessControlOriginType;
  }

  // signing_behavior - computed: false, optional: false, required: true
  private _signingBehavior?: string; 
  public get signingBehavior() {
    return this.getStringAttribute('signing_behavior');
  }
  public set signingBehavior(value: string) {
    this._signingBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingBehaviorInput() {
    return this._signingBehavior;
  }

  // signing_protocol - computed: false, optional: false, required: true
  private _signingProtocol?: string; 
  public get signingProtocol() {
    return this.getStringAttribute('signing_protocol');
  }
  public set signingProtocol(value: string) {
    this._signingProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingProtocolInput() {
    return this._signingProtocol;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_origin_access_control awscc_cloudfront_origin_access_control}
*/
export class CloudfrontOriginAccessControl extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudfront_origin_access_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudfrontOriginAccessControl resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudfrontOriginAccessControl to import
  * @param importFromId The id of the existing CloudfrontOriginAccessControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_origin_access_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudfrontOriginAccessControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_origin_access_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_origin_access_control awscc_cloudfront_origin_access_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontOriginAccessControlConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontOriginAccessControlConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudfront_origin_access_control',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._originAccessControlConfig.internalValue = config.originAccessControlConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // origin_access_control_config - computed: false, optional: false, required: true
  private _originAccessControlConfig = new CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference(this, "origin_access_control_config");
  public get originAccessControlConfig() {
    return this._originAccessControlConfig;
  }
  public putOriginAccessControlConfig(value: CloudfrontOriginAccessControlOriginAccessControlConfig) {
    this._originAccessControlConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originAccessControlConfigInput() {
    return this._originAccessControlConfig.internalValue;
  }

  // origin_access_control_id - computed: true, optional: false, required: false
  public get originAccessControlId() {
    return this.getStringAttribute('origin_access_control_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      origin_access_control_config: cloudfrontOriginAccessControlOriginAccessControlConfigToTerraform(this._originAccessControlConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      origin_access_control_config: {
        value: cloudfrontOriginAccessControlOriginAccessControlConfigToHclTerraform(this._originAccessControlConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudfrontOriginAccessControlOriginAccessControlConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
