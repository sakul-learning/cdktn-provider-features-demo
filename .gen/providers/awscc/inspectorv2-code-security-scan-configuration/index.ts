// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_scan_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Inspectorv2CodeSecurityScanConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Code Security Scan Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_scan_configuration#configuration Inspectorv2CodeSecurityScanConfiguration#configuration}
  */
  readonly configuration?: Inspectorv2CodeSecurityScanConfigurationConfiguration;
  /**
  * Configuration Level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_scan_configuration#level Inspectorv2CodeSecurityScanConfiguration#level}
  */
  readonly level?: string;
  /**
  * Code Security Scan Configuration name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_scan_configuration#name Inspectorv2CodeSecurityScanConfiguration#name}
  */
  readonly name?: string;
  /**
  * Scope Settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_scan_configuration#scope_settings Inspectorv2CodeSecurityScanConfiguration#scope_settings}
  */
  readonly scopeSettings?: Inspectorv2CodeSecurityScanConfigurationScopeSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_scan_configuration#tags Inspectorv2CodeSecurityScanConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_scan_configuration#supported_events Inspectorv2CodeSecurityScanConfiguration#supported_events}
  */
  readonly supportedEvents?: string[];
}

export function inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationToTerraform(struct?: Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    supported_events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedEvents),
  }
}


export function inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationToHclTerraform(struct?: Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    supported_events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedEvents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._supportedEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedEvents = this._supportedEvents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._supportedEvents = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._supportedEvents = value.supportedEvents;
    }
  }

  // supported_events - computed: true, optional: true, required: false
  private _supportedEvents?: string[];
  public get supportedEvents() {
    return this.getListAttribute('supported_events');
  }
  public set supportedEvents(value: string[]) {
    this._supportedEvents = value;
  }
  public resetSupportedEvents() {
    this._supportedEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedEventsInput() {
    return this._supportedEvents;
  }
}
export interface Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_scan_configuration#frequency Inspectorv2CodeSecurityScanConfiguration#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_scan_configuration#frequency_expression Inspectorv2CodeSecurityScanConfiguration#frequency_expression}
  */
  readonly frequencyExpression?: string;
}

export function inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationToTerraform(struct?: Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    frequency: cdktn.stringToTerraform(struct!.frequency),
    frequency_expression: cdktn.stringToTerraform(struct!.frequencyExpression),
  }
}


export function inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationToHclTerraform(struct?: Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    frequency: {
      value: cdktn.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency_expression: {
      value: cdktn.stringToHclTerraform(struct!.frequencyExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._frequencyExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyExpression = this._frequencyExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequency = undefined;
      this._frequencyExpression = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frequency = value.frequency;
      this._frequencyExpression = value.frequencyExpression;
    }
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string;
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // frequency_expression - computed: true, optional: true, required: false
  private _frequencyExpression?: string;
  public get frequencyExpression() {
    return this.getStringAttribute('frequency_expression');
  }
  public set frequencyExpression(value: string) {
    this._frequencyExpression = value;
  }
  public resetFrequencyExpression() {
    this._frequencyExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyExpressionInput() {
    return this._frequencyExpression;
  }
}
export interface Inspectorv2CodeSecurityScanConfigurationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_scan_configuration#continuous_integration_scan_configuration Inspectorv2CodeSecurityScanConfiguration#continuous_integration_scan_configuration}
  */
  readonly continuousIntegrationScanConfiguration?: Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_scan_configuration#periodic_scan_configuration Inspectorv2CodeSecurityScanConfiguration#periodic_scan_configuration}
  */
  readonly periodicScanConfiguration?: Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_scan_configuration#rule_set_categories Inspectorv2CodeSecurityScanConfiguration#rule_set_categories}
  */
  readonly ruleSetCategories?: string[];
}

export function inspectorv2CodeSecurityScanConfigurationConfigurationToTerraform(struct?: Inspectorv2CodeSecurityScanConfigurationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    continuous_integration_scan_configuration: inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationToTerraform(struct!.continuousIntegrationScanConfiguration),
    periodic_scan_configuration: inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationToTerraform(struct!.periodicScanConfiguration),
    rule_set_categories: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ruleSetCategories),
  }
}


export function inspectorv2CodeSecurityScanConfigurationConfigurationToHclTerraform(struct?: Inspectorv2CodeSecurityScanConfigurationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    continuous_integration_scan_configuration: {
      value: inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationToHclTerraform(struct!.continuousIntegrationScanConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration",
    },
    periodic_scan_configuration: {
      value: inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationToHclTerraform(struct!.periodicScanConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration",
    },
    rule_set_categories: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ruleSetCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2CodeSecurityScanConfigurationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continuousIntegrationScanConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousIntegrationScanConfiguration = this._continuousIntegrationScanConfiguration?.internalValue;
    }
    if (this._periodicScanConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodicScanConfiguration = this._periodicScanConfiguration?.internalValue;
    }
    if (this._ruleSetCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSetCategories = this._ruleSetCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2CodeSecurityScanConfigurationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._continuousIntegrationScanConfiguration.internalValue = undefined;
      this._periodicScanConfiguration.internalValue = undefined;
      this._ruleSetCategories = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._continuousIntegrationScanConfiguration.internalValue = value.continuousIntegrationScanConfiguration;
      this._periodicScanConfiguration.internalValue = value.periodicScanConfiguration;
      this._ruleSetCategories = value.ruleSetCategories;
    }
  }

  // continuous_integration_scan_configuration - computed: true, optional: true, required: false
  private _continuousIntegrationScanConfiguration = new Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference(this, "continuous_integration_scan_configuration");
  public get continuousIntegrationScanConfiguration() {
    return this._continuousIntegrationScanConfiguration;
  }
  public putContinuousIntegrationScanConfiguration(value: Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration) {
    this._continuousIntegrationScanConfiguration.internalValue = value;
  }
  public resetContinuousIntegrationScanConfiguration() {
    this._continuousIntegrationScanConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousIntegrationScanConfigurationInput() {
    return this._continuousIntegrationScanConfiguration.internalValue;
  }

  // periodic_scan_configuration - computed: true, optional: true, required: false
  private _periodicScanConfiguration = new Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference(this, "periodic_scan_configuration");
  public get periodicScanConfiguration() {
    return this._periodicScanConfiguration;
  }
  public putPeriodicScanConfiguration(value: Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration) {
    this._periodicScanConfiguration.internalValue = value;
  }
  public resetPeriodicScanConfiguration() {
    this._periodicScanConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicScanConfigurationInput() {
    return this._periodicScanConfiguration.internalValue;
  }

  // rule_set_categories - computed: true, optional: true, required: false
  private _ruleSetCategories?: string[];
  public get ruleSetCategories() {
    return this.getListAttribute('rule_set_categories');
  }
  public set ruleSetCategories(value: string[]) {
    this._ruleSetCategories = value;
  }
  public resetRuleSetCategories() {
    this._ruleSetCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetCategoriesInput() {
    return this._ruleSetCategories;
  }
}
export interface Inspectorv2CodeSecurityScanConfigurationScopeSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_scan_configuration#project_selection_scope Inspectorv2CodeSecurityScanConfiguration#project_selection_scope}
  */
  readonly projectSelectionScope?: string;
}

export function inspectorv2CodeSecurityScanConfigurationScopeSettingsToTerraform(struct?: Inspectorv2CodeSecurityScanConfigurationScopeSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    project_selection_scope: cdktn.stringToTerraform(struct!.projectSelectionScope),
  }
}


export function inspectorv2CodeSecurityScanConfigurationScopeSettingsToHclTerraform(struct?: Inspectorv2CodeSecurityScanConfigurationScopeSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    project_selection_scope: {
      value: cdktn.stringToHclTerraform(struct!.projectSelectionScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2CodeSecurityScanConfigurationScopeSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectSelectionScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectSelectionScope = this._projectSelectionScope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2CodeSecurityScanConfigurationScopeSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectSelectionScope = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectSelectionScope = value.projectSelectionScope;
    }
  }

  // project_selection_scope - computed: true, optional: true, required: false
  private _projectSelectionScope?: string;
  public get projectSelectionScope() {
    return this.getStringAttribute('project_selection_scope');
  }
  public set projectSelectionScope(value: string) {
    this._projectSelectionScope = value;
  }
  public resetProjectSelectionScope() {
    this._projectSelectionScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectSelectionScopeInput() {
    return this._projectSelectionScope;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_scan_configuration awscc_inspectorv2_code_security_scan_configuration}
*/
export class Inspectorv2CodeSecurityScanConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_inspectorv2_code_security_scan_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Inspectorv2CodeSecurityScanConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Inspectorv2CodeSecurityScanConfiguration to import
  * @param importFromId The id of the existing Inspectorv2CodeSecurityScanConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_scan_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Inspectorv2CodeSecurityScanConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_inspectorv2_code_security_scan_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_scan_configuration awscc_inspectorv2_code_security_scan_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Inspectorv2CodeSecurityScanConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Inspectorv2CodeSecurityScanConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_inspectorv2_code_security_scan_configuration',
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
    this._configuration.internalValue = config.configuration;
    this._level = config.level;
    this._name = config.name;
    this._scopeSettings.internalValue = config.scopeSettings;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration = new Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: Inspectorv2CodeSecurityScanConfigurationConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // level - computed: true, optional: true, required: false
  private _level?: string;
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // scope_settings - computed: true, optional: true, required: false
  private _scopeSettings = new Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference(this, "scope_settings");
  public get scopeSettings() {
    return this._scopeSettings;
  }
  public putScopeSettings(value: Inspectorv2CodeSecurityScanConfigurationScopeSettings) {
    this._scopeSettings.internalValue = value;
  }
  public resetScopeSettings() {
    this._scopeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeSettingsInput() {
    return this._scopeSettings.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: inspectorv2CodeSecurityScanConfigurationConfigurationToTerraform(this._configuration.internalValue),
      level: cdktn.stringToTerraform(this._level),
      name: cdktn.stringToTerraform(this._name),
      scope_settings: inspectorv2CodeSecurityScanConfigurationScopeSettingsToTerraform(this._scopeSettings.internalValue),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: inspectorv2CodeSecurityScanConfigurationConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Inspectorv2CodeSecurityScanConfigurationConfiguration",
      },
      level: {
        value: cdktn.stringToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_settings: {
        value: inspectorv2CodeSecurityScanConfigurationScopeSettingsToHclTerraform(this._scopeSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Inspectorv2CodeSecurityScanConfigurationScopeSettings",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
