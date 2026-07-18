// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ResiliencehubResiliencyPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Data Location Constraint of the Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy#data_location_constraint ResiliencehubResiliencyPolicy#data_location_constraint}
  */
  readonly dataLocationConstraint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy#policy ResiliencehubResiliencyPolicy#policy}
  */
  readonly policy: ResiliencehubResiliencyPolicyPolicy;
  /**
  * Description of Resiliency Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy#policy_description ResiliencehubResiliencyPolicy#policy_description}
  */
  readonly policyDescription?: string;
  /**
  * Name of Resiliency Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy#policy_name ResiliencehubResiliencyPolicy#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy#tags ResiliencehubResiliencyPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Resiliency Policy Tier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy#tier ResiliencehubResiliencyPolicy#tier}
  */
  readonly tier: string;
}
export interface ResiliencehubResiliencyPolicyPolicyAz {
  /**
  * RPO in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}
  */
  readonly rpoInSecs: number;
  /**
  * RTO in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}
  */
  readonly rtoInSecs: number;
}

export function resiliencehubResiliencyPolicyPolicyAzToTerraform(struct?: ResiliencehubResiliencyPolicyPolicyAz | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rpo_in_secs: cdktn.numberToTerraform(struct!.rpoInSecs),
    rto_in_secs: cdktn.numberToTerraform(struct!.rtoInSecs),
  }
}


export function resiliencehubResiliencyPolicyPolicyAzToHclTerraform(struct?: ResiliencehubResiliencyPolicyPolicyAz | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rpo_in_secs: {
      value: cdktn.numberToHclTerraform(struct!.rpoInSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rto_in_secs: {
      value: cdktn.numberToHclTerraform(struct!.rtoInSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResiliencehubResiliencyPolicyPolicyAzOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResiliencehubResiliencyPolicyPolicyAz | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rpoInSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpoInSecs = this._rpoInSecs;
    }
    if (this._rtoInSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtoInSecs = this._rtoInSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResiliencehubResiliencyPolicyPolicyAz | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rpoInSecs = undefined;
      this._rtoInSecs = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rpoInSecs = value.rpoInSecs;
      this._rtoInSecs = value.rtoInSecs;
    }
  }

  // rpo_in_secs - computed: false, optional: false, required: true
  private _rpoInSecs?: number; 
  public get rpoInSecs() {
    return this.getNumberAttribute('rpo_in_secs');
  }
  public set rpoInSecs(value: number) {
    this._rpoInSecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInSecsInput() {
    return this._rpoInSecs;
  }

  // rto_in_secs - computed: false, optional: false, required: true
  private _rtoInSecs?: number; 
  public get rtoInSecs() {
    return this.getNumberAttribute('rto_in_secs');
  }
  public set rtoInSecs(value: number) {
    this._rtoInSecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rtoInSecsInput() {
    return this._rtoInSecs;
  }
}
export interface ResiliencehubResiliencyPolicyPolicyHardware {
  /**
  * RPO in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}
  */
  readonly rpoInSecs: number;
  /**
  * RTO in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}
  */
  readonly rtoInSecs: number;
}

export function resiliencehubResiliencyPolicyPolicyHardwareToTerraform(struct?: ResiliencehubResiliencyPolicyPolicyHardware | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rpo_in_secs: cdktn.numberToTerraform(struct!.rpoInSecs),
    rto_in_secs: cdktn.numberToTerraform(struct!.rtoInSecs),
  }
}


export function resiliencehubResiliencyPolicyPolicyHardwareToHclTerraform(struct?: ResiliencehubResiliencyPolicyPolicyHardware | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rpo_in_secs: {
      value: cdktn.numberToHclTerraform(struct!.rpoInSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rto_in_secs: {
      value: cdktn.numberToHclTerraform(struct!.rtoInSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResiliencehubResiliencyPolicyPolicyHardwareOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResiliencehubResiliencyPolicyPolicyHardware | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rpoInSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpoInSecs = this._rpoInSecs;
    }
    if (this._rtoInSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtoInSecs = this._rtoInSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResiliencehubResiliencyPolicyPolicyHardware | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rpoInSecs = undefined;
      this._rtoInSecs = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rpoInSecs = value.rpoInSecs;
      this._rtoInSecs = value.rtoInSecs;
    }
  }

  // rpo_in_secs - computed: false, optional: false, required: true
  private _rpoInSecs?: number; 
  public get rpoInSecs() {
    return this.getNumberAttribute('rpo_in_secs');
  }
  public set rpoInSecs(value: number) {
    this._rpoInSecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInSecsInput() {
    return this._rpoInSecs;
  }

  // rto_in_secs - computed: false, optional: false, required: true
  private _rtoInSecs?: number; 
  public get rtoInSecs() {
    return this.getNumberAttribute('rto_in_secs');
  }
  public set rtoInSecs(value: number) {
    this._rtoInSecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rtoInSecsInput() {
    return this._rtoInSecs;
  }
}
export interface ResiliencehubResiliencyPolicyPolicyRegion {
  /**
  * RPO in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}
  */
  readonly rpoInSecs?: number;
  /**
  * RTO in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}
  */
  readonly rtoInSecs?: number;
}

export function resiliencehubResiliencyPolicyPolicyRegionToTerraform(struct?: ResiliencehubResiliencyPolicyPolicyRegion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rpo_in_secs: cdktn.numberToTerraform(struct!.rpoInSecs),
    rto_in_secs: cdktn.numberToTerraform(struct!.rtoInSecs),
  }
}


export function resiliencehubResiliencyPolicyPolicyRegionToHclTerraform(struct?: ResiliencehubResiliencyPolicyPolicyRegion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rpo_in_secs: {
      value: cdktn.numberToHclTerraform(struct!.rpoInSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rto_in_secs: {
      value: cdktn.numberToHclTerraform(struct!.rtoInSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResiliencehubResiliencyPolicyPolicyRegionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResiliencehubResiliencyPolicyPolicyRegion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rpoInSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpoInSecs = this._rpoInSecs;
    }
    if (this._rtoInSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtoInSecs = this._rtoInSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResiliencehubResiliencyPolicyPolicyRegion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rpoInSecs = undefined;
      this._rtoInSecs = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rpoInSecs = value.rpoInSecs;
      this._rtoInSecs = value.rtoInSecs;
    }
  }

  // rpo_in_secs - computed: true, optional: true, required: false
  private _rpoInSecs?: number; 
  public get rpoInSecs() {
    return this.getNumberAttribute('rpo_in_secs');
  }
  public set rpoInSecs(value: number) {
    this._rpoInSecs = value;
  }
  public resetRpoInSecs() {
    this._rpoInSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInSecsInput() {
    return this._rpoInSecs;
  }

  // rto_in_secs - computed: true, optional: true, required: false
  private _rtoInSecs?: number; 
  public get rtoInSecs() {
    return this.getNumberAttribute('rto_in_secs');
  }
  public set rtoInSecs(value: number) {
    this._rtoInSecs = value;
  }
  public resetRtoInSecs() {
    this._rtoInSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtoInSecsInput() {
    return this._rtoInSecs;
  }
}
export interface ResiliencehubResiliencyPolicyPolicySoftware {
  /**
  * RPO in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}
  */
  readonly rpoInSecs: number;
  /**
  * RTO in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}
  */
  readonly rtoInSecs: number;
}

export function resiliencehubResiliencyPolicyPolicySoftwareToTerraform(struct?: ResiliencehubResiliencyPolicyPolicySoftware | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rpo_in_secs: cdktn.numberToTerraform(struct!.rpoInSecs),
    rto_in_secs: cdktn.numberToTerraform(struct!.rtoInSecs),
  }
}


export function resiliencehubResiliencyPolicyPolicySoftwareToHclTerraform(struct?: ResiliencehubResiliencyPolicyPolicySoftware | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rpo_in_secs: {
      value: cdktn.numberToHclTerraform(struct!.rpoInSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rto_in_secs: {
      value: cdktn.numberToHclTerraform(struct!.rtoInSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResiliencehubResiliencyPolicyPolicySoftwareOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResiliencehubResiliencyPolicyPolicySoftware | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rpoInSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpoInSecs = this._rpoInSecs;
    }
    if (this._rtoInSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtoInSecs = this._rtoInSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResiliencehubResiliencyPolicyPolicySoftware | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rpoInSecs = undefined;
      this._rtoInSecs = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rpoInSecs = value.rpoInSecs;
      this._rtoInSecs = value.rtoInSecs;
    }
  }

  // rpo_in_secs - computed: false, optional: false, required: true
  private _rpoInSecs?: number; 
  public get rpoInSecs() {
    return this.getNumberAttribute('rpo_in_secs');
  }
  public set rpoInSecs(value: number) {
    this._rpoInSecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInSecsInput() {
    return this._rpoInSecs;
  }

  // rto_in_secs - computed: false, optional: false, required: true
  private _rtoInSecs?: number; 
  public get rtoInSecs() {
    return this.getNumberAttribute('rto_in_secs');
  }
  public set rtoInSecs(value: number) {
    this._rtoInSecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rtoInSecsInput() {
    return this._rtoInSecs;
  }
}
export interface ResiliencehubResiliencyPolicyPolicy {
  /**
  * Failure Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy#az ResiliencehubResiliencyPolicy#az}
  */
  readonly az: ResiliencehubResiliencyPolicyPolicyAz;
  /**
  * Failure Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy#hardware ResiliencehubResiliencyPolicy#hardware}
  */
  readonly hardware: ResiliencehubResiliencyPolicyPolicyHardware;
  /**
  * Failure Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy#region ResiliencehubResiliencyPolicy#region}
  */
  readonly region?: ResiliencehubResiliencyPolicyPolicyRegion;
  /**
  * Failure Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy#software ResiliencehubResiliencyPolicy#software}
  */
  readonly softwareAttribute: ResiliencehubResiliencyPolicyPolicySoftware;
}

export function resiliencehubResiliencyPolicyPolicyToTerraform(struct?: ResiliencehubResiliencyPolicyPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    az: resiliencehubResiliencyPolicyPolicyAzToTerraform(struct!.az),
    hardware: resiliencehubResiliencyPolicyPolicyHardwareToTerraform(struct!.hardware),
    region: resiliencehubResiliencyPolicyPolicyRegionToTerraform(struct!.region),
    software: resiliencehubResiliencyPolicyPolicySoftwareToTerraform(struct!.softwareAttribute),
  }
}


export function resiliencehubResiliencyPolicyPolicyToHclTerraform(struct?: ResiliencehubResiliencyPolicyPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    az: {
      value: resiliencehubResiliencyPolicyPolicyAzToHclTerraform(struct!.az),
      isBlock: true,
      type: "struct",
      storageClassType: "ResiliencehubResiliencyPolicyPolicyAz",
    },
    hardware: {
      value: resiliencehubResiliencyPolicyPolicyHardwareToHclTerraform(struct!.hardware),
      isBlock: true,
      type: "struct",
      storageClassType: "ResiliencehubResiliencyPolicyPolicyHardware",
    },
    region: {
      value: resiliencehubResiliencyPolicyPolicyRegionToHclTerraform(struct!.region),
      isBlock: true,
      type: "struct",
      storageClassType: "ResiliencehubResiliencyPolicyPolicyRegion",
    },
    software: {
      value: resiliencehubResiliencyPolicyPolicySoftwareToHclTerraform(struct!.softwareAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "ResiliencehubResiliencyPolicyPolicySoftware",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResiliencehubResiliencyPolicyPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResiliencehubResiliencyPolicyPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._az?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.az = this._az?.internalValue;
    }
    if (this._hardware?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardware = this._hardware?.internalValue;
    }
    if (this._region?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region?.internalValue;
    }
    if (this._software?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareAttribute = this._software?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResiliencehubResiliencyPolicyPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._az.internalValue = undefined;
      this._hardware.internalValue = undefined;
      this._region.internalValue = undefined;
      this._software.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._az.internalValue = value.az;
      this._hardware.internalValue = value.hardware;
      this._region.internalValue = value.region;
      this._software.internalValue = value.softwareAttribute;
    }
  }

  // az - computed: false, optional: false, required: true
  private _az = new ResiliencehubResiliencyPolicyPolicyAzOutputReference(this, "az");
  public get az() {
    return this._az;
  }
  public putAz(value: ResiliencehubResiliencyPolicyPolicyAz) {
    this._az.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azInput() {
    return this._az.internalValue;
  }

  // hardware - computed: false, optional: false, required: true
  private _hardware = new ResiliencehubResiliencyPolicyPolicyHardwareOutputReference(this, "hardware");
  public get hardware() {
    return this._hardware;
  }
  public putHardware(value: ResiliencehubResiliencyPolicyPolicyHardware) {
    this._hardware.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareInput() {
    return this._hardware.internalValue;
  }

  // region - computed: true, optional: true, required: false
  private _region = new ResiliencehubResiliencyPolicyPolicyRegionOutputReference(this, "region");
  public get region() {
    return this._region;
  }
  public putRegion(value: ResiliencehubResiliencyPolicyPolicyRegion) {
    this._region.internalValue = value;
  }
  public resetRegion() {
    this._region.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }

  // software - computed: false, optional: false, required: true
  private _software = new ResiliencehubResiliencyPolicyPolicySoftwareOutputReference(this, "software");
  public get softwareAttribute() {
    return this._software;
  }
  public putSoftwareAttribute(value: ResiliencehubResiliencyPolicyPolicySoftware) {
    this._software.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareAttributeInput() {
    return this._software.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy awscc_resiliencehub_resiliency_policy}
*/
export class ResiliencehubResiliencyPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_resiliencehub_resiliency_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ResiliencehubResiliencyPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResiliencehubResiliencyPolicy to import
  * @param importFromId The id of the existing ResiliencehubResiliencyPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResiliencehubResiliencyPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_resiliencehub_resiliency_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/resiliencehub_resiliency_policy awscc_resiliencehub_resiliency_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResiliencehubResiliencyPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ResiliencehubResiliencyPolicyConfig) {
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
    this._dataLocationConstraint = config.dataLocationConstraint;
    this._policy.internalValue = config.policy;
    this._policyDescription = config.policyDescription;
    this._policyName = config.policyName;
    this._tags = config.tags;
    this._tier = config.tier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_location_constraint - computed: true, optional: true, required: false
  private _dataLocationConstraint?: string; 
  public get dataLocationConstraint() {
    return this.getStringAttribute('data_location_constraint');
  }
  public set dataLocationConstraint(value: string) {
    this._dataLocationConstraint = value;
  }
  public resetDataLocationConstraint() {
    this._dataLocationConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLocationConstraintInput() {
    return this._dataLocationConstraint;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy - computed: false, optional: false, required: true
  private _policy = new ResiliencehubResiliencyPolicyPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: ResiliencehubResiliencyPolicyPolicy) {
    this._policy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // policy_arn - computed: true, optional: false, required: false
  public get policyArn() {
    return this.getStringAttribute('policy_arn');
  }

  // policy_description - computed: true, optional: true, required: false
  private _policyDescription?: string; 
  public get policyDescription() {
    return this.getStringAttribute('policy_description');
  }
  public set policyDescription(value: string) {
    this._policyDescription = value;
  }
  public resetPolicyDescription() {
    this._policyDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDescriptionInput() {
    return this._policyDescription;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_location_constraint: cdktn.stringToTerraform(this._dataLocationConstraint),
      policy: resiliencehubResiliencyPolicyPolicyToTerraform(this._policy.internalValue),
      policy_description: cdktn.stringToTerraform(this._policyDescription),
      policy_name: cdktn.stringToTerraform(this._policyName),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tier: cdktn.stringToTerraform(this._tier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_location_constraint: {
        value: cdktn.stringToHclTerraform(this._dataLocationConstraint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: resiliencehubResiliencyPolicyPolicyToHclTerraform(this._policy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResiliencehubResiliencyPolicyPolicy",
      },
      policy_description: {
        value: cdktn.stringToHclTerraform(this._policyDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_name: {
        value: cdktn.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tier: {
        value: cdktn.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
