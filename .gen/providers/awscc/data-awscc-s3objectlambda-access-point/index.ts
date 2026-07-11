// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3objectlambda_access_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccS3ObjectlambdaAccessPointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3objectlambda_access_point#id DataAwsccS3ObjectlambdaAccessPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccS3ObjectlambdaAccessPointAlias {
}

export function dataAwsccS3ObjectlambdaAccessPointAliasToTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointAlias): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3ObjectlambdaAccessPointAliasToHclTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointAlias): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3ObjectlambdaAccessPointAliasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3ObjectlambdaAccessPointAlias | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3ObjectlambdaAccessPointAlias | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda {
}

export function dataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaToTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaToHclTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

  // function_payload - computed: true, optional: false, required: false
  public get functionPayload() {
    return this.getStringAttribute('function_payload');
  }
}
export interface DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation {
}

export function dataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationToTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationToHclTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_lambda - computed: true, optional: false, required: false
  private _awsLambda = new DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference(this, "aws_lambda");
  public get awsLambda() {
    return this._awsLambda;
  }
}
export interface DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations {
}

export function dataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsToTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsToHclTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return cdktn.Fn.tolist(this.getListAttribute('actions'));
  }

  // content_transformation - computed: true, optional: false, required: false
  private _contentTransformation = new DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference(this, "content_transformation");
  public get contentTransformation() {
    return this._contentTransformation;
  }
}

export class DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference {
    return new DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfiguration {
}

export function dataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationToTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationToHclTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_features - computed: true, optional: false, required: false
  public get allowedFeatures() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_features'));
  }

  // cloudwatch_metrics_enabled - computed: true, optional: false, required: false
  public get cloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('cloudwatch_metrics_enabled');
  }

  // supporting_access_point - computed: true, optional: false, required: false
  public get supportingAccessPoint() {
    return this.getStringAttribute('supporting_access_point');
  }

  // transformation_configurations - computed: true, optional: false, required: false
  private _transformationConfigurations = new DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList(this, "transformation_configurations", true);
  public get transformationConfigurations() {
    return this._transformationConfigurations;
  }
}
export interface DataAwsccS3ObjectlambdaAccessPointPolicyStatus {
}

export function dataAwsccS3ObjectlambdaAccessPointPolicyStatusToTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointPolicyStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3ObjectlambdaAccessPointPolicyStatusToHclTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointPolicyStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3ObjectlambdaAccessPointPolicyStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3ObjectlambdaAccessPointPolicyStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
}
export interface DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfiguration {
}

export function dataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationToTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationToHclTerraform(struct?: DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_public_acls - computed: true, optional: false, required: false
  public get blockPublicAcls() {
    return this.getBooleanAttribute('block_public_acls');
  }

  // block_public_policy - computed: true, optional: false, required: false
  public get blockPublicPolicy() {
    return this.getBooleanAttribute('block_public_policy');
  }

  // ignore_public_acls - computed: true, optional: false, required: false
  public get ignorePublicAcls() {
    return this.getBooleanAttribute('ignore_public_acls');
  }

  // restrict_public_buckets - computed: true, optional: false, required: false
  public get restrictPublicBuckets() {
    return this.getBooleanAttribute('restrict_public_buckets');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3objectlambda_access_point awscc_s3objectlambda_access_point}
*/
export class DataAwsccS3ObjectlambdaAccessPoint extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_s3objectlambda_access_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccS3ObjectlambdaAccessPoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccS3ObjectlambdaAccessPoint to import
  * @param importFromId The id of the existing DataAwsccS3ObjectlambdaAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3objectlambda_access_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccS3ObjectlambdaAccessPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3objectlambda_access_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3objectlambda_access_point awscc_s3objectlambda_access_point} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccS3ObjectlambdaAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccS3ObjectlambdaAccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3objectlambda_access_point',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  private _alias = new DataAwsccS3ObjectlambdaAccessPointAliasOutputReference(this, "alias");
  public get alias() {
    return this._alias;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_lambda_configuration - computed: true, optional: false, required: false
  private _objectLambdaConfiguration = new DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference(this, "object_lambda_configuration");
  public get objectLambdaConfiguration() {
    return this._objectLambdaConfiguration;
  }

  // policy_status - computed: true, optional: false, required: false
  private _policyStatus = new DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference(this, "policy_status");
  public get policyStatus() {
    return this._policyStatus;
  }

  // public_access_block_configuration - computed: true, optional: false, required: false
  private _publicAccessBlockConfiguration = new DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference(this, "public_access_block_configuration");
  public get publicAccessBlockConfiguration() {
    return this._publicAccessBlockConfiguration;
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
