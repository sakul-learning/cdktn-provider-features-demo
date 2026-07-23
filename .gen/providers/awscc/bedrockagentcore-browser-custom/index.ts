// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentcoreBrowserCustomConfig extends cdktn.TerraformMetaArguments {
  /**
  * Browser signing configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#browser_signing BedrockagentcoreBrowserCustom#browser_signing}
  */
  readonly browserSigning?: BedrockagentcoreBrowserCustomBrowserSigning;
  /**
  * List of root CA certificates in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#certificates BedrockagentcoreBrowserCustom#certificates}
  */
  readonly certificates?: BedrockagentcoreBrowserCustomCertificates[] | cdktn.IResolvable;
  /**
  * The description of the browser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#description BedrockagentcoreBrowserCustom#description}
  */
  readonly description?: string;
  /**
  * A list of enterprise policy files for the browser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#enterprise_policies BedrockagentcoreBrowserCustom#enterprise_policies}
  */
  readonly enterprisePolicies?: BedrockagentcoreBrowserCustomEnterprisePolicies[] | cdktn.IResolvable;
  /**
  * The Amazon Resource Name (ARN) of the IAM role that the browser uses to access resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#execution_role_arn BedrockagentcoreBrowserCustom#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * The name of the browser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#name BedrockagentcoreBrowserCustom#name}
  */
  readonly name: string;
  /**
  * Network configuration for browser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#network_configuration BedrockagentcoreBrowserCustom#network_configuration}
  */
  readonly networkConfiguration: BedrockagentcoreBrowserCustomNetworkConfiguration;
  /**
  * Recording configuration for browser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#recording_config BedrockagentcoreBrowserCustom#recording_config}
  */
  readonly recordingConfig?: BedrockagentcoreBrowserCustomRecordingConfig;
  /**
  * A map of tag keys and values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#tags BedrockagentcoreBrowserCustom#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface BedrockagentcoreBrowserCustomBrowserSigning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#enabled BedrockagentcoreBrowserCustom#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function bedrockagentcoreBrowserCustomBrowserSigningToTerraform(struct?: BedrockagentcoreBrowserCustomBrowserSigning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function bedrockagentcoreBrowserCustomBrowserSigningToHclTerraform(struct?: BedrockagentcoreBrowserCustomBrowserSigning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreBrowserCustomBrowserSigningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreBrowserCustomBrowserSigning | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreBrowserCustomBrowserSigning | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface BedrockagentcoreBrowserCustomCertificatesCertificateLocation {
  /**
  * Secrets Manager secret ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#secret_arn BedrockagentcoreBrowserCustom#secret_arn}
  */
  readonly secretArn?: string;
}

export function bedrockagentcoreBrowserCustomCertificatesCertificateLocationToTerraform(struct?: BedrockagentcoreBrowserCustomCertificatesCertificateLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function bedrockagentcoreBrowserCustomCertificatesCertificateLocationToHclTerraform(struct?: BedrockagentcoreBrowserCustomCertificatesCertificateLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreBrowserCustomCertificatesCertificateLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreBrowserCustomCertificatesCertificateLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretArn = value.secretArn;
    }
  }

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface BedrockagentcoreBrowserCustomCertificates {
  /**
  * Certificate location in Secrets Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#certificate_location BedrockagentcoreBrowserCustom#certificate_location}
  */
  readonly certificateLocation?: BedrockagentcoreBrowserCustomCertificatesCertificateLocation;
}

export function bedrockagentcoreBrowserCustomCertificatesToTerraform(struct?: BedrockagentcoreBrowserCustomCertificates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_location: bedrockagentcoreBrowserCustomCertificatesCertificateLocationToTerraform(struct!.certificateLocation),
  }
}


export function bedrockagentcoreBrowserCustomCertificatesToHclTerraform(struct?: BedrockagentcoreBrowserCustomCertificates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_location: {
      value: bedrockagentcoreBrowserCustomCertificatesCertificateLocationToHclTerraform(struct!.certificateLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreBrowserCustomCertificatesCertificateLocation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreBrowserCustomCertificatesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreBrowserCustomCertificates | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateLocation = this._certificateLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreBrowserCustomCertificates | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateLocation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateLocation.internalValue = value.certificateLocation;
    }
  }

  // certificate_location - computed: true, optional: true, required: false
  private _certificateLocation = new BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference(this, "certificate_location");
  public get certificateLocation() {
    return this._certificateLocation;
  }
  public putCertificateLocation(value: BedrockagentcoreBrowserCustomCertificatesCertificateLocation) {
    this._certificateLocation.internalValue = value;
  }
  public resetCertificateLocation() {
    this._certificateLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateLocationInput() {
    return this._certificateLocation.internalValue;
  }
}

export class BedrockagentcoreBrowserCustomCertificatesList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreBrowserCustomCertificates[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreBrowserCustomCertificatesOutputReference {
    return new BedrockagentcoreBrowserCustomCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreBrowserCustomEnterprisePoliciesLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#bucket BedrockagentcoreBrowserCustom#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#prefix BedrockagentcoreBrowserCustom#prefix}
  */
  readonly prefix?: string;
}

export function bedrockagentcoreBrowserCustomEnterprisePoliciesLocationToTerraform(struct?: BedrockagentcoreBrowserCustomEnterprisePoliciesLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function bedrockagentcoreBrowserCustomEnterprisePoliciesLocationToHclTerraform(struct?: BedrockagentcoreBrowserCustomEnterprisePoliciesLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreBrowserCustomEnterprisePoliciesLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreBrowserCustomEnterprisePoliciesLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._prefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface BedrockagentcoreBrowserCustomEnterprisePolicies {
  /**
  * The S3 location of the enterprise policy file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#location BedrockagentcoreBrowserCustom#location}
  */
  readonly location?: BedrockagentcoreBrowserCustomEnterprisePoliciesLocation;
  /**
  * The type of browser enterprise policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#type BedrockagentcoreBrowserCustom#type}
  */
  readonly type?: string;
}

export function bedrockagentcoreBrowserCustomEnterprisePoliciesToTerraform(struct?: BedrockagentcoreBrowserCustomEnterprisePolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    location: bedrockagentcoreBrowserCustomEnterprisePoliciesLocationToTerraform(struct!.location),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockagentcoreBrowserCustomEnterprisePoliciesToHclTerraform(struct?: BedrockagentcoreBrowserCustomEnterprisePolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    location: {
      value: bedrockagentcoreBrowserCustomEnterprisePoliciesLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreBrowserCustomEnterprisePoliciesLocation",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreBrowserCustomEnterprisePolicies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreBrowserCustomEnterprisePolicies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location.internalValue = value.location;
      this._type = value.type;
    }
  }

  // location - computed: true, optional: true, required: false
  private _location = new BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: BedrockagentcoreBrowserCustomEnterprisePoliciesLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class BedrockagentcoreBrowserCustomEnterprisePoliciesList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreBrowserCustomEnterprisePolicies[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference {
    return new BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig {
  /**
  * Security groups for VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#security_groups BedrockagentcoreBrowserCustom#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Subnets for VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#subnets BedrockagentcoreBrowserCustom#subnets}
  */
  readonly subnets?: string[];
}

export function bedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigToTerraform(struct?: BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function bedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigToHclTerraform(struct?: BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnets - computed: true, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface BedrockagentcoreBrowserCustomNetworkConfiguration {
  /**
  * Network modes supported by browser
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#network_mode BedrockagentcoreBrowserCustom#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Network mode configuration for VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#vpc_config BedrockagentcoreBrowserCustom#vpc_config}
  */
  readonly vpcConfig?: BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig;
}

export function bedrockagentcoreBrowserCustomNetworkConfigurationToTerraform(struct?: BedrockagentcoreBrowserCustomNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_mode: cdktn.stringToTerraform(struct!.networkMode),
    vpc_config: bedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigToTerraform(struct!.vpcConfig),
  }
}


export function bedrockagentcoreBrowserCustomNetworkConfigurationToHclTerraform(struct?: BedrockagentcoreBrowserCustomNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_mode: {
      value: cdktn.stringToHclTerraform(struct!.networkMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_config: {
      value: bedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreBrowserCustomNetworkConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMode = this._networkMode;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreBrowserCustomNetworkConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkMode = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkMode = value.networkMode;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // network_mode - computed: true, optional: true, required: false
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // vpc_config - computed: true, optional: true, required: false
  private _vpcConfig = new BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }
}
export interface BedrockagentcoreBrowserCustomRecordingConfigS3Location {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#bucket BedrockagentcoreBrowserCustom#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#prefix BedrockagentcoreBrowserCustom#prefix}
  */
  readonly prefix?: string;
}

export function bedrockagentcoreBrowserCustomRecordingConfigS3LocationToTerraform(struct?: BedrockagentcoreBrowserCustomRecordingConfigS3Location | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function bedrockagentcoreBrowserCustomRecordingConfigS3LocationToHclTerraform(struct?: BedrockagentcoreBrowserCustomRecordingConfigS3Location | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreBrowserCustomRecordingConfigS3Location | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreBrowserCustomRecordingConfigS3Location | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._prefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface BedrockagentcoreBrowserCustomRecordingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#enabled BedrockagentcoreBrowserCustom#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * S3 Location Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#s3_location BedrockagentcoreBrowserCustom#s3_location}
  */
  readonly s3Location?: BedrockagentcoreBrowserCustomRecordingConfigS3Location;
}

export function bedrockagentcoreBrowserCustomRecordingConfigToTerraform(struct?: BedrockagentcoreBrowserCustomRecordingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    s3_location: bedrockagentcoreBrowserCustomRecordingConfigS3LocationToTerraform(struct!.s3Location),
  }
}


export function bedrockagentcoreBrowserCustomRecordingConfigToHclTerraform(struct?: BedrockagentcoreBrowserCustomRecordingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    s3_location: {
      value: bedrockagentcoreBrowserCustomRecordingConfigS3LocationToHclTerraform(struct!.s3Location),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreBrowserCustomRecordingConfigS3Location",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreBrowserCustomRecordingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreBrowserCustomRecordingConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._s3Location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Location = this._s3Location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreBrowserCustomRecordingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._s3Location.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._s3Location.internalValue = value.s3Location;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // s3_location - computed: true, optional: true, required: false
  private _s3Location = new BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference(this, "s3_location");
  public get s3Location() {
    return this._s3Location;
  }
  public putS3Location(value: BedrockagentcoreBrowserCustomRecordingConfigS3Location) {
    this._s3Location.internalValue = value;
  }
  public resetS3Location() {
    this._s3Location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LocationInput() {
    return this._s3Location.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom awscc_bedrockagentcore_browser_custom}
*/
export class BedrockagentcoreBrowserCustom extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrockagentcore_browser_custom";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentcoreBrowserCustom resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreBrowserCustom to import
  * @param importFromId The id of the existing BedrockagentcoreBrowserCustom that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreBrowserCustom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_browser_custom", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/bedrockagentcore_browser_custom awscc_bedrockagentcore_browser_custom} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcoreBrowserCustomConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcoreBrowserCustomConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrockagentcore_browser_custom',
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
    this._browserSigning.internalValue = config.browserSigning;
    this._certificates.internalValue = config.certificates;
    this._description = config.description;
    this._enterprisePolicies.internalValue = config.enterprisePolicies;
    this._executionRoleArn = config.executionRoleArn;
    this._name = config.name;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._recordingConfig.internalValue = config.recordingConfig;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // browser_arn - computed: true, optional: false, required: false
  public get browserArn() {
    return this.getStringAttribute('browser_arn');
  }

  // browser_id - computed: true, optional: false, required: false
  public get browserId() {
    return this.getStringAttribute('browser_id');
  }

  // browser_signing - computed: true, optional: true, required: false
  private _browserSigning = new BedrockagentcoreBrowserCustomBrowserSigningOutputReference(this, "browser_signing");
  public get browserSigning() {
    return this._browserSigning;
  }
  public putBrowserSigning(value: BedrockagentcoreBrowserCustomBrowserSigning) {
    this._browserSigning.internalValue = value;
  }
  public resetBrowserSigning() {
    this._browserSigning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserSigningInput() {
    return this._browserSigning.internalValue;
  }

  // certificates - computed: true, optional: true, required: false
  private _certificates = new BedrockagentcoreBrowserCustomCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: BedrockagentcoreBrowserCustomCertificates[] | cdktn.IResolvable) {
    this._certificates.internalValue = value;
  }
  public resetCertificates() {
    this._certificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enterprise_policies - computed: true, optional: true, required: false
  private _enterprisePolicies = new BedrockagentcoreBrowserCustomEnterprisePoliciesList(this, "enterprise_policies", false);
  public get enterprisePolicies() {
    return this._enterprisePolicies;
  }
  public putEnterprisePolicies(value: BedrockagentcoreBrowserCustomEnterprisePolicies[] | cdktn.IResolvable) {
    this._enterprisePolicies.internalValue = value;
  }
  public resetEnterprisePolicies() {
    this._enterprisePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterprisePoliciesInput() {
    return this._enterprisePolicies.internalValue;
  }

  // execution_role_arn - computed: true, optional: true, required: false
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
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

  // network_configuration - computed: false, optional: false, required: true
  private _networkConfiguration = new BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: BedrockagentcoreBrowserCustomNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // recording_config - computed: true, optional: true, required: false
  private _recordingConfig = new BedrockagentcoreBrowserCustomRecordingConfigOutputReference(this, "recording_config");
  public get recordingConfig() {
    return this._recordingConfig;
  }
  public putRecordingConfig(value: BedrockagentcoreBrowserCustomRecordingConfig) {
    this._recordingConfig.internalValue = value;
  }
  public resetRecordingConfig() {
    this._recordingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingConfigInput() {
    return this._recordingConfig.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      browser_signing: bedrockagentcoreBrowserCustomBrowserSigningToTerraform(this._browserSigning.internalValue),
      certificates: cdktn.listMapper(bedrockagentcoreBrowserCustomCertificatesToTerraform, false)(this._certificates.internalValue),
      description: cdktn.stringToTerraform(this._description),
      enterprise_policies: cdktn.listMapper(bedrockagentcoreBrowserCustomEnterprisePoliciesToTerraform, false)(this._enterprisePolicies.internalValue),
      execution_role_arn: cdktn.stringToTerraform(this._executionRoleArn),
      name: cdktn.stringToTerraform(this._name),
      network_configuration: bedrockagentcoreBrowserCustomNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      recording_config: bedrockagentcoreBrowserCustomRecordingConfigToTerraform(this._recordingConfig.internalValue),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      browser_signing: {
        value: bedrockagentcoreBrowserCustomBrowserSigningToHclTerraform(this._browserSigning.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreBrowserCustomBrowserSigning",
      },
      certificates: {
        value: cdktn.listMapperHcl(bedrockagentcoreBrowserCustomCertificatesToHclTerraform, false)(this._certificates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreBrowserCustomCertificatesList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_policies: {
        value: cdktn.listMapperHcl(bedrockagentcoreBrowserCustomEnterprisePoliciesToHclTerraform, false)(this._enterprisePolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreBrowserCustomEnterprisePoliciesList",
      },
      execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._executionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_configuration: {
        value: bedrockagentcoreBrowserCustomNetworkConfigurationToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreBrowserCustomNetworkConfiguration",
      },
      recording_config: {
        value: bedrockagentcoreBrowserCustomRecordingConfigToHclTerraform(this._recordingConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreBrowserCustomRecordingConfig",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
