// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_standard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityhubStandardConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies which controls are to be disabled in a standard. 
  *  *Maximum*: ``100``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_standard#disabled_standards_controls SecurityhubStandard#disabled_standards_controls}
  */
  readonly disabledStandardsControls?: SecurityhubStandardDisabledStandardsControls[] | cdktn.IResolvable;
  /**
  * The ARN of the standard that you want to enable. To view a list of available ASH standards and their ARNs, use the [DescribeStandards](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_standard#standards_arn SecurityhubStandard#standards_arn}
  */
  readonly standardsArn: string;
}
export interface SecurityhubStandardDisabledStandardsControls {
  /**
  * A user-defined reason for changing a control's enablement status in a specified standard. If you are disabling a control, then this property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_standard#reason SecurityhubStandard#reason}
  */
  readonly reason?: string;
  /**
  * The Amazon Resource Name (ARN) of the control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_standard#standards_control_arn SecurityhubStandard#standards_control_arn}
  */
  readonly standardsControlArn?: string;
}

export function securityhubStandardDisabledStandardsControlsToTerraform(struct?: SecurityhubStandardDisabledStandardsControls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    reason: cdktn.stringToTerraform(struct!.reason),
    standards_control_arn: cdktn.stringToTerraform(struct!.standardsControlArn),
  }
}


export function securityhubStandardDisabledStandardsControlsToHclTerraform(struct?: SecurityhubStandardDisabledStandardsControls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    reason: {
      value: cdktn.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standards_control_arn: {
      value: cdktn.stringToHclTerraform(struct!.standardsControlArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubStandardDisabledStandardsControlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SecurityhubStandardDisabledStandardsControls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._standardsControlArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardsControlArn = this._standardsControlArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubStandardDisabledStandardsControls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._standardsControlArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reason = value.reason;
      this._standardsControlArn = value.standardsControlArn;
    }
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // standards_control_arn - computed: true, optional: true, required: false
  private _standardsControlArn?: string; 
  public get standardsControlArn() {
    return this.getStringAttribute('standards_control_arn');
  }
  public set standardsControlArn(value: string) {
    this._standardsControlArn = value;
  }
  public resetStandardsControlArn() {
    this._standardsControlArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardsControlArnInput() {
    return this._standardsControlArn;
  }
}

export class SecurityhubStandardDisabledStandardsControlsList extends cdktn.ComplexList {
  public internalValue? : SecurityhubStandardDisabledStandardsControls[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubStandardDisabledStandardsControlsOutputReference {
    return new SecurityhubStandardDisabledStandardsControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_standard awscc_securityhub_standard}
*/
export class SecurityhubStandard extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_securityhub_standard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityhubStandard resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubStandard to import
  * @param importFromId The id of the existing SecurityhubStandard that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_standard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubStandard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_standard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_standard awscc_securityhub_standard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubStandardConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityhubStandardConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_securityhub_standard',
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
    this._disabledStandardsControls.internalValue = config.disabledStandardsControls;
    this._standardsArn = config.standardsArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled_standards_controls - computed: true, optional: true, required: false
  private _disabledStandardsControls = new SecurityhubStandardDisabledStandardsControlsList(this, "disabled_standards_controls", false);
  public get disabledStandardsControls() {
    return this._disabledStandardsControls;
  }
  public putDisabledStandardsControls(value: SecurityhubStandardDisabledStandardsControls[] | cdktn.IResolvable) {
    this._disabledStandardsControls.internalValue = value;
  }
  public resetDisabledStandardsControls() {
    this._disabledStandardsControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledStandardsControlsInput() {
    return this._disabledStandardsControls.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // standards_arn - computed: false, optional: false, required: true
  private _standardsArn?: string; 
  public get standardsArn() {
    return this.getStringAttribute('standards_arn');
  }
  public set standardsArn(value: string) {
    this._standardsArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardsArnInput() {
    return this._standardsArn;
  }

  // standards_subscription_arn - computed: true, optional: false, required: false
  public get standardsSubscriptionArn() {
    return this.getStringAttribute('standards_subscription_arn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled_standards_controls: cdktn.listMapper(securityhubStandardDisabledStandardsControlsToTerraform, false)(this._disabledStandardsControls.internalValue),
      standards_arn: cdktn.stringToTerraform(this._standardsArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled_standards_controls: {
        value: cdktn.listMapperHcl(securityhubStandardDisabledStandardsControlsToHclTerraform, false)(this._disabledStandardsControls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityhubStandardDisabledStandardsControlsList",
      },
      standards_arn: {
        value: cdktn.stringToHclTerraform(this._standardsArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
