// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/resiliencehub_resiliency_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccResiliencehubResiliencyPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/resiliencehub_resiliency_policy#id DataAwsccResiliencehubResiliencyPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccResiliencehubResiliencyPolicyPolicyAz {
}

export function dataAwsccResiliencehubResiliencyPolicyPolicyAzToTerraform(struct?: DataAwsccResiliencehubResiliencyPolicyPolicyAz): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubResiliencyPolicyPolicyAzToHclTerraform(struct?: DataAwsccResiliencehubResiliencyPolicyPolicyAz): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubResiliencyPolicyPolicyAz | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubResiliencyPolicyPolicyAz | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rpo_in_secs - computed: true, optional: false, required: false
  public get rpoInSecs() {
    return this.getNumberAttribute('rpo_in_secs');
  }

  // rto_in_secs - computed: true, optional: false, required: false
  public get rtoInSecs() {
    return this.getNumberAttribute('rto_in_secs');
  }
}
export interface DataAwsccResiliencehubResiliencyPolicyPolicyHardware {
}

export function dataAwsccResiliencehubResiliencyPolicyPolicyHardwareToTerraform(struct?: DataAwsccResiliencehubResiliencyPolicyPolicyHardware): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubResiliencyPolicyPolicyHardwareToHclTerraform(struct?: DataAwsccResiliencehubResiliencyPolicyPolicyHardware): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubResiliencyPolicyPolicyHardware | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubResiliencyPolicyPolicyHardware | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rpo_in_secs - computed: true, optional: false, required: false
  public get rpoInSecs() {
    return this.getNumberAttribute('rpo_in_secs');
  }

  // rto_in_secs - computed: true, optional: false, required: false
  public get rtoInSecs() {
    return this.getNumberAttribute('rto_in_secs');
  }
}
export interface DataAwsccResiliencehubResiliencyPolicyPolicyRegion {
}

export function dataAwsccResiliencehubResiliencyPolicyPolicyRegionToTerraform(struct?: DataAwsccResiliencehubResiliencyPolicyPolicyRegion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubResiliencyPolicyPolicyRegionToHclTerraform(struct?: DataAwsccResiliencehubResiliencyPolicyPolicyRegion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubResiliencyPolicyPolicyRegion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubResiliencyPolicyPolicyRegion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rpo_in_secs - computed: true, optional: false, required: false
  public get rpoInSecs() {
    return this.getNumberAttribute('rpo_in_secs');
  }

  // rto_in_secs - computed: true, optional: false, required: false
  public get rtoInSecs() {
    return this.getNumberAttribute('rto_in_secs');
  }
}
export interface DataAwsccResiliencehubResiliencyPolicyPolicySoftware {
}

export function dataAwsccResiliencehubResiliencyPolicyPolicySoftwareToTerraform(struct?: DataAwsccResiliencehubResiliencyPolicyPolicySoftware): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubResiliencyPolicyPolicySoftwareToHclTerraform(struct?: DataAwsccResiliencehubResiliencyPolicyPolicySoftware): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubResiliencyPolicyPolicySoftware | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubResiliencyPolicyPolicySoftware | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rpo_in_secs - computed: true, optional: false, required: false
  public get rpoInSecs() {
    return this.getNumberAttribute('rpo_in_secs');
  }

  // rto_in_secs - computed: true, optional: false, required: false
  public get rtoInSecs() {
    return this.getNumberAttribute('rto_in_secs');
  }
}
export interface DataAwsccResiliencehubResiliencyPolicyPolicy {
}

export function dataAwsccResiliencehubResiliencyPolicyPolicyToTerraform(struct?: DataAwsccResiliencehubResiliencyPolicyPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubResiliencyPolicyPolicyToHclTerraform(struct?: DataAwsccResiliencehubResiliencyPolicyPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubResiliencyPolicyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubResiliencyPolicyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // az - computed: true, optional: false, required: false
  private _az = new DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference(this, "az");
  public get az() {
    return this._az;
  }

  // hardware - computed: true, optional: false, required: false
  private _hardware = new DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference(this, "hardware");
  public get hardware() {
    return this._hardware;
  }

  // region - computed: true, optional: false, required: false
  private _region = new DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference(this, "region");
  public get region() {
    return this._region;
  }

  // software - computed: true, optional: false, required: false
  private _software = new DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference(this, "software");
  public get softwareAttribute() {
    return this._software;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/resiliencehub_resiliency_policy awscc_resiliencehub_resiliency_policy}
*/
export class DataAwsccResiliencehubResiliencyPolicy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_resiliencehub_resiliency_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccResiliencehubResiliencyPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccResiliencehubResiliencyPolicy to import
  * @param importFromId The id of the existing DataAwsccResiliencehubResiliencyPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/resiliencehub_resiliency_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccResiliencehubResiliencyPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_resiliencehub_resiliency_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/resiliencehub_resiliency_policy awscc_resiliencehub_resiliency_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccResiliencehubResiliencyPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccResiliencehubResiliencyPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_resiliencehub_resiliency_policy',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
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

  // data_location_constraint - computed: true, optional: false, required: false
  public get dataLocationConstraint() {
    return this.getStringAttribute('data_location_constraint');
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

  // policy - computed: true, optional: false, required: false
  private _policy = new DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }

  // policy_arn - computed: true, optional: false, required: false
  public get policyArn() {
    return this.getStringAttribute('policy_arn');
  }

  // policy_description - computed: true, optional: false, required: false
  public get policyDescription() {
    return this.getStringAttribute('policy_description');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
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
