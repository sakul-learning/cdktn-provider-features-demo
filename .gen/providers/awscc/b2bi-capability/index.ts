// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface B2BiCapabilityConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#configuration B2BiCapability#configuration}
  */
  readonly configuration: B2BiCapabilityConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#instructions_documents B2BiCapability#instructions_documents}
  */
  readonly instructionsDocuments?: B2BiCapabilityInstructionsDocuments[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#name B2BiCapability#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#tags B2BiCapability#tags}
  */
  readonly tags?: B2BiCapabilityTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#type B2BiCapability#type}
  */
  readonly type: string;
}
export interface B2BiCapabilityConfigurationEdiInputLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#bucket_name B2BiCapability#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#key B2BiCapability#key}
  */
  readonly key?: string;
}

export function b2BiCapabilityConfigurationEdiInputLocationToTerraform(struct?: B2BiCapabilityConfigurationEdiInputLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function b2BiCapabilityConfigurationEdiInputLocationToHclTerraform(struct?: B2BiCapabilityConfigurationEdiInputLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiCapabilityConfigurationEdiInputLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiCapabilityConfigurationEdiInputLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiCapabilityConfigurationEdiInputLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._key = value.key;
    }
  }

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string;
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string;
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface B2BiCapabilityConfigurationEdiOutputLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#bucket_name B2BiCapability#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#key B2BiCapability#key}
  */
  readonly key?: string;
}

export function b2BiCapabilityConfigurationEdiOutputLocationToTerraform(struct?: B2BiCapabilityConfigurationEdiOutputLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function b2BiCapabilityConfigurationEdiOutputLocationToHclTerraform(struct?: B2BiCapabilityConfigurationEdiOutputLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiCapabilityConfigurationEdiOutputLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiCapabilityConfigurationEdiOutputLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiCapabilityConfigurationEdiOutputLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._key = value.key;
    }
  }

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string;
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string;
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface B2BiCapabilityConfigurationEdiTypeX12Details {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#transaction_set B2BiCapability#transaction_set}
  */
  readonly transactionSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#version B2BiCapability#version}
  */
  readonly version?: string;
}

export function b2BiCapabilityConfigurationEdiTypeX12DetailsToTerraform(struct?: B2BiCapabilityConfigurationEdiTypeX12Details | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    transaction_set: cdktn.stringToTerraform(struct!.transactionSet),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function b2BiCapabilityConfigurationEdiTypeX12DetailsToHclTerraform(struct?: B2BiCapabilityConfigurationEdiTypeX12Details | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    transaction_set: {
      value: cdktn.stringToHclTerraform(struct!.transactionSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiCapabilityConfigurationEdiTypeX12Details | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transactionSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionSet = this._transactionSet;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiCapabilityConfigurationEdiTypeX12Details | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transactionSet = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transactionSet = value.transactionSet;
      this._version = value.version;
    }
  }

  // transaction_set - computed: true, optional: true, required: false
  private _transactionSet?: string;
  public get transactionSet() {
    return this.getStringAttribute('transaction_set');
  }
  public set transactionSet(value: string) {
    this._transactionSet = value;
  }
  public resetTransactionSet() {
    this._transactionSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionSetInput() {
    return this._transactionSet;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface B2BiCapabilityConfigurationEdiType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#x12_details B2BiCapability#x12_details}
  */
  readonly x12Details?: B2BiCapabilityConfigurationEdiTypeX12Details;
}

export function b2BiCapabilityConfigurationEdiTypeToTerraform(struct?: B2BiCapabilityConfigurationEdiType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    x12_details: b2BiCapabilityConfigurationEdiTypeX12DetailsToTerraform(struct!.x12Details),
  }
}


export function b2BiCapabilityConfigurationEdiTypeToHclTerraform(struct?: B2BiCapabilityConfigurationEdiType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    x12_details: {
      value: b2BiCapabilityConfigurationEdiTypeX12DetailsToHclTerraform(struct!.x12Details),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiCapabilityConfigurationEdiTypeX12Details",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiCapabilityConfigurationEdiTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiCapabilityConfigurationEdiType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x12Details?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.x12Details = this._x12Details?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiCapabilityConfigurationEdiType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._x12Details.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._x12Details.internalValue = value.x12Details;
    }
  }

  // x12_details - computed: true, optional: true, required: false
  private _x12Details = new B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference(this, "x12_details");
  public get x12Details() {
    return this._x12Details;
  }
  public putX12Details(value: B2BiCapabilityConfigurationEdiTypeX12Details) {
    this._x12Details.internalValue = value;
  }
  public resetX12Details() {
    this._x12Details.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x12DetailsInput() {
    return this._x12Details.internalValue;
  }
}
export interface B2BiCapabilityConfigurationEdi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#capability_direction B2BiCapability#capability_direction}
  */
  readonly capabilityDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#input_location B2BiCapability#input_location}
  */
  readonly inputLocation?: B2BiCapabilityConfigurationEdiInputLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#output_location B2BiCapability#output_location}
  */
  readonly outputLocation?: B2BiCapabilityConfigurationEdiOutputLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#transformer_id B2BiCapability#transformer_id}
  */
  readonly transformerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#type B2BiCapability#type}
  */
  readonly type?: B2BiCapabilityConfigurationEdiType;
}

export function b2BiCapabilityConfigurationEdiToTerraform(struct?: B2BiCapabilityConfigurationEdi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capability_direction: cdktn.stringToTerraform(struct!.capabilityDirection),
    input_location: b2BiCapabilityConfigurationEdiInputLocationToTerraform(struct!.inputLocation),
    output_location: b2BiCapabilityConfigurationEdiOutputLocationToTerraform(struct!.outputLocation),
    transformer_id: cdktn.stringToTerraform(struct!.transformerId),
    type: b2BiCapabilityConfigurationEdiTypeToTerraform(struct!.type),
  }
}


export function b2BiCapabilityConfigurationEdiToHclTerraform(struct?: B2BiCapabilityConfigurationEdi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capability_direction: {
      value: cdktn.stringToHclTerraform(struct!.capabilityDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_location: {
      value: b2BiCapabilityConfigurationEdiInputLocationToHclTerraform(struct!.inputLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiCapabilityConfigurationEdiInputLocation",
    },
    output_location: {
      value: b2BiCapabilityConfigurationEdiOutputLocationToHclTerraform(struct!.outputLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiCapabilityConfigurationEdiOutputLocation",
    },
    transformer_id: {
      value: cdktn.stringToHclTerraform(struct!.transformerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: b2BiCapabilityConfigurationEdiTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiCapabilityConfigurationEdiType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiCapabilityConfigurationEdiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiCapabilityConfigurationEdi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilityDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityDirection = this._capabilityDirection;
    }
    if (this._inputLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputLocation = this._inputLocation?.internalValue;
    }
    if (this._outputLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputLocation = this._outputLocation?.internalValue;
    }
    if (this._transformerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformerId = this._transformerId;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiCapabilityConfigurationEdi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilityDirection = undefined;
      this._inputLocation.internalValue = undefined;
      this._outputLocation.internalValue = undefined;
      this._transformerId = undefined;
      this._type.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilityDirection = value.capabilityDirection;
      this._inputLocation.internalValue = value.inputLocation;
      this._outputLocation.internalValue = value.outputLocation;
      this._transformerId = value.transformerId;
      this._type.internalValue = value.type;
    }
  }

  // capability_direction - computed: true, optional: true, required: false
  private _capabilityDirection?: string;
  public get capabilityDirection() {
    return this.getStringAttribute('capability_direction');
  }
  public set capabilityDirection(value: string) {
    this._capabilityDirection = value;
  }
  public resetCapabilityDirection() {
    this._capabilityDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityDirectionInput() {
    return this._capabilityDirection;
  }

  // input_location - computed: true, optional: true, required: false
  private _inputLocation = new B2BiCapabilityConfigurationEdiInputLocationOutputReference(this, "input_location");
  public get inputLocation() {
    return this._inputLocation;
  }
  public putInputLocation(value: B2BiCapabilityConfigurationEdiInputLocation) {
    this._inputLocation.internalValue = value;
  }
  public resetInputLocation() {
    this._inputLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLocationInput() {
    return this._inputLocation.internalValue;
  }

  // output_location - computed: true, optional: true, required: false
  private _outputLocation = new B2BiCapabilityConfigurationEdiOutputLocationOutputReference(this, "output_location");
  public get outputLocation() {
    return this._outputLocation;
  }
  public putOutputLocation(value: B2BiCapabilityConfigurationEdiOutputLocation) {
    this._outputLocation.internalValue = value;
  }
  public resetOutputLocation() {
    this._outputLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation.internalValue;
  }

  // transformer_id - computed: true, optional: true, required: false
  private _transformerId?: string;
  public get transformerId() {
    return this.getStringAttribute('transformer_id');
  }
  public set transformerId(value: string) {
    this._transformerId = value;
  }
  public resetTransformerId() {
    this._transformerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformerIdInput() {
    return this._transformerId;
  }

  // type - computed: true, optional: true, required: false
  private _type = new B2BiCapabilityConfigurationEdiTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: B2BiCapabilityConfigurationEdiType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }
}
export interface B2BiCapabilityConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#edi B2BiCapability#edi}
  */
  readonly edi?: B2BiCapabilityConfigurationEdi;
}

export function b2BiCapabilityConfigurationToTerraform(struct?: B2BiCapabilityConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    edi: b2BiCapabilityConfigurationEdiToTerraform(struct!.edi),
  }
}


export function b2BiCapabilityConfigurationToHclTerraform(struct?: B2BiCapabilityConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    edi: {
      value: b2BiCapabilityConfigurationEdiToHclTerraform(struct!.edi),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiCapabilityConfigurationEdi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiCapabilityConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiCapabilityConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edi = this._edi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiCapabilityConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._edi.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._edi.internalValue = value.edi;
    }
  }

  // edi - computed: true, optional: true, required: false
  private _edi = new B2BiCapabilityConfigurationEdiOutputReference(this, "edi");
  public get edi() {
    return this._edi;
  }
  public putEdi(value: B2BiCapabilityConfigurationEdi) {
    this._edi.internalValue = value;
  }
  public resetEdi() {
    this._edi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ediInput() {
    return this._edi.internalValue;
  }
}
export interface B2BiCapabilityInstructionsDocuments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#bucket_name B2BiCapability#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#key B2BiCapability#key}
  */
  readonly key?: string;
}

export function b2BiCapabilityInstructionsDocumentsToTerraform(struct?: B2BiCapabilityInstructionsDocuments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function b2BiCapabilityInstructionsDocumentsToHclTerraform(struct?: B2BiCapabilityInstructionsDocuments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiCapabilityInstructionsDocumentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): B2BiCapabilityInstructionsDocuments | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiCapabilityInstructionsDocuments | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._key = value.key;
    }
  }

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string;
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string;
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

export class B2BiCapabilityInstructionsDocumentsList extends cdktn.ComplexList {
  public internalValue? : B2BiCapabilityInstructionsDocuments[] | cdktn.IResolvable

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
  public get(index: number): B2BiCapabilityInstructionsDocumentsOutputReference {
    return new B2BiCapabilityInstructionsDocumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface B2BiCapabilityTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#key B2BiCapability#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#value B2BiCapability#value}
  */
  readonly value?: string;
}

export function b2BiCapabilityTagsToTerraform(struct?: B2BiCapabilityTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function b2BiCapabilityTagsToHclTerraform(struct?: B2BiCapabilityTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiCapabilityTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): B2BiCapabilityTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiCapabilityTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string;
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string;
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class B2BiCapabilityTagsList extends cdktn.ComplexList {
  public internalValue? : B2BiCapabilityTags[] | cdktn.IResolvable

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
  public get(index: number): B2BiCapabilityTagsOutputReference {
    return new B2BiCapabilityTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability awscc_b2bi_capability}
*/
export class B2BiCapability extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_b2bi_capability";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a B2BiCapability resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the B2BiCapability to import
  * @param importFromId The id of the existing B2BiCapability that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the B2BiCapability to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_b2bi_capability", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_capability awscc_b2bi_capability} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options B2BiCapabilityConfig
  */
  public constructor(scope: Construct, id: string, config: B2BiCapabilityConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_b2bi_capability',
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
    this._configuration.internalValue = config.configuration;
    this._instructionsDocuments.internalValue = config.instructionsDocuments;
    this._name = config.name;
    this._tags.internalValue = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capability_arn - computed: true, optional: false, required: false
  public get capabilityArn() {
    return this.getStringAttribute('capability_arn');
  }

  // capability_id - computed: true, optional: false, required: false
  public get capabilityId() {
    return this.getStringAttribute('capability_id');
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new B2BiCapabilityConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: B2BiCapabilityConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instructions_documents - computed: true, optional: true, required: false
  private _instructionsDocuments = new B2BiCapabilityInstructionsDocumentsList(this, "instructions_documents", false);
  public get instructionsDocuments() {
    return this._instructionsDocuments;
  }
  public putInstructionsDocuments(value: B2BiCapabilityInstructionsDocuments[] | cdktn.IResolvable) {
    this._instructionsDocuments.internalValue = value;
  }
  public resetInstructionsDocuments() {
    this._instructionsDocuments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionsDocumentsInput() {
    return this._instructionsDocuments.internalValue;
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new B2BiCapabilityTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: B2BiCapabilityTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: b2BiCapabilityConfigurationToTerraform(this._configuration.internalValue),
      instructions_documents: cdktn.listMapper(b2BiCapabilityInstructionsDocumentsToTerraform, false)(this._instructionsDocuments.internalValue),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(b2BiCapabilityTagsToTerraform, false)(this._tags.internalValue),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: b2BiCapabilityConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "B2BiCapabilityConfiguration",
      },
      instructions_documents: {
        value: cdktn.listMapperHcl(b2BiCapabilityInstructionsDocumentsToHclTerraform, false)(this._instructionsDocuments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "B2BiCapabilityInstructionsDocumentsList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(b2BiCapabilityTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "B2BiCapabilityTagsList",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
