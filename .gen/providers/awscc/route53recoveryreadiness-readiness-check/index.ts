// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53recoveryreadiness_readiness_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Route53RecoveryreadinessReadinessCheckConfig extends cdktn.TerraformMetaArguments {
  /**
  * Name of the ReadinessCheck to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53recoveryreadiness_readiness_check#readiness_check_name Route53RecoveryreadinessReadinessCheck#readiness_check_name}
  */
  readonly readinessCheckName?: string;
  /**
  * The name of the resource set to check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53recoveryreadiness_readiness_check#resource_set_name Route53RecoveryreadinessReadinessCheck#resource_set_name}
  */
  readonly resourceSetName?: string;
  /**
  * A collection of tags associated with a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53recoveryreadiness_readiness_check#tags Route53RecoveryreadinessReadinessCheck#tags}
  */
  readonly tags?: Route53RecoveryreadinessReadinessCheckTags[] | cdktn.IResolvable;
}
export interface Route53RecoveryreadinessReadinessCheckTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53recoveryreadiness_readiness_check#key Route53RecoveryreadinessReadinessCheck#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53recoveryreadiness_readiness_check#value Route53RecoveryreadinessReadinessCheck#value}
  */
  readonly value?: string;
}

export function route53RecoveryreadinessReadinessCheckTagsToTerraform(struct?: Route53RecoveryreadinessReadinessCheckTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function route53RecoveryreadinessReadinessCheckTagsToHclTerraform(struct?: Route53RecoveryreadinessReadinessCheckTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Route53RecoveryreadinessReadinessCheckTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Route53RecoveryreadinessReadinessCheckTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Route53RecoveryreadinessReadinessCheckTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Route53RecoveryreadinessReadinessCheckTagsList extends cdktn.ComplexList {
  public internalValue? : Route53RecoveryreadinessReadinessCheckTags[] | cdktn.IResolvable

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
  public get(index: number): Route53RecoveryreadinessReadinessCheckTagsOutputReference {
    return new Route53RecoveryreadinessReadinessCheckTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53recoveryreadiness_readiness_check awscc_route53recoveryreadiness_readiness_check}
*/
export class Route53RecoveryreadinessReadinessCheck extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_route53recoveryreadiness_readiness_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Route53RecoveryreadinessReadinessCheck resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route53RecoveryreadinessReadinessCheck to import
  * @param importFromId The id of the existing Route53RecoveryreadinessReadinessCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53recoveryreadiness_readiness_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route53RecoveryreadinessReadinessCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53recoveryreadiness_readiness_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53recoveryreadiness_readiness_check awscc_route53recoveryreadiness_readiness_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53RecoveryreadinessReadinessCheckConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Route53RecoveryreadinessReadinessCheckConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53recoveryreadiness_readiness_check',
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
    this._readinessCheckName = config.readinessCheckName;
    this._resourceSetName = config.resourceSetName;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // readiness_check_arn - computed: true, optional: false, required: false
  public get readinessCheckArn() {
    return this.getStringAttribute('readiness_check_arn');
  }

  // readiness_check_name - computed: true, optional: true, required: false
  private _readinessCheckName?: string; 
  public get readinessCheckName() {
    return this.getStringAttribute('readiness_check_name');
  }
  public set readinessCheckName(value: string) {
    this._readinessCheckName = value;
  }
  public resetReadinessCheckName() {
    this._readinessCheckName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessCheckNameInput() {
    return this._readinessCheckName;
  }

  // resource_set_name - computed: true, optional: true, required: false
  private _resourceSetName?: string; 
  public get resourceSetName() {
    return this.getStringAttribute('resource_set_name');
  }
  public set resourceSetName(value: string) {
    this._resourceSetName = value;
  }
  public resetResourceSetName() {
    this._resourceSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetNameInput() {
    return this._resourceSetName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Route53RecoveryreadinessReadinessCheckTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Route53RecoveryreadinessReadinessCheckTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      readiness_check_name: cdktn.stringToTerraform(this._readinessCheckName),
      resource_set_name: cdktn.stringToTerraform(this._resourceSetName),
      tags: cdktn.listMapper(route53RecoveryreadinessReadinessCheckTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      readiness_check_name: {
        value: cdktn.stringToHclTerraform(this._readinessCheckName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_set_name: {
        value: cdktn.stringToHclTerraform(this._resourceSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(route53RecoveryreadinessReadinessCheckTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Route53RecoveryreadinessReadinessCheckTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
