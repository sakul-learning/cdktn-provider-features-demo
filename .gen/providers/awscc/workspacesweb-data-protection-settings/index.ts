// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WorkspaceswebDataProtectionSettingsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#additional_encryption_context WorkspaceswebDataProtectionSettings#additional_encryption_context}
  */
  readonly additionalEncryptionContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#customer_managed_key WorkspaceswebDataProtectionSettings#customer_managed_key}
  */
  readonly customerManagedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#description WorkspaceswebDataProtectionSettings#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#display_name WorkspaceswebDataProtectionSettings#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#inline_redaction_configuration WorkspaceswebDataProtectionSettings#inline_redaction_configuration}
  */
  readonly inlineRedactionConfiguration?: WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#tags WorkspaceswebDataProtectionSettings#tags}
  */
  readonly tags?: WorkspaceswebDataProtectionSettingsTags[] | cdktn.IResolvable;
}
export interface WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#keyword_regex WorkspaceswebDataProtectionSettings#keyword_regex}
  */
  readonly keywordRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#pattern_description WorkspaceswebDataProtectionSettings#pattern_description}
  */
  readonly patternDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#pattern_name WorkspaceswebDataProtectionSettings#pattern_name}
  */
  readonly patternName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#pattern_regex WorkspaceswebDataProtectionSettings#pattern_regex}
  */
  readonly patternRegex?: string;
}

export function workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternToTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    keyword_regex: cdktn.stringToTerraform(struct!.keywordRegex),
    pattern_description: cdktn.stringToTerraform(struct!.patternDescription),
    pattern_name: cdktn.stringToTerraform(struct!.patternName),
    pattern_regex: cdktn.stringToTerraform(struct!.patternRegex),
  }
}


export function workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternToHclTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    keyword_regex: {
      value: cdktn.stringToHclTerraform(struct!.keywordRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_description: {
      value: cdktn.stringToHclTerraform(struct!.patternDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_name: {
      value: cdktn.stringToHclTerraform(struct!.patternName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_regex: {
      value: cdktn.stringToHclTerraform(struct!.patternRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keywordRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywordRegex = this._keywordRegex;
    }
    if (this._patternDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternDescription = this._patternDescription;
    }
    if (this._patternName !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternName = this._patternName;
    }
    if (this._patternRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRegex = this._patternRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keywordRegex = undefined;
      this._patternDescription = undefined;
      this._patternName = undefined;
      this._patternRegex = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keywordRegex = value.keywordRegex;
      this._patternDescription = value.patternDescription;
      this._patternName = value.patternName;
      this._patternRegex = value.patternRegex;
    }
  }

  // keyword_regex - computed: true, optional: true, required: false
  private _keywordRegex?: string; 
  public get keywordRegex() {
    return this.getStringAttribute('keyword_regex');
  }
  public set keywordRegex(value: string) {
    this._keywordRegex = value;
  }
  public resetKeywordRegex() {
    this._keywordRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordRegexInput() {
    return this._keywordRegex;
  }

  // pattern_description - computed: true, optional: true, required: false
  private _patternDescription?: string; 
  public get patternDescription() {
    return this.getStringAttribute('pattern_description');
  }
  public set patternDescription(value: string) {
    this._patternDescription = value;
  }
  public resetPatternDescription() {
    this._patternDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternDescriptionInput() {
    return this._patternDescription;
  }

  // pattern_name - computed: true, optional: true, required: false
  private _patternName?: string; 
  public get patternName() {
    return this.getStringAttribute('pattern_name');
  }
  public set patternName(value: string) {
    this._patternName = value;
  }
  public resetPatternName() {
    this._patternName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternNameInput() {
    return this._patternName;
  }

  // pattern_regex - computed: true, optional: true, required: false
  private _patternRegex?: string; 
  public get patternRegex() {
    return this.getStringAttribute('pattern_regex');
  }
  public set patternRegex(value: string) {
    this._patternRegex = value;
  }
  public resetPatternRegex() {
    this._patternRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRegexInput() {
    return this._patternRegex;
  }
}
export interface WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder_text WorkspaceswebDataProtectionSettings#redaction_place_holder_text}
  */
  readonly redactionPlaceHolderText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder_type WorkspaceswebDataProtectionSettings#redaction_place_holder_type}
  */
  readonly redactionPlaceHolderType?: string;
}

export function workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderToTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    redaction_place_holder_text: cdktn.stringToTerraform(struct!.redactionPlaceHolderText),
    redaction_place_holder_type: cdktn.stringToTerraform(struct!.redactionPlaceHolderType),
  }
}


export function workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderToHclTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    redaction_place_holder_text: {
      value: cdktn.stringToHclTerraform(struct!.redactionPlaceHolderText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redaction_place_holder_type: {
      value: cdktn.stringToHclTerraform(struct!.redactionPlaceHolderType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redactionPlaceHolderText !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactionPlaceHolderText = this._redactionPlaceHolderText;
    }
    if (this._redactionPlaceHolderType !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactionPlaceHolderType = this._redactionPlaceHolderType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._redactionPlaceHolderText = undefined;
      this._redactionPlaceHolderType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._redactionPlaceHolderText = value.redactionPlaceHolderText;
      this._redactionPlaceHolderType = value.redactionPlaceHolderType;
    }
  }

  // redaction_place_holder_text - computed: true, optional: true, required: false
  private _redactionPlaceHolderText?: string; 
  public get redactionPlaceHolderText() {
    return this.getStringAttribute('redaction_place_holder_text');
  }
  public set redactionPlaceHolderText(value: string) {
    this._redactionPlaceHolderText = value;
  }
  public resetRedactionPlaceHolderText() {
    this._redactionPlaceHolderText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactionPlaceHolderTextInput() {
    return this._redactionPlaceHolderText;
  }

  // redaction_place_holder_type - computed: true, optional: true, required: false
  private _redactionPlaceHolderType?: string; 
  public get redactionPlaceHolderType() {
    return this.getStringAttribute('redaction_place_holder_type');
  }
  public set redactionPlaceHolderType(value: string) {
    this._redactionPlaceHolderType = value;
  }
  public resetRedactionPlaceHolderType() {
    this._redactionPlaceHolderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactionPlaceHolderTypeInput() {
    return this._redactionPlaceHolderType;
  }
}
export interface WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#built_in_pattern_id WorkspaceswebDataProtectionSettings#built_in_pattern_id}
  */
  readonly builtInPatternId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#confidence_level WorkspaceswebDataProtectionSettings#confidence_level}
  */
  readonly confidenceLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#custom_pattern WorkspaceswebDataProtectionSettings#custom_pattern}
  */
  readonly customPattern?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#enforced_urls WorkspaceswebDataProtectionSettings#enforced_urls}
  */
  readonly enforcedUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#exempt_urls WorkspaceswebDataProtectionSettings#exempt_urls}
  */
  readonly exemptUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder WorkspaceswebDataProtectionSettings#redaction_place_holder}
  */
  readonly redactionPlaceHolder?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder;
}

export function workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsToTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    built_in_pattern_id: cdktn.stringToTerraform(struct!.builtInPatternId),
    confidence_level: cdktn.numberToTerraform(struct!.confidenceLevel),
    custom_pattern: workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternToTerraform(struct!.customPattern),
    enforced_urls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enforcedUrls),
    exempt_urls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exemptUrls),
    redaction_place_holder: workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderToTerraform(struct!.redactionPlaceHolder),
  }
}


export function workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsToHclTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    built_in_pattern_id: {
      value: cdktn.stringToHclTerraform(struct!.builtInPatternId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confidence_level: {
      value: cdktn.numberToHclTerraform(struct!.confidenceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_pattern: {
      value: workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternToHclTerraform(struct!.customPattern),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern",
    },
    enforced_urls: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enforcedUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exempt_urls: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exemptUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    redaction_place_holder: {
      value: workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderToHclTerraform(struct!.redactionPlaceHolder),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builtInPatternId !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtInPatternId = this._builtInPatternId;
    }
    if (this._confidenceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceLevel = this._confidenceLevel;
    }
    if (this._customPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPattern = this._customPattern?.internalValue;
    }
    if (this._enforcedUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcedUrls = this._enforcedUrls;
    }
    if (this._exemptUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.exemptUrls = this._exemptUrls;
    }
    if (this._redactionPlaceHolder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactionPlaceHolder = this._redactionPlaceHolder?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._builtInPatternId = undefined;
      this._confidenceLevel = undefined;
      this._customPattern.internalValue = undefined;
      this._enforcedUrls = undefined;
      this._exemptUrls = undefined;
      this._redactionPlaceHolder.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._builtInPatternId = value.builtInPatternId;
      this._confidenceLevel = value.confidenceLevel;
      this._customPattern.internalValue = value.customPattern;
      this._enforcedUrls = value.enforcedUrls;
      this._exemptUrls = value.exemptUrls;
      this._redactionPlaceHolder.internalValue = value.redactionPlaceHolder;
    }
  }

  // built_in_pattern_id - computed: true, optional: true, required: false
  private _builtInPatternId?: string; 
  public get builtInPatternId() {
    return this.getStringAttribute('built_in_pattern_id');
  }
  public set builtInPatternId(value: string) {
    this._builtInPatternId = value;
  }
  public resetBuiltInPatternId() {
    this._builtInPatternId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtInPatternIdInput() {
    return this._builtInPatternId;
  }

  // confidence_level - computed: true, optional: true, required: false
  private _confidenceLevel?: number; 
  public get confidenceLevel() {
    return this.getNumberAttribute('confidence_level');
  }
  public set confidenceLevel(value: number) {
    this._confidenceLevel = value;
  }
  public resetConfidenceLevel() {
    this._confidenceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceLevelInput() {
    return this._confidenceLevel;
  }

  // custom_pattern - computed: true, optional: true, required: false
  private _customPattern = new WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference(this, "custom_pattern");
  public get customPattern() {
    return this._customPattern;
  }
  public putCustomPattern(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern) {
    this._customPattern.internalValue = value;
  }
  public resetCustomPattern() {
    this._customPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPatternInput() {
    return this._customPattern.internalValue;
  }

  // enforced_urls - computed: true, optional: true, required: false
  private _enforcedUrls?: string[]; 
  public get enforcedUrls() {
    return this.getListAttribute('enforced_urls');
  }
  public set enforcedUrls(value: string[]) {
    this._enforcedUrls = value;
  }
  public resetEnforcedUrls() {
    this._enforcedUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedUrlsInput() {
    return this._enforcedUrls;
  }

  // exempt_urls - computed: true, optional: true, required: false
  private _exemptUrls?: string[]; 
  public get exemptUrls() {
    return this.getListAttribute('exempt_urls');
  }
  public set exemptUrls(value: string[]) {
    this._exemptUrls = value;
  }
  public resetExemptUrls() {
    this._exemptUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptUrlsInput() {
    return this._exemptUrls;
  }

  // redaction_place_holder - computed: true, optional: true, required: false
  private _redactionPlaceHolder = new WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference(this, "redaction_place_holder");
  public get redactionPlaceHolder() {
    return this._redactionPlaceHolder;
  }
  public putRedactionPlaceHolder(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder) {
    this._redactionPlaceHolder.internalValue = value;
  }
  public resetRedactionPlaceHolder() {
    this._redactionPlaceHolder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactionPlaceHolderInput() {
    return this._redactionPlaceHolder.internalValue;
  }
}

export class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList extends cdktn.ComplexList {
  public internalValue? : WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns[] | cdktn.IResolvable

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
  public get(index: number): WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference {
    return new WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#global_confidence_level WorkspaceswebDataProtectionSettings#global_confidence_level}
  */
  readonly globalConfidenceLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#global_enforced_urls WorkspaceswebDataProtectionSettings#global_enforced_urls}
  */
  readonly globalEnforcedUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#global_exempt_urls WorkspaceswebDataProtectionSettings#global_exempt_urls}
  */
  readonly globalExemptUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#inline_redaction_patterns WorkspaceswebDataProtectionSettings#inline_redaction_patterns}
  */
  readonly inlineRedactionPatterns?: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns[] | cdktn.IResolvable;
}

export function workspaceswebDataProtectionSettingsInlineRedactionConfigurationToTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    global_confidence_level: cdktn.numberToTerraform(struct!.globalConfidenceLevel),
    global_enforced_urls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.globalEnforcedUrls),
    global_exempt_urls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.globalExemptUrls),
    inline_redaction_patterns: cdktn.listMapper(workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsToTerraform, false)(struct!.inlineRedactionPatterns),
  }
}


export function workspaceswebDataProtectionSettingsInlineRedactionConfigurationToHclTerraform(struct?: WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    global_confidence_level: {
      value: cdktn.numberToHclTerraform(struct!.globalConfidenceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    global_enforced_urls: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.globalEnforcedUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    global_exempt_urls: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.globalExemptUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    inline_redaction_patterns: {
      value: cdktn.listMapperHcl(workspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsToHclTerraform, false)(struct!.inlineRedactionPatterns),
      isBlock: true,
      type: "list",
      storageClassType: "WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalConfidenceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalConfidenceLevel = this._globalConfidenceLevel;
    }
    if (this._globalEnforcedUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalEnforcedUrls = this._globalEnforcedUrls;
    }
    if (this._globalExemptUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalExemptUrls = this._globalExemptUrls;
    }
    if (this._inlineRedactionPatterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineRedactionPatterns = this._inlineRedactionPatterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._globalConfidenceLevel = undefined;
      this._globalEnforcedUrls = undefined;
      this._globalExemptUrls = undefined;
      this._inlineRedactionPatterns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._globalConfidenceLevel = value.globalConfidenceLevel;
      this._globalEnforcedUrls = value.globalEnforcedUrls;
      this._globalExemptUrls = value.globalExemptUrls;
      this._inlineRedactionPatterns.internalValue = value.inlineRedactionPatterns;
    }
  }

  // global_confidence_level - computed: true, optional: true, required: false
  private _globalConfidenceLevel?: number; 
  public get globalConfidenceLevel() {
    return this.getNumberAttribute('global_confidence_level');
  }
  public set globalConfidenceLevel(value: number) {
    this._globalConfidenceLevel = value;
  }
  public resetGlobalConfidenceLevel() {
    this._globalConfidenceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalConfidenceLevelInput() {
    return this._globalConfidenceLevel;
  }

  // global_enforced_urls - computed: true, optional: true, required: false
  private _globalEnforcedUrls?: string[]; 
  public get globalEnforcedUrls() {
    return this.getListAttribute('global_enforced_urls');
  }
  public set globalEnforcedUrls(value: string[]) {
    this._globalEnforcedUrls = value;
  }
  public resetGlobalEnforcedUrls() {
    this._globalEnforcedUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalEnforcedUrlsInput() {
    return this._globalEnforcedUrls;
  }

  // global_exempt_urls - computed: true, optional: true, required: false
  private _globalExemptUrls?: string[]; 
  public get globalExemptUrls() {
    return this.getListAttribute('global_exempt_urls');
  }
  public set globalExemptUrls(value: string[]) {
    this._globalExemptUrls = value;
  }
  public resetGlobalExemptUrls() {
    this._globalExemptUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalExemptUrlsInput() {
    return this._globalExemptUrls;
  }

  // inline_redaction_patterns - computed: true, optional: true, required: false
  private _inlineRedactionPatterns = new WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList(this, "inline_redaction_patterns", false);
  public get inlineRedactionPatterns() {
    return this._inlineRedactionPatterns;
  }
  public putInlineRedactionPatterns(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns[] | cdktn.IResolvable) {
    this._inlineRedactionPatterns.internalValue = value;
  }
  public resetInlineRedactionPatterns() {
    this._inlineRedactionPatterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineRedactionPatternsInput() {
    return this._inlineRedactionPatterns.internalValue;
  }
}
export interface WorkspaceswebDataProtectionSettingsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#key WorkspaceswebDataProtectionSettings#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#value WorkspaceswebDataProtectionSettings#value}
  */
  readonly value?: string;
}

export function workspaceswebDataProtectionSettingsTagsToTerraform(struct?: WorkspaceswebDataProtectionSettingsTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function workspaceswebDataProtectionSettingsTagsToHclTerraform(struct?: WorkspaceswebDataProtectionSettingsTags | cdktn.IResolvable): any {
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

export class WorkspaceswebDataProtectionSettingsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkspaceswebDataProtectionSettingsTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceswebDataProtectionSettingsTags | cdktn.IResolvable | undefined) {
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

export class WorkspaceswebDataProtectionSettingsTagsList extends cdktn.ComplexList {
  public internalValue? : WorkspaceswebDataProtectionSettingsTags[] | cdktn.IResolvable

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
  public get(index: number): WorkspaceswebDataProtectionSettingsTagsOutputReference {
    return new WorkspaceswebDataProtectionSettingsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings awscc_workspacesweb_data_protection_settings}
*/
export class WorkspaceswebDataProtectionSettings extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_workspacesweb_data_protection_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WorkspaceswebDataProtectionSettings resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceswebDataProtectionSettings to import
  * @param importFromId The id of the existing WorkspaceswebDataProtectionSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceswebDataProtectionSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_workspacesweb_data_protection_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/workspacesweb_data_protection_settings awscc_workspacesweb_data_protection_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceswebDataProtectionSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WorkspaceswebDataProtectionSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_workspacesweb_data_protection_settings',
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
    this._additionalEncryptionContext = config.additionalEncryptionContext;
    this._customerManagedKey = config.customerManagedKey;
    this._description = config.description;
    this._displayName = config.displayName;
    this._inlineRedactionConfiguration.internalValue = config.inlineRedactionConfiguration;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_encryption_context - computed: true, optional: true, required: false
  private _additionalEncryptionContext?: { [key: string]: string }; 
  public get additionalEncryptionContext() {
    return this.getStringMapAttribute('additional_encryption_context');
  }
  public set additionalEncryptionContext(value: { [key: string]: string }) {
    this._additionalEncryptionContext = value;
  }
  public resetAdditionalEncryptionContext() {
    this._additionalEncryptionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalEncryptionContextInput() {
    return this._additionalEncryptionContext;
  }

  // associated_portal_arns - computed: true, optional: false, required: false
  public get associatedPortalArns() {
    return this.getListAttribute('associated_portal_arns');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // customer_managed_key - computed: true, optional: true, required: false
  private _customerManagedKey?: string; 
  public get customerManagedKey() {
    return this.getStringAttribute('customer_managed_key');
  }
  public set customerManagedKey(value: string) {
    this._customerManagedKey = value;
  }
  public resetCustomerManagedKey() {
    this._customerManagedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyInput() {
    return this._customerManagedKey;
  }

  // data_protection_settings_arn - computed: true, optional: false, required: false
  public get dataProtectionSettingsArn() {
    return this.getStringAttribute('data_protection_settings_arn');
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inline_redaction_configuration - computed: true, optional: true, required: false
  private _inlineRedactionConfiguration = new WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference(this, "inline_redaction_configuration");
  public get inlineRedactionConfiguration() {
    return this._inlineRedactionConfiguration;
  }
  public putInlineRedactionConfiguration(value: WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration) {
    this._inlineRedactionConfiguration.internalValue = value;
  }
  public resetInlineRedactionConfiguration() {
    this._inlineRedactionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineRedactionConfigurationInput() {
    return this._inlineRedactionConfiguration.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new WorkspaceswebDataProtectionSettingsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: WorkspaceswebDataProtectionSettingsTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_encryption_context: cdktn.hashMapper(cdktn.stringToTerraform)(this._additionalEncryptionContext),
      customer_managed_key: cdktn.stringToTerraform(this._customerManagedKey),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      inline_redaction_configuration: workspaceswebDataProtectionSettingsInlineRedactionConfigurationToTerraform(this._inlineRedactionConfiguration.internalValue),
      tags: cdktn.listMapper(workspaceswebDataProtectionSettingsTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_encryption_context: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._additionalEncryptionContext),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      customer_managed_key: {
        value: cdktn.stringToHclTerraform(this._customerManagedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inline_redaction_configuration: {
        value: workspaceswebDataProtectionSettingsInlineRedactionConfigurationToHclTerraform(this._inlineRedactionConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration",
      },
      tags: {
        value: cdktn.listMapperHcl(workspaceswebDataProtectionSettingsTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspaceswebDataProtectionSettingsTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
