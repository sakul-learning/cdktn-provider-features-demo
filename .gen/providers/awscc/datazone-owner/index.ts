// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_owner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatazoneOwnerConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the domain in which you want to add the entity owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_owner#domain_identifier DatazoneOwner#domain_identifier}
  */
  readonly domainIdentifier: string;
  /**
  * The ID of the entity to which you want to add an owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_owner#entity_identifier DatazoneOwner#entity_identifier}
  */
  readonly entityIdentifier: string;
  /**
  * The type of an entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_owner#entity_type DatazoneOwner#entity_type}
  */
  readonly entityType: string;
  /**
  * The owner that you want to add to the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_owner#owner DatazoneOwner#owner}
  */
  readonly owner: DatazoneOwnerOwner;
}
export interface DatazoneOwnerOwnerGroup {
  /**
  * The ID of the domain unit owners group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_owner#group_identifier DatazoneOwner#group_identifier}
  */
  readonly groupIdentifier?: string;
}

export function datazoneOwnerOwnerGroupToTerraform(struct?: DatazoneOwnerOwnerGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_identifier: cdktn.stringToTerraform(struct!.groupIdentifier),
  }
}


export function datazoneOwnerOwnerGroupToHclTerraform(struct?: DatazoneOwnerOwnerGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_identifier: {
      value: cdktn.stringToHclTerraform(struct!.groupIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazoneOwnerOwnerGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazoneOwnerOwnerGroup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIdentifier = this._groupIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazoneOwnerOwnerGroup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupIdentifier = value.groupIdentifier;
    }
  }

  // group_identifier - computed: true, optional: true, required: false
  private _groupIdentifier?: string;
  public get groupIdentifier() {
    return this.getStringAttribute('group_identifier');
  }
  public set groupIdentifier(value: string) {
    this._groupIdentifier = value;
  }
  public resetGroupIdentifier() {
    this._groupIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdentifierInput() {
    return this._groupIdentifier;
  }
}
export interface DatazoneOwnerOwnerUser {
  /**
  * The ID of the owner user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_owner#user_identifier DatazoneOwner#user_identifier}
  */
  readonly userIdentifier?: string;
}

export function datazoneOwnerOwnerUserToTerraform(struct?: DatazoneOwnerOwnerUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    user_identifier: cdktn.stringToTerraform(struct!.userIdentifier),
  }
}


export function datazoneOwnerOwnerUserToHclTerraform(struct?: DatazoneOwnerOwnerUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    user_identifier: {
      value: cdktn.stringToHclTerraform(struct!.userIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazoneOwnerOwnerUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazoneOwnerOwnerUser | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdentifier = this._userIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazoneOwnerOwnerUser | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userIdentifier = value.userIdentifier;
    }
  }

  // user_identifier - computed: true, optional: true, required: false
  private _userIdentifier?: string;
  public get userIdentifier() {
    return this.getStringAttribute('user_identifier');
  }
  public set userIdentifier(value: string) {
    this._userIdentifier = value;
  }
  public resetUserIdentifier() {
    this._userIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentifierInput() {
    return this._userIdentifier;
  }
}
export interface DatazoneOwnerOwner {
  /**
  * The properties of the domain unit owners group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_owner#group DatazoneOwner#group}
  */
  readonly group?: DatazoneOwnerOwnerGroup;
  /**
  * The properties of the owner user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_owner#user DatazoneOwner#user}
  */
  readonly user?: DatazoneOwnerOwnerUser;
}

export function datazoneOwnerOwnerToTerraform(struct?: DatazoneOwnerOwner | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group: datazoneOwnerOwnerGroupToTerraform(struct!.group),
    user: datazoneOwnerOwnerUserToTerraform(struct!.user),
  }
}


export function datazoneOwnerOwnerToHclTerraform(struct?: DatazoneOwnerOwner | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group: {
      value: datazoneOwnerOwnerGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazoneOwnerOwnerGroup",
    },
    user: {
      value: datazoneOwnerOwnerUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazoneOwnerOwnerUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazoneOwnerOwnerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazoneOwnerOwner | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazoneOwnerOwner | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group.internalValue = value.group;
      this._user.internalValue = value.user;
    }
  }

  // group - computed: true, optional: true, required: false
  private _group = new DatazoneOwnerOwnerGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: DatazoneOwnerOwnerGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user = new DatazoneOwnerOwnerUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: DatazoneOwnerOwnerUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_owner awscc_datazone_owner}
*/
export class DatazoneOwner extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_datazone_owner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DatazoneOwner resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatazoneOwner to import
  * @param importFromId The id of the existing DatazoneOwner that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_owner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatazoneOwner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_owner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/datazone_owner awscc_datazone_owner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatazoneOwnerConfig
  */
  public constructor(scope: Construct, id: string, config: DatazoneOwnerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datazone_owner',
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
    this._domainIdentifier = config.domainIdentifier;
    this._entityIdentifier = config.entityIdentifier;
    this._entityType = config.entityType;
    this._owner.internalValue = config.owner;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_identifier - computed: false, optional: false, required: true
  private _domainIdentifier?: string;
  public get domainIdentifier() {
    return this.getStringAttribute('domain_identifier');
  }
  public set domainIdentifier(value: string) {
    this._domainIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdentifierInput() {
    return this._domainIdentifier;
  }

  // entity_identifier - computed: false, optional: false, required: true
  private _entityIdentifier?: string;
  public get entityIdentifier() {
    return this.getStringAttribute('entity_identifier');
  }
  public set entityIdentifier(value: string) {
    this._entityIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdentifierInput() {
    return this._entityIdentifier;
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string;
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner - computed: false, optional: false, required: true
  private _owner = new DatazoneOwnerOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }
  public putOwner(value: DatazoneOwnerOwner) {
    this._owner.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }

  // owner_identifier - computed: true, optional: false, required: false
  public get ownerIdentifier() {
    return this.getStringAttribute('owner_identifier');
  }

  // owner_type - computed: true, optional: false, required: false
  public get ownerType() {
    return this.getStringAttribute('owner_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
      entity_identifier: cdktn.stringToTerraform(this._entityIdentifier),
      entity_type: cdktn.stringToTerraform(this._entityType),
      owner: datazoneOwnerOwnerToTerraform(this._owner.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_identifier: {
        value: cdktn.stringToHclTerraform(this._domainIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_identifier: {
        value: cdktn.stringToHclTerraform(this._entityIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_type: {
        value: cdktn.stringToHclTerraform(this._entityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: datazoneOwnerOwnerToHclTerraform(this._owner.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatazoneOwnerOwner",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
