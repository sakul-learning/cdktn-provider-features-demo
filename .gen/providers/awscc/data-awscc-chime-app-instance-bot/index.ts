// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/chime_app_instance_bot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccChimeAppInstanceBotConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/chime_app_instance_bot#id DataAwsccChimeAppInstanceBot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy {
}

export function dataAwsccChimeAppInstanceBotConfigurationLexInvokedByToTerraform(struct?: DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccChimeAppInstanceBotConfigurationLexInvokedByToHclTerraform(struct?: DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // standard_messages - computed: true, optional: false, required: false
  public get standardMessages() {
    return this.getStringAttribute('standard_messages');
  }

  // targeted_messages - computed: true, optional: false, required: false
  public get targetedMessages() {
    return this.getStringAttribute('targeted_messages');
  }
}
export interface DataAwsccChimeAppInstanceBotConfigurationLex {
}

export function dataAwsccChimeAppInstanceBotConfigurationLexToTerraform(struct?: DataAwsccChimeAppInstanceBotConfigurationLex): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccChimeAppInstanceBotConfigurationLexToHclTerraform(struct?: DataAwsccChimeAppInstanceBotConfigurationLex): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccChimeAppInstanceBotConfigurationLexOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccChimeAppInstanceBotConfigurationLex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccChimeAppInstanceBotConfigurationLex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // invoked_by - computed: true, optional: false, required: false
  private _invokedBy = new DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference(this, "invoked_by");
  public get invokedBy() {
    return this._invokedBy;
  }

  // lex_bot_alias_arn - computed: true, optional: false, required: false
  public get lexBotAliasArn() {
    return this.getStringAttribute('lex_bot_alias_arn');
  }

  // locale_id - computed: true, optional: false, required: false
  public get localeId() {
    return this.getStringAttribute('locale_id');
  }

  // responds_to - computed: true, optional: false, required: false
  public get respondsTo() {
    return this.getStringAttribute('responds_to');
  }

  // welcome_intent - computed: true, optional: false, required: false
  public get welcomeIntent() {
    return this.getStringAttribute('welcome_intent');
  }
}
export interface DataAwsccChimeAppInstanceBotConfiguration {
}

export function dataAwsccChimeAppInstanceBotConfigurationToTerraform(struct?: DataAwsccChimeAppInstanceBotConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccChimeAppInstanceBotConfigurationToHclTerraform(struct?: DataAwsccChimeAppInstanceBotConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccChimeAppInstanceBotConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccChimeAppInstanceBotConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccChimeAppInstanceBotConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lex - computed: true, optional: false, required: false
  private _lex = new DataAwsccChimeAppInstanceBotConfigurationLexOutputReference(this, "lex");
  public get lex() {
    return this._lex;
  }
}
export interface DataAwsccChimeAppInstanceBotTags {
}

export function dataAwsccChimeAppInstanceBotTagsToTerraform(struct?: DataAwsccChimeAppInstanceBotTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccChimeAppInstanceBotTagsToHclTerraform(struct?: DataAwsccChimeAppInstanceBotTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccChimeAppInstanceBotTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccChimeAppInstanceBotTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccChimeAppInstanceBotTags | undefined) {
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

export class DataAwsccChimeAppInstanceBotTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccChimeAppInstanceBotTagsOutputReference {
    return new DataAwsccChimeAppInstanceBotTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/chime_app_instance_bot awscc_chime_app_instance_bot}
*/
export class DataAwsccChimeAppInstanceBot extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_chime_app_instance_bot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccChimeAppInstanceBot resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccChimeAppInstanceBot to import
  * @param importFromId The id of the existing DataAwsccChimeAppInstanceBot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/chime_app_instance_bot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccChimeAppInstanceBot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_chime_app_instance_bot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/chime_app_instance_bot awscc_chime_app_instance_bot} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccChimeAppInstanceBotConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccChimeAppInstanceBotConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_chime_app_instance_bot',
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

  // app_instance_arn - computed: true, optional: false, required: false
  public get appInstanceArn() {
    return this.getStringAttribute('app_instance_arn');
  }

  // app_instance_bot_arn - computed: true, optional: false, required: false
  public get appInstanceBotArn() {
    return this.getStringAttribute('app_instance_bot_arn');
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccChimeAppInstanceBotConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getNumberAttribute('created_timestamp');
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

  // last_updated_timestamp - computed: true, optional: false, required: false
  public get lastUpdatedTimestamp() {
    return this.getNumberAttribute('last_updated_timestamp');
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccChimeAppInstanceBotTagsList(this, "tags", false);
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
