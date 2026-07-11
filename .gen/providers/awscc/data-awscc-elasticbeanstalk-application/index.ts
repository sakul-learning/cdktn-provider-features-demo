// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticbeanstalk_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccElasticbeanstalkApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticbeanstalk_application#id DataAwsccElasticbeanstalkApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule {
}

export function dataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleToTerraform(struct?: DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleToHclTerraform(struct?: DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_source_from_s3 - computed: true, optional: false, required: false
  public get deleteSourceFromS3() {
    return this.getBooleanAttribute('delete_source_from_s3');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // max_age_in_days - computed: true, optional: false, required: false
  public get maxAgeInDays() {
    return this.getNumberAttribute('max_age_in_days');
  }
}
export interface DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule {
}

export function dataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleToTerraform(struct?: DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleToHclTerraform(struct?: DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_source_from_s3 - computed: true, optional: false, required: false
  public get deleteSourceFromS3() {
    return this.getBooleanAttribute('delete_source_from_s3');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // max_count - computed: true, optional: false, required: false
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
}
export interface DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig {
}

export function dataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigToTerraform(struct?: DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigToHclTerraform(struct?: DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_age_rule - computed: true, optional: false, required: false
  private _maxAgeRule = new DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference(this, "max_age_rule");
  public get maxAgeRule() {
    return this._maxAgeRule;
  }

  // max_count_rule - computed: true, optional: false, required: false
  private _maxCountRule = new DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference(this, "max_count_rule");
  public get maxCountRule() {
    return this._maxCountRule;
  }
}
export interface DataAwsccElasticbeanstalkApplicationResourceLifecycleConfig {
}

export function dataAwsccElasticbeanstalkApplicationResourceLifecycleConfigToTerraform(struct?: DataAwsccElasticbeanstalkApplicationResourceLifecycleConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticbeanstalkApplicationResourceLifecycleConfigToHclTerraform(struct?: DataAwsccElasticbeanstalkApplicationResourceLifecycleConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticbeanstalkApplicationResourceLifecycleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticbeanstalkApplicationResourceLifecycleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_role - computed: true, optional: false, required: false
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }

  // version_lifecycle_config - computed: true, optional: false, required: false
  private _versionLifecycleConfig = new DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference(this, "version_lifecycle_config");
  public get versionLifecycleConfig() {
    return this._versionLifecycleConfig;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticbeanstalk_application awscc_elasticbeanstalk_application}
*/
export class DataAwsccElasticbeanstalkApplication extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_elasticbeanstalk_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccElasticbeanstalkApplication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccElasticbeanstalkApplication to import
  * @param importFromId The id of the existing DataAwsccElasticbeanstalkApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticbeanstalk_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccElasticbeanstalkApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticbeanstalk_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticbeanstalk_application awscc_elasticbeanstalk_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccElasticbeanstalkApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccElasticbeanstalkApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_elasticbeanstalk_application',
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

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // resource_lifecycle_config - computed: true, optional: false, required: false
  private _resourceLifecycleConfig = new DataAwsccElasticbeanstalkApplicationResourceLifecycleConfigOutputReference(this, "resource_lifecycle_config");
  public get resourceLifecycleConfig() {
    return this._resourceLifecycleConfig;
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
