// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityhubAutomationRuleV2Config extends cdktn.TerraformMetaArguments {
  /**
  * A list of actions to be performed when the rule criteria is met
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#actions SecurityhubAutomationRuleV2#actions}
  */
  readonly actions: SecurityhubAutomationRuleV2Actions[] | cdktn.IResolvable;
  /**
  * Defines the parameters and conditions used to evaluate and filter security findings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#criteria SecurityhubAutomationRuleV2#criteria}
  */
  readonly criteria: SecurityhubAutomationRuleV2Criteria;
  /**
  * A description of the automation rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#description SecurityhubAutomationRuleV2#description}
  */
  readonly description: string;
  /**
  * The name of the automation rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#rule_name SecurityhubAutomationRuleV2#rule_name}
  */
  readonly ruleName: string;
  /**
  * The value for the rule priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#rule_order SecurityhubAutomationRuleV2#rule_order}
  */
  readonly ruleOrder: number;
  /**
  * The status of the automation rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#rule_status SecurityhubAutomationRuleV2#rule_status}
  */
  readonly ruleStatus?: string;
  /**
  * A key-value pair to associate with a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#tags SecurityhubAutomationRuleV2#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration {
  /**
  * The ARN of the connector that establishes the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#connector_arn SecurityhubAutomationRuleV2#connector_arn}
  */
  readonly connectorArn?: string;
}

export function securityhubAutomationRuleV2ActionsExternalIntegrationConfigurationToTerraform(struct?: SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connector_arn: cdktn.stringToTerraform(struct!.connectorArn),
  }
}


export function securityhubAutomationRuleV2ActionsExternalIntegrationConfigurationToHclTerraform(struct?: SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connector_arn: {
      value: cdktn.stringToHclTerraform(struct!.connectorArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorArn = this._connectorArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorArn = value.connectorArn;
    }
  }

  // connector_arn - computed: true, optional: true, required: false
  private _connectorArn?: string; 
  public get connectorArn() {
    return this.getStringAttribute('connector_arn');
  }
  public set connectorArn(value: string) {
    this._connectorArn = value;
  }
  public resetConnectorArn() {
    this._connectorArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorArnInput() {
    return this._connectorArn;
  }
}
export interface SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate {
  /**
  * Notes or contextual information for findings that are modified by the automation rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#comment SecurityhubAutomationRuleV2#comment}
  */
  readonly comment?: string;
  /**
  * The severity level to be assigned to findings that match the automation rule criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#severity_id SecurityhubAutomationRuleV2#severity_id}
  */
  readonly severityId?: number;
  /**
  * The status to be applied to findings that match automation rule criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#status_id SecurityhubAutomationRuleV2#status_id}
  */
  readonly statusId?: number;
}

export function securityhubAutomationRuleV2ActionsFindingFieldsUpdateToTerraform(struct?: SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comment: cdktn.stringToTerraform(struct!.comment),
    severity_id: cdktn.numberToTerraform(struct!.severityId),
    status_id: cdktn.numberToTerraform(struct!.statusId),
  }
}


export function securityhubAutomationRuleV2ActionsFindingFieldsUpdateToHclTerraform(struct?: SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity_id: {
      value: cdktn.numberToHclTerraform(struct!.severityId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_id: {
      value: cdktn.numberToHclTerraform(struct!.statusId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._severityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityId = this._severityId;
    }
    if (this._statusId !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusId = this._statusId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._severityId = undefined;
      this._statusId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._severityId = value.severityId;
      this._statusId = value.statusId;
    }
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // severity_id - computed: true, optional: true, required: false
  private _severityId?: number; 
  public get severityId() {
    return this.getNumberAttribute('severity_id');
  }
  public set severityId(value: number) {
    this._severityId = value;
  }
  public resetSeverityId() {
    this._severityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityIdInput() {
    return this._severityId;
  }

  // status_id - computed: true, optional: true, required: false
  private _statusId?: number; 
  public get statusId() {
    return this.getNumberAttribute('status_id');
  }
  public set statusId(value: number) {
    this._statusId = value;
  }
  public resetStatusId() {
    this._statusId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusIdInput() {
    return this._statusId;
  }
}
export interface SecurityhubAutomationRuleV2Actions {
  /**
  * The settings for integrating automation rule actions with external systems or service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#external_integration_configuration SecurityhubAutomationRuleV2#external_integration_configuration}
  */
  readonly externalIntegrationConfiguration?: SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration;
  /**
  * The changes to be applied to fields in a security finding when an automation rule is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#finding_fields_update SecurityhubAutomationRuleV2#finding_fields_update}
  */
  readonly findingFieldsUpdate?: SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate;
  /**
  * The category of action to be executed by the automation rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#type SecurityhubAutomationRuleV2#type}
  */
  readonly type: string;
}

export function securityhubAutomationRuleV2ActionsToTerraform(struct?: SecurityhubAutomationRuleV2Actions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    external_integration_configuration: securityhubAutomationRuleV2ActionsExternalIntegrationConfigurationToTerraform(struct!.externalIntegrationConfiguration),
    finding_fields_update: securityhubAutomationRuleV2ActionsFindingFieldsUpdateToTerraform(struct!.findingFieldsUpdate),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function securityhubAutomationRuleV2ActionsToHclTerraform(struct?: SecurityhubAutomationRuleV2Actions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    external_integration_configuration: {
      value: securityhubAutomationRuleV2ActionsExternalIntegrationConfigurationToHclTerraform(struct!.externalIntegrationConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration",
    },
    finding_fields_update: {
      value: securityhubAutomationRuleV2ActionsFindingFieldsUpdateToHclTerraform(struct!.findingFieldsUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate",
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

export class SecurityhubAutomationRuleV2ActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleV2Actions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalIntegrationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIntegrationConfiguration = this._externalIntegrationConfiguration?.internalValue;
    }
    if (this._findingFieldsUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingFieldsUpdate = this._findingFieldsUpdate?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2Actions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalIntegrationConfiguration.internalValue = undefined;
      this._findingFieldsUpdate.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalIntegrationConfiguration.internalValue = value.externalIntegrationConfiguration;
      this._findingFieldsUpdate.internalValue = value.findingFieldsUpdate;
      this._type = value.type;
    }
  }

  // external_integration_configuration - computed: true, optional: true, required: false
  private _externalIntegrationConfiguration = new SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference(this, "external_integration_configuration");
  public get externalIntegrationConfiguration() {
    return this._externalIntegrationConfiguration;
  }
  public putExternalIntegrationConfiguration(value: SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration) {
    this._externalIntegrationConfiguration.internalValue = value;
  }
  public resetExternalIntegrationConfiguration() {
    this._externalIntegrationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIntegrationConfigurationInput() {
    return this._externalIntegrationConfiguration.internalValue;
  }

  // finding_fields_update - computed: true, optional: true, required: false
  private _findingFieldsUpdate = new SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference(this, "finding_fields_update");
  public get findingFieldsUpdate() {
    return this._findingFieldsUpdate;
  }
  public putFindingFieldsUpdate(value: SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate) {
    this._findingFieldsUpdate.internalValue = value;
  }
  public resetFindingFieldsUpdate() {
    this._findingFieldsUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingFieldsUpdateInput() {
    return this._findingFieldsUpdate.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class SecurityhubAutomationRuleV2ActionsList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleV2Actions[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleV2ActionsOutputReference {
    return new SecurityhubAutomationRuleV2ActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter {
  /**
  * The value of the boolean
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}
  */
  readonly value?: boolean | cdktn.IResolvable;
}

export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterToTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.booleanToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterToHclTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: true, optional: true, required: false
  private _value?: boolean | cdktn.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktn.IResolvable) {
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
export interface SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters {
  /**
  * The name of the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}
  */
  readonly fieldName?: string;
  /**
  * Boolean filter for querying findings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}
  */
  readonly filter?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter;
}

export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersToTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_name: cdktn.stringToTerraform(struct!.fieldName),
    filter: securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterToTerraform(struct!.filter),
  }
}


export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersToHclTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_name: {
      value: cdktn.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._filter.internalValue = value.filter;
    }
  }

  // field_name - computed: true, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // filter - computed: true, optional: true, required: false
  private _filter = new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference {
    return new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange {
  /**
  * A date range unit for the date filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#unit SecurityhubAutomationRuleV2#unit}
  */
  readonly unit?: string;
  /**
  * A date range value for the date filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}
  */
  readonly value?: number;
}

export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeToTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeToHclTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter {
  /**
  * A date range for the date filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#date_range SecurityhubAutomationRuleV2#date_range}
  */
  readonly dateRange?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange;
  /**
  * The timestamp formatted in ISO8601
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#end SecurityhubAutomationRuleV2#end}
  */
  readonly end?: string;
  /**
  * The timestamp formatted in ISO8601
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#start SecurityhubAutomationRuleV2#start}
  */
  readonly start?: string;
}

export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterToTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    date_range: securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeToTerraform(struct!.dateRange),
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
  }
}


export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterToHclTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    date_range: {
      value: securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeToHclTerraform(struct!.dateRange),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange",
    },
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRange = this._dateRange?.internalValue;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dateRange.internalValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dateRange.internalValue = value.dateRange;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // date_range - computed: true, optional: true, required: false
  private _dateRange = new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference(this, "date_range");
  public get dateRange() {
    return this._dateRange;
  }
  public putDateRange(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange) {
    this._dateRange.internalValue = value;
  }
  public resetDateRange() {
    this._dateRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRangeInput() {
    return this._dateRange.internalValue;
  }

  // end - computed: true, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: true, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters {
  /**
  * The name of the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}
  */
  readonly fieldName?: string;
  /**
  * A date filter for querying findings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}
  */
  readonly filter?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter;
}

export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersToTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_name: cdktn.stringToTerraform(struct!.fieldName),
    filter: securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterToTerraform(struct!.filter),
  }
}


export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersToHclTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_name: {
      value: cdktn.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._filter.internalValue = value.filter;
    }
  }

  // field_name - computed: true, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // filter - computed: true, optional: true, required: false
  private _filter = new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference {
    return new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter {
  /**
  * The condition to apply to the key value when filtering findings with a map filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#comparison SecurityhubAutomationRuleV2#comparison}
  */
  readonly comparison?: string;
  /**
  * The key of the map filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#key SecurityhubAutomationRuleV2#key}
  */
  readonly key?: string;
  /**
  * The value for the key in the map filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}
  */
  readonly value?: string;
}

export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterToTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterToHclTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
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

  public set internalValue(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
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
      this._comparison = value.comparison;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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
export interface SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters {
  /**
  * The name of the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}
  */
  readonly fieldName?: string;
  /**
  * A map filter for filtering findings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}
  */
  readonly filter?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter;
}

export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersToTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_name: cdktn.stringToTerraform(struct!.fieldName),
    filter: securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterToTerraform(struct!.filter),
  }
}


export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersToHclTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_name: {
      value: cdktn.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._filter.internalValue = value.filter;
    }
  }

  // field_name - computed: true, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // filter - computed: true, optional: true, required: false
  private _filter = new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference {
    return new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter {
  /**
  * The equal-to condition to be applied to a single field when querying for findings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#eq SecurityhubAutomationRuleV2#eq}
  */
  readonly eq?: number;
  /**
  * The greater-than-equal condition to be applied to a single field when querying for findings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#gte SecurityhubAutomationRuleV2#gte}
  */
  readonly gte?: number;
  /**
  * The less-than-equal condition to be applied to a single field when querying for findings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#lte SecurityhubAutomationRuleV2#lte}
  */
  readonly lte?: number;
}

export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterToTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    eq: cdktn.numberToTerraform(struct!.eq),
    gte: cdktn.numberToTerraform(struct!.gte),
    lte: cdktn.numberToTerraform(struct!.lte),
  }
}


export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterToHclTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    eq: {
      value: cdktn.numberToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gte: {
      value: cdktn.numberToHclTerraform(struct!.gte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lte: {
      value: cdktn.numberToHclTerraform(struct!.lte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._gte !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte;
    }
    if (this._lte !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._gte = undefined;
      this._lte = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eq = value.eq;
      this._gte = value.gte;
      this._lte = value.lte;
    }
  }

  // eq - computed: true, optional: true, required: false
  private _eq?: number; 
  public get eq() {
    return this.getNumberAttribute('eq');
  }
  public set eq(value: number) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // gte - computed: true, optional: true, required: false
  private _gte?: number; 
  public get gte() {
    return this.getNumberAttribute('gte');
  }
  public set gte(value: number) {
    this._gte = value;
  }
  public resetGte() {
    this._gte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte;
  }

  // lte - computed: true, optional: true, required: false
  private _lte?: number; 
  public get lte() {
    return this.getNumberAttribute('lte');
  }
  public set lte(value: number) {
    this._lte = value;
  }
  public resetLte() {
    this._lte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteInput() {
    return this._lte;
  }
}
export interface SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters {
  /**
  * The name of the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}
  */
  readonly fieldName?: string;
  /**
  * A number filter for querying findings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}
  */
  readonly filter?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter;
}

export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersToTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_name: cdktn.stringToTerraform(struct!.fieldName),
    filter: securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterToTerraform(struct!.filter),
  }
}


export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersToHclTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_name: {
      value: cdktn.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._filter.internalValue = value.filter;
    }
  }

  // field_name - computed: true, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // filter - computed: true, optional: true, required: false
  private _filter = new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference {
    return new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter {
  /**
  * The condition to apply to a string value when filtering findings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#comparison SecurityhubAutomationRuleV2#comparison}
  */
  readonly comparison?: string;
  /**
  * The string filter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}
  */
  readonly value?: string;
}

export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterToTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterToHclTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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
export interface SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters {
  /**
  * The name of the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}
  */
  readonly fieldName?: string;
  /**
  * A string filter for filtering findings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}
  */
  readonly filter?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter;
}

export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersToTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field_name: cdktn.stringToTerraform(struct!.fieldName),
    filter: securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterToTerraform(struct!.filter),
  }
}


export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersToHclTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field_name: {
      value: cdktn.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._filter.internalValue = value.filter;
    }
  }

  // field_name - computed: true, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // filter - computed: true, optional: true, required: false
  private _filter = new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference {
    return new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters {
  /**
  * Enables filtering based on boolean field values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#boolean_filters SecurityhubAutomationRuleV2#boolean_filters}
  */
  readonly booleanFilters?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters[] | cdktn.IResolvable;
  /**
  * Enables filtering based on date and timestamp fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#date_filters SecurityhubAutomationRuleV2#date_filters}
  */
  readonly dateFilters?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters[] | cdktn.IResolvable;
  /**
  * Enables filtering based on map field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#map_filters SecurityhubAutomationRuleV2#map_filters}
  */
  readonly mapFilters?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters[] | cdktn.IResolvable;
  /**
  * Enables filtering based on numerical field values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#number_filters SecurityhubAutomationRuleV2#number_filters}
  */
  readonly numberFilters?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters[] | cdktn.IResolvable;
  /**
  * The logical operator used to combine multiple conditions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#operator SecurityhubAutomationRuleV2#operator}
  */
  readonly operator?: string;
  /**
  * Enables filtering based on string field values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#string_filters SecurityhubAutomationRuleV2#string_filters}
  */
  readonly stringFilters?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters[] | cdktn.IResolvable;
}

export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersToTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_filters: cdktn.listMapper(securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersToTerraform, false)(struct!.booleanFilters),
    date_filters: cdktn.listMapper(securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersToTerraform, false)(struct!.dateFilters),
    map_filters: cdktn.listMapper(securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersToTerraform, false)(struct!.mapFilters),
    number_filters: cdktn.listMapper(securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersToTerraform, false)(struct!.numberFilters),
    operator: cdktn.stringToTerraform(struct!.operator),
    string_filters: cdktn.listMapper(securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersToTerraform, false)(struct!.stringFilters),
  }
}


export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersToHclTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_filters: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersToHclTerraform, false)(struct!.booleanFilters),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList",
    },
    date_filters: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersToHclTerraform, false)(struct!.dateFilters),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList",
    },
    map_filters: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersToHclTerraform, false)(struct!.mapFilters),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList",
    },
    number_filters: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersToHclTerraform, false)(struct!.numberFilters),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_filters: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersToHclTerraform, false)(struct!.stringFilters),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanFilters = this._booleanFilters?.internalValue;
    }
    if (this._dateFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFilters = this._dateFilters?.internalValue;
    }
    if (this._mapFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapFilters = this._mapFilters?.internalValue;
    }
    if (this._numberFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberFilters = this._numberFilters?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._stringFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringFilters = this._stringFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanFilters.internalValue = undefined;
      this._dateFilters.internalValue = undefined;
      this._mapFilters.internalValue = undefined;
      this._numberFilters.internalValue = undefined;
      this._operator = undefined;
      this._stringFilters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanFilters.internalValue = value.booleanFilters;
      this._dateFilters.internalValue = value.dateFilters;
      this._mapFilters.internalValue = value.mapFilters;
      this._numberFilters.internalValue = value.numberFilters;
      this._operator = value.operator;
      this._stringFilters.internalValue = value.stringFilters;
    }
  }

  // boolean_filters - computed: true, optional: true, required: false
  private _booleanFilters = new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList(this, "boolean_filters", false);
  public get booleanFilters() {
    return this._booleanFilters;
  }
  public putBooleanFilters(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters[] | cdktn.IResolvable) {
    this._booleanFilters.internalValue = value;
  }
  public resetBooleanFilters() {
    this._booleanFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanFiltersInput() {
    return this._booleanFilters.internalValue;
  }

  // date_filters - computed: true, optional: true, required: false
  private _dateFilters = new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList(this, "date_filters", false);
  public get dateFilters() {
    return this._dateFilters;
  }
  public putDateFilters(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters[] | cdktn.IResolvable) {
    this._dateFilters.internalValue = value;
  }
  public resetDateFilters() {
    this._dateFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFiltersInput() {
    return this._dateFilters.internalValue;
  }

  // map_filters - computed: true, optional: true, required: false
  private _mapFilters = new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList(this, "map_filters", false);
  public get mapFilters() {
    return this._mapFilters;
  }
  public putMapFilters(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters[] | cdktn.IResolvable) {
    this._mapFilters.internalValue = value;
  }
  public resetMapFilters() {
    this._mapFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapFiltersInput() {
    return this._mapFilters.internalValue;
  }

  // number_filters - computed: true, optional: true, required: false
  private _numberFilters = new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList(this, "number_filters", false);
  public get numberFilters() {
    return this._numberFilters;
  }
  public putNumberFilters(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters[] | cdktn.IResolvable) {
    this._numberFilters.internalValue = value;
  }
  public resetNumberFilters() {
    this._numberFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberFiltersInput() {
    return this._numberFilters.internalValue;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // string_filters - computed: true, optional: true, required: false
  private _stringFilters = new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList(this, "string_filters", false);
  public get stringFilters() {
    return this._stringFilters;
  }
  public putStringFilters(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters[] | cdktn.IResolvable) {
    this._stringFilters.internalValue = value;
  }
  public resetStringFilters() {
    this._stringFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringFiltersInput() {
    return this._stringFilters.internalValue;
  }
}

export class SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList extends cdktn.ComplexList {
  public internalValue? : SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference {
    return new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria {
  /**
  * Enables the creation of complex filtering conditions by combining filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#composite_filters SecurityhubAutomationRuleV2#composite_filters}
  */
  readonly compositeFilters?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters[] | cdktn.IResolvable;
  /**
  * The logical operator used to combine multiple conditions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#composite_operator SecurityhubAutomationRuleV2#composite_operator}
  */
  readonly compositeOperator?: string;
}

export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaToTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    composite_filters: cdktn.listMapper(securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersToTerraform, false)(struct!.compositeFilters),
    composite_operator: cdktn.stringToTerraform(struct!.compositeOperator),
  }
}


export function securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaToHclTerraform(struct?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    composite_filters: {
      value: cdktn.listMapperHcl(securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersToHclTerraform, false)(struct!.compositeFilters),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList",
    },
    composite_operator: {
      value: cdktn.stringToHclTerraform(struct!.compositeOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compositeFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compositeFilters = this._compositeFilters?.internalValue;
    }
    if (this._compositeOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.compositeOperator = this._compositeOperator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compositeFilters.internalValue = undefined;
      this._compositeOperator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compositeFilters.internalValue = value.compositeFilters;
      this._compositeOperator = value.compositeOperator;
    }
  }

  // composite_filters - computed: true, optional: true, required: false
  private _compositeFilters = new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList(this, "composite_filters", false);
  public get compositeFilters() {
    return this._compositeFilters;
  }
  public putCompositeFilters(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters[] | cdktn.IResolvable) {
    this._compositeFilters.internalValue = value;
  }
  public resetCompositeFilters() {
    this._compositeFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeFiltersInput() {
    return this._compositeFilters.internalValue;
  }

  // composite_operator - computed: true, optional: true, required: false
  private _compositeOperator?: string; 
  public get compositeOperator() {
    return this.getStringAttribute('composite_operator');
  }
  public set compositeOperator(value: string) {
    this._compositeOperator = value;
  }
  public resetCompositeOperator() {
    this._compositeOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeOperatorInput() {
    return this._compositeOperator;
  }
}
export interface SecurityhubAutomationRuleV2Criteria {
  /**
  * The filtering conditions that align with OCSF standards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#ocsf_finding_criteria SecurityhubAutomationRuleV2#ocsf_finding_criteria}
  */
  readonly ocsfFindingCriteria?: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria;
}

export function securityhubAutomationRuleV2CriteriaToTerraform(struct?: SecurityhubAutomationRuleV2Criteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ocsf_finding_criteria: securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaToTerraform(struct!.ocsfFindingCriteria),
  }
}


export function securityhubAutomationRuleV2CriteriaToHclTerraform(struct?: SecurityhubAutomationRuleV2Criteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ocsf_finding_criteria: {
      value: securityhubAutomationRuleV2CriteriaOcsfFindingCriteriaToHclTerraform(struct!.ocsfFindingCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubAutomationRuleV2CriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubAutomationRuleV2Criteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ocsfFindingCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocsfFindingCriteria = this._ocsfFindingCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubAutomationRuleV2Criteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ocsfFindingCriteria.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ocsfFindingCriteria.internalValue = value.ocsfFindingCriteria;
    }
  }

  // ocsf_finding_criteria - computed: true, optional: true, required: false
  private _ocsfFindingCriteria = new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference(this, "ocsf_finding_criteria");
  public get ocsfFindingCriteria() {
    return this._ocsfFindingCriteria;
  }
  public putOcsfFindingCriteria(value: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria) {
    this._ocsfFindingCriteria.internalValue = value;
  }
  public resetOcsfFindingCriteria() {
    this._ocsfFindingCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocsfFindingCriteriaInput() {
    return this._ocsfFindingCriteria.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2 awscc_securityhub_automation_rule_v2}
*/
export class SecurityhubAutomationRuleV2 extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_securityhub_automation_rule_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityhubAutomationRuleV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubAutomationRuleV2 to import
  * @param importFromId The id of the existing SecurityhubAutomationRuleV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubAutomationRuleV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_automation_rule_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_automation_rule_v2 awscc_securityhub_automation_rule_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubAutomationRuleV2Config
  */
  public constructor(scope: Construct, id: string, config: SecurityhubAutomationRuleV2Config) {
    super(scope, id, {
      terraformResourceType: 'awscc_securityhub_automation_rule_v2',
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
    this._actions.internalValue = config.actions;
    this._criteria.internalValue = config.criteria;
    this._description = config.description;
    this._ruleName = config.ruleName;
    this._ruleOrder = config.ruleOrder;
    this._ruleStatus = config.ruleStatus;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: false, required: true
  private _actions = new SecurityhubAutomationRuleV2ActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: SecurityhubAutomationRuleV2Actions[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria = new SecurityhubAutomationRuleV2CriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: SecurityhubAutomationRuleV2Criteria) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_order - computed: false, optional: false, required: true
  private _ruleOrder?: number; 
  public get ruleOrder() {
    return this.getNumberAttribute('rule_order');
  }
  public set ruleOrder(value: number) {
    this._ruleOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOrderInput() {
    return this._ruleOrder;
  }

  // rule_status - computed: true, optional: true, required: false
  private _ruleStatus?: string; 
  public get ruleStatus() {
    return this.getStringAttribute('rule_status');
  }
  public set ruleStatus(value: string) {
    this._ruleStatus = value;
  }
  public resetRuleStatus() {
    this._ruleStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleStatusInput() {
    return this._ruleStatus;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktn.listMapper(securityhubAutomationRuleV2ActionsToTerraform, false)(this._actions.internalValue),
      criteria: securityhubAutomationRuleV2CriteriaToTerraform(this._criteria.internalValue),
      description: cdktn.stringToTerraform(this._description),
      rule_name: cdktn.stringToTerraform(this._ruleName),
      rule_order: cdktn.numberToTerraform(this._ruleOrder),
      rule_status: cdktn.stringToTerraform(this._ruleStatus),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktn.listMapperHcl(securityhubAutomationRuleV2ActionsToHclTerraform, false)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityhubAutomationRuleV2ActionsList",
      },
      criteria: {
        value: securityhubAutomationRuleV2CriteriaToHclTerraform(this._criteria.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityhubAutomationRuleV2Criteria",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktn.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_order: {
        value: cdktn.numberToHclTerraform(this._ruleOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_status: {
        value: cdktn.stringToHclTerraform(this._ruleStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
