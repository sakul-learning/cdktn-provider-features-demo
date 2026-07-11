// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sso_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SsoApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ARN of the application provider under which the operation will run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sso_application#application_provider_arn SsoApplication#application_provider_arn}
  */
  readonly applicationProviderArn: string;
  /**
  * The description information for the Identity Center (SSO) Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sso_application#description SsoApplication#description}
  */
  readonly description?: string;
  /**
  * The ARN of the instance of IAM Identity Center under which the operation will run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sso_application#instance_arn SsoApplication#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * The name you want to assign to this Identity Center (SSO) Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sso_application#name SsoApplication#name}
  */
  readonly name: string;
  /**
  * A structure that describes the options for the portal associated with an application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sso_application#portal_options SsoApplication#portal_options}
  */
  readonly portalOptions?: SsoApplicationPortalOptions;
  /**
  * Specifies whether the application is enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sso_application#status SsoApplication#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sso_application#tags SsoApplication#tags}
  */
  readonly tags?: SsoApplicationTags[] | cdktn.IResolvable;
}
export interface SsoApplicationPortalOptionsSignInOptions {
  /**
  * The URL that accepts authentication requests for an application, this is a required parameter if the Origin parameter is APPLICATION
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sso_application#application_url SsoApplication#application_url}
  */
  readonly applicationUrl?: string;
  /**
  * This determines how IAM Identity Center navigates the user to the target application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sso_application#origin SsoApplication#origin}
  */
  readonly origin?: string;
}

export function ssoApplicationPortalOptionsSignInOptionsToTerraform(struct?: SsoApplicationPortalOptionsSignInOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_url: cdktn.stringToTerraform(struct!.applicationUrl),
    origin: cdktn.stringToTerraform(struct!.origin),
  }
}


export function ssoApplicationPortalOptionsSignInOptionsToHclTerraform(struct?: SsoApplicationPortalOptionsSignInOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_url: {
      value: cdktn.stringToHclTerraform(struct!.applicationUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: cdktn.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoApplicationPortalOptionsSignInOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsoApplicationPortalOptionsSignInOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationUrl = this._applicationUrl;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoApplicationPortalOptionsSignInOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationUrl = undefined;
      this._origin = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationUrl = value.applicationUrl;
      this._origin = value.origin;
    }
  }

  // application_url - computed: true, optional: true, required: false
  private _applicationUrl?: string; 
  public get applicationUrl() {
    return this.getStringAttribute('application_url');
  }
  public set applicationUrl(value: string) {
    this._applicationUrl = value;
  }
  public resetApplicationUrl() {
    this._applicationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationUrlInput() {
    return this._applicationUrl;
  }

  // origin - computed: true, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }
}
export interface SsoApplicationPortalOptions {
  /**
  * A structure that describes the sign-in options for the access portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sso_application#sign_in_options SsoApplication#sign_in_options}
  */
  readonly signInOptions?: SsoApplicationPortalOptionsSignInOptions;
  /**
  * Indicates whether this application is visible in the access portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sso_application#visibility SsoApplication#visibility}
  */
  readonly visibility?: string;
}

export function ssoApplicationPortalOptionsToTerraform(struct?: SsoApplicationPortalOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sign_in_options: ssoApplicationPortalOptionsSignInOptionsToTerraform(struct!.signInOptions),
    visibility: cdktn.stringToTerraform(struct!.visibility),
  }
}


export function ssoApplicationPortalOptionsToHclTerraform(struct?: SsoApplicationPortalOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sign_in_options: {
      value: ssoApplicationPortalOptionsSignInOptionsToHclTerraform(struct!.signInOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "SsoApplicationPortalOptionsSignInOptions",
    },
    visibility: {
      value: cdktn.stringToHclTerraform(struct!.visibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoApplicationPortalOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsoApplicationPortalOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signInOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signInOptions = this._signInOptions?.internalValue;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoApplicationPortalOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._signInOptions.internalValue = undefined;
      this._visibility = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._signInOptions.internalValue = value.signInOptions;
      this._visibility = value.visibility;
    }
  }

  // sign_in_options - computed: true, optional: true, required: false
  private _signInOptions = new SsoApplicationPortalOptionsSignInOptionsOutputReference(this, "sign_in_options");
  public get signInOptions() {
    return this._signInOptions;
  }
  public putSignInOptions(value: SsoApplicationPortalOptionsSignInOptions) {
    this._signInOptions.internalValue = value;
  }
  public resetSignInOptions() {
    this._signInOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInOptionsInput() {
    return this._signInOptions.internalValue;
  }

  // visibility - computed: true, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface SsoApplicationTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sso_application#key SsoApplication#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sso_application#value SsoApplication#value}
  */
  readonly value?: string;
}

export function ssoApplicationTagsToTerraform(struct?: SsoApplicationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ssoApplicationTagsToHclTerraform(struct?: SsoApplicationTags | cdktn.IResolvable): any {
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

export class SsoApplicationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsoApplicationTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SsoApplicationTags | cdktn.IResolvable | undefined) {
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

export class SsoApplicationTagsList extends cdktn.ComplexList {
  public internalValue? : SsoApplicationTags[] | cdktn.IResolvable

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
  public get(index: number): SsoApplicationTagsOutputReference {
    return new SsoApplicationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sso_application awscc_sso_application}
*/
export class SsoApplication extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sso_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SsoApplication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsoApplication to import
  * @param importFromId The id of the existing SsoApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sso_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsoApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sso_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sso_application awscc_sso_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: SsoApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sso_application',
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
    this._applicationProviderArn = config.applicationProviderArn;
    this._description = config.description;
    this._instanceArn = config.instanceArn;
    this._name = config.name;
    this._portalOptions.internalValue = config.portalOptions;
    this._status = config.status;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_arn - computed: true, optional: false, required: false
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }

  // application_provider_arn - computed: false, optional: false, required: true
  private _applicationProviderArn?: string; 
  public get applicationProviderArn() {
    return this.getStringAttribute('application_provider_arn');
  }
  public set applicationProviderArn(value: string) {
    this._applicationProviderArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationProviderArnInput() {
    return this._applicationProviderArn;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_store_arn - computed: true, optional: false, required: false
  public get identityStoreArn() {
    return this.getStringAttribute('identity_store_arn');
  }

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn?: string; 
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn;
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

  // portal_options - computed: true, optional: true, required: false
  private _portalOptions = new SsoApplicationPortalOptionsOutputReference(this, "portal_options");
  public get portalOptions() {
    return this._portalOptions;
  }
  public putPortalOptions(value: SsoApplicationPortalOptions) {
    this._portalOptions.internalValue = value;
  }
  public resetPortalOptions() {
    this._portalOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalOptionsInput() {
    return this._portalOptions.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SsoApplicationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SsoApplicationTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_provider_arn: cdktn.stringToTerraform(this._applicationProviderArn),
      description: cdktn.stringToTerraform(this._description),
      instance_arn: cdktn.stringToTerraform(this._instanceArn),
      name: cdktn.stringToTerraform(this._name),
      portal_options: ssoApplicationPortalOptionsToTerraform(this._portalOptions.internalValue),
      status: cdktn.stringToTerraform(this._status),
      tags: cdktn.listMapper(ssoApplicationTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_provider_arn: {
        value: cdktn.stringToHclTerraform(this._applicationProviderArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_arn: {
        value: cdktn.stringToHclTerraform(this._instanceArn),
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
      portal_options: {
        value: ssoApplicationPortalOptionsToHclTerraform(this._portalOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SsoApplicationPortalOptions",
      },
      status: {
        value: cdktn.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(ssoApplicationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsoApplicationTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
