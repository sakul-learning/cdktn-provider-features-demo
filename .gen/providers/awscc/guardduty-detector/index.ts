// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GuarddutyDetectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#data_sources GuarddutyDetector#data_sources}
  */
  readonly dataSources?: GuarddutyDetectorDataSources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}
  */
  readonly enable: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#features GuarddutyDetector#features}
  */
  readonly features?: GuarddutyDetectorFeatures[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}
  */
  readonly findingPublishingFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#tags GuarddutyDetector#tags}
  */
  readonly tags?: GuarddutyDetectorTags[] | cdktn.IResolvable;
}
export interface GuarddutyDetectorDataSourcesKubernetesAuditLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}
  */
  readonly enable?: boolean | cdktn.IResolvable;
}

export function guarddutyDetectorDataSourcesKubernetesAuditLogsToTerraform(struct?: GuarddutyDetectorDataSourcesKubernetesAuditLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable: cdktn.booleanToTerraform(struct!.enable),
  }
}


export function guarddutyDetectorDataSourcesKubernetesAuditLogsToHclTerraform(struct?: GuarddutyDetectorDataSourcesKubernetesAuditLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable: {
      value: cdktn.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GuarddutyDetectorDataSourcesKubernetesAuditLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuarddutyDetectorDataSourcesKubernetesAuditLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktn.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktn.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface GuarddutyDetectorDataSourcesKubernetes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#audit_logs GuarddutyDetector#audit_logs}
  */
  readonly auditLogs?: GuarddutyDetectorDataSourcesKubernetesAuditLogs;
}

export function guarddutyDetectorDataSourcesKubernetesToTerraform(struct?: GuarddutyDetectorDataSourcesKubernetes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audit_logs: guarddutyDetectorDataSourcesKubernetesAuditLogsToTerraform(struct!.auditLogs),
  }
}


export function guarddutyDetectorDataSourcesKubernetesToHclTerraform(struct?: GuarddutyDetectorDataSourcesKubernetes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audit_logs: {
      value: guarddutyDetectorDataSourcesKubernetesAuditLogsToHclTerraform(struct!.auditLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "GuarddutyDetectorDataSourcesKubernetesAuditLogs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuarddutyDetectorDataSourcesKubernetesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GuarddutyDetectorDataSourcesKubernetes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLogs = this._auditLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuarddutyDetectorDataSourcesKubernetes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auditLogs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auditLogs.internalValue = value.auditLogs;
    }
  }

  // audit_logs - computed: true, optional: true, required: false
  private _auditLogs = new GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference(this, "audit_logs");
  public get auditLogs() {
    return this._auditLogs;
  }
  public putAuditLogs(value: GuarddutyDetectorDataSourcesKubernetesAuditLogs) {
    this._auditLogs.internalValue = value;
  }
  public resetAuditLogs() {
    this._auditLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogsInput() {
    return this._auditLogs.internalValue;
  }
}
export interface GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#ebs_volumes GuarddutyDetector#ebs_volumes}
  */
  readonly ebsVolumes?: boolean | cdktn.IResolvable;
}

export function guarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsToTerraform(struct?: GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ebs_volumes: cdktn.booleanToTerraform(struct!.ebsVolumes),
  }
}


export function guarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsToHclTerraform(struct?: GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ebs_volumes: {
      value: cdktn.booleanToHclTerraform(struct!.ebsVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ebsVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumes = this._ebsVolumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ebsVolumes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ebsVolumes = value.ebsVolumes;
    }
  }

  // ebs_volumes - computed: true, optional: true, required: false
  private _ebsVolumes?: boolean | cdktn.IResolvable; 
  public get ebsVolumes() {
    return this.getBooleanAttribute('ebs_volumes');
  }
  public set ebsVolumes(value: boolean | cdktn.IResolvable) {
    this._ebsVolumes = value;
  }
  public resetEbsVolumes() {
    this._ebsVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumesInput() {
    return this._ebsVolumes;
  }
}
export interface GuarddutyDetectorDataSourcesMalwareProtection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#scan_ec_2_instance_with_findings GuarddutyDetector#scan_ec_2_instance_with_findings}
  */
  readonly scanEc2InstanceWithFindings?: GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings;
}

export function guarddutyDetectorDataSourcesMalwareProtectionToTerraform(struct?: GuarddutyDetectorDataSourcesMalwareProtection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    scan_ec_2_instance_with_findings: guarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsToTerraform(struct!.scanEc2InstanceWithFindings),
  }
}


export function guarddutyDetectorDataSourcesMalwareProtectionToHclTerraform(struct?: GuarddutyDetectorDataSourcesMalwareProtection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    scan_ec_2_instance_with_findings: {
      value: guarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsToHclTerraform(struct!.scanEc2InstanceWithFindings),
      isBlock: true,
      type: "struct",
      storageClassType: "GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuarddutyDetectorDataSourcesMalwareProtectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GuarddutyDetectorDataSourcesMalwareProtection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scanEc2InstanceWithFindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanEc2InstanceWithFindings = this._scanEc2InstanceWithFindings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuarddutyDetectorDataSourcesMalwareProtection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scanEc2InstanceWithFindings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scanEc2InstanceWithFindings.internalValue = value.scanEc2InstanceWithFindings;
    }
  }

  // scan_ec_2_instance_with_findings - computed: true, optional: true, required: false
  private _scanEc2InstanceWithFindings = new GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference(this, "scan_ec_2_instance_with_findings");
  public get scanEc2InstanceWithFindings() {
    return this._scanEc2InstanceWithFindings;
  }
  public putScanEc2InstanceWithFindings(value: GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings) {
    this._scanEc2InstanceWithFindings.internalValue = value;
  }
  public resetScanEc2InstanceWithFindings() {
    this._scanEc2InstanceWithFindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanEc2InstanceWithFindingsInput() {
    return this._scanEc2InstanceWithFindings.internalValue;
  }
}
export interface GuarddutyDetectorDataSourcesS3Logs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}
  */
  readonly enable?: boolean | cdktn.IResolvable;
}

export function guarddutyDetectorDataSourcesS3LogsToTerraform(struct?: GuarddutyDetectorDataSourcesS3Logs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable: cdktn.booleanToTerraform(struct!.enable),
  }
}


export function guarddutyDetectorDataSourcesS3LogsToHclTerraform(struct?: GuarddutyDetectorDataSourcesS3Logs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable: {
      value: cdktn.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuarddutyDetectorDataSourcesS3LogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GuarddutyDetectorDataSourcesS3Logs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuarddutyDetectorDataSourcesS3Logs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktn.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktn.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface GuarddutyDetectorDataSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#kubernetes GuarddutyDetector#kubernetes}
  */
  readonly kubernetes?: GuarddutyDetectorDataSourcesKubernetes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#malware_protection GuarddutyDetector#malware_protection}
  */
  readonly malwareProtection?: GuarddutyDetectorDataSourcesMalwareProtection;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#s3_logs GuarddutyDetector#s3_logs}
  */
  readonly s3Logs?: GuarddutyDetectorDataSourcesS3Logs;
}

export function guarddutyDetectorDataSourcesToTerraform(struct?: GuarddutyDetectorDataSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kubernetes: guarddutyDetectorDataSourcesKubernetesToTerraform(struct!.kubernetes),
    malware_protection: guarddutyDetectorDataSourcesMalwareProtectionToTerraform(struct!.malwareProtection),
    s3_logs: guarddutyDetectorDataSourcesS3LogsToTerraform(struct!.s3Logs),
  }
}


export function guarddutyDetectorDataSourcesToHclTerraform(struct?: GuarddutyDetectorDataSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kubernetes: {
      value: guarddutyDetectorDataSourcesKubernetesToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "struct",
      storageClassType: "GuarddutyDetectorDataSourcesKubernetes",
    },
    malware_protection: {
      value: guarddutyDetectorDataSourcesMalwareProtectionToHclTerraform(struct!.malwareProtection),
      isBlock: true,
      type: "struct",
      storageClassType: "GuarddutyDetectorDataSourcesMalwareProtection",
    },
    s3_logs: {
      value: guarddutyDetectorDataSourcesS3LogsToHclTerraform(struct!.s3Logs),
      isBlock: true,
      type: "struct",
      storageClassType: "GuarddutyDetectorDataSourcesS3Logs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuarddutyDetectorDataSourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GuarddutyDetectorDataSources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    if (this._malwareProtection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareProtection = this._malwareProtection?.internalValue;
    }
    if (this._s3Logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Logs = this._s3Logs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuarddutyDetectorDataSources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kubernetes.internalValue = undefined;
      this._malwareProtection.internalValue = undefined;
      this._s3Logs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kubernetes.internalValue = value.kubernetes;
      this._malwareProtection.internalValue = value.malwareProtection;
      this._s3Logs.internalValue = value.s3Logs;
    }
  }

  // kubernetes - computed: true, optional: true, required: false
  private _kubernetes = new GuarddutyDetectorDataSourcesKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: GuarddutyDetectorDataSourcesKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // malware_protection - computed: true, optional: true, required: false
  private _malwareProtection = new GuarddutyDetectorDataSourcesMalwareProtectionOutputReference(this, "malware_protection");
  public get malwareProtection() {
    return this._malwareProtection;
  }
  public putMalwareProtection(value: GuarddutyDetectorDataSourcesMalwareProtection) {
    this._malwareProtection.internalValue = value;
  }
  public resetMalwareProtection() {
    this._malwareProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareProtectionInput() {
    return this._malwareProtection.internalValue;
  }

  // s3_logs - computed: true, optional: true, required: false
  private _s3Logs = new GuarddutyDetectorDataSourcesS3LogsOutputReference(this, "s3_logs");
  public get s3Logs() {
    return this._s3Logs;
  }
  public putS3Logs(value: GuarddutyDetectorDataSourcesS3Logs) {
    this._s3Logs.internalValue = value;
  }
  public resetS3Logs() {
    this._s3Logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LogsInput() {
    return this._s3Logs.internalValue;
  }
}
export interface GuarddutyDetectorFeaturesAdditionalConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#name GuarddutyDetector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#status GuarddutyDetector#status}
  */
  readonly status?: string;
}

export function guarddutyDetectorFeaturesAdditionalConfigurationToTerraform(struct?: GuarddutyDetectorFeaturesAdditionalConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function guarddutyDetectorFeaturesAdditionalConfigurationToHclTerraform(struct?: GuarddutyDetectorFeaturesAdditionalConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GuarddutyDetectorFeaturesAdditionalConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuarddutyDetectorFeaturesAdditionalConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._status = value.status;
    }
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class GuarddutyDetectorFeaturesAdditionalConfigurationList extends cdktn.ComplexList {
  public internalValue? : GuarddutyDetectorFeaturesAdditionalConfiguration[] | cdktn.IResolvable

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
  public get(index: number): GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference {
    return new GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GuarddutyDetectorFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#additional_configuration GuarddutyDetector#additional_configuration}
  */
  readonly additionalConfiguration?: GuarddutyDetectorFeaturesAdditionalConfiguration[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#name GuarddutyDetector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#status GuarddutyDetector#status}
  */
  readonly status?: string;
}

export function guarddutyDetectorFeaturesToTerraform(struct?: GuarddutyDetectorFeatures | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_configuration: cdktn.listMapper(guarddutyDetectorFeaturesAdditionalConfigurationToTerraform, false)(struct!.additionalConfiguration),
    name: cdktn.stringToTerraform(struct!.name),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function guarddutyDetectorFeaturesToHclTerraform(struct?: GuarddutyDetectorFeatures | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_configuration: {
      value: cdktn.listMapperHcl(guarddutyDetectorFeaturesAdditionalConfigurationToHclTerraform, false)(struct!.additionalConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "GuarddutyDetectorFeaturesAdditionalConfigurationList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuarddutyDetectorFeaturesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GuarddutyDetectorFeatures | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalConfiguration = this._additionalConfiguration?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuarddutyDetectorFeatures | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalConfiguration.internalValue = undefined;
      this._name = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalConfiguration.internalValue = value.additionalConfiguration;
      this._name = value.name;
      this._status = value.status;
    }
  }

  // additional_configuration - computed: true, optional: true, required: false
  private _additionalConfiguration = new GuarddutyDetectorFeaturesAdditionalConfigurationList(this, "additional_configuration", false);
  public get additionalConfiguration() {
    return this._additionalConfiguration;
  }
  public putAdditionalConfiguration(value: GuarddutyDetectorFeaturesAdditionalConfiguration[] | cdktn.IResolvable) {
    this._additionalConfiguration.internalValue = value;
  }
  public resetAdditionalConfiguration() {
    this._additionalConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalConfigurationInput() {
    return this._additionalConfiguration.internalValue;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class GuarddutyDetectorFeaturesList extends cdktn.ComplexList {
  public internalValue? : GuarddutyDetectorFeatures[] | cdktn.IResolvable

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
  public get(index: number): GuarddutyDetectorFeaturesOutputReference {
    return new GuarddutyDetectorFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GuarddutyDetectorTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#key GuarddutyDetector#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#value GuarddutyDetector#value}
  */
  readonly value?: string;
}

export function guarddutyDetectorTagsToTerraform(struct?: GuarddutyDetectorTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function guarddutyDetectorTagsToHclTerraform(struct?: GuarddutyDetectorTags | cdktn.IResolvable): any {
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

export class GuarddutyDetectorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GuarddutyDetectorTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GuarddutyDetectorTags | cdktn.IResolvable | undefined) {
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

export class GuarddutyDetectorTagsList extends cdktn.ComplexList {
  public internalValue? : GuarddutyDetectorTags[] | cdktn.IResolvable

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
  public get(index: number): GuarddutyDetectorTagsOutputReference {
    return new GuarddutyDetectorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector awscc_guardduty_detector}
*/
export class GuarddutyDetector extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_guardduty_detector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GuarddutyDetector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GuarddutyDetector to import
  * @param importFromId The id of the existing GuarddutyDetector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GuarddutyDetector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_guardduty_detector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/guardduty_detector awscc_guardduty_detector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuarddutyDetectorConfig
  */
  public constructor(scope: Construct, id: string, config: GuarddutyDetectorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_guardduty_detector',
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
    this._dataSources.internalValue = config.dataSources;
    this._enable = config.enable;
    this._features.internalValue = config.features;
    this._findingPublishingFrequency = config.findingPublishingFrequency;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_sources - computed: true, optional: true, required: false
  private _dataSources = new GuarddutyDetectorDataSourcesOutputReference(this, "data_sources");
  public get dataSources() {
    return this._dataSources;
  }
  public putDataSources(value: GuarddutyDetectorDataSources) {
    this._dataSources.internalValue = value;
  }
  public resetDataSources() {
    this._dataSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourcesInput() {
    return this._dataSources.internalValue;
  }

  // detector_id - computed: true, optional: false, required: false
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktn.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktn.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // features - computed: true, optional: true, required: false
  private _features = new GuarddutyDetectorFeaturesList(this, "features", false);
  public get features() {
    return this._features;
  }
  public putFeatures(value: GuarddutyDetectorFeatures[] | cdktn.IResolvable) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // finding_publishing_frequency - computed: true, optional: true, required: false
  private _findingPublishingFrequency?: string; 
  public get findingPublishingFrequency() {
    return this.getStringAttribute('finding_publishing_frequency');
  }
  public set findingPublishingFrequency(value: string) {
    this._findingPublishingFrequency = value;
  }
  public resetFindingPublishingFrequency() {
    this._findingPublishingFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingPublishingFrequencyInput() {
    return this._findingPublishingFrequency;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new GuarddutyDetectorTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: GuarddutyDetectorTags[] | cdktn.IResolvable) {
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
      data_sources: guarddutyDetectorDataSourcesToTerraform(this._dataSources.internalValue),
      enable: cdktn.booleanToTerraform(this._enable),
      features: cdktn.listMapper(guarddutyDetectorFeaturesToTerraform, false)(this._features.internalValue),
      finding_publishing_frequency: cdktn.stringToTerraform(this._findingPublishingFrequency),
      tags: cdktn.listMapper(guarddutyDetectorTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_sources: {
        value: guarddutyDetectorDataSourcesToHclTerraform(this._dataSources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GuarddutyDetectorDataSources",
      },
      enable: {
        value: cdktn.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      features: {
        value: cdktn.listMapperHcl(guarddutyDetectorFeaturesToHclTerraform, false)(this._features.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GuarddutyDetectorFeaturesList",
      },
      finding_publishing_frequency: {
        value: cdktn.stringToHclTerraform(this._findingPublishingFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(guarddutyDetectorTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GuarddutyDetectorTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
