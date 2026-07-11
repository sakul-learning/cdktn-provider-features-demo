// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/route53recoveryreadiness_resource_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccRoute53RecoveryreadinessResourceSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/route53recoveryreadiness_resource_set#id DataAwsccRoute53RecoveryreadinessResourceSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource {
}

export function dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToHclTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}
export interface DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource {
}

export function dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToHclTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // record_set_id - computed: true, optional: false, required: false
  public get recordSetId() {
    return this.getStringAttribute('record_set_id');
  }
}
export interface DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource {
}

export function dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToHclTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nlb_resource - computed: true, optional: false, required: false
  private _nlbResource = new DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference(this, "nlb_resource");
  public get nlbResource() {
    return this._nlbResource;
  }

  // r53_resource - computed: true, optional: false, required: false
  private _r53Resource = new DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference(this, "r53_resource");
  public get r53Resource() {
    return this._r53Resource;
  }
}
export interface DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResource {
}

export function dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceToHclTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // hosted_zone_arn - computed: true, optional: false, required: false
  public get hostedZoneArn() {
    return this.getStringAttribute('hosted_zone_arn');
  }

  // record_set_id - computed: true, optional: false, required: false
  public get recordSetId() {
    return this.getStringAttribute('record_set_id');
  }

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
  }

  // target_resource - computed: true, optional: false, required: false
  private _targetResource = new DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference(this, "target_resource");
  public get targetResource() {
    return this._targetResource;
  }
}
export interface DataAwsccRoute53RecoveryreadinessResourceSetResources {
}

export function dataAwsccRoute53RecoveryreadinessResourceSetResourcesToTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRoute53RecoveryreadinessResourceSetResourcesToHclTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRoute53RecoveryreadinessResourceSetResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRoute53RecoveryreadinessResourceSetResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // dns_target_resource - computed: true, optional: false, required: false
  private _dnsTargetResource = new DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference(this, "dns_target_resource");
  public get dnsTargetResource() {
    return this._dnsTargetResource;
  }

  // readiness_scopes - computed: true, optional: false, required: false
  public get readinessScopes() {
    return this.getListAttribute('readiness_scopes');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
}

export class DataAwsccRoute53RecoveryreadinessResourceSetResourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference {
    return new DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRoute53RecoveryreadinessResourceSetTags {
}

export function dataAwsccRoute53RecoveryreadinessResourceSetTagsToTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRoute53RecoveryreadinessResourceSetTagsToHclTerraform(struct?: DataAwsccRoute53RecoveryreadinessResourceSetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRoute53RecoveryreadinessResourceSetTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRoute53RecoveryreadinessResourceSetTags | undefined) {
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

export class DataAwsccRoute53RecoveryreadinessResourceSetTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference {
    return new DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/route53recoveryreadiness_resource_set awscc_route53recoveryreadiness_resource_set}
*/
export class DataAwsccRoute53RecoveryreadinessResourceSet extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_route53recoveryreadiness_resource_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccRoute53RecoveryreadinessResourceSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccRoute53RecoveryreadinessResourceSet to import
  * @param importFromId The id of the existing DataAwsccRoute53RecoveryreadinessResourceSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/route53recoveryreadiness_resource_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccRoute53RecoveryreadinessResourceSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53recoveryreadiness_resource_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/route53recoveryreadiness_resource_set awscc_route53recoveryreadiness_resource_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRoute53RecoveryreadinessResourceSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRoute53RecoveryreadinessResourceSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53recoveryreadiness_resource_set',
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

  // resource_set_arn - computed: true, optional: false, required: false
  public get resourceSetArn() {
    return this.getStringAttribute('resource_set_arn');
  }

  // resource_set_name - computed: true, optional: false, required: false
  public get resourceSetName() {
    return this.getStringAttribute('resource_set_name');
  }

  // resource_set_type - computed: true, optional: false, required: false
  public get resourceSetType() {
    return this.getStringAttribute('resource_set_type');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataAwsccRoute53RecoveryreadinessResourceSetResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccRoute53RecoveryreadinessResourceSetTagsList(this, "tags", false);
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
