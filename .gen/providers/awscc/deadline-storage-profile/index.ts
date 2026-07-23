// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/deadline_storage_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DeadlineStorageProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/deadline_storage_profile#display_name DeadlineStorageProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/deadline_storage_profile#farm_id DeadlineStorageProfile#farm_id}
  */
  readonly farmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/deadline_storage_profile#file_system_locations DeadlineStorageProfile#file_system_locations}
  */
  readonly fileSystemLocations?: DeadlineStorageProfileFileSystemLocations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/deadline_storage_profile#os_family DeadlineStorageProfile#os_family}
  */
  readonly osFamily: string;
}
export interface DeadlineStorageProfileFileSystemLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/deadline_storage_profile#name DeadlineStorageProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/deadline_storage_profile#path DeadlineStorageProfile#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/deadline_storage_profile#type DeadlineStorageProfile#type}
  */
  readonly type?: string;
}

export function deadlineStorageProfileFileSystemLocationsToTerraform(struct?: DeadlineStorageProfileFileSystemLocations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    path: cdktn.stringToTerraform(struct!.path),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function deadlineStorageProfileFileSystemLocationsToHclTerraform(struct?: DeadlineStorageProfileFileSystemLocations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeadlineStorageProfileFileSystemLocationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DeadlineStorageProfileFileSystemLocations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeadlineStorageProfileFileSystemLocations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
      this._type = value.type;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DeadlineStorageProfileFileSystemLocationsList extends cdktn.ComplexList {
  public internalValue? : DeadlineStorageProfileFileSystemLocations[] | cdktn.IResolvable

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
  public get(index: number): DeadlineStorageProfileFileSystemLocationsOutputReference {
    return new DeadlineStorageProfileFileSystemLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/deadline_storage_profile awscc_deadline_storage_profile}
*/
export class DeadlineStorageProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_deadline_storage_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DeadlineStorageProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeadlineStorageProfile to import
  * @param importFromId The id of the existing DeadlineStorageProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/deadline_storage_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeadlineStorageProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_deadline_storage_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/deadline_storage_profile awscc_deadline_storage_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeadlineStorageProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DeadlineStorageProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_deadline_storage_profile',
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
    this._displayName = config.displayName;
    this._farmId = config.farmId;
    this._fileSystemLocations.internalValue = config.fileSystemLocations;
    this._osFamily = config.osFamily;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // farm_id - computed: false, optional: false, required: true
  private _farmId?: string; 
  public get farmId() {
    return this.getStringAttribute('farm_id');
  }
  public set farmId(value: string) {
    this._farmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get farmIdInput() {
    return this._farmId;
  }

  // file_system_locations - computed: true, optional: true, required: false
  private _fileSystemLocations = new DeadlineStorageProfileFileSystemLocationsList(this, "file_system_locations", false);
  public get fileSystemLocations() {
    return this._fileSystemLocations;
  }
  public putFileSystemLocations(value: DeadlineStorageProfileFileSystemLocations[] | cdktn.IResolvable) {
    this._fileSystemLocations.internalValue = value;
  }
  public resetFileSystemLocations() {
    this._fileSystemLocations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemLocationsInput() {
    return this._fileSystemLocations.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // os_family - computed: false, optional: false, required: true
  private _osFamily?: string; 
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }
  public set osFamily(value: string) {
    this._osFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osFamilyInput() {
    return this._osFamily;
  }

  // storage_profile_id - computed: true, optional: false, required: false
  public get storageProfileId() {
    return this.getStringAttribute('storage_profile_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktn.stringToTerraform(this._displayName),
      farm_id: cdktn.stringToTerraform(this._farmId),
      file_system_locations: cdktn.listMapper(deadlineStorageProfileFileSystemLocationsToTerraform, false)(this._fileSystemLocations.internalValue),
      os_family: cdktn.stringToTerraform(this._osFamily),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      farm_id: {
        value: cdktn.stringToHclTerraform(this._farmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_system_locations: {
        value: cdktn.listMapperHcl(deadlineStorageProfileFileSystemLocationsToHclTerraform, false)(this._fileSystemLocations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeadlineStorageProfileFileSystemLocationsList",
      },
      os_family: {
        value: cdktn.stringToHclTerraform(this._osFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
