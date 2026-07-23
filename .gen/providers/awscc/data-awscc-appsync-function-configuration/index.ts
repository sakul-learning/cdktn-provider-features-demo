// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/appsync_function_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccAppsyncFunctionConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/appsync_function_configuration#id DataAwsccAppsyncFunctionConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccAppsyncFunctionConfigurationRuntime {
}

export function dataAwsccAppsyncFunctionConfigurationRuntimeToTerraform(struct?: DataAwsccAppsyncFunctionConfigurationRuntime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncFunctionConfigurationRuntimeToHclTerraform(struct?: DataAwsccAppsyncFunctionConfigurationRuntime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncFunctionConfigurationRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncFunctionConfigurationRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // runtime_version - computed: true, optional: false, required: false
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
}
export interface DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig {
}

export function dataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigToTerraform(struct?: DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigToHclTerraform(struct?: DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lambda_conflict_handler_arn - computed: true, optional: false, required: false
  public get lambdaConflictHandlerArn() {
    return this.getStringAttribute('lambda_conflict_handler_arn');
  }
}
export interface DataAwsccAppsyncFunctionConfigurationSyncConfig {
}

export function dataAwsccAppsyncFunctionConfigurationSyncConfigToTerraform(struct?: DataAwsccAppsyncFunctionConfigurationSyncConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncFunctionConfigurationSyncConfigToHclTerraform(struct?: DataAwsccAppsyncFunctionConfigurationSyncConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncFunctionConfigurationSyncConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncFunctionConfigurationSyncConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conflict_detection - computed: true, optional: false, required: false
  public get conflictDetection() {
    return this.getStringAttribute('conflict_detection');
  }

  // conflict_handler - computed: true, optional: false, required: false
  public get conflictHandler() {
    return this.getStringAttribute('conflict_handler');
  }

  // lambda_conflict_handler_config - computed: true, optional: false, required: false
  private _lambdaConflictHandlerConfig = new DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference(this, "lambda_conflict_handler_config");
  public get lambdaConflictHandlerConfig() {
    return this._lambdaConflictHandlerConfig;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/appsync_function_configuration awscc_appsync_function_configuration}
*/
export class DataAwsccAppsyncFunctionConfiguration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_appsync_function_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccAppsyncFunctionConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccAppsyncFunctionConfiguration to import
  * @param importFromId The id of the existing DataAwsccAppsyncFunctionConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/appsync_function_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccAppsyncFunctionConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appsync_function_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/appsync_function_configuration awscc_appsync_function_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAppsyncFunctionConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAppsyncFunctionConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_appsync_function_configuration',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: true, optional: false, required: false
  public get apiId() {
    return this.getStringAttribute('api_id');
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // code_s3_location - computed: true, optional: false, required: false
  public get codeS3Location() {
    return this.getStringAttribute('code_s3_location');
  }

  // data_source_name - computed: true, optional: false, required: false
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

  // function_id - computed: true, optional: false, required: false
  public get functionId() {
    return this.getStringAttribute('function_id');
  }

  // function_version - computed: true, optional: false, required: false
  public get functionVersion() {
    return this.getStringAttribute('function_version');
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

  // max_batch_size - computed: true, optional: false, required: false
  public get maxBatchSize() {
    return this.getNumberAttribute('max_batch_size');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // request_mapping_template - computed: true, optional: false, required: false
  public get requestMappingTemplate() {
    return this.getStringAttribute('request_mapping_template');
  }

  // request_mapping_template_s3_location - computed: true, optional: false, required: false
  public get requestMappingTemplateS3Location() {
    return this.getStringAttribute('request_mapping_template_s3_location');
  }

  // response_mapping_template - computed: true, optional: false, required: false
  public get responseMappingTemplate() {
    return this.getStringAttribute('response_mapping_template');
  }

  // response_mapping_template_s3_location - computed: true, optional: false, required: false
  public get responseMappingTemplateS3Location() {
    return this.getStringAttribute('response_mapping_template_s3_location');
  }

  // runtime - computed: true, optional: false, required: false
  private _runtime = new DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference(this, "runtime");
  public get runtime() {
    return this._runtime;
  }

  // sync_config - computed: true, optional: false, required: false
  private _syncConfig = new DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference(this, "sync_config");
  public get syncConfig() {
    return this._syncConfig;
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
