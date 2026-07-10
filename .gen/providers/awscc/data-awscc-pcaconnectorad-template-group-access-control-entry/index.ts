// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/pcaconnectorad_template_group_access_control_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/pcaconnectorad_template_group_access_control_entry#id DataAwsccPcaconnectoradTemplateGroupAccessControlEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights {
}

export function dataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsToTerraform(struct?: DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRights | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_enroll - computed: true, optional: false, required: false
  public get autoEnroll() {
    return this.getStringAttribute('auto_enroll');
  }

  // enroll - computed: true, optional: false, required: false
  public get enroll() {
    return this.getStringAttribute('enroll');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/pcaconnectorad_template_group_access_control_entry awscc_pcaconnectorad_template_group_access_control_entry}
*/
export class DataAwsccPcaconnectoradTemplateGroupAccessControlEntry extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_pcaconnectorad_template_group_access_control_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccPcaconnectoradTemplateGroupAccessControlEntry resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccPcaconnectoradTemplateGroupAccessControlEntry to import
  * @param importFromId The id of the existing DataAwsccPcaconnectoradTemplateGroupAccessControlEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/pcaconnectorad_template_group_access_control_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccPcaconnectoradTemplateGroupAccessControlEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pcaconnectorad_template_group_access_control_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/pcaconnectorad_template_group_access_control_entry awscc_pcaconnectorad_template_group_access_control_entry} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccPcaconnectoradTemplateGroupAccessControlEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_pcaconnectorad_template_group_access_control_entry',
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

  // access_rights - computed: true, optional: false, required: false
  private _accessRights = new DataAwsccPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference(this, "access_rights");
  public get accessRights() {
    return this._accessRights;
  }

  // group_display_name - computed: true, optional: false, required: false
  public get groupDisplayName() {
    return this.getStringAttribute('group_display_name');
  }

  // group_security_identifier - computed: true, optional: false, required: false
  public get groupSecurityIdentifier() {
    return this.getStringAttribute('group_security_identifier');
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

  // template_arn - computed: true, optional: false, required: false
  public get templateArn() {
    return this.getStringAttribute('template_arn');
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
