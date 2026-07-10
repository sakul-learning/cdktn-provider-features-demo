// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/dms_data_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDmsDataProviderConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/dms_data_provider#id DataAwsccDmsDataProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDmsDataProviderSettingsDocDbSettings {
}

export function dataAwsccDmsDataProviderSettingsDocDbSettingsToTerraform(struct?: DataAwsccDmsDataProviderSettingsDocDbSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsDataProviderSettingsDocDbSettingsToHclTerraform(struct?: DataAwsccDmsDataProviderSettingsDocDbSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsDataProviderSettingsDocDbSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsDataProviderSettingsDocDbSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_mode - computed: true, optional: false, required: false
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
}
export interface DataAwsccDmsDataProviderSettingsIbmDb2LuwSettings {
}

export function dataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsToTerraform(struct?: DataAwsccDmsDataProviderSettingsIbmDb2LuwSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsToHclTerraform(struct?: DataAwsccDmsDataProviderSettingsIbmDb2LuwSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsDataProviderSettingsIbmDb2LuwSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsDataProviderSettingsIbmDb2LuwSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_mode - computed: true, optional: false, required: false
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
}
export interface DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettings {
}

export function dataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsToTerraform(struct?: DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsToHclTerraform(struct?: DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_mode - computed: true, optional: false, required: false
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
}
export interface DataAwsccDmsDataProviderSettingsMariaDbSettings {
}

export function dataAwsccDmsDataProviderSettingsMariaDbSettingsToTerraform(struct?: DataAwsccDmsDataProviderSettingsMariaDbSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsDataProviderSettingsMariaDbSettingsToHclTerraform(struct?: DataAwsccDmsDataProviderSettingsMariaDbSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsDataProviderSettingsMariaDbSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsDataProviderSettingsMariaDbSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_mode - computed: true, optional: false, required: false
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
}
export interface DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettings {
}

export function dataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsToTerraform(struct?: DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsToHclTerraform(struct?: DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_mode - computed: true, optional: false, required: false
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
}
export interface DataAwsccDmsDataProviderSettingsMongoDbSettings {
}

export function dataAwsccDmsDataProviderSettingsMongoDbSettingsToTerraform(struct?: DataAwsccDmsDataProviderSettingsMongoDbSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsDataProviderSettingsMongoDbSettingsToHclTerraform(struct?: DataAwsccDmsDataProviderSettingsMongoDbSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsDataProviderSettingsMongoDbSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsDataProviderSettingsMongoDbSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_mechanism - computed: true, optional: false, required: false
  public get authMechanism() {
    return this.getStringAttribute('auth_mechanism');
  }

  // auth_source - computed: true, optional: false, required: false
  public get authSource() {
    return this.getStringAttribute('auth_source');
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_mode - computed: true, optional: false, required: false
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
}
export interface DataAwsccDmsDataProviderSettingsMySqlSettings {
}

export function dataAwsccDmsDataProviderSettingsMySqlSettingsToTerraform(struct?: DataAwsccDmsDataProviderSettingsMySqlSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsDataProviderSettingsMySqlSettingsToHclTerraform(struct?: DataAwsccDmsDataProviderSettingsMySqlSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsDataProviderSettingsMySqlSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsDataProviderSettingsMySqlSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_mode - computed: true, optional: false, required: false
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
}
export interface DataAwsccDmsDataProviderSettingsOracleSettings {
}

export function dataAwsccDmsDataProviderSettingsOracleSettingsToTerraform(struct?: DataAwsccDmsDataProviderSettingsOracleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsDataProviderSettingsOracleSettingsToHclTerraform(struct?: DataAwsccDmsDataProviderSettingsOracleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsDataProviderSettingsOracleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsDataProviderSettingsOracleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asm_server - computed: true, optional: false, required: false
  public get asmServer() {
    return this.getStringAttribute('asm_server');
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // secrets_manager_oracle_asm_access_role_arn - computed: true, optional: false, required: false
  public get secretsManagerOracleAsmAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_oracle_asm_access_role_arn');
  }

  // secrets_manager_oracle_asm_secret_id - computed: true, optional: false, required: false
  public get secretsManagerOracleAsmSecretId() {
    return this.getStringAttribute('secrets_manager_oracle_asm_secret_id');
  }

  // secrets_manager_security_db_encryption_access_role_arn - computed: true, optional: false, required: false
  public get secretsManagerSecurityDbEncryptionAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_security_db_encryption_access_role_arn');
  }

  // secrets_manager_security_db_encryption_secret_id - computed: true, optional: false, required: false
  public get secretsManagerSecurityDbEncryptionSecretId() {
    return this.getStringAttribute('secrets_manager_security_db_encryption_secret_id');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_mode - computed: true, optional: false, required: false
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
}
export interface DataAwsccDmsDataProviderSettingsPostgreSqlSettings {
}

export function dataAwsccDmsDataProviderSettingsPostgreSqlSettingsToTerraform(struct?: DataAwsccDmsDataProviderSettingsPostgreSqlSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsDataProviderSettingsPostgreSqlSettingsToHclTerraform(struct?: DataAwsccDmsDataProviderSettingsPostgreSqlSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsDataProviderSettingsPostgreSqlSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsDataProviderSettingsPostgreSqlSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_mode - computed: true, optional: false, required: false
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
}
export interface DataAwsccDmsDataProviderSettingsRedshiftSettings {
}

export function dataAwsccDmsDataProviderSettingsRedshiftSettingsToTerraform(struct?: DataAwsccDmsDataProviderSettingsRedshiftSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsDataProviderSettingsRedshiftSettingsToHclTerraform(struct?: DataAwsccDmsDataProviderSettingsRedshiftSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsDataProviderSettingsRedshiftSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsDataProviderSettingsRedshiftSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}
export interface DataAwsccDmsDataProviderSettingsSybaseAseSettings {
}

export function dataAwsccDmsDataProviderSettingsSybaseAseSettingsToTerraform(struct?: DataAwsccDmsDataProviderSettingsSybaseAseSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsDataProviderSettingsSybaseAseSettingsToHclTerraform(struct?: DataAwsccDmsDataProviderSettingsSybaseAseSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsDataProviderSettingsSybaseAseSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsDataProviderSettingsSybaseAseSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // encrypt_password - computed: true, optional: false, required: false
  public get encryptPassword() {
    return this.getBooleanAttribute('encrypt_password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_mode - computed: true, optional: false, required: false
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
}
export interface DataAwsccDmsDataProviderSettings {
}

export function dataAwsccDmsDataProviderSettingsToTerraform(struct?: DataAwsccDmsDataProviderSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsDataProviderSettingsToHclTerraform(struct?: DataAwsccDmsDataProviderSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsDataProviderSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDmsDataProviderSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsDataProviderSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // doc_db_settings - computed: true, optional: false, required: false
  private _docDbSettings = new DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference(this, "doc_db_settings");
  public get docDbSettings() {
    return this._docDbSettings;
  }

  // ibm_db_2_luw_settings - computed: true, optional: false, required: false
  private _ibmDb2LuwSettings = new DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference(this, "ibm_db_2_luw_settings");
  public get ibmDb2LuwSettings() {
    return this._ibmDb2LuwSettings;
  }

  // ibm_db_2_z_os_settings - computed: true, optional: false, required: false
  private _ibmDb2ZOsSettings = new DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference(this, "ibm_db_2_z_os_settings");
  public get ibmDb2ZOsSettings() {
    return this._ibmDb2ZOsSettings;
  }

  // maria_db_settings - computed: true, optional: false, required: false
  private _mariaDbSettings = new DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference(this, "maria_db_settings");
  public get mariaDbSettings() {
    return this._mariaDbSettings;
  }

  // microsoft_sql_server_settings - computed: true, optional: false, required: false
  private _microsoftSqlServerSettings = new DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference(this, "microsoft_sql_server_settings");
  public get microsoftSqlServerSettings() {
    return this._microsoftSqlServerSettings;
  }

  // mongo_db_settings - computed: true, optional: false, required: false
  private _mongoDbSettings = new DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference(this, "mongo_db_settings");
  public get mongoDbSettings() {
    return this._mongoDbSettings;
  }

  // my_sql_settings - computed: true, optional: false, required: false
  private _mySqlSettings = new DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference(this, "my_sql_settings");
  public get mySqlSettings() {
    return this._mySqlSettings;
  }

  // oracle_settings - computed: true, optional: false, required: false
  private _oracleSettings = new DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference(this, "oracle_settings");
  public get oracleSettings() {
    return this._oracleSettings;
  }

  // postgre_sql_settings - computed: true, optional: false, required: false
  private _postgreSqlSettings = new DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference(this, "postgre_sql_settings");
  public get postgreSqlSettings() {
    return this._postgreSqlSettings;
  }

  // redshift_settings - computed: true, optional: false, required: false
  private _redshiftSettings = new DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference(this, "redshift_settings");
  public get redshiftSettings() {
    return this._redshiftSettings;
  }

  // sybase_ase_settings - computed: true, optional: false, required: false
  private _sybaseAseSettings = new DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference(this, "sybase_ase_settings");
  public get sybaseAseSettings() {
    return this._sybaseAseSettings;
  }
}
export interface DataAwsccDmsDataProviderTags {
}

export function dataAwsccDmsDataProviderTagsToTerraform(struct?: DataAwsccDmsDataProviderTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDmsDataProviderTagsToHclTerraform(struct?: DataAwsccDmsDataProviderTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDmsDataProviderTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDmsDataProviderTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDmsDataProviderTags | undefined) {
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

export class DataAwsccDmsDataProviderTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDmsDataProviderTagsOutputReference {
    return new DataAwsccDmsDataProviderTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/dms_data_provider awscc_dms_data_provider}
*/
export class DataAwsccDmsDataProvider extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_dms_data_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDmsDataProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDmsDataProvider to import
  * @param importFromId The id of the existing DataAwsccDmsDataProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/dms_data_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDmsDataProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dms_data_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/dms_data_provider awscc_dms_data_provider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDmsDataProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDmsDataProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_dms_data_provider',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_provider_arn - computed: true, optional: false, required: false
  public get dataProviderArn() {
    return this.getStringAttribute('data_provider_arn');
  }

  // data_provider_creation_time - computed: true, optional: false, required: false
  public get dataProviderCreationTime() {
    return this.getStringAttribute('data_provider_creation_time');
  }

  // data_provider_identifier - computed: true, optional: false, required: false
  public get dataProviderIdentifier() {
    return this.getStringAttribute('data_provider_identifier');
  }

  // data_provider_name - computed: true, optional: false, required: false
  public get dataProviderName() {
    return this.getStringAttribute('data_provider_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // exact_settings - computed: true, optional: false, required: false
  public get exactSettings() {
    return this.getBooleanAttribute('exact_settings');
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

  // settings - computed: true, optional: false, required: false
  private _settings = new DataAwsccDmsDataProviderSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDmsDataProviderTagsList(this, "tags", true);
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
