// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/codeartifact_package_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCodeartifactPackageGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/codeartifact_package_group#id DataAwsccCodeartifactPackageGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream {
}

export function dataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamToTerraform(struct?: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamToHclTerraform(struct?: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repositories - computed: true, optional: false, required: false
  public get repositories() {
    return this.getListAttribute('repositories');
  }

  // restriction_mode - computed: true, optional: false, required: false
  public get restrictionMode() {
    return this.getStringAttribute('restriction_mode');
  }
}
export interface DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream {
}

export function dataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamToTerraform(struct?: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamToHclTerraform(struct?: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repositories - computed: true, optional: false, required: false
  public get repositories() {
    return this.getListAttribute('repositories');
  }

  // restriction_mode - computed: true, optional: false, required: false
  public get restrictionMode() {
    return this.getStringAttribute('restriction_mode');
  }
}
export interface DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish {
}

export function dataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishToTerraform(struct?: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishToHclTerraform(struct?: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repositories - computed: true, optional: false, required: false
  public get repositories() {
    return this.getListAttribute('repositories');
  }

  // restriction_mode - computed: true, optional: false, required: false
  public get restrictionMode() {
    return this.getStringAttribute('restriction_mode');
  }
}
export interface DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions {
}

export function dataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsToTerraform(struct?: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsToHclTerraform(struct?: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_upstream - computed: true, optional: false, required: false
  private _externalUpstream = new DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference(this, "external_upstream");
  public get externalUpstream() {
    return this._externalUpstream;
  }

  // internal_upstream - computed: true, optional: false, required: false
  private _internalUpstream = new DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference(this, "internal_upstream");
  public get internalUpstream() {
    return this._internalUpstream;
  }

  // publish - computed: true, optional: false, required: false
  private _publish = new DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference(this, "publish");
  public get publish() {
    return this._publish;
  }
}
export interface DataAwsccCodeartifactPackageGroupOriginConfiguration {
}

export function dataAwsccCodeartifactPackageGroupOriginConfigurationToTerraform(struct?: DataAwsccCodeartifactPackageGroupOriginConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodeartifactPackageGroupOriginConfigurationToHclTerraform(struct?: DataAwsccCodeartifactPackageGroupOriginConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCodeartifactPackageGroupOriginConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodeartifactPackageGroupOriginConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // restrictions - computed: true, optional: false, required: false
  private _restrictions = new DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference(this, "restrictions");
  public get restrictions() {
    return this._restrictions;
  }
}
export interface DataAwsccCodeartifactPackageGroupTags {
}

export function dataAwsccCodeartifactPackageGroupTagsToTerraform(struct?: DataAwsccCodeartifactPackageGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCodeartifactPackageGroupTagsToHclTerraform(struct?: DataAwsccCodeartifactPackageGroupTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCodeartifactPackageGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCodeartifactPackageGroupTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCodeartifactPackageGroupTags | undefined) {
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

export class DataAwsccCodeartifactPackageGroupTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCodeartifactPackageGroupTagsOutputReference {
    return new DataAwsccCodeartifactPackageGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/codeartifact_package_group awscc_codeartifact_package_group}
*/
export class DataAwsccCodeartifactPackageGroup extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_codeartifact_package_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCodeartifactPackageGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCodeartifactPackageGroup to import
  * @param importFromId The id of the existing DataAwsccCodeartifactPackageGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/codeartifact_package_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCodeartifactPackageGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codeartifact_package_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/codeartifact_package_group awscc_codeartifact_package_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCodeartifactPackageGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCodeartifactPackageGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_codeartifact_package_group',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // contact_info - computed: true, optional: false, required: false
  public get contactInfo() {
    return this.getStringAttribute('contact_info');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // domain_owner - computed: true, optional: false, required: false
  public get domainOwner() {
    return this.getStringAttribute('domain_owner');
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

  // origin_configuration - computed: true, optional: false, required: false
  private _originConfiguration = new DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference(this, "origin_configuration");
  public get originConfiguration() {
    return this._originConfiguration;
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCodeartifactPackageGroupTagsList(this, "tags", false);
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
