// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LightsailBucketConfig extends cdktn.TerraformMetaArguments {
  /**
  * An object that sets the public accessibility of objects in the specified bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_bucket#access_rules LightsailBucket#access_rules}
  */
  readonly accessRules?: LightsailBucketAccessRules;
  /**
  * The name for the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_bucket#bucket_name LightsailBucket#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The ID of the bundle to use for the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_bucket#bundle_id LightsailBucket#bundle_id}
  */
  readonly bundleId: string;
  /**
  * Specifies whether to enable or disable versioning of objects in the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_bucket#object_versioning LightsailBucket#object_versioning}
  */
  readonly objectVersioning?: boolean | cdktn.IResolvable;
  /**
  * An array of strings to specify the AWS account IDs that can access the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_bucket#read_only_access_accounts LightsailBucket#read_only_access_accounts}
  */
  readonly readOnlyAccessAccounts?: string[];
  /**
  * The names of the Lightsail resources for which to set bucket access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_bucket#resources_receiving_access LightsailBucket#resources_receiving_access}
  */
  readonly resourcesReceivingAccess?: string[];
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_bucket#tags LightsailBucket#tags}
  */
  readonly tags?: LightsailBucketTags[] | cdktn.IResolvable;
}
export interface LightsailBucketAccessRules {
  /**
  * A Boolean value that indicates whether the access control list (ACL) permissions that are applied to individual objects override the getObject option that is currently specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_bucket#allow_public_overrides LightsailBucket#allow_public_overrides}
  */
  readonly allowPublicOverrides?: boolean | cdktn.IResolvable;
  /**
  * Specifies the anonymous access to all objects in a bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_bucket#get_object LightsailBucket#get_object}
  */
  readonly fetchObject?: string;
}

export function lightsailBucketAccessRulesToTerraform(struct?: LightsailBucketAccessRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_public_overrides: cdktn.booleanToTerraform(struct!.allowPublicOverrides),
    get_object: cdktn.stringToTerraform(struct!.fetchObject),
  }
}


export function lightsailBucketAccessRulesToHclTerraform(struct?: LightsailBucketAccessRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_public_overrides: {
      value: cdktn.booleanToHclTerraform(struct!.allowPublicOverrides),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    get_object: {
      value: cdktn.stringToHclTerraform(struct!.fetchObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LightsailBucketAccessRulesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LightsailBucketAccessRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPublicOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPublicOverrides = this._allowPublicOverrides;
    }
    if (this._getObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchObject = this._getObject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LightsailBucketAccessRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPublicOverrides = undefined;
      this._getObject = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPublicOverrides = value.allowPublicOverrides;
      this._getObject = value.fetchObject;
    }
  }

  // allow_public_overrides - computed: true, optional: true, required: false
  private _allowPublicOverrides?: boolean | cdktn.IResolvable; 
  public get allowPublicOverrides() {
    return this.getBooleanAttribute('allow_public_overrides');
  }
  public set allowPublicOverrides(value: boolean | cdktn.IResolvable) {
    this._allowPublicOverrides = value;
  }
  public resetAllowPublicOverrides() {
    this._allowPublicOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPublicOverridesInput() {
    return this._allowPublicOverrides;
  }

  // get_object - computed: true, optional: true, required: false
  private _getObject?: string; 
  public get fetchObject() {
    return this.getStringAttribute('get_object');
  }
  public set fetchObject(value: string) {
    this._getObject = value;
  }
  public resetFetchObject() {
    this._getObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchObjectInput() {
    return this._getObject;
  }
}
export interface LightsailBucketTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_bucket#key LightsailBucket#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_bucket#value LightsailBucket#value}
  */
  readonly value?: string;
}

export function lightsailBucketTagsToTerraform(struct?: LightsailBucketTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lightsailBucketTagsToHclTerraform(struct?: LightsailBucketTags | cdktn.IResolvable): any {
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

export class LightsailBucketTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LightsailBucketTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LightsailBucketTags | cdktn.IResolvable | undefined) {
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

export class LightsailBucketTagsList extends cdktn.ComplexList {
  public internalValue? : LightsailBucketTags[] | cdktn.IResolvable

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
  public get(index: number): LightsailBucketTagsOutputReference {
    return new LightsailBucketTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_bucket awscc_lightsail_bucket}
*/
export class LightsailBucket extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lightsail_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LightsailBucket resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LightsailBucket to import
  * @param importFromId The id of the existing LightsailBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LightsailBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lightsail_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_bucket awscc_lightsail_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LightsailBucketConfig
  */
  public constructor(scope: Construct, id: string, config: LightsailBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lightsail_bucket',
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
    this._accessRules.internalValue = config.accessRules;
    this._bucketName = config.bucketName;
    this._bundleId = config.bundleId;
    this._objectVersioning = config.objectVersioning;
    this._readOnlyAccessAccounts = config.readOnlyAccessAccounts;
    this._resourcesReceivingAccess = config.resourcesReceivingAccess;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // able_to_update_bundle - computed: true, optional: false, required: false
  public get ableToUpdateBundle() {
    return this.getBooleanAttribute('able_to_update_bundle');
  }

  // access_rules - computed: true, optional: true, required: false
  private _accessRules = new LightsailBucketAccessRulesOutputReference(this, "access_rules");
  public get accessRules() {
    return this._accessRules;
  }
  public putAccessRules(value: LightsailBucketAccessRules) {
    this._accessRules.internalValue = value;
  }
  public resetAccessRules() {
    this._accessRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRulesInput() {
    return this._accessRules.internalValue;
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bundle_id - computed: false, optional: false, required: true
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // object_versioning - computed: true, optional: true, required: false
  private _objectVersioning?: boolean | cdktn.IResolvable; 
  public get objectVersioning() {
    return this.getBooleanAttribute('object_versioning');
  }
  public set objectVersioning(value: boolean | cdktn.IResolvable) {
    this._objectVersioning = value;
  }
  public resetObjectVersioning() {
    this._objectVersioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectVersioningInput() {
    return this._objectVersioning;
  }

  // read_only_access_accounts - computed: true, optional: true, required: false
  private _readOnlyAccessAccounts?: string[]; 
  public get readOnlyAccessAccounts() {
    return cdktn.Fn.tolist(this.getListAttribute('read_only_access_accounts'));
  }
  public set readOnlyAccessAccounts(value: string[]) {
    this._readOnlyAccessAccounts = value;
  }
  public resetReadOnlyAccessAccounts() {
    this._readOnlyAccessAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyAccessAccountsInput() {
    return this._readOnlyAccessAccounts;
  }

  // resources_receiving_access - computed: true, optional: true, required: false
  private _resourcesReceivingAccess?: string[]; 
  public get resourcesReceivingAccess() {
    return cdktn.Fn.tolist(this.getListAttribute('resources_receiving_access'));
  }
  public set resourcesReceivingAccess(value: string[]) {
    this._resourcesReceivingAccess = value;
  }
  public resetResourcesReceivingAccess() {
    this._resourcesReceivingAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesReceivingAccessInput() {
    return this._resourcesReceivingAccess;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new LightsailBucketTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: LightsailBucketTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_rules: lightsailBucketAccessRulesToTerraform(this._accessRules.internalValue),
      bucket_name: cdktn.stringToTerraform(this._bucketName),
      bundle_id: cdktn.stringToTerraform(this._bundleId),
      object_versioning: cdktn.booleanToTerraform(this._objectVersioning),
      read_only_access_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(this._readOnlyAccessAccounts),
      resources_receiving_access: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourcesReceivingAccess),
      tags: cdktn.listMapper(lightsailBucketTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_rules: {
        value: lightsailBucketAccessRulesToHclTerraform(this._accessRules.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LightsailBucketAccessRules",
      },
      bucket_name: {
        value: cdktn.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bundle_id: {
        value: cdktn.stringToHclTerraform(this._bundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_versioning: {
        value: cdktn.booleanToHclTerraform(this._objectVersioning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      read_only_access_accounts: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._readOnlyAccessAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resources_receiving_access: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourcesReceivingAccess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktn.listMapperHcl(lightsailBucketTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LightsailBucketTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
