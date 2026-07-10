// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_verified_access_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2VerifiedAccessGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_verified_access_group#id DataAwsccEc2VerifiedAccessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2VerifiedAccessGroupSseSpecification {
}

export function dataAwsccEc2VerifiedAccessGroupSseSpecificationToTerraform(struct?: DataAwsccEc2VerifiedAccessGroupSseSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VerifiedAccessGroupSseSpecificationToHclTerraform(struct?: DataAwsccEc2VerifiedAccessGroupSseSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VerifiedAccessGroupSseSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2VerifiedAccessGroupSseSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VerifiedAccessGroupSseSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_managed_key_enabled - computed: true, optional: false, required: false
  public get customerManagedKeyEnabled() {
    return this.getBooleanAttribute('customer_managed_key_enabled');
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
}
export interface DataAwsccEc2VerifiedAccessGroupTags {
}

export function dataAwsccEc2VerifiedAccessGroupTagsToTerraform(struct?: DataAwsccEc2VerifiedAccessGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2VerifiedAccessGroupTagsToHclTerraform(struct?: DataAwsccEc2VerifiedAccessGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2VerifiedAccessGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2VerifiedAccessGroupTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2VerifiedAccessGroupTags | undefined) {
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

export class DataAwsccEc2VerifiedAccessGroupTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2VerifiedAccessGroupTagsOutputReference {
    return new DataAwsccEc2VerifiedAccessGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_verified_access_group awscc_ec2_verified_access_group}
*/
export class DataAwsccEc2VerifiedAccessGroup extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_verified_access_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2VerifiedAccessGroup to import
  * @param importFromId The id of the existing DataAwsccEc2VerifiedAccessGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_verified_access_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2VerifiedAccessGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_verified_access_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_verified_access_group awscc_ec2_verified_access_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2VerifiedAccessGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2VerifiedAccessGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_verified_access_group',
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

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // policy_document - computed: true, optional: false, required: false
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }

  // policy_enabled - computed: true, optional: false, required: false
  public get policyEnabled() {
    return this.getBooleanAttribute('policy_enabled');
  }

  // sse_specification - computed: true, optional: false, required: false
  private _sseSpecification = new DataAwsccEc2VerifiedAccessGroupSseSpecificationOutputReference(this, "sse_specification");
  public get sseSpecification() {
    return this._sseSpecification;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEc2VerifiedAccessGroupTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // verified_access_group_arn - computed: true, optional: false, required: false
  public get verifiedAccessGroupArn() {
    return this.getStringAttribute('verified_access_group_arn');
  }

  // verified_access_group_id - computed: true, optional: false, required: false
  public get verifiedAccessGroupId() {
    return this.getStringAttribute('verified_access_group_id');
  }

  // verified_access_instance_id - computed: true, optional: false, required: false
  public get verifiedAccessInstanceId() {
    return this.getStringAttribute('verified_access_instance_id');
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
