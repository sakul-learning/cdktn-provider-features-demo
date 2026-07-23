// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/datazone_project_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDatazoneProjectMembershipConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/datazone_project_membership#id DataAwsccDatazoneProjectMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDatazoneProjectMembershipMember {
}

export function dataAwsccDatazoneProjectMembershipMemberToTerraform(struct?: DataAwsccDatazoneProjectMembershipMember): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneProjectMembershipMemberToHclTerraform(struct?: DataAwsccDatazoneProjectMembershipMember): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneProjectMembershipMemberOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazoneProjectMembershipMember | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneProjectMembershipMember | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_identifier - computed: true, optional: false, required: false
  public get groupIdentifier() {
    return this.getStringAttribute('group_identifier');
  }

  // user_identifier - computed: true, optional: false, required: false
  public get userIdentifier() {
    return this.getStringAttribute('user_identifier');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/datazone_project_membership awscc_datazone_project_membership}
*/
export class DataAwsccDatazoneProjectMembership extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_datazone_project_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDatazoneProjectMembership resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDatazoneProjectMembership to import
  * @param importFromId The id of the existing DataAwsccDatazoneProjectMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/datazone_project_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDatazoneProjectMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_project_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/datazone_project_membership awscc_datazone_project_membership} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDatazoneProjectMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDatazoneProjectMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datazone_project_membership',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // designation - computed: true, optional: false, required: false
  public get designation() {
    return this.getStringAttribute('designation');
  }

  // domain_identifier - computed: true, optional: false, required: false
  public get domainIdentifier() {
    return this.getStringAttribute('domain_identifier');
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

  // member - computed: true, optional: false, required: false
  private _member = new DataAwsccDatazoneProjectMembershipMemberOutputReference(this, "member");
  public get member() {
    return this._member;
  }

  // member_identifier - computed: true, optional: false, required: false
  public get memberIdentifier() {
    return this.getStringAttribute('member_identifier');
  }

  // member_identifier_type - computed: true, optional: false, required: false
  public get memberIdentifierType() {
    return this.getStringAttribute('member_identifier_type');
  }

  // project_identifier - computed: true, optional: false, required: false
  public get projectIdentifier() {
    return this.getStringAttribute('project_identifier');
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
