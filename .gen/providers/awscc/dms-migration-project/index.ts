// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DmsMigrationProjectConfig extends cdktn.TerraformMetaArguments {
  /**
  * The optional description of the migration project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#description DmsMigrationProject#description}
  */
  readonly description?: string;
  /**
  * The property describes an instance profile arn for the migration project. For read
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#instance_profile_arn DmsMigrationProject#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * The property describes an instance profile identifier for the migration project. For create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#instance_profile_identifier DmsMigrationProject#instance_profile_identifier}
  */
  readonly instanceProfileIdentifier?: string;
  /**
  * The property describes an instance profile name for the migration project. For read
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#instance_profile_name DmsMigrationProject#instance_profile_name}
  */
  readonly instanceProfileName?: string;
  /**
  * The property describes a creating time of the migration project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#migration_project_creation_time DmsMigrationProject#migration_project_creation_time}
  */
  readonly migrationProjectCreationTime?: string;
  /**
  * The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#migration_project_identifier DmsMigrationProject#migration_project_identifier}
  */
  readonly migrationProjectIdentifier?: string;
  /**
  * The property describes a name to identify the migration project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#migration_project_name DmsMigrationProject#migration_project_name}
  */
  readonly migrationProjectName?: string;
  /**
  * The property describes schema conversion application attributes for the migration project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#schema_conversion_application_attributes DmsMigrationProject#schema_conversion_application_attributes}
  */
  readonly schemaConversionApplicationAttributes?: DmsMigrationProjectSchemaConversionApplicationAttributes;
  /**
  * The property describes source data provider descriptors for the migration project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#source_data_provider_descriptors DmsMigrationProject#source_data_provider_descriptors}
  */
  readonly sourceDataProviderDescriptors?: DmsMigrationProjectSourceDataProviderDescriptors[] | cdktn.IResolvable;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#tags DmsMigrationProject#tags}
  */
  readonly tags?: DmsMigrationProjectTags[] | cdktn.IResolvable;
  /**
  * The property describes target data provider descriptors for the migration project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#target_data_provider_descriptors DmsMigrationProject#target_data_provider_descriptors}
  */
  readonly targetDataProviderDescriptors?: DmsMigrationProjectTargetDataProviderDescriptors[] | cdktn.IResolvable;
  /**
  * The property describes transformation rules for the migration project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#transformation_rules DmsMigrationProject#transformation_rules}
  */
  readonly transformationRules?: string;
}
export interface DmsMigrationProjectSchemaConversionApplicationAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#s3_bucket_path DmsMigrationProject#s3_bucket_path}
  */
  readonly s3BucketPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#s3_bucket_role_arn DmsMigrationProject#s3_bucket_role_arn}
  */
  readonly s3BucketRoleArn?: string;
}

export function dmsMigrationProjectSchemaConversionApplicationAttributesToTerraform(struct?: DmsMigrationProjectSchemaConversionApplicationAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_bucket_path: cdktn.stringToTerraform(struct!.s3BucketPath),
    s3_bucket_role_arn: cdktn.stringToTerraform(struct!.s3BucketRoleArn),
  }
}


export function dmsMigrationProjectSchemaConversionApplicationAttributesToHclTerraform(struct?: DmsMigrationProjectSchemaConversionApplicationAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_bucket_path: {
      value: cdktn.stringToHclTerraform(struct!.s3BucketPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.s3BucketRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DmsMigrationProjectSchemaConversionApplicationAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3BucketPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketPath = this._s3BucketPath;
    }
    if (this._s3BucketRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketRoleArn = this._s3BucketRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsMigrationProjectSchemaConversionApplicationAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3BucketPath = undefined;
      this._s3BucketRoleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3BucketPath = value.s3BucketPath;
      this._s3BucketRoleArn = value.s3BucketRoleArn;
    }
  }

  // s3_bucket_path - computed: true, optional: true, required: false
  private _s3BucketPath?: string;
  public get s3BucketPath() {
    return this.getStringAttribute('s3_bucket_path');
  }
  public set s3BucketPath(value: string) {
    this._s3BucketPath = value;
  }
  public resetS3BucketPath() {
    this._s3BucketPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketPathInput() {
    return this._s3BucketPath;
  }

  // s3_bucket_role_arn - computed: true, optional: true, required: false
  private _s3BucketRoleArn?: string;
  public get s3BucketRoleArn() {
    return this.getStringAttribute('s3_bucket_role_arn');
  }
  public set s3BucketRoleArn(value: string) {
    this._s3BucketRoleArn = value;
  }
  public resetS3BucketRoleArn() {
    this._s3BucketRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketRoleArnInput() {
    return this._s3BucketRoleArn;
  }
}
export interface DmsMigrationProjectSourceDataProviderDescriptors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}
  */
  readonly dataProviderArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#data_provider_identifier DmsMigrationProject#data_provider_identifier}
  */
  readonly dataProviderIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#data_provider_name DmsMigrationProject#data_provider_name}
  */
  readonly dataProviderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}
  */
  readonly secretsManagerAccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}
  */
  readonly secretsManagerSecretId?: string;
}

export function dmsMigrationProjectSourceDataProviderDescriptorsToTerraform(struct?: DmsMigrationProjectSourceDataProviderDescriptors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_provider_arn: cdktn.stringToTerraform(struct!.dataProviderArn),
    data_provider_identifier: cdktn.stringToTerraform(struct!.dataProviderIdentifier),
    data_provider_name: cdktn.stringToTerraform(struct!.dataProviderName),
    secrets_manager_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerAccessRoleArn),
    secrets_manager_secret_id: cdktn.stringToTerraform(struct!.secretsManagerSecretId),
  }
}


export function dmsMigrationProjectSourceDataProviderDescriptorsToHclTerraform(struct?: DmsMigrationProjectSourceDataProviderDescriptors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_provider_arn: {
      value: cdktn.stringToHclTerraform(struct!.dataProviderArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_provider_identifier: {
      value: cdktn.stringToHclTerraform(struct!.dataProviderIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_provider_name: {
      value: cdktn.stringToHclTerraform(struct!.dataProviderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretsManagerAccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager_secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretsManagerSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsMigrationProjectSourceDataProviderDescriptorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DmsMigrationProjectSourceDataProviderDescriptors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataProviderArn = this._dataProviderArn;
    }
    if (this._dataProviderIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataProviderIdentifier = this._dataProviderIdentifier;
    }
    if (this._dataProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataProviderName = this._dataProviderName;
    }
    if (this._secretsManagerAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerAccessRoleArn = this._secretsManagerAccessRoleArn;
    }
    if (this._secretsManagerSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerSecretId = this._secretsManagerSecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsMigrationProjectSourceDataProviderDescriptors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataProviderArn = undefined;
      this._dataProviderIdentifier = undefined;
      this._dataProviderName = undefined;
      this._secretsManagerAccessRoleArn = undefined;
      this._secretsManagerSecretId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataProviderArn = value.dataProviderArn;
      this._dataProviderIdentifier = value.dataProviderIdentifier;
      this._dataProviderName = value.dataProviderName;
      this._secretsManagerAccessRoleArn = value.secretsManagerAccessRoleArn;
      this._secretsManagerSecretId = value.secretsManagerSecretId;
    }
  }

  // data_provider_arn - computed: true, optional: true, required: false
  private _dataProviderArn?: string;
  public get dataProviderArn() {
    return this.getStringAttribute('data_provider_arn');
  }
  public set dataProviderArn(value: string) {
    this._dataProviderArn = value;
  }
  public resetDataProviderArn() {
    this._dataProviderArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProviderArnInput() {
    return this._dataProviderArn;
  }

  // data_provider_identifier - computed: true, optional: true, required: false
  private _dataProviderIdentifier?: string;
  public get dataProviderIdentifier() {
    return this.getStringAttribute('data_provider_identifier');
  }
  public set dataProviderIdentifier(value: string) {
    this._dataProviderIdentifier = value;
  }
  public resetDataProviderIdentifier() {
    this._dataProviderIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProviderIdentifierInput() {
    return this._dataProviderIdentifier;
  }

  // data_provider_name - computed: true, optional: true, required: false
  private _dataProviderName?: string;
  public get dataProviderName() {
    return this.getStringAttribute('data_provider_name');
  }
  public set dataProviderName(value: string) {
    this._dataProviderName = value;
  }
  public resetDataProviderName() {
    this._dataProviderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProviderNameInput() {
    return this._dataProviderName;
  }

  // secrets_manager_access_role_arn - computed: true, optional: true, required: false
  private _secretsManagerAccessRoleArn?: string;
  public get secretsManagerAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_access_role_arn');
  }
  public set secretsManagerAccessRoleArn(value: string) {
    this._secretsManagerAccessRoleArn = value;
  }
  public resetSecretsManagerAccessRoleArn() {
    this._secretsManagerAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerAccessRoleArnInput() {
    return this._secretsManagerAccessRoleArn;
  }

  // secrets_manager_secret_id - computed: true, optional: true, required: false
  private _secretsManagerSecretId?: string;
  public get secretsManagerSecretId() {
    return this.getStringAttribute('secrets_manager_secret_id');
  }
  public set secretsManagerSecretId(value: string) {
    this._secretsManagerSecretId = value;
  }
  public resetSecretsManagerSecretId() {
    this._secretsManagerSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerSecretIdInput() {
    return this._secretsManagerSecretId;
  }
}

export class DmsMigrationProjectSourceDataProviderDescriptorsList extends cdktn.ComplexList {
  public internalValue? : DmsMigrationProjectSourceDataProviderDescriptors[] | cdktn.IResolvable

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
  public get(index: number): DmsMigrationProjectSourceDataProviderDescriptorsOutputReference {
    return new DmsMigrationProjectSourceDataProviderDescriptorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DmsMigrationProjectTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, , and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#key DmsMigrationProject#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, , and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#value DmsMigrationProject#value}
  */
  readonly value?: string;
}

export function dmsMigrationProjectTagsToTerraform(struct?: DmsMigrationProjectTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dmsMigrationProjectTagsToHclTerraform(struct?: DmsMigrationProjectTags | cdktn.IResolvable): any {
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

export class DmsMigrationProjectTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DmsMigrationProjectTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DmsMigrationProjectTags | cdktn.IResolvable | undefined) {
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

export class DmsMigrationProjectTagsList extends cdktn.ComplexList {
  public internalValue? : DmsMigrationProjectTags[] | cdktn.IResolvable

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
  public get(index: number): DmsMigrationProjectTagsOutputReference {
    return new DmsMigrationProjectTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DmsMigrationProjectTargetDataProviderDescriptors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}
  */
  readonly dataProviderArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#data_provider_identifier DmsMigrationProject#data_provider_identifier}
  */
  readonly dataProviderIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#data_provider_name DmsMigrationProject#data_provider_name}
  */
  readonly dataProviderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}
  */
  readonly secretsManagerAccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}
  */
  readonly secretsManagerSecretId?: string;
}

export function dmsMigrationProjectTargetDataProviderDescriptorsToTerraform(struct?: DmsMigrationProjectTargetDataProviderDescriptors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_provider_arn: cdktn.stringToTerraform(struct!.dataProviderArn),
    data_provider_identifier: cdktn.stringToTerraform(struct!.dataProviderIdentifier),
    data_provider_name: cdktn.stringToTerraform(struct!.dataProviderName),
    secrets_manager_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerAccessRoleArn),
    secrets_manager_secret_id: cdktn.stringToTerraform(struct!.secretsManagerSecretId),
  }
}


export function dmsMigrationProjectTargetDataProviderDescriptorsToHclTerraform(struct?: DmsMigrationProjectTargetDataProviderDescriptors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_provider_arn: {
      value: cdktn.stringToHclTerraform(struct!.dataProviderArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_provider_identifier: {
      value: cdktn.stringToHclTerraform(struct!.dataProviderIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_provider_name: {
      value: cdktn.stringToHclTerraform(struct!.dataProviderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretsManagerAccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager_secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretsManagerSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsMigrationProjectTargetDataProviderDescriptorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DmsMigrationProjectTargetDataProviderDescriptors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataProviderArn = this._dataProviderArn;
    }
    if (this._dataProviderIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataProviderIdentifier = this._dataProviderIdentifier;
    }
    if (this._dataProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataProviderName = this._dataProviderName;
    }
    if (this._secretsManagerAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerAccessRoleArn = this._secretsManagerAccessRoleArn;
    }
    if (this._secretsManagerSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerSecretId = this._secretsManagerSecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsMigrationProjectTargetDataProviderDescriptors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataProviderArn = undefined;
      this._dataProviderIdentifier = undefined;
      this._dataProviderName = undefined;
      this._secretsManagerAccessRoleArn = undefined;
      this._secretsManagerSecretId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataProviderArn = value.dataProviderArn;
      this._dataProviderIdentifier = value.dataProviderIdentifier;
      this._dataProviderName = value.dataProviderName;
      this._secretsManagerAccessRoleArn = value.secretsManagerAccessRoleArn;
      this._secretsManagerSecretId = value.secretsManagerSecretId;
    }
  }

  // data_provider_arn - computed: true, optional: true, required: false
  private _dataProviderArn?: string;
  public get dataProviderArn() {
    return this.getStringAttribute('data_provider_arn');
  }
  public set dataProviderArn(value: string) {
    this._dataProviderArn = value;
  }
  public resetDataProviderArn() {
    this._dataProviderArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProviderArnInput() {
    return this._dataProviderArn;
  }

  // data_provider_identifier - computed: true, optional: true, required: false
  private _dataProviderIdentifier?: string;
  public get dataProviderIdentifier() {
    return this.getStringAttribute('data_provider_identifier');
  }
  public set dataProviderIdentifier(value: string) {
    this._dataProviderIdentifier = value;
  }
  public resetDataProviderIdentifier() {
    this._dataProviderIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProviderIdentifierInput() {
    return this._dataProviderIdentifier;
  }

  // data_provider_name - computed: true, optional: true, required: false
  private _dataProviderName?: string;
  public get dataProviderName() {
    return this.getStringAttribute('data_provider_name');
  }
  public set dataProviderName(value: string) {
    this._dataProviderName = value;
  }
  public resetDataProviderName() {
    this._dataProviderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProviderNameInput() {
    return this._dataProviderName;
  }

  // secrets_manager_access_role_arn - computed: true, optional: true, required: false
  private _secretsManagerAccessRoleArn?: string;
  public get secretsManagerAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_access_role_arn');
  }
  public set secretsManagerAccessRoleArn(value: string) {
    this._secretsManagerAccessRoleArn = value;
  }
  public resetSecretsManagerAccessRoleArn() {
    this._secretsManagerAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerAccessRoleArnInput() {
    return this._secretsManagerAccessRoleArn;
  }

  // secrets_manager_secret_id - computed: true, optional: true, required: false
  private _secretsManagerSecretId?: string;
  public get secretsManagerSecretId() {
    return this.getStringAttribute('secrets_manager_secret_id');
  }
  public set secretsManagerSecretId(value: string) {
    this._secretsManagerSecretId = value;
  }
  public resetSecretsManagerSecretId() {
    this._secretsManagerSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerSecretIdInput() {
    return this._secretsManagerSecretId;
  }
}

export class DmsMigrationProjectTargetDataProviderDescriptorsList extends cdktn.ComplexList {
  public internalValue? : DmsMigrationProjectTargetDataProviderDescriptors[] | cdktn.IResolvable

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
  public get(index: number): DmsMigrationProjectTargetDataProviderDescriptorsOutputReference {
    return new DmsMigrationProjectTargetDataProviderDescriptorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project awscc_dms_migration_project}
*/
export class DmsMigrationProject extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_dms_migration_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DmsMigrationProject resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DmsMigrationProject to import
  * @param importFromId The id of the existing DmsMigrationProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DmsMigrationProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dms_migration_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dms_migration_project awscc_dms_migration_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsMigrationProjectConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DmsMigrationProjectConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_dms_migration_project',
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
    this._description = config.description;
    this._instanceProfileArn = config.instanceProfileArn;
    this._instanceProfileIdentifier = config.instanceProfileIdentifier;
    this._instanceProfileName = config.instanceProfileName;
    this._migrationProjectCreationTime = config.migrationProjectCreationTime;
    this._migrationProjectIdentifier = config.migrationProjectIdentifier;
    this._migrationProjectName = config.migrationProjectName;
    this._schemaConversionApplicationAttributes.internalValue = config.schemaConversionApplicationAttributes;
    this._sourceDataProviderDescriptors.internalValue = config.sourceDataProviderDescriptors;
    this._tags.internalValue = config.tags;
    this._targetDataProviderDescriptors.internalValue = config.targetDataProviderDescriptors;
    this._transformationRules = config.transformationRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_profile_arn - computed: true, optional: true, required: false
  private _instanceProfileArn?: string;
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string) {
    this._instanceProfileArn = value;
  }
  public resetInstanceProfileArn() {
    this._instanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileArnInput() {
    return this._instanceProfileArn;
  }

  // instance_profile_identifier - computed: true, optional: true, required: false
  private _instanceProfileIdentifier?: string;
  public get instanceProfileIdentifier() {
    return this.getStringAttribute('instance_profile_identifier');
  }
  public set instanceProfileIdentifier(value: string) {
    this._instanceProfileIdentifier = value;
  }
  public resetInstanceProfileIdentifier() {
    this._instanceProfileIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileIdentifierInput() {
    return this._instanceProfileIdentifier;
  }

  // instance_profile_name - computed: true, optional: true, required: false
  private _instanceProfileName?: string;
  public get instanceProfileName() {
    return this.getStringAttribute('instance_profile_name');
  }
  public set instanceProfileName(value: string) {
    this._instanceProfileName = value;
  }
  public resetInstanceProfileName() {
    this._instanceProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileNameInput() {
    return this._instanceProfileName;
  }

  // migration_project_arn - computed: true, optional: false, required: false
  public get migrationProjectArn() {
    return this.getStringAttribute('migration_project_arn');
  }

  // migration_project_creation_time - computed: true, optional: true, required: false
  private _migrationProjectCreationTime?: string;
  public get migrationProjectCreationTime() {
    return this.getStringAttribute('migration_project_creation_time');
  }
  public set migrationProjectCreationTime(value: string) {
    this._migrationProjectCreationTime = value;
  }
  public resetMigrationProjectCreationTime() {
    this._migrationProjectCreationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationProjectCreationTimeInput() {
    return this._migrationProjectCreationTime;
  }

  // migration_project_identifier - computed: true, optional: true, required: false
  private _migrationProjectIdentifier?: string;
  public get migrationProjectIdentifier() {
    return this.getStringAttribute('migration_project_identifier');
  }
  public set migrationProjectIdentifier(value: string) {
    this._migrationProjectIdentifier = value;
  }
  public resetMigrationProjectIdentifier() {
    this._migrationProjectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationProjectIdentifierInput() {
    return this._migrationProjectIdentifier;
  }

  // migration_project_name - computed: true, optional: true, required: false
  private _migrationProjectName?: string;
  public get migrationProjectName() {
    return this.getStringAttribute('migration_project_name');
  }
  public set migrationProjectName(value: string) {
    this._migrationProjectName = value;
  }
  public resetMigrationProjectName() {
    this._migrationProjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationProjectNameInput() {
    return this._migrationProjectName;
  }

  // schema_conversion_application_attributes - computed: true, optional: true, required: false
  private _schemaConversionApplicationAttributes = new DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference(this, "schema_conversion_application_attributes");
  public get schemaConversionApplicationAttributes() {
    return this._schemaConversionApplicationAttributes;
  }
  public putSchemaConversionApplicationAttributes(value: DmsMigrationProjectSchemaConversionApplicationAttributes) {
    this._schemaConversionApplicationAttributes.internalValue = value;
  }
  public resetSchemaConversionApplicationAttributes() {
    this._schemaConversionApplicationAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaConversionApplicationAttributesInput() {
    return this._schemaConversionApplicationAttributes.internalValue;
  }

  // source_data_provider_descriptors - computed: true, optional: true, required: false
  private _sourceDataProviderDescriptors = new DmsMigrationProjectSourceDataProviderDescriptorsList(this, "source_data_provider_descriptors", true);
  public get sourceDataProviderDescriptors() {
    return this._sourceDataProviderDescriptors;
  }
  public putSourceDataProviderDescriptors(value: DmsMigrationProjectSourceDataProviderDescriptors[] | cdktn.IResolvable) {
    this._sourceDataProviderDescriptors.internalValue = value;
  }
  public resetSourceDataProviderDescriptors() {
    this._sourceDataProviderDescriptors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataProviderDescriptorsInput() {
    return this._sourceDataProviderDescriptors.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DmsMigrationProjectTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DmsMigrationProjectTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_data_provider_descriptors - computed: true, optional: true, required: false
  private _targetDataProviderDescriptors = new DmsMigrationProjectTargetDataProviderDescriptorsList(this, "target_data_provider_descriptors", true);
  public get targetDataProviderDescriptors() {
    return this._targetDataProviderDescriptors;
  }
  public putTargetDataProviderDescriptors(value: DmsMigrationProjectTargetDataProviderDescriptors[] | cdktn.IResolvable) {
    this._targetDataProviderDescriptors.internalValue = value;
  }
  public resetTargetDataProviderDescriptors() {
    this._targetDataProviderDescriptors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDataProviderDescriptorsInput() {
    return this._targetDataProviderDescriptors.internalValue;
  }

  // transformation_rules - computed: true, optional: true, required: false
  private _transformationRules?: string;
  public get transformationRules() {
    return this.getStringAttribute('transformation_rules');
  }
  public set transformationRules(value: string) {
    this._transformationRules = value;
  }
  public resetTransformationRules() {
    this._transformationRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationRulesInput() {
    return this._transformationRules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      instance_profile_arn: cdktn.stringToTerraform(this._instanceProfileArn),
      instance_profile_identifier: cdktn.stringToTerraform(this._instanceProfileIdentifier),
      instance_profile_name: cdktn.stringToTerraform(this._instanceProfileName),
      migration_project_creation_time: cdktn.stringToTerraform(this._migrationProjectCreationTime),
      migration_project_identifier: cdktn.stringToTerraform(this._migrationProjectIdentifier),
      migration_project_name: cdktn.stringToTerraform(this._migrationProjectName),
      schema_conversion_application_attributes: dmsMigrationProjectSchemaConversionApplicationAttributesToTerraform(this._schemaConversionApplicationAttributes.internalValue),
      source_data_provider_descriptors: cdktn.listMapper(dmsMigrationProjectSourceDataProviderDescriptorsToTerraform, false)(this._sourceDataProviderDescriptors.internalValue),
      tags: cdktn.listMapper(dmsMigrationProjectTagsToTerraform, false)(this._tags.internalValue),
      target_data_provider_descriptors: cdktn.listMapper(dmsMigrationProjectTargetDataProviderDescriptorsToTerraform, false)(this._targetDataProviderDescriptors.internalValue),
      transformation_rules: cdktn.stringToTerraform(this._transformationRules),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_profile_arn: {
        value: cdktn.stringToHclTerraform(this._instanceProfileArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_profile_identifier: {
        value: cdktn.stringToHclTerraform(this._instanceProfileIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_profile_name: {
        value: cdktn.stringToHclTerraform(this._instanceProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_project_creation_time: {
        value: cdktn.stringToHclTerraform(this._migrationProjectCreationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_project_identifier: {
        value: cdktn.stringToHclTerraform(this._migrationProjectIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_project_name: {
        value: cdktn.stringToHclTerraform(this._migrationProjectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_conversion_application_attributes: {
        value: dmsMigrationProjectSchemaConversionApplicationAttributesToHclTerraform(this._schemaConversionApplicationAttributes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DmsMigrationProjectSchemaConversionApplicationAttributes",
      },
      source_data_provider_descriptors: {
        value: cdktn.listMapperHcl(dmsMigrationProjectSourceDataProviderDescriptorsToHclTerraform, false)(this._sourceDataProviderDescriptors.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DmsMigrationProjectSourceDataProviderDescriptorsList",
      },
      tags: {
        value: cdktn.listMapperHcl(dmsMigrationProjectTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DmsMigrationProjectTagsList",
      },
      target_data_provider_descriptors: {
        value: cdktn.listMapperHcl(dmsMigrationProjectTargetDataProviderDescriptorsToHclTerraform, false)(this._targetDataProviderDescriptors.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DmsMigrationProjectTargetDataProviderDescriptorsList",
      },
      transformation_rules: {
        value: cdktn.stringToHclTerraform(this._transformationRules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
