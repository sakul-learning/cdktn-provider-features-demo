// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GlueCatalogConfig extends cdktn.TerraformMetaArguments {
  /**
  * Allows third-party engines to access data in Amazon S3 locations that are registered with Lake Formation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#allow_full_table_external_data_access GlueCatalog#allow_full_table_external_data_access}
  */
  readonly allowFullTableExternalDataAccess?: string;
  /**
  * A structure that specifies data lake access properties and other custom properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#catalog_properties GlueCatalog#catalog_properties}
  */
  readonly catalogProperties?: GlueCatalogCatalogProperties;
  /**
  * An array of PrincipalPermissions objects for default database permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#create_database_default_permissions GlueCatalog#create_database_default_permissions}
  */
  readonly createDatabaseDefaultPermissions?: GlueCatalogCreateDatabaseDefaultPermissions[] | cdktn.IResolvable;
  /**
  * An array of PrincipalPermissions objects for default table permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#create_table_default_permissions GlueCatalog#create_table_default_permissions}
  */
  readonly createTableDefaultPermissions?: GlueCatalogCreateTableDefaultPermissions[] | cdktn.IResolvable;
  /**
  * A description of the catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#description GlueCatalog#description}
  */
  readonly description?: string;
  /**
  * A FederatedCatalog structure that references an entity outside the Glue Data Catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#federated_catalog GlueCatalog#federated_catalog}
  */
  readonly federatedCatalog?: GlueCatalogFederatedCatalog;
  /**
  * The name of the catalog to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#name GlueCatalog#name}
  */
  readonly name: string;
  /**
  * Specifies whether to overwrite child resource permissions with the default permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#overwrite_child_resource_permissions_with_default GlueCatalog#overwrite_child_resource_permissions_with_default}
  */
  readonly overwriteChildResourcePermissionsWithDefault?: string;
  /**
  * A map of key-value pairs that define parameters and properties of the catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#parameters GlueCatalog#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#tags GlueCatalog#tags}
  */
  readonly tags?: GlueCatalogTags[] | cdktn.IResolvable;
  /**
  * A structure that describes a target catalog for resource linking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#target_redshift_catalog GlueCatalog#target_redshift_catalog}
  */
  readonly targetRedshiftCatalog?: GlueCatalogTargetRedshiftCatalog;
}
export interface GlueCatalogCatalogPropertiesDataLakeAccessProperties {
  /**
  * Allows third-party engines to access data in Amazon S3 locations that are registered with Lake Formation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#allow_full_table_external_data_access GlueCatalog#allow_full_table_external_data_access}
  */
  readonly allowFullTableExternalDataAccess?: string;
  /**
  * Specifies a federated catalog type for the native catalog resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#catalog_type GlueCatalog#catalog_type}
  */
  readonly catalogType?: string;
  /**
  * Turns on or off data lake access for Apache Spark applications that access Amazon Redshift databases in the Data Catalog from any non-Redshift engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#data_lake_access GlueCatalog#data_lake_access}
  */
  readonly dataLakeAccess?: boolean | cdktn.IResolvable;
  /**
  * A role that will be assumed by Glue for transferring data into/out of the staging bucket during a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#data_transfer_role GlueCatalog#data_transfer_role}
  */
  readonly dataTransferRole?: string;
  /**
  * An encryption key that will be used for the staging bucket that will be created along with the catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#kms_key GlueCatalog#kms_key}
  */
  readonly kmsKey?: string;
}

export function glueCatalogCatalogPropertiesDataLakeAccessPropertiesToTerraform(struct?: GlueCatalogCatalogPropertiesDataLakeAccessProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_full_table_external_data_access: cdktn.stringToTerraform(struct!.allowFullTableExternalDataAccess),
    catalog_type: cdktn.stringToTerraform(struct!.catalogType),
    data_lake_access: cdktn.booleanToTerraform(struct!.dataLakeAccess),
    data_transfer_role: cdktn.stringToTerraform(struct!.dataTransferRole),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
  }
}


export function glueCatalogCatalogPropertiesDataLakeAccessPropertiesToHclTerraform(struct?: GlueCatalogCatalogPropertiesDataLakeAccessProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_full_table_external_data_access: {
      value: cdktn.stringToHclTerraform(struct!.allowFullTableExternalDataAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog_type: {
      value: cdktn.stringToHclTerraform(struct!.catalogType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_lake_access: {
      value: cdktn.booleanToHclTerraform(struct!.dataLakeAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_transfer_role: {
      value: cdktn.stringToHclTerraform(struct!.dataTransferRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueCatalogCatalogPropertiesDataLakeAccessProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowFullTableExternalDataAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFullTableExternalDataAccess = this._allowFullTableExternalDataAccess;
    }
    if (this._catalogType !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogType = this._catalogType;
    }
    if (this._dataLakeAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLakeAccess = this._dataLakeAccess;
    }
    if (this._dataTransferRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTransferRole = this._dataTransferRole;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogCatalogPropertiesDataLakeAccessProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowFullTableExternalDataAccess = undefined;
      this._catalogType = undefined;
      this._dataLakeAccess = undefined;
      this._dataTransferRole = undefined;
      this._kmsKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowFullTableExternalDataAccess = value.allowFullTableExternalDataAccess;
      this._catalogType = value.catalogType;
      this._dataLakeAccess = value.dataLakeAccess;
      this._dataTransferRole = value.dataTransferRole;
      this._kmsKey = value.kmsKey;
    }
  }

  // allow_full_table_external_data_access - computed: true, optional: true, required: false
  private _allowFullTableExternalDataAccess?: string; 
  public get allowFullTableExternalDataAccess() {
    return this.getStringAttribute('allow_full_table_external_data_access');
  }
  public set allowFullTableExternalDataAccess(value: string) {
    this._allowFullTableExternalDataAccess = value;
  }
  public resetAllowFullTableExternalDataAccess() {
    this._allowFullTableExternalDataAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFullTableExternalDataAccessInput() {
    return this._allowFullTableExternalDataAccess;
  }

  // catalog_type - computed: true, optional: true, required: false
  private _catalogType?: string; 
  public get catalogType() {
    return this.getStringAttribute('catalog_type');
  }
  public set catalogType(value: string) {
    this._catalogType = value;
  }
  public resetCatalogType() {
    this._catalogType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTypeInput() {
    return this._catalogType;
  }

  // data_lake_access - computed: true, optional: true, required: false
  private _dataLakeAccess?: boolean | cdktn.IResolvable; 
  public get dataLakeAccess() {
    return this.getBooleanAttribute('data_lake_access');
  }
  public set dataLakeAccess(value: boolean | cdktn.IResolvable) {
    this._dataLakeAccess = value;
  }
  public resetDataLakeAccess() {
    this._dataLakeAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLakeAccessInput() {
    return this._dataLakeAccess;
  }

  // data_transfer_role - computed: true, optional: true, required: false
  private _dataTransferRole?: string; 
  public get dataTransferRole() {
    return this.getStringAttribute('data_transfer_role');
  }
  public set dataTransferRole(value: string) {
    this._dataTransferRole = value;
  }
  public resetDataTransferRole() {
    this._dataTransferRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransferRoleInput() {
    return this._dataTransferRole;
  }

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // managed_workgroup_name - computed: true, optional: false, required: false
  public get managedWorkgroupName() {
    return this.getStringAttribute('managed_workgroup_name');
  }

  // managed_workgroup_status - computed: true, optional: false, required: false
  public get managedWorkgroupStatus() {
    return this.getStringAttribute('managed_workgroup_status');
  }

  // redshift_database_name - computed: true, optional: false, required: false
  public get redshiftDatabaseName() {
    return this.getStringAttribute('redshift_database_name');
  }
}
export interface GlueCatalogCatalogProperties {
  /**
  * Data lake access properties for the catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#data_lake_access_properties GlueCatalog#data_lake_access_properties}
  */
  readonly dataLakeAccessProperties?: GlueCatalogCatalogPropertiesDataLakeAccessProperties;
}

export function glueCatalogCatalogPropertiesToTerraform(struct?: GlueCatalogCatalogProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_lake_access_properties: glueCatalogCatalogPropertiesDataLakeAccessPropertiesToTerraform(struct!.dataLakeAccessProperties),
  }
}


export function glueCatalogCatalogPropertiesToHclTerraform(struct?: GlueCatalogCatalogProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_lake_access_properties: {
      value: glueCatalogCatalogPropertiesDataLakeAccessPropertiesToHclTerraform(struct!.dataLakeAccessProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueCatalogCatalogPropertiesDataLakeAccessProperties",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogCatalogPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueCatalogCatalogProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLakeAccessProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLakeAccessProperties = this._dataLakeAccessProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogCatalogProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataLakeAccessProperties.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataLakeAccessProperties.internalValue = value.dataLakeAccessProperties;
    }
  }

  // custom_properties - computed: true, optional: false, required: false
  private _customProperties = new cdktn.StringMap(this, "custom_properties");
  public get customProperties() {
    return this._customProperties;
  }

  // data_lake_access_properties - computed: true, optional: true, required: false
  private _dataLakeAccessProperties = new GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference(this, "data_lake_access_properties");
  public get dataLakeAccessProperties() {
    return this._dataLakeAccessProperties;
  }
  public putDataLakeAccessProperties(value: GlueCatalogCatalogPropertiesDataLakeAccessProperties) {
    this._dataLakeAccessProperties.internalValue = value;
  }
  public resetDataLakeAccessProperties() {
    this._dataLakeAccessProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLakeAccessPropertiesInput() {
    return this._dataLakeAccessProperties.internalValue;
  }
}
export interface GlueCatalogCreateDatabaseDefaultPermissionsPrincipal {
  /**
  * An identifier for the Lake Formation principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#data_lake_principal_identifier GlueCatalog#data_lake_principal_identifier}
  */
  readonly dataLakePrincipalIdentifier?: string;
}

export function glueCatalogCreateDatabaseDefaultPermissionsPrincipalToTerraform(struct?: GlueCatalogCreateDatabaseDefaultPermissionsPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_lake_principal_identifier: cdktn.stringToTerraform(struct!.dataLakePrincipalIdentifier),
  }
}


export function glueCatalogCreateDatabaseDefaultPermissionsPrincipalToHclTerraform(struct?: GlueCatalogCreateDatabaseDefaultPermissionsPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_lake_principal_identifier: {
      value: cdktn.stringToHclTerraform(struct!.dataLakePrincipalIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueCatalogCreateDatabaseDefaultPermissionsPrincipal | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLakePrincipalIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLakePrincipalIdentifier = this._dataLakePrincipalIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogCreateDatabaseDefaultPermissionsPrincipal | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataLakePrincipalIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataLakePrincipalIdentifier = value.dataLakePrincipalIdentifier;
    }
  }

  // data_lake_principal_identifier - computed: true, optional: true, required: false
  private _dataLakePrincipalIdentifier?: string; 
  public get dataLakePrincipalIdentifier() {
    return this.getStringAttribute('data_lake_principal_identifier');
  }
  public set dataLakePrincipalIdentifier(value: string) {
    this._dataLakePrincipalIdentifier = value;
  }
  public resetDataLakePrincipalIdentifier() {
    this._dataLakePrincipalIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLakePrincipalIdentifierInput() {
    return this._dataLakePrincipalIdentifier;
  }
}
export interface GlueCatalogCreateDatabaseDefaultPermissions {
  /**
  * The permissions that are granted to the principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#permissions GlueCatalog#permissions}
  */
  readonly permissions?: string[];
  /**
  * The Lake Formation principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#principal GlueCatalog#principal}
  */
  readonly principal?: GlueCatalogCreateDatabaseDefaultPermissionsPrincipal;
}

export function glueCatalogCreateDatabaseDefaultPermissionsToTerraform(struct?: GlueCatalogCreateDatabaseDefaultPermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    permissions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.permissions),
    principal: glueCatalogCreateDatabaseDefaultPermissionsPrincipalToTerraform(struct!.principal),
  }
}


export function glueCatalogCreateDatabaseDefaultPermissionsToHclTerraform(struct?: GlueCatalogCreateDatabaseDefaultPermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    permissions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principal: {
      value: glueCatalogCreateDatabaseDefaultPermissionsPrincipalToHclTerraform(struct!.principal),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueCatalogCreateDatabaseDefaultPermissionsPrincipal",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogCreateDatabaseDefaultPermissionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogCreateDatabaseDefaultPermissions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._principal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogCreateDatabaseDefaultPermissions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permissions = undefined;
      this._principal.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permissions = value.permissions;
      this._principal.internalValue = value.principal;
    }
  }

  // permissions - computed: true, optional: true, required: false
  private _permissions?: string[]; 
  public get permissions() {
    return this.getListAttribute('permissions');
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // principal - computed: true, optional: true, required: false
  private _principal = new GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: GlueCatalogCreateDatabaseDefaultPermissionsPrincipal) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }
}

export class GlueCatalogCreateDatabaseDefaultPermissionsList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogCreateDatabaseDefaultPermissions[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogCreateDatabaseDefaultPermissionsOutputReference {
    return new GlueCatalogCreateDatabaseDefaultPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogCreateTableDefaultPermissionsPrincipal {
  /**
  * An identifier for the Lake Formation principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#data_lake_principal_identifier GlueCatalog#data_lake_principal_identifier}
  */
  readonly dataLakePrincipalIdentifier?: string;
}

export function glueCatalogCreateTableDefaultPermissionsPrincipalToTerraform(struct?: GlueCatalogCreateTableDefaultPermissionsPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_lake_principal_identifier: cdktn.stringToTerraform(struct!.dataLakePrincipalIdentifier),
  }
}


export function glueCatalogCreateTableDefaultPermissionsPrincipalToHclTerraform(struct?: GlueCatalogCreateTableDefaultPermissionsPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_lake_principal_identifier: {
      value: cdktn.stringToHclTerraform(struct!.dataLakePrincipalIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueCatalogCreateTableDefaultPermissionsPrincipal | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLakePrincipalIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLakePrincipalIdentifier = this._dataLakePrincipalIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogCreateTableDefaultPermissionsPrincipal | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataLakePrincipalIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataLakePrincipalIdentifier = value.dataLakePrincipalIdentifier;
    }
  }

  // data_lake_principal_identifier - computed: true, optional: true, required: false
  private _dataLakePrincipalIdentifier?: string; 
  public get dataLakePrincipalIdentifier() {
    return this.getStringAttribute('data_lake_principal_identifier');
  }
  public set dataLakePrincipalIdentifier(value: string) {
    this._dataLakePrincipalIdentifier = value;
  }
  public resetDataLakePrincipalIdentifier() {
    this._dataLakePrincipalIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLakePrincipalIdentifierInput() {
    return this._dataLakePrincipalIdentifier;
  }
}
export interface GlueCatalogCreateTableDefaultPermissions {
  /**
  * The permissions that are granted to the principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#permissions GlueCatalog#permissions}
  */
  readonly permissions?: string[];
  /**
  * The Lake Formation principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#principal GlueCatalog#principal}
  */
  readonly principal?: GlueCatalogCreateTableDefaultPermissionsPrincipal;
}

export function glueCatalogCreateTableDefaultPermissionsToTerraform(struct?: GlueCatalogCreateTableDefaultPermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    permissions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.permissions),
    principal: glueCatalogCreateTableDefaultPermissionsPrincipalToTerraform(struct!.principal),
  }
}


export function glueCatalogCreateTableDefaultPermissionsToHclTerraform(struct?: GlueCatalogCreateTableDefaultPermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    permissions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principal: {
      value: glueCatalogCreateTableDefaultPermissionsPrincipalToHclTerraform(struct!.principal),
      isBlock: true,
      type: "struct",
      storageClassType: "GlueCatalogCreateTableDefaultPermissionsPrincipal",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogCreateTableDefaultPermissionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogCreateTableDefaultPermissions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._principal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogCreateTableDefaultPermissions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permissions = undefined;
      this._principal.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permissions = value.permissions;
      this._principal.internalValue = value.principal;
    }
  }

  // permissions - computed: true, optional: true, required: false
  private _permissions?: string[]; 
  public get permissions() {
    return this.getListAttribute('permissions');
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // principal - computed: true, optional: true, required: false
  private _principal = new GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: GlueCatalogCreateTableDefaultPermissionsPrincipal) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }
}

export class GlueCatalogCreateTableDefaultPermissionsList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogCreateTableDefaultPermissions[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogCreateTableDefaultPermissionsOutputReference {
    return new GlueCatalogCreateTableDefaultPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogFederatedCatalog {
  /**
  * The name of the connection to an external data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#connection_name GlueCatalog#connection_name}
  */
  readonly connectionName?: string;
  /**
  * A unique identifier for the federated catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#identifier GlueCatalog#identifier}
  */
  readonly identifier?: string;
}

export function glueCatalogFederatedCatalogToTerraform(struct?: GlueCatalogFederatedCatalog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_name: cdktn.stringToTerraform(struct!.connectionName),
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function glueCatalogFederatedCatalogToHclTerraform(struct?: GlueCatalogFederatedCatalog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_name: {
      value: cdktn.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogFederatedCatalogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueCatalogFederatedCatalog | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogFederatedCatalog | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionName = undefined;
      this._identifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionName = value.connectionName;
      this._identifier = value.identifier;
    }
  }

  // connection_name - computed: true, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}
export interface GlueCatalogTags {
  /**
  * The key name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#key GlueCatalog#key}
  */
  readonly key?: string;
  /**
  * The value for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#value GlueCatalog#value}
  */
  readonly value?: string;
}

export function glueCatalogTagsToTerraform(struct?: GlueCatalogTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function glueCatalogTagsToHclTerraform(struct?: GlueCatalogTags | cdktn.IResolvable): any {
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

export class GlueCatalogTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GlueCatalogTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GlueCatalogTags | cdktn.IResolvable | undefined) {
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

export class GlueCatalogTagsList extends cdktn.ComplexList {
  public internalValue? : GlueCatalogTags[] | cdktn.IResolvable

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
  public get(index: number): GlueCatalogTagsOutputReference {
    return new GlueCatalogTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogTargetRedshiftCatalog {
  /**
  * The Amazon Resource Name (ARN) of the catalog resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#catalog_arn GlueCatalog#catalog_arn}
  */
  readonly catalogArn?: string;
}

export function glueCatalogTargetRedshiftCatalogToTerraform(struct?: GlueCatalogTargetRedshiftCatalog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_arn: cdktn.stringToTerraform(struct!.catalogArn),
  }
}


export function glueCatalogTargetRedshiftCatalogToHclTerraform(struct?: GlueCatalogTargetRedshiftCatalog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_arn: {
      value: cdktn.stringToHclTerraform(struct!.catalogArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTargetRedshiftCatalogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlueCatalogTargetRedshiftCatalog | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogArn = this._catalogArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTargetRedshiftCatalog | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogArn = value.catalogArn;
    }
  }

  // catalog_arn - computed: true, optional: true, required: false
  private _catalogArn?: string; 
  public get catalogArn() {
    return this.getStringAttribute('catalog_arn');
  }
  public set catalogArn(value: string) {
    this._catalogArn = value;
  }
  public resetCatalogArn() {
    this._catalogArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogArnInput() {
    return this._catalogArn;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog awscc_glue_catalog}
*/
export class GlueCatalog extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_glue_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GlueCatalog resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueCatalog to import
  * @param importFromId The id of the existing GlueCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/glue_catalog awscc_glue_catalog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: GlueCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_glue_catalog',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowFullTableExternalDataAccess = config.allowFullTableExternalDataAccess;
    this._catalogProperties.internalValue = config.catalogProperties;
    this._createDatabaseDefaultPermissions.internalValue = config.createDatabaseDefaultPermissions;
    this._createTableDefaultPermissions.internalValue = config.createTableDefaultPermissions;
    this._description = config.description;
    this._federatedCatalog.internalValue = config.federatedCatalog;
    this._name = config.name;
    this._overwriteChildResourcePermissionsWithDefault = config.overwriteChildResourcePermissionsWithDefault;
    this._parameters = config.parameters;
    this._tags.internalValue = config.tags;
    this._targetRedshiftCatalog.internalValue = config.targetRedshiftCatalog;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_full_table_external_data_access - computed: true, optional: true, required: false
  private _allowFullTableExternalDataAccess?: string; 
  public get allowFullTableExternalDataAccess() {
    return this.getStringAttribute('allow_full_table_external_data_access');
  }
  public set allowFullTableExternalDataAccess(value: string) {
    this._allowFullTableExternalDataAccess = value;
  }
  public resetAllowFullTableExternalDataAccess() {
    this._allowFullTableExternalDataAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFullTableExternalDataAccessInput() {
    return this._allowFullTableExternalDataAccess;
  }

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // catalog_properties - computed: true, optional: true, required: false
  private _catalogProperties = new GlueCatalogCatalogPropertiesOutputReference(this, "catalog_properties");
  public get catalogProperties() {
    return this._catalogProperties;
  }
  public putCatalogProperties(value: GlueCatalogCatalogProperties) {
    this._catalogProperties.internalValue = value;
  }
  public resetCatalogProperties() {
    this._catalogProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogPropertiesInput() {
    return this._catalogProperties.internalValue;
  }

  // create_database_default_permissions - computed: true, optional: true, required: false
  private _createDatabaseDefaultPermissions = new GlueCatalogCreateDatabaseDefaultPermissionsList(this, "create_database_default_permissions", false);
  public get createDatabaseDefaultPermissions() {
    return this._createDatabaseDefaultPermissions;
  }
  public putCreateDatabaseDefaultPermissions(value: GlueCatalogCreateDatabaseDefaultPermissions[] | cdktn.IResolvable) {
    this._createDatabaseDefaultPermissions.internalValue = value;
  }
  public resetCreateDatabaseDefaultPermissions() {
    this._createDatabaseDefaultPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDatabaseDefaultPermissionsInput() {
    return this._createDatabaseDefaultPermissions.internalValue;
  }

  // create_table_default_permissions - computed: true, optional: true, required: false
  private _createTableDefaultPermissions = new GlueCatalogCreateTableDefaultPermissionsList(this, "create_table_default_permissions", false);
  public get createTableDefaultPermissions() {
    return this._createTableDefaultPermissions;
  }
  public putCreateTableDefaultPermissions(value: GlueCatalogCreateTableDefaultPermissions[] | cdktn.IResolvable) {
    this._createTableDefaultPermissions.internalValue = value;
  }
  public resetCreateTableDefaultPermissions() {
    this._createTableDefaultPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTableDefaultPermissionsInput() {
    return this._createTableDefaultPermissions.internalValue;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
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

  // federated_catalog - computed: true, optional: true, required: false
  private _federatedCatalog = new GlueCatalogFederatedCatalogOutputReference(this, "federated_catalog");
  public get federatedCatalog() {
    return this._federatedCatalog;
  }
  public putFederatedCatalog(value: GlueCatalogFederatedCatalog) {
    this._federatedCatalog.internalValue = value;
  }
  public resetFederatedCatalog() {
    this._federatedCatalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedCatalogInput() {
    return this._federatedCatalog.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // overwrite_child_resource_permissions_with_default - computed: true, optional: true, required: false
  private _overwriteChildResourcePermissionsWithDefault?: string; 
  public get overwriteChildResourcePermissionsWithDefault() {
    return this.getStringAttribute('overwrite_child_resource_permissions_with_default');
  }
  public set overwriteChildResourcePermissionsWithDefault(value: string) {
    this._overwriteChildResourcePermissionsWithDefault = value;
  }
  public resetOverwriteChildResourcePermissionsWithDefault() {
    this._overwriteChildResourcePermissionsWithDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteChildResourcePermissionsWithDefaultInput() {
    return this._overwriteChildResourcePermissionsWithDefault;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new GlueCatalogTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: GlueCatalogTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_redshift_catalog - computed: true, optional: true, required: false
  private _targetRedshiftCatalog = new GlueCatalogTargetRedshiftCatalogOutputReference(this, "target_redshift_catalog");
  public get targetRedshiftCatalog() {
    return this._targetRedshiftCatalog;
  }
  public putTargetRedshiftCatalog(value: GlueCatalogTargetRedshiftCatalog) {
    this._targetRedshiftCatalog.internalValue = value;
  }
  public resetTargetRedshiftCatalog() {
    this._targetRedshiftCatalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRedshiftCatalogInput() {
    return this._targetRedshiftCatalog.internalValue;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_full_table_external_data_access: cdktn.stringToTerraform(this._allowFullTableExternalDataAccess),
      catalog_properties: glueCatalogCatalogPropertiesToTerraform(this._catalogProperties.internalValue),
      create_database_default_permissions: cdktn.listMapper(glueCatalogCreateDatabaseDefaultPermissionsToTerraform, false)(this._createDatabaseDefaultPermissions.internalValue),
      create_table_default_permissions: cdktn.listMapper(glueCatalogCreateTableDefaultPermissionsToTerraform, false)(this._createTableDefaultPermissions.internalValue),
      description: cdktn.stringToTerraform(this._description),
      federated_catalog: glueCatalogFederatedCatalogToTerraform(this._federatedCatalog.internalValue),
      name: cdktn.stringToTerraform(this._name),
      overwrite_child_resource_permissions_with_default: cdktn.stringToTerraform(this._overwriteChildResourcePermissionsWithDefault),
      parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._parameters),
      tags: cdktn.listMapper(glueCatalogTagsToTerraform, false)(this._tags.internalValue),
      target_redshift_catalog: glueCatalogTargetRedshiftCatalogToTerraform(this._targetRedshiftCatalog.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_full_table_external_data_access: {
        value: cdktn.stringToHclTerraform(this._allowFullTableExternalDataAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog_properties: {
        value: glueCatalogCatalogPropertiesToHclTerraform(this._catalogProperties.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlueCatalogCatalogProperties",
      },
      create_database_default_permissions: {
        value: cdktn.listMapperHcl(glueCatalogCreateDatabaseDefaultPermissionsToHclTerraform, false)(this._createDatabaseDefaultPermissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCatalogCreateDatabaseDefaultPermissionsList",
      },
      create_table_default_permissions: {
        value: cdktn.listMapperHcl(glueCatalogCreateTableDefaultPermissionsToHclTerraform, false)(this._createTableDefaultPermissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCatalogCreateTableDefaultPermissionsList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      federated_catalog: {
        value: glueCatalogFederatedCatalogToHclTerraform(this._federatedCatalog.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlueCatalogFederatedCatalog",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrite_child_resource_permissions_with_default: {
        value: cdktn.stringToHclTerraform(this._overwriteChildResourcePermissionsWithDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags: {
        value: cdktn.listMapperHcl(glueCatalogTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GlueCatalogTagsList",
      },
      target_redshift_catalog: {
        value: glueCatalogTargetRedshiftCatalogToHclTerraform(this._targetRedshiftCatalog.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlueCatalogTargetRedshiftCatalog",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
