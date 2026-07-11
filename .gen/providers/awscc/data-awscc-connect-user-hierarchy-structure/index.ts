// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/connect_user_hierarchy_structure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccConnectUserHierarchyStructureConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/connect_user_hierarchy_structure#id DataAwsccConnectUserHierarchyStructure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive {
}

export function dataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveToTerraform(struct?: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveToHclTerraform(struct?: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hierarchy_level_arn - computed: true, optional: false, required: false
  public get hierarchyLevelArn() {
    return this.getStringAttribute('hierarchy_level_arn');
  }

  // hierarchy_level_id - computed: true, optional: false, required: false
  public get hierarchyLevelId() {
    return this.getStringAttribute('hierarchy_level_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour {
}

export function dataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourToTerraform(struct?: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourToHclTerraform(struct?: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFour | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hierarchy_level_arn - computed: true, optional: false, required: false
  public get hierarchyLevelArn() {
    return this.getStringAttribute('hierarchy_level_arn');
  }

  // hierarchy_level_id - computed: true, optional: false, required: false
  public get hierarchyLevelId() {
    return this.getStringAttribute('hierarchy_level_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne {
}

export function dataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneToTerraform(struct?: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneToHclTerraform(struct?: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOne | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hierarchy_level_arn - computed: true, optional: false, required: false
  public get hierarchyLevelArn() {
    return this.getStringAttribute('hierarchy_level_arn');
  }

  // hierarchy_level_id - computed: true, optional: false, required: false
  public get hierarchyLevelId() {
    return this.getStringAttribute('hierarchy_level_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree {
}

export function dataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeToTerraform(struct?: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeToHclTerraform(struct?: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThree | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hierarchy_level_arn - computed: true, optional: false, required: false
  public get hierarchyLevelArn() {
    return this.getStringAttribute('hierarchy_level_arn');
  }

  // hierarchy_level_id - computed: true, optional: false, required: false
  public get hierarchyLevelId() {
    return this.getStringAttribute('hierarchy_level_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo {
}

export function dataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoToTerraform(struct?: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoToHclTerraform(struct?: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hierarchy_level_arn - computed: true, optional: false, required: false
  public get hierarchyLevelArn() {
    return this.getStringAttribute('hierarchy_level_arn');
  }

  // hierarchy_level_id - computed: true, optional: false, required: false
  public get hierarchyLevelId() {
    return this.getStringAttribute('hierarchy_level_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAwsccConnectUserHierarchyStructureUserHierarchyStructure {
}

export function dataAwsccConnectUserHierarchyStructureUserHierarchyStructureToTerraform(struct?: DataAwsccConnectUserHierarchyStructureUserHierarchyStructure): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectUserHierarchyStructureUserHierarchyStructureToHclTerraform(struct?: DataAwsccConnectUserHierarchyStructureUserHierarchyStructure): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectUserHierarchyStructureUserHierarchyStructure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectUserHierarchyStructureUserHierarchyStructure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level_five - computed: true, optional: false, required: false
  private _levelFive = new DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference(this, "level_five");
  public get levelFive() {
    return this._levelFive;
  }

  // level_four - computed: true, optional: false, required: false
  private _levelFour = new DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference(this, "level_four");
  public get levelFour() {
    return this._levelFour;
  }

  // level_one - computed: true, optional: false, required: false
  private _levelOne = new DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference(this, "level_one");
  public get levelOne() {
    return this._levelOne;
  }

  // level_three - computed: true, optional: false, required: false
  private _levelThree = new DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference(this, "level_three");
  public get levelThree() {
    return this._levelThree;
  }

  // level_two - computed: true, optional: false, required: false
  private _levelTwo = new DataAwsccConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference(this, "level_two");
  public get levelTwo() {
    return this._levelTwo;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/connect_user_hierarchy_structure awscc_connect_user_hierarchy_structure}
*/
export class DataAwsccConnectUserHierarchyStructure extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_connect_user_hierarchy_structure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccConnectUserHierarchyStructure resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccConnectUserHierarchyStructure to import
  * @param importFromId The id of the existing DataAwsccConnectUserHierarchyStructure that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/connect_user_hierarchy_structure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccConnectUserHierarchyStructure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_user_hierarchy_structure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/connect_user_hierarchy_structure awscc_connect_user_hierarchy_structure} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccConnectUserHierarchyStructureConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccConnectUserHierarchyStructureConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_connect_user_hierarchy_structure',
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

  // instance_arn - computed: true, optional: false, required: false
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }

  // user_hierarchy_structure - computed: true, optional: false, required: false
  private _userHierarchyStructure = new DataAwsccConnectUserHierarchyStructureUserHierarchyStructureOutputReference(this, "user_hierarchy_structure");
  public get userHierarchyStructure() {
    return this._userHierarchyStructure;
  }

  // user_hierarchy_structure_arn - computed: true, optional: false, required: false
  public get userHierarchyStructureArn() {
    return this.getStringAttribute('user_hierarchy_structure_arn');
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
