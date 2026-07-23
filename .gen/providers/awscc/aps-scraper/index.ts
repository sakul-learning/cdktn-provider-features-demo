// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApsScraperConfig extends cdktn.TerraformMetaArguments {
  /**
  * Scraper alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#alias ApsScraper#alias}
  */
  readonly alias?: string;
  /**
  * Scraper metrics destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#destination ApsScraper#destination}
  */
  readonly destination: ApsScraperDestination;
  /**
  * Role configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#role_configuration ApsScraper#role_configuration}
  */
  readonly roleConfiguration?: ApsScraperRoleConfiguration;
  /**
  * Scraper configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#scrape_configuration ApsScraper#scrape_configuration}
  */
  readonly scrapeConfiguration: ApsScraperScrapeConfiguration;
  /**
  * Configuration for scraper logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#scraper_logging_configuration ApsScraper#scraper_logging_configuration}
  */
  readonly scraperLoggingConfiguration?: ApsScraperScraperLoggingConfiguration;
  /**
  * Scraper metrics source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#source ApsScraper#source}
  */
  readonly source: ApsScraperSource;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#tags ApsScraper#tags}
  */
  readonly tags?: ApsScraperTags[] | cdktn.IResolvable;
}
export interface ApsScraperDestinationAmpConfiguration {
  /**
  * ARN of an Amazon Managed Prometheus workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#workspace_arn ApsScraper#workspace_arn}
  */
  readonly workspaceArn?: string;
}

export function apsScraperDestinationAmpConfigurationToTerraform(struct?: ApsScraperDestinationAmpConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_arn: cdktn.stringToTerraform(struct!.workspaceArn),
  }
}


export function apsScraperDestinationAmpConfigurationToHclTerraform(struct?: ApsScraperDestinationAmpConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workspace_arn: {
      value: cdktn.stringToHclTerraform(struct!.workspaceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsScraperDestinationAmpConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsScraperDestinationAmpConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceArn = this._workspaceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsScraperDestinationAmpConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workspaceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workspaceArn = value.workspaceArn;
    }
  }

  // workspace_arn - computed: true, optional: true, required: false
  private _workspaceArn?: string; 
  public get workspaceArn() {
    return this.getStringAttribute('workspace_arn');
  }
  public set workspaceArn(value: string) {
    this._workspaceArn = value;
  }
  public resetWorkspaceArn() {
    this._workspaceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceArnInput() {
    return this._workspaceArn;
  }
}
export interface ApsScraperDestination {
  /**
  * Configuration for Amazon Managed Prometheus metrics destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#amp_configuration ApsScraper#amp_configuration}
  */
  readonly ampConfiguration?: ApsScraperDestinationAmpConfiguration;
}

export function apsScraperDestinationToTerraform(struct?: ApsScraperDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amp_configuration: apsScraperDestinationAmpConfigurationToTerraform(struct!.ampConfiguration),
  }
}


export function apsScraperDestinationToHclTerraform(struct?: ApsScraperDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amp_configuration: {
      value: apsScraperDestinationAmpConfigurationToHclTerraform(struct!.ampConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "ApsScraperDestinationAmpConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsScraperDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsScraperDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ampConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ampConfiguration = this._ampConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsScraperDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ampConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ampConfiguration.internalValue = value.ampConfiguration;
    }
  }

  // amp_configuration - computed: true, optional: true, required: false
  private _ampConfiguration = new ApsScraperDestinationAmpConfigurationOutputReference(this, "amp_configuration");
  public get ampConfiguration() {
    return this._ampConfiguration;
  }
  public putAmpConfiguration(value: ApsScraperDestinationAmpConfiguration) {
    this._ampConfiguration.internalValue = value;
  }
  public resetAmpConfiguration() {
    this._ampConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ampConfigurationInput() {
    return this._ampConfiguration.internalValue;
  }
}
export interface ApsScraperRoleConfiguration {
  /**
  * IAM Role in source account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#source_role_arn ApsScraper#source_role_arn}
  */
  readonly sourceRoleArn?: string;
  /**
  * IAM Role in the target account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#target_role_arn ApsScraper#target_role_arn}
  */
  readonly targetRoleArn?: string;
}

export function apsScraperRoleConfigurationToTerraform(struct?: ApsScraperRoleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_role_arn: cdktn.stringToTerraform(struct!.sourceRoleArn),
    target_role_arn: cdktn.stringToTerraform(struct!.targetRoleArn),
  }
}


export function apsScraperRoleConfigurationToHclTerraform(struct?: ApsScraperRoleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.sourceRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.targetRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsScraperRoleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsScraperRoleConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRoleArn = this._sourceRoleArn;
    }
    if (this._targetRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRoleArn = this._targetRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsScraperRoleConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceRoleArn = undefined;
      this._targetRoleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceRoleArn = value.sourceRoleArn;
      this._targetRoleArn = value.targetRoleArn;
    }
  }

  // source_role_arn - computed: true, optional: true, required: false
  private _sourceRoleArn?: string; 
  public get sourceRoleArn() {
    return this.getStringAttribute('source_role_arn');
  }
  public set sourceRoleArn(value: string) {
    this._sourceRoleArn = value;
  }
  public resetSourceRoleArn() {
    this._sourceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRoleArnInput() {
    return this._sourceRoleArn;
  }

  // target_role_arn - computed: true, optional: true, required: false
  private _targetRoleArn?: string; 
  public get targetRoleArn() {
    return this.getStringAttribute('target_role_arn');
  }
  public set targetRoleArn(value: string) {
    this._targetRoleArn = value;
  }
  public resetTargetRoleArn() {
    this._targetRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRoleArnInput() {
    return this._targetRoleArn;
  }
}
export interface ApsScraperScrapeConfiguration {
  /**
  * Prometheus compatible scrape configuration in base64 encoded blob format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#configuration_blob ApsScraper#configuration_blob}
  */
  readonly configurationBlob?: string;
}

export function apsScraperScrapeConfigurationToTerraform(struct?: ApsScraperScrapeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configuration_blob: cdktn.stringToTerraform(struct!.configurationBlob),
  }
}


export function apsScraperScrapeConfigurationToHclTerraform(struct?: ApsScraperScrapeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configuration_blob: {
      value: cdktn.stringToHclTerraform(struct!.configurationBlob),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsScraperScrapeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsScraperScrapeConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationBlob !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationBlob = this._configurationBlob;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsScraperScrapeConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configurationBlob = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configurationBlob = value.configurationBlob;
    }
  }

  // configuration_blob - computed: true, optional: true, required: false
  private _configurationBlob?: string; 
  public get configurationBlob() {
    return this.getStringAttribute('configuration_blob');
  }
  public set configurationBlob(value: string) {
    this._configurationBlob = value;
  }
  public resetConfigurationBlob() {
    this._configurationBlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationBlobInput() {
    return this._configurationBlob;
  }
}
export interface ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs {
  /**
  * ARN of the CloudWatch log group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#log_group_arn ApsScraper#log_group_arn}
  */
  readonly logGroupArn?: string;
}

export function apsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsToTerraform(struct?: ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_group_arn: cdktn.stringToTerraform(struct!.logGroupArn),
  }
}


export function apsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsToHclTerraform(struct?: ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.logGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupArn = this._logGroupArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroupArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroupArn = value.logGroupArn;
    }
  }

  // log_group_arn - computed: true, optional: true, required: false
  private _logGroupArn?: string; 
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
  public set logGroupArn(value: string) {
    this._logGroupArn = value;
  }
  public resetLogGroupArn() {
    this._logGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupArnInput() {
    return this._logGroupArn;
  }
}
export interface ApsScraperScraperLoggingConfigurationLoggingDestination {
  /**
  * Represents a cloudwatch logs destination for scraper logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#cloudwatch_logs ApsScraper#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs;
}

export function apsScraperScraperLoggingConfigurationLoggingDestinationToTerraform(struct?: ApsScraperScraperLoggingConfigurationLoggingDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_logs: apsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsToTerraform(struct!.cloudwatchLogs),
  }
}


export function apsScraperScraperLoggingConfigurationLoggingDestinationToHclTerraform(struct?: ApsScraperScraperLoggingConfigurationLoggingDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_logs: {
      value: apsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsToHclTerraform(struct!.cloudwatchLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsScraperScraperLoggingConfigurationLoggingDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsScraperScraperLoggingConfigurationLoggingDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchLogs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
    }
  }

  // cloudwatch_logs - computed: true, optional: true, required: false
  private _cloudwatchLogs = new ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }
}
export interface ApsScraperScraperLoggingConfigurationScraperComponentsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#options ApsScraper#options}
  */
  readonly options?: { [key: string]: string };
}

export function apsScraperScraperLoggingConfigurationScraperComponentsConfigToTerraform(struct?: ApsScraperScraperLoggingConfigurationScraperComponentsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    options: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.options),
  }
}


export function apsScraperScraperLoggingConfigurationScraperComponentsConfigToHclTerraform(struct?: ApsScraperScraperLoggingConfigurationScraperComponentsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    options: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsScraperScraperLoggingConfigurationScraperComponentsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsScraperScraperLoggingConfigurationScraperComponentsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options = value.options;
    }
  }

  // options - computed: true, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }
}
export interface ApsScraperScraperLoggingConfigurationScraperComponents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#config ApsScraper#config}
  */
  readonly config?: ApsScraperScraperLoggingConfigurationScraperComponentsConfig;
  /**
  * Type of scraper component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#type ApsScraper#type}
  */
  readonly type?: string;
}

export function apsScraperScraperLoggingConfigurationScraperComponentsToTerraform(struct?: ApsScraperScraperLoggingConfigurationScraperComponents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    config: apsScraperScraperLoggingConfigurationScraperComponentsConfigToTerraform(struct!.config),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function apsScraperScraperLoggingConfigurationScraperComponentsToHclTerraform(struct?: ApsScraperScraperLoggingConfigurationScraperComponents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    config: {
      value: apsScraperScraperLoggingConfigurationScraperComponentsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "ApsScraperScraperLoggingConfigurationScraperComponentsConfig",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApsScraperScraperLoggingConfigurationScraperComponents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsScraperScraperLoggingConfigurationScraperComponents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._type = value.type;
    }
  }

  // config - computed: true, optional: true, required: false
  private _config = new ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ApsScraperScraperLoggingConfigurationScraperComponentsConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ApsScraperScraperLoggingConfigurationScraperComponentsList extends cdktn.ComplexList {
  public internalValue? : ApsScraperScraperLoggingConfigurationScraperComponents[] | cdktn.IResolvable

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
  public get(index: number): ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference {
    return new ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsScraperScraperLoggingConfiguration {
  /**
  * Destination for scraper logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#logging_destination ApsScraper#logging_destination}
  */
  readonly loggingDestination?: ApsScraperScraperLoggingConfigurationLoggingDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#scraper_components ApsScraper#scraper_components}
  */
  readonly scraperComponents?: ApsScraperScraperLoggingConfigurationScraperComponents[] | cdktn.IResolvable;
}

export function apsScraperScraperLoggingConfigurationToTerraform(struct?: ApsScraperScraperLoggingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    logging_destination: apsScraperScraperLoggingConfigurationLoggingDestinationToTerraform(struct!.loggingDestination),
    scraper_components: cdktn.listMapper(apsScraperScraperLoggingConfigurationScraperComponentsToTerraform, false)(struct!.scraperComponents),
  }
}


export function apsScraperScraperLoggingConfigurationToHclTerraform(struct?: ApsScraperScraperLoggingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    logging_destination: {
      value: apsScraperScraperLoggingConfigurationLoggingDestinationToHclTerraform(struct!.loggingDestination),
      isBlock: true,
      type: "struct",
      storageClassType: "ApsScraperScraperLoggingConfigurationLoggingDestination",
    },
    scraper_components: {
      value: cdktn.listMapperHcl(apsScraperScraperLoggingConfigurationScraperComponentsToHclTerraform, false)(struct!.scraperComponents),
      isBlock: true,
      type: "list",
      storageClassType: "ApsScraperScraperLoggingConfigurationScraperComponentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsScraperScraperLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsScraperScraperLoggingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loggingDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingDestination = this._loggingDestination?.internalValue;
    }
    if (this._scraperComponents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scraperComponents = this._scraperComponents?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsScraperScraperLoggingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loggingDestination.internalValue = undefined;
      this._scraperComponents.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loggingDestination.internalValue = value.loggingDestination;
      this._scraperComponents.internalValue = value.scraperComponents;
    }
  }

  // logging_destination - computed: true, optional: true, required: false
  private _loggingDestination = new ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference(this, "logging_destination");
  public get loggingDestination() {
    return this._loggingDestination;
  }
  public putLoggingDestination(value: ApsScraperScraperLoggingConfigurationLoggingDestination) {
    this._loggingDestination.internalValue = value;
  }
  public resetLoggingDestination() {
    this._loggingDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingDestinationInput() {
    return this._loggingDestination.internalValue;
  }

  // scraper_components - computed: true, optional: true, required: false
  private _scraperComponents = new ApsScraperScraperLoggingConfigurationScraperComponentsList(this, "scraper_components", false);
  public get scraperComponents() {
    return this._scraperComponents;
  }
  public putScraperComponents(value: ApsScraperScraperLoggingConfigurationScraperComponents[] | cdktn.IResolvable) {
    this._scraperComponents.internalValue = value;
  }
  public resetScraperComponents() {
    this._scraperComponents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scraperComponentsInput() {
    return this._scraperComponents.internalValue;
  }
}
export interface ApsScraperSourceEksConfiguration {
  /**
  * ARN of an EKS cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#cluster_arn ApsScraper#cluster_arn}
  */
  readonly clusterArn?: string;
  /**
  * List of security group IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#security_group_ids ApsScraper#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * List of subnet IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#subnet_ids ApsScraper#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function apsScraperSourceEksConfigurationToTerraform(struct?: ApsScraperSourceEksConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_arn: cdktn.stringToTerraform(struct!.clusterArn),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function apsScraperSourceEksConfigurationToHclTerraform(struct?: ApsScraperSourceEksConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_arn: {
      value: cdktn.stringToHclTerraform(struct!.clusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsScraperSourceEksConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsScraperSourceEksConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterArn = this._clusterArn;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsScraperSourceEksConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterArn = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterArn = value.clusterArn;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // cluster_arn - computed: true, optional: true, required: false
  private _clusterArn?: string; 
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  public resetClusterArn() {
    this._clusterArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
export interface ApsScraperSourceVpcConfiguration {
  /**
  * List of security group IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#security_group_ids ApsScraper#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * List of subnet IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#subnet_ids ApsScraper#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function apsScraperSourceVpcConfigurationToTerraform(struct?: ApsScraperSourceVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function apsScraperSourceVpcConfigurationToHclTerraform(struct?: ApsScraperSourceVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsScraperSourceVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsScraperSourceVpcConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsScraperSourceVpcConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
export interface ApsScraperSource {
  /**
  * Configuration for EKS metrics source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#eks_configuration ApsScraper#eks_configuration}
  */
  readonly eksConfiguration?: ApsScraperSourceEksConfiguration;
  /**
  * Configuration for VPC metrics source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#vpc_configuration ApsScraper#vpc_configuration}
  */
  readonly vpcConfiguration?: ApsScraperSourceVpcConfiguration;
}

export function apsScraperSourceToTerraform(struct?: ApsScraperSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    eks_configuration: apsScraperSourceEksConfigurationToTerraform(struct!.eksConfiguration),
    vpc_configuration: apsScraperSourceVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}


export function apsScraperSourceToHclTerraform(struct?: ApsScraperSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    eks_configuration: {
      value: apsScraperSourceEksConfigurationToHclTerraform(struct!.eksConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "ApsScraperSourceEksConfiguration",
    },
    vpc_configuration: {
      value: apsScraperSourceVpcConfigurationToHclTerraform(struct!.vpcConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "ApsScraperSourceVpcConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsScraperSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsScraperSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eksConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksConfiguration = this._eksConfiguration?.internalValue;
    }
    if (this._vpcConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfiguration = this._vpcConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsScraperSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eksConfiguration.internalValue = undefined;
      this._vpcConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eksConfiguration.internalValue = value.eksConfiguration;
      this._vpcConfiguration.internalValue = value.vpcConfiguration;
    }
  }

  // eks_configuration - computed: true, optional: true, required: false
  private _eksConfiguration = new ApsScraperSourceEksConfigurationOutputReference(this, "eks_configuration");
  public get eksConfiguration() {
    return this._eksConfiguration;
  }
  public putEksConfiguration(value: ApsScraperSourceEksConfiguration) {
    this._eksConfiguration.internalValue = value;
  }
  public resetEksConfiguration() {
    this._eksConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksConfigurationInput() {
    return this._eksConfiguration.internalValue;
  }

  // vpc_configuration - computed: true, optional: true, required: false
  private _vpcConfiguration = new ApsScraperSourceVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
  public putVpcConfiguration(value: ApsScraperSourceVpcConfiguration) {
    this._vpcConfiguration.internalValue = value;
  }
  public resetVpcConfiguration() {
    this._vpcConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration.internalValue;
  }
}
export interface ApsScraperTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#key ApsScraper#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#value ApsScraper#value}
  */
  readonly value?: string;
}

export function apsScraperTagsToTerraform(struct?: ApsScraperTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function apsScraperTagsToHclTerraform(struct?: ApsScraperTags | cdktn.IResolvable): any {
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

export class ApsScraperTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ApsScraperTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApsScraperTags | cdktn.IResolvable | undefined) {
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

export class ApsScraperTagsList extends cdktn.ComplexList {
  public internalValue? : ApsScraperTags[] | cdktn.IResolvable

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
  public get(index: number): ApsScraperTagsOutputReference {
    return new ApsScraperTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper awscc_aps_scraper}
*/
export class ApsScraper extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_aps_scraper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApsScraper resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsScraper to import
  * @param importFromId The id of the existing ApsScraper that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsScraper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_aps_scraper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aps_scraper awscc_aps_scraper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsScraperConfig
  */
  public constructor(scope: Construct, id: string, config: ApsScraperConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_aps_scraper',
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
    this._alias = config.alias;
    this._destination.internalValue = config.destination;
    this._roleConfiguration.internalValue = config.roleConfiguration;
    this._scrapeConfiguration.internalValue = config.scrapeConfiguration;
    this._scraperLoggingConfiguration.internalValue = config.scraperLoggingConfiguration;
    this._source.internalValue = config.source;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new ApsScraperDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ApsScraperDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // role_configuration - computed: true, optional: true, required: false
  private _roleConfiguration = new ApsScraperRoleConfigurationOutputReference(this, "role_configuration");
  public get roleConfiguration() {
    return this._roleConfiguration;
  }
  public putRoleConfiguration(value: ApsScraperRoleConfiguration) {
    this._roleConfiguration.internalValue = value;
  }
  public resetRoleConfiguration() {
    this._roleConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleConfigurationInput() {
    return this._roleConfiguration.internalValue;
  }

  // scrape_configuration - computed: false, optional: false, required: true
  private _scrapeConfiguration = new ApsScraperScrapeConfigurationOutputReference(this, "scrape_configuration");
  public get scrapeConfiguration() {
    return this._scrapeConfiguration;
  }
  public putScrapeConfiguration(value: ApsScraperScrapeConfiguration) {
    this._scrapeConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeConfigurationInput() {
    return this._scrapeConfiguration.internalValue;
  }

  // scraper_id - computed: true, optional: false, required: false
  public get scraperId() {
    return this.getStringAttribute('scraper_id');
  }

  // scraper_logging_configuration - computed: true, optional: true, required: false
  private _scraperLoggingConfiguration = new ApsScraperScraperLoggingConfigurationOutputReference(this, "scraper_logging_configuration");
  public get scraperLoggingConfiguration() {
    return this._scraperLoggingConfiguration;
  }
  public putScraperLoggingConfiguration(value: ApsScraperScraperLoggingConfiguration) {
    this._scraperLoggingConfiguration.internalValue = value;
  }
  public resetScraperLoggingConfiguration() {
    this._scraperLoggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scraperLoggingConfigurationInput() {
    return this._scraperLoggingConfiguration.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new ApsScraperSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: ApsScraperSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApsScraperTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApsScraperTags[] | cdktn.IResolvable) {
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
      alias: cdktn.stringToTerraform(this._alias),
      destination: apsScraperDestinationToTerraform(this._destination.internalValue),
      role_configuration: apsScraperRoleConfigurationToTerraform(this._roleConfiguration.internalValue),
      scrape_configuration: apsScraperScrapeConfigurationToTerraform(this._scrapeConfiguration.internalValue),
      scraper_logging_configuration: apsScraperScraperLoggingConfigurationToTerraform(this._scraperLoggingConfiguration.internalValue),
      source: apsScraperSourceToTerraform(this._source.internalValue),
      tags: cdktn.listMapper(apsScraperTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktn.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: apsScraperDestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsScraperDestination",
      },
      role_configuration: {
        value: apsScraperRoleConfigurationToHclTerraform(this._roleConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsScraperRoleConfiguration",
      },
      scrape_configuration: {
        value: apsScraperScrapeConfigurationToHclTerraform(this._scrapeConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsScraperScrapeConfiguration",
      },
      scraper_logging_configuration: {
        value: apsScraperScraperLoggingConfigurationToHclTerraform(this._scraperLoggingConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsScraperScraperLoggingConfiguration",
      },
      source: {
        value: apsScraperSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsScraperSource",
      },
      tags: {
        value: cdktn.listMapperHcl(apsScraperTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsScraperTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
