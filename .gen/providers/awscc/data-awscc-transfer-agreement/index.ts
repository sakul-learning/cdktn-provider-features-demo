// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/transfer_agreement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccTransferAgreementConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/transfer_agreement#id DataAwsccTransferAgreement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccTransferAgreementCustomDirectories {
}

export function dataAwsccTransferAgreementCustomDirectoriesToTerraform(struct?: DataAwsccTransferAgreementCustomDirectories): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferAgreementCustomDirectoriesToHclTerraform(struct?: DataAwsccTransferAgreementCustomDirectories): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferAgreementCustomDirectoriesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccTransferAgreementCustomDirectories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferAgreementCustomDirectories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failed_files_directory - computed: true, optional: false, required: false
  public get failedFilesDirectory() {
    return this.getStringAttribute('failed_files_directory');
  }

  // mdn_files_directory - computed: true, optional: false, required: false
  public get mdnFilesDirectory() {
    return this.getStringAttribute('mdn_files_directory');
  }

  // payload_files_directory - computed: true, optional: false, required: false
  public get payloadFilesDirectory() {
    return this.getStringAttribute('payload_files_directory');
  }

  // status_files_directory - computed: true, optional: false, required: false
  public get statusFilesDirectory() {
    return this.getStringAttribute('status_files_directory');
  }

  // temporary_files_directory - computed: true, optional: false, required: false
  public get temporaryFilesDirectory() {
    return this.getStringAttribute('temporary_files_directory');
  }
}
export interface DataAwsccTransferAgreementTags {
}

export function dataAwsccTransferAgreementTagsToTerraform(struct?: DataAwsccTransferAgreementTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccTransferAgreementTagsToHclTerraform(struct?: DataAwsccTransferAgreementTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccTransferAgreementTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccTransferAgreementTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccTransferAgreementTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccTransferAgreementTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccTransferAgreementTagsOutputReference {
    return new DataAwsccTransferAgreementTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/transfer_agreement awscc_transfer_agreement}
*/
export class DataAwsccTransferAgreement extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_transfer_agreement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccTransferAgreement resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccTransferAgreement to import
  * @param importFromId The id of the existing DataAwsccTransferAgreement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/transfer_agreement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccTransferAgreement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_transfer_agreement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/transfer_agreement awscc_transfer_agreement} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccTransferAgreementConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccTransferAgreementConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_transfer_agreement',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_role - computed: true, optional: false, required: false
  public get accessRole() {
    return this.getStringAttribute('access_role');
  }

  // agreement_id - computed: true, optional: false, required: false
  public get agreementId() {
    return this.getStringAttribute('agreement_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // base_directory - computed: true, optional: false, required: false
  public get baseDirectory() {
    return this.getStringAttribute('base_directory');
  }

  // custom_directories - computed: true, optional: false, required: false
  private _customDirectories = new DataAwsccTransferAgreementCustomDirectoriesOutputReference(this, "custom_directories");
  public get customDirectories() {
    return this._customDirectories;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enforce_message_signing - computed: true, optional: false, required: false
  public get enforceMessageSigning() {
    return this.getStringAttribute('enforce_message_signing');
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

  // local_profile_id - computed: true, optional: false, required: false
  public get localProfileId() {
    return this.getStringAttribute('local_profile_id');
  }

  // partner_profile_id - computed: true, optional: false, required: false
  public get partnerProfileId() {
    return this.getStringAttribute('partner_profile_id');
  }

  // preserve_filename - computed: true, optional: false, required: false
  public get preserveFilename() {
    return this.getStringAttribute('preserve_filename');
  }

  // server_id - computed: true, optional: false, required: false
  public get serverId() {
    return this.getStringAttribute('server_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccTransferAgreementTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
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
