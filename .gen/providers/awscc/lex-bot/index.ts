// generated from terraform resource schema

import { LexBotBotFileS3Location, 
lexBotBotFileS3LocationToTerraform, 
lexBotBotFileS3LocationToHclTerraform, 
LexBotBotFileS3LocationOutputReference, 
LexBotBotLocales, 
lexBotBotLocalesToTerraform, 
lexBotBotLocalesToHclTerraform, 
LexBotBotLocalesList, 
LexBotBotTags, 
lexBotBotTagsToTerraform, 
lexBotBotTagsToHclTerraform, 
LexBotBotTagsList, 
LexBotDataPrivacy, 
lexBotDataPrivacyToTerraform, 
lexBotDataPrivacyToHclTerraform, 
LexBotDataPrivacyOutputReference, 
LexBotTestBotAliasSettings, 
lexBotTestBotAliasSettingsToTerraform, 
lexBotTestBotAliasSettingsToHclTerraform, 
LexBotTestBotAliasSettingsOutputReference, 
LexBotTestBotAliasTags, 
lexBotTestBotAliasTagsToTerraform, 
lexBotTestBotAliasTagsToHclTerraform, 
LexBotTestBotAliasTagsList} from './index-structs/index.ts';
export * from './index-structs/index.ts';
import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface LexBotConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies whether to build the bot locales after bot creation completes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/lex_bot#auto_build_bot_locales LexBot#auto_build_bot_locales}
  */
  readonly autoBuildBotLocales?: boolean | cdktn.IResolvable;
  /**
  * S3 location of bot definitions zip file, if it's not defined inline in CloudFormation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/lex_bot#bot_file_s3_location LexBot#bot_file_s3_location}
  */
  readonly botFileS3Location?: LexBotBotFileS3Location;
  /**
  * List of bot locales
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/lex_bot#bot_locales LexBot#bot_locales}
  */
  readonly botLocales?: LexBotBotLocales[] | cdktn.IResolvable;
  /**
  * A list of tags to add to the bot, which can only be added at bot creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/lex_bot#bot_tags LexBot#bot_tags}
  */
  readonly botTags?: LexBotBotTags[] | cdktn.IResolvable;
  /**
  * Data privacy setting of the Bot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/lex_bot#data_privacy LexBot#data_privacy}
  */
  readonly dataPrivacy: LexBotDataPrivacy;
  /**
  * A description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/lex_bot#description LexBot#description}
  */
  readonly description?: string;
  /**
  * IdleSessionTTLInSeconds of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/lex_bot#idle_session_ttl_in_seconds LexBot#idle_session_ttl_in_seconds}
  */
  readonly idleSessionTtlInSeconds: number;
  /**
  * Unique name for a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/lex_bot#name LexBot#name}
  */
  readonly name: string;
  /**
  * The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/lex_bot#role_arn LexBot#role_arn}
  */
  readonly roleArn: string;
  /**
  * Configuring the test bot alias settings for a given bot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/lex_bot#test_bot_alias_settings LexBot#test_bot_alias_settings}
  */
  readonly testBotAliasSettings?: LexBotTestBotAliasSettings;
  /**
  * A list of tags to add to the test alias for a bot, , which can only be added at bot/bot alias creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/lex_bot#test_bot_alias_tags LexBot#test_bot_alias_tags}
  */
  readonly testBotAliasTags?: LexBotTestBotAliasTags[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/lex_bot awscc_lex_bot}
*/
export class LexBot extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lex_bot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LexBot resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LexBot to import
  * @param importFromId The id of the existing LexBot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/lex_bot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LexBot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lex_bot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/lex_bot awscc_lex_bot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LexBotConfig
  */
  public constructor(scope: Construct, id: string, config: LexBotConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lex_bot',
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
    this._autoBuildBotLocales = config.autoBuildBotLocales;
    this._botFileS3Location.internalValue = config.botFileS3Location;
    this._botLocales.internalValue = config.botLocales;
    this._botTags.internalValue = config.botTags;
    this._dataPrivacy.internalValue = config.dataPrivacy;
    this._description = config.description;
    this._idleSessionTtlInSeconds = config.idleSessionTtlInSeconds;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._testBotAliasSettings.internalValue = config.testBotAliasSettings;
    this._testBotAliasTags.internalValue = config.testBotAliasTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_build_bot_locales - computed: true, optional: true, required: false
  private _autoBuildBotLocales?: boolean | cdktn.IResolvable; 
  public get autoBuildBotLocales() {
    return this.getBooleanAttribute('auto_build_bot_locales');
  }
  public set autoBuildBotLocales(value: boolean | cdktn.IResolvable) {
    this._autoBuildBotLocales = value;
  }
  public resetAutoBuildBotLocales() {
    this._autoBuildBotLocales = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBuildBotLocalesInput() {
    return this._autoBuildBotLocales;
  }

  // bot_file_s3_location - computed: true, optional: true, required: false
  private _botFileS3Location = new LexBotBotFileS3LocationOutputReference(this, "bot_file_s3_location");
  public get botFileS3Location() {
    return this._botFileS3Location;
  }
  public putBotFileS3Location(value: LexBotBotFileS3Location) {
    this._botFileS3Location.internalValue = value;
  }
  public resetBotFileS3Location() {
    this._botFileS3Location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botFileS3LocationInput() {
    return this._botFileS3Location.internalValue;
  }

  // bot_id - computed: true, optional: false, required: false
  public get botId() {
    return this.getStringAttribute('bot_id');
  }

  // bot_locales - computed: true, optional: true, required: false
  private _botLocales = new LexBotBotLocalesList(this, "bot_locales", true);
  public get botLocales() {
    return this._botLocales;
  }
  public putBotLocales(value: LexBotBotLocales[] | cdktn.IResolvable) {
    this._botLocales.internalValue = value;
  }
  public resetBotLocales() {
    this._botLocales.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botLocalesInput() {
    return this._botLocales.internalValue;
  }

  // bot_tags - computed: true, optional: true, required: false
  private _botTags = new LexBotBotTagsList(this, "bot_tags", true);
  public get botTags() {
    return this._botTags;
  }
  public putBotTags(value: LexBotBotTags[] | cdktn.IResolvable) {
    this._botTags.internalValue = value;
  }
  public resetBotTags() {
    this._botTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botTagsInput() {
    return this._botTags.internalValue;
  }

  // data_privacy - computed: false, optional: false, required: true
  private _dataPrivacy = new LexBotDataPrivacyOutputReference(this, "data_privacy");
  public get dataPrivacy() {
    return this._dataPrivacy;
  }
  public putDataPrivacy(value: LexBotDataPrivacy) {
    this._dataPrivacy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPrivacyInput() {
    return this._dataPrivacy.internalValue;
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

  // idle_session_ttl_in_seconds - computed: false, optional: false, required: true
  private _idleSessionTtlInSeconds?: number; 
  public get idleSessionTtlInSeconds() {
    return this.getNumberAttribute('idle_session_ttl_in_seconds');
  }
  public set idleSessionTtlInSeconds(value: number) {
    this._idleSessionTtlInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idleSessionTtlInSecondsInput() {
    return this._idleSessionTtlInSeconds;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // test_bot_alias_settings - computed: true, optional: true, required: false
  private _testBotAliasSettings = new LexBotTestBotAliasSettingsOutputReference(this, "test_bot_alias_settings");
  public get testBotAliasSettings() {
    return this._testBotAliasSettings;
  }
  public putTestBotAliasSettings(value: LexBotTestBotAliasSettings) {
    this._testBotAliasSettings.internalValue = value;
  }
  public resetTestBotAliasSettings() {
    this._testBotAliasSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testBotAliasSettingsInput() {
    return this._testBotAliasSettings.internalValue;
  }

  // test_bot_alias_tags - computed: true, optional: true, required: false
  private _testBotAliasTags = new LexBotTestBotAliasTagsList(this, "test_bot_alias_tags", true);
  public get testBotAliasTags() {
    return this._testBotAliasTags;
  }
  public putTestBotAliasTags(value: LexBotTestBotAliasTags[] | cdktn.IResolvable) {
    this._testBotAliasTags.internalValue = value;
  }
  public resetTestBotAliasTags() {
    this._testBotAliasTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testBotAliasTagsInput() {
    return this._testBotAliasTags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_build_bot_locales: cdktn.booleanToTerraform(this._autoBuildBotLocales),
      bot_file_s3_location: lexBotBotFileS3LocationToTerraform(this._botFileS3Location.internalValue),
      bot_locales: cdktn.listMapper(lexBotBotLocalesToTerraform, false)(this._botLocales.internalValue),
      bot_tags: cdktn.listMapper(lexBotBotTagsToTerraform, false)(this._botTags.internalValue),
      data_privacy: lexBotDataPrivacyToTerraform(this._dataPrivacy.internalValue),
      description: cdktn.stringToTerraform(this._description),
      idle_session_ttl_in_seconds: cdktn.numberToTerraform(this._idleSessionTtlInSeconds),
      name: cdktn.stringToTerraform(this._name),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      test_bot_alias_settings: lexBotTestBotAliasSettingsToTerraform(this._testBotAliasSettings.internalValue),
      test_bot_alias_tags: cdktn.listMapper(lexBotTestBotAliasTagsToTerraform, false)(this._testBotAliasTags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_build_bot_locales: {
        value: cdktn.booleanToHclTerraform(this._autoBuildBotLocales),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bot_file_s3_location: {
        value: lexBotBotFileS3LocationToHclTerraform(this._botFileS3Location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LexBotBotFileS3Location",
      },
      bot_locales: {
        value: cdktn.listMapperHcl(lexBotBotLocalesToHclTerraform, false)(this._botLocales.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LexBotBotLocalesList",
      },
      bot_tags: {
        value: cdktn.listMapperHcl(lexBotBotTagsToHclTerraform, false)(this._botTags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LexBotBotTagsList",
      },
      data_privacy: {
        value: lexBotDataPrivacyToHclTerraform(this._dataPrivacy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LexBotDataPrivacy",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_session_ttl_in_seconds: {
        value: cdktn.numberToHclTerraform(this._idleSessionTtlInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_bot_alias_settings: {
        value: lexBotTestBotAliasSettingsToHclTerraform(this._testBotAliasSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LexBotTestBotAliasSettings",
      },
      test_bot_alias_tags: {
        value: cdktn.listMapperHcl(lexBotTestBotAliasTagsToHclTerraform, false)(this._testBotAliasTags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LexBotTestBotAliasTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
