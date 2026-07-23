// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/secretsmanager_rotation_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSecretsmanagerRotationScheduleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/secretsmanager_rotation_schedule#id DataAwsccSecretsmanagerRotationSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadata {
}

export function dataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataToTerraform(struct?: DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataToHclTerraform(struct?: DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadata | undefined) {
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

export class DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference {
    return new DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSecretsmanagerRotationScheduleHostedRotationLambda {
}

export function dataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaToTerraform(struct?: DataAwsccSecretsmanagerRotationScheduleHostedRotationLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaToHclTerraform(struct?: DataAwsccSecretsmanagerRotationScheduleHostedRotationLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecretsmanagerRotationScheduleHostedRotationLambda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecretsmanagerRotationScheduleHostedRotationLambda | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude_characters - computed: true, optional: false, required: false
  public get excludeCharacters() {
    return this.getStringAttribute('exclude_characters');
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // master_secret_arn - computed: true, optional: false, required: false
  public get masterSecretArn() {
    return this.getStringAttribute('master_secret_arn');
  }

  // master_secret_kms_key_arn - computed: true, optional: false, required: false
  public get masterSecretKmsKeyArn() {
    return this.getStringAttribute('master_secret_kms_key_arn');
  }

  // rotation_lambda_name - computed: true, optional: false, required: false
  public get rotationLambdaName() {
    return this.getStringAttribute('rotation_lambda_name');
  }

  // rotation_type - computed: true, optional: false, required: false
  public get rotationType() {
    return this.getStringAttribute('rotation_type');
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // superuser_secret_arn - computed: true, optional: false, required: false
  public get superuserSecretArn() {
    return this.getStringAttribute('superuser_secret_arn');
  }

  // superuser_secret_kms_key_arn - computed: true, optional: false, required: false
  public get superuserSecretKmsKeyArn() {
    return this.getStringAttribute('superuser_secret_kms_key_arn');
  }

  // vpc_security_group_ids - computed: true, optional: false, required: false
  public get vpcSecurityGroupIds() {
    return this.getStringAttribute('vpc_security_group_ids');
  }

  // vpc_subnet_ids - computed: true, optional: false, required: false
  public get vpcSubnetIds() {
    return this.getStringAttribute('vpc_subnet_ids');
  }
}
export interface DataAwsccSecretsmanagerRotationScheduleRotationRules {
}

export function dataAwsccSecretsmanagerRotationScheduleRotationRulesToTerraform(struct?: DataAwsccSecretsmanagerRotationScheduleRotationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecretsmanagerRotationScheduleRotationRulesToHclTerraform(struct?: DataAwsccSecretsmanagerRotationScheduleRotationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecretsmanagerRotationScheduleRotationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecretsmanagerRotationScheduleRotationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automatically_after_days - computed: true, optional: false, required: false
  public get automaticallyAfterDays() {
    return this.getNumberAttribute('automatically_after_days');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/secretsmanager_rotation_schedule awscc_secretsmanager_rotation_schedule}
*/
export class DataAwsccSecretsmanagerRotationSchedule extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_secretsmanager_rotation_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSecretsmanagerRotationSchedule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSecretsmanagerRotationSchedule to import
  * @param importFromId The id of the existing DataAwsccSecretsmanagerRotationSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/secretsmanager_rotation_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSecretsmanagerRotationSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_secretsmanager_rotation_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/secretsmanager_rotation_schedule awscc_secretsmanager_rotation_schedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSecretsmanagerRotationScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSecretsmanagerRotationScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_secretsmanager_rotation_schedule',
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

  // external_secret_rotation_metadata - computed: true, optional: false, required: false
  private _externalSecretRotationMetadata = new DataAwsccSecretsmanagerRotationScheduleExternalSecretRotationMetadataList(this, "external_secret_rotation_metadata", false);
  public get externalSecretRotationMetadata() {
    return this._externalSecretRotationMetadata;
  }

  // external_secret_rotation_role_arn - computed: true, optional: false, required: false
  public get externalSecretRotationRoleArn() {
    return this.getStringAttribute('external_secret_rotation_role_arn');
  }

  // hosted_rotation_lambda - computed: true, optional: false, required: false
  private _hostedRotationLambda = new DataAwsccSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference(this, "hosted_rotation_lambda");
  public get hostedRotationLambda() {
    return this._hostedRotationLambda;
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

  // rotate_immediately_on_update - computed: true, optional: false, required: false
  public get rotateImmediatelyOnUpdate() {
    return this.getBooleanAttribute('rotate_immediately_on_update');
  }

  // rotation_lambda_arn - computed: true, optional: false, required: false
  public get rotationLambdaArn() {
    return this.getStringAttribute('rotation_lambda_arn');
  }

  // rotation_rules - computed: true, optional: false, required: false
  private _rotationRules = new DataAwsccSecretsmanagerRotationScheduleRotationRulesOutputReference(this, "rotation_rules");
  public get rotationRules() {
    return this._rotationRules;
  }

  // rotation_schedule_id - computed: true, optional: false, required: false
  public get rotationScheduleId() {
    return this.getStringAttribute('rotation_schedule_id');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
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
